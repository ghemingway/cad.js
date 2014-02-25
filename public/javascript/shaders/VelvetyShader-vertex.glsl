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
    vec4 pos = modelViewMatrix * vec4(position, 1.0);
    vec3 N = normalMatrix * normal;
    vec3 I = pos.xyz;
    fNormal = normalize(faceforward(N, I, N));
    fColor = applyMinColorBrightness(color);
    fPosition = I;
    gl_Position = projectionMatrix * pos;
}
