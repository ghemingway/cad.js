/* G. Hemingway Copyright @2014
 * Shape class for the STEP file
 */

"use strict";


/********************************* Shape Class ********************************/

function Shape(id, builder, assembly, parent, transform, makeInstance) {
    var ret = builder.make(id, this, "shape"),
        localTransform,
        i,
        self = this;
    if (!ret) {
        var el = builder.getElement(id);
        this.id = id;
        this.assembly = assembly;
        this.parent = parent;
        // If we are here, this is the first one
        this.instanceID = 0;
        this.instances = [];
        this.instance = undefined;

        //this.unit = builder.parseUnit(el.getAttribute("unit"));
        this.object3D = new THREE.Object3D();
        // Setup any transform from the parent reference frame
        this.transform = (new THREE.Matrix4()).copy(transform);
        this.object3D.applyMatrix(this.transform);

        // Load shells - if any
        this.shells = [];
        var shells = builder.getArrayFromAttribute(el, "shell");
        for (i = 0; i < shells.length; i++) {
            var shell = new Shell(shells[i], builder, assembly, this);
            shell.addEventListener("shellEndLoad", function(event) {
                self.addGeometry(event.shell.geometry);
            });
            this.shells.push(shell);
        }

        // Load child shapes
        this.children = [];
        var childShapeIDs = el.getElementsByTagName("child");
        if (childShapeIDs.length > 0) {
            for (i = 0; i < childShapeIDs.length; i++) {
                var childEl = childShapeIDs[i];
                // Setup the child's transform
                localTransform = builder.parseXform(childEl.getAttribute("xform"), true);
                // Build the child
                var refID = childEl.getAttribute("ref");
                var shape = new Shape(refID, builder, assembly, this, localTransform, makeInstance);
                // Bubble the shapeLoaded event
                shape.addEventListener("shapeLoaded", function(event) {
                    self.dispatchEvent({ type: "shapeLoaded", shell: event.shell });
                });
                // Add of the child shape to the scene graph
                this.object3D.add(shape.getObject3D());
                this.children.push(shape);
            }
        }
    } else {
        if (makeInstance) {
            // Set up the object to be an instance
            this.instance(ret, builder, parent, transform);
            ret = this;
        }
    }
    return ret;
}

Shape.prototype.instance = function(source, builder, parent, transform) {
    var i,
        shell,
        self = this;

    // Setup the basic info
    this.id = source.id;
    this.assembly = source.assembly;
    this.parent = parent;
    // Setup instance info
    source.instances.push(this);
    this.instanceID =   source.instances.length;
    this.instance = source;
    this.instances = [];

    // Need to clone Object3D and subscribe to child shell events
    this.shells = [];
    for (i = 0; i < source.shells.length; i++) {
        shell = source.shells[i];
        shell.addEventListener("shellEndLoad", function(event) {
            self.addGeometry(event.shell.geometry);
        });
        this.shells.push(shell);
    }

    // Prep the object3D
    this.object3D = new THREE.Object3D();
    this.transform = (new THREE.Matrix4()).copy(transform);
    this.object3D.applyMatrix(this.transform);

    // Need to clone all child shapes
    this.children = [];
    for (i = 0; i < source.children.length; i++) {
        // Clone the child shape
        var shapeID = source.children[i].id;
        var shape = new Shape(shapeID, builder, this.assembly, this, source.children[i].transform, true);
        // Bubble the shapeLoaded event
        shape.addEventListener("shapeLoaded", function(event) {
            self.dispatchEvent({ type: "shapeLoaded", shell: event.shell });
        });
        // Add of the child shape to the scene graph
        this.object3D.add(shape.getObject3D());
        this.children.push(shape);
    }
};

Shape.prototype.setProduct = function(product) {
    this.product = product;
    // Set the product for all instances
    for (var i = 0; i < this.instances.length; i++) {
        this.instances[i].setProduct(product);
    }
};

Shape.prototype.addGeometry = function(geometry) {
    var material = new THREE.MeshPhongMaterial({
        color: 0xaaaaaa,
        ambient: 0xaaaaaa,
        specular: 0xffffff,
        shininess: 255,
        side: THREE.FrontSide,
        vertexColors: THREE.VertexColors,
        transparent: true
    });
    var mesh = new THREE.SkinnedMesh(geometry, material, false);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = this;
    this.object3D.add(mesh);
    this.dispatchEvent({ type: "shapeLoaded" });
};

Shape.prototype.getObject3D = function() {
    return this.object3D;
};

Shape.prototype.getName = function() {
    return "Shape";
};

Shape.prototype.getID = function() {
    return this.id + "_" + this.instanceID;
};

Shape.prototype.getSize = function() {
    if (!this.size) {
        this.size = 0;
        var i;
        for (i = 0; i < this.shells.length; i++) {
            this.size += this.shells[i].size;
        }
        for (i = 0; i < this.children.length; i++) {
            this.size += this.children[i].getSize();
        }
    }
    return this.size;
};

Shape.prototype.getLabel = function() {
    if (this.product) {
        return this.product.getProductName();
    }
    return null;
};

Shape.prototype.getNamedParent = function(includeSelf) {
    if (includeSelf === undefined) includeSelf = true;
    if (includeSelf && this.product) {
        return this;
    } else {
        var obj = this.parent;
        while (!obj.product && obj.parent) {
            console.log(obj.getID());
            obj = obj.parent;
        }
        return obj;
    }
};

