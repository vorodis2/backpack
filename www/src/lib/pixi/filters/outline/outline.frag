varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float thickness;
uniform vec4 outlineColor;
uniform vec4 filterArea;
vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

void main(void) {
    const float PI = 3.14159265358979323846264;
    vec4 ownColor = texture2D(uSampler, vTextureCoord);
    vec4 curColor;
    float maxAlpha = 0.;
    for (float angle = 0.; angle < PI * 2.; angle += %THICKNESS% ) {
        curColor = texture2D(uSampler, vec2(vTextureCoord.x + thickness * px.x * cos(angle), vTextureCoord.y + thickness * px.y * sin(angle)));
        maxAlpha = max(maxAlpha, curColor.a);
    }
    float resultAlpha = max(maxAlpha, ownColor.a);
    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);
}
