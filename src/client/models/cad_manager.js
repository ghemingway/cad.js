/* G. Hemingway Copyright @2015
 * Context for the visualization of a set of CAD models
 */
"use strict";


let _           = require('lodash');
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
        let self = this;
        // Default the model type to assembly
        req.type = req.modelType ? req.modelType : 'assembly';
        delete req.modelType;
        // Load the model
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
        //    let bbox = this._product.getBoundingBox();
        //    if (!bbox.empty()) {
        //        let x = (bbox.max.x + bbox.min.x) / -2.0;
        //        let y = (bbox.max.y + bbox.min.y) / -2.0;
        //        let z = (bbox.max.z + bbox.min.z) / -2.0;
        //        this._product.applyMatrix(new THREE.Matrix4().makeTranslation(x, y, z));
        //    }
        //}
    }

    bindEvents() {
        let self = this;
        // Set up handling of load events - pass them from the data-loader on
        let loaderEventHandler = function(event) {
            self.dispatchEvent(event);
        };

        let modelsEventHandler = function(event) {
            let keys = _.keys(this._models);
            _.each(keys, function(key) {
                self._models[key].dispatchEvent(event);
            });
        };
        // Rebroadcast data loader events
        this._loader.addEventListener("addRequest",     loaderEventHandler);
        this._loader.addEventListener("loadComplete",   loaderEventHandler);
        this._loader.addEventListener("parseComplete",  loaderEventHandler);
        this._loader.addEventListener("shellLoad",      loaderEventHandler);
        this._loader.addEventListener("annotationLoad", loaderEventHandler);
        this._loader.addEventListener("workerFinish",   loaderEventHandler);
        this._loader.addEventListener("loadProgress",   loaderEventHandler);
        // Listen for someone asking for stuff
        this.addEventListener("model",                  modelsEventHandler);
        this.addEventListener("selected",               modelsEventHandler);

        // Setup socket callbacks
        this.onDelta = this.onDelta.bind(this);
        if (this.config.socket && this.socket) {
            this.socket.on('nc:delta', this.onDelta);
        }
    }

    clear() {
        console.log('Clear everything');
        this.dispatchEvent({
            type:   'model',
            action: 'reset'
        });
    }

    clearSelected(preselected) {
        // Toggle selected state of all selected objects
        let selected = preselected ? preselected : this.getSelected();
        _.each(selected, function(selection) {
            selection.toggleSelection();
        });
    }

    toggleOpacity(preselected) {
        let selected = preselected ? preselected : this.getSelected();
        _.each(selected, function(selection) {
            selection.toggleOpacity();
        });
    }

    toggleVisibility(preselected) {
        let selected = preselected ? preselected : this.getSelected();
        _.each(selected, function(selection) {
            selection.toggleVisibility();
        });
    }

    explode(step) {
        let selected = this.getSelected();
        _.each(selected, function(selection) {
            selection.explode(step);
        });
    }

    getSelected() {
        let self = this;
        let keys = _.keys(this._models);
        let selected = _.map(keys, function(key) {
            return self._models[key].getSelected()
        });
        return _.flatten(selected);
    }

    getTree() {
        // TODO: Needs to handle multiple models at once
        let keys = _.keys(this._models);
        return keys.length > 0 ? this._models[keys[0]].getTree(keys[0]) : {};
    }

    modelCount() {
        return _.size(this._models);
    }

    hitTest(camera, event) {
        return _.reduce(this._models, function(memo, model) {
            let val = model.select(camera, event.clientX, event.clientY);
            return memo || val;
        }, undefined);
    }

    onDelta(delta) {
        let self = this;
        let keys = _.keys(this._models);
        _.each(keys, function(key) {
            let model = self._models[key];
            if (model.project === delta.project) {
                if (model.applyDelta(delta)) {
                    // Only redraw if there were changes
                    self.dispatchEvent({ type: 'invalidate' });
                }
            }
        });
    }
}