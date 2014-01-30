/* G. Hemingway Copyright @2014
 * Product class for the STEP file
 */

"use strict";


/********************************* Product Class ********************************/


define(["THREE"], function(THREE) {
    function Product(id, assembly, name, stepFile, isRoot) {
        var ret = assembly.makeChild(id, this);
        if (!ret) {
            this._id = id;
            this._assembly = assembly;
            this._stepFile = stepFile;
            this._name = name;
            this._isRoot = isRoot;
            this._shapes = [];
            this._children = [];
            this._object3D = new THREE.Object3D();
        }
        return ret;
    }

    Product.prototype.addChild = function(childProduct) {
        this._children.push(childProduct);
    };

    Product.prototype.addShape = function(shape) {
        var self = this;
        shape.setProduct(this);
        this._shapes.push(shape);
        if (this._isRoot) {
            this._object3D.add(shape.getObject3D());
        }
        shape.addEventListener("shapeLoaded", function(event) {
            self.dispatchEvent({ type: "shapeLoaded", shell: event.shell });
        });
    };

    Product.prototype.getProductName = function() {
        return this._name;
    };

    Product.prototype.getObject3D = function() {
        return this._object3D;
    };

    Product.prototype.getStepFile = function() {
        return this._stepFile;
    };

    Product.prototype.getTree = function() {
        // Check if only geometry-aligned Products get added to tree
        var children = [], tmpChild;
        for (var i = 0; i < this._shapes.length; i++) {
            tmpChild = this._shapes[i].getTree();
            if (tmpChild) {
                children.push(tmpChild);
            }
        }
        if (children.length === 0) {
            return undefined;
        } else {
            return {
                id          : this._id,
                text        : this._name,
                state       : {
                    opened    : true,
                    disabled  : false,
                    selected  : false
                },
                children    : children
            };
        }
    };

    Product.prototype.getBoundingBox = function() {
        if (!this.boundingBox) {
            this.boundingBox = new THREE.Box3();
            for (var i = 0; i < this._shapes.length; i++) {
                this.boundingBox.union(this._shapes[i].getBoundingBox(true));
            }
        }
        return this.boundingBox.clone();
    };

    Product.prototype.showBoundingBox = function() {
        var bounds = this.getBoundingBox();
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

    Product.prototype.hideBoundingBox = function() {
        // Stop listening for assembly _hideBounding events
        this._assembly.removeEventListener("_hideBounding", this._eventFunc);
        this._object3D.remove(this.bbox);
    };

    // Let product have event system
    THREE.EventDispatcher.prototype.apply(Product.prototype);
    return Product;
});