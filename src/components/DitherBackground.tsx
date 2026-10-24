import React, { useEffect, useRef } from 'react'

/**
 * Full-page WebGL background: a slow pink "liquid" noise field, quantised
 * with an 8x8 Bayer matrix so it reads as a dithered, pixel-grain gradient.
 * Ported from the Teami landing page (resources/js/dither-bg.js).
 */

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const FRAGMENT_SHADER = `
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform float u_pixelSize;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float val = 0.0;
    float amp = 0.5;
    float freq = 1.0;
    for (int i = 0; i < 4; i++) {
      val += amp * snoise(p * freq);
      freq *= 2.0;
      amp *= 0.5;
    }
    return val;
  }

  float pattern(vec2 p, out vec2 q, out vec2 r) {
    float t = u_time * 0.06;
    q.x = fbm(p + vec2(0.0, 0.0) + t * 0.5);
    q.y = fbm(p + vec2(5.2, 1.3) + t * 0.3);
    r.x = fbm(p + 4.0 * q + vec2(1.7, 9.2) + t * 0.4);
    r.y = fbm(p + 4.0 * q + vec2(8.3, 2.8) + t * 0.2);
    return fbm(p + 4.0 * r);
  }

  // 8x8 Bayer threshold, computed recursively instead of scanning a
  // 64-entry table for every pixel.
  float bayer2(vec2 a) { a = floor(a); return fract(dot(a, vec2(0.5, a.y * 0.75))); }
  float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }
  float bayer8(vec2 a) { return bayer4(0.5 * a) * 0.25 + bayer2(a); }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    vec2 q, r;
    float n = pattern(st * 1.8, q, r);

    // Soft cream -> light pink -> hot pink -> deep pink
    vec3 c_bg = vec3(0.992, 0.95, 0.956);
    vec3 c_light_pink = vec3(1.0, 0.72, 0.81);
    vec3 c_pink = vec3(0.98, 0.25, 0.45);
    vec3 c_deep_pink = vec3(0.82, 0.14, 0.26);

    vec3 color = c_bg;
    color = mix(color, c_light_pink, clamp(n * 1.3, 0.0, 1.0));
    color = mix(color, c_pink, clamp(length(q) * 0.9, 0.0, 1.0));
    color = mix(color, c_deep_pink, clamp(length(r.x) * 0.65, 0.0, 1.0));

    vec2 ditherCoord = floor(gl_FragCoord.xy / u_pixelSize);
    float threshold = bayer8(ditherCoord) - 0.5;

    float colorSteps = 6.0;
    color += threshold * (1.0 / colorSteps);
    color = floor(color * colorSteps + 0.5) / colorSteps;

    gl_FragColor = vec4(color, 1.0);
  }
`

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile failed:', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export default function DitherBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null
    if (!gl) return

    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
    if (!vs || !fs) return

    const program = gl.createProgram()!
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link failed:', gl.getProgramInfoLog(program))
      return
    }

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)

    const positionLoc = gl.getAttribLocation(program, 'a_position')
    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution')
    const timeLoc = gl.getUniformLocation(program, 'u_time')
    const pixelSizeLoc = gl.getUniformLocation(program, 'u_pixelSize')

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const start = performance.now()
    let frame = 0

    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }
    }

    const render = () => {
      resize()
      gl.useProgram(program)
      gl.enableVertexAttribArray(positionLoc)
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height)
      gl.uniform1f(timeLoc, reduced ? 0 : (performance.now() - start) / 1000)
      gl.uniform1f(pixelSizeLoc, 2.5)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      if (!reduced) frame = requestAnimationFrame(render)
    }

    // With reduced motion there is no loop, so redraw the still frame on resize.
    const onResize = () => { if (reduced) render() }
    window.addEventListener('resize', onResize)
    render()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 h-full w-full pointer-events-none"
      style={{ zIndex: -1, background: '#FDF2F4' }}
    />
  )
}
