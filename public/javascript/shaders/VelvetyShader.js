/**
 * VelvetyShader
 *
 * :author: tannern
 * :date: 2/20/14
 *
 * A THREE.js Shader
 */

define([
    'THREE',
    'text!shaders/VelvetyShader-vertex.glsl',
    'text!shaders/VelvetyShader-fragment.glsl'
], function (THREE, vertexShaderCode, fragmentShaderCode) {
    THREE.VelvetyShader = {
        //side: THREE.DoubleSide,
        vertexColors: THREE.VertexColors,
        transparent: true,
        uniforms: {
            'overrideVertexColor': {type: 'i', value: false},
            'newVertexColor': {type: 'v3', value: new THREE.Vector3(1.0,1.0,1.0)},
            'ambientFactor': {type: 'f', value: 0.3},
            'directFactor': {type: 'f', value: 1.0}
        },
        vertexShader: vertexShaderCode,
        fragmentShader: fragmentShaderCode
    };
});
