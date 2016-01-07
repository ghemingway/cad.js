/* G. Hemingway Copyright @2014
 * Shape class for the CAD models
 */
"use strict";


import Assembly from './assembly';

/********************************* Shape Class ********************************/

export default class Shape extends THREE.EventDispatcher {
    constructor(id, assembly, parent, transform, unit) {
        super();
        let ret = assembly.makeChild(id, this);
        this._id = id;
        this._assembly = assembly;
        this._parent = parent;
        this._unit = unit;
        this._instances = [];
        if (!ret) {
            // If we are here, this is the first one
            this._instanceID = 0;
            // Other setup items
            this._children = [];
            this._annotations = [];
            this._shells = [];
            this._annotations = [];
            // Setup 3D
            this._object3D = new THREE.Object3D();
            // Setup any transform from the parent reference frame
            this._transform = (new THREE.Matrix4()).copy(transform);
            this._object3D.applyMatrix(this._transform);
            this._overlay3D = this._object3D.clone();
            this._annotation3D = this._object3D.clone();
        } else {
            // Set up the object to be an instance
            this.instance(ret, assembly, parent, transform);
            ret = this;
        }
        // Setup the object state
        this.state = {
            selected:       false,
            highlighted:    false,
            visible:        true,
            opacity:        1.0,
            explodeDistance: 0,
            collapsed:      this._instanceID === 0
        };
        // Ready to go
        return ret;
    }

    instance(source, assembly, parent, transform) {
        // Setup instance info
        source._instances.push(this);
        this._instanceID = source._instances.length;
        // Prep the object3D
        this._object3D = new THREE.Object3D();
        this._transform = (new THREE.Matrix4()).copy(transform);
        this._object3D.applyMatrix(this._transform);
        this._overlay3D = this._object3D.clone();
        this._annotation3D = this._object3D.clone();

        // Need to clone shell & annotation references & events
        this._shells = source._shells;
        this._annotations = source._annotations;
        // Need to clone all child shapes
        this._children = [];
        let self = this;
        for (let i = 0; i < source._children.length; i++) {
            // Clone the child shape
            let shapeID = source._children[i]._id;
            let shape = new Shape(shapeID, this._assembly, this, source._children[i]._transform, this._unit);
            // Bubble the shapeLoaded event
            shape.addEventListener("shapeLoaded", function (event) {
                self.dispatchEvent({type: "shapeLoaded", shell: event.shell});
            });
            // Add the child shape to the scene graph
            this._object3D.add(shape.getObject3D());
            this._overlay3D.add(shape.getOverlay3D());
            this._annotation3D.add(shape.getAnnotation3D());
            this._children.push(shape);
        }
    }

    addChild(childShape) {
        let self = this;
        this._children.push(childShape);
        // Bubble the shapeLoaded event
        childShape.addEventListener("shapeLoaded", function (event) {
            self.dispatchEvent({type: "shapeLoaded", shell: event.shell});
        });
        // Add of the child shape to the scene graph
        this._object3D.add(childShape.getObject3D());
        this._overlay3D.add(childShape.getOverlay3D());
        this._annotation3D.add(childShape.getAnnotation3D());
    }

    addAnnotation(annotation) {
        let self = this;
        this._annotations.push(annotation);
        annotation.addEventListener("annotationEndLoad", function (event) {
            let anno = event.annotation;
            self.addAnnotationGeometry(anno.getGeometry());
        });
    }

    addShell(shell) {
        let self = this;
        this._shells.push(shell);
        shell.addEventListener("shellEndLoad", function (event) {
            let shell = event.shell;
            self.addShellGeometry(shell.getGeometry());
        });
    }

    setProduct(product) {
        this._product = product;
        // Set the product for all instances
        for (let i = 0; i < this._instances.length; i++) {
            this._instances[i].setProduct(product);
        }
    }

    addShellGeometry(geometry) {
        let material = new THREE.ShaderMaterial(new THREE.VelvetyShader());
        let mesh = new THREE.SkinnedMesh(geometry, material, false);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData = this;
        this._object3D.add(mesh);
        this.dispatchEvent({type: "shapeLoaded"});
    }

