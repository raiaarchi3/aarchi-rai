(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/about/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-9ce18a08.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-9ce18a08.esm.js [app-client] (ecmascript) <export D as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Fbo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Navbar.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* ======================================================================
   ABOUT ME PAGE  ->  lives at /about   (file: app/about/page.js)
   ====================================================================== */ const PROFILE = {
    name: "Aarchi Rai",
    intro: "I'm a Next.js developer from Delhi NCR who loves turning ideas into fast, good-looking web apps. I enjoy building end-to-end, from clean interfaces to the back end behind them, and I'm always learning something new."
};
const SKILLS = [
    {
        name: "Tailwind",
        slug: "tailwindcss"
    },
    {
        name: "JavaScript",
        slug: "javascript"
    },
    {
        name: "TypeScript",
        slug: "typescript"
    },
    {
        name: "React",
        slug: "react"
    },
    {
        name: "Next.js",
        slug: "nextdotjs"
    },
    {
        name: "Node.js",
        slug: "nodedotjs"
    },
    {
        name: "Python",
        slug: "python"
    },
    {
        name: "Git",
        slug: "git"
    },
    {
        name: "HTML",
        slug: "html5"
    },
    {
        name: "CSS",
        slug: "css3"
    },
    {
        name: "SQL",
        slug: "mysql"
    },
    {
        name: "Firebase",
        slug: "firebase"
    },
    {
        name: "Linux",
        slug: "linux"
    },
    {
        name: "Java",
        slug: "openjdk"
    },
    {
        name: "Vercel",
        slug: "vercel"
    },
    {
        name: "GitHub",
        slug: "github"
    }
];
const EDUCATION = [
    {
        date: "JAN 2020 - MAR 2023",
        title: "Class 12 (CBSE)",
        org: "VIDYA MANDIR PUBLIC SCHOOL",
        place: "Faridabad, Haryana",
        desc: "Completed 12th grade with a focus on Science, laying the groundwork for my passion for computer science.",
        bullets: [],
        images: [
            "/about/vmps.webp"
        ],
        tags: []
    },
    {
        date: "JUN 2023 - JUL 2026",
        title: "Bachelor of Computer Applications (BCA)",
        org: "MANGALMAY INSTITUTE OF MANAGEMENT & TECHNOLOGY",
        place: "Greater Noida, Uttar Pradesh",
        desc: "Gaining robust expertise in programming, software development, and modern web architectures.",
        bullets: [],
        images: [
            "/about/mangalmay.webp"
        ],
        tags: []
    }
];
const EXPERIENCE = [
    {
        date: "JUN 2025 - SEP 2025",
        title: "Web Developer and IT Support Specialist (Internship)",
        org: "SABsoftzone Pvt. Ltd.",
        place: "Noida, Uttar Pradesh",
        desc: "Contributed to full-stack web application development and provided technical IT support to ensure smooth system operations and API integrations.",
        bullets: [
            "Developed responsive web applications using React and modern JavaScript.",
            "Integrated APIs and provided technical IT support to ensure smooth system operations.",
            "Participated in code reviews and followed clean coding standards."
        ],
        images: [
            "/about/internship.jpg"
        ],
        imageFit: "contain",
        tags: [
            "React",
            "Node.js",
            "JavaScript",
            "Git"
        ]
    },
    {
        date: "2025 - 2026",
        title: "Freelance Web Developer",
        org: "Trishul Biotech",
        place: "Remote",
        desc: "Designed and built custom websites for clients from initial mockups to live deployment.",
        bullets: [
            "Delivered responsive Next.js and Tailwind websites for small businesses.",
            "Handled requirements, revisions, and client handovers directly."
        ],
        images: [],
        tags: [
            "Next.js",
            "Tailwind",
            "Client Work"
        ]
    }
];
const HACKATHON = [
    {
        date: "24-25/02/2026",
        title: "INN-O-THON",
        org: "HARLAL INSTITUTE OF MANAGEMENT & TECHNOLOGY",
        place: "Winner",
        desc: "Built an innovative solution during the hackathon and secured 1st place.",
        bullets: [],
        images: [
            "/certificate/certificate4.jpeg"
        ],
        imageFit: "contain",
        tags: []
    },
    {
        date: "16/10/2024",
        title: "BLIND CODING",
        org: "IMS ENGINEERING COLLEGE",
        place: "2nd Place",
        desc: "Demonstrated strong logic and syntax fluency under pressure, securing 2nd place.",
        bullets: [],
        images: [
            "/certificate/certificate12.jpeg"
        ],
        imageFit: "contain",
        tags: []
    },
    {
        date: "24-25/02/2026",
        title: "CODE K BOSS",
        org: "HARLAL INSTITUTE OF MANAGEMENT & TECHNOLOGY",
        place: "Winner",
        desc: "Competed in algorithmic coding and problem-solving challenges to win the event.",
        bullets: [],
        images: [
            "/certificate/certificate4.jpeg"
        ],
        imageFit: "contain",
        tags: []
    }
];
const PROJECTS = [
    {
        date: "2026",
        title: 'Chatterbox',
        org: "Personal Project",
        place: "",
        description: 'An interactive web app featuring random topics, interview preparation prompts, and vocabulary learning tools with custom timers and recording features.',
        bullets: [
            'Interactive topic generator with categories like Hot Takes and Interview Prep.',
            'Customizable timers ranging from 30 seconds to 5+ minutes.',
            'Designed to help users practice, record, and refine their speaking flow.'
        ],
        tags: [
            'React',
            'Next.js',
            'Vercel',
            'Tailwind CSS',
            'Web Audio API'
        ]
    },
    {
        date: "2026",
        title: "Mood Reel",
        org: "Personal Project",
        place: "",
        desc: "An interactive movie discovery platform where users can explore films filtered by genre (Action, Comedy, Drama, etc.) and region (Hollywood, Bollywood, Tollywood, World), watch trailers, and view detailed movie insights powered by the TMDB API.",
        bullets: [
            'Genre and regional filtering (Hollywood, Bollywood, Tollywood, etc.).',
            'Integrated trailers and detailed film overviews.',
            'Personal watchlist and custom movie curation.'
        ],
        images: [],
        tags: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "TMDB API"
        ]
    },
    {
        date: "2025",
        title: "DermaSetu",
        org: "Personal Project",
        place: "",
        desc: "A digital platform for early detection and remote diagnosis of skin diseases for underserved communities.",
        bullets: [
            "Image-based analysis for early detection of skin conditions.",
            "Secure skin-image upload for health workers with digital patient records.",
            "Optimized to work efficiently on low-resource devices."
        ],
        images: [],
        tags: [
            "Next.js",
            "Firebase",
            "TensorFlow",
            "Python",
            "OpenCV"
        ]
    },
    {
        date: "2026",
        title: "Drobe",
        org: "Personal Project",
        place: "",
        description: 'An interactive digital closet platform where users can upload and organize their clothing items, track wardrobe pieces, and leverage AI to curate and generate custom outfits.',
        bullets: [
            'Digital closet inventory to upload and track your clothing pieces.',
            'AI-powered stylist to generate custom outfit combinations.'
        ],
        tags: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "AI Stylist"
        ]
    }
];
/* ============================== UI ============================== */ // Exact orange gradient matching your main page header
const GRADIENT_TEXT = "bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#dc2626] bg-clip-text text-transparent";
const GRID_CELL = 9;
const GRID_FILL = 0.6;
const GRID_ALPHA = 0.05;
const GRID_RGB = "204,212,230";
const FX_MAX_STAMPS = 120;
const FX_WARP = 0.05;
const FX_GLOW = 0.1;
const FX_LIT = 0.4;
const fxVertex = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const fxFragment = /* glsl */ `
uniform sampler2D uDisplacement;
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
  float theta = g * 2.0 * PI;
  vec2 dir = vec2(sin(theta), cos(theta));
  vec2 uv = vUv + dir * g * uWarp;

  vec2 gp = fract(uv * uRes / uCell);
  vec2 gd = abs(gp - 0.5);
  float sq = smoothstep(0.5 * uDot + 0.08, 0.5 * uDot - 0.08, max(gd.x, gd.y));
  vec2 q = (vUv - vec2(0.5, 0.55)) / vec2(0.75, 0.7);
  float ambient = 1.0 - smoothstep(0.35, 1.0, length(q));
  float gridA = sq * (uGridBase * ambient + pow(g, 1.2) * uGridLit);

  float ga = pow(g, 1.4) * uGlow;
  float a = clamp(gridA + ga, 0.0, 1.0);
  vec3 rgb = (uGridColor * gridA + vec3(1.0) * ga) / max(a, 0.001);
  gl_FragColor = vec4(rgb, a);
}
`;
function FxScene({ mouse, onReady }) {
    _s();
    const { size } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"])();
    const fbo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFBO"])();
    const brushScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FxScene.useMemo[brushScene]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]()
    }["FxScene.useMemo[brushScene]"], []);
    const uniforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FxScene.useMemo[uniforms]": ()=>({
                uDisplacement: {
                    value: null
                },
                uRes: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 1)
                },
                uWarp: {
                    value: FX_WARP
                },
                uGlow: {
                    value: FX_GLOW
                },
                uCell: {
                    value: GRID_CELL
                },
                uDot: {
                    value: GRID_FILL
                },
                uGridBase: {
                    value: GRID_ALPHA
                },
                uGridLit: {
                    value: FX_LIT
                },
                uGridColor: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...GRID_RGB.split(",").map({
                        "FxScene.useMemo[uniforms]": (n)=>Number(n) / 255
                    }["FxScene.useMemo[uniforms]"]))
                }
            })
    }["FxScene.useMemo[uniforms]"], []);
    const brush = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FxScene.useMemo[brush]": ()=>{
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
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](c);
        }
    }["FxScene.useMemo[brush]"], []);
    const stamps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FxScene.useMemo[stamps]": ()=>{
            const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](60, 60);
            return Array.from({
                length: FX_MAX_STAMPS
            }, {
                "FxScene.useMemo[stamps]": ()=>{
                    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        map: brush,
                        transparent: true,
                        depthTest: false,
                        depthWrite: false
                    }));
                    m.rotation.z = Math.random() * Math.PI * 2;
                    m.visible = false;
                    brushScene.add(m);
                    return m;
                }
            }["FxScene.useMemo[stamps]"]);
        }
    }["FxScene.useMemo[stamps]"], [
        brush,
        brushScene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FxScene.useEffect": ()=>{
            const id = requestAnimationFrame({
                "FxScene.useEffect.id": ()=>onReady && onReady()
            }["FxScene.useEffect.id"]);
            return ({
                "FxScene.useEffect": ()=>cancelAnimationFrame(id)
            })["FxScene.useEffect"];
        }
    }["FxScene.useEffect"], []);
    const st = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        has: false,
        i: 0
    });
    const spawn = (x, y)=>{
        st.current.i = (st.current.i + 1) % FX_MAX_STAMPS;
        const m = stamps[st.current.i];
        m.position.set(x, y, 0);
        m.visible = true;
        m.material.opacity = 1;
        m.scale.set(1.75, 1.75, 1);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "FxScene.useFrame": ({ gl, scene, camera })=>{
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
            gl.setRenderTarget(fbo);
            gl.setClearColor(0x000000, 1);
            gl.clear();
            gl.render(brushScene, camera);
            uniforms.uDisplacement.value = fbo.texture;
            uniforms.uRes.value.set(size.width, size.height);
            gl.setRenderTarget(null);
            gl.setClearColor(0x000000, 0);
            gl.render(scene, camera);
        }
    }["FxScene.useFrame"], 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                args: [
                    size.width,
                    size.height
                ]
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                vertexShader: fxVertex,
                fragmentShader: fxFragment,
                uniforms: uniforms,
                transparent: true
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 360,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 358,
        columnNumber: 5
    }, this);
}
_s(FxScene, "i5VCpT3pA8PCzkDU6AonlRHtVGM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFBO"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$9ce18a08$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = FxScene;
function StaticGrid() {
    const pad = GRID_CELL * (1 - GRID_FILL) / 2;
    const size = GRID_CELL * GRID_FILL;
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${GRID_CELL}' height='${GRID_CELL}'>` + `<rect x='${pad}' y='${pad}' width='${size}' height='${size}' fill='rgb(${GRID_RGB})' fill-opacity='${GRID_ALPHA}'/>` + `</svg>`;
    const mask = "radial-gradient(ellipse 75% 70% at 50% 55%, #000 35%, transparent 100%)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: "pointer-events-none fixed inset-0 z-0",
        style: {
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
            backgroundSize: `${GRID_CELL}px ${GRID_CELL}px`,
            WebkitMaskImage: mask,
            maskImage: mask
        }
    }, void 0, false, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 380,
        columnNumber: 5
    }, this);
}
_c1 = StaticGrid;
function GridBG() {
    _s1();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GridBG.useEffect": ()=>{
            setMounted(true);
            const onMove = {
                "GridBG.useEffect.onMove": (e)=>{
                    mouse.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["GridBG.useEffect.onMove"];
            window.addEventListener("pointermove", onMove, {
                passive: true
            });
            return ({
                "GridBG.useEffect": ()=>window.removeEventListener("pointermove", onMove)
            })["GridBG.useEffect"];
        }
    }["GridBG.useEffect"], []);
    const live = mounted && !reduce;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !(live && ready) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StaticGrid, {}, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 412,
                columnNumber: 28
            }, this),
            live && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none fixed inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                    orthographic: true,
                    dpr: [
                        1,
                        2
                    ],
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FxScene, {
                        mouse: mouse,
                        onReady: ()=>setReady(true)
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 421,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/about/page.js",
                    lineNumber: 415,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 414,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 411,
        columnNumber: 5
    }, this);
}
_s1(GridBG, "KrRU7HJ/k2xG7SrjDcix5qqV40Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c2 = GridBG;
function SkillsBand() {
    const items = [
        ...SKILLS,
        ...SKILLS
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative left-1/2 my-16 h-44 w-screen -translate-x-1/2 sm:h-60 md:my-24 md:h-80 lg:h-[26rem]",
        "aria-label": "Skills",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-[-15%] top-1/2 w-[130%] -translate-y-1/2 -rotate-[8deg] overflow-hidden bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 shadow-[0_14px_50px_rgba(234,88,12,0.4)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex w-max items-center py-5",
                animate: {
                    x: [
                        "0%",
                        "-50%"
                    ]
                },
                transition: {
                    duration: 36,
                    ease: "linear",
                    repeat: Infinity
                },
                children: items.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-3 pr-14 sm:pr-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `https://cdn.simpleicons.org/${s.slug}/white`,
                                alt: "",
                                width: 30,
                                height: 30,
                                className: "h-[26px] w-[26px] sm:h-[30px] sm:w-[30px]",
                                onError: (e)=>{
                                    e.currentTarget.style.display = "none";
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 443,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "whitespace-nowrap text-base font-semibold text-white sm:text-lg",
                                children: s.name
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 453,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 441,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 435,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 434,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 433,
        columnNumber: 5
    }, this);
}
_c3 = SkillsBand;
function Entry({ item, orgClass }) {
    const imgs = item.images ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        initial: {
            opacity: 0,
            y: 28
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-80px"
        },
        transition: {
            duration: 0.6,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: "relative grid gap-x-10 gap-y-4 py-9 pl-14 md:grid-cols-[minmax(0,380px)_1fr] md:pl-[68px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-[7px] top-[38px] h-3.5 w-3.5 rounded-full bg-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.7)]"
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 472,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-1 text-xs uppercase tracking-wide text-neutral-400",
                        children: item.date
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold leading-snug text-white sm:text-2xl",
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-1 text-lg ${orgClass}`,
                        children: item.org
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 477,
                        columnNumber: 9
                    }, this),
                    item.place ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-neutral-400",
                        children: item.place
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 478,
                        columnNumber: 23
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 474,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[15px] leading-7 text-neutral-200 sm:text-base",
                        children: item.desc
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this),
                    item.bullets.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-6 text-neutral-200",
                        children: item.bullets.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: b
                            }, b, false, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 487,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this),
                    imgs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-5 grid gap-3 ${imgs.length === 3 ? "sm:grid-cols-3" : imgs.length > 1 ? "sm:grid-cols-2" : "max-w-[430px]"}`,
                        children: imgs.map((src)=>// eslint-disable-next-line @next/next/no-img-element
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: src,
                                alt: item.title,
                                loading: "lazy",
                                className: `w-full rounded-md ${item.imageFit === "contain" ? "max-h-[340px] bg-white object-contain" : "aspect-[4/3] object-cover"}`
                            }, src, false, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 500,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 493,
                        columnNumber: 11
                    }, this),
                    item.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap gap-2",
                        children: item.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-md bg-neutral-800 px-3 py-1.5 text-sm text-neutral-200",
                                children: t
                            }, t, false, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 518,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 516,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 481,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 465,
        columnNumber: 5
    }, this);
}
_c4 = Entry;
function TimelineSection({ title, items, orgClass }) {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start 75%",
            "end 60%"
        ]
    });
    const fill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 120,
        damping: 28,
        mass: 0.3
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative mt-16 first:mt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-7 w-7 shrink-0 rounded-full bg-amber-500 ring-4 ring-amber-500/25"
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 537,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `text-3xl font-bold sm:text-4xl ${GRADIENT_TEXT}`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 538,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 536,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-[12.5px] top-10 w-[3px] rounded-full bg-white/10"
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 541,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    scaleY: fill
                },
                className: "absolute bottom-0 left-[12.5px] top-10 w-[3px] origin-top rounded-full bg-gradient-to-b from-amber-500 via-orange-600 to-red-600"
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 542,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Entry, {
                        item: item,
                        orgClass: orgClass
                    }, item.title, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 549,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 547,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 535,
        columnNumber: 5
    }, this);
}
_s2(TimelineSection, "RiV4oGu/Vu5ZMhBsFXfoqoXPqh4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c5 = TimelineSection;
function AboutPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-x-clip bg-black text-white selection:bg-white selection:text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 559,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GridBG, {}, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 560,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].main, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.7,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                className: "relative z-10 mx-auto max-w-[1400px] px-6 pb-28 pt-28 lg:px-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-neutral-200",
                                children: "About Me"
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 569,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-1 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl",
                                children: [
                                    "Hi there! I'm",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: `italic ${GRADIENT_TEXT}`,
                                        children: PROFILE.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/about/page.js",
                                        lineNumber: 572,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 570,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-8 max-w-3xl text-[15px] leading-7 text-neutral-300 sm:text-base",
                                children: PROFILE.intro
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 574,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 568,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillsBand, {}, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 577,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-20 text-center md:mb-28",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-sm text-neutral-300",
                                children: "The Experience"
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 580,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl",
                                children: [
                                    "Making Ideas Tangible",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/about/page.js",
                                        lineNumber: 583,
                                        columnNumber: 13
                                    }, this),
                                    "Through ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: `italic ${GRADIENT_TEXT}`,
                                        children: "Experience."
                                    }, void 0, false, {
                                        fileName: "[project]/app/about/page.js",
                                        lineNumber: 584,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 581,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 579,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineSection, {
                        title: "Education",
                        items: EDUCATION,
                        orgClass: "text-amber-500"
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 588,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineSection, {
                        title: "Experience",
                        items: EXPERIENCE,
                        orgClass: "text-orange-500"
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 589,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineSection, {
                        title: "Hackathon",
                        items: HACKATHON,
                        orgClass: "text-amber-500"
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 590,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineSection, {
                        title: "Projects",
                        items: PROJECTS,
                        orgClass: "text-orange-400"
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 591,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 562,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 558,
        columnNumber: 5
    }, this);
}
_c6 = AboutPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "FxScene");
__turbopack_context__.k.register(_c1, "StaticGrid");
__turbopack_context__.k.register(_c2, "GridBG");
__turbopack_context__.k.register(_c3, "SkillsBand");
__turbopack_context__.k.register(_c4, "Entry");
__turbopack_context__.k.register(_c5, "TimelineSection");
__turbopack_context__.k.register(_c6, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const refs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [near, setNear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>setMounted(true)
    }["Navbar.useEffect"], []);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (pathname !== '/') return;
            const hash = window.location.hash;
            if (!hash) return;
            const t = setTimeout({
                "Navbar.useEffect.t": ()=>scrollToHash(hash, 1.2)
            }["Navbar.useEffect.t"], HOME_INTRO_MS);
            return ({
                "Navbar.useEffect": ()=>clearTimeout(t)
            })["Navbar.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Navbar.useEffect"], [
        pathname,
        lenis
    ]);
    // proximity detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            let frame = 0;
            const onMove = {
                "Navbar.useEffect.onMove": (e)=>{
                    cancelAnimationFrame(frame);
                    frame = requestAnimationFrame({
                        "Navbar.useEffect.onMove": ()=>{
                            let best = null;
                            let bestDist = NEAR;
                            refs.current.forEach({
                                "Navbar.useEffect.onMove": (el, i)=>{
                                    if (!el) return;
                                    const d = distanceToRect(e.clientX, e.clientY, el.getBoundingClientRect());
                                    if (d < bestDist) {
                                        bestDist = d;
                                        best = i;
                                    }
                                }
                            }["Navbar.useEffect.onMove"]);
                            setNear({
                                "Navbar.useEffect.onMove": (prev)=>prev === best ? prev : best
                            }["Navbar.useEffect.onMove"]);
                        }
                    }["Navbar.useEffect.onMove"]);
                }
            }["Navbar.useEffect.onMove"];
            const onLeave = {
                "Navbar.useEffect.onLeave": ()=>setNear(null)
            }["Navbar.useEffect.onLeave"];
            window.addEventListener('mousemove', onMove, {
                passive: true
            });
            document.documentElement.addEventListener('mouseleave', onLeave);
            return ({
                "Navbar.useEffect": ()=>{
                    cancelAnimationFrame(frame);
                    window.removeEventListener('mousemove', onMove);
                    document.documentElement.removeEventListener('mouseleave', onLeave);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 20)
            }["Navbar.useEffect.onScroll"];
            onScroll();
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999
        },
        className: `backdrop-blur-md transition-colors duration-300 ${scrolled ? 'border-b border-white/10 bg-black/60' : 'border-b border-transparent bg-black/35'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 text-white lg:px-[4vw]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden items-center gap-10 md:flex",
                        children: LINKS.map((link, i)=>{
                            const active = near === i || pathname === link.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    onClick: (e)=>handleClick(e, link.href),
                                    ref: (el)=>refs.current[i] = el,
                                    className: `relative inline-block py-1 text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${active ? 'text-white' : 'text-neutral-400'}`,
                                    children: [
                                        link.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setOpen((o)=>!o),
                        "aria-label": "Toggle menu",
                        className: "flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-0.5 w-6 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.js",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.js",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].ul, {
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
                    children: LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Navbar, "ZdwaqVkoof3WxRUCMYLJX/vjfaw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=app_0b3r4b3bcvp29._.js.map