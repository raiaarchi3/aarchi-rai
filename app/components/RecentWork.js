// // 'use client';

// // import { useId, useMemo, useRef, useState } from 'react';
// // import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// // import GridTrailFX from './GridTrailFX';

// // /* ======================================================================
// //    RECENT WORK  (components/RecentWork.jsx)
// //    Theme: pure black, with small warm accents (cream heading, orange details).
// //    - Card 1 is already in place under the heading (no empty stage).
// //    - Scroll: the stage pins and cards 2, 3, 4 slide up and stack over it.
// //    - Every project uses the same site theme (THEME). To give one project its
// //      own colour, add a `card:` line AFTER `...THEME` (or spread `...GREEN`).
// //    - Each project can have a `link` that shows a "Visit site" button.
// //    - Needs NO overflow-hidden/auto ancestor (overflow-x-clip is fine).
// //    - The grid + cursor trail lives INSIDE the sticky stage, so its canvas is
// //      exactly one screen tall and the mouse position lines up with it.
// //    ====================================================================== */

// // // ---- THEME COLORS (edit here) ----
// // const CREAM = '#ffe6cc';
// // const ORANGE = '#ff8a3d';

// // const GRID_DARK =
// //   'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[36px_36px]';
// // const GRID_LIGHT =
// //   'bg-[linear-gradient(rgba(20,80,40,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(20,80,40,0.07)_1px,transparent_1px)] bg-size-[36px_36px]';

// // // default card look = same as the website (black + cream + orange).
// // // Every project spreads this unless it has its own colours.
// // const THEME = {
// //   card: 'bg-gradient-to-br from-[#140a05] to-[#050302] border-[#ff8a3d]/25 shadow-lg shadow-[#ff8a3d]/10',
// //   shot: 'from-[#ff8a3d]/10 to-white/[0.02]',
// //   capColor: 'text-[#ffe6cc]',
// //   dot: 'bg-[#ff8a3d]',
// //   tag: 'bg-[#ff8a3d]/10 text-[#ffe6cc] border-[#ff8a3d]/30',
// //   muted: 'text-[#ffe6cc]/60',
// //   grid: GRID_DARK,
// //   panel: 'border-[#ff8a3d]/15 bg-black/30',
// //   shotBorder: 'border-[#ff8a3d]/15',
// //   ph1: 'bg-[#ff8a3d]/30',
// //   ph2: 'bg-white/10',
// //   ph3: 'bg-black/30',
// //   titleColor: CREAM,
// //   titleGlow: '0 0 30px rgba(255,140,60,0.35)',
// //   body: 'text-[#ffe6cc]/90',
// //   btn: 'bg-[#ffe6cc] text-[#1a0a04] hover:bg-white',
// // };

// // // light green card (optional). Spread `...GREEN` after `...THEME` in a project to use it.
// // const GREEN = {
// //   card: 'bg-gradient-to-br from-[#eaf9e2] to-[#b8e6ae] border-[#7cc274]/60',
// //   shot: 'from-[#6fbf6a]/30 to-white/50',
// //   capColor: 'text-[#1d4a2a]',
// //   dot: 'bg-[#2f8f46]',
// //   tag: 'bg-[#2f8f46]/10 text-[#1d4a2a] border-[#2f8f46]/35',
// //   muted: 'text-[#3d6a48]',
// //   grid: GRID_LIGHT,
// //   panel: 'border-[#2f8f46]/25 bg-white/45',
// //   shotBorder: 'border-[#2f8f46]/25',
// //   ph1: 'bg-[#2f8f46]/35',
// //   ph2: 'bg-[#2f8f46]/20',
// //   ph3: 'bg-white/50',
// //   titleColor: '#12391f',
// //   titleGlow: 'none',
// //   body: 'text-[#1b3a26]',
// //   btn: 'bg-[#12391f] text-[#eaf9e2] hover:bg-[#0b2714]',
// // };
// // const LIGHT_GREEN = {
// //   card: 'bg-gradient-to-br from-[#122417] to-[#08120b] border-[#52b788]/40 shadow-lg shadow-[#52b788]/10',
// //   shot: 'from-[#52b788]/15 to-white/[0.02]',
// //   capColor: 'text-[#d8f3dc]',
// //   dot: 'bg-[#52b788]',
// //   tag: 'bg-[#52b788]/15 text-[#d8f3dc] border-[#52b788]/35',
// //   muted: 'text-[#d8f3dc]/70',
// //   grid: GRID_DARK,
// //   panel: 'border-[#52b788]/20 bg-black/40',
// //   shotBorder: 'border-[#52b788]/20',
// //   ph1: 'bg-[#52b788]/30',
// //   ph2: 'bg-white/10',
// //   ph3: 'bg-black/30',
// //   titleColor: '#d8f3dc',
// //   titleGlow: '0 0 30px rgba(82,183,136,0.3)',
// //   body: 'text-[#d8f3dc]/90',
// //   btn: 'bg-[#d8f3dc] text-[#08120b] hover:bg-white',
// // };
// // const PROJECTS = [
// //   {
// //     title: 'Chatterbox',
// //     caption: 'Practice, record, and get feedback to improve your speaking skills.',
// //     description:
// //       'An interactive web app featuring random topics, interview preparation prompts, and vocabulary learning tools with custom timers and recording features.',
// //     points: [
// //       'Interactive topic generator with categories like Hot Takes and Interview Prep.',
// //       'Customizable timers ranging from 30 seconds to 5+ minutes.',
// //       'Designed to help users practice, record, and refine their speaking flow.',
// //     ],
// //     tags: ['React', 'Next.js', 'Vercel', 'Tailwind CSS', 'Web Audio API'],
// //     ...LIGHT_GREEN, // <--- Swapped from ...THEME to ...LIGHT_GREEN
// //     image: '/work/chatterbox.png',
// //     link: 'https://chatter-box-blue-rho.vercel.app/',
// //   },
// //   // ... other projects keep ...THEME
// //   // Add other projects here...
// //   {
// //     title: 'Mood Reel',
// //     caption: 'Discover movies by mood, genre, and region with instant trailers and details.',
// //     description:
// //       'An interactive movie discovery platform where users can explore films filtered by genre (Action, Comedy, Drama, etc.) and region (Hollywood, Bollywood, Tollywood, World), watch trailers, and view detailed movie insights powered by the TMDB API.',
// //     points: [
// //       'Genre and regional filtering (Hollywood, Bollywood, Tollywood, etc.).',
// //       'Integrated trailers and detailed film overviews.',
// //       'Personal watchlist and custom movie curation.',
// //     ],
// //     tags: ['React', 'Next.js', 'Tailwind CSS', 'TMDB API'],
// //     ...THEME,
// //     image: null,
// //     link: 'https://movie-reel-blush.vercel.app',
// //   },
// //   {
// //     title: 'DermaSetu',
// //     caption: 'Early detection of skin diseases for rural and underserved communities.',
// //     description:
// //       'A digital platform for early detection and remote diagnosis of skin diseases, improving healthcare access in rural and underserved communities.',
// //     points: [
// //       'Image-based analysis for early detection of skin diseases.',
// //       'Secure skin-image upload for health workers and patients, with digital patient records.',
// //       'Works on low-resource devices so it stays usable in rural areas.',
// //     ],
// //     tags: ['Next.js', 'Firebase', 'REST API', 'TensorFlow', 'Python', 'OpenCV'],
// //     ...THEME,
// //     image: null,
// //     link: 'https://dermasetu.vercel.app/dashboard',
// //   },
// //   {
// //     title: 'Drobe',
// //     caption: 'Your digital wardrobe and AI personal stylist.',
// //     description:
// //       'An interactive digital closet platform where users can upload and organize their clothing items, track wardrobe pieces, and leverage AI to curate and generate custom outfits.',
// //     points: [
// //       'Digital closet inventory to upload and track your clothing pieces.',
// //       'AI-powered stylist to generate custom outfit combinations.',
// //       'Search and color-filtering to easily manage your wardrobe archive.',
// //     ],
// //     tags: ['Next.js', 'React', 'Tailwind CSS', 'AI Stylist'],
// //     ...THEME,
// //     image: null,
// //     link: 'https://my-closet-swart.vercel.app',
// //   },
// //   {
// //     title: 'Flora',
// //     caption: 'Explore flower species, origins, and botanical facts.',
// //     description:
// //       'An immersive digital flower library where users can discover diverse plant and flower species, learn about their geographical origins, family classifications, and explore fascinating botanical facts.',
// //     points: [
// //       'Comprehensive species guides with family and origin details.',
// //       'Fascinating botanical facts and insights for plant enthusiasts.',
// //       'Clean, immersive browsing interface with high-visual presentation.',
// //     ],
// //     tags: ['Next.js', 'React', 'Tailwind CSS', 'Botanical API'],
// //     ...THEME,
// //     image: null,
// //     link: 'https://flora-nu-six.vercel.app',
// //   },
// // ];

