/* G. Hemingway Copyright @2014
 * Context for the overall STEP file
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
        this._loader = new DataLoader({ autorun: false });
        this._parts = [];
        this._viewer = undefined;
        this._tree = undefined;
        this._menu = undefined;
        this._isSetup = false;

        // Events
        this._loader.addEventListener("queueEmpty", function(event) {
//        console.log("QueueEmpty");
        });
    }

    CADjs.prototype.setupPage = function() {
        // Create the viewer
        this._viewer = new Viewer(this._viewContainer, this._compassContainer);
        // Setup the tree
        //...
        // Setup the toolbar
        //...
        // Signal ready
        this._isSetup = true;
        $(this).trigger("pageSetup");
    };

    CADjs.prototype.load = function(resourceURL) {
        // Initialize the assembly
        this._loader.load(resourceURL, "part", function(err, part) {
            if (err) {

            } else {
            self._parts.push(part);
            self.rootID = rootXML.getAttribute("root");
            self.builder = new ShapeBuilder(rootXML, self.loader);
            self.defaultColor = self.defaultColor ? self.defaultColor : self.builder.parseColor("7d7d7d");
            // Load the root product
            self.product = new Product(self.rootID, self.builder, self, true);
            self.centerGeometry();
            self.dispatchEvent({ type: "rootLoad" });
            // Defer all downloading until the full root doc is parsed
            self.loader.runLoadQueue();
            }
        });


        this.assembly = new Assembly({
            resourceUrl: resourceUrl,
            canvasParent: this.viewContainer,
            compassParent: this.compassContainer
        });
        this.bindEvents();
        this.assembly.load();
    };

    CADjs.prototype.render = function () {
        this.assembly.render();
    };

    CADjs.prototype.bindEvents = function () {
        var self = this;

        // Tree View
        var canvasDOM = document.getElementById(this.viewContainer);
        this.assembly.addEventListener("rootLoad", function() {
            self.renderTree();
        });

        // Download manager interface
        var $downloads = $(this.downloadsContainer);
        this.assembly.addEventListener("loadComplete", function() {
            console.log("All loaded Loaded");
        });
        this.assembly.loader.addEventListener("addRequest", function(event) {
            var id = event.file.split(".")[0];
            $downloads.append("<li id='" + id + "'>" + event.file + "</li>");
            var count = self.assembly.loader.queueLength(true);
            $(".steptools-downloads-count").text(count);
        });
        this.assembly.loader.addEventListener("loadComplete", function(event) {
            var id = event.file.split(".")[0];
            $("li#" + id).remove();
            var count = self.assembly.loader.queueLength(true);
            $(".steptools-downloads-count").text(count);
        });
        this.assembly.loader.addEventListener("queueEmpty", function() {
            var count = self.assembly.loader.queueLength(true);
            $(".steptools-downloads-count").text(count);
        });
        this.assembly.loader.addEventListener("loadProgress", function(event) {
            var id = event.file.split(".")[0];
            var loaded = Math.round(event.loaded * 100) / 100;
            $("li#" + id).text(event.file + ": " + loaded + "%");
        });

        var _change;
        // Need to turn mouse selection on and off to not interfere with click drag view control
        this.assembly.geometryViewer.controls.addEventListener("change", function() {
            _change = true;
        });
        this.assembly.geometryViewer.controls.addEventListener("start", function() {
            _change = false;
        });
        canvasDOM.addEventListener("mouseup", function(event) {
            if (!_change) self.onClick(event);
            _change = false;
        }, false);
        canvasDOM.addEventListener("mousemove", function(event) {
            if (!_change) self.onMove(event);
        }, false);

        // Keybased events
        window.addEventListener("keypress", function(event) {
            //console.log(event.keyCode);
            switch(event.keyCode) {
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
                    self.assembly.hideAllBoundingBoxes();
                    self.tree.deselect_all();
                    break;
                // 'o' to set opacity of selected to 0.5
                case 111:
                    self.setSelectedOpacity(0.5);
                    break;
                // 'p' to set opacity of selected back to 1
                case 112:
                    self.setSelectedOpacity(1.0);
                    break;
            }
        });
    };

    CADjs.prototype.onClick = function(event) {
        // Clear selections if meta key not pressed
        if (!event.metaKey) {
            this.assembly.hideAllBoundingBoxes();
            this.tree.deselect_all();
        }
        var obj = this.assembly.select(event.clientX, event.clientY);
        // Did we find an object
        if (obj) {
            obj = obj.getNamedParent();
            // Yes, go highlight it in the tree
            var node = this.tree.get_node(obj.getID());
            this.tree.select_node(node);
        }
    };

    CADjs.prototype.onMove = function(event) {
        this.assembly.clearHighlights();
        var obj = this.assembly.select(event.clientX, event.clientY);
        // Did we find an object
        if (obj) {
            obj = obj.getNamedParent();
            // Yes, go highlight it in the tree
            obj.highlight(0xffff8f);
        }
    };

    CADjs.prototype.explode = function(distance) {
        var node = this.tree.get_selected(false);
        if (node) {
            for (var i = 0; i < node.length; i++) {
                var obj = this.assembly.getByID(node[i]);
                if (obj) {
                    obj.explode(distance);
                }
            }
        }
    };

    CADjs.prototype.setSelectedOpacity = function(opacity) {
        var node = this.tree.get_selected(false);
        if (node) {
            for (var i = 0; i < node.length; i++) {
                var obj = this.assembly.getByID(node[i]);
                if (obj) {
                    obj.setOpacity(opacity);
                }
            }
        }
    };

    CADjs.prototype.renderTree = function() {
        var self = this;
        var geometryOnly = false;
        var treeData = this.assembly.getTree(geometryOnly);
        if (this.tree) this.tree.destroy();
        this.tree = $.jstree.create(this.treeContainer, {
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
                        showAll: {
                            label: "Show All",
                            action: function() {
                                self.assembly.showAll();
                                // TODO: Need to update tree to make all enabled
                                //console.log(self.tree.disabled);
                            }
                        },
                        focusOn: {
                            label: "Focus On",
                            action: function() {
                                var obj = self.assembly.getByID(menuItem.id);
                                if (obj) {
                                    self.assembly.focusOn(obj);
                                }
                            }
                        }
                    };
                    if (menuItem.state.disabled) {
                        menu["show"] = {
                            label: "Show",
                            action: function() {
                                var obj = self.assembly.getByID(menuItem.id);
                                if (obj) {
                                    obj.show();
                                    self.tree.enable_node(menuItem);
                                }
                            }
                        };
                    } else {
                        menu["hide"] = {
                            label: "Hide",
                            action: function() {
                                var obj = self.assembly.getByID(menuItem.id);
                                if (obj) {
                                    obj.hide();
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

        this.treeContainer.on("select_node.jstree deselect_node.jstree", function(event, data) {
            self.assembly.hideAllBoundingBoxes();
            //self.assembly.clearHighlights();
            for (var i = 0; i < data.selected.length; i++) {
                var obj = self.assembly.getByID(data.selected[i]);
                if (obj) {
                    obj.showBoundingBox();
                    //obj.highlight(0xff0000);
                }
            }
        });
    };

    return CADjs;
});