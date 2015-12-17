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
        this._object3D = new THREE.Object3D();
        this._overlay3D = new THREE.Object3D();
        this._annotation3D = new THREE.Object3D();
    }

    addGeom(geom) {
        //shape.setProduct(this);
        this._objects.push(geom);
        if (this._isRoot) {
            var self = this;
            this._object3D.add(geom.getObject3D());
            this._overlay3D.add(geom.getOverlay3D());
            this._annotation3D.add(geom.getAnnotation3D());
            geom.addEventListener("loaded", function(event) {
                console.log(event);
                self.dispatchEvent({ type: "geom:loaded", shell: event.shell });
            });
        }
    }

    makeChild(id, fallback) {
//        console.log("Assembly.makeChild: " + id);
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
        if (!this.boundingBox) {
            this.boundingBox = new THREE.Box3();
            for (var i = 0; i < this._objects.length; i++) {
                this.boundingBox.union(this._objects[i].getBoundingBox(true));
            }
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
        for (var i = 0; i < this._objects.length; i++) {
            var tmpChild = this._objects[i].getTree(root);
            if (tmpChild) {
                node.push(tmpChild);
            }
        }
        return node;
    }

    clearHighlights() {
        this.dispatchEvent({ type: "_clearHighlights" });
    }

    select(camera, mouseX, mouseY) {
    }
}