// // // ---- YOUR FLOWER VIDEOS (put the files in /public/flowers/) ----
// // // Use a clip filmed on a BLACK background. Set a path, or null to keep the drawn flower.
// // const FLOWER_VIDEOS = {
// //   big: '/flowers/bloom.mp4', // big bottom-left flower
// //   amber: null, // e.g. '/flowers/bloom-2.mp4'
// //   violet: null,
// //   gold: null,
// // };

// // // ---- YOUR FLOWER IMAGES (transparent PNG/WebP in /public/flowers/) ----
// // // Used when there is no video for that flower. null = keep the drawn flower.
// // const FLOWER_IMAGES = {
// //   // big: '/flowers/flower.png', // e.g. '/flowers/flower-1.png'
// //   amber: '/flowers/flower.png',
// //   violet: '/flowers/flower.png',
// //   gold: '/flowers/flower.png',
// // };

// // // ---- FLOWER POSITION & SIZE (edit these numbers) ----
// // // x = left/right, y = up/down, size = width of the flower.
// // // All values are % of the "Recent Work" heading box. Examples:
// // //   x: 0 = at the heading's left edge, 100 = at its right edge, negative = further left
// // //   y: 0 = at the heading's top edge,  100 = at its bottom edge, negative = further up
// // //   size: 30 = flower is 30% as wide as the heading text
// // const FLOWER_LAYOUT = {
// //   big:    { x: 50, y: 0, size: 100 }, // big bottom-left flower
// //   amber:  { x: -30, y: -40, size: 60 }, // top-right, largest
// //   violet: { x: 84,  y: -50, size: 40 }, // top-right, medium
// //   gold:   { x: 70, y: -40,   size: 30 }, // top-right, small
// // };

// // const PEEK = 16; // px each stacked card shows above the next

// // /* ----------------------------- flowers ----------------------------- */

// // // drawn flowers use warm ember colors too (only shown when no image/video is set)
// // const PALETTES = {
// //   burgundy: ['#1a0504', '#6b1a12', '#d9482b'],
// //   amber: ['#5a2400', '#c2570c', '#ffb347'],
// //   violet: ['#2a0505', '#8f1d1d', '#ff6a4a'],
// //   gold: ['#6b4a00', '#d99a00', '#ffe08a'],
// // };

// // const rnd = (i) => {
// //   const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
// //   return x - Math.floor(x);
// // };

// // // outer ring first, inner rings drawn on top
// // const RINGS = [
// //   { n: 13, len: 92, w: 30, tone: 0 },
// //   { n: 12, len: 78, w: 27, tone: 0.25 },
// //   { n: 11, len: 64, w: 24, tone: 0.5 },
// //   { n: 10, len: 50, w: 20, tone: 0.75 },
// //   { n: 8, len: 34, w: 15, tone: 0.95 },
// // ];

// // function petalPath(len, w) {
// //   return `M0 0 C ${w} ${-len * 0.25}, ${w * 0.9} ${-len * 0.85}, 0 ${-len} C ${-w * 0.9} ${-len * 0.85}, ${-w} ${-len * 0.25}, 0 0 Z`;
// // }

// // function FlowerArt({ palette }) {
// //   const uid = useId().replace(/:/g, '');
// //   const [dark, mid, light] = PALETTES[palette] || PALETTES.burgundy;

// //   const rings = useMemo(
// //     () =>
// //       RINGS.map((r, ri) => ({
// //         ...r,
// //         petals: Array.from({ length: r.n }, (_, k) => ({
// //           rot: (360 / r.n) * k + ri * 13 + (rnd(ri * 50 + k) - 0.5) * 8,
// //           s: 0.92 + rnd(ri * 90 + k + 3) * 0.16,
// //         })),
// //       })),
// //     []
// //   );

// //   return (
// //     <svg viewBox="-110 -110 220 220" className="h-full w-full overflow-visible">
// //       <defs>
// //         {rings.map((r, ri) => (
// //           <linearGradient key={ri} id={`${uid}-g${ri}`} x1="0" y1="0" x2="0" y2="-1">
// //             <stop offset="0%" stopColor={dark} />
// //             <stop offset="55%" stopColor={mid} />
// //             <stop offset="100%" stopColor={light} stopOpacity={0.6 + r.tone * 0.4} />
// //           </linearGradient>
// //         ))}
// //         <radialGradient id={`${uid}-c`}>
// //           <stop offset="0%" stopColor={light} />
// //           <stop offset="100%" stopColor={mid} />
// //         </radialGradient>
// //         <filter id={`${uid}-s`} x="-30%" y="-30%" width="160%" height="160%">
// //           <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.5" />
// //         </filter>
// //       </defs>
// //       <g filter={`url(#${uid}-s)`}>
// //         {rings.map((r, ri) => (
// //           <motion.g
// //             key={ri}
// //             variants={{
// //               closed: { scale: 0.12, rotate: -30, opacity: 0 },
// //               open: {
// //                 scale: 1,
// //                 rotate: 0,
// //                 opacity: 1,
// //                 // inner rings open first, outer rings last
// //                 transition: { delay: (rings.length - 1 - ri) * 0.28, duration: 1.6, ease: [0.22, 1, 0.36, 1] },
// //               },
// //             }}
// //             style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
// //           >
// //             {r.petals.map((p, k) => (
// //               <path
// //                 key={k}
// //                 d={petalPath(r.len, r.w)}
// //                 transform={`rotate(${p.rot}) scale(${p.s})`}
// //                 fill={`url(#${uid}-g${ri})`}
// //                 stroke={dark}
// //                 strokeOpacity="0.35"
// //                 strokeWidth="0.6"
// //               />
// //             ))}
// //           </motion.g>
// //         ))}
// //         <motion.circle
// //           r="9"
// //           fill={`url(#${uid}-c)`}
// //           variants={{ closed: { scale: 0 }, open: { scale: 1, transition: { delay: 0.1, duration: 0.8 } } }}
// //           style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
// //         />
// //       </g>
// //     </svg>
// //   );
// // }

// // // Real bloom: a time-lapse video of a flower opening, shot on a BLACK background.
// // // mix-blend-screen makes the black vanish on the dark page, so no cut-out is needed.
// // // Plays once when it scrolls into view and holds on the last (fully open) frame.
// // function BloomVideo({ src, delay = 0, palette }) {
// //   const ref = useRef(null);
// //   const timer = useRef(null);
// //   const [failed, setFailed] = useState(false);
// //   if (failed) return <FlowerArt palette={palette} />; // video missing -> drawn flower

// //   // start from the first frame every time you arrive at this section
// //   const play = () => {
// //     const v = ref.current;
// //     if (!v) return;
// //     clearTimeout(timer.current);
// //     v.pause();
// //     v.currentTime = 0;
// //     timer.current = setTimeout(() => v.play().catch(() => {}), delay * 1000);
// //   };
// //   // leaving the section: stop and rewind, ready for next time
// //   const reset = () => {
// //     const v = ref.current;
// //     clearTimeout(timer.current);
// //     if (v) {
// //       v.pause();
// //       v.currentTime = 0;
// //     }
// //   };

// //   return (
// //     <motion.div
// //       className="h-full w-full"
// //       onViewportEnter={play}
// //       onViewportLeave={reset}
// //       viewport={{ amount: 0.4 }}
// //     >
// //       <video
// //         ref={ref}
// //         src={src}
// //         muted
// //         playsInline
// //         preload="auto"
// //         onError={() => setFailed(true)}
// //         className="h-full w-full object-contain mix-blend-screen"
// //       />
// //     </motion.div>
// //   );
// // }

