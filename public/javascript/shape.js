/* G. Hemingway Copyright @2014
 * Shape class for the CAD models
 */

"use strict";


/********************************* Shape Class ********************************/

define(["THREE"], function(THREE) {
    function Shape(id, assembly, parent, transform, unit) {
        var ret = assembly.makeChild(id, this);
        if (!ret) {
//            console.log("Make new shape: " + id);
            this._id = id;
            this._assembly = assembly;
            this._parent = parent;
            this._unit = unit;
            // If we are here, this is the first one
            this._instanceID = 0;
            this._instances = [];
            this._instance = undefined;
            // Other setup items
            this._children = [];
            this._annotations = [];
            this._shells = [];
            // Setup 3D
            this._object3D = new THREE.Object3D();
            // Setup any transform from the parent reference frame
            this._transform = (new THREE.Matrix4()).copy(transform);
            this._object3D.applyMatrix(this._transform);
        } else {
            // Set up the object to be an instance
            this.instance(ret, assembly, parent, transform);
            ret = this;
        }
        return ret;
    }

    Shape.prototype.instance = function(source, assembly, parent, transform) {
        // Setup the basic info
        this._id = source._id;
        this._assembly = source._assembly;
        this._parent = parent;
        this._unit = source._unit;
        // Setup instance info
        source._instances.push(this);
        this._instanceID = source._instances.length;
        this._instance = source;
        this._instances = [];
//        console.log("Instance existing shape: " + this.getID());
        // Other setup items
        this._isRoot = source._isRoot;
        // Prep the object3D
        this._object3D = new THREE.Object3D();
        this._transform = (new THREE.Matrix4()).copy(transform);
        this._object3D.applyMatrix(this._transform);

        // Need to clone child shell references & events
        this._shells = [];
        var self = this;
        for (var i = 0; i < source._shells.length; i++) {
            var shell = source._shells[i];
            shell.addEventListener("shellEndLoad", function(event) {
                self.addGeometry(event.shell.geometry);
            });
            this._shells.push(shell);
        }

        // Need to clone all child shapes
        this._children = [];
        for (i = 0; i < source._children.length; i++) {
            // Clone the child shape
            var shapeID = source._children[i]._id;
            var shape = new Shape(shapeID, this._assembly, this, source._children[i]._transform, this._unit);
            // Bubble the shapeLoaded event
            shape.addEventListener("shapeLoaded", function(event) {
                self.dispatchEvent({ type: "shapeLoaded", shell: event.shell });
            });
            // Add of the child shape to the scene graph
            this._object3D.add(shape.getObject3D());
            this._children.push(shape);
        }
    };

    Shape.prototype.addChild = function(childShape) {
        var self = this;
        this._children.push(childShape);
        // Bubble the shapeLoaded event
        childShape.addEventListener("shapeLoaded", function(event) {
            self.dispatchEvent({ type: "shapeLoaded", shell: event.shell });
        });
        // Add of the child shape to the scene graph
        this._object3D.add(childShape.getObject3D());
    };

    Shape.prototype.addAnnotation = function(annotation) {
        this._annotations.push(annotation);
    };

    Shape.prototype.addShell = function(shell) {
        var self = this;
        this._shells.push(shell);
        shell.addEventListener("shellEndLoad", function(event) {
            var shell = event.shell;
            self.addGeometry(shell._geometry);
        });
    };

    Shape.prototype.setProduct = function(product) {
        this._product = product;
        // Set the product for all instances
        for (var i = 0; i < this._instances.length; i++) {
            this._instances[i].setProduct(product);
        }
    };

    Shape.prototype.addGeometry = function(geometry) {
//        console.log("Adding Geo: " + this.getID());
        var material = new THREE.MeshPhongMaterial({
            color: 0xaaaaaa,
            ambient: 0xaaaaaa,
            specular: 0xffffff,
            shininess: 255,
//            side: THREE.FrontSide,
            side: THREE.DoubleSide,
            vertexColors: THREE.VertexColors,
            transparent: true
        });
        var mesh = new THREE.SkinnedMesh(geometry, material, false);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData = this;
        this._object3D.add(mesh);
        this.dispatchEvent({ type: "shapeLoaded" });
    };

    Shape.prototype.getObject3D = function() {
        return this._object3D;
    };

    Shape.prototype.getName = function() {
        return "Shape";
    };

    Shape.prototype.getID = function() {
        return this._id + "_" + this._instanceID;
    };

    Shape.prototype.getSize = function() {
        if (!this._size) {
            this._size = 0;
            var i;
            for (i = 0; i < this._shells.length; i++) {
                this._size += this._shells[i].size;
            }
            for (i = 0; i < this._children.length; i++) {
                this._size += this._children[i].getSize();
            }
        }
        return this._size;
    };

    Shape.prototype.getLabel = function() {
        if (this._product) {
            return this._product.getProductName();
        }
        return null;
    };

    Shape.prototype.getNamedParent = function(includeSelf) {
        if (includeSelf === undefined) includeSelf = true;
        if (includeSelf && this._product) {
            return this;
        } else {
            var obj = this._parent;
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
        for (var i = 0; i < this._children.length; i++) {
            tmpChild = this._children[i].getTree();
            if (tmpChild) {
                children.push(tmpChild);
            }
        }
        // Only show things that are product-driven
        if (!this._product || this.boundingBox.empty()) {
            return undefined;
        } else {
            var id = this.getID();
            this.name = "Shape " + id;
            if (this._product) {
                this.name = this._product.getProductName();
            }
            // Don't show children if this is an instance
            return {
                id          : id,
                text        : this.name,
                state       : {
                    opened    : this._instanceID === 0,
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
            for (i = 0; i < this._shells.length; i++) {
                var shellBounds = this._shells[i].getBoundingBox(true);
                if (!shellBounds.empty()) this.boundingBox.union(shellBounds);
            }
            for (i = 0; i < this._children.length; i++) {
                var childBounds = this._children[i].getBoundingBox(true);
                if (!childBounds.empty()) {
                    this.boundingBox.union(childBounds);
                }
            }
        }
        var bounds = this.boundingBox.clone();
        if (transform && !bounds.empty()) {
            bounds.applyMatrix4(this._transform);
        }
        return bounds;
    };

    Shape.prototype.toggleVisibility = function() {
        if (this._object3D.visible) this.hide();
        else this.show();
    };

    Shape.prototype.hide = function() {
        this._object3D.traverse(function(object) {
            object.visible = false;
        });
    };

    Shape.prototype.show = function() {
        this._object3D.traverse(function(object) {
            object.visible = true;
        });
    };

    Shape.prototype.highlight = function(colorHex) {
        var self = this;
        this._object3D.traverse(function(object) {
            if (object.material) {
                object.material._color = {
                    ambient: object.material.ambient,
                    color: object.material.color,
                    specular: object.material.specular
                };
                object.material.ambient = new THREE.Color(colorHex);
                object.material.color = object.material.ambient;
                object.material.specular = object.material.specular;
                self._assembly.addEventListener("_clearHighlights", function() {
                    object.material.ambient = object.material._color.ambient;
                    object.material.color = object.material._color.color;
                    object.material.specular = object.material._color.specular;
                });
            }
        });
    };

    Shape.prototype.setOpacity = function (opacity) {
        var self = this;
        this._object3D.traverse(function(object) {
            if (object.material) {
                object.material.opacity = opacity;
                self._assembly.addEventListener("_clearOpacity", function() {
                    object.material.opacity = 1;
                });
            }
        });
    };

    Shape.prototype.showBoundingBox = function() {
        var bounds = this.getBoundingBox(false);
        if (!this.bbox && !bounds.empty()) {
            this.bbox = this._assembly.buildBoundingBox(bounds);
        }
        if (this.bbox) {
            var self = this;
            this._eventFunc = function() {
                self.hideBoundingBox();
            };
            // Start listening for assembly _hideBounding events
            this._assembly.addEventListener("_hideBounding", this._eventFunc);
            this._object3D.add(this.bbox);
        }
    };

    Shape.prototype.hideBoundingBox = function() {
        // Stop listening for assembly _hideBounding events
        this._assembly.removeEventListener("_hideBounding", this._eventFunc);
        this._object3D.remove(this.bbox);
    };

    Shape.prototype.getCentroid = function(world) {
        if (world === undefined) world = true;
        var bbox = this.getBoundingBox(false);
        if (world) {
            bbox.min.applyMatrix4(this._object3D.matrixWorld);
            bbox.max.applyMatrix4(this._object3D.matrixWorld);
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
            var explosionCenter = this.getCentroid(true);
            for (i = 0; i < this._children.length; i++) {
                child = this._children[i];
                // Convert the objectCenter
                var localExplosionCenter = explosionCenter.clone();
                child.getObject3D().worldToLocal(localExplosionCenter);
                // Get the child's centroid in local frame
                var childCenter = child.getCentroid(false);
                var childDirection = new THREE.Vector3().copy(childCenter);
                // Calculate explosion direction vector in local frame and save it
                childDirection.sub(localExplosionCenter).normalize();
                this._explodeStates[child.getID()] = childDirection;
//                this._object3D.add( new THREE.ArrowHelper(childDirection, childCenter, 1000.0, 0xff0000, 20, 10) );
            }
            // After all children are loaded - start listening for assembly events
//        this._assembly.addEventListener("_updateAnimation", function() {
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
        for (i = 0; i < this._children.length; i++) {
            child = this._children[i];
            var explosionDirection = this._explodeStates[child.getID()];
            child.getObject3D().translateOnAxis(explosionDirection, distance);
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

    // Let shape have event system
    THREE.EventDispatcher.prototype.apply(Shape.prototype);
    return Shape;
});