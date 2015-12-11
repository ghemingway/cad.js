/* G. Hemingway Copyright @2015
 * Data loader - Specialized for each type of data (e.g. JSON, TYSON, etc.)
 */
"use strict";


import Assembly            from './assembly';
import Product             from './product';
import Shape               from './shape';
import Shell               from './shell';
import Annotation          from './annotation';

/********************************* Helper Functions ********************************/

export default class DataLoader extends THREE.EventDispatcher {
    constructor(config) {
        super();
        this._queue = [];       // The queue of requests to load
        this._loading = [];     // List of active loading jobs
        this._maxWorkers = config.maxWorkers ? config.maxWorkers : 4;
        this._freeWorkers = [];

        var self = this;
        this._workers = [];     // List of workers
        while (this._workers.length < this._maxWorkers) {
            var worker = new Worker(config.workerPath);
            worker.addEventListener('message', function (event) {
                self.workerMessage(event);
            });
            this._freeWorkers.push(this._workers.length);
            this._workers.push(worker);
        }
    }

    static parseBoundingBox(str) {
        var vals = str;
        if (typeof str === "string") vals = DataLoader.parseFloatVec(str, 6);
        return new THREE.Box3(new THREE.Vector3(vals[0], vals[1], vals[2]), new THREE.Vector3(vals[3], vals[4], vals[5]));
    }

    static parseXform(str, colOriented) {
        if (str == null) return null;
        var arr = str;
        if (typeof str === "string") {
            // Identity transform compression
            if (str === "I") {
                arr = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            } else {
                arr = DataLoader.parseFloatVec(str);
            }
        }
        if (arr.length !== 16) {
            throw new Error("Invalid Xform found");
        }
        if (colOriented) {
            return new THREE.Matrix4().set(
                arr[0], arr[4], arr[8], arr[12],
                arr[1], arr[5], arr[9], arr[13],
                arr[2], arr[6], arr[10], arr[14],
                arr[3], arr[7], arr[11], arr[15]
            );
        } else {
            return new THREE.Matrix4().set(
                arr[0], arr[1], arr[2], arr[3],
                arr[4], arr[5], arr[6], arr[7],
                arr[8], arr[9], arr[10], arr[11],
                arr[12], arr[13], arr[14], arr[15]
            );
        }
    }

    static parseColor(hex) {
        var cval = parseInt(hex, 16);
        return (new THREE.Color()).setRGB(
            ((cval >> 16) & 0xff) / 255,
            ((cval >> 8) & 0xff) / 255,
            ((cval >> 0) & 0xff) / 255
        );
    }

    static parseUnit(str) {
        var unit = str.split(" ")[0];
        var factor = parseFloat(str.split(" ")[1]);
        if (unit !== "mm") {
            console.log("Found non-MM unit: " + unit);
        }
        return factor;
    }

    static parseFloatVec(str, count) {
        var vals = str.split(" ");
        if (count != null && vals.length != count) {
            throw new Error(
                "parse_float_vec: unexpected number of elements expecting " + count
                + " have " + vals.length);
        }
        count = vals.length;
        var ret = new Array(count);
        for (var i = 0; i < count; i++) {
            var v = parseFloat(vals[i]);
            if (!isFinite(v)) throw new Error("number is not finite");
            ret[i] = v;
        }
        return ret;
    }

    /************** DataLoader Class Functions ****************************/

    load(req, callback) {
        this.addRequest(req, function(model) {
            console.log('DataLoader.load callback');
            console.log(model);
            callback(model);
        });
    }

    addRequest(req, callback) {
        req.callback = callback;
        // Push onto the queue and send out a message
        this._queue.push(req);
        this.dispatchEvent({type: 'addRequest', path: req.path });
    }

    sortQueue() {
        // Let's sort the req array
        //        this._queue.sort(function(a, b) {
        //            if (a.shellSize >= b.shellSize) return 1;
        //            else return -1;
        //        });
        return this._queue.shift();
        //        console.log("DataLoader.sortQueue: " + JSON.stringify(_.pick(req, ["shellSize"] )));
        //        return req;
    }

