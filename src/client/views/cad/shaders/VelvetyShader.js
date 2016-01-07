/**
 * VelvetyShader
 *
 * :author: tannern
 * :date: 2/20/14
 *
 * A THREE.js Shader
 */

let vertexShaderCode        = require('./VelvetyShader-vertex.glsl'),
    fragmentShaderCode      = require('./VelvetyShader-fragment.glsl');


THREE.VelvetyShader = function () {
    return {
        side: THREE.DoubleSide,
        vertexColors: THREE.VertexColors,
        uniforms: {
            'opacity': {type: 'f', value: 1.0},
            'ambientBrightness': {type: 'f', value: 0.3},
            'tint': {type: 'v4', value: new THREE.Vector4(0,0,0,0)}
        },
        vertexShader: vertexShaderCode,
        fragmentShader: fragmentShaderCode
    };
};
