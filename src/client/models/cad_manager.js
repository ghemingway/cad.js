/* G. Hemingway Copyright @2015
 * Context for the visualization of a set of CAD models
 */
"use strict";


var _           = require('lodash');
import DataLoader  from './data_loader';

/*************************************************************************/

export default class CADManager extends THREE.EventDispatcher {
    constructor() {
        super();
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

    bindEvents() {
        var self = this;
        // Set up handling of load events - pass them from the data-loader on
        var handler = function(event) {
            self.dispatchEvent(event);
        };

        var selectHandler = function(event) {
            var ids = event.id.split(':');
            var model = self._models[ids[0]];
            if (model) {
                var obj = model.getByID(ids[1]);
                if (!event.meta) {
                    model.hideAllBoundingBoxes();
                }
                if (obj) {
                    obj.showBoundingBox();
                } else {
                    model.showBoundingBox();
                }
                self.dispatchEvent({ type: 'invalidate', options: { tree: true } } );
            }
        };

        var msgHandler = function(event) {
            var keys = _.keys(this._models);
            _.each(keys, function(key) {
                self._models[key].dispatchEvent(event);
            });
        };

        this._loader.addEventListener("addRequest", handler);
        this._loader.addEventListener("loadComplete", handler);
        this._loader.addEventListener("parseComplete", handler);
        this._loader.addEventListener("shellLoad", handler);
        this._loader.addEventListener("workerFinish", handler);
        this._loader.addEventListener("loadProgress", handler);
        // Listen for someone asking for stuff
        this.addEventListener("select",     selectHandler);
        this.addEventListener("visibility", msgHandler);
        this.addEventListener("opacity",    msgHandler);
        this.addEventListener("explode",    msgHandler);
    }

    getTree() {
        var keys = _.keys(this._models);
        return keys.length > 0 ? this._models[keys[0]].getTree(keys[0]) : {};
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