// // // `src` = optional transparent PNG (e.g. '/flower.png') for a photoreal flower
// // function Flower({ palette, src, video, left, top, width, delay = 0 }) {
// //   return (
// //     <div
// //       className="pointer-events-none absolute"
// //       style={{ left, top, width, aspectRatio: '1 / 1' }}
// //     >
// //       {/* bloom: starts as a small bud, then opens when it scrolls into view */}
// //       <motion.div
// //         className="h-full w-full"
// //         initial="closed"
// //         whileInView="open"
// //         viewport={{ once: false, amount: 0.2 }}
// //         style={{ transformOrigin: '50% 85%' }}
// //         variants={
// //           src && !video
// //             ? {
// //                 // photo flower: tiny bud -> full size, with a little turn as it opens
// //                 closed: { scale: 0.05, opacity: 0, rotate: -18 },
// //                 open: { scale: 1, opacity: 1, rotate: 0, transition: { delay, duration: 2.4, ease: [0.16, 1, 0.3, 1] } },
// //               }
// //             : {
// //                 closed: { scale: 0.35, opacity: 0 },
// //                 open: { scale: 1, opacity: 1, transition: { delay, delayChildren: delay, duration: 1.8, ease: [0.22, 1, 0.36, 1] } },
// //               }
// //         }
// //       >
// //         {video ? (
// //           <BloomVideo src={video} delay={delay} palette={palette} />
// //         ) : src ? (
// //           // eslint-disable-next-line @next/next/no-img-element
// //           <img src={src} alt="" className="h-full w-full object-contain drop-shadow-2xl" />
// //         ) : (
// //           <FlowerArt palette={palette} />
// //         )}
// //       </motion.div>
// //     </div>
// //   );
// // }

// // function FlowerHeading() {
// //   return (
// //     <div className="relative mx-auto max-w-5xl px-6 pb-3 pt-24 text-center sm:pt-28">
// //       <div className="relative inline-block">
// //         {/* big flower, bottom-left */}
// //         <Flower palette="burgundy" video={FLOWER_VIDEOS.big} src={FLOWER_IMAGES.big} left={`${FLOWER_LAYOUT.big.x}%`} top={`${FLOWER_LAYOUT.big.y}%`} width={`${FLOWER_LAYOUT.big.size}%`} />
// //         {/* cluster, top-right */}
// //         <Flower palette="amber" video={FLOWER_VIDEOS.amber} src={FLOWER_IMAGES.amber} left={`${FLOWER_LAYOUT.amber.x}%`} top={`${FLOWER_LAYOUT.amber.y}%`} width={`${FLOWER_LAYOUT.amber.size}%`} />
// //         <Flower palette="violet" video={FLOWER_VIDEOS.violet} src={FLOWER_IMAGES.violet} left={`${FLOWER_LAYOUT.violet.x}%`} top={`${FLOWER_LAYOUT.violet.y}%`} width={`${FLOWER_LAYOUT.violet.size}%`} delay={0.6} />
// //         <Flower palette="gold" video={FLOWER_VIDEOS.gold} src={FLOWER_IMAGES.gold} left={`${FLOWER_LAYOUT.gold.x}%`} top={`${FLOWER_LAYOUT.gold.y}%`} width={`${FLOWER_LAYOUT.gold.size}%`} delay={1.1} />

// //         <p
// //           className="relative z-10 text-[11px] font-light uppercase tracking-[0.45em] sm:text-xs"
// //           style={{ color: CREAM, opacity: 0.8, fontFamily: "'Jost', sans-serif" }}
// //         >
// //           Featured Projects
// //         </p>
// //         <h2
// //           className="relative z-10 mt-2 text-5xl font-light leading-none sm:text-7xl lg:text-8xl"
// //           style={{
// //             color: CREAM,
// //             fontFamily: "'Cormorant Garamond', Georgia, serif",
// //             textShadow: '0 0 40px rgba(255,140,60,0.25)',
// //           }}
// //         >
// //           Recent{' '}
// //           <em className="bg-gradient-to-r from-[#ffb347] via-[#ff7a30] to-[#e8412f] bg-clip-text italic text-transparent [text-shadow:none]">
// //             Work
// //           </em>
// //         </h2>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ------------------------------ cards ------------------------------ */

// // function ProjectCard({ project: p, index, total, progress }) {
// //   const n = total;
// //   const last = n - 1;

// //   // Card 0 never moves in: it is already in place. Cards 1.. slide up during their slice.
// //   const yRange = index === 0 ? [0, 1] : [(index - 1) / last, index / last];
// //   const yOut = index === 0 ? ['0vh', '0vh'] : ['105vh', '0vh'];
// //   const y = useTransform(progress, yRange, yOut);

// //   // when the next card covers this one, shrink it slightly (stacking depth)
// //   const sRange = index === last ? [0, 1] : [index / last, (index + 1) / last];
// //   const sOut = index === last ? [1, 1] : [1, 0.94];
// //   const scale = useTransform(progress, sRange, sOut);

// //   return (
// //     <motion.article
// //       style={{ y, scale, top: `calc(1vh + ${index * PEEK}px)`, zIndex: index + 1 }}
// //       className={`absolute inset-x-0 mx-auto h-[min(60vh,500px)] w-[min(92vw,1080px)] origin-top overflow-hidden rounded-3xl border shadow-[0_-18px_50px_rgba(0,0,0,0.55)] ${p.card}`}
// //     >
// //       <div className={`absolute inset-0 ${p.grid}`} />
// //       <div className="relative grid h-full gap-6 p-5 sm:p-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10">
// //         {/* left: caption + screenshot */}
// //         <div className={`hidden flex-col justify-between rounded-2xl border p-5 md:flex ${p.panel}`}>
// //           <p className={`text-sm font-semibold leading-snug ${p.capColor}`}>{p.caption}</p>
// //           <div className={`mt-4 flex-1 overflow-hidden rounded-xl border bg-gradient-to-b ${p.shotBorder} ${p.shot}`}>
// //             {p.image ? (
// //               // eslint-disable-next-line @next/next/no-img-element
// //               <img src={p.image} alt={p.title} className="h-full w-full object-cover object-top" />
// //             ) : (
// //               <div className="flex h-full flex-col gap-2 p-4">
// //                 <div className={`h-2 w-1/3 rounded ${p.ph1}`} />
// //                 <div className={`h-2 w-2/3 rounded ${p.ph2}`} />
// //                 <div className={`mt-2 flex-1 rounded-lg ${p.ph3}`} />
// //                 <div className={`h-8 rounded-lg ${p.ph2}`} />
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* right: details */}
// //         <div className="flex min-w-0 flex-col justify-center">
// //           <p className={`text-xs tracking-[0.25em] ${p.muted}`}>
// //             {String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
// //           </p>
// //           <h3
// //             className="mt-2 text-4xl font-light italic sm:text-[44px] sm:leading-tight"
// //             style={{
// //               color: p.titleColor,
// //               fontFamily: "'Cormorant Garamond', Georgia, serif",
// //               textShadow: p.titleGlow,
// //             }}
// //           >
// //             {p.title}
// //           </h3>
// //           <p className={`mt-2 text-sm leading-6 sm:text-[15px] ${p.muted}`}>{p.description}</p>
// //           <ul className={`mt-3 space-y-1.5 text-sm ${p.body}`}>
// //             {p.points.map((pt) => (
// //               <li key={pt} className="flex gap-3">
// //                 <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${p.dot}`} />
// //                 <span>{pt}</span>
// //               </li>
// //             ))}
// //           </ul>
// //           <div className="mt-4 flex flex-wrap gap-2">
// //             {p.tags.map((t) => (
// //               <span key={t} className={`rounded-full border px-3 py-1 text-xs ${p.tag}`}>
// //                 {t}
// //               </span>
// //             ))}
// //           </div>

// //           {/* visit button (only when the project has a link) */}
// //           {p.link && (
// //             <a
// //               href={p.link}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 hover:gap-3 ${p.btn}`}
// //             >
// //               Visit site
// //               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
// //                 <path d="M7 17L17 7M8 7h9v9" />
// //               </svg>
// //             </a>
// //           )}
// //         </div>
// //       </div>
// //     </motion.article>
// //   );
// // }

// // export default function RecentWork() {
// //   const track = useRef(null);
// //   const n = PROJECTS.length;

// //   const { scrollYProgress } = useScroll({ target: track, offset: ['start start', 'end end'] });
// //   const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 });

// //   return (
// //     <section id="work" className="relative z-10 bg-black text-white">
// //       <link
// //         rel="stylesheet"
// //         href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap"
// //       />

// //       {/* tall track: the stage inside pins while you scroll through it */}
// //       <div ref={track} style={{ height: `${n * 100}vh` }} className="relative z-10">
// //         <div className="sticky top-0 flex h-screen flex-col">
// //           {/* grid + blurry cursor trail: inside the pinned stage, so the canvas is one screen tall */}
// //           <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
// //             <GridTrailFX
// //               fallback={
// //                 <div
// //                   className="absolute inset-0"
// //                   style={{
// //                     backgroundImage: 'radial-gradient(rgba(204,212,230,0.12) 1px, transparent 1.2px)',
// //                     backgroundSize: '9px 9px',
// //                   }}
// //                 />
// //               }
// //             />
// //           </div>

