/* G. Hemingway Copyright @2014
 * Product class for the CAD models
 */
"use strict";


import Assembly from './assembly';

/********************************* Product Class ********************************/

export default class Product extends THREE.EventDispatcher {
    constructor(id, assembly, name, stepFile, isRoot) {
        super();
        assembly.makeChild(id, this);
        this._id = id;
        this._assembly = assembly;
        this._name = name;
        this._isRoot = isRoot;
        this._shapes = [];
        this._children = [];
        this._object3D = new THREE.Object3D();
        this._overlay3D = new THREE.Object3D();
        this._annotation3D = new THREE.Object3D();
        // Setup object state
        this.state = {
            selected:       false,
            highlighted:    false,
            visible:        true,
            opacity:        1.0,
            explodeDistance: 0,
            collapsed:      false
        };
        // Ready to go
        return this;
    }

    addChild(childProduct) {
        this._children.push(childProduct);
    }

    addShape(shape) {
        shape.setProduct(this);
        this._shapes.push(shape);
        if (this._isRoot) {
            let self = this;
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

    getNamedParent() {
        return this;
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

    getTree(root) {
        // Check if only geometry-aligned Products get added to tree
        let children = [], tmpChild;
        for (let i = 0; i < this._shapes.length; i++) {
            tmpChild = this._shapes[i].getTree(root);
            if (tmpChild) {
                children.push(tmpChild);
            }
        }
        if (children.length === 0) {
            return undefined;
        } else {
            return {
                id:                 root + ':' + this._id,
                text:               this._name,
                collapsed:          this.state.collapsed,
                obj:                this,
                state: {
                    selected:       this.state.selected,
                    highlighted:    this.state.highlighted,
                    visible:        this.state.visible,
                    opacity:        this.state.opacity,
                    explodeDistance:this.state.explodeDistance
                },
                children:           children
            };
        }
    }

    getBoundingBox() {
        if (!this.boundingBox) {
            this.boundingBox = new THREE.Box3();
            for (let i = 0; i < this._shapes.length; i++) {
                this.boundingBox.union(this._shapes[i].getBoundingBox(true));
            }
        }
        return this.boundingBox.clone();
    }

    getSelected() {
        let selected = this.state.selected ? [this] : [];
        // Process child shapes
        let shapes = this._shapes.map(function(child) {
            return child.getSelected();
        });
        return _.flatten(selected.concat(shapes));
    }

    toggleVisibility() {
        if (this.state.visible) {
            this._object3D.traverse(function (object) {
                object.visible = false;
            });
        } else {
            this._object3D.traverse(function (object) {
                object.visible = true;
            });
        }
        this.state.visible = ! this.state.visible;
        return this.state.visible;
    }

    toggleOpacity() {
        let self = this;
        function setOpacity(opacity) {
            self.state.opacity = opacity;
            self._object3D.traverse(function (object) {
                if (object.material && object.material.uniforms.opacity) {
                    object.material.transparent = opacity < 1;
                    object.material.depthWrite = opacity === 1;
                    object.material.uniforms['opacity'].value = opacity;
                }
            });
        }

        if (this.state.opacity === 0.5) {
            setOpacity(1);
        } else {
            setOpacity(0.5);
        }
    }

    toggleHighlight(colorHex) {
        if (this.state.highlighted) {
            this._object3D.traverse(function (object) {
                if (object.material && object.material.uniforms.tint) {
                    object.material.uniforms.tint.value.setW(0);
                }
            });
        } else {
            this._object3D.traverse(function (object) {
                if (object.material && object.material.uniforms.tint) {
                    let color = new THREE.Color(colorHex);
                    object.material.uniforms.tint.value.set(color.r, color.g, color.b, 0.3);
                }
            });
        }
        this.state.highlighted = !this.state.highlighted;
    }

    toggleSelection() {
        // On deselection
        if(this.state.selected) {
            // Hide the bounding box
            this._overlay3D.remove(this.bbox);
            // Hide annotations
            this._annotation3D.traverse(function (object) {
                object.visible = false;
            });
            // On selection
        } else {
            let bounds = this.getBoundingBox(false);
            if (!this.bbox && !bounds.empty()) {
                this.bbox = Assembly.buildBoundingBox(bounds);
            }
            if (this.bbox) {
                // Add the BBox to our overlay object
                this._overlay3D.add(this.bbox);
                // Show annotations
                this._annotation3D.traverse(function (object) {
                    object.visible = true;
                });
            }
        }
        this.state.selected = !this.state.selected;
    }

    toggleCollapsed() {
        this.state.collapsed = !this.state.collapsed;
    }

    explode(step) {
        // Noop
    }
};