    queueLength(onlyLoad) {
        var numWorking = this._maxWorkers - this._freeWorkers.length;
        if (onlyLoad) {
            return numWorking;
        } else {
            return this._queue.length + numWorking;
        }
    }

    runLoadQueue() {
        // Keep issuing loads until no workers left
        while (this._queue.length > 0 && this._freeWorkers.length > 0) {
            var workerID = this._freeWorkers.shift();
            var req = this.sortQueue();
            req.workerID = workerID;
            this._loading[workerID] = req;
            this.initRequest(req);
        }
    }

    workerMessage(event) {
        var req, shell;
        console.log("Worker Message: " + event.data.type);
        // Find the request this message corresponds to
        if (_.indexOf(["rootLoad", "shellLoad", "annotationLoad", "loadError"], event.data.type) != -1) {
            req = this._loading[event.data.workerID];
        }
        // Put worker back into the queue - if it is the time
        if (_.indexOf(["rootLoad", "workerFinish", "loadError"], event.data.type) != -1) {
            this._loading[event.data.workerID] = undefined;
            this._freeWorkers.push(event.data.workerID);
            this.runLoadQueue();
        }
        var data;
        switch (event.data.type) {
            case "rootLoad":
                // Handle the assembly
                this.buildAssemblyJSON(event.data.data, req);
                break;
            case "annotationLoad":
                data = JSON.parse(event.data.data);
                req.annotation.addGeometry(data);
                this.dispatchEvent({type: "shellLoad", file: event.data.file});
                break;
            case "shellLoad":
                shell = this._shells[event.data.id];
                data = event.data.data;
                // Remove the reference to the shell
                delete this._shells[event.data.id];
                shell.addGeometry(data.position, data.normals, data.colors);
                this.dispatchEvent({type: "shellLoad", file: event.data.file});
                break;
            case "workerFinish":
                this.dispatchEvent({type: "workerFinish", file: event.data.file});
                break;
            case "parseComplete":
            case "loadProgress":
            case "loadComplete":
                this.dispatchEvent(event.data);
                break;
            case "loadError":
                if (req.callback) req.callback({
                    error: "loadError",
                    status: event.data.status,
                    file: req.url
                });
                break;
        }
    }

    initRequest(req) {
        console.log('InitRequest: ' + req.path);
        // Fetch the worker to use
        var worker = this._workers[req.workerID];
        // Send the request to the worker
        var data = {
            url: req.baseURL + '/' + req.path,
            workerID: req.workerID,
            type: req.type
        };
        if (data.type === "shell") data.shellSize = req.shellSize;
        worker.postMessage(data);
    }

    buildAssemblyJSON(jsonText, req) {
        var doc = JSON.parse(jsonText);
        var rootID = doc.root;
        var defaultColor = DataLoader.parseColor("7d7d7d");
        var assembly = new Assembly(rootID, defaultColor, this);
        // Process the rest of the index JSON - get the product with the root ID
        var rootProduct = this.buildProductJSON(req, doc, assembly, rootID, true);
        assembly.setRootProduct(rootProduct);
        // Add the assembly to the scene
        //console.log(this._viewer);
        //this._viewer.add3DObject(rootProduct.getObject3D(), 'geometry');
        //this._viewer.add3DObject(rootProduct.getOverlay3D(), 'overlay');
        //this._viewer.add3DObject(rootProduct.getAnnotation3D(), 'annotation');
        var batchExtension = '.json';
        if (doc.useTyson) {
            batchExtension = '.tyson';
        }
        // Do we have batches
        if (doc.batches && doc.batches > 0) {
            for (var i = 0; i < doc.batches; i++) {
                this.addRequest({
                    url: req.base + "batch" + i + batchExtension,
                    validateType: "batch"
                });
            }
        }
        req.callback(undefined, assembly);
    }

