/* G. Hemingway Copyright @2016
 * Process shell geometry data from wire format to internal
 */

"use strict";


function unindexValues(data, values, buffers) {
    let numValues = data.pointsIndex.length;
    for (let i = 0; i < numValues; i++) {
        buffers.position[i] = values[data.pointsIndex[i]];
        buffers.normal[i] = values[data.normalsIndex[i]];
    }
}

function uncompressColorsA(data, colorsBuffer) {
    let index = 0;
    let numBlocks = data.colorsData.length;
    for (let i = 0; i < numBlocks; i++) {
        let block = data.colorsData[i];
        let r, g, b;
        // Be robust to crappy color data
        try {
            r = block.data[0];
            g = block.data[1];
            b = block.data[2];
        } catch(ex) {
            r = 1.0;
            g = 1.0;
            b = 1.0;
        }
        for (let j = 0; j < block.duration; j++) {
            colorsBuffer[index++] = r;
            colorsBuffer[index++] = g;
            colorsBuffer[index++] = b;
        }
    }
}

/* Revised color compression method - requires a "faces" field in the JSON */
function uncompressColorsB(data, colorsBuffer) {
    let index = 0;
    let numBlocks = data.faces.length;
    for (let i = 0; i < numBlocks; i++) {
        let block = data.faces[i];
        let r, g, b;
        // Be robust to crappy color data
        try {
            r = block.color[0];
            g = block.color[1];
            b = block.color[2];
        } catch(ex) {
            r = 1.0;
            g = 1.0;
            b = 1.0;
        }
        for (let j = 0; j < block.count; j++) {
            colorsBuffer[index++] = r;
            colorsBuffer[index++] = g;
            colorsBuffer[index++] = b;
        }
    }
}

export function makeGeometry(buffers) {
    // Calculate number of triangles
    let size = buffers.position.length / 9;
    // Create the geometry to hold the data
    let geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.BufferAttribute(size * 3, 3));
    geometry.addAttribute('normal',   new THREE.BufferAttribute(size * 3, 3), true);
    geometry.addAttribute('color',    new THREE.BufferAttribute(size * 3, 3));
    geometry.addAttribute('values',   new THREE.BufferAttribute(buffers.values, 1));

    // Now load the rest of the data
    geometry.attributes.position.array = buffers.position;
    geometry.attributes.normal.array = buffers.normal;
    geometry.attributes.color.array = buffers.color;

    // Compute bbox
    geometry.computeBoundingBox();
    return geometry;
}


export function processKeyframe(dataJSON) {
    // Correct precision
    if (dataJSON.values) {
        let precision = dataJSON.precision || 2;
        let factor = Math.pow(10, precision);
        let length = dataJSON.values.length;
        for (let i = 0; i < length; i++) {
            dataJSON.values[i] /= factor;
        }
    }
    // Just copy the data into arrays
    var buffers = {
        position:   new Float32Array(dataJSON.pointsIndex.length),
        normal:    new Float32Array(dataJSON.pointsIndex.length),
        color:     new Float32Array(dataJSON.pointsIndex.length),
        values:     new Float32Array(dataJSON.values)
    };
    unindexValues(dataJSON, dataJSON.values, buffers);
    // Handle colors
    if (dataJSON.colorsData) {
        uncompressColorsA(dataJSON, buffers.color);
    } else if (dataJSON.faces) {
        uncompressColorsB(dataJSON, buffers.color);
    }
    return buffers;
}


export function processDelta(dataJSON, obj) {
    let oldGeom = obj.model.getGeometry();
    let oldValues = oldGeom.getAttribute('values').array;
    // Correct precision
    if (dataJSON.values) {
        let precision = dataJSON.precision || obj.precision || 2;
        let factor = Math.pow(10, precision);
        let length = dataJSON.values.length;
        for (let i = 0; i < length; i++) {
            dataJSON.values[i] /= factor;
        }
    }
    let deltaBuffers = {
        position:   new Float32Array(dataJSON.pointsIndex.length),
        normal:    new Float32Array(dataJSON.pointsIndex.length),
        color:     new Float32Array(dataJSON.pointsIndex.length),
    };
    //console.log(dataJSON.pointsIndex.length);

    // Allocate the new buffers
    let oldPositions = oldGeom.getAttribute('position').array;
    let oldNormals = oldGeom.getAttribute('normal').array;
    let oldColors = oldGeom.getAttribute('color').array;
    let offset = oldPositions.length;
    let newLength = offset + deltaBuffers.position.length;
    let buffers = {
        position:   new Float32Array(newLength),
        normal:     new Float32Array(newLength),
        color:      new Float32Array(newLength),
        values:     new Float32Array(oldValues.length + dataJSON.values.length)
    };

    // Concatenate values and dataJSON.values into new values array
    buffers.values.set(oldValues);
    buffers.values.set(dataJSON.values, oldValues.length);
    // Now we can use the full values array to un-index the delta data
    unindexValues(dataJSON, buffers.values, deltaBuffers);
    // Get the color data out too (choose right version)
    if (dataJSON.colorsData) {
        uncompressColorsA(dataJSON, deltaBuffers.color);
    } else if (dataJSON.faces) {
        // Different approach here
        uncompressColorsB(dataJSON, deltaBuffers.color);
    }

    let nullNonet = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    // Trim out the remove values
    for (let i = 0; i < dataJSON.remove.length; ++i) {
        let pos = dataJSON.remove[i] * 9;
        oldPositions.set(nullNonet, pos);
        oldNormals.set(nullNonet, pos);
        oldColors.set(nullNonet, pos);
    }

    // Concatenate together the new position, normal and color values
    buffers.position.set(oldPositions);
    buffers.position.set(deltaBuffers.position, offset);
    buffers.normal.set(oldNormals);
    buffers.normal.set(deltaBuffers.normal, offset);
    buffers.color.set(oldColors);
    buffers.color.set(deltaBuffers.color, offset);
    // And, we are done
    return buffers;
}