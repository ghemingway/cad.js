/* G. Hemingway Copyright @2014
 * Context for the overall STEP file
 */

"use strict";


/*************************************************************************/


define(["THREE"], function(THREE) {
/* config:
    canvasName
    url
    debug
 */
function Assembly(config) {
    // Prepare the assembly
    this.defaultColor = config.defaultColor;
    this.debug = config.debug ? config.debug : false;
}

Assembly.prototype.load = function() {
    var self = this;
};

Assembly.prototype.getBoundingBox = function() {
    return this.product.getBoundingBox();
};

Assembly.prototype.showBoundingBox = function() {
    return this.product.showBoundingBox();
};

Assembly.prototype.hideBoundingBox = function() {
    return this.product.hideBoundingBox();
};

Assembly.prototype.render = function() {
    // Can update animations embedded within the assembly here
    this.dispatchEvent({ type: "_updateAnimation" });
    this.geometryViewer.render();
};

Assembly.prototype.getByID = function(id) {
    var obj = undefined;
    // Special case for the root element
    if (id === "id0") {
        obj = this;
    } else {
        var parts = id.split("_");
        obj = this.builder.objs[parts[0]];
        // Looks like an instance was selected
        if (parts.length > 1 && parts[1] !== "0") {
            obj = obj.instances[parts[1]-1];
        }
    }
    return obj;

};

Assembly.prototype.showAll = function() {
    this.product.object3D.traverse(function(object) {
        object.visible = true;
    });
};

Assembly.prototype.hideAll = function() {
    this.product.object3D.traverse(function(object) {
        object.visible = false;
    });
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
        text        : this.name,
        state       : {
            opened    : true,
            disabled  : false,
            selected  : false
        },
        children    : []  // array of strings or objects
    };
    if (this.product) {
        node.children.push(this.product.getTree());
    }
    return node;
};

Assembly.prototype.centerGeometry = function() {
    var bbox = this.product.getBoundingBox();
    if (!bbox.empty()) {
        var x = (bbox.max.x + bbox.min.x) / -2.0;
        var y = (bbox.max.y + bbox.min.y) / -2.0;
        var z = (bbox.max.z + bbox.min.z) / -2.0;
        this.product.object3D.applyMatrix(new THREE.Matrix4().makeTranslation(x, y, z));
    }
};


Assembly.prototype.focusOn = function(obj) {
    if (!obj) return;
    var bbox = obj.getBoundingBox(true);
    obj.object3D.updateMatrixWorld();
    var inverseGlobalMatrix = (new THREE.Matrix4()).getInverse(obj.object3D.matrixWorld);
    if (!bbox.empty()) {
        bbox.applyMatrix(inverseGlobalMatrix);
        console.log(bbox.min);
        console.log(bbox.max);
//        var x = (bbox.max.x + bbox.min.x) / -2.0;
//        var y = (bbox.max.y + bbox.min.y) / -2.0;
//        var z = (bbox.max.z + bbox.min.z) / -2.0;
//        console.log("Setting offsets to: " + x + ", " + y + ", " + z);
//        this.product.object3D.applyMatrix( new THREE.Matrix4().makeTranslation(x, y, z) );
//        this.geometryViewer.render();
    }
};

Assembly.prototype.select = function(mouseX, mouseY) {
    mouseX = (mouseX / window.innerWidth) * 2 - 1;
    mouseY = -(mouseY / window.innerHeight) * 2 + 1;
    // Convert mouse-space to global
    var vector = new THREE.Vector3(mouseX, mouseY, .999);
    var projector = new THREE.Projector();
    projector.unprojectVector(vector, this.geometryViewer.camera);
    // Cast ray from camera, pointed towards click point
    vector.sub(this.geometryViewer.camera.position).normalize();
    var raycaster = new THREE.Raycaster(this.geometryViewer.camera.position, vector);
    var intersections = raycaster.intersectObjects(this.geometryViewer.scene.children, true);
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


THREE.EventDispatcher.prototype.apply(Assembly.prototype);