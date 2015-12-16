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
        this._loader.addEventListener("addRequest", handler);
        this._loader.addEventListener("loadComplete", handler);
        this._loader.addEventListener("parseComplete", handler);
        this._loader.addEventListener("shellLoad", handler);
        this._loader.addEventListener("workerFinish", handler);
        this._loader.addEventListener("loadProgress", handler);

        //
        //// Need to turn mouse selection on and off to not interfere with click drag view control
        //var _change;
        //this._viewer.controls.addEventListener("change", function() {
        //    _change = true;
        //});
        //this._viewer.controls.addEventListener("start", function() {
        //    _change = false;
        //});
        //canvasDOM.addEventListener("mouseup", function(event) {
        //    if (!_change) {
        //        self.onClick(event);
        //    }
        //    _change = false;
        //}, false);
        //canvasDOM.addEventListener("mousemove", function(event) {
        //    if (!_change) {
        //        self.onMove(event);
        //    }
        //}, false);
        //
    }

    getTree() {
        var keys = _.keys(this._models);
        return keys.length > 0 ? this._models[keys[0]].getTree(keys[0]) : {};
    }
}

/*
CADjs.prototype.onClick = function(event) {
    if (!this._rootAssembly) {
        return;
    }

    // Clear selections if meta key not pressed
    if (!event.metaKey) {
        this._rootAssembly.hideAllBoundingBoxes();
        this.tree.deselect_all();
    }
    var obj = this._rootAssembly.select(this._viewer.camera, event.clientX, event.clientY);
    // Did we find an object
    if (obj) {
        obj = obj.getNamedParent();
        // Yes, go highlight it in the tree
        var node = this.tree.get_node(obj.getID());
        this.tree.select_node(node);
    }
    this._viewer.invalidate();
};

CADjs.prototype.onMove = function(event) {
    var obj;
    if (this._rootAssembly) {
        this._rootAssembly.clearHighlights();
        obj = this._rootAssembly.select(this._viewer.camera, event.clientX, event.clientY);
        // Did we find an object
        if (obj) {
            obj = obj.getNamedParent();
            // Yes, go highlight it in the tree
            obj.highlight(0xffff60);
        }
    }
    if (obj != this._lastHovered) {
        this._viewer.invalidate();
    }
    this._lastHovered = obj;
};

CADjs.prototype.explode = function(distance) {
    //console.log(this._viewer.controls.object);
    var node = this.tree.get_selected(false);
    if (node) {
        for (var i = 0; i < node.length; i++) {
            var obj = this._rootAssembly.getByID(node[i]);
            if (obj) {
                obj.explode(distance);
            }
        }
        this._viewer.updateSceneBoundingBox(this._parts[0].getBoundingBox());
        this._viewer.invalidate();
    }
};

CADjs.prototype.getExplodeDistance = function () {
    return this._viewer.sceneRadius * 0.05;
};
/*
 CADjs.prototype.setSelectedOpacity = function(opacity) {
 var node = this.tree.get_selected(false);
 if (node) {
 for (var i = 0; i < node.length; i++) {
 var obj = this._parts[0].getByID(node[i]);
 if (obj) {
 obj.setOpacity(opacity);
 }
 }
 this._viewer.invalidate();
 }
 };
 */
/*
CADjs.prototype.renderTree = function() {
    var self = this;
    var geometryOnly = false;
    var treeData = this._rootAssembly.getTree(geometryOnly);
    if (this.tree) {
        this.tree.destroy();
    }
    this.tree = $.jstree.create(this._treeContainerSelector, {
        plugins : [ 'contextmenu' ],
        core: {
            data: [ treeData ],
            animation: 50,
            themes: {
                icons: false
            }
        },
        contextmenu: {
            items: function(menuItem) {
                var obj = self._rootAssembly.getByID(menuItem.id),
                    menu = {
                        focusOn: {
                            label: "Focus On",
                            action: function() {
                                if (obj) {
                                    self._viewer.zoomToFit(obj);
                                }
                            }
                        }
                    };
                if (obj.getObject3D().visible) {
                    menu.hide = {
                        label: "Hide",
                        action: function() {
                            if (obj) {
                                obj.hide();
                                self._viewer.invalidate();
                            }
                        }
                    };
                } else {
                    menu.show = {
                        label: "Show",
                        action: function() {
                            if (obj) {
                                obj.show();
                                self._viewer.invalidate();
                            }
                        }
                    };
                }
                return menu;
            }
        }
    });

    this._$treeContainer.on("select_node.jstree deselect_node.jstree", function(event, data) {
        self._rootAssembly.hideAllBoundingBoxes();
        //self._parts[0].clearHighlights();
        for (var i = 0; i < data.selected.length; i++) {
            var obj = self._rootAssembly.getByID(data.selected[i]);
            if (obj) {
//              console.log(obj.getID());
                obj.showBoundingBox();
                self._viewer.invalidate();
                //obj.highlight(0xff0000);
            }
        }
    });
};
*/