    addAnnotationGeometry(lineGeometries) {
        let material = new THREE.LineBasicMaterial({
            color: 0xffffff,
            linewidth: 1
        });
        for (let i = 0; i < lineGeometries.length; i++) {
            let lines = new THREE.Line(lineGeometries[i], material);
            lines.visible = false;
            this._annotation3D.add(lines);
        }
        this.dispatchEvent({ type: "shapeLoaded" });
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

    getID() {
        return this._id + "_" + this._instanceID;
    }

    getNamedParent(includeSelf) {
        if (includeSelf === undefined) includeSelf = true;
        if (includeSelf && this._product) {
            return this;
        } else {
            let obj = this._parent;
            while (!obj.product && obj.parent) {
                console.log(obj.getID());
                obj = obj.parent;
            }
            return obj;
        }
    }

    getTree(root) {
        // Check if only geometry-aligned Shapes get added to tree
        let children = [], tmpChild;
        for (let i = 0; i < this._children.length; i++) {
            tmpChild = this._children[i].getTree(root);
            if (tmpChild) {
                children.push(tmpChild);
            }
        }
        // Only show things that are product-driven
        if (!this._product || this.boundingBox.empty()) {
            return undefined;
        } else {
            let id = this.getID();
            this.name = "Shape " + id;
            if (this._product) {
                this.name = this._product.getProductName();
            }
            // Don't show children if this is an instance
            return {
                id:             root + ':' + id,
                text:           this.name,
                collapsed:      this.state.collapsed,
                obj:            this,
                state: {
                    selected:       this.state.selected,
                    highlighted:    this.state.highlighted,
                    visible:        this.state.visible,
                    opacity:        this.state.opacity,
                    explodeDistance:this.state.explodeDistance
                },
                children:       children
            };
        }
    }

    getBoundingBox(transform) {
        if (!this.boundingBox) {
            let i;
            this.boundingBox = new THREE.Box3();
            for (i = 0; i < this._shells.length; i++) {
                let shellBounds = this._shells[i].getBoundingBox(true);
                if (!shellBounds.empty()) this.boundingBox.union(shellBounds);
            }
            for (i = 0; i < this._children.length; i++) {
                let childBounds = this._children[i].getBoundingBox(true);
                if (!childBounds.empty()) {
                    this.boundingBox.union(childBounds);
                }
            }
        }
        let bounds = this.boundingBox.clone();
        if (transform && !bounds.empty()) {
            bounds.applyMatrix4(this._transform);
        }
        return bounds;
    }

    // Good
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

    // Good
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

    // Good
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

    // Good
    getSelected() {
        let selected = this.state.selected ? [this] : [];
        // Process child shapes
        let children = this._children.map(function(child) {
            return child.getSelected();
        });
        return _.flatten(selected.concat(children));
    }

    // Good
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

    // Good
    toggleCollapsed() {
        this.state.collapsed = !this.state.collapsed;
    }

    // Find the geometric center of this shape
    getCentroid(world) {
        if (world === undefined) world = true;
        let bbox = this.getBoundingBox(false);
        if (world) {
            bbox.min.applyMatrix4(this._object3D.matrixWorld);
            bbox.max.applyMatrix4(this._object3D.matrixWorld);
        }
        return bbox.center();
    }

    // Good
    explode(distance) {
        let i, child;
        // Do we need to determine explosion direction
        if (this.state.explodeDistance === 0) {
            this._explodeStates = {};
            let explosionCenter = this.getCentroid(true);
            for (i = 0; i < this._children.length; i++) {
                child = this._children[i];
                // Convert the objectCenter
                let localExplosionCenter = explosionCenter.clone();
                child.getObject3D().worldToLocal(localExplosionCenter);
                // Get the child's centroid in local frame
                let childCenter = child.getCentroid(false);
                let childDirection = new THREE.Vector3().copy(childCenter);
                // Calculate explosion direction vector in local frame and save it
                childDirection.sub(localExplosionCenter);
                let normChildDirection;
                // Don't explode things that are centrally located
                if (childDirection.length() < 5.0) {
                    normChildDirection = new THREE.Vector3();
                } else {
                    normChildDirection = childDirection.clone().normalize();
                }
                this._explodeStates[child.getID()] = normChildDirection;
//                this._object3D.add( new THREE.ArrowHelper(childDirection, childCenter, 1000.0, 0xff0000, 20, 10) );
            }
        }
        // Make sure explosion distance does not go negative
        distance = Math.max(distance, -this.state.explodeDistance);
        // Now, do the explosion
        this.state.explodeDistance += distance;
        for (i = 0; i < this._children.length; i++) {
            child = this._children[i];
            let explosionDirection = this._explodeStates[child.getID()];
            child.translateOnAxis(explosionDirection, distance);
        }
    }

    translateOnAxis(axis, magnitude) {
        this.getObject3D().translateOnAxis(axis, magnitude);
        this.getOverlay3D().translateOnAxis(axis, magnitude);
        this.getAnnotation3D().translateOnAxis(axis, magnitude);
    }
};