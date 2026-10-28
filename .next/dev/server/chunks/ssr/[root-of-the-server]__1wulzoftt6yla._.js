module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/about/page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import React, { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { useFBO } from "@react-three/drei";
// import * as THREE from "three";
// import Navbar from "../components/Navbar";
// /* ======================================================================
//    ABOUT ME PAGE  ->  lives at /about   (file: app/about/page.js)
//    Edit everything in the DATA section below. The layout code never needs touching.
//    ====================================================================== */
// /* ============================== DATA ============================== */
// const PROFILE = {
//   name: "Aarchi Rai",
//   // your photo: put it in /public (e.g. public/about/aarchi.jpg). Until the file exists, initials show instead.
//   photo: "/about/aarchi.jpg",
//   intro:
//     "I'm a Next.js developer from Delhi NCR who loves turning ideas into fast, good-looking web apps. I enjoy building end to end, from clean interfaces to the back end behind them, and I'm always learning something new.",
// };
// // slug = icon name on simple-icons (https://simpleicons.org). If an icon doesn't load, its label still shows.
// const SKILLS = [
//   { name: "Tailwind", slug: "tailwindcss" },
//   { name: "JavaScript", slug: "javascript" },
//   { name: "TypeScript", slug: "typescript" },
//   { name: "React", slug: "react" },
//   { name: "Next.js", slug: "nextdotjs" },
//   { name: "Node.js", slug: "nodedotjs" },
//   { name: "Python", slug: "python" },
//   { name: "Git", slug: "git" },
//   { name: "HTML", slug: "html5" },
//   { name: "CSS", slug: "css3" },
//   { name: "SQL", slug: "mysql" },
//   { name: "Firebase", slug: "firebase" },
//   { name: "Linux", slug: "linux" },
//   { name: "Java", slug: "openjdk" },
//   { name: "Vercel", slug: "vercel" },
//   { name: "GitHub", slug: "github" },
// ];
// // PHOTOS: put your pictures in the /public folder (e.g. public/about/college.jpg), then list them like this:
// //   images: ["/about/college.jpg", "/about/campus.jpg"],
// // Optional: add  imageFit: "contain"  for documents/certificates (shows the whole page on white)
// //           instead of the default photo crop.
// const EDUCATION = [
//   {
//     date: "JAN 2020 - MAR 2023",
//     title: "Class 12 (CBSE)",
//     org: "VIDYA MANDIR PUBLIC SCHOOL",
//     place: "City",
//     desc: "Completed 12th grade with a focus on Science. This laid the foundation for my interest in technology and computer science.",
//     bullets: [],
//     images: ["/about/vmps.webp"],
//     tags: [],
//   },
//   {
//     date: "JUN 2023 - JUL 2026",
//     title: "Bachelor of Computer Applications (BCA)",
//     org: "MANGALMAY INSTITUTE OF MANAGEMENT & TECHNOLOGY",
//     place: "GREATER NOIDA, UTTAR PRADESH",
//     desc: "Currently pursuing BCA. Gaining expertise in programming, web development, and software applications while building strong problem-solving and analytical skills.",
//     bullets: [],
//     images: ["/about/mangalmay.webp"],
//     tags: [],
//   },
// ];
// const EXPERIENCE = [
//   {
//     date: "JUN 2025 - SEP 2025",
//     title: "Your Internship Role",
//     org: "Company Name",
//     place: "Internship",
//     desc: "Short summary of what you did during the internship and what you learned.",
//     bullets: [
//       "Built responsive web applications using React and modern JavaScript.",
//       "Worked with APIs and integrated front-end with back-end services.",
//       "Took part in code reviews and followed clean coding practices.",
//     ],
//     images: ["/about/internship.jpg"], // offer / joining letter
//     imageFit: "contain",
//     tags: ["React", "Node.js", "JavaScript", "Git"],
//   },
//   {
//     date: "2024 - PRESENT",
//     title: "Freelance Web Developer",
//     org: "Freelance",
//     place: "Remote",
//     desc: "Designed and built websites for clients, from first mockup to deployment.",
//     bullets: [
//       "Delivered responsive Next.js and Tailwind websites for small businesses.",
//       "Handled requirements, revisions and handover directly with clients.",
//     ],
//     images: [], // optional: ["/about/freelance.jpg"]
//     tags: ["Next.js", "Tailwind", "Client Work"],
//   },
// ];
// const HACKATHON = [
//   {
//     date: "2025",
//     title: "Hackathon Name",
//     org: "Organizer / College",
//     place: "",
//     desc: "What you built at the hackathon and your result (winner, finalist, participant).",
//     bullets: [],
//     images: [
//       "/about/certificate-1.jpg",
//       "/about/certificate-2.jpg",
//       "/about/certificate-3.jpg",
//     ],
//     imageFit: "contain",
//     tags: [],
//   },
// ];
// const PROJECTS = [
//   {
//     date: "2025",
//     title: "SoulTalk - Anonymous Confessions",
//     org: "Personal Project",
//     place: "",
//     desc: "An anonymous platform where users share personal thoughts and confessions in a safe, supportive space, with upvotes, downvotes, comments and shareable links.",
//     bullets: [
//       "Built with Next.js and React for fast, dynamic, server-rendered pages.",
//       "Integrated Firebase for real-time storage of posts and interactions.",
//       "Designed a content moderation system to keep confessions within community guidelines.",
//     ],
//     images: [],
//     tags: ["NextJs", "React", "Firebase", "Vercel", "CSS Modules"],
//   },
//   {
//     date: "2025",
//     title: "ResumeAI Pro",
//     org: "Personal Project",
//     place: "",
//     desc: "An AI-powered resume builder to create, edit and export professional resumes with tailored bullet points, summaries and drag-and-drop ordering.",
//     bullets: [
//       "AI-generated bullet points tailored to specific job descriptions (Google Gemini).",
//       "Real-time WYSIWYG preview with PDF, TXT and JSON export.",
//       "Drag-and-drop section ordering plus docx → html import and export.",
//     ],
//     images: [],
//     tags: ["Next.js 15", "React", "Firebase", "Gemini API", "react-pdf", "jspdf", "framer-motion"],
//   },
//   {
//     date: "2025",
//     title: "DermaSetu",
//     org: "Personal Project",
//     place: "",
//     desc: "A digital platform for early detection and remote diagnosis of skin diseases, improving healthcare access in rural and underserved communities.",
//     bullets: [
//       "Image-based analysis for early detection of skin diseases.",
//       "Secure skin-image upload for health workers and patients, with digital patient records.",
//       "Works on low-resource devices so it stays usable in rural areas.",
//     ],
//     images: [],
//     tags: ["Next.js", "Firebase", "REST API", "TensorFlow", "Python", "OpenCV"],
//   },
//   {
//     date: "2025",
//     title: "CodeWing",
//     org: "Personal Project",
//     place: "",
//     desc: "A platform that gives Apple users early access to beta apps, with a clean way for developers to submit their ideas and for users to browse them.",
//     bullets: [
//       "Leveraged Partial Prerendering and After for faster loading.",
//       "Simplified idea submission with a clean, intuitive design.",
//       "Enhanced browsing with seamless performance optimization.",
//     ],
//     images: [],
//     tags: ["NextJs", "React", "Tailwind Css", "Firebase", "markdown", "PostgreSQL", "Auth.js", "GitHub"],
//   },
// ];
// /* ============================== UI ============================== */
// // theme: amber -> coral -> red (matches the home page)
// const GRADIENT_TEXT =
//   "bg-gradient-to-r from-[#f0a53a] via-[#ea7a3c] to-[#e2503f] bg-clip-text text-transparent";
// // ---------- background: black + fine grid + blurry cursor trail (same look as the first page) ----------
// const GRID_CELL = 9; // px size of one grid square
// const GRID_FILL = 0.6; // how much of each cell is filled (0..1)
// const GRID_ALPHA = 0.05; // how visible the grid is when idle (0 = hidden, 0.1 = stronger)
// const GRID_RGB = "204,212,230"; // soft silver-white
// const FX_MAX_STAMPS = 120; // how many brush stamps are alive at once
// const FX_WARP = 0.05; // how strongly the grid bends under the trail
// const FX_GLOW = 0.1; // brightness of the soft white haze (0 = none)
// const FX_LIT = 0.4; // how much the trail lights the grid up
// const fxVertex = /* glsl */ `
// varying vec2 vUv;
// void main() {
//   vUv = uv;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// }
// `;
// const fxFragment = /* glsl */ `
// uniform sampler2D uDisplacement; // the trail
// uniform vec2 uRes;
// uniform float uWarp;
// uniform float uGlow;
// uniform float uCell;
// uniform float uDot;
// uniform float uGridBase;
// uniform float uGridLit;
// uniform vec3 uGridColor;
// varying vec2 vUv;
// float PI = 3.141592653589793238;
// void main() {
//   float g = texture2D(uDisplacement, vUv).r;
//   // bend the grid where the trail is
//   float theta = g * 2.0 * PI;
//   vec2 dir = vec2(sin(theta), cos(theta));
//   vec2 uv = vUv + dir * g * uWarp;
//   // fine grid of tiny squares: faint everywhere, lit up by the trail
//   vec2 gp = fract(uv * uRes / uCell);
//   vec2 gd = abs(gp - 0.5);
//   float sq = smoothstep(0.5 * uDot + 0.08, 0.5 * uDot - 0.08, max(gd.x, gd.y));
//   vec2 q = (vUv - vec2(0.5, 0.55)) / vec2(0.75, 0.7);
//   float ambient = 1.0 - smoothstep(0.35, 1.0, length(q));
//   float gridA = sq * (uGridBase * ambient + pow(g, 1.2) * uGridLit);
//   // soft white haze
//   float ga = pow(g, 1.4) * uGlow;
//   float a = clamp(gridA + ga, 0.0, 1.0);
//   vec3 rgb = (uGridColor * gridA + vec3(1.0) * ga) / max(a, 0.001);
//   gl_FragColor = vec4(rgb, a);
// }
// `;
// function FxScene({ mouse, onReady }) {
//   const { size } = useThree();
//   const fbo = useFBO(); // same size as the canvas
//   const brushScene = useMemo(() => new THREE.Scene(), []);
//   const uniforms = useMemo(
//     () => ({
//       uDisplacement: { value: null },
//       uRes: { value: new THREE.Vector2(1, 1) },
//       uWarp: { value: FX_WARP },
//       uGlow: { value: FX_GLOW },
//       uCell: { value: GRID_CELL },
//       uDot: { value: GRID_FILL },
//       uGridBase: { value: GRID_ALPHA },
//       uGridLit: { value: FX_LIT },
//       uGridColor: { value: new THREE.Vector3(...GRID_RGB.split(",").map((n) => Number(n) / 255)) },
//     }),
//     []
//   );
//   // very soft round brush drawn in code (this is what makes the trail blurry)
//   const brush = useMemo(() => {
//     const c = document.createElement("canvas");
//     c.width = c.height = 128;
//     const ctx = c.getContext("2d");
//     const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
//     g.addColorStop(0, "rgba(255,255,255,1)");
//     g.addColorStop(0.3, "rgba(255,255,255,0.6)");
//     g.addColorStop(0.7, "rgba(255,255,255,0.15)");
//     g.addColorStop(1, "rgba(255,255,255,0)");
//     ctx.fillStyle = g;
//     ctx.fillRect(0, 0, 128, 128);
//     return new THREE.CanvasTexture(c);
//   }, []);
//   const stamps = useMemo(() => {
//     const geo = new THREE.PlaneGeometry(60, 60);
//     return Array.from({ length: FX_MAX_STAMPS }, () => {
//       const m = new THREE.Mesh(
//         geo,
//         new THREE.MeshBasicMaterial({
//           map: brush,
//           transparent: true,
//           depthTest: false,
//           depthWrite: false,
//         })
//       );
//       m.rotation.z = Math.random() * Math.PI * 2;
//       m.visible = false;
//       brushScene.add(m);
//       return m;
//     });
//   }, [brush, brushScene]);
//   // tell the page the canvas grid is running (so the plain CSS grid can step aside)
//   useEffect(() => {
//     const id = requestAnimationFrame(() => onReady && onReady());
//     return () => cancelAnimationFrame(id);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   const st = useRef({ x: 0, y: 0, has: false, i: 0 });
//   const spawn = (x, y) => {
//     st.current.i = (st.current.i + 1) % FX_MAX_STAMPS;
//     const m = stamps[st.current.i];
//     m.position.set(x, y, 0);
//     m.visible = true;
//     m.material.opacity = 1;
//     m.scale.set(1.75, 1.75, 1);
//   };
//   // priority 1 = we render everything ourselves
//   useFrame(({ gl, scene, camera }) => {
//     const s = st.current;
//     if (mouse.current) {
//       const x = mouse.current.x - size.width / 2;
//       const y = size.height / 2 - mouse.current.y;
//       if (!s.has) {
//         s.x = x;
//         s.y = y;
//         s.has = true;
//       }
//       const dist = Math.hypot(x - s.x, y - s.y);
//       if (dist > 0.5) {
//         // fill the gap between frames so fast moves leave a continuous trail
//         const n = Math.min(10, Math.ceil(dist / 18));
//         for (let k = 1; k <= n; k++) {
//           const t = k / n;
//           spawn(s.x + (x - s.x) * t, s.y + (y - s.y) * t);
//         }
//         s.x = x;
//         s.y = y;
//       }
//     }
//     for (const m of stamps) {
//       if (!m.visible) continue;
//       m.rotation.z += 0.025;
//       m.material.opacity *= 0.95;
//       m.scale.x = 0.98 * m.scale.x + 0.155;
//       m.scale.y = 0.98 * m.scale.y + 0.155;
//       if (m.material.opacity < 0.003) m.visible = false;
//     }
//     // 1) trail -> offscreen buffer
//     gl.setRenderTarget(fbo);
//     gl.setClearColor(0x000000, 1);
//     gl.clear();
//     gl.render(brushScene, camera);
//     // 2) grid + glow -> screen (transparent canvas over the black page)
//     uniforms.uDisplacement.value = fbo.texture;
//     uniforms.uRes.value.set(size.width, size.height);
//     gl.setRenderTarget(null);
//     gl.setClearColor(0x000000, 0);
//     gl.render(scene, camera);
//   }, 1);
//   return (
//     <mesh>
//       <planeGeometry args={[size.width, size.height]} />
//       <shaderMaterial
//         vertexShader={fxVertex}
//         fragmentShader={fxFragment}
//         uniforms={uniforms}
//         transparent
//       />
//     </mesh>
//   );
// }
// // plain CSS grid: shown for reduced-motion visitors and for the split second before the canvas starts
// function StaticGrid() {
//   const pad = (GRID_CELL * (1 - GRID_FILL)) / 2;
//   const size = GRID_CELL * GRID_FILL;
//   const svg =
//     `<svg xmlns='http://www.w3.org/2000/svg' width='${GRID_CELL}' height='${GRID_CELL}'>` +
//     `<rect x='${pad}' y='${pad}' width='${size}' height='${size}' fill='rgb(${GRID_RGB})' fill-opacity='${GRID_ALPHA}'/>` +
//     `</svg>`;
//   const mask = "radial-gradient(ellipse 75% 70% at 50% 55%, #000 35%, transparent 100%)";
//   return (
//     <div
//       aria-hidden
//       className="pointer-events-none fixed inset-0 z-0"
//       style={{
//         backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
//         backgroundSize: `${GRID_CELL}px ${GRID_CELL}px`,
//         WebkitMaskImage: mask,
//         maskImage: mask,
//       }}
//     />
//   );
// }
// function GridBG() {
//   const reduce = useReducedMotion();
//   const mouse = useRef(null); // { x, y } in px (the canvas covers the whole window)
//   const [mounted, setMounted] = useState(false);
//   const [ready, setReady] = useState(false);
//   useEffect(() => {
//     setMounted(true);
//     const onMove = (e) => {
//       mouse.current = { x: e.clientX, y: e.clientY };
//     };
//     window.addEventListener("pointermove", onMove, { passive: true });
//     return () => window.removeEventListener("pointermove", onMove);
//   }, []);
//   const live = mounted && !reduce;
//   return (
//     <>
//       {!(live && ready) && <StaticGrid />}
//       {live && (
//         <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
//           <Canvas
//             orthographic
//             dpr={[1, 2]}
//             camera={{ position: [0, 0, 5], zoom: 1 }}
//             gl={{ alpha: true, antialias: false }}
//           >
//             <FxScene mouse={mouse} onReady={() => setReady(true)} />
//           </Canvas>
//         </div>
//       )}
//     </>
//   );
// }
// // ---------- round profile photo ----------
// function ProfilePhoto({ src, name }) {
//   const [failed, setFailed] = useState(false);
//   const initials = name
//     .split(" ")
//     .map((w) => w[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.92 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//       className="relative mx-auto h-56 w-56 shrink-0 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
//     >
//       {/* soft ring glow */}
//       <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#f0a53a]/30 via-[#ea7a3c]/15 to-[#e2503f]/30 blur-xl" />
//       <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15 bg-neutral-900 ring-4 ring-black">
//         {!failed ? (
//           // eslint-disable-next-line @next/next/no-img-element
//           <img
//             src={src}
//             alt={name}
//             className="h-full w-full object-cover"
//             onError={() => setFailed(true)}
//           />
//         ) : (
//           <div className={`flex h-full w-full items-center justify-center text-6xl font-bold ${GRADIENT_TEXT}`}>
//             {initials}
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// }
// // ---------- tilted skills band ----------
// function SkillsBand() {
//   const items = [...SKILLS, ...SKILLS]; // two copies -> seamless loop
//   return (
//     <div className="relative left-1/2 my-16 h-44 w-screen -translate-x-1/2 sm:h-60 md:my-24 md:h-80 lg:h-[26rem]" aria-label="Skills">
//       <div className="absolute left-[-15%] top-1/2 w-[130%] -translate-y-1/2 -rotate-[8deg] overflow-hidden bg-gradient-to-r from-[#e8912c] via-[#ea7a3c] to-[#e2503f] shadow-[0_14px_50px_rgba(234,122,60,0.35)]">
//         <motion.div
//           className="flex w-max items-center py-5"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ duration: 36, ease: "linear", repeat: Infinity }}
//         >
//           {items.map((s, i) => (
//             <div key={i} className="flex shrink-0 items-center gap-3 pr-14 sm:pr-16">
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 src={`https://cdn.simpleicons.org/${s.slug}/white`}
//                 alt=""
//                 width={30}
//                 height={30}
//                 className="h-[26px] w-[26px] sm:h-[30px] sm:w-[30px]"
//                 onError={(e) => {
//                   e.currentTarget.style.display = "none";
//                 }}
//               />
//               <span className="whitespace-nowrap text-base font-semibold text-white sm:text-lg">{s.name}</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }
// // ---------- one timeline entry ----------
// function Entry({ item, orgClass }) {
//   const imgs = item.images ?? [];
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 28 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className="relative grid gap-x-10 gap-y-4 py-9 pl-14 md:grid-cols-[minmax(0,380px)_1fr] md:pl-[68px]"
//     >
//       {/* dot on the line */}
//       <span className="absolute left-[7px] top-[38px] h-3.5 w-3.5 rounded-full bg-[#ea7a3c] shadow-[0_0_14px_rgba(234,122,60,0.7)]" />
//       <div>
//         <p className="mb-1 text-xs uppercase tracking-wide text-neutral-400">{item.date}</p>
//         <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">{item.title}</h3>
//         <p className={`mt-1 text-lg ${orgClass}`}>{item.org}</p>
//         {item.place ? <p className="text-sm text-neutral-400">{item.place}</p> : null}
//       </div>
//       <div className="min-w-0">
//         <p className="text-[15px] leading-7 text-neutral-200 sm:text-base">{item.desc}</p>
//         {item.bullets.length > 0 && (
//           <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-6 text-neutral-200">
//             {item.bullets.map((b) => (
//               <li key={b}>{b}</li>
//             ))}
//           </ul>
//         )}
//         {imgs.length > 0 && (
//           <div
//             className={`mt-5 grid gap-3 ${
//               imgs.length === 3 ? "sm:grid-cols-3" : imgs.length > 1 ? "sm:grid-cols-2" : "max-w-[430px]"
//             }`}
//           >
//             {imgs.map((src) => (
//               // eslint-disable-next-line @next/next/no-img-element
//               <img
//                 key={src}
//                 src={src}
//                 alt={item.title}
//                 loading="lazy"
//                 className={`w-full rounded-md ${
//                   item.imageFit === "contain"
//                     ? "max-h-[340px] bg-white object-contain"
//                     : "aspect-[4/3] object-cover"
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//         {item.tags.length > 0 && (
//           <div className="mt-4 flex flex-wrap gap-2">
//             {item.tags.map((t) => (
//               <span key={t} className="rounded-md bg-neutral-800 px-3 py-1.5 text-sm text-neutral-200">
//                 {t}
//               </span>
//             ))}
//           </div>
//         )}
//       </div>
//     </motion.article>
//   );
// }
// // ---------- a titled timeline block (Experience / Education / Projects) ----------
// // function TimelineSection({ title, items, orgClass }) {
// //   const ref = useRef(null);
// //   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
// //   const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
// //   return (
// //     <section ref={ref} className="relative mt-16 first:mt-0">
// //       {/* heading with the glowing node */}
// //       <div className="relative z-10 flex items-center gap-4">
// //         <span className="h-7 w-7 shrink-0 rounded-full bg-[#f0a53a] ring-4 ring-[#f0a53a]/25" />
// //         <h2 className={`text-3xl font-bold sm:text-4xl ${GRADIENT_TEXT}`}>{title}</h2>
// //       </div>
// //       {/* vertical line: dim track + gradient that fills as you scroll */}
// //       <div className="absolute bottom-0 left-[12.5px] top-10 w-[3px] rounded-full bg-white/10" />
// //       <motion.div
// //         style={{ scaleY: fill }}
// //         className="absolute bottom-0 left-[12.5px] top-10 w-[3px] origin-top rounded-full bg-gradient-to-b from-[#f0a53a] to-[#e2503f]"
// //       />
// //       <div>
// //         {items.map((item) => (
// //           <Entry key={item.title} item={item} orgClass={orgClass} />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
// function TimelineSection() {
//   const items = [...SKILLS, ...SKILLS]; // two copies -> seamless loop
//   return (
//     <div className="relative left-1/2 my-16 h-44 w-screen -translate-x-1/2 sm:h-60 md:my-24 md:h-80 lg:h-[26rem]" aria-label="Skills">
//       <div className="absolute left-[-15%] top-1/2 w-[130%] -translate-y-1/2 -rotate-[8deg] overflow-hidden bg-[#f4ece0] shadow-[0_14px_50px_rgba(240,165,58,0.25)]">
//         <motion.div
//           className="flex w-max items-center py-5"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ duration: 36, ease: "linear", repeat: Infinity }}
//         >
//           {items.map((s, i) => (
//             <div key={i} className="flex shrink-0 items-center gap-3 pr-14 sm:pr-16">
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 src={`https://cdn.simpleicons.org/${s.slug}/1a1411`}
//                 alt=""
//                 width={30}
//                 height={30}
//                 className="h-[26px] w-[26px] sm:h-[30px] sm:w-[30px]"
//                 onError={(e) => {
//                   e.currentTarget.style.display = "none";
//                 }}
//               />
//               <span className="whitespace-nowrap text-base font-semibold text-[#1a1411] sm:text-lg">{s.name}</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }
// export default function AboutPage() {
//   return (
//     <div className="relative min-h-screen overflow-x-clip bg-black text-white selection:bg-white selection:text-black">
//       <Navbar />
//       <GridBG />
//       <motion.main
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="relative z-10 mx-auto max-w-[1400px] px-6 pb-28 pt-28 lg:px-20"
//       >
//         {/* intro */}
//         {/* <Link href="/" className="mb-8 inline-block text-sm text-neutral-400 transition-colors hover:text-white">
//           ← Back to home
//         </Link> */}
//         <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
//           <div>
//             <p className="text-base text-neutral-200">About Me</p>
//             <h1 className="mt-1 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
//               Hi there! I&apos;m{" "}
//               <em className={`italic ${GRADIENT_TEXT}`}>{PROFILE.name}</em>
//             </h1>
//             <p className="mt-8 max-w-3xl text-[15px] leading-7 text-neutral-300 sm:text-base">{PROFILE.intro}</p>
//           </div>
//           {/* photo: on top on phones, on the right on larger screens */}
//           <div className="order-first md:order-last">
//             <ProfilePhoto src={PROFILE.photo} name={PROFILE.name} />
//           </div>
//         </div>
//         {/* tilted skills band */}
//         <SkillsBand />
//         {/* heading before the timeline */}
//         <div className="mb-20 text-center md:mb-28">
//           <p className="mb-2 text-sm text-neutral-300">The Experience</p>
//           <h2 className="text-4xl font-bold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
//             Making Ideas Tangible
//             <br />
//             Through <em className={`italic ${GRADIENT_TEXT}`}>Experience.</em>
//           </h2>
//         </div>
//         {/* timeline */}
//         <TimelineSection title="Education" items={EDUCATION} orgClass="text-[#f0a53a]" />
//         <TimelineSection title="Experience" items={EXPERIENCE} orgClass="text-[#f0a53a]" />
//         <TimelineSection title="Hackathon" items={HACKATHON} orgClass="text-[#f0a53a]" />
//         <TimelineSection title="Projects" items={PROJECTS} orgClass="text-[#f0a53a]" />
//       </motion.main>
//     </div>
//   );
// }
}),
"[project]/app/about/page.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/about/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1wulzoftt6yla._.js.map