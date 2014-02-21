//// These are provided by THREE.js
//precision highp float;
//attribute vec3 position;
//attribute vec3 normal;
//uniform mat3 normalMatrix;
//uniform mat4 modelViewMatrix;
//uniform mat4 projectionMatrix;

uniform bool overrideVertexColor;
uniform vec3 newVertexColor;

varying vec3 fNormal;
varying vec3 fPosition;
varying vec3 fColor;

const float minColorBrightness = 0.15;

// This ensures that black colored shapes are not rendered as solid black by
// effectively making dark colors slightly lighter.
vec3 applyMinColorBrightness(vec3 color)
{
    if (length(color) < minColorBrightness * 3.0) {
        return color + minColorBrightness;
    } else {
        return color;
    }
}

void main()
{
    if (overrideVertexColor) {
        fColor = applyMinColorBrightness(newVertexColor);
    } else {
        fColor = applyMinColorBrightness(color);
    }
    fNormal = normalize(normalMatrix * normal);
    vec4 pos = modelViewMatrix * vec4(position, 1.0);
    fPosition = pos.xyz;
    gl_Position = projectionMatrix * pos;
}
