/* G. Hemingway Copyright @2014
 * XML Data loader - should be folded in with ShapeBuilder and extended to handle JSON
 */

"use strict";


/********************************* Helper Functions ********************************/

define(["THREE"], function(THREE) {

    /********************************* Base DataLoader Class ********************************/

    function DataLoader (config) {
        this._config = config;
        this._loadQueue = [];  // The queue of requests to load
        this._loading = [];     // Items currently getting loaded
        this._jobs = config.jobs ? config.jobs : 12;
    }

    DataLoader.prototype.parseBoundingBox = function(str) {
        var vals = this.parseFloatVec(str, 6);
        return new THREE.Box3(new THREE.Vector3(vals[0], vals[1], vals[2]), new THREE.Vector3(vals[3], vals[4], vals[5]));
    };

    DataLoader.prototype.parseXform = function(str, colOriented) {
        if (str == null) return null;
        var arr = this.parseFloatVec(str);
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

    DataLoader.prototype.parseColor = function(hex) {
        var cval = parseInt(hex, 16);
        return (new THREE.Color()).setRGB(
            ((cval >>16) & 0xff) / 255,
            ((cval >>8) & 0xff) / 255,
            ((cval >>0) & 0xff) / 255
        );
    };

    DataLoader.prototype.parseUnit = function(str) {
        var unit = str.split(" ")[0];
        var factor = parseFloat(str.split(" ")[1]);
        if (unit !== "mm") {
            console.log("Found non-MM unit: " + unit);
        }
        return factor;
    };

    /************** DataLoader Class Functions ****************************/

    DataLoader.prototype.load = function(url, validateType, callback) {
        // TODO: Make sure validateType is string and callback is function
        this._autorun = true;
        this.addRequest({
            url: url,
            validateType: validateType,
            callback: callback
        });
        this._autorun = this._config.autorun;
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
        if (!req.url.base || req.url.match(/^\w+:/) || req.url.match(/^\//)) {
            return req.url;
        }
        return req.url.base + req.url;
    };

    DataLoader.prototype.addLoadable = function(url, callback) {
        this.addRequest(url, function(docRoot) {
            callback(docRoot);
        });
    };

    DataLoader.prototype.addRequest = function(req) {
        this.resolveUrl(req, "index.xml");
        console.log(req);
//        var req = { url: url, target: func, sort: sort };
//        this._loadQueue.push(req);
//        var parts = req.url.split("/");
//        this.dispatchEvent({ type: "addRequest", file: parts[parts.length - 1] });
//        if (this._autorun) {
//            this.runLoadQueue();
//        }
    };

    DataLoader.prototype.sortQueue = function() {
        this.load_queue.sort(function(a,b) {
            var va = DataLoader.getRank(a.sort);
            var vb = DataLoader.getRank(b.sort);
            if (va == vb) return 0;
            // items w/o a sort function come first
            if (va == null) return -1;
            if (vb == null) return +1;
            return vb - va;
        });
    };

    DataLoader.prototype.queueLength = function(onlyLoad) {
        if (onlyLoad) {
            return this.loading.length + this.load_queue.length;
        } else {
            return this.load_queue.length + this.loading.length + this.post_queue.length;
        }
    };

    DataLoader.prototype.runLoadQueue = function() {
        // Maximum number of concurrent loads is happening OR No files to load
        if (this.loading.length >= this.jobs) {
            return;
        }
        else if (this.load_queue.length <= 0) {
            this.dispatchEvent({ type: "queueEmpty" });
            return;
        }
        this.initRequest(this.load_queue.shift());
    };

    DataLoader.prototype.initRequest = function(req) {
        if (this.loading.length > this.jobs) {
            throw new Error("DataLoader internal error");
        }
        this.loading.push(req);
        var xr = new XMLHttpRequest();
        var self = this;
        xr.addEventListener("load", function() {
            self.loadComplete(xr, req);
        });
        xr.addEventListener("loadend", function() {
            self.requestComplete(req);
        });
        xr.addEventListener("progress", function(event) {
            var parts = req.url.split("/");
            var message = { type: "loadProgress", file: parts[parts.length - 1] };
            if (event.lengthComputable) {
                message.loaded = event.loaded / event.total * 100.0;
            }
            self.dispatchEvent(message);
        });
        xr.open("GET", req.url, true);
        try {
            xr.send();
        } catch (ex) {
            console.log ("DataLoader.initRequest - Error loading file: " + req.url);
            this.requestComplete(req);
        }
    };

// Called when a download completes successfully.  This function pushes the
// results on the post queue, and arranges for them to run.
    DataLoader.prototype.loadComplete = function(xr, req) {
        req.xml = xr.responseXML;
        this.post_queue.push(req);
        var parts = req.url.split('/');
        this.dispatchEvent({ type: "loadComplete", file: parts[parts.length - 1] });
        this.runPostQueue();
    };

// Called when an AJAX request is finished for any reason.  This will ensure
// that the next item in the queue is loaded.
    DataLoader.prototype.requestComplete = function(req) {
        for (var i = 0; i < this.loading.length; i++) {
            if (this.loading[i] == req) {
                this.loading.splice(i, 1);
                break;
            }
        }
        this.runLoadQueue();
    };

// Schedule the first item on the post precessing queue.
    DataLoader.prototype.runPostQueue = function() {
        if (this.active) {
            return;
        }
        var req = this.post_queue.shift();
        this.active = req;
        var self = this;
        // Run the actual post function in a timeout.  This way, we will
        // return to the UI immediately.  Some time later, the function will
        // wake up, and then it will initialize the data.
        window.setTimeout(function() {
            self.updatePost(function() {
                var target = req.target;
                target(req.xml.documentElement);
            });
        }, 0);
    };

// run a request's post-processing function.
    DataLoader.prototype.updatePost = function(fn) {
        if (!this.active) throw new Error ("Nothing active");
        var self = this;
        var next = fn();
        if (next) {
            // The request is not yet complete, so we schedule another call
            // and bail out
            window.setTimeout(function() {
                self.updatePost(next)
            }, 0);
            return;
        }
        this.active = null;
        if (this.post_queue.length > 0) this.runPostQueue();
    };

    THREE.EventDispatcher.prototype.apply(DataLoader.prototype);


    /********************************* XML Data Loader Class ********************************/


    function XMLDataLoader(rootXML) {
        this.objs = {};
        this.elementMap = this.buildElementMap(rootXML);
    }

    XMLDataLoader.prototype.buildElementMap = function(xmlEl) {
        var ids = {};
        for (var i=0; i < xmlEl.childNodes.length; i++) {
            var ch = xmlEl.childNodes[i];
            if (ch.nodeType != Node.ELEMENT_NODE) continue;
            var id = ch.getAttribute("id");
            if (id) ids[id] = ch;
        }
        return ids;
    };

    XMLDataLoader.prototype.make = function(id, fallback, elName) {
//    console.log("XMLDataLoader.make: " + id + ", Name: " + elName);
        if (!id) {
            throw new Error("null id");
        }
        var ret = this.objs[id];
        if (ret) {
            return ret;
        }
        if (elName) {
            var el = this.getElement(id);
            if (el == null) {
                console.log ("StepBuilder.make - Could not get shape element: " + id);
                return null;
            }
            if (el.tagName != elName) {
                throw new Error ("StepBuilder.make - unexpected element name: " + el.tagName + " wanted: " + elName);
            }
        }
        this.objs[id] = fallback;
        return null;
    };

    XMLDataLoader.prototype.getArrayFromAttribute = function(el, name) {
        // Get the XML attribute, from an element and split it an array if empty or missing, return empty array.
        var val = el.getAttribute(name);
        if (!val) return [];
        return val.split(" ");
    };

    XMLDataLoader.prototype.parseFloatVec = function(str, count) {
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

    /********************************* JSON Data Loader Class ********************************/

    function JSONDataLoader(rootDocument) {

    }

    return DataLoader;
});
