/* G. Hemingway Copyright @2014
 * Data loader - Specialized for each type of data (e.g. XML or JSON)
 */

"use strict";


/********************************* Helper Functions ********************************/

define(["THREE", "underscore", "assembly", "product", "shape", "annotation", "shell"], function(THREE, _, Assembly, Product, Shape, Annotation, Shell) {
    function DataLoader (parent, viewer, config) {
        this._parent = parent;
        this._viewer = viewer;
        this._queue = [];       // The queue of requests to load
        this._loading = [];     // List of active loading jobs
        this._maxWorkers = config.maxWorkers ? config.maxWorkers : 4;
        this._freeWorkers = [];
        this._shells = {};

        var self = this;
        this._workers = [];     // List of workers
        while (this._workers.length < this._maxWorkers) {
            var worker = new Worker("javascript/webworker.js");
            worker.addEventListener("message", function(event) {
                self.workerMessage(event);
            });
            this._freeWorkers.push(this._workers.length);
            this._workers.push(worker);
        }
    }

    DataLoader.parseBoundingBox = function(str) {
        var vals = str;
        if (typeof str === "string") vals = DataLoader.parseFloatVec(str, 6);
        return new THREE.Box3(new THREE.Vector3(vals[0], vals[1], vals[2]), new THREE.Vector3(vals[3], vals[4], vals[5]));
    };

    DataLoader.parseXform = function(str, colOriented) {
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
            return new THREE.Matrix4(
                arr[0], arr[4], arr[8],  arr[12],
                arr[1], arr[5], arr[9],  arr[13],
                arr[2], arr[6], arr[10], arr[14],
                arr[3], arr[7], arr[11], arr[15]
            );
        } else {
            return new THREE.Matrix4(
                arr[0],  arr[1],  arr[2],  arr[3],
                arr[4],  arr[5],  arr[6],  arr[7],
                arr[8],  arr[9],  arr[10], arr[11],
                arr[12], arr[13], arr[14], arr[15]
            );
        }
    };

    DataLoader.parseColor = function(hex) {
        var cval = parseInt(hex, 16);
        return (new THREE.Color()).setRGB(
            ((cval >>16) & 0xff) / 255,
            ((cval >>8) & 0xff) / 255,
            ((cval >>0) & 0xff) / 255
        );
    };

    DataLoader.parseUnit = function(str) {
        var unit = str.split(" ")[0];
        var factor = parseFloat(str.split(" ")[1]);
        if (unit !== "mm") {
            console.log("Found non-MM unit: " + unit);
        }
        return factor;
    };

    DataLoader.parseFloatVec = function(str, count) {
        var vals = str.split(" ");
        if (count != null && vals.length != count) {
            throw new Error (
                "parse_float_vec: unexpected number of elements expecting "+count
                    + " have " + vals.length);
        }
        count = vals.length;
        var ret = new Array(count);
        for (var i=0; i<count; i++) {
            var v = parseFloat(vals[i]);
            if (!isFinite(v)) throw new Error ("number is not finite");
            ret[i] = v;
        }
        return ret;
    };

    DataLoader.getArrayFromAttribute = function(el, name) {
        // Get the XML attribute, from an element and split it an array if empty or missing, return empty array.
        var val = el.getAttribute(name);
        if (!val) return [];
        return val.split(" ");
    };

    /************** DataLoader Class Functions ****************************/

    DataLoader.prototype.load = function(url, validateType, callback) {
        var loadErrorCheck = function(error, assembly) {
            if (!error) {
                callback(undefined, assembly);
            }
            else {
                callback(error);
            }
        };
        var req = {
            url: url,
            validateType: validateType,
            callback: loadErrorCheck
        };
        // Need to try to get index.json then index.xml then pop error message
        this.resolveUrl(req, "index.json");
        this.addRequest(req);
        this.runLoadQueue();
    };

    // Set the base URL for future requests from the given URL
    DataLoader.prototype.setRequestBase = function(req) {
        var pattern = new RegExp("^(.*)/.*$");
        var m = pattern.exec(req.url);
        if (!m) {
            return;
        }
        var base = m[1];
        if (base == ".") {
            return;
        }
        if (!base.match(/\/$/)) {
            base += "/";
        }
        if (!req.base) req.base = base;
        else if (base.match(/^\//)) req.base = base;
        else if (base.length > 0) req.base += base + "/";
        else req.base = "";
    };

    DataLoader.prototype.resolveUrl = function(req, defaultURL) {
        if (!req.base) {
            this.setRequestBase(req);
        }
        if (req.url.match(/\/$/)) {
            req.url += defaultURL;
        }
        // Determine content type
        var extension = req.url.split('.').pop();
        switch (extension) {
            case "xml": req.contentType = "application/xml"; break;
            case "json": req.contentType = "application/json"; break;
            case "tyson": req.contentType = "application/tyson"; break;
            default:
                console.log("DataLoader.resolveUrl error - invalid content type: " + extension);
        }
        if (!req.url.base || req.url.match(/^\w+:/) || req.url.match(/^\//)) {
            return req.url;
        }
        return req.url.base + req.url;
    };

    DataLoader.prototype.addRequest = function(req) {
        // Push onto the queue and send out a message
        this.resolveUrl(req);
        this._queue.push(req);
        var parts = req.url.split("/");
        this.dispatchEvent({ type: "addRequest", file: parts[parts.length - 1] });
    };

    DataLoader.prototype.sortQueue = function() {
        // Let's sort the req array
//        this._queue.sort(function(a, b) {
//            if (a.shellSize >= b.shellSize) return 1;
//            else return -1;
//        });
        return this._queue.shift();
//        console.log("DataLoader.sortQueue: " + JSON.stringify(_.pick(req, ["shellSize"] )));
//        return req;
    };

    DataLoader.prototype.queueLength = function(onlyLoad) {
        var numWorking = this._maxWorkers - this._freeWorkers.length;
        if (onlyLoad) {
            return numWorking;
        } else {
            return this._queue.length + numWorking;
        }
    };

    DataLoader.prototype.runLoadQueue = function() {
        // Keep issuing loads until no workers left
        while (this._queue.length > 0 && this._freeWorkers.length > 0) {
            var workerID = this._freeWorkers.shift();
            var req = this.sortQueue();
            req.workerID = workerID;
            this._loading[workerID] = req;
            this.initRequest(req);
        }
    };

    DataLoader.prototype.workerMessage = function(event) {
        var req, shell;
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
        var parser = new DOMParser();
        var xmlDoc, data;
        switch(event.data.type) {
            case "rootLoad":
                // Handle the assembly
                switch (req.contentType) {
                    case "application/xml":
                        this.buildAssemblyXML(event.data.data, req);
                        break;
                    case "application/json":
                        this.buildAssemblyJSON(event.data.data, req);
                        break;
                }
                break;
            case "annotationLoad":
                switch (req.contentType) {
                    case "application/xml":
                        xmlDoc = parser.parseFromString(event.data.data, "text/xml").documentElement;
                        data = {
                            id: xmlDoc.getAttribute("id"),
                            lines: this.parseAnnotationXML(xmlDoc)
                        };
                        break;
                    case "application/json":
                        data = JSON.parse(event.data.data);
                        break;
                }
                req.annotation.addGeometry(data);
                this.dispatchEvent({ type: "shellLoad", file: event.data.file });
                break;
            case "shellLoad":
                switch (req.contentType) {
                case "application/xml":
                    xmlDoc = parser.parseFromString(event.data.data, "text/xml").documentElement;
                    shell = req.shell;
                    data = this.parseShellXML(xmlDoc, req.shellSize);
                    break;
                case "application/json":
                case "application/tyson":
                case "application/octet-stream":
                    shell = this._shells[event.data.id];
                    data = event.data.data;
                    break;
                default:
                    console.log("Blahhlal - What the hell is this?");
                }
                // Remove the reference to the shell
                delete this._shells[event.data.id];
                shell.addGeometry(data.position, data.normals, data.colors);
                this.dispatchEvent({ type: "shellLoad", file: event.data.file });
                break;
            case "workerFinish":
                this.dispatchEvent({ type: "workerFinish", file: event.data.file });
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
    };

    DataLoader.prototype.initRequest = function(req) {
        // Fetch the worker to use
        var worker = this._workers[req.workerID];
        // Send the request to the worker
        var data = {
            url: req.url,
            workerID: req.workerID,
            type: req.validateType
        };
        if (data.type === "shell") data.shellSize = req.shellSize;
        worker.postMessage(data);
    };

    DataLoader.prototype.buildElementMapXML = function(xmlDoc) {
        var ids = {};
        for (var i=0; i < xmlDoc.childNodes.length; i++) {
            var ch = xmlDoc.childNodes[i];
            if (ch.nodeType != Node.ELEMENT_NODE) continue;
            var id = ch.getAttribute("id");
            if (id) ids[id] = ch;
        }
        return ids;
    };

    DataLoader.prototype.buildAssemblyXML = function(xmlText, req) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xmlText, "text/xml").documentElement;
        // Get the assembly properties we need
        var rootID = xmlDoc.getAttribute("root");
        var defaultColor = DataLoader.parseColor("7d7d7d");
        var assembly = new Assembly(rootID, defaultColor, this);
        // Process the rest of the index xml
        var map = this.buildElementMapXML(xmlDoc);
        var rootProduct = this.buildProductXML(req, map, assembly, rootID, true);
        assembly.setRootProduct(rootProduct);
        // Add the assembly to the scene
        this._viewer.add3DObject(rootProduct.getObject3D());
        this._viewer.add3DObject(rootProduct.getOverlay3D());
        req.callback(undefined, assembly);
    };

    DataLoader.prototype.buildProductXML = function(req, map, assembly, id, isRoot) {
        var self = this;
        var xmlElement = map[id];
        var step = xmlElement.getAttribute ("step");
        var name = xmlElement.getAttribute("name");

        // Have we already seen this product
        if (!assembly.isChild(id)) {
            var product = new Product(id, assembly, name, step, isRoot);
            // Load child shapes first - MUST BE BEFORE CHILD PRODUCTS
            var identityTransform = (new THREE.Matrix4()).identity();
            var shapes = DataLoader.getArrayFromAttribute(xmlElement, "shape");
            _.each(shapes, function(shapeID) {
                var shape = self.buildShapeXML(req, map, assembly, shapeID, undefined, identityTransform, isRoot);
                product.addShape(shape);
            });
            // Load child products
            var childProducts = DataLoader.getArrayFromAttribute(xmlElement, "children");
            _.each(childProducts, function(childID) {
                var child = self.buildProductXML(req, map, assembly, childID, false);
                product.addChild(child);
            });
            return product;
        }
        // Otherwise, just return the existing product
        return assembly.getChild(id);
    };

    DataLoader.prototype.buildShapeXML = function(req, map, assembly, id, parent, transform, isRoot) {
        // We are really only looking up stuff when non-root
        if (!isRoot) return assembly.getChild(id);
        // Ok, now let's really build some stuff
        var self = this;
        var xmlElement = map[id];
        var unit = xmlElement.getAttribute("unit");
        var shape = new Shape(id, assembly, parent, transform, unit, isRoot);
        // Load child shells
        var shells = DataLoader.getArrayFromAttribute(xmlElement, "shell");
        _.each(shells, function(shellID) {
            var shell = self.buildShellXML(req, map, shellID, assembly, shape);
            shape.addShell(shell);
        });
        // Load Child annotations
        var annotations = DataLoader.getArrayFromAttribute(xmlElement, "annotation");
        _.each(annotations, function(annotationID) {
            var annotation = self.buildAnnotationXML(req, map, assembly, annotationID, shape);
            shape.addAnnotation(annotation);
        });
        // Load child shapes
        var childShapes = xmlElement.getElementsByTagName("child");
        _.each(childShapes, function(childEl) {
            // Setup the child's transform
            var localTransform = DataLoader.parseXform(childEl.getAttribute("xform"), true);
            // Build the child
            var child = self.buildShapeXML(req, map, assembly, childEl.getAttribute("ref"), shape, localTransform, isRoot);
            shape.addChild(child);
        });
        return shape;
    };

    DataLoader.prototype.parseAnnotationXML = function(xmlDoc) {
        return _.map(xmlDoc.getElementsByTagName("polyline"), function(polyline) {
            var points = [];
            var ps = polyline.getElementsByTagName("p");
            _.forEach(ps, function(pt) {
                _.forEach(pt.getAttribute("l").split(" "), function(val) {
                    points.push(parseFloat(val));
                });
            });
            return points;
        });
    };

    DataLoader.prototype.buildAnnotationXML = function(req, map, assembly, id, parent) {
        var alreadyLoaded = assembly.isChild(id);
        var xmlElement = map[id];
        var href = xmlElement.getAttribute("href");
        // Do we have to load the shell
        if (href) {
            var anno = new Annotation(id, assembly, parent);
            // Have we already loaded this annotation - if not, request the shell be loaded?
            if (!alreadyLoaded) {
                this.addRequest({
                    url: req.base + href,
                    validateType: "annotation",
                    annotation: anno
                });
            }
            return anno;
        } else {
            console.log("DataLoader.buildAnnotationXML - Online - Not yet implemented");
            return undefined;
        }
    };

    DataLoader.prototype.loadPoints = function(el) {
        // Load all of the point information
        var verts = el.getElementsByTagName("verts")[0].getElementsByTagName("v");
        var points = new Float32Array(verts.length * 3);
        var index = 0, pt, coords;
        for (var i = 0; i < verts.length; i++) {
            pt = verts[i].getAttribute("p");
            coords = pt.split(" ", 3);
            points[index++] = parseFloat(coords[0]);
            points[index++] = parseFloat(coords[1]);
            points[index++] = parseFloat(coords[2]);
        }
        return points;
    };

    DataLoader.prototype.parseShellXML = function(xmlRoot, expectedSize) {
        var size = expectedSize * 9;
 //    console.log("Process XML of shell: " + expectedSize);
        var defaultColor = DataLoader.parseColor("d8d8d8");
        // Load the points array
        var points = this.loadPoints(xmlRoot);
        // Get all of the facet information ready
        var facets = xmlRoot.getElementsByTagName("facets");
        // Now load the rest of the data
        var position = new Float32Array(size);
        var normals = new Float32Array(size);
        var colors = new Float32Array(size);
        var pIndex = 0, nIndex = 0, cIndex = 0, totalTris = 0;
        for (var i = 0; i < facets.length; i++) {
            // Set the color
            var color = facets[i].getAttribute("color");
            color = color ? DataLoader.parseColor(color) : defaultColor;
            // Work through each triangle - an 'F' is one
            var tris = facets[i].getElementsByTagName("f");
            totalTris += tris.length;
            var indexVals, tri, norms, index0, index1, index2, normCoordinates;
            for (var j = 0; j < tris.length; j++) {
                tri = tris[j];
                // Get the index information
                indexVals = tri.getAttribute("v").split(" ", 3);
                index0 = parseInt(indexVals[0]) * 3;
                index1 = parseInt(indexVals[1]) * 3;
                index2 = parseInt(indexVals[2]) * 3;

                position[pIndex++] = points[index0];
                position[pIndex++] = points[index0 + 1];
                position[pIndex++] = points[index0 + 2];
                position[pIndex++] = points[index1];
                position[pIndex++] = points[index1 + 1];
                position[pIndex++] = points[index1 + 2];
                position[pIndex++] = points[index2];
                position[pIndex++] = points[index2 + 1];
                position[pIndex++] = points[index2 + 2];

                // Get the normal information
                norms = tri.getElementsByTagName("n");
                normCoordinates = norms[0].getAttribute("d").split(" ", 3);
                normals[nIndex++] = parseFloat(normCoordinates[0]);
                normals[nIndex++] = parseFloat(normCoordinates[1]);
                normals[nIndex++] = parseFloat(normCoordinates[2]);
                normCoordinates = norms[1].getAttribute("d").split(" ", 3);
                normals[nIndex++] = parseFloat(normCoordinates[0]);
                normals[nIndex++] = parseFloat(normCoordinates[1]);
                normals[nIndex++] = parseFloat(normCoordinates[2]);
                normCoordinates = norms[2].getAttribute("d").split(" ", 3);
                normals[nIndex++] = parseFloat(normCoordinates[0]);
                normals[nIndex++] = parseFloat(normCoordinates[1]);
                normals[nIndex++] = parseFloat(normCoordinates[2]);

                // Set the color information
                colors[cIndex++] = color.r;
                colors[cIndex++] = color.g;
                colors[cIndex++] = color.b;
                colors[cIndex++] = color.r;
                colors[cIndex++] = color.g;
                colors[cIndex++] = color.b;
                colors[cIndex++] = color.r;
                colors[cIndex++] = color.g;
                colors[cIndex++] = color.b;
            }
        }
        return {
            position: position,
            normals: normals,
            colors: colors
        };
    };

    DataLoader.prototype.buildShellXML = function(req, map, id, assembly, parent) {
        var alreadyLoaded = assembly.isChild(id);
        var xmlElement = map[id];
        var href = xmlElement.getAttribute("href");
        // Do we have to load the shell
        if (href) {
            var color = DataLoader.parseColor("7d7d7d");
            var boundingBox = DataLoader.parseBoundingBox(xmlElement.getAttribute("bbox"));
            var size = parseFloat(xmlElement.getAttribute("size"));
            var shell = new Shell(id, assembly, parent, size, color, boundingBox);
            // Have we already loaded this Shell - if not, request the shell be loaded?
            if (!alreadyLoaded) {
                this.addRequest({
                    url: req.base + href,
                    validateType: "shell",
                    shell: shell,
                    shellSize: size
                });
            }
            return shell;
        } else {
            console.log("DataLoader.buildShellXML - Online - Not yet implemented");
            return undefined;
        }
    };

    DataLoader.prototype.buildAssemblyJSON = function(jsonText, req) {
        var doc = JSON.parse(jsonText);
        var rootID = doc.root;
        var defaultColor = DataLoader.parseColor("7d7d7d");
        var assembly = new Assembly(rootID, defaultColor, this);
        // Process the rest of the index JSON - get the product with the root ID
        var rootProduct = this.buildProductJSON(req, doc, assembly, rootID, true);
        assembly.setRootProduct(rootProduct);
        // Add the assembly to the scene
        this._viewer.add3DObject(rootProduct.getObject3D(), 'geometry');
        this._viewer.add3DObject(rootProduct.getOverlay3D(), 'overlay');
        this._viewer.add3DObject(rootProduct.getAnnotation3D(), 'annotation');
        var batchExtension = '.json'
        if (doc.useTyson){
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
    };

    DataLoader.prototype.buildProductJSON = function(req, doc, assembly, id, isRoot) {
        // Create the product
        var self = this;
        var productJSON = _.findWhere(doc.products, { id: id });
        // Have we already seen this product
        if (!assembly.isChild(id)) {
            var product = new Product(id, assembly, productJSON.name, productJSON.step, isRoot);
            // Load child shapes first - MUST BE BEFORE CHILD PRODUCTS
            var identityTransform = (new THREE.Matrix4()).identity();
            _.each(productJSON.shapes, function(shapeID) {
                var shape = self.buildShapeJSON(req, doc, assembly, shapeID, undefined, identityTransform, isRoot);
                product.addShape(shape);
            });
            // Load child products
            _.each(productJSON.children, function(childID) {
                var child = self.buildProductJSON(req, doc, assembly, childID, false);
                product.addChild(child);
            });
            return product;
        }
        // Otherwise, just return the existing product
        return assembly.getChild(id);
    };

    DataLoader.prototype.buildShapeJSON = function(req, doc, assembly, id, parent, transform, isRoot) {
        // We are really only looking up stuff when non-root
        if (!isRoot) return assembly.getChild(id);
        // Ok, now let's really build some stuff
        var self = this;
        var shapeJSON = _.findWhere(doc.shapes, { id: id });
        var unit = shapeJSON.unit ? shapeJSON.unit : "unit 0.01";
        var shape = new Shape(id, assembly, parent, transform, unit, isRoot);
        // Load child shells
        _.each(shapeJSON.shells, function(shellID) {
            var shell = self.buildShellJSON(req, doc, shellID, assembly, shape);
            shape.addShell(shell);
        });
        // Load Child annotations
         _.each(shapeJSON.annotations, function(annotationID) {
            var annotation = self.buildAnnotationJSON(req, doc, annotationID, assembly, shape);
            shape.addAnnotation(annotation);
         });
        // Load child shapes
        _.each(shapeJSON.children, function(childJSON) {
            // Setup the child's transform
            var localTransform = DataLoader.parseXform(childJSON.xform, true);
            // Build the child
            var child = self.buildShapeJSON(req, doc, assembly, childJSON.ref, shape, localTransform, isRoot);
            shape.addChild(child);
        });
        return shape;
    };

    DataLoader.prototype.buildAnnotationJSON = function(req, doc, id, assembly, parent) {
        var alreadyLoaded = assembly.isChild(id);
        var annoJSON = _.findWhere(doc.annotations, { id: id });
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
    };

    DataLoader.prototype.buildShellJSON = function(req, doc, id, assembly, parent) {
        var alreadyLoaded = assembly.isChild(id);
        var shellJSON = _.findWhere(doc.shells, { id: id });
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
    };

    // Give the dataLoader some eventing!
    THREE.EventDispatcher.prototype.apply(DataLoader.prototype);
    return DataLoader;
});
