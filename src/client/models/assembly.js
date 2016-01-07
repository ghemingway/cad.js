/* G. Hemingway Copyright @2014
 * Context for the overall CAD assembly
 */
"use strict";


/*************************************************************************/

export default class Assembly extends THREE.EventDispatcher {
    constructor(rootID, defaultColor, loader) {
        super();
        //this._rootID = rootID;
        //this._defaultColor = defaultColor;
        this._loader = loader;
        this._objects = [];
        this._product = undefined;
        this.type = 'assembly';
        this.raycaster = new THREE.Raycaster();
        // Setup object state
        this.state = {
            selected:       false,
            highlighted:    false,
            visible:        true,
            opacity:        1.0,
            explodeDistance:0,
            collapsed:      false
        };
        // Good to go
        return this;
    }

    getID() {
        if (this._product) {
            return this._product.getID();
        } else {
            return "id0";
        }
    }

    getObject3D() {
        return this._product.getObject3D();
    }

    getOverlay3D() {
        return this._product.getOverlay3D();
    }

    getAnnotation3D() {
        return this._product.getAnnotation3D();
    }

    isChild(id) {
        return (this._objects[id] !== undefined);
    }

    getChild(id) {
        return this._objects[id];
    }

    makeChild(id, fallback) {
        //console.log("Assembly.makeChild: " + id);
        if (!id) {
            throw new Error("null id");
        }
        let ret = this._objects[id];
        if (ret) {
            return ret;
        }
        this._objects[id] = fallback;
        return null;
    }

    setRootProduct(product) {
        this._product = product;
    }

    name() {
        if (this._product) {
            return this._product._name;
        } else {
            return "Empty assembly";
        }
    }

    getNamedParent() {
        return this;
    }

    getBoundingBox() {
        if (this._product) {
            return this._product.getBoundingBox();
        }
        return new THREE.Box3();
    }

    getByID(id) {
        let obj = undefined;
        // Special case for the root element
        if (id === "id0") {
            obj = this;
        } else if (typeof(id) !== 'undefined') {
            let parts = id.split("_");
            obj = this._objects[parts[0]];
            // Looks like an instance was selected
            if (parts.length > 1 && parts[1] !== "0") {
                obj = obj._instances[parts[1]-1];
            }
        }
        return obj;
    }

    getTree(root) {
        return this._product.getTree(root);
    }

    select(camera, mouseX, mouseY) {
        if (!this._product) return undefined;
        let mouse = new THREE.Vector2();
        mouse.x = (mouseX / window.innerWidth) * 2 - 1;
        mouse.y = -(mouseY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(mouse, camera);
        let intersections = this.raycaster.intersectObjects(this._product.getObject3D().children, true);
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

    getSelected() {
        if (this._product) {
            return this._product.getSelected();
        } else return [];
    }

    static buildBoundingBox(box) {
        if (box.empty()) {
            return undefined;
        }
        // Create the new box buffer
        let geometry = new THREE.BufferGeometry();
        let positions = new Float32Array(72);
        //Front face bottom
        positions[0]  = box.min.x;
        positions[1]  = box.min.y;
        positions[2]  = box.min.z;
        positions[3]  = box.max.x;
        positions[4]  = box.min.y;
        positions[5]  = box.min.z;
        //Front face left
        positions[6]  = box.min.x;
        positions[7]  = box.min.y;
        positions[8]  = box.min.z;
        positions[9]  = box.min.x;
        positions[10] = box.max.y;
        positions[11] = box.min.z;
        // Front face top
        positions[12] = box.min.x;
        positions[13] = box.max.y;
        positions[14] = box.min.z;
        positions[15] = box.max.x;
        positions[16] = box.max.y;
        positions[17] = box.min.z;
        // Front face right
        positions[18] = box.max.x;
        positions[19] = box.min.y;
        positions[20] = box.min.z;
        positions[21] = box.max.x;
        positions[22] = box.max.y;
        positions[23] = box.min.z;
        // Lower left ->
        positions[24] = box.min.x;
        positions[25] = box.min.y;
        positions[26] = box.min.z;
        positions[27] = box.min.x;
        positions[28] = box.min.y;
        positions[29] = box.max.z;
        // Lower right ->
        positions[30] = box.max.x;
        positions[31] = box.min.y;
        positions[32] = box.min.z;
        positions[33] = box.max.x;
        positions[34] = box.min.y;
        positions[35] = box.max.z;
        // Upper left ->
        positions[36] = box.min.x;
        positions[37] = box.max.y;
        positions[38] = box.min.z;
        positions[39] = box.min.x;
        positions[40] = box.max.y;
        positions[41] = box.max.z;
        // Upper right ->
        positions[42] = box.max.x;
        positions[43] = box.max.y;
        positions[44] = box.min.z;
        positions[45] = box.max.x;
        positions[46] = box.max.y;
        positions[47] = box.max.z;
        // Back face bottom
        positions[48] = box.min.x;
        positions[49] = box.min.y;
        positions[50] = box.max.z;
        positions[51] = box.max.x;
        positions[52] = box.min.y;
        positions[53] = box.max.z;
        // Back face left
        positions[54] = box.min.x;
        positions[55] = box.min.y;
        positions[56] = box.max.z;
        positions[57] = box.min.x;
        positions[58] = box.max.y;
        positions[59] = box.max.z;
        // Back face top
        positions[60] = box.min.x;
        positions[61] = box.max.y;
        positions[62] = box.max.z;
        positions[63] = box.max.x;
        positions[64] = box.max.y;
        positions[65] = box.max.z;
        // Back face right
        positions[66] = box.max.x;
        positions[67] = box.min.y;
        positions[68] = box.max.z;
        positions[69] = box.max.x;
        positions[70] = box.max.y;
        positions[71] = box.max.z;
        geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
        // Return the new Bounding Box Geometry
        let material = new THREE.LineBasicMaterial({
            linewidth: 2,
            color: 0x0000ff
        });
        return new THREE.LineSegments(geometry, material);
    }
};
