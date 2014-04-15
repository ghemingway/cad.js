/*global define, console, BigScreen */

/* G. Hemingway Copyright @2014
 * Context for the visualization of a set of CAD models
 */
/*************************************************************************/


define(["jquery", "jstree", "data_loader", "viewer", 'NProgressRing'], function($, jstree, DataLoader, Viewer, NProgressRing) {

    "use strict";
    /* config:
        viewContainerId
        compassContainerId
        downloadsContainerId
        treeContainerSelector
        isCompact
        theme
     */

    var THEMES = {
            "dark": {
                cssClass: "dark",
                canvasClearColor: 0x000000,
                annotationColor: 0xffffff,
                boundingBoxColor: 0x4f95bc
            },
            "bright": {
                cssClass: "bright",
                canvasClearColor: 0xffffff,
                annotationColor: 0x004080,
                boundingBoxColor: 0x008040
            }
        };
    THEMES.default = THEMES.dark;

    function CADjs(config) {
        if (!config || !config.viewContainerId || !config.compassContainerId || !config.treeContainerSelector) {
            throw "CAD.js requires a configuration!!!";
        }
        this._viewContainerId = config.viewContainerId;
        this._$viewContainer = $( '#' + config.viewContainerId );

        this._compassContainerId = config.compassContainerId;
        this._$compassContainer = $( '#' + config.compassContainerId );

        this._treeContainerSelector = config.treeContainerSelector;
        this._$treeContainer = $( config.treeContainerSelector );

        this._$downloadsContainer = $( '#' + config.downloadsContainerId );

        this._isCompact = undefined;
        this._isFullScreen = undefined;
        this._wasCompactBeforeFullscreen = false;

        this._loader = undefined;
        this._parts = [];
        this._viewer = undefined;
        this._theme = undefined;

        if ( config.isCompact !== undefined ) {
            this.setCompactMode( config.isCompact );
        } else {
            this.setCompactMode( false );
        }

        this.setTheme(THEMES[config.theme] || THEMES.dark);

    }

    CADjs.prototype.setupPage = function() {
        // Create the viewer
        var self = this,
            canvasClearColor = 0x000000,
            $resizer = $('#resizer'),
            $expander = $('#resizer>.expander'),
            $minimizer = $('#resizer>.minimizer'),
            minimizeMe, expandMe;


        if (BigScreen.enabled && this._isCompact === true) {

            minimizeMe = function() {
                BigScreen.toggle();
            };

            expandMe = function() {
                BigScreen.toggle();
            };

            $resizer.show();
            $minimizer.hide();
            $expander.show();

            $expander.click(function() {
                expandMe();
            });

            $minimizer.click(function() {
                minimizeMe();
            });


            BigScreen.onenter = function() {
                $minimizer.toggle();
                $expander.toggle();
                self.setFullScreenMode(true);
            };

            BigScreen.onexit = function() {
                $minimizer.toggle();
                $expander.toggle();
                self.setFullScreenMode(false);
            };

        } else {
            $resizer.hide();
        }

        if ( this._theme ) {
            canvasClearColor = this._theme.canvasClearColor;
        }

        this._viewer = new Viewer(this);

        // Create the data loader
        this._loader = new DataLoader(this, this._viewer, { autorun: false });
        // Events
        this.bindEvents();
        // Signal ready
        $(this).trigger("pageSetup");

        $('body').removeClass('non-initialized');
    };

    CADjs.prototype.setCompactMode = function(isCompact) {

        var $body = $( 'body' );

        if ( this._isCompact !== isCompact ) {

            if ( isCompact ) {

                $body.addClass( "compact");

            } else {

                $body.removeClass( "compact");

            }

            this._isCompact = isCompact;

        }
    };

    CADjs.prototype.setFullScreenMode = function(fullScreenMode) {

        var $body = $('body');

        if (this._isFullScreen !== fullScreenMode) {

            if (this._isFullScreen !== true && this._isCompact === true) {
                this._wasCompactBeforeFullscreen = true;
                this.setCompactMode(false);
            } else if ( this._isFullScreen === true && this._wasCompactBeforeFullscreen === true ) {
                this._wasCompactBeforeFullscreen = false;
                this.setCompactMode(true);
            }

            this._isFullScreen = fullScreenMode;

            if (this._isFullScreen) {
                $body.addClass('fullscreen');
            } else {
                $body.removeClass('fullscreen');
            }

        }
    };

    CADjs.prototype.setTheme = function(theme) {

        var $body = $( 'body' );

        if ( theme ) {

            if ( this._theme ) {
                $body.removeClass( this._theme.cssClass );
            }

            $body.addClass( theme.cssClass );

            if (this._viewer) {
                this._viewer.renderer.setClearColor( theme.canvasClearColor );
            }

            this._theme = theme;

        }
    };

    CADjs.prototype.getThemeValue = function(name) {
        if (typeof(this._theme[name]) !== 'undefined') {
            return this._theme[name];
        } else {
            return THEMES.default[name];
        }
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
                // calculate the scene's radius for draw distance calculations
                self._viewer.updateSceneBoundingBox(part.getBoundingBox());
                // center the view
                self._viewer.zoomToFit(part);
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
        var self = this,
            canvasDOM = $( this._$viewContainer )[0],

        // Download manager interface
            $downloadsUl = this._$downloadsContainer.find( ">ul"),
            $downloadsCounter = this._$downloadsContainer.find( ".cadjs-downloads-count"),

            progressRing = new NPROGRESSRING({
                parentElement: this._$downloadsContainer.find('#cadjs-downloads-progress-bar')[0],
                size: 18,
                innerRadius: 0.6,
                rotationSpeed: -Math.PI
            }),
            progressIdMap = {},
            progressValues = [];

        this._loader.addEventListener("addRequest", function(event) {
            var id = event.file.split(".")[0];
            progressIdMap[id] = progressValues.push(0) - 1;
            progressRing.update(progressValues);
            $downloadsUl.append("<li id='" + id + "'>" + event.file + "</li>");
            var count = self._loader.queueLength(false);
            $downloadsCounter.text(count);

            // Maming sure it is visble
            self._$downloadsContainer.removeClass( "out" );

        });
        this._loader.addEventListener("loadComplete", function(event) {
            var id = event.file.split(".")[0];
            progressValues[progressIdMap[id]] = 1;
            progressRing.update(progressValues);
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
            $downloadsCounter.text(count);

            // Hiding when empty
            if ( count === 0 ) {
                self._$downloadsContainer.addClass( "out" );
            }

        });
        this._loader.addEventListener("loadProgress", function(event) {
            if (event.loaded) {
                var id = event.file.split(".")[0];
                progressValues[progressIdMap[id]] = event.loaded / 100;
                progressRing.update(progressValues);
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
            if (!_change) {
                self.onClick(event);
            }
            _change = false;
        }, false);
        canvasDOM.addEventListener("mousemove", function(event) {
            if (!_change) {
                self.onMove(event);
            }
        }, false);

        // Keybased events
        window.addEventListener("keypress", function(event) {
            var node, obj;
            switch(event.keyCode || event.charCode || event.which) {
                // Explode on 'x' key pressed
                case 120:
                    self.explode(self.getExplodeDistance());
                    break;
                // Unexplode on 's' key pressed
                case 115:
                    self.explode(-self.getExplodeDistance());
                    break;
                // 'q' unselects all tree elements
                case 113:
                    self._parts[0].hideAllBoundingBoxes();
                    self.tree.deselect_all();
                    self._viewer.invalidate();
                    break;
                // 'o' to toggle transparency
                case 111:
                    node = self.tree.get_selected(false);
                    obj = self._parts[0].getByID(node[0]);
                    if (obj) {
                        obj.toggleTransparency();
                    } else {
                        self._parts[0].toggleTransparency();
                    }
                    self._viewer.invalidate();
                    break;
                // 'z' to zoomToFit
                case 122:
                    node = self.tree.get_selected(false);
                    obj = self._parts[0].getByID(node[0]);
                    if (!obj) {
                        obj = self._parts[0];
                    }
                    self._viewer.zoomToFit(obj);
                    break;
                // 'j' hide/show element
                case 106:
                    node = self.tree.get_selected(false);
                    obj = self._parts[0].getByID(node[0]);
                    if (obj) {
                        obj.toggleVisibility();
                        self._viewer.invalidate();
                    }
                    break;
            }
        }, true);
    };

    CADjs.prototype.onClick = function(event) {
        if (!this._parts[0]) {
            return;
        }

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

    CADjs.prototype.onMove = function(event) {
        var obj;
        if (this._parts.length > 0) {
            this._parts[0].clearHighlights();
            obj = this._parts[0].select(this._viewer.camera, event.clientX, event.clientY);
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
                var obj = this._parts[0].getByID(node[i]);
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
    CADjs.prototype.renderTree = function() {
        var self = this;
        var geometryOnly = false;
        var treeData = this._parts[0].getTree(geometryOnly);
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
                    var obj = self._parts[0].getByID(menuItem.id),
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
