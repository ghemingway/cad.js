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
    fColor = applyMinColorBrightness(color);
    fNormal = normalize(normalMatrix * normal);
    vec4 pos = modelViewMatrix * vec4(position, 1.0);
    fPosition = pos.xyz;
    gl_Position = projectionMatrix * pos;
}
