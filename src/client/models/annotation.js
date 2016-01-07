/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


/********************************* Annotation Class ********************************/

export default class Annotation extends THREE.EventDispatcher {
    constructor(id, model) {
        super();
        let ret = model.makeChild(id, this);
        if (!ret) {
            this._id = id;
            this._model = model;
            this._geometry = undefined;
        }
        return ret;
    }

    getID() {
        return  this._id;
    }

    addGeometry(data) {
        this._lines =_.map(data.lines, function(line) {
            let geometry = new THREE.BufferGeometry();
            let vertices = new Float32Array(line.length);
            for (let i=0; i<line.length; i++) vertices[i]=line[i];
            geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
            //geometry.addAttribute('position', new THREE.BufferAttribute(line, 3));
            return geometry;
        });
        // All done - signal completion
        this.dispatchEvent({ type: "annotationEndLoad", annotation: this });
    }

    getGeometry() {
        return this._lines;
    }
};