// //           {/* heading stays pinned while the cards stack below it */}
// //           <div className="relative z-10 shrink-0">
// //             <FlowerHeading />
// //           </div>
// //           <div className="relative z-20 flex-1">
// //             {PROJECTS.map((p, i) => (
// //               <ProjectCard key={p.title} project={p} index={i} total={n} progress={progress} />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// 'use client';

// import { useId, useMemo, useRef, useState } from 'react';
// import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// import GridTrailFX from './GridTrailFX';

// /* ======================================================================
//    RECENT WORK  (components/RecentWork.jsx)
//    Theme: pure black, with small warm accents (cream heading, orange details).
//    - Card 1 is already in place under the heading (no empty stage).
//    - Scroll: the stage pins and cards 2, 3, 4 slide up and stack over it.
//    - Every project uses the same site theme (THEME). To give one project its
//      own colour, add a `card:` line AFTER `...THEME` (or spread `...LIGHT_GREEN`).
//    - Each project can have a `link` that shows a "Visit site" button.
//    - Needs NO overflow-hidden/auto ancestor (overflow-x-clip is fine).
//    - The grid + cursor trail lives INSIDE the sticky stage, so its canvas is
//      exactly one screen tall and the mouse position lines up with it.
//    ====================================================================== */

// // ---- THEME COLORS (edit here) ----
// const CREAM = '#ffe6cc';
// const ORANGE = '#ff8a3d';

// const GRID_DARK =
//   'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[36px_36px]';
// const GRID_LIGHT =
//   'bg-[linear-gradient(rgba(20,80,40,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(20,80,40,0.07)_1px,transparent_1px)] bg-size-[36px_36px]';

// // default card look = same as the website (black + cream + orange).
// // Every project spreads this unless it has its own colours.
// const THEME = {
//   card: 'bg-gradient-to-br from-[#140a05] to-[#050302] border-[#ff8a3d]/25 shadow-lg shadow-[#ff8a3d]/10',
//   shot: 'from-[#ff8a3d]/10 to-white/[0.02]',
//   capColor: 'text-[#ffe6cc]',
//   dot: 'bg-[#ff8a3d]',
//   tag: 'bg-[#ff8a3d]/10 text-[#ffe6cc] border-[#ff8a3d]/30',
//   muted: 'text-[#ffe6cc]/60',
//   grid: GRID_DARK,
//   panel: 'border-[#ff8a3d]/15 bg-black/30',
//   shotBorder: 'border-[#ff8a3d]/15',
//   ph1: 'bg-[#ff8a3d]/30',
//   ph2: 'bg-white/10',
//   ph3: 'bg-black/30',
//   titleColor: CREAM,
//   titleGlow: '0 0 30px rgba(255,140,60,0.35)',
//   body: 'text-[#ffe6cc]/90',
//   btn: 'bg-[#ffe6cc] text-[#1a0a04] hover:bg-white',
// };

// // Light green card matching the Chatterbox UI theme
// const LIGHT_GREEN = {
//   card: 'bg-gradient-to-br from-[#0c1f15] via-[#07130d] to-[#040a07] border-[#52b788]/35 shadow-lg shadow-[#52b788]/10',
//   shot: 'from-[#52b788]/15 to-white/[0.02]',
//   capColor: 'text-[#d8f3dc]',
//   dot: 'bg-[#52b788]',
//   tag: 'bg-[#52b788]/15 text-[#d8f3dc] border-[#52b788]/30',
//   muted: 'text-[#d8f3dc]/65',
//   grid: GRID_DARK,
//   panel: 'border-[#52b788]/20 bg-black/40',
//   shotBorder: 'border-[#52b788]/20',
//   ph1: 'bg-[#52b788]/30',
//   ph2: 'bg-white/10',
//   ph3: 'bg-black/30',
//   titleColor: '#d8f3dc',
//   titleGlow: '0 0 30px rgba(82,183,136,0.35)',
//   body: 'text-[#d8f3dc]/90',
//   btn: 'bg-[#d8f3dc] text-[#07130d] hover:bg-white',
// };

// // light green light-mode card (optional alternative)
// const GREEN = {
//   card: 'bg-gradient-to-br from-[#eaf9e2] to-[#b8e6ae] border-[#7cc274]/60',
//   shot: 'from-[#6fbf6a]/30 to-white/50',
//   capColor: 'text-[#1d4a2a]',
//   dot: 'bg-[#2f8f46]',
//   tag: 'bg-[#2f8f46]/10 text-[#1d4a2a] border-[#2f8f46]/35',
//   muted: 'text-[#3d6a48]',
//   grid: GRID_LIGHT,
//   panel: 'border-[#2f8f46]/25 bg-white/45',
//   shotBorder: 'border-[#2f8f46]/25',
//   ph1: 'bg-[#2f8f46]/35',
//   ph2: 'bg-[#2f8f46]/20',
//   ph3: 'bg-white/50',
//   titleColor: '#12391f',
//   titleGlow: 'none',
//   body: 'text-[#1b3a26]',
//   btn: 'bg-[#12391f] text-[#eaf9e2] hover:bg-[#0b2714]',
// };

// const PROJECTS = [
//   {
//     title: 'Chatterbox',
//     caption: 'Practice, record, and get feedback to improve your speaking skills.',
//     description:
//       'An interactive web app featuring random topics, interview preparation prompts, and vocabulary learning tools with custom timers and recording features.',
//     points: [
//       'Interactive topic generator with categories like Hot Takes and Interview Prep.',
//       'Customizable timers ranging from 30 seconds to 5+ minutes.',
//       'Designed to help users practice, record, and refine their speaking flow.',
//     ],
//     tags: ['React', 'Next.js', 'Vercel', 'Tailwind CSS', 'Web Audio API'],
//     ...LIGHT_GREEN,
//     image: '/work/chatterbox.png',
//     link: 'https://chatter-box-blue-rho.vercel.app/',
//   },
//   {
//     title: 'Mood Reel',
//     caption: 'Discover movies by mood, genre, and region with instant trailers and details.',
//     description:
//       'An interactive movie discovery platform where users can explore films filtered by genre (Action, Comedy, Drama, etc.) and region (Hollywood, Bollywood, Tollywood, World), watch trailers, and view detailed movie insights powered by the TMDB API.',
//     points: [
//       'Genre and regional filtering (Hollywood, Bollywood, Tollywood, etc.).',
//       'Integrated trailers and detailed film overviews.',
//       'Personal watchlist and custom movie curation.',
//     ],
//     tags: ['React', 'Next.js', 'Tailwind CSS', 'TMDB API'],
//     ...THEME,
//     image: null,
//     link: 'https://movie-reel-blush.vercel.app',
//   },
//   {
//     title: 'DermaSetu',
//     caption: 'Early detection of skin diseases for rural and underserved communities.',
//     description:
//       'A digital platform for early detection and remote diagnosis of skin diseases, improving healthcare access in rural and underserved communities.',
//     points: [
//       'Image-based analysis for early detection of skin diseases.',
//       'Secure skin-image upload for health workers and patients, with digital patient records.',
//       'Works on low-resource devices so it stays usable in rural areas.',
//     ],
//     tags: ['Next.js', 'Firebase', 'REST API', 'TensorFlow', 'Python', 'OpenCV'],
//     ...THEME,
//     image: null,
//     link: 'https://dermasetu.vercel.app/dashboard',
//   },
//   {
//     title: 'Drobe',
//     caption: 'Your digital wardrobe and AI personal stylist.',
//     description:
//       'An interactive digital closet platform where users can upload and organize their clothing items, track wardrobe pieces, and leverage AI to curate and generate custom outfits.',
//     points: [
//       'Digital closet inventory to upload and track your clothing pieces.',
//       'AI-powered stylist to generate custom outfit combinations.',
//       'Search and color-filtering to easily manage your wardrobe archive.',
//     ],
//     tags: ['Next.js', 'React', 'Tailwind CSS', 'AI Stylist'],
//     ...THEME,
//     image: null,
//     link: 'https://my-closet-swart.vercel.app',
//   },
//   {
//     title: 'Flora',
//     caption: 'Explore flower species, origins, and botanical facts.',
//     description:
//       'An immersive digital flower library where users can discover diverse plant and flower species, learn about their geographical origins, family classifications, and explore fascinating botanical facts.',
//     points: [
//       'Comprehensive species guides with family and origin details.',
//       'Fascinating botanical facts and insights for plant enthusiasts.',
//       'Clean, immersive browsing interface with high-visual presentation.',
//     ],
//     tags: ['Next.js', 'React', 'Tailwind CSS', 'Botanical API'],
//     ...THEME,
//     image: null,
//     link: 'https://flora-nu-six.vercel.app',
//   },
// ];

