"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useFBO } from "@react-three/drei";
import * as THREE from "three";

/* ======================================================================
   Same cursor effect as your first page, but for a background:
   a soft white trail follows the pointer, lights up the fine grid of tiny
   squares and bends it a little. (No headline text here.)
   Place it inside a `relative` box; it fills the box and ignores clicks.
   ====================================================================== */

const MAX_STAMPS = 120; // how many brush stamps are alive at once
const WARP = 0.05; // how strongly the grid bends
const GLOW = 0.1; // brightness of the soft white haze (0 = none)
const CELL = 9; // px size of one grid square
const DOT = 0.6; // how much of each cell is filled (0..1)
const GRID_BASE = 0.06; // brightness of the grid when nothing touches it
const GRID_LIT = 0.4; // how much the trail lights the grid up
const GRID_COLOR = [0.8, 0.83, 0.9]; // soft silver-white (r, g, b: 0..1)

const vertex = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragment = /* glsl */ `
uniform sampler2D uDisplacement; // the trail
uniform vec2 uRes;
uniform float uWarp;
uniform float uGlow;
uniform float uCell;
uniform float uDot;
uniform float uGridBase;
uniform float uGridLit;
uniform vec3 uGridColor;
varying vec2 vUv;
float PI = 3.141592653589793238;

void main() {
  float g = texture2D(uDisplacement, vUv).r;

  // bend
  float theta = g * 2.0 * PI;
  vec2 dir = vec2(sin(theta), cos(theta));
  vec2 uv = vUv + dir * g * uWarp;

  // fine grid of tiny squares: faint everywhere, lit up by the trail
  vec2 gp = fract(uv * uRes / uCell);
  vec2 gd = abs(gp - 0.5);
  float sq = smoothstep(0.5 * uDot + 0.08, 0.5 * uDot - 0.08, max(gd.x, gd.y));
  vec2 q = (vUv - vec2(0.5, 0.55)) / vec2(0.75, 0.7);
  float ambient = 1.0 - smoothstep(0.35, 1.0, length(q));
  float gridA = sq * (uGridBase * ambient + pow(g, 1.2) * uGridLit);

  // soft white haze under the grid
  float ga = pow(g, 1.4) * uGlow;
  float ua = clamp(gridA + ga, 0.0, 1.0);
  vec3 urgb = uGridColor * gridA + vec3(1.0) * ga;
  gl_FragColor = vec4(urgb / max(ua, 0.001), ua);
}
`;

function FxScene({ mouse, onReady }) {
  const { size } = useThree();
  const fbo = useFBO();
  const brushScene = useMemo(() => new THREE.Scene(), []);

  const uniforms = useMemo(
    () => ({
      uDisplacement: { value: null },
      uRes: { value: new THREE.Vector2(1, 1) },
      uWarp: { value: WARP },
      uGlow: { value: GLOW },
      uCell: { value: CELL },
      uDot: { value: DOT },
      uGridBase: { value: GRID_BASE },
      uGridLit: { value: GRID_LIT },
      uGridColor: { value: new THREE.Vector3(...GRID_COLOR) },
    }),
    []
  );

  // very soft round brush drawn in code (this is what makes the trail blurry)
  const brush = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.3, "rgba(255,255,255,0.6)");
    g.addColorStop(0.7, "rgba(255,255,255,0.15)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  }, []);

  const stamps = useMemo(() => {
    const geo = new THREE.PlaneGeometry(60, 60);
    return Array.from({ length: MAX_STAMPS }, () => {
      const m = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({ map: brush, transparent: true, depthTest: false, depthWrite: false })
      );
      m.rotation.z = Math.random() * Math.PI * 2;
      m.visible = false;
      brushScene.add(m);
      return m;
    });
  }, [brush, brushScene]);

  useEffect(() => {
    onReady?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const st = useRef({ x: 0, y: 0, has: false, i: 0 });

  const spawn = (x, y) => {
    st.current.i = (st.current.i + 1) % MAX_STAMPS;
    const m = stamps[st.current.i];
    m.position.set(x, y, 0);
    m.visible = true;
    m.material.opacity = 1;
    m.scale.set(1.75, 1.75, 1);
  };

  // priority 1 = we render everything ourselves
  useFrame(({ gl, scene, camera }) => {
    const s = st.current;

    if (mouse.current) {
      const x = mouse.current.x - size.width / 2;
      const y = size.height / 2 - mouse.current.y;
      if (!s.has) {
        s.x = x;
        s.y = y;
        s.has = true;
      }
      const dist = Math.hypot(x - s.x, y - s.y);
      if (dist > 0.5) {
        // fill the gap between frames so fast moves leave a continuous trail
        const n = Math.min(10, Math.ceil(dist / 18));
        for (let k = 1; k <= n; k++) {
          const t = k / n;
          spawn(s.x + (x - s.x) * t, s.y + (y - s.y) * t);
        }
        s.x = x;
        s.y = y;
      }
    }

    for (const m of stamps) {
      if (!m.visible) continue;
      m.rotation.z += 0.025;
      m.material.opacity *= 0.95;
      m.scale.x = 0.98 * m.scale.x + 0.155;
      m.scale.y = 0.98 * m.scale.y + 0.155;
      if (m.material.opacity < 0.003) m.visible = false;
    }

    // 1) trail -> offscreen buffer
    gl.setRenderTarget(fbo);
    gl.setClearColor(0x000000, 1);
    gl.clear();
    gl.render(brushScene, camera);

    // 2) grid + haze -> screen (transparent canvas over the black page)
    uniforms.uDisplacement.value = fbo.texture;
    uniforms.uRes.value.set(size.width, size.height);
    gl.setRenderTarget(null);
    gl.setClearColor(0x000000, 0);
    gl.render(scene, camera);
  }, 1);

  return (
    <mesh>
      <planeGeometry args={[size.width, size.height]} />
      <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms} transparent />
    </mesh>
  );
}

/**
 * props.fallback: shown instead (a plain static grid) if the visitor prefers reduced motion,
 * and for the split second before the effect is ready.
 */
export default function GridTrailFX({ fallback = null }) {
  const reduce = useReducedMotion();
  const wrapRef = useRef(null);
  const mouse = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);

    const onMove = (e) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // stop rendering when this section is off screen
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (wrapRef.current) io.observe(wrapRef.current);

    return () => {
      window.removeEventListener("pointermove", onMove);
      io.disconnect();
    };
  }, []);

  if (reduce) return fallback;

  return (
    <>
      {!ready && fallback}
      <div ref={wrapRef} aria-hidden className="pointer-events-none absolute inset-0">
        {mounted && (
          <Canvas
            orthographic
            dpr={[1, 2]}
            frameloop={visible ? "always" : "never"}
            camera={{ position: [0, 0, 5], zoom: 1 }}
            gl={{ alpha: true, antialias: false }}
          >
            <FxScene mouse={mouse} onReady={() => setReady(true)} />
          </Canvas>
        )}
      </div>
    </>
  );
}
