uniform float opacity;
uniform float ambientBrightness;     // the brightness of edge lighting (suggested default: 0.1, prefer 0.0 to 1.0)
uniform float directFactor;  // the brightness of front lighting (suggested default: 1.0, prefer 0.0 to 1.0)
uniform vec4 tint;

varying vec3 fPosition;
varying vec3 fNormal;
varying vec3 fColor;

void main()
{
    float normalDot = abs(dot(fNormal, normalize(-fPosition)));
    float lightAmount = mix(ambientBrightness, 1.0, normalDot);
    vec3 color = fColor * lightAmount;
    if (tint.w > 0.) {
        float tintAmount = mix(tint.w*0.1, tint.w, normalDot);
        color = mix(color, tint.xyz, tintAmount);
        //color += tint.xyz * tintAmount;
    }
    gl_FragColor = vec4(color, opacity);
}