// // ---- YOUR FLOWER VIDEOS (put the files in /public/flowers/) ----
// const FLOWER_VIDEOS = {
//   big: '/flowers/bloom.mp4',
//   amber: null,
//   violet: null,
//   gold: null,
// };

// // ---- YOUR FLOWER IMAGES (transparent PNG/WebP in /public/flowers/) ----
// const FLOWER_IMAGES = {
//   amber: '/flowers/flower.png',
//   violet: '/flowers/flower.png',
//   gold: '/flowers/flower.png',
// };

// // ---- FLOWER POSITION & SIZE ----
// const FLOWER_LAYOUT = {
//   big:    { x: 50, y: 0, size: 100 },
//   amber:  { x: -30, y: -40, size: 60 },
//   violet: { x: 84,  y: -50, size: 40 },
//   gold:   { x: 70, y: -40,   size: 30 },
// };

// const PEEK = 16;

// /* ----------------------------- flowers ----------------------------- */

// const PALETTES = {
//   burgundy: ['#1a0504', '#6b1a12', '#d9482b'],
//   amber: ['#5a2400', '#c2570c', '#ffb347'],
//   violet: ['#2a0505', '#8f1d1d', '#ff6a4a'],
//   gold: ['#6b4a00', '#d99a00', '#ffe08a'],
// };

// const rnd = (i) => {
//   const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
//   return x - Math.floor(x);
// };

// const RINGS = [
//   { n: 13, len: 92, w: 30, tone: 0 },
//   { n: 12, len: 78, w: 27, tone: 0.25 },
//   { n: 11, len: 64, w: 24, tone: 0.5 },
//   { n: 10, len: 50, w: 20, tone: 0.75 },
//   { n: 8, len: 34, w: 15, tone: 0.95 },
// ];

// function petalPath(len, w) {
//   return `M0 0 C ${w} ${-len * 0.25}, ${w * 0.9} ${-len * 0.85}, 0 ${-len} C ${-w * 0.9} ${-len * 0.85}, ${-w} ${-len * 0.25}, 0 0 Z`;
// }

// function FlowerArt({ palette }) {
//   const uid = useId().replace(/:/g, '');
//   const [dark, mid, light] = PALETTES[palette] || PALETTES.burgundy;

//   const rings = useMemo(
//     () =>
//       RINGS.map((r, ri) => ({
//         ...r,
//         petals: Array.from({ length: r.n }, (_, k) => ({
//           rot: (360 / r.n) * k + ri * 13 + (rnd(ri * 50 + k) - 0.5) * 8,
//           s: 0.92 + rnd(ri * 90 + k + 3) * 0.16,
//         })),
//       })),
//     []
//   );

//   return (
//     <svg viewBox="-110 -110 220 220" className="h-full w-full overflow-visible">
//       <defs>
//         {rings.map((r, ri) => (
//           <linearGradient key={ri} id={`${uid}-g${ri}`} x1="0" y1="0" x2="0" y2="-1">
//             <stop offset="0%" stopColor={dark} />
//             <stop offset="55%" stopColor={mid} />
//             <stop offset="100%" stopColor={light} stopOpacity={0.6 + r.tone * 0.4} />
//           </linearGradient>
//         ))}
//         <radialGradient id={`${uid}-c`}>
//           <stop offset="0%" stopColor={light} />
//           <stop offset="100%" stopColor={mid} />
//         </radialGradient>
//         <filter id={`${uid}-s`} x="-30%" y="-30%" width="160%" height="160%">
//           <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.5" />
//         </filter>
//       </defs>
//       <g filter={`url(#${uid}-s)`}>
//         {rings.map((r, ri) => (
//           <motion.g
//             key={ri}
//             variants={{
//               closed: { scale: 0.12, rotate: -30, opacity: 0 },
//               open: {
//                 scale: 1,
//                 rotate: 0,
//                 opacity: 1,
//                 transition: { delay: (rings.length - 1 - ri) * 0.28, duration: 1.6, ease: [0.22, 1, 0.36, 1] },
//               },
//             }}
//             style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
//           >
//             {r.petals.map((p, k) => (
//               <path
//                 key={k}
//                 d={petalPath(r.len, r.w)}
//                 transform={`rotate(${p.rot}) scale(${p.s})`}
//                 fill={`url(#${uid}-g${ri})`}
//                 stroke={dark}
//                 strokeOpacity="0.35"
//                 strokeWidth="0.6"
//               />
//             ))}
//           </motion.g>
//         ))}
//         <motion.circle
//           r="9"
//           fill={`url(#${uid}-c)`}
//           variants={{ closed: { scale: 0 }, open: { scale: 1, transition: { delay: 0.1, duration: 0.8 } } }}
//           style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
//         />
//       </g>
//     </svg>
//   );
// }

// function BloomVideo({ src, delay = 0, palette }) {
//   const ref = useRef(null);
//   const timer = useRef(null);
//   const [failed, setFailed] = useState(false);
//   if (failed) return <FlowerArt palette={palette} />;

//   const play = () => {
//     const v = ref.current;
//     if (!v) return;
//     clearTimeout(timer.current);
//     v.pause();
//     v.currentTime = 0;
//     timer.current = setTimeout(() => v.play().catch(() => {}), delay * 1000);
//   };

//   const reset = () => {
//     const v = ref.current;
//     clearTimeout(timer.current);
//     if (v) {
//       v.pause();
//       v.currentTime = 0;
//     }
//   };

//   return (
//     <motion.div
//       className="h-full w-full"
//       onViewportEnter={play}
//       onViewportLeave={reset}
//       viewport={{ amount: 0.4 }}
//     >
//       <video
//         ref={ref}
//         src={src}
//         muted
//         playsInline
//         preload="auto"
//         onError={() => setFailed(true)}
//         className="h-full w-full object-contain mix-blend-screen"
//       />
//     </motion.div>
//   );
// }

// function Flower({ palette, src, video, left, top, width, delay = 0 }) {
//   return (
//     <div
//       className="pointer-events-none absolute"
//       style={{ left, top, width, aspectRatio: '1 / 1' }}
//     >
//       <motion.div
//         className="h-full w-full"
//         initial="closed"
//         whileInView="open"
//         viewport={{ once: false, amount: 0.2 }}
//         style={{ transformOrigin: '50% 85%' }}
//         variants={
//           src && !video
//             ? {
//                 closed: { scale: 0.05, opacity: 0, rotate: -18 },
//                 open: { scale: 1, opacity: 1, rotate: 0, transition: { delay, duration: 2.4, ease: [0.16, 1, 0.3, 1] } },
//               }
//             : {
//                 closed: { scale: 0.35, opacity: 0 },
//                 open: { scale: 1, opacity: 1, transition: { delay, delayChildren: delay, duration: 1.8, ease: [0.22, 1, 0.36, 1] } },
//               }
//         }
//       >
//         {video ? (
//           <BloomVideo src={video} delay={delay} palette={palette} />
//         ) : src ? (
//           // eslint-disable-next-line @next/next/no-img-element
//           <img src={src} alt="" className="h-full w-full object-contain drop-shadow-2xl" />
//         ) : (
//           <FlowerArt palette={palette} />
//         )}
//       </motion.div>
//     </div>
//   );
// }

// function FlowerHeading() {
//   return (
//     <div className="relative mx-auto max-w-5xl px-6 pb-3 pt-24 text-center sm:pt-28">
//       <div className="relative inline-block">
//         <Flower palette="burgundy" video={FLOWER_VIDEOS.big} src={FLOWER_IMAGES.big} left={`${FLOWER_LAYOUT.big.x}%`} top={`${FLOWER_LAYOUT.big.y}%`} width={`${FLOWER_LAYOUT.big.size}%`} />
//         <Flower palette="amber" video={FLOWER_VIDEOS.amber} src={FLOWER_IMAGES.amber} left={`${FLOWER_LAYOUT.amber.x}%`} top={`${FLOWER_LAYOUT.amber.y}%`} width={`${FLOWER_LAYOUT.amber.size}%`} />
//         <Flower palette="violet" video={FLOWER_VIDEOS.violet} src={FLOWER_IMAGES.violet} left={`${FLOWER_LAYOUT.violet.x}%`} top={`${FLOWER_LAYOUT.violet.y}%`} width={`${FLOWER_LAYOUT.violet.size}%`} delay={0.6} />
//         <Flower palette="gold" video={FLOWER_VIDEOS.gold} src={FLOWER_IMAGES.gold} left={`${FLOWER_LAYOUT.gold.x}%`} top={`${FLOWER_LAYOUT.gold.y}%`} width={`${FLOWER_LAYOUT.gold.size}%`} delay={1.1} />

