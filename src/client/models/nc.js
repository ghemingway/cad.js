/* G. Hemingway Copyright @2014
 * Context for the overall CAD assembly
 */
"use strict";


import Assembly from './assembly';

/*************************************************************************/

export default class NC extends THREE.EventDispatcher {
    constructor(project, workingstep, timeIn, loader) {
        super();
        this.project = project;
        this._workingstep = workingstep;
        this._timeIn = timeIn;
        this._loader = loader;
        this._objects = [];
        this.type = 'nc';
        this.raycaster = new THREE.Raycaster();
        this._object3D = new THREE.Object3D();
        this._overlay3D = new THREE.Object3D();
        this._annotation3D = new THREE.Object3D();
        this.state = {
            selected:       false,
            highlighted:    false,
            visible:        true,
            opacity:        1.0,
            explodeDistance: 0,
            collapsed:      false
        }
    }

    addModel(model, usage, type, id, transform, bbox) {
        let asisOpacity = 0.15;
        console.log('Add Model(' + usage + '): ' + id);
        let self = this;
        // Setup 3D object holder
        let obj = {
            model: model,
            usage: usage,
            type: type,
            id: id,
            object3D: new THREE.Object3D(),
            transform: (new THREE.Matrix4()).copy(transform),
            bbox: bbox,
            getID: function() { return this.id; },
            getNamedParent: function() { return this },
            getBoundingBox: function() { return this },
            toggleHighlight: function() { },
            toggleVisibility: function() { },
            toggleOpacity: function() { },
            toggleSelection: function() { },
            toggleCollapsed: function() { },
            explode: function() { }
        };
        obj.object3D.applyMatrix(obj.transform);
        obj.overlay3D = obj.object3D.clone();
        obj.annotation3D = obj.object3D.clone();
        // Save the object
        this._objects[id] = obj;
        this._object3D.add(obj.object3D);
        this._overlay3D.add(obj.overlay3D);
        this._annotation3D.add(obj.annotation3D);
        if (type === 'shell') {
            model.addEventListener('shellEndLoad', function (event) {
                let material = new THREE.ShaderMaterial(new THREE.VelvetyShader());
                let mesh = new THREE.SkinnedMesh(event.shell.getGeometry(), material, false);
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.userData = obj;
                obj.object3D.add(mesh);
                // Dim the asis
                if (usage === 'asis' && asisOpacity !== 1.0) {
                    obj.object3D.traverse(function (object) {
                        if (object.material && object.material.uniforms.opacity) {
                            object.material.transparent = true;
                            object.material.depthWrite = false;
                            object.material.uniforms['opacity'].value = asisOpacity;
                        }
                    });
                }
            });
        } else if (type === 'polyline') {
            model.addEventListener('annotationEndLoad', function(event) {
                let lineGeometries = event.annotation.getGeometry();
                let material = new THREE.LineBasicMaterial({
                    vertexColors: THREE.VertexColors,
                    //color: 0xffffff,
                    linewidth: 1
                });
                for (let i = 0; i < lineGeometries.length; i++) {
                    let lines = new THREE.Line(lineGeometries[i], material);
                    lines.visible = true;
                    obj.annotation3D.add(lines);
                }
            });
        }
    }

    makeChild(id, fallback) {
        ////console.log("NC.makeChild: " + id);
        //if (!id) {
        //    throw new Error("null id");
        //}
        //let ret = this._objects[id];
        //if (ret) {
        //    return ret;
        //}
        //this._objects[id] = fallback;
        //return null;
    }

    getObject3D() {
        return this._object3D;
    };

    getOverlay3D() {
        return this._overlay3D;
    };

    getAnnotation3D() {
        return this._annotation3D;
    };

    getBoundingBox() {
        let self = this;
        if (!this.boundingBox) {
            this.boundingBox = new THREE.Box3();
            let keys = _.keys(this._objects);
            _.each(keys, function(key) {
                let object = self._objects[key];
                if (object.type !== 'polyline') {
                    self.boundingBox.union(object.bbox);
                }
            });
        }
        return this.boundingBox.clone();
    }

    getTree(root) {
        let node = {
            id:                 root,
            text:               this.project,
            collapsed:          this.state.collapsed,
            obj:                this,
            state: {
                selected:       this.state.selected,
                highlighted:    this.state.highlighted,
                visible:        this.state.visible,
                opacity:        this.state.opacity,
                explodeDistance:this.state.explodeDistance
            },
            children    : []
        };
        // Gen tree for all children
        let keys = _.keys(this._objects);
        _.each(keys, function(key) {
            let tmpNode = {
                id          : key,
                text        : key,
                collapsed   : false,
                state       : {
                    disabled  : false,
                    selected  : false
                }
            };
            node.children.push(tmpNode);
        });
        return node;
    }

    clearHighlights() {
        this.dispatchEvent({ type: "_clearHighlights" });
    }

    hideAllBoundingBoxes() {
        this.dispatchEvent({ type: "_hideBounding" });
    }

    getNamedParent() {
        return this;
    }

    select(camera, mouseX, mouseY) {
        let mouse = new THREE.Vector2();
        mouse.x = (mouseX / window.innerWidth) * 2 - 1;
        mouse.y = -(mouseY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(mouse, camera);
        let intersections = this.raycaster.intersectObjects(this._object3D.children, true);
        // Did we hit anything?
        let object = undefined;
        if (intersections.length > 0) {
            let hit = undefined;
            for (let i = 0; i < intersections.length; i++) {
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
    }

    applyDelta(delta) {
        let self = this;
        let alter = false;
        // Handle each geom update in the delta
        _.each(delta.geom, function(geom) {
            let obj = self._objects[geom.id];
            //console.log(obj);
            if (obj.usage === 'cutter') {
                let transform = new THREE.Matrix4();
                transform.fromArray(geom.xform);
                let position = new THREE.Vector3();
                let quaternion = new THREE.Quaternion();
                let scale = new THREE.Vector3();
                transform.decompose(position, quaternion, scale);
                obj.object3D.position.copy(position);
                obj.object3D.quaternion.copy(quaternion);
                alter = true;
            }
        });
        return alter;
    }

    getSelected() { return [this]; }
    getID() { return this.id; }
    toggleHighlight() { }
    toggleVisibility() { }
    toggleOpacity() { }

    toggleSelection() {
        // On deselection
        if(this.state.selected) {
            // Hide the bounding box
            this._overlay3D.remove(this.bbox);
            // On selection
        } else {
            let bounds = this.getBoundingBox(false);
            if (!this.bbox && !bounds.empty()) {
                this.bbox = Assembly.buildBoundingBox(bounds);
            }
            if (this.bbox) {
                // Add the BBox to our overlay object
                this._overlay3D.add(this.bbox);
            }
        }
        this.state.selected = !this.state.selected;
    }

    toggleCollapsed() { }
    explode() { }
}