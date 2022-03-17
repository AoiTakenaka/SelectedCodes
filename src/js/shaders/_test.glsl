#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.14;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random (in vec2 st){
	return fract(sin(dot(st.xy, vec2(12.0, 78.0))) + 50000.0);
}

// float noise(in vec2 st) {

// }

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution.xy * 3.0;
	st.x *= u_resolution.x / u_resolution.y;

	vec3 color = vec3(0.0);
	color = vec3(random(st));

	gl_FragColor = vec4(color, 1.0);
}
