'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
// import * as THREE from 'three';
import GridTrailFX from '../components/GridTrailFX';
import Navbar from "../components/Navbar";


// Add or remove projects here. The gallery adjusts automatically.
const PROJECTS = [
  {
    title: 'SoulTalk - Anonymous Confessions',
    caption: 'Share your confessions, thoughts, and experiences without fear of judgment.',
    description:
      'An anonymous platform where users share personal thoughts and confessions in a safe, supportive space, with upvotes, downvotes, comments and shareable links.',
    points: [
      'Built with Next.js and React for fast, dynamic, server-rendered pages.',
      'Integrated Firebase for real-time storage of posts and interactions.',
      'Designed a content moderation system to keep confessions within community guidelines.',
    ],
    tags: ['NextJs', 'React', 'Firebase', 'Vercel', 'CSS Modules'],
    card: 'bg-white text-black border-neutral-300',
    shot: 'bg-[radial-gradient(120%_90%_at_50%_110%,#ffffff,#e5e5e5_55%,#cfcfcf)]',
    capColor: 'text-neutral-800',
    dot: 'bg-black',
    tag: 'bg-black text-white',
    muted: 'text-neutral-600',
    image: null, // or '/projects/name.png' to show a real screenshot on the panel and card
    ink: '#111111', // text colour on the panel
    art: ['#ffffff', '#ececec', '#d4d4d4'], // panel colours (used when there is no image)
  },
  {
    title: 'ResumeAI Pro',
    caption: 'Create professional resumes with AI assistance, customizable templates, and one-click export.',
    description:
      'An AI-powered resume builder to create, edit and export professional resumes with tailored bullet points, summaries and drag-and-drop ordering.',
    points: [
      'AI-generated bullet points tailored to specific job descriptions (Google Gemini).',
      'Real-time WYSIWYG preview with PDF, TXT and JSON export.',
      'Drag-and-drop section ordering plus docx → html import and export.',
    ],
    tags: ['Next.js 15', 'React', 'Firebase', 'Gemini API', 'react-pdf', 'jspdf', 'framer-motion'],
    card: 'bg-[#f5f5f5] text-black border-neutral-300',
    shot: 'bg-gradient-to-b from-white via-neutral-100 to-neutral-300',
    capColor: 'text-neutral-800',
    dot: 'bg-black',
    tag: 'bg-neutral-900 text-white',
    muted: 'text-neutral-600',
    image: null, // or '/projects/name.png' to show a real screenshot on the panel and card
    ink: '#111111', // text colour on the panel
    art: ['#ffffff', '#e8e8e8', '#cccccc'], // panel colours (used when there is no image)
  },
  {
    title: 'DermaSetu',
    caption: 'Early detection of skin diseases for rural and underserved communities.',
    description:
      'A digital platform for early detection and remote diagnosis of skin diseases, improving healthcare access in rural and underserved communities.',
    points: [
      'Image-based analysis for early detection of skin diseases.',
      'Secure skin-image upload for health workers and patients, with digital patient records.',
      'Works on low-resource devices so it stays usable in rural areas.',
    ],
    tags: ['Next.js', 'Firebase', 'REST API', 'TensorFlow', 'Python', 'OpenCV'],
    card: 'bg-[#fafafa] text-black border-neutral-300',
    shot: 'bg-[radial-gradient(120%_90%_at_50%_110%,#fafafa,#e0e0e0_55%,#bdbdbd)]',
    capColor: 'text-neutral-800',
    dot: 'bg-black',
    tag: 'bg-black text-white',
    muted: 'text-neutral-600',
    image: null, // or '/projects/name.png' to show a real screenshot on the panel and card
    ink: '#111111', // text colour on the panel
    art: ['#fafafa', '#e0e0e0', '#bdbdbd'], // panel colours (used when there is no image)
  },
  {
    title: 'CodeWing',
    caption: 'CodeWing is a platform that gives Apple users early access to beta apps with advanced features...',
    description:
      'A platform that gives Apple users early access to beta apps, with a clean way for developers to submit their ideas and for users to browse them.',
    points: [
      'Leveraged Partial Prerendering and After for faster loading.',
      'Simplified idea submission with a clean, intuitive design.',
      'Enhanced browsing with seamless performance optimization.',
    ],
    tags: ['NextJs', 'React', 'Tailwind Css', 'Firebase', 'markdown', 'PostgreSQL', 'Auth.js', 'GitHub'],
    card: 'bg-[#ececec] text-black border-neutral-400',
    shot: 'bg-[radial-gradient(120%_90%_at_50%_110%,#f5f5f5,#d6d6d6_55%,#a8a8a8)]',
    capColor: 'text-neutral-800',
    dot: 'bg-black',
    tag: 'bg-neutral-900 text-white',
    muted: 'text-neutral-700',
    image: null, // or '/projects/name.png' to show a real screenshot on the panel and card
    ink: '#111111', // text colour on the panel
    art: ['#f5f5f5', '#d6d6d6', '#a8a8a8'], // panel colours (used when there is no image)
  },
];