    buildProductJSON(req, doc, assembly, id, isRoot) {
        // Create the product
        var self = this;
        var productJSON = _.findWhere(doc.products, {id: id});
        // Have we already seen this product
        if (!assembly.isChild(id)) {
            var product = new Product(id, assembly, productJSON.name, productJSON.step, isRoot);
            console.log(product);
            // Load child shapes first - MUST BE BEFORE CHILD PRODUCTS
            var identityTransform = (new THREE.Matrix4()).identity();
            _.each(productJSON.shapes, function (shapeID) {
                var shape = self.buildShapeJSON(req, doc, assembly, shapeID, undefined, identityTransform, isRoot);
                product.addShape(shape);
            });
            // Load child products
            _.each(productJSON.children, function (childID) {
                var child = self.buildProductJSON(req, doc, assembly, childID, false);
                product.addChild(child);
            });
            return product;
        }
        // Otherwise, just return the existing product
        return assembly.getChild(id);
    }

    buildShapeJSON(req, doc, assembly, id, parent, transform, isRoot) {
        // We are really only looking up stuff when non-root
        if (!isRoot) return assembly.getChild(id);
        // Ok, now let's really build some stuff
        var self = this;
        var shapeJSON = _.findWhere(doc.shapes, {id: id});
        var unit = shapeJSON.unit ? shapeJSON.unit : "unit 0.01";
        var shape = new Shape(id, assembly, parent, transform, unit, isRoot);
        // Load child shells
        _.each(shapeJSON.shells, function (shellID) {
            var shell = self.buildShellJSON(req, doc, shellID, assembly, shape);
            shape.addShell(shell);
        });
        // Load Child annotations
        _.each(shapeJSON.annotations, function (annotationID) {
            var annotation = self.buildAnnotationJSON(req, doc, annotationID, assembly, shape);
            shape.addAnnotation(annotation);
        });
        // Load child shapes
        _.each(shapeJSON.children, function (childJSON) {
            // Setup the child's transform
            var localTransform = DataLoader.parseXform(childJSON.xform, true);
            // Build the child
            var child = self.buildShapeJSON(req, doc, assembly, childJSON.ref, shape, localTransform, isRoot);
            shape.addChild(child);
        });
        return shape;
    }

    buildAnnotationJSON(req, doc, id, assembly, parent) {
        var alreadyLoaded = assembly.isChild(id);
        var annoJSON = _.findWhere(doc.annotations, {id: id});
        // Do we have to load the shell
        if (annoJSON.href) {
            var anno = new Annotation(id, assembly, parent);
            // Have we already loaded this annotation - if not, request the shell be loaded?
            if (!alreadyLoaded) {
                this.addRequest({
                    url: req.base + annoJSON.href,
                    validateType: "annotation",
                    annotation: anno
                });
            }
            return anno;
        } else {
            console.log("DataLoader.buildAnnotationJSON - Online - Not yet implemented");
            return undefined;
        }
    }

    buildShellJSON(req, doc, id, assembly, parent) {
        var alreadyLoaded = assembly.isChild(id);
        var shellJSON = _.findWhere(doc.shells, {id: id});
        // Do we have to load the shell
        if (shellJSON.href) {
            var color = DataLoader.parseColor("7d7d7d");
            var boundingBox = DataLoader.parseBoundingBox(shellJSON.bbox);
            var shell = new Shell(id, assembly, parent, shellJSON.size, color, boundingBox);
            // Have we already loaded this Shell - if not, request the shell be loaded?
            if (!alreadyLoaded) {
                // Push the shell for later completion
                this._shells[id] = shell;
                //                console.log(this._shells);
                if (!doc.batches || doc.batches === 0) {
                    this.addRequest({
                        url: req.base + shellJSON.href,
                        validateType: "shell"
                    });
                }
            }
            return shell;
        } else {
            console.log("DataLoader.buildShellJSON - Online - Not yet implemented");
            return undefined;
        }
    }
};