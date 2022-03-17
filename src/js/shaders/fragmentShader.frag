#ifdef GL_ES
precision mediump float;
#endif

uniform float u_aspect;
uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.1412, 0.9529, 0.9804);
vec3 colorB = vec3(0.851, 1.0, 0.0);

vec3 plot(vec2 st, float fnc) {
    float plot = smoothstep(fnc - 0.01, fnc, st.y) - smoothstep(fnc, fnc + 0.01, st.y);
    vec3 color = (1.0 - plot) * vec3(fnc)  + plot * vec3(0.0078, 0.9882, 0.9059);

    return color;
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec3 pct = vec3(abs(sin(st.x + u_time)));

    color = mix(colorA, colorB, pct);

    gl_FragColor = vec4(color, 1.0);
}
