/* G. Hemingway Copyright @2014
 * Product class for the STEP file
 */

"use strict";


/********************************* Product Class ********************************/

function Product(id, builder, assembly, isRoot) {
    var self = this;
    var ret = builder.make(id, this, "product");
    if (!ret) {
        var el = builder.getElement(id);
        this.id = id;
        this.assembly = assembly;
        this.stepfile = el.getAttribute ("step");
        this.shapes = [];
        this.name = el.getAttribute("name");
        this.object3D = new THREE.Object3D();
        // Only add the root product to the scene
        if (isRoot) {
            this.assembly.geometryViewer.scene.add(this.object3D);
        }

        // Load child shapes
        var shapes = builder.getArrayFromAttribute(el, "shape");
        var i, identityTransform = (new THREE.Matrix4()).identity();
        for (i = 0; i < shapes.length; i++) {
            var shape = new Shape(shapes[i], builder, assembly, this, identityTransform, isRoot);
            shape.setProduct(this);
            this.shapes.push(shape);
            if (isRoot) {
                this.object3D.add(shape.getObject3D());
                // Listen for when the child shapes have loaded shape
                shape.addEventListener("shapeLoaded", function() {
                    self.assembly.geometryViewer.render();
                });
            }
         }

        // Load child products
        this.children = [];
        var children = builder.getArrayFromAttribute(el, "children");
        for (i = 0; i < children.length; i++) {
            var product = new Product(children[i], builder, assembly, false);
            this.children.push(product);
        }

        // After all children are loaded - start listening for assembly events
        this.assembly.addEventListener("hideBounding", function() {
            self.hideBoundingBox();
        });
    }
    return ret;
}

Product.prototype.getProductName = function() {
    return this.name;
};

Product.prototype.getName = function() {
    return "Product";
};

Product.prototype.getObject3D = function() {
    return this.object3D;
};

Product.prototype.getStepFile = function() {
    return this.stepfile;
};

Product.prototype.getTree = function() {
    // Check if only geometry-aligned Products get added to tree
    var children = [], tmpChild;
    for (var i = 0; i < this.shapes.length; i++) {
        tmpChild = this.shapes[i].getTree();
        if (tmpChild) {
            children.push(tmpChild);
        }
    }
    if (children.length === 0) {
        return undefined;
    } else {
        return {
            id          : this.id,
            text        : this.name,
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
        for (var i = 0; i < this.shapes.length; i++) {
            this.boundingBox.union(this.shapes[i].getBoundingBox(true));
        }
    }
    return this.boundingBox.clone();
};

Product.prototype.showBoundingBox = function() {
    var bounds = this.getBoundingBox();
    if (!this.bbox && !bounds.empty()) {
        this.bbox = this.assembly.geometryViewer.buildBoundingBox(bounds);
    }
    if (this.bbox) {
        this.object3D.add(this.bbox);
        this.assembly.render();
    }
};

Product.prototype.hideBoundingBox = function() {
    this.object3D.remove(this.bbox);
};

THREE.EventDispatcher.prototype.apply(Product.prototype);