Shape.prototype.getTree = function() {
    // Check if only geometry-aligned Shapes get added to tree
    var children = [], tmpChild;
    for (var i = 0; i < this.children.length; i++) {
        tmpChild = this.children[i].getTree();
        if (tmpChild) {
            children.push(tmpChild);
        }
    }
    // Only show things that are product-driven
    if (!this.product || this.boundingBox.empty()) {
        return undefined;
    } else {
        var id = this.getID();
        this.name = "Shape " + id;
        if (this.product) {
            this.name = this.product.getProductName();
        }
        // Don't show children if this is an instance
        return {
            id          : id,
            text        : this.name,
            state       : {
                opened    : this.instanceID === 0,
                disabled  : false,
                selected  : false
            },
            children    : children
        };
    }
};

Shape.prototype.getBoundingBox = function(transform) {
    if (!this.boundingBox) {
        var i;
        this.boundingBox = new THREE.Box3();
        for (i = 0; i < this.shells.length; i++) {
            var shellBounds = this.shells[i].getBoundingBox(true);
            if (!shellBounds.empty()) this.boundingBox.union(shellBounds);
        }
        for (i = 0; i < this.children.length; i++) {
            var childBounds = this.children[i].getBoundingBox(true);
            if (!childBounds.empty()) {
                this.boundingBox.union(childBounds);
            }
        }
    }
    var bounds = this.boundingBox.clone();
    if (transform && !bounds.empty()) {
        bounds.applyMatrix4(this.transform);
    }
    return bounds;
};

Shape.prototype.toggleVisibility = function() {
    if (this.object3D.visible) this.hide();
    else this.show();
};

Shape.prototype.hide = function() {
    this.object3D.traverse(function(object) {
        object.visible = false;
    });
};

Shape.prototype.show = function() {
    this.object3D.traverse(function(object) {
        object.visible = true;
    });
};

Shape.prototype.highlight = function(colorHex) {
    var self = this;
    this.object3D.traverse(function(object) {
        if (object.material) {
            object.material._color = {
                ambient: object.material.ambient,
                color: object.material.color,
                specular: object.material.specular
            };
            object.material.ambient = new THREE.Color(colorHex);
            object.material.color = object.material.ambient;
            object.material.specular = object.material.specular;
            self.assembly.addEventListener("_clearHighlights", function() {
                object.material.ambient = object.material._color.ambient;
                object.material.color = object.material._color.color;
                object.material.specular = object.material._color.specular;
            });
        }
    });
};

Shape.prototype.setOpacity = function (opacity) {
    var self = this;
    this.object3D.traverse(function(object) {
        if (object.material) {
            object.material.opacity = opacity;
            self.assembly.addEventListener("_clearOpacity", function() {
                object.material.opacity = 1;
            });
        }
    });
};

Shape.prototype.showBoundingBox = function() {
    var bounds = this.getBoundingBox(false);
    if (!this.bbox && !bounds.empty()) {
        this.bbox = this.assembly.geometryViewer.buildBoundingBox(bounds);
    }
    if (this.bbox) {
        var self = this;
        this._eventFunc = function() {
            self.hideBoundingBox();
        };
        // Start listening for assembly _hideBounding events
        this.assembly.addEventListener("_hideBounding", this._eventFunc);
        this.object3D.add(this.bbox);
    }
};

Shape.prototype.hideBoundingBox = function() {
    // Start listening for assembly _hideBounding events
    this.assembly.removeEventListener("_hideBounding", this._eventFunc);
    this.object3D.remove(this.bbox);
};

Shape.prototype.getCentroid = function(world) {
    if (world === undefined) world = true;
    var bbox = this.getBoundingBox(false);
    if (world) {
        bbox.min.applyMatrix4(this.object3D.matrixWorld);
        bbox.max.applyMatrix4(this.object3D.matrixWorld);
    }
    return bbox.center();
};

Shape.prototype.explode = function(distance, timeS) {
    var i, child, self = this;
    // Do we need to determine explosion direction
    if (!this._explodeDistance) {
        this._explodeStates = {};
        this._explodeDistance = 0;
        timeS = timeS ? timeS : 1.0;
        this._explodeStepSize = distance / 60.0 * timeS;
        this._explodeStepRemain = 60.0 * timeS;
        var explosionCenter = this.getCentroid();
        for (i = 0; i < this.children.length; i++) {
            child = this.children[i];
            // Convert the objectCenter
            var localExplosionCenter = explosionCenter.clone();
            child.object3D.worldToLocal(localExplosionCenter);
            // Get the child's centroid in local frame
            var childCenter = child.getCentroid(false);
            // Calculate explosion direction vector in local frame and save it
            childCenter.sub(localExplosionCenter).normalize();
            this._explodeStates[child.id] = childCenter;
        }
        // After all children are loaded - start listening for assembly events
//        this.assembly.addEventListener("_updateAnimation", function() {
//            self._updateAnimation();
//        });
    }
    // Make sure explosion distance does not go negative
    if (this._explodeDistance + distance < 0) {
        distance = -this._explodeDistance;
    }
    // Now, do the explosion
    this._explodeDistance += distance;
//    console.log("Exploded Distance: " + this._explodeDistance);
    for (i = 0; i < this.children.length; i++) {
        child = this.children[i];
        var explosionDirection = this._explodeStates[child.id];
        child.object3D.translateOnAxis(explosionDirection, distance);
    }
    // Clean up after myself
    if (this._explodeDistance === 0) {
        this.resetExplode();
    }
};

Shape.prototype._explodeStep = function(distance, step) {

};

Shape.prototype._updateAnimation = function() {
    if (this._explodeStepRemain > 0) {
    }
};

Shape.prototype.resetExplode = function() {
    if (this._explodeDistance) {
        // Explode by the negative distance
        this.explode(-this._explodeDistance);
        this._explodeDistance = undefined;
        this._explodeStates = undefined;
        this._exploseStep = undefined;
    }
};


THREE.EventDispatcher.prototype.apply(Shape.prototype);