// ======================= Background grid (same as the first page) =======================
const GRID_CELL = 9; // px size of one grid square
const GRID_DOT = 0.6; // how much of each cell is filled (0..1)
const GRID_BASE = 0.06; // brightness of the grid when nothing touches it (0 = hidden)
const GRID_RGB = '204,212,230'; // soft silver-white

const gridTile = (alpha) => {
  const sq = GRID_CELL * GRID_DOT;
  const off = (GRID_CELL - sq) / 2;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${GRID_CELL}' height='${GRID_CELL}'><rect x='${off}' y='${off}' width='${sq}' height='${sq}' fill='rgb(${GRID_RGB})' fill-opacity='${alpha}'/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};

function DotGrid() {
  // fades out toward the edges, like the first page
  const fade = 'radial-gradient(ellipse 75% 70% at 50% 55%, #000 35%, transparent 100%)';
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ backgroundImage: gridTile(GRID_BASE), WebkitMaskImage: fade, maskImage: fade }}
    />
  );
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
  { video: '/flowers/flower.mp4', blend: true, size: 30, x: 0, y: -20, sway: 0, delay: 0 },
  // a picture works the same way, for example:
  // { src: '/flowers/flower2.png', size: 12, x: 30, y: -15, sway: 7, delay: 0.4 },
];

function Flower({ src = FLOWER_SRC, video, blend = true, size, x, y, sway = 0, delay = 0 }) {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(src);
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = video && !videoFailed;
  const rock = sway && !reduce ? { rotate: [-sway, sway, -sway], scale: [1, 1.02, 1] } : undefined;
  const rockTransition = { duration: 6 + delay, delay, repeat: Infinity, ease: 'easeInOut' };

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2"
      style={{
        width: `${size}%`,
        marginLeft: `${x}%`, // % margins are relative to the page width, so x and y use the same scale
        marginTop: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {showVideo ? (
        <motion.video
          src={video}
          autoPlay={!reduce}
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          onError={() => setVideoFailed(true)} // if the file is missing, the picture is shown instead
          className={`block h-auto w-full select-none ${blend ? 'mix-blend-screen' : ''}`}
          animate={rock}
          transition={rockTransition}
        />
      ) : (
        <motion.img
          src={current}
          onError={() => setCurrent((c) => (c === FLOWER_SRC ? c : FLOWER_SRC))}
          alt=""
          draggable={false}
          className="block h-auto w-full select-none drop-shadow-[0_18px_28px_rgba(0,0,0,0.65)]"
          animate={rock}
          transition={rockTransition}
        />
      )}
    </div>
  );
}

// Sits over the whole page; x / y / size above are measured from the middle of this layer.
function FlowerLayer() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {FLOWERS.map((f, i) => (
        <Flower key={i} {...f} />
      ))}
    </div>
  );
}

// "Recent Work" heading text (only shown if SHOW_HEADING is true).
function Heading() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-center px-5 pt-36 text-center">
      <div className="relative z-10">
        <p className="text-[13px] text-neutral-300">Featured Projects</p>
        <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Recent{' '}
          <em className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text italic text-transparent">
            Work
          </em>
        </h2>
      </div>
    </div>
  );
}

// ======================= 3D gallery (rotating cylinder of project panels) =======================
const PANELS = 32; // how many panels wind around the cylinder (projects repeat to fill them)
const FLOW_SPEED = 0.8; // how fast the panels flow downward (bigger = faster, 0 = no flow)
const GALLERY_ZOOM = 1.5; // bigger number = bigger gallery (camera moves closer). 1 = original size

const setSRGB = (t) => {
  if ('colorSpace' in t) t.colorSpace = THREE.SRGBColorSpace;
  else t.encoding = THREE.sRGBEncoding;
};

