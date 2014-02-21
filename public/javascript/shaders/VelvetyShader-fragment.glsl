precision highp float;

uniform float ambientFactor;     // the brightness of edge lighting (suggested defualt: 0.3, prefer 0.0 to 1.0)
uniform float directFactor;  // the brightness of front lighting (suggested defualt: 1.0, prefer 0.0 to 1.0)

varying vec3 fPosition;
varying vec3 fNormal;
varying vec3 fColor;

void main()
{
  float lightAmount = smoothstep(-ambientFactor, directFactor, dot(fNormal, normalize(-fPosition)));
  gl_FragColor = vec4(fColor * lightAmount, 1.0);
}
