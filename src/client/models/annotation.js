/* G. Hemingway Copyright @2015
 * Annotation object
 */

"use strict";

//var THREE = require('three');


/********************************* Annotation Class ********************************/

module.exports = class Annotation extends THREE.EventDispatcher {
    constructor(id, assembly) {
        super();
        var ret = assembly.makeChild(id, this);
        if (!ret) {
//      console.log("Make new annotation: " + id);
            this._id = id;
            this._assembly = assembly;
            this._geometry = undefined;
        }
        return ret;
    }

    getID() {
        return  this._id;
    }

    addGeometry(data) {
    //        console.log("Annotation.addGeometry: " + data.lines.length);
        this._lines =_.map(data.lines, function(line) {
            var linestrip = new THREE.BufferGeometry();
            linestrip.addAttribute('position', Float32Array, line.length / 3, 3);
            linestrip.attributes.position.array.set(line);
            return linestrip;
        });
        // All done - signal completion
        this.dispatchEvent({ type: "annotationEndLoad", annotation: this });
    }

    getGeometry() {
        return this._lines;
    }
};