//         <p
//           className="relative z-10 text-[11px] font-light uppercase tracking-[0.45em] sm:text-xs"
//           style={{ color: CREAM, opacity: 0.8, fontFamily: "'Jost', sans-serif" }}
//         >
//           Featured Projects
//         </p>
//         <h2
//           className="relative z-10 mt-2 text-5xl font-light leading-none sm:text-7xl lg:text-8xl"
//           style={{
//             color: CREAM,
//             fontFamily: "'Cormorant Garamond', Georgia, serif",
//             textShadow: '0 0 40px rgba(255,140,60,0.25)',
//           }}
//         >
//           Recent{' '}
//           <em className="bg-gradient-to-r from-[#ffb347] via-[#ff7a30] to-[#e8412f] bg-clip-text italic text-transparent [text-shadow:none]">
//             Work
//           </em>
//         </h2>
//       </div>
//     </div>
//   );
// }

// /* ------------------------------ cards ------------------------------ */

// function ProjectCard({ project: p, index, total, progress }) {
//   const n = total;
//   const last = n - 1;

//   const yRange = index === 0 ? [0, 1] : [(index - 1) / last, index / last];
//   const yOut = index === 0 ? ['0vh', '0vh'] : ['105vh', '0vh'];
//   const y = useTransform(progress, yRange, yOut);

//   const sRange = index === last ? [0, 1] : [index / last, (index + 1) / last];
//   const sOut = index === last ? [1, 1] : [1, 0.94];
//   const scale = useTransform(progress, sRange, sOut);

//   return (
//     <motion.article
//       style={{ y, scale, top: `calc(1vh + ${index * PEEK}px)`, zIndex: index + 1 }}
//       className={`absolute inset-x-0 mx-auto h-[min(60vh,500px)] w-[min(92vw,1080px)] origin-top overflow-hidden rounded-3xl border shadow-[0_-18px_50px_rgba(0,0,0,0.55)] ${p.card}`}
//     >
//       <div className={`absolute inset-0 ${p.grid}`} />
//       <div className="relative grid h-full gap-6 p-5 sm:p-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10">
//         {/* left: caption + screenshot */}
//         <div className={`hidden flex-col justify-between rounded-2xl border p-5 md:flex ${p.panel}`}>
//           <p className={`text-sm font-semibold leading-snug ${p.capColor}`}>{p.caption}</p>
//           <div className={`mt-4 flex-1 overflow-hidden rounded-xl border bg-gradient-to-b ${p.shotBorder} ${p.shot}`}>
//             {p.image ? (
//               // eslint-disable-next-line @next/next/no-img-element
//               <img src={p.image} alt={p.title} className="h-full w-full object-cover object-top" />
//             ) : (
//               <div className="flex h-full flex-col gap-2 p-4">
//                 <div className={`h-2 w-1/3 rounded ${p.ph1}`} />
//                 <div className={`h-2 w-2/3 rounded ${p.ph2}`} />
//                 <div className={`mt-2 flex-1 rounded-lg ${p.ph3}`} />
//                 <div className={`h-8 rounded-lg ${p.ph2}`} />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* right: details */}
//         <div className="flex min-w-0 flex-col justify-center">
//           <p className={`text-xs tracking-[0.25em] ${p.muted}`}>
//             {String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
//           </p>
//           <h3
//             className="mt-2 text-4xl font-light italic sm:text-[44px] sm:leading-tight"
//             style={{
//               color: p.titleColor,
//               fontFamily: "'Cormorant Garamond', Georgia, serif",
//               textShadow: p.titleGlow,
//             }}
//           >
//             {p.title}
//           </h3>
//           <p className={`mt-2 text-sm leading-6 sm:text-[15px] ${p.muted}`}>{p.description}</p>
//           <ul className={`mt-3 space-y-1.5 text-sm ${p.body}`}>
//             {p.points.map((pt) => (
//               <li key={pt} className="flex gap-3">
//                 <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${p.dot}`} />
//                 <span>{pt}</span>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-4 flex flex-wrap gap-2">
//             {p.tags.map((t) => (
//               <span key={t} className={`rounded-full border px-3 py-1 text-xs ${p.tag}`}>
//                 {t}
//               </span>
//             ))}
//           </div>

//           {p.link && (
//             <a
//               href={p.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 hover:gap-3 ${p.btn}`}
//             >
//               Visit site
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
//                 <path d="M7 17L17 7M8 7h9v9" />
//               </svg>
//             </a>
//           )}
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// export default function RecentWork() {
//   const track = useRef(null);
//   const n = PROJECTS.length;

//   const { scrollYProgress } = useScroll({ target: track, offset: ['start start', 'end end'] });
//   const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 });

//   return (
//     <section id="work" className="relative z-10 bg-black text-white">
//       <link
//         rel="stylesheet"
//         href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap"
//       />

//       <div ref={track} style={{ height: `${n * 100}vh` }} className="relative z-10">
//         <div className="sticky top-0 flex h-screen flex-col">
//           <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
//             <GridTrailFX
//               fallback={
//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     backgroundImage: 'radial-gradient(rgba(204,212,230,0.12) 1px, transparent 1.2px)',
//                     backgroundSize: '9px 9px',
//                   }}
//                 />
//               }
//             />
//           </div>

//           <div className="relative z-10 shrink-0">
//             <FlowerHeading />
//           </div>
//           <div className="relative z-20 flex-1">
//             {PROJECTS.map((p, i) => (
//               <ProjectCard key={p.title} project={p} index={i} total={n} progress={progress} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { useId, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import GridTrailFX from './GridTrailFX';

// ---- THEME COLORS ----
const CREAM = '#ffe6cc';

const GRID_DARK =
  'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[36px_36px]';
const GRID_LIGHT =
  'bg-[linear-gradient(rgba(20,80,40,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(20,80,40,0.07)_1px,transparent_1px)] bg-size-[36px_36px]';

// 1. Chatterbox: Light Green Theme
const LIGHT_GREEN = {
  card: 'bg-gradient-to-br from-[#0c1f15] via-[#07130d] to-[#040a07] border-[#52b788]/35 shadow-lg shadow-[#52b788]/10',
  shot: 'from-[#52b788]/15 to-white/[0.02]',
  capColor: 'text-[#d8f3dc]',
  dot: 'bg-[#52b788]',
  tag: 'bg-[#52b788]/15 text-[#d8f3dc] border-[#52b788]/30',
  muted: 'text-[#d8f3dc]/65',
  grid: GRID_DARK,
  panel: 'border-[#52b788]/20 bg-black/40',
  shotBorder: 'border-[#52b788]/20',
  ph1: 'bg-[#52b788]/30',
  ph2: 'bg-white/10',
  ph3: 'bg-black/30',
  titleColor: '#d8f3dc',
  titleGlow: '0 0 30px rgba(82,183,136,0.35)',
  body: 'text-[#d8f3dc]/90',
  btn: 'bg-[#d8f3dc] text-[#07130d] hover:bg-white',
};

// 2. Mood Reel: Sleek Pitch Black Theme
const MOOD_REEL = {
  card: 'bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#000000] border-white/15 shadow-lg shadow-black/50',
  shot: 'from-white/10 to-white/[0.02]',
  capColor: 'text-white',
  dot: 'bg-red-500',
  tag: 'bg-white/10 text-white border-white/20',
  muted: 'text-neutral-400',
  grid: GRID_DARK,
  panel: 'border-white/10 bg-black/60',
  shotBorder: 'border-white/10',
  ph1: 'bg-white/20',
  ph2: 'bg-white/10',
  ph3: 'bg-black/50',
  titleColor: '#ffffff',
  titleGlow: '0 0 30px rgba(255,255,255,0.2)',
  body: 'text-neutral-300',
  btn: 'bg-white text-black hover:bg-neutral-200',
};

