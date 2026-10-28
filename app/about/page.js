"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useFBO } from "@react-three/drei";
import * as THREE from "three";
import Navbar from "../components/Navbar";

/* ======================================================================
   ABOUT ME PAGE  ->  lives at /about   (file: app/about/page.js)
   ====================================================================== */

const PROFILE = {
  name: "Aarchi Rai",
  intro:
    "I'm a Next.js developer from Delhi NCR who loves turning ideas into fast, good-looking web apps. I enjoy building end-to-end, from clean interfaces to the back end behind them, and I'm always learning something new.",
};

const SKILLS = [
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Python", slug: "python" },
  { name: "Git", slug: "git" },
  { name: "HTML", slug: "html5" },
  { name: "CSS", slug: "css3" },
  { name: "SQL", slug: "mysql" },
  { name: "Firebase", slug: "firebase" },
  { name: "Linux", slug: "linux" },
  { name: "Java", slug: "openjdk" },
  { name: "Vercel", slug: "vercel" },
  { name: "GitHub", slug: "github" },
];

const EDUCATION = [
  {
    date: "JAN 2020 - MAR 2023",
    title: "Class 12 (CBSE)",
    org: "VIDYA MANDIR PUBLIC SCHOOL",
    place: "Faridabad, Haryana",
    desc: "Completed 12th grade with a focus on Science, laying the groundwork for my passion for computer science.",
    bullets: [],
    images: ["/about/vmps.webp"],
    tags: [],
  },
  {
    date: "JUN 2023 - JUL 2026",
    title: "Bachelor of Computer Applications (BCA)",
    org: "MANGALMAY INSTITUTE OF MANAGEMENT & TECHNOLOGY",
    place: "Greater Noida, Uttar Pradesh",
    desc: "Gaining robust expertise in programming, software development, and modern web architectures.",
    bullets: [],
    images: ["/about/mangalmay.webp"],
    tags: [],
  },
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
      "Participated in code reviews and followed clean coding standards.",
    ],
    images: ["/about/internship.jpg"],
    imageFit: "contain",
    tags: ["React", "Node.js", "JavaScript", "Git"],
  },
  {
    date: "2025 - 2026",
    title: "Freelance Web Developer",
    org: "Trishul Biotech",
    place: "Remote",
    desc: "Designed and built custom websites for clients from initial mockups to live deployment.",
    bullets: [
      "Delivered responsive Next.js and Tailwind websites for small businesses.",
      "Handled requirements, revisions, and client handovers directly.",
    ],
    images: [],
    tags: ["Next.js", "Tailwind", "Client Work"],
  },
];

const HACKATHON = [
  {
    date: "24-25/02/2026",
    title: "INN-O-THON",
    org: "HARLAL INSTITUTE OF MANAGEMENT & TECHNOLOGY",
    place: "Winner",
    desc: "Built an innovative solution during the hackathon and secured 1st place.",
    bullets: [],
    images: ["/certificate/certificate4.jpeg"],
    imageFit: "contain",
    tags: [],
  },
  {
    date: "16/10/2024",
    title: "BLIND CODING",
    org: "IMS ENGINEERING COLLEGE",
    place: "2nd Place",
    desc: "Demonstrated strong logic and syntax fluency under pressure, securing 2nd place.",
    bullets: [],
    images: ["/certificate/certificate12.jpeg"],
    imageFit: "contain",
    tags: [],
  },
  {
    date: "24-25/02/2026",
    title: "CODE K BOSS",
    org: "HARLAL INSTITUTE OF MANAGEMENT & TECHNOLOGY",
    place: "Winner",
    desc: "Competed in algorithmic coding and problem-solving challenges to win the event.",
    bullets: [],
    images: ["/certificate/certificate4.jpeg"],
    imageFit: "contain",
    tags: [],
  },
];

const PROJECTS = [
  {
    date: "2026",
    title: 'Chatterbox',
    org: "Personal Project",
    place: "",
    description:
      'An interactive web app featuring random topics, interview preparation prompts, and vocabulary learning tools with custom timers and recording features.',
    bullets: [
      'Interactive topic generator with categories like Hot Takes and Interview Prep.',
      'Customizable timers ranging from 30 seconds to 5+ minutes.',
      'Designed to help users practice, record, and refine their speaking flow.',
    ],
    tags: ['React', 'Next.js', 'Vercel', 'Tailwind CSS', 'Web Audio API'],
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
      'Personal watchlist and custom movie curation.',
    ],
    images: [],
    tags: ["Next.js", "React", "Tailwind CSS", "TMDB API"],
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
      "Optimized to work efficiently on low-resource devices.",
    ],
    images: [],
    tags: ["Next.js", "Firebase", "TensorFlow", "Python", "OpenCV"],
  },
  {
    date: "2026",
    title: "Drobe",
    org: "Personal Project",
    place: "",
    description:
      'An interactive digital closet platform where users can upload and organize their clothing items, track wardrobe pieces, and leverage AI to curate and generate custom outfits.',
    bullets: [
      'Digital closet inventory to upload and track your clothing pieces.',
      'AI-powered stylist to generate custom outfit combinations.',
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "AI Stylist"],
  },
];
/* ============================== UI ============================== */

