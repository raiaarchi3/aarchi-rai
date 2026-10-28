(()=>{"use strict";module.exports = [
"[project]/app/components/GridTrailFX.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GridTrailFX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-9ce18a08.esm.js [app-ssr] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-9ce18a08.esm.js [app-ssr] (ecmascript) <export D as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Fbo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
/* ======================================================================
   Same cursor effect as your first page, but for a background:
   a soft white trail follows the pointer, lights up the fine grid of tiny
   squares and bends it a little. (No headline text here.)
   Place it inside a `relative` box; it fills the box and ignores clicks.
   ====================================================================== */ const MAX_STAMPS = 120; // how many brush stamps are alive at once
const WARP = 0.05; // how strongly the grid bends
const GLOW = 0.1; // brightness of the soft white haze (0 = none)
const CELL = 9; // px size of one grid square
const DOT = 0.6; // how much of each cell is filled (0..1)
const GRID_BASE = 0.06; // brightness of the grid when nothing touches it
const GRID_LIT = 0.4; // how much the trail lights the grid up
const GRID_COLOR = [
    0.8,
    0.83,
    0.9
]; // soft silver-white (r, g, b: 0..1)
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
    const { size } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"])();
    const fbo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFBO"])();
    const brushScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"](), []);
    const uniforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            uDisplacement: {
                value: null
            },
            uRes: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 1)
            },
            uWarp: {
                value: WARP
            },
            uGlow: {
                value: GLOW
            },
            uCell: {
                value: CELL
            },
            uDot: {
                value: DOT
            },
            uGridBase: {
                value: GRID_BASE
            },
            uGridLit: {
                value: GRID_LIT
            },
            uGridColor: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](...GRID_COLOR)
            }
        }), []);
    // very soft round brush drawn in code (this is what makes the trail blurry)
    const brush = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](c);
    }, []);
    const stamps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](60, 60);
        return Array.from({
            length: MAX_STAMPS
        }, ()=>{
            const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geo, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                map: brush,
                transparent: true,
                depthTest: false,
                depthWrite: false
            }));
            m.rotation.z = Math.random() * Math.PI * 2;
            m.visible = false;
            brushScene.add(m);
            return m;
        });
    }, [
        brush,
        brushScene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onReady?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const st = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        has: false,
        i: 0
    });
    const spawn = (x, y)=>{
        st.current.i = (st.current.i + 1) % MAX_STAMPS;
        const m = stamps[st.current.i];
        m.position.set(x, y, 0);
        m.visible = true;
        m.material.opacity = 1;
        m.scale.set(1.75, 1.75, 1);
    };
    // priority 1 = we render everything ourselves
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])(({ gl, scene, camera })=>{
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
                for(let k = 1; k <= n; k++){
                    const t = k / n;
                    spawn(s.x + (x - s.x) * t, s.y + (y - s.y) * t);
                }
                s.x = x;
                s.y = y;
            }
        }
        for (const m of stamps){
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                args: [
                    size.width,
                    size.height
                ]
            }, void 0, false, {
                fileName: "[project]/app/components/GridTrailFX.js",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                vertexShader: vertex,
                fragmentShader: fragment,
                uniforms: uniforms,
                transparent: true
            }, void 0, false, {
                fileName: "[project]/app/components/GridTrailFX.js",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GridTrailFX.js",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
function GridTrailFX({ fallback = null }) {
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const onMove = (e)=>{
            const el = wrapRef.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            mouse.current = {
                x: e.clientX - r.left,
                y: e.clientY - r.top
            };
        };
        window.addEventListener("pointermove", onMove, {
            passive: true
        });
        // stop rendering when this section is off screen
        const io = new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting));
        if (wrapRef.current) io.observe(wrapRef.current);
        return ()=>{
            window.removeEventListener("pointermove", onMove);
            io.disconnect();
        };
    }, []);
    if (reduce) return fallback;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !ready && fallback,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: wrapRef,
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                children: mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                    orthographic: true,
                    dpr: [
                        1,
                        2
                    ],
                    frameloop: visible ? "always" : "never",
                    camera: {
                        position: [
                            0,
                            0,
                            5
                        ],
                        zoom: 1
                    },
                    gl: {
                        alpha: true,
                        antialias: false
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FxScene, {
                        mouse: mouse,
                        onReady: ()=>setReady(true)
                    }, void 0, false, {
                        fileName: "[project]/app/components/GridTrailFX.js",
                        lineNumber: 238,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/GridTrailFX.js",
                    lineNumber: 231,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/GridTrailFX.js",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GridTrailFX.js",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/Navbar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const LINKS = [
    {
        label: 'About Me',
        href: '/about'
    },
    {
        label: 'Projects',
        href: '/#work'
    },
    {
        label: 'Contact Me',
        href: '/#contact'
    }
];
const NEAR = 70; // px: how close the cursor must get to a link for its underline to appear
const NAV_HEIGHT = 80; // px: space left above a section so the navbar doesn't cover its heading
const HOME_INTRO_MS = 4700; // home page intro (logo + doors) length; hash scroll waits for it
function distanceToRect(x, y, r) {
    const dx = Math.max(r.left - x, 0, x - r.right);
    const dy = Math.max(r.top - y, 0, y - r.bottom);
    return Math.hypot(dx, dy);
}
const easeOutQuart = (t)=>1 - Math.pow(1 - t, 4);
function Navbar() {
    const refs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [near, setNear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setMounted(true), []);
    const scrollToTop = ()=>lenis ? lenis.scrollTo(0, {
            duration: 1.4,
            easing: easeOutQuart
        }) : window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    // scroll to the very bottom of the page
    const scrollToBottom = (duration = 1.6)=>{
        const bottom = document.documentElement.scrollHeight - window.innerHeight;
        if (lenis) {
            lenis.scrollTo(bottom, {
                duration,
                easing: easeOutQuart
            });
        } else {
            window.scrollTo({
                top: bottom,
                behavior: 'smooth'
            });
        }
    };
    const scrollToTarget = (target, duration)=>{
        if (lenis) {
            lenis.scrollTo(target, {
                offset: -NAV_HEIGHT,
                duration,
                easing: easeOutQuart
            });
        } else {
            const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        }
    };
    // scroll to a "#id" on the home page. If #contact has no element, go to the page bottom.
    const scrollToHash = (hash, duration)=>{
        const target = document.querySelector(hash);
        if (target) {
            const distance = Math.abs(target.getBoundingClientRect().top);
            const d = duration ?? Math.min(2, Math.max(0.9, distance / 3000 + 0.7));
            // contact is the last section: land at the very bottom so it is fully visible
            if (hash === '#contact') scrollToBottom(d);
            else scrollToTarget(target, d);
        } else if (hash === '#contact') {
            scrollToBottom(duration ?? 1.6);
        }
    };
    const handleClick = (e, href)=>{
        setOpen(false);
        // section links (/#work, /#contact) while already on the home page: smooth scroll
        if (href.startsWith('/#') && pathname === '/') {
            e.preventDefault();
            scrollToHash(href.replace('/', ''));
        }
    // everything else (like /about, or /#work from another page) is a normal page navigation
    };
    // arriving on the home page from another page with a #section in the link: scroll to it
    // once the home intro has finished (the page can't scroll while the intro plays)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pathname !== '/') return;
        const hash = window.location.hash;
        if (!hash) return;
        const t = setTimeout(()=>scrollToHash(hash, 1.2), HOME_INTRO_MS);
        return ()=>clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname,
        lenis
    ]);
    // proximity detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let frame = 0;
        const onMove = (e)=>{
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(()=>{
                let best = null;
                let bestDist = NEAR;
                refs.current.forEach((el, i)=>{
                    if (!el) return;
                    const d = distanceToRect(e.clientX, e.clientY, el.getBoundingClientRect());
                    if (d < bestDist) {
                        bestDist = d;
                        best = i;
                    }
                });
                setNear((prev)=>prev === best ? prev : best);
            });
        };
        const onLeave = ()=>setNear(null);
        window.addEventListener('mousemove', onMove, {
            passive: true
        });
        document.documentElement.addEventListener('mouseleave', onLeave);
        return ()=>{
            cancelAnimationFrame(frame);
            window.removeEventListener('mousemove', onMove);
            document.documentElement.removeEventListener('mouseleave', onLeave);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', onScroll);
    }, []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999
        },
        className: `backdrop-blur-md transition-colors duration-300 ${scrolled ? 'border-b border-white/10 bg-black/60' : 'border-b border-transparent bg-black/35'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 text-white lg:px-[4vw]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        onClick: (e)=>{
                            if (pathname === '/') {
                                e.preventDefault();
                                scrollToTop();
                            }
                        },
                        className: "text-2xl font-black tracking-tighter text-white",
                        children: "portfolio"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.js",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden items-center gap-10 md:flex",
                        children: LINKS.map((link, i)=>{
                            const active = near === i || pathname === link.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    onClick: (e)=>handleClick(e, link.href),
                                    ref: (el)=>refs.current[i] = el,
                                    className: `relative inline-block py-1 text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${active ? 'text-white' : 'text-neutral-400'}`,
                                    children: [
                                        link.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: false,
                                            animate: {
                                                scaleX: active ? 1 : 0
                                            },
                                            transition: {
                                                duration: 0.35,
                                                ease: [
                                                    0.22,
                                                    1,
                                                    0.36,
                                                    1
                                                ]
                                            },
                                            style: {
                                                transformOrigin: active ? 'left' : 'right'
                                            },
                                            className: "absolute -bottom-0.5 left-0 h-[2px] w-full bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.js",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Navbar.js",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this)
                            }, link.label, false, {
                                fileName: "[project]/app/components/Navbar.js",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.js",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setOpen((o)=>!o),
                        "aria-label": "Toggle menu",
                        className: "flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-0.5 w-6 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.js",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.js",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-0.5 w-6 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.js",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.js",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.js",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].ul, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: 'auto'
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "overflow-hidden border-t border-white/10 bg-black/70 backdrop-blur-md md:hidden",
                    children: LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                onClick: (e)=>handleClick(e, link.href),
                                className: "block px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-neutral-300",
                                children: link.label
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.js",
                                lineNumber: 211,
                                columnNumber: 17
                            }, this)
                        }, link.label, false, {
                            fileName: "[project]/app/components/Navbar.js",
                            lineNumber: 210,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/Navbar.js",
                    lineNumber: 203,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.js",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Navbar.js",
        lineNumber: 139,
        columnNumber: 5
    }, this), document.body);
}
}),
"[project]/app/project/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecentWork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
// import * as THREE from 'three';
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GridTrailFX$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GridTrailFX.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Navbar.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
// Add or remove projects here. The gallery adjusts automatically.
const PROJECTS = [
    {
        title: 'SoulTalk - Anonymous Confessions',
        caption: 'Share your confessions, thoughts, and experiences without fear of judgment.',
        description: 'An anonymous platform where users share personal thoughts and confessions in a safe, supportive space, with upvotes, downvotes, comments and shareable links.',
        points: [
            'Built with Next.js and React for fast, dynamic, server-rendered pages.',
            'Integrated Firebase for real-time storage of posts and interactions.',
            'Designed a content moderation system to keep confessions within community guidelines.'
        ],
        tags: [
            'NextJs',
            'React',
            'Firebase',
            'Vercel',
            'CSS Modules'
        ],
        card: 'bg-white text-black border-neutral-300',
        shot: 'bg-[radial-gradient(120%_90%_at_50%_110%,#ffffff,#e5e5e5_55%,#cfcfcf)]',
        capColor: 'text-neutral-800',
        dot: 'bg-black',
        tag: 'bg-black text-white',
        muted: 'text-neutral-600',
        image: null,
        ink: '#111111',
        art: [
            '#ffffff',
            '#ececec',
            '#d4d4d4'
        ]
    },
    {
        title: 'ResumeAI Pro',
        caption: 'Create professional resumes with AI assistance, customizable templates, and one-click export.',
        description: 'An AI-powered resume builder to create, edit and export professional resumes with tailored bullet points, summaries and drag-and-drop ordering.',
        points: [
            'AI-generated bullet points tailored to specific job descriptions (Google Gemini).',
            'Real-time WYSIWYG preview with PDF, TXT and JSON export.',
            'Drag-and-drop section ordering plus docx → html import and export.'
        ],
        tags: [
            'Next.js 15',
            'React',
            'Firebase',
            'Gemini API',
            'react-pdf',
            'jspdf',
            'framer-motion'
        ],
        card: 'bg-[#f5f5f5] text-black border-neutral-300',
        shot: 'bg-gradient-to-b from-white via-neutral-100 to-neutral-300',
        capColor: 'text-neutral-800',
        dot: 'bg-black',
        tag: 'bg-neutral-900 text-white',
        muted: 'text-neutral-600',
        image: null,
        ink: '#111111',
        art: [
            '#ffffff',
            '#e8e8e8',
            '#cccccc'
        ]
    },
    {
        title: 'DermaSetu',
        caption: 'Early detection of skin diseases for rural and underserved communities.',
        description: 'A digital platform for early detection and remote diagnosis of skin diseases, improving healthcare access in rural and underserved communities.',
        points: [
            'Image-based analysis for early detection of skin diseases.',
            'Secure skin-image upload for health workers and patients, with digital patient records.',
            'Works on low-resource devices so it stays usable in rural areas.'
        ],
        tags: [
            'Next.js',
            'Firebase',
            'REST API',
            'TensorFlow',
            'Python',
            'OpenCV'
        ],
        card: 'bg-[#fafafa] text-black border-neutral-300',
        shot: 'bg-[radial-gradient(120%_90%_at_50%_110%,#fafafa,#e0e0e0_55%,#bdbdbd)]',
        capColor: 'text-neutral-800',
        dot: 'bg-black',
        tag: 'bg-black text-white',
        muted: 'text-neutral-600',
        image: null,
        ink: '#111111',
        art: [
            '#fafafa',
            '#e0e0e0',
            '#bdbdbd'
        ]
    },
    {
        title: 'CodeWing',
        caption: 'CodeWing is a platform that gives Apple users early access to beta apps with advanced features...',
        description: 'A platform that gives Apple users early access to beta apps, with a clean way for developers to submit their ideas and for users to browse them.',
        points: [
            'Leveraged Partial Prerendering and After for faster loading.',
            'Simplified idea submission with a clean, intuitive design.',
            'Enhanced browsing with seamless performance optimization.'
        ],
        tags: [
            'NextJs',
            'React',
            'Tailwind Css',
            'Firebase',
            'markdown',
            'PostgreSQL',
            'Auth.js',
            'GitHub'
        ],
        card: 'bg-[#ececec] text-black border-neutral-400',
        shot: 'bg-[radial-gradient(120%_90%_at_50%_110%,#f5f5f5,#d6d6d6_55%,#a8a8a8)]',
        capColor: 'text-neutral-800',
        dot: 'bg-black',
        tag: 'bg-neutral-900 text-white',
        muted: 'text-neutral-700',
        image: null,
        ink: '#111111',
        art: [
            '#f5f5f5',
            '#d6d6d6',
            '#a8a8a8'
        ]
    }
];
// ======================= Background grid (same as the first page) =======================
const GRID_CELL = 9; // px size of one grid square
const GRID_DOT = 0.6; // how much of each cell is filled (0..1)
const GRID_BASE = 0.06; // brightness of the grid when nothing touches it (0 = hidden)
const GRID_RGB = '204,212,230'; // soft silver-white
const gridTile = (alpha)=>{
    const sq = GRID_CELL * GRID_DOT;
    const off = (GRID_CELL - sq) / 2;
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${GRID_CELL}' height='${GRID_CELL}'><rect x='${off}' y='${off}' width='${sq}' height='${sq}' fill='rgb(${GRID_RGB})' fill-opacity='${alpha}'/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};
function DotGrid() {
    // fades out toward the edges, like the first page
    const fade = 'radial-gradient(ellipse 75% 70% at 50% 55%, #000 35%, transparent 100%)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0",
        style: {
            backgroundImage: gridTile(GRID_BASE),
            WebkitMaskImage: fade,
            maskImage: fade
        }
    }, void 0, false, {
        fileName: "[project]/app/project/page.js",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
// ======================= Your flower picture =======================
const FLOWER_SRC = '/flowers/flower.png'; // default picture (in /public/flowers/, transparent PNG looks best)
// One line per video / flower. Add a line = more, delete a line = fewer.
// x, y and size are in % of the PAGE WIDTH, measured from the middle of the page,
// so everything scales together on any screen.
//   video : a video file in /public, e.g. video: '/flowers/flower.mp4'  (plays on a loop, muted)
//   blend : for videos. true  = black parts of the video turn see-through (use for an mp4 on a black background)
//           false = for videos that already have a transparent background (webm / mov with alpha)
//   src   : a picture instead of a video, e.g. src: '/flowers/rose.png'  (no video + no src = FLOWER_SRC)
//   size  : width. bigger number = bigger
//   x     : + moves right, - moves left   (0 = middle of the page)
//   y     : + moves down,  - moves up     (0 = middle of the page)
//   sway  : how much it rocks (0 = still). Mostly for pictures
//   delay : seconds, so several don't move together
const FLOWERS = [
    {
        video: '/flowers/flower.mp4',
        blend: true,
        size: 30,
        x: 0,
        y: -20,
        sway: 0,
        delay: 0
    }
];
function Flower({ src = FLOWER_SRC, video, blend = true, size, x, y, sway = 0, delay = 0 }) {
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(src);
    const [videoFailed, setVideoFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const showVideo = video && !videoFailed;
    const rock = sway && !reduce ? {
        rotate: [
            -sway,
            sway,
            -sway
        ],
        scale: [
            1,
            1.02,
            1
        ]
    } : undefined;
    const rockTransition = {
        duration: 6 + delay,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: "pointer-events-none absolute left-1/2 top-1/2",
        style: {
            width: `${size}%`,
            marginLeft: `${x}%`,
            marginTop: `${y}%`,
            transform: 'translate(-50%, -50%)'
        },
        children: showVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].video, {
            src: video,
            autoPlay: !reduce,
            loop: true,
            muted: true,
            playsInline: true,
            preload: "auto",
            disablePictureInPicture: true,
            onError: ()=>setVideoFailed(true),
            className: `block h-auto w-full select-none ${blend ? 'mix-blend-screen' : ''}`,
            animate: rock,
            transition: rockTransition
        }, void 0, false, {
            fileName: "[project]/app/project/page.js",
            lineNumber: 164,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
            src: current,
            onError: ()=>setCurrent((c)=>c === FLOWER_SRC ? c : FLOWER_SRC),
            alt: "",
            draggable: false,
            className: "block h-auto w-full select-none drop-shadow-[0_18px_28px_rgba(0,0,0,0.65)]",
            animate: rock,
            transition: rockTransition
        }, void 0, false, {
            fileName: "[project]/app/project/page.js",
            lineNumber: 178,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/project/page.js",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
// Sits over the whole page; x / y / size above are measured from the middle of this layer.
function FlowerLayer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0 z-10 overflow-hidden",
        children: FLOWERS.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Flower, {
                ...f
            }, i, false, {
                fileName: "[project]/app/project/page.js",
                lineNumber: 197,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/project/page.js",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
// "Recent Work" heading text (only shown if SHOW_HEADING is true).
function Heading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-center px-5 pt-36 text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[13px] text-neutral-300",
                    children: "Featured Projects"
                }, void 0, false, {
                    fileName: "[project]/app/project/page.js",
                    lineNumber: 208,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-5xl font-bold tracking-tight sm:text-6xl",
                    children: [
                        "Recent",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            className: "bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text italic text-transparent",
                            children: "Work"
                        }, void 0, false, {
                            fileName: "[project]/app/project/page.js",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/project/page.js",
                    lineNumber: 209,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/project/page.js",
            lineNumber: 207,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/project/page.js",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
// ======================= 3D gallery (rotating cylinder of project panels) =======================
const PANELS = 32; // how many panels wind around the cylinder (projects repeat to fill them)
const FLOW_SPEED = 0.8; // how fast the panels flow downward (bigger = faster, 0 = no flow)
const GALLERY_ZOOM = 1.5; // bigger number = bigger gallery (camera moves closer). 1 = original size
const setSRGB = (t)=>{
    if ('colorSpace' in t) t.colorSpace = THREE.SRGBColorSpace;
    else t.encoding = THREE.sRGBEncoding;
};
function wrapLines(ctx, text, maxW) {
    const words = text.split(' ');
    const lines = [];
    let line = '';
    for (const w of words){
        const t = line ? `${line} ${w}` : w;
        if (ctx.measureText(t).width > maxW && line) {
            lines.push(line);
            line = w;
        } else line = t;
    }
    if (line) lines.push(line);
    return lines;
}
// Draws a panel picture in code (used when a project has no screenshot).
function makeArt(project, index, total) {
    const W = 1400;
    const H = 400;
    const c = document.createElement('canvas');
    c.width = W;
    c.height = H;
    const ctx = c.getContext('2d');
    const [c1, c2, c3] = project.art || [
        '#444',
        '#222',
        '#111'
    ];
    const g = ctx.createRadialGradient(W / 2, H * 1.1, 0, W / 2, H * 1.1, W * 0.55);
    g.addColorStop(0, c1);
    g.addColorStop(0.55, c2);
    g.addColorStop(1, c3);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    const ink = project.ink || '#ffffff';
    ctx.strokeStyle = ink;
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.18;
    ctx.strokeRect(14, 14, W - 28, H - 28);
    const font = 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = ink;
    ctx.globalAlpha = 0.65;
    ctx.font = `600 26px ${font}`;
    ctx.letterSpacing = '8px';
    ctx.fillText(`${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`, 70, 80);
    ctx.letterSpacing = '0px';
    ctx.globalAlpha = 1;
    ctx.font = `700 74px ${font}`;
    const titleLines = wrapLines(ctx, project.title, W - 140).slice(0, 2);
    titleLines.forEach((l, i)=>ctx.fillText(l, 70, 170 + i * 82));
    ctx.globalAlpha = 0.8;
    ctx.font = `400 30px ${font}`;
    const capY = 170 + titleLines.length * 82 + 6;
    wrapLines(ctx, project.caption, W - 140).slice(0, 2).forEach((l, i)=>ctx.fillText(l, 70, capY + i * 40));
    ctx.globalAlpha = 0.55;
    ctx.font = `600 22px ${font}`;
    ctx.fillText('CLICK TO OPEN  →', 70, H - 42);
    ctx.globalAlpha = 1;
    return c;
}
function Gallery3D({ projects, onSelect, paused, speed = 1, scale = 1 }) {
    const hostRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const live = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        speed,
        scale,
        paused,
        onSelect
    });
    live.current = {
        speed,
        scale,
        paused,
        onSelect
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const host = hostRef.current;
        const canvas = canvasRef.current;
        if (!host || !canvas) return undefined;
        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true
        });
        renderer.setClearColor(0x000000, 0);
        if ('outputColorSpace' in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace;
        else renderer.outputEncoding = THREE.sRGBEncoding;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
        camera.position.z = 18;
        const gallery = new THREE.Group();
        scene.add(gallery);
        const geometry = new THREE.CylinderGeometry(5, 5, 1.8, 64, 1, true, 0, Math.PI * 0.4);
        const loader = new THREE.TextureLoader();
        const total = projects.length;
        let disposed = false;
        let frame = 0;
        let elapsed = 0;
        let previousTime = 0;
        let speedFactor = 1;
        let hovered = -1; // project index under the pointer
        let hostVisible = true;
        let documentVisible = !document.hidden;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // one picture per project; the back copy is mirrored so text reads correctly from inside too
        const makeTexture = (p, i, flip)=>{
            let t;
            if (p.image) {
                t = loader.load(p.image, ()=>{
                    if (!disposed) renderer.render(scene, camera);
                });
            } else {
                t = new THREE.CanvasTexture(makeArt(p, i, total));
            }
            setSRGB(t);
            t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
            if (flip) {
                t.repeat.x = -1;
                t.offset.x = 1;
            }
            return t;
        };
        const frontTextures = projects.map((p, i)=>makeTexture(p, i, false));
        const backTextures = projects.map((p, i)=>makeTexture(p, i, true));
        const frontMeshes = [];
        const materials = [];
        for(let k = 0; k < PANELS; k++){
            const pi = k % total;
            const frontMat = new THREE.MeshBasicMaterial({
                map: frontTextures[pi],
                side: THREE.FrontSide,
                transparent: true,
                opacity: 0.97,
                toneMapped: false
            });
            frontMat.color.setScalar(0.8);
            const backMat = new THREE.MeshBasicMaterial({
                map: backTextures[pi],
                side: THREE.BackSide,
                transparent: true,
                opacity: 0.4,
                toneMapped: false,
                depthWrite: false
            });
            backMat.color.setScalar(0.55);
            materials.push(frontMat, backMat);
            const front = new THREE.Mesh(geometry, frontMat);
            const back = new THREE.Mesh(geometry, backMat);
            front.userData.pi = pi;
            [
                front,
                back
            ].forEach((m)=>{
                m.position.y = (k - PANELS / 2) * 2.4;
                m.rotation.y = k * (Math.PI / 4);
                gallery.add(m);
            });
            frontMeshes.push(front);
        }
        // the downward flow loops seamlessly: after LOOP units the spiral looks exactly as it did at the start
        const gcd = (a, b)=>b ? gcd(b, a % b) : a;
        const panelsPerLoop = 8 * total / gcd(8, total); // whole turns (8 panels) and whole project cycles
        const LOOP = panelsPerLoop * 2.4;
        const raycaster = new THREE.Raycaster();
        const ndc = new THREE.Vector2();
        const pick = (clientX, clientY)=>{
            const r = host.getBoundingClientRect();
            ndc.x = (clientX - r.left) / r.width * 2 - 1;
            ndc.y = -((clientY - r.top) / r.height) * 2 + 1;
            raycaster.setFromCamera(ndc, camera);
            const hit = raycaster.intersectObjects(frontMeshes, false)[0];
            return hit ? hit.object.userData.pi : -1;
        };
        const render = (time = performance.now())=>{
            const s = live.current;
            const safeSpeed = Math.min(3, Math.max(0, s.speed));
            const safeScale = Math.min(1.5, Math.max(0.6, s.scale));
            const target = hovered >= 0 || s.paused ? 0 : 1; // slow to a stop on hover / when a card is open
            speedFactor += (target - speedFactor) * 0.08;
            if (previousTime && !reducedMotion) elapsed += Math.min((time - previousTime) / 1000, 0.05) * safeSpeed * speedFactor;
            previousTime = time;
            gallery.rotation.y = elapsed * 0.18;
            gallery.position.y = -(elapsed * FLOW_SPEED % LOOP) * safeScale; // flows downward, then loops invisibly
            gallery.scale.setScalar(safeScale);
            // brighten every panel of the hovered project
            frontMeshes.forEach((m)=>{
                const to = m.userData.pi === hovered ? 1 : 0.8;
                m.material.color.setScalar(m.material.color.r + (to - m.material.color.r) * 0.15);
            });
            renderer.render(scene, camera);
        };
        const tick = (time)=>{
            if (disposed || !hostVisible || !documentVisible) {
                frame = 0;
                previousTime = 0;
                return;
            }
            render(time);
            frame = window.requestAnimationFrame(tick);
        };
        const start = ()=>{
            if (reducedMotion) {
                render(0);
                return;
            }
            if (!frame && hostVisible && documentVisible) frame = window.requestAnimationFrame(tick);
        };
        const stop = ()=>{
            if (frame) window.cancelAnimationFrame(frame);
            frame = 0;
            previousTime = 0;
        };
        const resize = ()=>{
            const b = host.getBoundingClientRect();
            const w = Math.max(1, Math.round(b.width));
            const h = Math.max(1, Math.round(b.height));
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.position.z = Math.max(18, 18.4 / camera.aspect) / GALLERY_ZOOM; // fits narrow screens, then zooms in
            camera.updateProjectionMatrix();
            render();
        };
        const onMove = (e)=>{
            hovered = pick(e.clientX, e.clientY);
            host.style.cursor = hovered >= 0 ? 'pointer' : 'default';
            if (reducedMotion) render();
        };
        const onLeave = ()=>{
            hovered = -1;
            host.style.cursor = 'default';
        };
        const onClick = (e)=>{
            const pi = pick(e.clientX, e.clientY);
            if (pi >= 0) live.current.onSelect(pi);
        };
        const resizeObserver = new ResizeObserver(resize);
        const intersectionObserver = new IntersectionObserver(([entry])=>{
            hostVisible = entry ? entry.isIntersecting : true;
            if (hostVisible) start();
            else stop();
        });
        const onVisibility = ()=>{
            documentVisible = !document.hidden;
            if (documentVisible) start();
            else stop();
        };
        resizeObserver.observe(host);
        intersectionObserver.observe(host);
        document.addEventListener('visibilitychange', onVisibility);
        host.addEventListener('pointermove', onMove);
        host.addEventListener('pointerleave', onLeave);
        host.addEventListener('click', onClick);
        resize();
        start();
        return ()=>{
            disposed = true;
            stop();
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            document.removeEventListener('visibilitychange', onVisibility);
            host.removeEventListener('pointermove', onMove);
            host.removeEventListener('pointerleave', onLeave);
            host.removeEventListener('click', onClick);
            gallery.clear();
            geometry.dispose();
            materials.forEach((m)=>m.dispose());
            frontTextures.forEach((t)=>t.dispose());
            backTextures.forEach((t)=>t.dispose());
            renderer.dispose();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: hostRef,
        className: "absolute inset-0",
        role: "img",
        "aria-label": "Rotating gallery of recent projects. Click a panel to open it.",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "block h-full w-full",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/app/project/page.js",
            lineNumber: 509,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/project/page.js",
        lineNumber: 508,
        columnNumber: 5
    }, this);
}
// ======================= Card that opens when you click a panel =======================
function ProjectModal({ index, onClose }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const project = index === null ? null : PROJECTS[index];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setMounted(true), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!project) return undefined;
        const onKey = (e)=>e.key === 'Escape' && onClose();
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return ()=>{
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [
        project,
        onClose
    ]);
    if (!mounted) return null;
    // rendered in <body> so it always sits above the navbar and everything else
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: project && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.25
            },
            onClick: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].article, {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": project.title,
                initial: {
                    opacity: 0,
                    scale: 0.92,
                    y: 28
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: 0.95,
                    y: 16
                },
                transition: {
                    duration: 0.35,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                onClick: (e)=>e.stopPropagation(),
                className: `relative max-h-[90vh] w-[min(980px,94vw)] overflow-y-auto rounded-[28px] border p-5 shadow-[0_30px_100px_rgba(0,0,0,0.7)] sm:p-7 ${project.card}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        "aria-label": "Close",
                        className: "absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-current text-lg leading-none opacity-60 transition-opacity hover:opacity-100",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/app/project/page.js",
                        lineNumber: 559,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-center gap-7 md:grid-cols-[4.5fr_7fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative hidden aspect-[1/0.85] w-full overflow-hidden rounded-2xl border border-white/10 p-[7%] md:block ${project.shot}`,
                                children: project.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: project.image,
                                    alt: project.title,
                                    className: "absolute inset-0 h-full w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/project/page.js",
                                    lineNumber: 573,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `relative z-10 max-w-[92%] text-[13px] font-semibold leading-snug lg:text-sm ${project.capColor}`,
                                            children: project.caption
                                        }, void 0, false, {
                                            fileName: "[project]/app/project/page.js",
                                            lineNumber: 576,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-x-[14%] bottom-0 grid h-[52%] content-start gap-1.5 rounded-t-xl border border-b-0 border-neutral-300 bg-white p-3 shadow-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1.5 w-2/5 rounded bg-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/project/page.js",
                                                    lineNumber: 580,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-6 rounded-md border border-neutral-200 bg-neutral-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/project/page.js",
                                                    lineNumber: 581,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-4 w-3/4 rounded-md border border-neutral-200 bg-neutral-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/project/page.js",
                                                    lineNumber: 582,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-6 rounded-md border border-neutral-200 bg-neutral-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/project/page.js",
                                                    lineNumber: 583,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/project/page.js",
                                            lineNumber: 579,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/project/page.js",
                                    lineNumber: 575,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/project/page.js",
                                lineNumber: 569,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mb-2 block text-[11px] font-semibold tracking-[0.3em] opacity-60",
                                        children: [
                                            String(index + 1).padStart(2, '0'),
                                            " / ",
                                            String(PROJECTS.length).padStart(2, '0')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/project/page.js",
                                        lineNumber: 590,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-2 pr-10 text-xl font-semibold tracking-tight sm:text-2xl",
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/project/page.js",
                                        lineNumber: 593,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `mb-3 text-[13px] leading-6 sm:text-sm ${project.muted}`,
                                        children: project.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/project/page.js",
                                        lineNumber: 594,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mb-4 grid gap-2",
                                        children: project.points.map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-3 text-[13px] leading-5 sm:text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 ${project.dot}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/project/page.js",
                                                        lineNumber: 598,
                                                        columnNumber: 23
                                                    }, this),
                                                    pt
                                                ]
                                            }, pt, true, {
                                                fileName: "[project]/app/project/page.js",
                                                lineNumber: 597,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/project/page.js",
                                        lineNumber: 595,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: project.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `rounded-full px-3 py-1 text-[11px] font-semibold ${project.tag}`,
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/app/project/page.js",
                                                lineNumber: 605,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/project/page.js",
                                        lineNumber: 603,
                                        columnNumber: 17
                                    }, this),
                                    project.links && project.links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 flex flex-wrap gap-3",
                                        children: project.links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: l.href,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "rounded-full border border-current px-4 py-1.5 text-xs font-semibold opacity-80 transition-opacity hover:opacity-100",
                                                children: [
                                                    l.label,
                                                    " ↗"
                                                ]
                                            }, l.href, true, {
                                                fileName: "[project]/app/project/page.js",
                                                lineNumber: 613,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/project/page.js",
                                        lineNumber: 611,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/project/page.js",
                                lineNumber: 589,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/project/page.js",
                        lineNumber: 568,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/project/page.js",
                lineNumber: 548,
                columnNumber: 11
            }, this)
        }, "backdrop", false, {
            fileName: "[project]/app/project/page.js",
            lineNumber: 539,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/project/page.js",
        lineNumber: 537,
        columnNumber: 5
    }, this), document.body);
}
// ======================= Section =======================
const SHOW_HEADING = false; // true = show the "Recent Work" heading text
function RecentWork() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "work",
        className: "ml-[calc(50%-50vw)] w-screen bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-screen min-h-[720px] w-full overflow-hidden bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GridTrailFX$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DotGrid, {}, void 0, false, {
                            fileName: "[project]/app/project/page.js",
                            lineNumber: 644,
                            columnNumber: 32
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/project/page.js",
                        lineNumber: 644,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/project/page.js",
                        lineNumber: 645,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Gallery3D, {
                            projects: PROJECTS,
                            onSelect: setOpenIndex,
                            paused: openIndex !== null
                        }, void 0, false, {
                            fileName: "[project]/app/project/page.js",
                            lineNumber: 649,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/project/page.js",
                        lineNumber: 648,
                        columnNumber: 9
                    }, this),
                    SHOW_HEADING && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {}, void 0, false, {
                        fileName: "[project]/app/project/page.js",
                        lineNumber: 653,
                        columnNumber: 26
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pointer-events-none absolute inset-x-0 bottom-6 z-10 text-center text-[11px] uppercase tracking-[0.35em] text-neutral-500",
                        children: "Hover to pause · Click a panel to open"
                    }, void 0, false, {
                        fileName: "[project]/app/project/page.js",
                        lineNumber: 655,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/project/page.js",
                lineNumber: 643,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectModal, {
                index: openIndex,
                onClose: ()=>setOpenIndex(null)
            }, void 0, false, {
                fileName: "[project]/app/project/page.js",
                lineNumber: 660,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/project/page.js",
        lineNumber: 642,
        columnNumber: 5
    }, this);
}
}),
];})()

//# sourceMappingURL=app_1qq4gm-o3hjdn._.js.map