/* G. Hemingway Copyright @2014
 * Context for the visualization of a set of CAD models
 */

"use strict";


/*************************************************************************/


define(["jquery", "jstree", "data_loader", "viewer"], function($, jstree, DataLoader, Viewer) {
    /* config:
        viewContainer
        compassContainer
        treeContainer
        downloadsContainer
     */
    function CADjs(config) {
        if (!config || !config.viewContainer || !config.compassContainer || !config.treeContainer) {
            throw "CAD.js requires a configuration!!!";
        }
        this._viewContainer = config.viewContainer;
        this._compassContainer = config.compassContainer;
        this._treeContainer = config.treeContainer;
        this._downloadsContainer = config.downloadsContainer;
        this._loader = undefined;
        this._parts = [];
        this._viewer = undefined;
    }

    CADjs.prototype.setupPage = function() {
        // Create the viewer
        this._viewer = new Viewer(this._viewContainer, this._compassContainer);
        // Create the data loader
        this._loader = new DataLoader(this, this._viewer, { autorun: false });
        // Events
        this.bindEvents();
        // Signal ready
        $(this).trigger("pageSetup");
    };

    CADjs.prototype.load = function(resourceURL) {
        var self = this;
        // Initialize the assembly
        this._loader.load(resourceURL, "assembly", function(err, part) {
            if (err) {
                // Popup message for user to handle
                $("#dialog").dialog({
                    autoOpen: true,
                    buttons: [ { text: "Ok", click: function() { $(this).dialog("close"); } } ],
                    modal: true,
                    title: "CAD.js Load Error - " + err.status
                });
                $("#dialog-content").text("Error loading model: " + err.file);
            } else {
                // Add the part to the list
                self._parts.push(part);
                // Call back with the new Assembly - nicely centered
                part.centerGeometry();
                part.zoomToFit(self._viewer.camera, self._viewer.controls);
                // Update the tree
                self.renderTree();
                // Get the rest of the files
                self._loader.runLoadQueue();
            }
        });
    };

    CADjs.prototype.render = function () {
        this._parts[0].render();
    };

    CADjs.prototype.bindEvents = function () {
        var self = this;
        var canvasDOM = document.getElementById(this._viewContainer);

        // Download manager interface
        var $downloads = $(this._downloadsContainer);
        this._loader.addEventListener("addRequest", function(event) {
            var id = event.file.split(".")[0];
            $downloads.append("<li id='" + id + "'>" + event.file + "</li>");
            var count = self._loader.queueLength(false);
            $(".steptools-downloads-count").text(count);
        });
        this._loader.addEventListener("loadComplete", function(event) {
            var id = event.file.split(".")[0];
            // Is this the index file
            if (id === "index") {
                $("li#index").remove();
            } else {
                // Change the file status to 'parsing'
                $("li#" + id).text(event.file + ": Parsing");
            }
        });
        this._loader.addEventListener("parseComplete", function(event) {
            var id = event.file.split(".")[0];
            // Change the file status to 'parsing'
            $("li#" + id).text(event.file + ": Finishing");
        });
        this._loader.addEventListener("shellLoad", function() {
            // Make sure to redraw the model
            self._viewer.invalidate();
        });
        this._loader.addEventListener("workerFinish", function(event) {
            var id = event.file.split(".")[0];
            // Remove the item from the list
            $("li#" + id).remove();
            // Update the count
            var count = self._loader.queueLength(false);
            $(".steptools-downloads-count").text(count);
        });
        this._loader.addEventListener("loadProgress", function(event) {
            if (event.loaded) {
                var id = event.file.split(".")[0];
                $("li#" + id).text(event.file + ": " + event.loaded.toFixed(2) + "%");
            }
        });

        // Need to turn mouse selection on and off to not interfere with click drag view control
        var _change;
        this._viewer.controls.addEventListener("change", function() {
            _change = true;
        });
        this._viewer.controls.addEventListener("start", function() {
            _change = false;
        });
        canvasDOM.addEventListener("mouseup", function(event) {
            if (!_change) self.onClick(event);
            _change = false;
        }, false);
        canvasDOM.addEventListener("mousemove", function() {
            if (!_change) self.onMove();
        }, false);

        // Keybased events
        window.addEventListener("keypress", function(event) {
            var node, obj;
            switch(event.keyCode || event.charCode || event.which) {
                // Explode on 'x' key pressed
                case 120:
                    self.explode(100);
                    break;
                // Unexplode on 's' key pressed
                case 115:
                    self.explode(-100);
                    break;
                // 'q' unselects all tree elements
                case 113:
                    self._parts[0].hideAllBoundingBoxes();
                    console.log("Got here");
                    self.tree.deselect_all();
                    self._viewer.invalidate();
                    break;
                // 'o' to toggle transparency
                case 111:
                    node = self.tree.get_selected(false);
                    obj = self._parts[0].getByID(node[0]);
                    if (obj) {
                        obj.toggleTransparency();
                        self._viewer.invalidate();
                    }
                    break;
                // 'z' to zoomToFit
                case 122:
                    self._parts[0].zoomToFit(self._viewer.camera, self._viewer.controls);
                    self._viewer.invalidate();
                    break;
                // 'j' hide/show element
                case 106:
                    node = self.tree.get_selected(false);
                    obj = self._parts[0].getByID(node[0]);
                    if (obj) {
                        if (obj.toggleVisibility()) {
                            self.tree.enable_node(node);
                        } else {
                            self.tree.disable_node(node);
                        }
                        self._viewer.invalidate();
                    }
                    break;
            }
        }, true);
    };

    CADjs.prototype.onClick = function(event) {
        if (!this._parts[0]) return;
        // Clear selections if meta key not pressed
        if (!event.metaKey) {
            this._parts[0].hideAllBoundingBoxes();
            this.tree.deselect_all();
        }
        var obj = this._parts[0].select(this._viewer.camera, event.clientX, event.clientY);
        // Did we find an object
        if (obj) {
            obj = obj.getNamedParent();
            // Yes, go highlight it in the tree
            var node = this.tree.get_node(obj.getID());
            this.tree.select_node(node);
        }
        this._viewer.invalidate();
    };

    CADjs.prototype.onMove = function() {
        if (this._parts.length > 0) {
/*            this._parts[0].clearHighlights();
            var obj = this._parts[0].select(this._viewer.camera, event.clientX, event.clientY);
            // Did we find an object
            if (obj) {
                obj = obj.getNamedParent();
                // Yes, go highlight it in the tree
                obj.highlight(0xffff8f);
            }
            this._viewer.invalidate();*/
        }
    };

    CADjs.prototype.explode = function(distance) {
        //console.log(this._viewer.controls.object);
        var node = this.tree.get_selected(false);
        if (node) {
            for (var i = 0; i < node.length; i++) {
                var obj = this._parts[0].getByID(node[i]);
                if (obj) {
                    obj.explode(distance);
                }
            }
            this._viewer.invalidate();
        }
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
    CADjs.prototype.renderTree = function() {
        var self = this;
        var geometryOnly = false;
        var treeData = this._parts[0].getTree(geometryOnly);
        if (this.tree) this.tree.destroy();
        this.tree = $.jstree.create(this._treeContainer, {
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
                    var menu = {
//                        showAll: {
//                            label: "Show All",
//                            action: function() {
//                                self._parts[0].showAll();
//                                // TODO: Need to update tree to make all enabled
//                                //console.log(self.tree.disabled);
//                            }
//                        }//,
//                        focusOn: {
//                            label: "Focus On",
//                            action: function() {
//                                var obj = self._parts[0].getByID(menuItem.id);
//                                if (obj) {
//                                    self._parts[0].focusOn(obj);
//                                }
//                            }
//                        }
                    };
                    if (menuItem.state.disabled) {
                        menu["show"] = {
                            label: "Show",
                            action: function() {
                                var obj = self._parts[0].getByID(menuItem.id);
                                if (obj) {
                                    obj.show();
                                    self._viewer.invalidate();
                                    self.tree.enable_node(menuItem);
                                }
                            }
                        };
                    } else {
                        menu["hide"] = {
                            label: "Hide",
                            action: function() {
                                var obj = self._parts[0].getByID(menuItem.id);
                                if (obj) {
                                    obj.hide();
                                    self._viewer.invalidate();
                                    self.tree.disable_node(menuItem);
                                    self.tree.deselect_node(menuItem);
                                }
                            }
                        };
                    }
                    return menu;
                }
            }
        });

        $(this._treeContainer).on("select_node.jstree deselect_node.jstree", function(event, data) {
            self._parts[0].hideAllBoundingBoxes();
            //self._parts[0].clearHighlights();
            for (var i = 0; i < data.selected.length; i++) {
                var obj = self._parts[0].getByID(data.selected[i]);
                if (obj) {
//                    console.log(obj.getID());
                    obj.showBoundingBox();
                    self._viewer.invalidate();
                    //obj.highlight(0xff0000);
                }
            }
        });
    };

    return CADjs;
});
