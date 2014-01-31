/* G. Hemingway Copyright @2014
 * XML Data loader - should be folded in with ShapeBuilder and extended to handle JSON
 */

"use strict";


/********************************* Helper Functions ********************************/

define(["THREE", "assembly", "product", "shape", "shell"], function(THREE, Assembly, Product, Shape, Shell) {
    function DataLoader (parent, scene, config) {
        this._parent = parent;
        this._scene = scene;
        this._queue = [];       // The queue of requests to load
        this._loading = [];     // List of active loading jobs
        this._maxWorkers = config.maxWorkers ? config.maxWorkers : 1;
        this._freeWorkers = [];

        var self = this;
        this._workers = [];     // List of workers
        while (this._workers.length < this._maxWorkers) {
            var worker = new Worker("/javascript/webworker.js");
            worker.addEventListener("message", function(event) {
                self.workerMessage(event);
            });
            this._freeWorkers.push(this._workers.length);
            this._workers.push(worker);
        }
    }

    DataLoader.parseBoundingBox = function(str) {
        var vals = DataLoader.parseFloatVec(str, 6);
        return new THREE.Box3(new THREE.Vector3(vals[0], vals[1], vals[2]), new THREE.Vector3(vals[3], vals[4], vals[5]));
    };

    DataLoader.parseXform = function(str, colOriented) {
        if (str == null) return null;
        var arr = DataLoader.parseFloatVec(str);
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
        // TODO: Make sure validateType is string and callback is function
        this.addRequest({
            url: url,
            validateType: validateType,
            callback: callback
        });
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
        var filetype = req.url.split('.').pop();
        switch (filetype) {
            case "xml": req.contentType = "application/xml"; break;
            case "json": req.contentType = "application/json"; break;
            default:
                console.log("DataLoader.resolveUrl error - invalid content type: " + filetype);
        }
        if (!req.url.base || req.url.match(/^\w+:/) || req.url.match(/^\//)) {
            return req.url;
        }
        return req.url.base + req.url;
    };

    DataLoader.prototype.addRequest = function(req) {
        this.resolveUrl(req, "index.xml");
        this._queue.push(req);
        var parts = req.url.split("/");
        this.dispatchEvent({ type: "addRequest", file: parts[parts.length - 1] });
    };

    DataLoader.prototype.sortQueue = function() {
        console.log("DataLoader.sortQueue - not yet implemented");
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
        //console.log("QF: " + this._queue.length + ", " + this._freeWorkers.length);
        // Keep issuing loads until no workers left
        while (this._queue.length > 0 && this._freeWorkers.length > 0) {
            var workerID = this._freeWorkers.shift();
            var req = this._queue.shift();
            req.workerID = workerID;
            this._loading[workerID] = req;
            this.initRequest(req);
        }
    };

    DataLoader.prototype.workerMessage = function(event) {
        // Put worker back into the queue - if it is the time
        var req;
        if (event.data.type === "rootLoad" || event.data.type === "shellLoad") {
            // Remove the job from the loading queue
            req = this._loading[event.data.workerID];
            this._loading[event.data.workerID] = undefined;
            this._freeWorkers.push(event.data.workerID);
            this.runLoadQueue();
        }
        switch(event.data.type) {
            case "rootLoad":
                // Handle the assembly
                switch (req.contentType) {
                    case "application/xml":
                        this.buildAssemblyXML(event.data.data, req);
                        break;
                    case "application/json":
                        console.log("DataLoader.buildAssemblyJSON - Not Implemented");
                        break;
                }
                break;
            case "shellLoad":
                var data = event.data.data;
                req.shell.addGeometry(data.position, data.normals, data.colors);
                this.dispatchEvent({ type: "shellLoad", file: event.data.file });
                break;
            case "parseComplete":
                this.dispatchEvent(event.data);
                break;
            case "loadProgress":
                // Send out the loadProgress message
                this.dispatchEvent(event.data);
                break;
            case "loadComplete":
                this.dispatchEvent({ type: "loadComplete", file: event.data.file });
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
        this._scene.add(rootProduct.getObject3D());
        req.callback(undefined, assembly);
    };

    DataLoader.prototype.buildProductXML = function(req, map, assembly, id, isRoot) {
        var xmlElement = map[id];
        var step = xmlElement.getAttribute ("step");
        var name = xmlElement.getAttribute("name");
        // Create the product
        var product = new Product(id, assembly, name, step, isRoot);

        // Load child shapes first - MUST BE BEFORE CHILD PRODUCTS
        var shapes = DataLoader.getArrayFromAttribute(xmlElement, "shape");
        var i, identityTransform = (new THREE.Matrix4()).identity();
        for (i = 0; i < shapes.length; i++) {
            var shape = this.buildShapeXML(req, map, assembly, shapes[i], undefined, identityTransform, isRoot);
            product.addShape(shape);
        }

        // Load child products
        var childProducts = DataLoader.getArrayFromAttribute(xmlElement, "children");
        for (i = 0; i < childProducts.length; i++) {
            var child = this.buildProductXML(req, map, assembly, childProducts[i], false);
            if (isRoot) {
                product.addChild(child);
            }
        }
        return product;
    };

    DataLoader.prototype.buildShapeXML = function(req, map, assembly, id, parent, transform, isRoot) {
        var xmlElement = map[id];
        var unit = xmlElement.getAttribute("unit");
        // Create the shape
        var shape = new Shape(id, assembly, parent, transform, unit, isRoot);
        // Load child shells
        if (isRoot) {
            var shells = DataLoader.getArrayFromAttribute(xmlElement, "shell");
            for (var i = 0; i < shells.length; i++) {
                var shell = this.buildShellXML(req, map, shells[i], assembly, shape);
                shape.addShell(shell);
            }
        }

        // Load Child annotations
        var annotations = xmlElement.getElementsByTagName("annotation");
        for (i = 0; i < annotations.length; i++) {
            var annotationEl = annotations[i];
            var annotation = this.buildAnnotationXML(req, map, assembly, shape, isRoot);
            if (isRoot) {
                shape.addAnnotation(annotation);
            }
        }

        // Load child shapes
        var childShapes = xmlElement.getElementsByTagName("child");
        for (i = 0; i < childShapes.length; i++) {
            var childEl = childShapes[i];
            // Setup the child's transform
            var localTransform = DataLoader.parseXform(childEl.getAttribute("xform"), true);
            // Build the child
            var child = this.buildShapeXML(req, map, assembly, childEl.getAttribute("ref"), shape, localTransform, isRoot);
            if (isRoot) {
                shape.addChild(child);
            }
        }
        return shape;
    };

    DataLoader.prototype.buildAnnotationXML = function(req, map, assembly, parent, isRoot) {
        var xmlElement = map[id];
        var href = xmlElement.getAttribute("href");
        // Do we have to load the shell
        if (href) {
            return undefined;
        } else {
            console.log("DataLoader.buildAnnotationXML - Online - Not yet implemented");
            return undefined;
        }
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
                    shellSize: size,
                    callback: function(err) {
                        console.log("Shell load callback");
                    }
                });
            }
            return shell;
        } else {
            console.log("DataLoader.buildShellXML - Online - Not yet implemented");
            return undefined;
        }
    };

    // Give the dataLoader some eventing!
    THREE.EventDispatcher.prototype.apply(DataLoader.prototype);
    return DataLoader;
});
