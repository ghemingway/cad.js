/* G. Hemingway Copyright @2014
 * Shape class for the STEP file
 */

"use strict";


/********************************* Shape Class ********************************/

define(["THREE"], function(THREE) {
    function Annotation(id, assembly, parent) {
        var ret = assembly.makeChild(id, this);
        if (!ret) {
//            console.log("Make new annotation: " + id);
            this._id = id;
            this._assembly = assembly;
            this._parent = parent;
            this._object3D = new THREE.Object3D();
        }
        return ret;
    }
});