function wrapLines(ctx, text, maxW) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
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
  const [c1, c2, c3] = project.art || ['#444', '#222', '#111'];
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
  titleLines.forEach((l, i) => ctx.fillText(l, 70, 170 + i * 82));

  ctx.globalAlpha = 0.8;
  ctx.font = `400 30px ${font}`;
  const capY = 170 + titleLines.length * 82 + 6;
  wrapLines(ctx, project.caption, W - 140)
    .slice(0, 2)
    .forEach((l, i) => ctx.fillText(l, 70, capY + i * 40));

  ctx.globalAlpha = 0.55;
  ctx.font = `600 22px ${font}`;
  ctx.fillText('CLICK TO OPEN  →', 70, H - 42);
  ctx.globalAlpha = 1;
  return c;
}

function Gallery3D({ projects, onSelect, paused, speed = 1, scale = 1 }) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const live = useRef({ speed, scale, paused, onSelect });
  live.current = { speed, scale, paused, onSelect };

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return undefined;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
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
    const makeTexture = (p, i, flip) => {
      let t;
      if (p.image) {
        t = loader.load(p.image, () => {
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
    const frontTextures = projects.map((p, i) => makeTexture(p, i, false));
    const backTextures = projects.map((p, i) => makeTexture(p, i, true));

    const frontMeshes = [];
    const materials = [];
    for (let k = 0; k < PANELS; k++) {
      const pi = k % total;
      const frontMat = new THREE.MeshBasicMaterial({
        map: frontTextures[pi],
        side: THREE.FrontSide,
        transparent: true,
        opacity: 0.97,
        toneMapped: false,
      });
      frontMat.color.setScalar(0.8);
      const backMat = new THREE.MeshBasicMaterial({
        map: backTextures[pi],
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.4,
        toneMapped: false,
        depthWrite: false,
      });
      backMat.color.setScalar(0.55);
      materials.push(frontMat, backMat);

      const front = new THREE.Mesh(geometry, frontMat);
      const back = new THREE.Mesh(geometry, backMat);
      front.userData.pi = pi;
      [front, back].forEach((m) => {
        m.position.y = (k - PANELS / 2) * 2.4;
        m.rotation.y = k * (Math.PI / 4);
        gallery.add(m);
      });
      frontMeshes.push(front);
    }

    // the downward flow loops seamlessly: after LOOP units the spiral looks exactly as it did at the start
    const gcd = (a, b) => (b ? gcd(b, a % b) : a);
    const panelsPerLoop = (8 * total) / gcd(8, total); // whole turns (8 panels) and whole project cycles
    const LOOP = panelsPerLoop * 2.4;

    const raycaster = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    const pick = (clientX, clientY) => {
      const r = host.getBoundingClientRect();
      ndc.x = ((clientX - r.left) / r.width) * 2 - 1;
      ndc.y = -((clientY - r.top) / r.height) * 2 + 1;
      raycaster.setFromCamera(ndc, camera);
      const hit = raycaster.intersectObjects(frontMeshes, false)[0];
      return hit ? hit.object.userData.pi : -1;
    };

    const render = (time = performance.now()) => {
      const s = live.current;
      const safeSpeed = Math.min(3, Math.max(0, s.speed));
      const safeScale = Math.min(1.5, Math.max(0.6, s.scale));
      const target = hovered >= 0 || s.paused ? 0 : 1; // slow to a stop on hover / when a card is open
      speedFactor += (target - speedFactor) * 0.08;
      if (previousTime && !reducedMotion) elapsed += Math.min((time - previousTime) / 1000, 0.05) * safeSpeed * speedFactor;
      previousTime = time;
      gallery.rotation.y = elapsed * 0.18;
      gallery.position.y = -((elapsed * FLOW_SPEED) % LOOP) * safeScale; // flows downward, then loops invisibly
      gallery.scale.setScalar(safeScale);
      // brighten every panel of the hovered project
      frontMeshes.forEach((m) => {
        const to = m.userData.pi === hovered ? 1 : 0.8;
        m.material.color.setScalar(m.material.color.r + (to - m.material.color.r) * 0.15);
      });
      renderer.render(scene, camera);
    };

    const tick = (time) => {
      if (disposed || !hostVisible || !documentVisible) {
        frame = 0;
        previousTime = 0;
        return;
      }
      render(time);
      frame = window.requestAnimationFrame(tick);
    };
    const start = () => {
      if (reducedMotion) {
        render(0);
        return;
      }
      if (!frame && hostVisible && documentVisible) frame = window.requestAnimationFrame(tick);
    };
    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
    };

    const resize = () => {
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

    const onMove = (e) => {
      hovered = pick(e.clientX, e.clientY);
      host.style.cursor = hovered >= 0 ? 'pointer' : 'default';
      if (reducedMotion) render();
    };
    const onLeave = () => {
      hovered = -1;
      host.style.cursor = 'default';
    };
    const onClick = (e) => {
      const pi = pick(e.clientX, e.clientY);
      if (pi >= 0) live.current.onSelect(pi);
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      hostVisible = entry ? entry.isIntersecting : true;
      if (hostVisible) start();
      else stop();
    });
    const onVisibility = () => {
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

    return () => {
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
      materials.forEach((m) => m.dispose());
      frontTextures.forEach((t) => t.dispose());
      backTextures.forEach((t) => t.dispose());
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={hostRef} className="absolute inset-0" role="img" aria-label="Rotating gallery of recent projects. Click a panel to open it.">
      <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />
    </div>
  );
}

// ======================= Card that opens when you click a panel =======================
function ProjectModal({ index, onClose }) {
  const [mounted, setMounted] = useState(false);
  const project = index === null ? null : PROJECTS[index];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!mounted) return null;

  // rendered in <body> so it always sits above the navbar and everything else
  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, scale: 0.92, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={`relative max-h-[90vh] w-[min(980px,94vw)] overflow-y-auto rounded-[28px] border p-5 shadow-[0_30px_100px_rgba(0,0,0,0.7)] sm:p-7 ${project.card}`}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-current text-lg leading-none opacity-60 transition-opacity hover:opacity-100"
            >
              ×
            </button>

            <div className="grid items-center gap-7 md:grid-cols-[4.5fr_7fr]">
              <div
                className={`relative hidden aspect-[1/0.85] w-full overflow-hidden rounded-2xl border border-white/10 p-[7%] md:block ${project.shot}`}
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <>
                    <p className={`relative z-10 max-w-[92%] text-[13px] font-semibold leading-snug lg:text-sm ${project.capColor}`}>
                      {project.caption}
                    </p>
                    <div className="absolute inset-x-[14%] bottom-0 grid h-[52%] content-start gap-1.5 rounded-t-xl border border-b-0 border-neutral-300 bg-white p-3 shadow-md">
                      <div className="h-1.5 w-2/5 rounded bg-black" />
                      <div className="h-6 rounded-md border border-neutral-200 bg-neutral-100" />
                      <div className="h-4 w-3/4 rounded-md border border-neutral-200 bg-neutral-100" />
                      <div className="h-6 rounded-md border border-neutral-200 bg-neutral-100" />
                    </div>
                  </>
                )}
              </div>

              <div className="min-w-0">
                <span className="mb-2 block text-[11px] font-semibold tracking-[0.3em] opacity-60">
                  {String(index + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
                </span>
                <h3 className="mb-2 pr-10 text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
                <p className={`mb-3 text-[13px] leading-6 sm:text-sm ${project.muted}`}>{project.description}</p>
                <ul className="mb-4 grid gap-2">
                  {project.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[13px] leading-5 sm:text-sm">
                      <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 ${project.dot}`} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className={`rounded-full px-3 py-1 text-[11px] font-semibold ${project.tag}`}>
                      {t}
                    </span>
                  ))}
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-current px-4 py-1.5 text-xs font-semibold opacity-80 transition-opacity hover:opacity-100"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

// ======================= Section =======================
const SHOW_HEADING = false; // true = show the "Recent Work" heading text

export default function RecentWork() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="work" className="ml-[calc(50%-50vw)] w-screen bg-black text-white">
      <div className="relative h-screen min-h-[720px] w-full overflow-hidden bg-black">
        <GridTrailFX fallback={<DotGrid />} />
         <Navbar />

        {/* the gallery fills the whole section */}
        <div className="absolute inset-0">
          <Gallery3D projects={PROJECTS} onSelect={setOpenIndex} paused={openIndex !== null} />
        </div>

        {/* <FlowerLayer /> */}
        {SHOW_HEADING && <Heading />}

        <p className="pointer-events-none absolute inset-x-0 bottom-6 z-10 text-center text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          Hover to pause · Click a panel to open
        </p>
      </div>

      <ProjectModal index={openIndex} onClose={() => setOpenIndex(null)} />
    </section>
  );
}