// 3. DermaSetu: Clinical Deep Blue Theme
const DERMA_SETU = {
  card: 'bg-gradient-to-br from-[#0b1329] via-[#070b19] to-[#03050f] border-blue-500/35 shadow-lg shadow-blue-500/10',
  shot: 'from-blue-500/20 to-white/[0.02]',
  capColor: 'text-blue-200',
  dot: 'bg-blue-500',
  tag: 'bg-blue-500/20 text-blue-200 border-blue-500/30',
  muted: 'text-blue-200/70',
  grid: GRID_DARK,
  panel: 'border-blue-500/20 bg-black/40',
  shotBorder: 'border-blue-500/20',
  ph1: 'bg-blue-500/30',
  ph2: 'bg-white/10',
  ph3: 'bg-black/30',
  titleColor: '#e0f2fe',
  titleGlow: '0 0 30px rgba(59,130,246,0.35)',
  body: 'text-blue-100/90',
  btn: 'bg-blue-600 text-white hover:bg-blue-500',
};

// 4. Drobe: Clean Minimalist Warm White Theme
const DROBE_WHITE = {
  card: 'bg-gradient-to-br from-[#fbf9f5] via-[#f5f2eb] to-[#ece8e1] border-[#d4cfc4] text-neutral-900 shadow-xl shadow-black/5',
  shot: 'from-neutral-200/50 to-neutral-100',
  capColor: 'text-neutral-900 font-medium',
  dot: 'bg-neutral-900',
  tag: 'bg-neutral-900/5 text-neutral-800 border-neutral-300',
  muted: 'text-neutral-600',
  grid: 'bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[36px_36px]',
  panel: 'border-neutral-300 bg-white/60',
  shotBorder: 'border-neutral-300',
  ph1: 'bg-neutral-300',
  ph2: 'bg-neutral-200',
  ph3: 'bg-neutral-100',
  titleColor: '#171717',
  titleGlow: 'none',
  body: 'text-neutral-700',
  btn: 'bg-neutral-900 text-white hover:bg-neutral-800',
};

// 5. Flora: Botanical Warm Orange Theme
const FLORA_ORANGE = {
  card: 'bg-gradient-to-br from-[#1a0f08] via-[#100905] to-[#080402] border-amber-500/35 shadow-lg shadow-amber-500/10',
  shot: 'from-amber-500/15 to-white/[0.02]',
  capColor: 'text-amber-200',
  dot: 'bg-amber-500',
  tag: 'bg-amber-500/15 text-amber-200 border-amber-500/30',
  muted: 'text-amber-100/65',
  grid: GRID_DARK,
  panel: 'border-amber-500/20 bg-black/40',
  shotBorder: 'border-amber-500/20',
  ph1: 'bg-amber-500/30',
  ph2: 'bg-white/10',
  ph3: 'bg-black/30',
  titleColor: '#fef3c7',
  titleGlow: '0 0 30px rgba(245,158,11,0.35)',
  body: 'text-amber-50/90',
  btn: 'bg-amber-500 text-black hover:bg-amber-400',
};

