/* G. Hemingway Copyright @2014
 * Product class for the CAD models
 */
"use strict";


/********************************* Product Class ********************************/

export default class Product extends THREE.EventDispatcher {
    constructor(id, assembly, name, stepFile, isRoot) {
        super();
        assembly.makeChild(id, this);
        this._id = id;
        this._assembly = assembly;
        this._stepFile = stepFile;
        this._name = name;
        this._isRoot = isRoot;
        this._shapes = [];
        this._children = [];
        this._object3D = new THREE.Object3D();
        this._overlay3D = new THREE.Object3D();
        this._annotation3D = new THREE.Object3D();
        return this;
    }

    addChild(childProduct) {
        this._children.push(childProduct);
    }

    addShape(shape) {
        shape.setProduct(this);
        this._shapes.push(shape);
        if (this._isRoot) {
            var self = this;
            this._object3D.add(shape.getObject3D());
            this._overlay3D.add(shape.getOverlay3D());
            this._annotation3D.add(shape.getAnnotation3D());
            shape.addEventListener("shapeLoaded", function(event) {
                self.dispatchEvent({ type: "shapeLoaded", shell: event.shell });
            });
        }
    }

    getID() {
        return this._id;
    }

    getProductName() {
        return this._name;
    }

    getObject3D() {
        return this._object3D;
    }

    getOverlay3D() {
        return this._overlay3D;
    }

    getAnnotation3D() {
        return this._annotation3D;
    }

    applyMatrix(matrix) {
        this._object3D.applyMatrix(matrix);
        this._overlay3D.applyMatrix(matrix);
        this._annotation3D.applyMatrix(matrix);
    }

    getStepFile() {
        return this._stepFile;
    }

    getTree(root) {
        // Check if only geometry-aligned Products get added to tree
        var children = [], tmpChild;
        for (var i = 0; i < this._shapes.length; i++) {
            tmpChild = this._shapes[i].getTree(root);
            if (tmpChild) {
                children.push(tmpChild);
            }
        }
        if (children.length === 0) {
            return undefined;
        } else {
            return {
                id          : root + ':' + this._id,
                text        : this._name,
                collapsed   : false,
                state       : {
                    disabled  : false,
                    selected  : false
                },
                children    : children
            };
        }
    }

    getBoundingBox() {
        if (!this.boundingBox) {
            this.boundingBox = new THREE.Box3();
            for (var i = 0; i < this._shapes.length; i++) {
                this.boundingBox.union(this._shapes[i].getBoundingBox(true));
            }
        }
        return this.boundingBox.clone();
    }

    showAnnotations() {
        this._annotation3D.traverse(function(object) {
            object.visible = true;
        });
    }

    hideAnnotations() {
        this._annotation3D.traverse(function(object) {
            object.visible = false;
        });
    }

    showBoundingBox() {
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
            this._overlay3D.add(this.bbox);
        }
        this.showAnnotations();
    }

    hideBoundingBox() {
        // Stop listening for assembly _hideBounding events
        this._assembly.removeEventListener("_hideBounding", this._eventFunc);
        this._overlay3D.remove(this.bbox);
        this.hideAnnotations();
    }

    setOpacity(opacity) {
        this._object3D.traverse(function(object) {
            if (object.material && object.material.uniforms.opacity) {
                object.material.transparent = opacity < 1;
                object.material.depthWrite = opacity === 1;
                object.material.uniforms['opacity'].value = opacity;
            }
        });
    }

    toggleVisibility() {
        if (this._object3D.visible) {
            this.hide();
        } else {
            this.show();
        }
        return this._object3D.visible;
    }

    toggleTransparency() {
        if (this.isTransparent()) {
            this.setOpacity(1);
        } else {
            this.setOpacity(0.5);
        }
    }

    isTransparent() {
        // returns true if object or any children are transparent
        var transparent = false,
            testObject = function(object) {
                if (!transparent && object.material && object.material.uniforms.opacity) {
                    transparent = object.material.uniforms.opacity.value < 1;
                }
            };
        testObject(this._object3D);
        if (!transparent) {
            this._object3D.traverse(testObject);
        }
        return transparent;
    }

    hide() {
        this._object3D.traverse(function(object) {
            object.visible = false;
        });
        this.hideAnnotations();
    }

    show() {
        this._object3D.traverse(function(object) {
            object.visible = true;
        });
        this.showAnnotations();
    }

    explode(distance, timeS) {
    }
};
