/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";

//var THREE = require('three');


/********************************* Annotation Class ********************************/

export default class Annotation extends THREE.EventDispatcher {
    constructor(id, assembly) {
        super();
        var ret = assembly.makeChild(id, this);
        if (!ret) {
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
        this._lines =_.map(data.lines, function(line) {
            var geometry = new THREE.BufferGeometry();
            var vertices = Float32Array.from(line);
            geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
            return geometry;
        });
        // All done - signal completion
        this.dispatchEvent({ type: "annotationEndLoad", annotation: this });
    }

    getGeometry() {
        return this._lines;
    }
};