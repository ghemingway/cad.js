varying vec3 fNormal;
varying vec3 fPosition;
varying vec3 fColor;

const float lumaMin = 0.15;
const float lumaRange = 1. - lumaMin;

float getLumaFromColor(const in vec3 color) {
    return color.x * 0.299 + color.y * 0.587 + color.z * 0.114;
}

vec3 compressColor(vec3 color)
{
    float luma = getLumaFromColor(color);
    return color * lumaRange + lumaMin;
}

void main()
{
    vec4 pos = modelViewMatrix * vec4(position, 1.0);
    fNormal = normalize(normalMatrix * normal);
    fColor = compressColor(color);
    fPosition = pos.xyz;
    gl_Position = projectionMatrix * pos;
}