/* G. Hemingway Copyright @2014
 * Shell class handles all of the actual geometry - shared between Shapes
 */
"use strict";


/********************************* Helper Functions ********************************/

export default class Shell extends THREE.EventDispatcher {
    constructor(id, assembly, parent, size, defaultColor, boundingBox) {
        super();
        let ret = assembly.makeChild(id, this);
        if (!ret) {
            this._id = id;
            this._assembly = assembly;
            this._parent = parent;
            this._size = size;
            this._color = defaultColor;
            this._boundingBox = boundingBox;
            if (this._boundingBox.empty()) {
                console.log("Found empty bounding box: " + this._id);
            }
        }
        return ret;
    }

    static unloadData() {
        // TODO: Need to implement this
        console.log("Shell.unloadData - Not Implemented");
    }

    getID() {
        return this._id;
    }

    addGeometry(position, normals, colors) {
        this.dispatchEvent({type: "shellStartLoad", shell: this});
        // Create the geometry to hold the data
        this._geometry = new THREE.BufferGeometry();
        this._geometry.addAttribute('position', new THREE.BufferAttribute(this._size * 3, 3));
        this._geometry.addAttribute('normal',   new THREE.BufferAttribute(this._size * 3, 3));
        this._geometry.addAttribute('color',    new THREE.BufferAttribute(this._size * 3, 3));

        // Setup the offsets
        let chunkSize = 21845;
        let i;
        this._geometry.groups = [];
        let offsets = this._size / chunkSize;
        for (i = 0; i < offsets; i++) {
            let offset = {
                start: i * chunkSize * 3,
                index: i * chunkSize * 3,
                count: Math.min(this._size - ( i * chunkSize ), chunkSize) * 3
            };
            this._geometry.groups.push(offset);
        }

        // Now load the rest of the data
        this._geometry.attributes.position.array = position;
        this._geometry.attributes.normal.array = normals;
        this._geometry.attributes.color.array = colors;
        // Compute bbox
        this._geometry.computeBoundingBox();
        this._boundingBox = this._geometry.boundingBox.clone();
        // All done - signal completion
        this._isLoaded = true;
        this.dispatchEvent({type: "shellEndLoad", shell: this});
    }

    getBoundingBox() {
        return this._boundingBox;
    }

    getGeometry() {
        return this._geometry;
    }
};