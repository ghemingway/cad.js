/* G. Hemingway Copyright @2014
 * Annotation object
 */

"use strict";


/********************************* Shape Class ********************************/

define(["THREE"], function(THREE) {
    function Annotation(id, assembly) {
        var ret = assembly.makeChild(id, this);
        if (!ret) {
//            console.log("Make new annotation: " + id);
            this._id = id;
            this._assembly = assembly;
            this._geometry = undefined;
        }
        return ret;
    }

    Annotation.prototype.getID = function() {
        return  this._id;
    };

    Annotation.prototype.addGeometry = function(data) {
//        console.log("Annotation.addGeometry: " + data.lines.length);
        this._lines =_.map(data.lines, function(line) {
            var linestrip = new THREE.BufferGeometry();
            linestrip.addAttribute('position', Float32Array, line.length / 3, 3);
            linestrip.attributes.position.array.set(line);
            return linestrip;
        });
        // All done - signal completion
        this.dispatchEvent({ type: "annotationEndLoad", annotation: this });
    };

    Annotation.prototype.getGeometry = function() {
        return this._lines;
    };

    // And Graham said, let annotations have events too, for they are good
    THREE.EventDispatcher.prototype.apply(Annotation.prototype);
    return Annotation;
});