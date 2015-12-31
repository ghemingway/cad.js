/* G. Hemingway Copyright @2015
 * Context for the visualization of a set of CAD models
 */
"use strict";


var _           = require('lodash');
import DataLoader  from './data_loader';

/*************************************************************************/

export default class CADManager extends THREE.EventDispatcher {
    constructor(config, socket) {
        super();
        this.config = config;
        this.socket = socket;
        this._models = {};
        this.addEventListener('setModel', this.load);
        // Set this to default empty assembly
        this._root3DObject = new THREE.Object3D();
        // Setup data loader
        this._loader = new DataLoader({
            autorun: false,
            workerPath: "/js/webworker.js"
        });
        // Start listening for events
        this.bindEvents();
    }

    // Load a new assembly request
    load(req) {
        var self = this;
        req.type = req.modelType;
        delete req.modelType;
        // Initialize the assembly
        this._loader.load(req, function(err, model) {
            if (err) {
                console.log('CADManager.load error: ' + err);
            } else {
                // Add the model to the list of loaded models
                self._models[req.path] = model;
                self.dispatchEvent({ type: 'model:add', path: req.path });
                // Make sure all the rest of the parts have loaded
                self._loader.runLoadQueue();
            }
        });
        // Get the rest of the files
        this._loader.runLoadQueue();
    }

    centerModels() {
        // TODO: Do we need to implement this?
        // Reset all models to be centered on the origin
        //if (this._product) {
        //    var bbox = this._product.getBoundingBox();
        //    if (!bbox.empty()) {
        //        var x = (bbox.max.x + bbox.min.x) / -2.0;
        //        var y = (bbox.max.y + bbox.min.y) / -2.0;
        //        var z = (bbox.max.z + bbox.min.z) / -2.0;
        //        this._product.applyMatrix(new THREE.Matrix4().makeTranslation(x, y, z));
        //    }
        //}
    }

    bindEvents() {
        var self = this;
        // Set up handling of load events - pass them from the data-loader on
        var loaderEventHandler = function(event) {
            self.dispatchEvent(event);
        };

        var modelsEventHandler = function(event) {
            var keys = _.keys(this._models);
            _.each(keys, function(key) {
                self._models[key].dispatchEvent(event);
            });
        };
        // Rebroadcast data loader events
        this._loader.addEventListener("addRequest",     loaderEventHandler);
        this._loader.addEventListener("loadComplete",   loaderEventHandler);
        this._loader.addEventListener("parseComplete",  loaderEventHandler);
        this._loader.addEventListener("shellLoad",      loaderEventHandler);
        this._loader.addEventListener("workerFinish",   loaderEventHandler);
        this._loader.addEventListener("loadProgress",   loaderEventHandler);
        // Listen for someone asking for stuff
        this.addEventListener("clear:selected",         modelsEventHandler);
        this.addEventListener("clear:highlights",       modelsEventHandler);

        // Setup socket callbacks
        this.onDelta = this.onDelta.bind(this);
        if (this.config.socket && this.socket) {
            this.socket.on('nc:delta', this.onDelta);
        }
    }

    clearSelected() {
        this.dispatchEvent({ type: 'clear:selected' });
    }

    clearHighlights() {
        this.dispatchEvent({ type: 'clear:highlights' });
    }

    toggleOpacity() {}

    toggleVisibility() {}

    explode(step) {}

    getSelected() { return []; }

    getTree() {
        // TODO: Needs to handle multiple models at once
        var keys = _.keys(this._models);
        return keys.length > 0 ? this._models[keys[0]].getTree(keys[0]) : {};
    }

    modelCount() {
        return _.size(this._models);
    }

    hitTest(camera, event) {
        return _.reduce(this._models, function(memo, model) {
            var val = model.select(camera, event.clientX, event.clientY);
            return memo || val;
        }, undefined);
    }

    onDelta(delta) {
        var self = this;
        var keys = _.keys(this._models);
        _.each(keys, function(key) {
            var model = self._models[key];
            if (model.project === delta.project) {
                if (model.applyDelta(delta)) {
                    // Only redraw if there were changes
                    self.dispatchEvent({ type: 'invalidate' });
                }
            }
        });
    }
}