// Exact orange gradient matching your main page header
const GRADIENT_TEXT =
  "bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#dc2626] bg-clip-text text-transparent";

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
  const { size } = useThree();
  const fbo = useFBO();
  const brushScene = useMemo(() => new THREE.Scene(), []);

  const uniforms = useMemo(
    () => ({
      uDisplacement: { value: null },
      uRes: { value: new THREE.Vector2(1, 1) },
      uWarp: { value: FX_WARP },
      uGlow: { value: FX_GLOW },
      uCell: { value: GRID_CELL },
      uDot: { value: GRID_FILL },
      uGridBase: { value: GRID_ALPHA },
      uGridLit: { value: FX_LIT },
      uGridColor: { value: new THREE.Vector3(...GRID_RGB.split(",").map((n) => Number(n) / 255)) },
    }),
    []
  );

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
    return Array.from({ length: FX_MAX_STAMPS }, () => {
      const m = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({
          map: brush,
          transparent: true,
          depthTest: false,
          depthWrite: false,
        })
      );
      m.rotation.z = Math.random() * Math.PI * 2;
      m.visible = false;
      brushScene.add(m);
      return m;
    });
  }, [brush, brushScene]);

  useEffect(() => {
    const id = requestAnimationFrame(() => onReady && onReady());
    return () => cancelAnimationFrame(id);
  }, []);

  const st = useRef({ x: 0, y: 0, has: false, i: 0 });

  const spawn = (x, y) => {
    st.current.i = (st.current.i + 1) % FX_MAX_STAMPS;
    const m = stamps[st.current.i];
    m.position.set(x, y, 0);
    m.visible = true;
    m.material.opacity = 1;
    m.scale.set(1.75, 1.75, 1);
  };

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

    gl.setRenderTarget(fbo);
    gl.setClearColor(0x000000, 1);
    gl.clear();
    gl.render(brushScene, camera);

    uniforms.uDisplacement.value = fbo.texture;
    uniforms.uRes.value.set(size.width, size.height);
    gl.setRenderTarget(null);
    gl.setClearColor(0x000000, 0);
    gl.render(scene, camera);
  }, 1);

  return (
    <mesh>
      <planeGeometry args={[size.width, size.height]} />
      <shaderMaterial
        vertexShader={fxVertex}
        fragmentShader={fxFragment}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

function StaticGrid() {
  const pad = (GRID_CELL * (1 - GRID_FILL)) / 2;
  const size = GRID_CELL * GRID_FILL;
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='${GRID_CELL}' height='${GRID_CELL}'>` +
    `<rect x='${pad}' y='${pad}' width='${size}' height='${size}' fill='rgb(${GRID_RGB})' fill-opacity='${GRID_ALPHA}'/>` +
    `</svg>`;
  const mask = "radial-gradient(ellipse 75% 70% at 50% 55%, #000 35%, transparent 100%)";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
        backgroundSize: `${GRID_CELL}px ${GRID_CELL}px`,
        WebkitMaskImage: mask,
        maskImage: mask,
      }}
    />
  );
}

function GridBG() {
  const reduce = useReducedMotion();
  const mouse = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const live = mounted && !reduce;

  return (
    <>
      {!(live && ready) && <StaticGrid />}
      {live && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
          <Canvas
            orthographic
            dpr={[1, 2]}
            camera={{ position: [0, 0, 5], zoom: 1 }}
            gl={{ alpha: true, antialias: false }}
          >
            <FxScene mouse={mouse} onReady={() => setReady(true)} />
          </Canvas>
        </div>
      )}
    </>
  );
}

function SkillsBand() {
  const items = [...SKILLS, ...SKILLS];

  return (
    <div className="relative left-1/2 my-16 h-44 w-screen -translate-x-1/2 sm:h-60 md:my-24 md:h-80 lg:h-[26rem]" aria-label="Skills">
      <div className="absolute left-[-15%] top-1/2 w-[130%] -translate-y-1/2 -rotate-[8deg] overflow-hidden bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 shadow-[0_14px_50px_rgba(234,88,12,0.4)]">
        <motion.div
          className="flex w-max items-center py-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 36, ease: "linear", repeat: Infinity }}
        >
          {items.map((s, i) => (
            <div key={i} className="flex shrink-0 items-center gap-3 pr-14 sm:pr-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${s.slug}/white`}
                alt=""
                width={30}
                height={30}
                className="h-[26px] w-[26px] sm:h-[30px] sm:w-[30px]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="whitespace-nowrap text-base font-semibold text-white sm:text-lg">{s.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Entry({ item, orgClass }) {
  const imgs = item.images ?? [];
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid gap-x-10 gap-y-4 py-9 pl-14 md:grid-cols-[minmax(0,380px)_1fr] md:pl-[68px]"
    >
      <span className="absolute left-[7px] top-[38px] h-3.5 w-3.5 rounded-full bg-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.7)]" />

      <div>
        <p className="mb-1 text-xs uppercase tracking-wide text-neutral-400">{item.date}</p>
        <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">{item.title}</h3>
        <p className={`mt-1 text-lg ${orgClass}`}>{item.org}</p>
        {item.place ? <p className="text-sm text-neutral-400">{item.place}</p> : null}
      </div>

      <div className="min-w-0">
        <p className="text-[15px] leading-7 text-neutral-200 sm:text-base">{item.desc}</p>

        {item.bullets.length > 0 && (
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-6 text-neutral-200">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}

        {imgs.length > 0 && (
          <div
            className={`mt-5 grid gap-3 ${
              imgs.length === 3 ? "sm:grid-cols-3" : imgs.length > 1 ? "sm:grid-cols-2" : "max-w-[430px]"
            }`}
          >
            {imgs.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={item.title}
                loading="lazy"
                className={`w-full rounded-md ${
                  item.imageFit === "contain"
                    ? "max-h-[340px] bg-white object-contain"
                    : "aspect-[4/3] object-cover"
                }`}
              />
            ))}
          </div>
        )}

        {item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span key={t} className="rounded-md bg-neutral-800 px-3 py-1.5 text-sm text-neutral-200">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function TimelineSection({ title, items, orgClass }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  return (
    <section ref={ref} className="relative mt-16 first:mt-0">
      <div className="relative z-10 flex items-center gap-4">
        <span className="h-7 w-7 shrink-0 rounded-full bg-amber-500 ring-4 ring-amber-500/25" />
        <h2 className={`text-3xl font-bold sm:text-4xl ${GRADIENT_TEXT}`}>{title}</h2>
      </div>

      <div className="absolute bottom-0 left-[12.5px] top-10 w-[3px] rounded-full bg-white/10" />
      <motion.div
        style={{ scaleY: fill }}
        className="absolute bottom-0 left-[12.5px] top-10 w-[3px] origin-top rounded-full bg-gradient-to-b from-amber-500 via-orange-600 to-red-600"
      />

      <div>
        {items.map((item) => (
          <Entry key={item.title} item={item} orgClass={orgClass} />
        ))}
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <GridBG />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-[1400px] px-6 pb-28 pt-28 lg:px-20"
      >
        <div>
          <p className="text-base text-neutral-200">About Me</p>
          <h1 className="mt-1 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi there! I&apos;m{" "}
            <em className={`italic ${GRADIENT_TEXT}`}>{PROFILE.name}</em>
          </h1>
          <p className="mt-8 max-w-3xl text-[15px] leading-7 text-neutral-300 sm:text-base">{PROFILE.intro}</p>
        </div>

        <SkillsBand />

        <div className="mb-20 text-center md:mb-28">
          <p className="mb-2 text-sm text-neutral-300">The Experience</p>
          <h2 className="text-4xl font-bold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
            Making Ideas Tangible
            <br />
            Through <em className={`italic ${GRADIENT_TEXT}`}>Experience.</em>
          </h2>
        </div>

        <TimelineSection title="Education" items={EDUCATION} orgClass="text-amber-500" />
        <TimelineSection title="Experience" items={EXPERIENCE} orgClass="text-orange-500" />
        <TimelineSection title="Hackathon" items={HACKATHON} orgClass="text-amber-500" />
        <TimelineSection title="Projects" items={PROJECTS} orgClass="text-orange-400" />
      </motion.main>
    </div>
  );
}