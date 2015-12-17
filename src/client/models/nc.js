/* G. Hemingway Copyright @2014
 * Context for the overall CAD assembly
 */
"use strict";


/*************************************************************************/

export default class NC extends THREE.EventDispatcher {
    constructor(project, workingstep, timeIn, loader) {
        super();
        this._project = project;
        this._workingstep = workingstep;
        this._timeIn = timeIn;
        this._loader = loader;
        this._objects = [];
        this.type = 'nc';
        this.raycaster = new THREE.Raycaster();
        this._object3D = new THREE.Object3D();
        this._overlay3D = new THREE.Object3D();
        this._annotation3D = new THREE.Object3D();
    }

    addModel(model, type, id, transform, bbox) {
        console.log('Add Model(' + type + '): ' + id);
        var self = this;
        // Setup 3D object holder
        var obj = {
            model: model,
            type: type,
            id: id,
            object3D: new THREE.Object3D(),
            transform: (new THREE.Matrix4()).copy(transform),
            bbox: bbox
        };
        obj.object3D.applyMatrix(obj.transform);
        obj.overlay3D = obj.object3D.clone();
        obj.annotation3D = obj.object3D.clone();
        // Save the object
        this._objects[id] = obj;
        this._object3D.add(obj.object3D);
        this._overlay3D.add(obj.overlay3D);
        this._annotation3D.add(obj.annotation3D);
        model.addEventListener("shellEndLoad", function (event) {
            var material = new THREE.ShaderMaterial(new THREE.VelvetyShader());
            var mesh = new THREE.SkinnedMesh(event.shell.getGeometry(), material, false);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.userData = self;
            obj.object3D.add(mesh);
        });
    }

    makeChild(id, fallback) {
        //console.log("NC.makeChild: " + id);
        if (!id) {
            throw new Error("null id");
        }
        var ret = this._objects[id];
        if (ret) {
            return ret;
        }
        this._objects[id] = fallback;
        return null;
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
        var self = this;
        if (!this.boundingBox) {
            this.boundingBox = new THREE.Box3();
            var keys = _.keys(this._objects);
            _.each(keys, function(key) {
                var object = self._objects[key];
                self.boundingBox.union(object.bbox);
            });
        }
        return this.boundingBox.clone();
    }

    getTree(root) {
        var node = {
            id          : root,
            text        : this._project,
            collapsed   : false,
            state       : {
                disabled  : false,
                selected  : false
            },
            children    : []
        };
        // Gen tree for all children
        var keys = _.keys(this._objects);
        _.each(keys, function(key) {
            var tmpNode = {
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

    getNamedParent(includeSelf) {
        return undefined;
        if (includeSelf === undefined) includeSelf = true;
        if (includeSelf && this._product) {
            return this;
        } else {
            //var obj = this._parent;
            //while (!obj.product && obj.parent) {
            //    obj = obj.parent;
            //}
            //return obj;
        }
    }

    select(camera, mouseX, mouseY) {
        var mouse = new THREE.Vector2();
        mouse.x = (mouseX / window.innerWidth) * 2 - 1;
        mouse.y = -(mouseY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(mouse, camera);
        var intersections = this.raycaster.intersectObjects(this._object3D.children, true);
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
    }
}