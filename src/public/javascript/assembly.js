/* G. Hemingway Copyright @2014
 * Context for the overall CAD assembly
 */

"use strict";


/*************************************************************************/


define(["THREE"], function(THREE) {
    /* config:
        defaultColor
        debug
     */
    function Assembly(rootID, defaultColor, loader) {
        this._rootID = rootID;
        this._defaultColor = defaultColor;
        this._loader = loader;
        this._objects = [];
        this._product = undefined;
    }

    Assembly.prototype.getCADjs = function() {
        return this._loader._parent;
    };

    Assembly.prototype.getID = function() {
        if (this._product) {
            return this._product.getID();
        } else {
            return "id0";
        }
    };

    Assembly.prototype.getObject3D = function() {
        return this._product.getObject3D();
    };

    Assembly.prototype.isChild = function(id) {
        return (this._objects[id] !== undefined);
    };

    Assembly.prototype.getChild = function(id) {
        return this._objects[id];
    };

    Assembly.prototype.makeChild = function(id, fallback) {
//        console.log("Assembly.makeChild: " + id);
        if (!id) {
            throw new Error("null id");
        }
        var ret = this._objects[id];
        if (ret) {
            return ret;
        }
        this._objects[id] = fallback;
        return null;
    };

    Assembly.prototype.setRootProduct = function(product) {
        this._product = product;
    };

    Assembly.prototype.name = function() {
        if (this._product) {
            if (this._product._stepFile) return this._product._stepFile;
            else return this._product._name;
        } else {
            return "Assembly";
        }
    };

    Assembly.prototype.getBoundingBox = function() {
        if (this._product) {
            return this._product.getBoundingBox();
        }
        return new THREE.Box3();
    };

    Assembly.prototype.showBoundingBox = function() {
        if (this._product) {
            this._product.showBoundingBox();
        }
    };

    Assembly.prototype.hideBoundingBox = function() {
        if (this._product) {
            this._product.hideBoundingBox();
        }
    };

    Assembly.prototype.getByID = function(id) {
        var obj = undefined;
        // Special case for the root element
        if (id === "id0") {
            obj = this;
        } else if (typeof(id) !== 'undefined') {
            var parts = id.split("_");
            obj = this._objects[parts[0]];
            // Looks like an instance was selected
            if (parts.length > 1 && parts[1] !== "0") {
                obj = obj._instances[parts[1]-1];
            }
        }
        return obj;

    };

    Assembly.prototype.toggleTransparency = function () {
        if (this._product) {
            this._product.toggleTransparency();
        }
    };

    Assembly.prototype.setOpacity = function (opacity) {
        if (this._product) {
            this._product.setOpacity(opacity);
        }
    };

    Assembly.prototype.showAll = function() {
        if (this._product) {
            this._product.getObject3D().traverse(function(object) {
                object.visible = true;
            });
        }
    };

    Assembly.prototype.hideAll = function() {
        if (this._product) {
            this._product.getObject3D().traverse(function(object) {
                object.visible = false;
            });
        }
    };

    Assembly.prototype.toggleVisibility = function() {
        if (this._product._object3D.visible) {
            this.hide();
        } else {
            this.show();
        }
        return this._product._object3D.visible;
    };

    Assembly.prototype.hide = function() {
        if (this._product) {
            this._product.hide();
        }
    };

    Assembly.prototype.show = function() {
        if (this._product) {
            this._product.show();
        }
    };

    Assembly.prototype.hideAllBoundingBoxes = function() {
        this.dispatchEvent({ type: "_hideBounding" });
    };

    Assembly.prototype.clearHighlights = function() {
        this.dispatchEvent({ type: "_clearHighlights" });
    };

    Assembly.prototype.clearOpacity = function() {
        this.dispatchEvent({ type: "_clearOpacity" });
    };

    Assembly.prototype.getTree = function() {
        var node = {
            id          : "id0",
            text        : this.name(),
            state       : {
                opened    : true,
                disabled  : false,
                selected  : false
            },
            children    : []  // array of strings or objects
        };
        if (this._product) {
            node.children.push(this._product.getTree());
        }
        return node;
    };

    Assembly.prototype.centerGeometry = function() {
        if (this._product) {
            var bbox = this._product.getBoundingBox();
            if (!bbox.empty()) {
                var x = (bbox.max.x + bbox.min.x) / -2.0;
                var y = (bbox.max.y + bbox.min.y) / -2.0;
                var z = (bbox.max.z + bbox.min.z) / -2.0;
                this._product.applyMatrix(new THREE.Matrix4().makeTranslation(x, y, z));
            }
        }
    };

    Assembly.prototype.select = function(camera, mouseX, mouseY) {
        if (!this._product) return undefined;
        mouseX = (mouseX / window.innerWidth) * 2 - 1;
        mouseY = -(mouseY / window.innerHeight) * 2 + 1;
        // Convert mouse-space to global
        var vector = new THREE.Vector3(mouseX, mouseY, .999);
        var projector = new THREE.Projector();
        projector.unprojectVector(vector, camera);
        // Cast ray from camera, pointed towards click point
        vector.sub(camera.position).normalize();
        var raycaster = new THREE.Raycaster(camera.position, vector);
        var intersections = raycaster.intersectObjects(this._product.getObject3D().children, true);
        // Did we hit anything?
        var object = undefined;
        if (intersections.length > 0) {
            var hit = undefined;
            for (var i = 0; i < intersections.length; i++) {
                if (intersections[i].object.visible) {
                    if (!hit || intersections[i].distance < hit.distance) {
                        hit = intersections[i];
                    }
                }
            }
            if (hit) {
                object = hit.object.userData;
            }
        }
        return object;
    };

    Assembly.prototype.explode = function(distance, timeS) {
    };

    /***********************************/

    Assembly.prototype.buildBoundingBox = function( box ) {
        if (box.empty()) {
            return undefined;
        }
        // Create the new box buffer
        var geometry = new THREE.BufferGeometry();
        geometry.addAttribute( 'position', Float32Array, 36, 3 );

        var positions = geometry.attributes.position.array;
        //Front face bottom
        positions[0]  = box.min.x;
        positions[1]  = box.min.y;
        positions[2]  = box.min.z;
        positions[3]  = box.max.x;
        positions[4]  = box.min.y;
        positions[5]  = box.min.z;
        //Front face left
        positions[6]  = box.min.x;
        positions[7]  = box.min.y;
        positions[8]  = box.min.z;
        positions[9]  = box.min.x;
        positions[10] = box.max.y;
        positions[11] = box.min.z;
        // Front face top
        positions[12] = box.min.x;
        positions[13] = box.max.y;
        positions[14] = box.min.z;
        positions[15] = box.max.x;
        positions[16] = box.max.y;
        positions[17] = box.min.z;
        // Front face right
        positions[18] = box.max.x;
        positions[19] = box.min.y;
        positions[20] = box.min.z;
        positions[21] = box.max.x;
        positions[22] = box.max.y;
        positions[23] = box.min.z;

        // Lower left ->
        positions[24] = box.min.x;

        positions[25] = box.min.y;
        positions[26] = box.min.z;
        positions[27] = box.min.x;
        positions[28] = box.min.y;
        positions[29] = box.max.z;
        // Lower right ->
        positions[30] = box.max.x;
        positions[31] = box.min.y;
        positions[32] = box.min.z;
        positions[33] = box.max.x;
        positions[34] = box.min.y;
        positions[35] = box.max.z;
        // Upper left ->
        positions[36] = box.min.x;
        positions[37] = box.max.y;
        positions[38] = box.min.z;
        positions[39] = box.min.x;
        positions[40] = box.max.y;
        positions[41] = box.max.z;
        // Upper right ->
        positions[42] = box.max.x;
        positions[43] = box.max.y;
        positions[44] = box.min.z;
        positions[45] = box.max.x;
        positions[46] = box.max.y;
        positions[47] = box.max.z;

        // Back face bottom
        positions[48] = box.min.x;
        positions[49] = box.min.y;
        positions[50] = box.max.z;
        positions[51] = box.max.x;
        positions[52] = box.min.y;
        positions[53] = box.max.z;
        // Back face left
        positions[54] = box.min.x;
        positions[55] = box.min.y;
        positions[56] = box.max.z;
        positions[57] = box.min.x;
        positions[58] = box.max.y;
        positions[59] = box.max.z;
        // Back face top
        positions[60] = box.min.x;
        positions[61] = box.max.y;
        positions[62] = box.max.z;
        positions[63] = box.max.x;
        positions[64] = box.max.y;
        positions[65] = box.max.z;
        // Back face right
        positions[66] = box.max.x;
        positions[67] = box.min.y;
        positions[68] = box.max.z;
        positions[69] = box.max.x;
        positions[70] = box.max.y;
        positions[71] = box.max.z;

        // Return the new Bounding Box Geometry
        var material = new THREE.LineBasicMaterial({
            linewidth: 2,
            color: this.getCADjs().getThemeValue('boundingBoxColor')
        });
        return new THREE.Line(geometry, material, THREE.LinePieces);
    };

    /***********************************/

    // Let Assembly have event system
    THREE.EventDispatcher.prototype.apply(Assembly.prototype);
    return Assembly;
});