const PROJECTS = [
  {
    title: 'Chatterbox',
    caption: 'Practice, record, and get feedback to improve your speaking skills.',
    description:
      'An interactive web app featuring random topics, interview preparation prompts, and vocabulary learning tools with custom timers and recording features.',
    points: [
      'Interactive topic generator with categories like Hot Takes and Interview Prep.',
      'Customizable timers ranging from 30 seconds to 5+ minutes.',
      'Designed to help users practice, record, and refine their speaking flow.',
    ],
    tags: ['React', 'Next.js', 'Vercel', 'Tailwind CSS', 'Web Audio API'],
    ...LIGHT_GREEN,
    image: '/work/chatterbox.png',
    link: 'https://chatter-box-blue-rho.vercel.app/',
  },
  {
    title: 'Movie Reel',
    caption: 'Discover movies by mood, genre, and region with instant trailers and details.',
    description:
      'An interactive movie discovery platform where users can explore films filtered by genre (Action, Comedy, Drama, etc.) and region (Hollywood, Bollywood, Tollywood, World), watch trailers, and view detailed movie insights powered by the TMDB API.',
    points: [
      'Genre and regional filtering (Hollywood, Bollywood, Tollywood, etc.).',
      'Integrated trailers and detailed film overviews.',
      'Personal watchlist and custom movie curation.',
    ],
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TMDB API'],
    ...MOOD_REEL,
    image: '/work/movie.png',
    link: 'https://movie-reel-blush.vercel.app',
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
    ...DERMA_SETU,
    image: '/work/dermasetu.png',
    link: 'https://dermasetu.vercel.app/dashboard',
  },
  {
    title: 'Drobe',
    caption: 'Your digital wardrobe and AI personal stylist.',
    description:
      'An interactive digital closet platform where users can upload and organize their clothing items, track wardrobe pieces, and leverage AI to curate and generate custom outfits.',
    points: [
      'Digital closet inventory to upload and track your clothing pieces.',
      'AI-powered stylist to generate custom outfit combinations.',
      'Search and color-filtering to easily manage your wardrobe archive.',
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'AI Stylist'],
    ...DROBE_WHITE,
    image: '/work/drobe.png',
    link: 'https://my-closet-swart.vercel.app',
  },
  {
    title: 'Flora',
    caption: 'Explore flower species, origins, and botanical facts.',
    description:
      'An immersive digital flower library where users can discover diverse plant and flower species, learn about their geographical origins, family classifications, and explore fascinating botanical facts.',
    points: [
      'Comprehensive species guides with family and origin details.',
      'Fascinating botanical facts and insights for plant enthusiasts.',
      'Clean, immersive browsing interface with high-visual presentation.',
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Botanical API'],
    ...FLORA_ORANGE,
    image: '/work/flora.png',
    link: 'https://flora-nu-six.vercel.app',
  },
];

// ---- FLOWER VIDEOS / IMAGES & LAYOUT CONFIG ----
const FLOWER_VIDEOS = {
  big: '/flowers/bloom.mp4',
  amber: null,
  violet: null,
  gold: null,
};

const FLOWER_IMAGES = {
  amber: '/flowers/flower.png',
  violet: '/flowers/flower.png',
  gold: '/flowers/flower.png',
};

const FLOWER_LAYOUT = {
  big:    { x: 50, y: 0, size: 100 },
  amber:  { x: -30, y: -40, size: 60 },
  violet: { x: 84,  y: -50, size: 40 },
  gold:   { x: 70, y: -40,   size: 30 },
};

const PEEK = 16;

const PALETTES = {
  burgundy: ['#1a0504', '#6b1a12', '#d9482b'],
  amber: ['#5a2400', '#c2570c', '#ffb347'],
  violet: ['#2a0505', '#8f1d1d', '#ff6a4a'],
  gold: ['#6b4a00', '#d99a00', '#ffe08a'],
};

const rnd = (i) => {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const RINGS = [
  { n: 13, len: 92, w: 30, tone: 0 },
  { n: 12, len: 78, w: 27, tone: 0.25 },
  { n: 11, len: 64, w: 24, tone: 0.5 },
  { n: 10, len: 50, w: 20, tone: 0.75 },
  { n: 8, len: 34, w: 15, tone: 0.95 },
];

function petalPath(len, w) {
  return `M0 0 C ${w} ${-len * 0.25}, ${w * 0.9} ${-len * 0.85}, 0 ${-len} C ${-w * 0.9} ${-len * 0.85}, ${-w} ${-len * 0.25}, 0 0 Z`;
}

function FlowerArt({ palette }) {
  const uid = useId().replace(/:/g, '');
  const [dark, mid, light] = PALETTES[palette] || PALETTES.burgundy;

  const rings = useMemo(
    () =>
      RINGS.map((r, ri) => ({
        ...r,
        petals: Array.from({ length: r.n }, (_, k) => ({
          rot: (360 / r.n) * k + ri * 13 + (rnd(ri * 50 + k) - 0.5) * 8,
          s: 0.92 + rnd(ri * 90 + k + 3) * 0.16,
        })),
      })),
    []
  );

  return (
    <svg viewBox="-110 -110 220 220" className="h-full w-full overflow-visible">
      <defs>
        {rings.map((r, ri) => (
          <linearGradient key={ri} id={`${uid}-g${ri}`} x1="0" y1="0" x2="0" y2="-1">
            <stop offset="0%" stopColor={dark} />
            <stop offset="55%" stopColor={mid} />
            <stop offset="100%" stopColor={light} stopOpacity={0.6 + r.tone * 0.4} />
          </linearGradient>
        ))}
        <radialGradient id={`${uid}-c`}>
          <stop offset="0%" stopColor={light} />
          <stop offset="100%" stopColor={mid} />
        </radialGradient>
        <filter id={`${uid}-s`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter={`url(#${uid}-s)`}>
        {rings.map((r, ri) => (
          <motion.g
            key={ri}
            variants={{
              closed: { scale: 0.12, rotate: -30, opacity: 0 },
              open: {
                scale: 1,
                rotate: 0,
                opacity: 1,
                transition: { delay: (rings.length - 1 - ri) * 0.28, duration: 1.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
          >
            {r.petals.map((p, k) => (
              <path
                key={k}
                d={petalPath(r.len, r.w)}
                transform={`rotate(${p.rot}) scale(${p.s})`}
                fill={`url(#${uid}-g${ri})`}
                stroke={dark}
                strokeOpacity="0.35"
                strokeWidth="0.6"
              />
            ))}
          </motion.g>
        ))}
        <motion.circle
          r="9"
          fill={`url(#${uid}-c)`}
          variants={{ closed: { scale: 0 }, open: { scale: 1, transition: { delay: 0.1, duration: 0.8 } } }}
          style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
        />
      </g>
    </svg>
  );
}

function BloomVideo({ src, delay = 0, palette }) {
  const ref = useRef(null);
  const timer = useRef(null);
  const [failed, setFailed] = useState(false);
  if (failed) return <FlowerArt palette={palette} />;

  const play = () => {
    const v = ref.current;
    if (!v) return;
    clearTimeout(timer.current);
    v.pause();
    v.currentTime = 0;
    timer.current = setTimeout(() => v.play().catch(() => {}), delay * 1000);
  };

  const reset = () => {
    const v = ref.current;
    clearTimeout(timer.current);
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="h-full w-full"
      onViewportEnter={play}
      onViewportLeave={reset}
      viewport={{ amount: 0.4 }}
    >
      <video
        ref={ref}
        src={src}
        muted
        playsInline
        preload="auto"
        onError={() => setFailed(true)}
        className="h-full w-full object-contain mix-blend-screen"
      />
    </motion.div>
  );
}

function Flower({ palette, src, video, left, top, width, delay = 0 }) {
  return (
    <div
      className="pointer-events-none absolute"
      style={{ left, top, width, aspectRatio: '1 / 1' }}
    >
      <motion.div
        className="h-full w-full"
        initial="closed"
        whileInView="open"
        viewport={{ once: false, amount: 0.2 }}
        style={{ transformOrigin: '50% 85%' }}
        variants={
          src && !video
            ? {
                closed: { scale: 0.05, opacity: 0, rotate: -18 },
                open: { scale: 1, opacity: 1, rotate: 0, transition: { delay, duration: 2.4, ease: [0.16, 1, 0.3, 1] } },
              }
            : {
                closed: { scale: 0.35, opacity: 0 },
                open: { scale: 1, opacity: 1, transition: { delay, delayChildren: delay, duration: 1.8, ease: [0.22, 1, 0.36, 1] } },
              }
        }
      >
        {video ? (
          <BloomVideo src={video} delay={delay} palette={palette} />
        ) : src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt="" className="h-full w-full object-contain drop-shadow-2xl" />
        ) : (
          <FlowerArt palette={palette} />
        )}
      </motion.div>
    </div>
  );
}

function FlowerHeading() {
  return (
    <div className="relative mx-auto max-w-5xl px-6 pb-3 pt-24 text-center sm:pt-28">
      <div className="relative inline-block">
        <Flower palette="burgundy" video={FLOWER_VIDEOS.big} src={FLOWER_IMAGES.big} left={`${FLOWER_LAYOUT.big.x}%`} top={`${FLOWER_LAYOUT.big.y}%`} width={`${FLOWER_LAYOUT.big.size}%`} />
        <Flower palette="amber" video={FLOWER_VIDEOS.amber} src={FLOWER_IMAGES.amber} left={`${FLOWER_LAYOUT.amber.x}%`} top={`${FLOWER_LAYOUT.amber.y}%`} width={`${FLOWER_LAYOUT.amber.size}%`} />
        <Flower palette="violet" video={FLOWER_VIDEOS.violet} src={FLOWER_IMAGES.violet} left={`${FLOWER_LAYOUT.violet.x}%`} top={`${FLOWER_LAYOUT.violet.y}%`} width={`${FLOWER_LAYOUT.violet.size}%`} delay={0.6} />
        <Flower palette="gold" video={FLOWER_VIDEOS.gold} src={FLOWER_IMAGES.gold} left={`${FLOWER_LAYOUT.gold.x}%`} top={`${FLOWER_LAYOUT.gold.y}%`} width={`${FLOWER_LAYOUT.gold.size}%`} delay={1.1} />

        <p
          className="relative z-10 text-[11px] font-light uppercase tracking-[0.45em] sm:text-xs"
          style={{ color: CREAM, opacity: 0.8, fontFamily: "'Jost', sans-serif" }}
        >
          Featured Projects
        </p>
        <h2
          className="relative z-10 mt-2 text-5xl font-light leading-none sm:text-7xl lg:text-8xl"
          style={{
            color: CREAM,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            textShadow: '0 0 40px rgba(255,140,60,0.25)',
          }}
        >
          Recent{' '}
          <em className="bg-gradient-to-r from-[#ffb347] via-[#ff7a30] to-[#e8412f] bg-clip-text italic text-transparent [text-shadow:none]">
            Work
          </em>
        </h2>
      </div>
    </div>
  );
}

function ProjectCard({ project: p, index, total, progress }) {
  const n = total;
  const last = n - 1;

  const yRange = index === 0 ? [0, 1] : [(index - 1) / last, index / last];
  const yOut = index === 0 ? ['0vh', '0vh'] : ['105vh', '0vh'];
  const y = useTransform(progress, yRange, yOut);

  const sRange = index === last ? [0, 1] : [index / last, (index + 1) / last];
  const sOut = index === last ? [1, 1] : [1, 0.94];
  const scale = useTransform(progress, sRange, sOut);

  return (
    <motion.article
      style={{ y, scale, top: `calc(1vh + ${index * PEEK}px)`, zIndex: index + 1 }}
      className={`absolute inset-x-0 mx-auto h-[min(60vh,500px)] w-[min(92vw,1080px)] origin-top overflow-hidden rounded-3xl border shadow-[0_-18px_50px_rgba(0,0,0,0.55)] ${p.card}`}
    >
      <div className={`absolute inset-0 ${p.grid}`} />
      <div className="relative grid h-full gap-6 p-5 sm:p-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10">
        <div className={`hidden flex-col justify-between rounded-2xl border p-5 md:flex ${p.panel}`}>
          <p className={`text-sm font-semibold leading-snug ${p.capColor}`}>{p.caption}</p>
          <div className={`mt-4 flex-1 overflow-hidden rounded-xl border bg-gradient-to-b ${p.shotBorder} ${p.shot}`}>
            {p.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.image} alt={p.title} className="h-full w-full object-cover object-top" />
            ) : (
              <div className="flex h-full flex-col gap-2 p-4">
                <div className={`h-2 w-1/3 rounded ${p.ph1}`} />
                <div className={`h-2 w-2/3 rounded ${p.ph2}`} />
                <div className={`mt-2 flex-1 rounded-lg ${p.ph3}`} />
                <div className={`h-8 rounded-lg ${p.ph2}`} />
              </div>
            )}
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-center">
          <p className={`text-xs tracking-[0.25em] ${p.muted}`}>
            {String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
          </p>
          <h3
            className="mt-2 text-4xl font-light italic sm:text-[44px] sm:leading-tight"
            style={{
              color: p.titleColor,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              textShadow: p.titleGlow,
            }}
          >
            {p.title}
          </h3>
          <p className={`mt-2 text-sm leading-6 sm:text-[15px] ${p.muted}`}>{p.description}</p>
          <ul className={`mt-3 space-y-1.5 text-sm ${p.body}`}>
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-3">
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${p.dot}`} />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className={`rounded-full border px-3 py-1 text-xs ${p.tag}`}>
                {t}
              </span>
            ))}
          </div>

          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 hover:gap-3 ${p.btn}`}
            >
              Visit site
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17L17 7M8 7h9v9" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function RecentWork() {
  const track = useRef(null);
  const n = PROJECTS.length;

  const { scrollYProgress } = useScroll({ target: track, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 });

  return (
    <section id="work" className="relative z-10 bg-black text-white">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap"
      />

      <div ref={track} style={{ height: `${n * 100}vh` }} className="relative z-10">
        <div className="sticky top-0 flex h-screen flex-col">
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <GridTrailFX
              fallback={
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(204,212,230,0.12) 1px, transparent 1.2px)',
                    backgroundSize: '9px 9px',
                  }}
                />
              }
            />
          </div>

          <div className="relative z-10 shrink-0">
            <FlowerHeading />
          </div>
          <div className="relative z-20 flex-1">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} total={n} progress={progress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}