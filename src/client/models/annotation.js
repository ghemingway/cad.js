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
        let decompressColors = function(lData, cData, defaultColor=[1.0, 0.0, 0.0]) {
            return _.map(lData, function(lineStrip, stripIndex) {
                let numVertices = lineStrip.length / 3;
                let colors = new Float32Array(lineStrip.length);
                let color = defaultColor;
                // If there is color data, process it
                if (cData) {
                    let index = 0;
                    for (let i = 0; i < cData.length; i++) {
                        index += cData[i].duration;
                        //if (stripIndex <= index) {
                        //    color = cData[i].data;
                        //}
                        color = cData[i].data;
                        if (index > stripIndex) break;
                    }
                }
                // Build colors array
                for (let i=0; i < numVertices; i++) {
                    colors[i * 3] = color[0];
                    colors[i * 3 + 1] = color[1];
                    colors[i * 3 + 2] = color[2];
                }
                return colors;
            });
        };
        // Decompress the colors data
        let colorArrays = decompressColors(data.lines, data.colorsData);

        // Create geometry for each linestrip
        this._lines =_.map(data.lines, function(lineStrip, index) {
            let geometry = new THREE.BufferGeometry();

            let vertices = new Float32Array(lineStrip.length);
            for (let i=0; i<lineStrip.length; i++) vertices[i]=lineStrip[i];
            let position = new THREE.BufferAttribute(vertices, 3);
            geometry.addAttribute('position', position );

            let colors = new THREE.BufferAttribute(colorArrays[index], 3);
            geometry.addAttribute('color', colors);
            return geometry;
        });
        // All done - signal completion
        this.dispatchEvent({ type: "annotationEndLoad", annotation: this });
    }

    getGeometry() {
        return this._lines;
    }
};