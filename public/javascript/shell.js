/* G. Hemingway Copyright @2014
 * Shell class handles all of the actual geometry - shared between Shapes
 */

"use strict";


/********************************* Helper Functions ********************************/


define(["THREE"], function(THREE) {
    function Shell(id, assembly, parent, size, defaultColor, boundingBox) {
        var ret = assembly.makeChild(id, this);
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

    Shell.prototype.unloadData = function() {
        console.log("Shell.unloadData - Not Implemented");
    };

    Shell.prototype.getID = function() {
        return  this._id;
    };

    Shell.prototype.addGeometry = function(position, normals, colors) {
        this.dispatchEvent({ type: "shellStartLoad", shell: this });
        // Create the geometry to hold the data
        this._geometry = new THREE.BufferGeometry();
        this._geometry.addAttribute('position', Float32Array, this._size * 3, 3);
        this._geometry.addAttribute('normal',   Float32Array, this._size * 3, 3);
        this._geometry.addAttribute('color',    Float32Array, this._size * 3, 3);

        // Setup the offsets
        var chunkSize = 21845;
        var i;
        this._geometry.offsets = [];
        var offsets = this._size / chunkSize;
        for (i = 0; i < offsets; i++) {
            var offset = {
                start: i * chunkSize * 3,
                index: i * chunkSize * 3,
                count: Math.min( this._size - ( i * chunkSize ), chunkSize ) * 3
            };
            this._geometry.offsets.push( offset );
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
        this.dispatchEvent({ type: "shellEndLoad", shell: this });
    };

    Shell.prototype.getBoundingBox = function() {
        return this._boundingBox;
    };

    Shell.prototype.getSize = function() {
        return this._size;
    };

    Shell.prototype.getGeometry = function() {
        return this._geometry;
    };

    // And Graham said, let shells have events too, for they are good
    THREE.EventDispatcher.prototype.apply(Shell.prototype);
    return Shell;
});
