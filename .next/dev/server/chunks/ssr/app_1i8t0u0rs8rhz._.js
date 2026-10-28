(()=>{"use strict";module.exports = [
"[project]/app/components/AboutMe.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InfinityBandScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GridTrailFX$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GridTrailFX.js [app-ssr] (ecmascript)"); // grid + blurry cursor trail (components/GridBG.jsx)
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import GridTrailFX from "./GridTrailFX"; // grid + blurry cursor trail (components/GridBG.jsx)
// /* Your infinity band, same structure as the one you shared (two identical lists = seamless loop).
//    Only changes: the scroll animation is included here (no tailwind config needed),
//    colours are fixed (no bg-primary tokens), and the links are yours to fill in below. */
// // ---- your small "About Me" (shown right after the band) ----
// const ABOUT = {
//   name: "Aarchi Rai",
//   text:
//     "I'm a Next.js developer from Delhi NCR who loves turning ideas into fast, good-looking web apps. I enjoy building end to end, from clean interfaces to the back end behind them, and I'm always learning something new.",
// };
// const GRADIENT_TEXT =
// "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent";
// const CERTIFICATES = [
//   { title: "Hackathon Certificate 1", src: "/certificate/certificate1.jpeg" },
//   { title: "Hackathon Certificate 2", src: "/certificate/certificate2.jpeg" },
//   { title: "Hackathon Certificate 3", src: "/certificate/certificate3.jpeg" },
//   { title: "Hackathon Certificate 4", src: "/certificate/certificate4.jpeg" },
//   { title: "Hackathon Certificate 5", src: "/certificate/certificate5.jpeg" },
//   { title: "Hackathon Certificate 6", src: "/certificate/certificate6.jpeg" },
//   { title: "Hackathon Certificate 7", src: "/certificate/certificate7.jpeg" },
//   { title: "Hackathon Certificate 8", src: "/certificate/certificate8.jpeg" },
//   { title: "Hackathon Certificate 9", src: "/certificate/certificate9.jpeg" },
//   { title: "Hackathon Certificate 10", src: "/certificate/certificate10.jpeg" },
//   { title: "Hackathon Certificate 11", src: "/certificate/certificate11.jpeg" },
//   { title: "Hackathon Certificate 12", src: "/certificate/certificate12.jpeg" },
//   // add more:  { title: "Course name", src: "/about/certificate-4.jpg" },
// ];
// const LINKS = {
//   x: "#", // your X / Twitter link
//   youtube: "#", // your YouTube link
//   github: "#", // your GitHub link
// };
// const X_PATH =
//   "M94.5068 0H112.907L72.7076 46.172L120 109H82.9692L53.9674 70.8942L20.7818 109H2.3693L45.3666 59.6147L0 0H37.9685L64.1848 34.8292L94.5068 0ZM88.0484 97.9318H98.2448L32.4288 10.4872H21.4882L88.0484 97.9318Z";
// const YT_PATH =
//   "M82.4536 97.9153V40.5946C102.803 50.1698 118.563 59.4196 137.202 69.3921C121.829 77.9181 102.803 87.4845 82.4536 97.9153ZM195.858 12.0864C192.348 7.46178 186.366 3.86191 179.996 2.6701C161.275 -0.884977 44.4825 -0.895089 25.7716 2.6701C20.664 3.62759 16.1159 5.94198 12.2089 9.53781C-4.25342 24.8174 0.905084 106.757 4.87314 120.03C6.54174 125.775 8.69882 129.918 11.4154 132.638C14.9154 136.234 19.7075 138.709 25.2119 139.82C40.6263 143.008 120.038 144.791 179.671 140.299C185.165 139.341 190.028 136.785 193.864 133.037C209.085 117.818 208.047 31.2775 195.858 12.0864Z";
// const GH_PATH =
//   "M101 0C156.782 0 202 46.3583 202 103.555C202 149.297 173.094 188.102 132.987 201.808C127.866 202.828 126.048 199.594 126.048 196.837C126.048 193.423 126.169 182.273 126.169 168.416C126.169 158.76 122.937 152.458 119.311 149.246C141.804 146.681 165.438 137.923 165.438 98.1495C165.438 86.8375 161.519 77.6066 155.035 70.3548C156.085 67.7389 159.55 57.2059 154.045 42.9447C154.045 42.9447 145.581 40.1699 126.3 53.5625C118.231 51.2698 109.585 50.1163 101 50.0759C92.415 50.1163 83.7795 51.2698 75.7197 53.5625C56.4186 40.1699 47.9346 42.9447 47.9346 42.9447C42.4503 57.2059 45.9146 67.7389 46.9549 70.3548C40.501 77.6066 36.5519 86.8375 36.5519 98.1495C36.5519 137.822 60.1354 146.714 82.5675 149.33C79.6789 151.916 77.063 156.477 76.154 163.173C70.397 165.819 55.7722 170.399 46.763 154.572C46.763 154.572 41.4201 144.623 31.2797 143.895C31.2797 143.895 21.4322 143.765 30.5929 150.188C30.5929 150.188 37.2084 153.37 41.8039 165.338C41.8039 165.338 47.7326 183.821 75.8308 177.559C75.8813 186.214 75.9722 194.372 75.9722 196.837C75.9722 199.574 74.1138 202.777 69.0739 201.818C28.9365 188.132 0 149.308 0 103.555C0 46.3583 45.2278 0 101 0Z";
// // footer social icons (links come from LINKS above)
// const SOCIALS = [
//   { href: LINKS.x, w: 120, h: 109, path: X_PATH },
//   { href: LINKS.youtube, w: 206, h: 143, path: YT_PATH },
//   { href: LINKS.github, w: 202, h: 202, path: GH_PATH },
// ];
// // ---- the languages shown in the infinity band ----
// // slug = icon name on https://simpleicons.org  (add or remove lines freely)
// const LANGUAGES = [
//   { name: "Python", slug: "python" },
//   { name: "Node.js", slug: "nodedotjs" },
//   { name: "React", slug: "react" },
//   { name: "Next.js", slug: "nextdotjs" },
//   { name: "JavaScript", slug: "javascript" },
//   { name: "TypeScript", slug: "typescript" },
//   { name: "Java", slug: "openjdk" },
//   { name: "HTML", slug: "html5" },
//   { name: "CSS", slug: "css3" },
//   { name: "SQL", slug: "mysql" },
// ];
// // function List({ hidden }) {
// //   return (
// //     <ul
// //       aria-hidden={hidden || undefined}
// //       className="flex shrink-0 items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-8"
// //       style={{ animation: "infinite-scroll 25s linear infinite" }}
// //     >
// //       {LANGUAGES.map((l) => (
// //         <li key={l.slug}>
// //           <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3">
// //             {/* eslint-disable-next-line @next/next/no-img-element */}
// //             <img
// //               src={`https://cdn.simpleicons.org/${l.slug}/white`}
// //               alt=""
// //               width={36}
// //               height={36}
// //               className="h-9 w-9 object-contain"
// //               onError={(e) => {
// //                 e.currentTarget.style.display = "none";
// //               }}
// //             />
// //             <span className="whitespace-nowrap text-lg font-semibold text-white">{l.name}</span>
// //           </div>
// //         </li>
// //       ))}
// //     </ul>
// //   );
// // }
// function List({ hidden }) {
//   return (
//     <ul
//       aria-hidden={hidden || undefined}
//       className="flex shrink-0 items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-8"
//       style={{ animation: "infinite-scroll 25s linear infinite" }}
//     >
//       {LANGUAGES.map((l) => (
//         <li key={l.slug}>
//           {/* Updated border and background subtle glow to match the warm amber/bronze theme */}
//           <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-[#141210]/80 px-4 py-3 shadow-[0_0_15px_rgba(245,158,11,0.05)] transition-colors hover:border-amber-500/40 hover:bg-[#1f1a17]">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={`https://cdn.simpleicons.org/${l.slug}/white`}
//               alt=""
//               width={36}
//               height={36}
//               className="h-9 w-9 object-contain"
//               onError={(e) => {
//                 e.currentTarget.style.display = "none";
//               }}
//             />
//             <span className="whitespace-nowrap text-lg font-semibold text-white">{l.name}</span>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }
// function SmallAbout() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 28 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       className="mx-auto max-w-[1400px] px-6 pb-20 text-left lg:px-20"
//     >
//       {/* <p className="text-base text-neutral-200">About Me</p> */}
//       <h2 className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
//         Hi there! I&apos;m <em className={`italic ${GRADIENT_TEXT}`}>{ABOUT.name}</em>
//       </h2>
//       <p className="mt-6 max-w-2xl text-[15px] leading-7 text-neutral-300 sm:text-base">{ABOUT.text}</p>
//     </motion.div>
//   );
// }
// // ---- footer: edit your email / links here ----
// // const FOOTER = {
// //   email: "amica622@gmail.com",
// //   links: [
// //     { label: "About Me", href: "/about" },
// //     { label: "Projects", href: "/#work" },
// //     { label: "Contact Me", href: "#contact" },
// //   ],
// // };
// // function Footer() {
// //   return (
// //     <footer id="contact" className="border-t border-white/10">
// //       <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 py-12 lg:px-20 md:flex-row md:items-start md:justify-between">
// //         {/* left: name + email */}
// //         <div>
// //           <p className="text-2xl font-black tracking-tighter">portfolio.</p>
// //           <p className="mt-2 text-sm text-neutral-400">{ABOUT.name} · Next.js developer</p>
// //           <a
// //             href={`mailto:${FOOTER.email}`}
// //             className="mt-4 inline-block text-sm text-neutral-300 underline-offset-4 transition-colors hover:text-white hover:underline"
// //           >
// //             {FOOTER.email}
// //           </a>
// //         </div>
// //         {/* middle: links */}
// //         <nav className="flex flex-col gap-2 text-sm text-neutral-400">
// //           {FOOTER.links.map((l) => (
// //             <a key={l.label} href={l.href} className="transition-colors hover:text-white">
// //               {l.label}
// //             </a>
// //           ))}
// //         </nav>
// //         {/* right: social icons */}
// //         <div className="flex items-center gap-3">
// //           {SOCIALS.map((it, i) => (
// //             <a
// //               key={i}
// //               href={it.href}
// //               target="_blank"
// //               rel="noreferrer noopener"
// //               className="grid h-10 w-10 place-content-center rounded-md border border-white/20 bg-white/5 transition-colors hover:bg-white/10"
// //             >
// //               <svg viewBox={`0 0 ${it.w} ${it.h}`} fill="none" className="h-5 w-5 fill-white">
// //                 <path fillRule="evenodd" clipRule="evenodd" d={it.path} />
// //               </svg>
// //             </a>
// //           ))}
// //         </div>
// //       </div>
// //       <div className="border-t border-white/10 py-5 text-center text-xs text-neutral-500">
// //         © {new Date().getFullYear()} {ABOUT.name}. All rights reserved.
// //       </div>
// //     </footer>
// //   );
// // }
// // function CertCard({ c }) {
// //   const [failed, setFailed] = React.useState(false);
// //   return (
// //     <li className="mx-3 shrink-0 sm:mx-5">
// //       <div className="h-48 w-72 overflow-hidden rounded-xl border border-white/15 bg-white shadow-lg sm:h-56 sm:w-80">
// //         {!failed ? (
// //           // eslint-disable-next-line @next/next/no-img-element
// //           <img
// //             src={c.src}
// //             alt={c.title}
// //             loading="lazy"
// //             className="h-full w-full object-contain"
// //             onError={() => setFailed(true)}
// //           />
// //         ) : (
// //           <div className="flex h-full w-full items-center justify-center bg-neutral-900 px-4 text-center text-sm text-neutral-400">
// //             {c.title}
// //             <br />
// //             (add image: {c.src})
// //           </div>
// //         )}
// //       </div>
// //       <p className="mt-2 text-center text-xs text-neutral-400">{c.title}</p>
// //     </li>
// //   );
// // }
// // function CertList({ hidden }) {
// //   return (
// //     <ul
// //       aria-hidden={hidden || undefined}
// //       className="cert-track flex shrink-0 items-start"
// //       style={{ animation: "infinite-scroll 40s linear infinite" }}
// //     >
// //       {CERTIFICATES.map((c, i) => (
// //         <CertCard key={i} c={c} />
// //       ))}
// //     </ul>
// //   );
// // }
// // function CertificatesBand() {
// //   const mask = "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)";
// //   return (
// //     <section className="pb-20">
// //       {/* <div className="mx-auto max-w-[1400px] px-6 lg:px-20">
// //         <p className="text-base text-neutral-200">Certificates</p>
// //         <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
// //           My <em className={`italic ${GRADIENT_TEXT}`}>achievements</em>
// //         </h2>
// //       </div> */}
// //       <div
// //         className="cert-band mt-8 inline-flex w-full flex-nowrap overflow-hidden py-2"
// //         style={{ WebkitMaskImage: mask, maskImage: mask }}
// //       >
// //         <style>{`.cert-band:hover .cert-track { animation-play-state: paused !important; }`}</style>
// //         <CertList />
// //         <CertList hidden />
// //       </div>
// //     </section>
// //   );
// // }
// export default function InfinityBandScroll() {
//   const mask =
//     "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 200px), transparent 100%)";
//   return (
//     <div className="relative">
//       {/* grid + blurry cursor trail, clipped to this section only */}
//       <div aria-hidden className="pointer-events-none absolute inset-0 z-0 [clip-path:inset(0)]">
//         <GridTrailFX />
//       </div>
//       <div className="relative z-10">
//         <div
//           className="mb-16 inline-flex w-full flex-nowrap overflow-hidden py-8 text-5xl md:mb-28"
//           style={{ WebkitMaskImage: mask, maskImage: mask }}
//         >
//           <style>{`@keyframes infinite-scroll { from { transform: translateX(0); } to { transform: translateX(-100%); } }`}</style>
//           <List />
//           <List hidden />
//         </div>
//         {/* small About Me, right after the band */}
//         <SmallAbout />
//         {/* certificates: endless scroll right after About Me */}
//         <CertificatesBand />
//         {/* <Footer /> */}
//       </div>
//     </div>
//   );
// }
"use client";
;
;
;
;
/* Your infinity band, same structure as the one you shared (two identical lists = seamless loop).
   Only changes: the scroll animation is included here (no tailwind config needed),
   colours are fixed (no bg-primary tokens), and the links are yours to fill in below. */ // ---- your small "About Me" (shown right after the band) ----
const ABOUT = {
    name: "Aarchi Rai",
    text: "I'm a Next.js developer from Delhi NCR who loves turning ideas into fast, good-looking web apps. I enjoy building end to end, from clean interfaces to the back end behind them, and I'm always learning something new."
};
const GRADIENT_TEXT = "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent";
const LINKS = {
    x: "#",
    youtube: "#",
    github: "#"
};
const X_PATH = "M94.5068 0H112.907L72.7076 46.172L120 109H82.9692L53.9674 70.8942L20.7818 109H2.3693L45.3666 59.6147L0 0H37.9685L64.1848 34.8292L94.5068 0ZM88.0484 97.9318H98.2448L32.4288 10.4872H21.4882L88.0484 97.9318Z";
const YT_PATH = "M82.4536 97.9153V40.5946C102.803 50.1698 118.563 59.4196 137.202 69.3921C121.829 77.9181 102.803 87.4845 82.4536 97.9153ZM195.858 12.0864C192.348 7.46178 186.366 3.86191 179.996 2.6701C161.275 -0.884977 44.4825 -0.895089 25.7716 2.6701C20.664 3.62759 16.1159 5.94198 12.2089 9.53781C-4.25342 24.8174 0.905084 106.757 4.87314 120.03C6.54174 125.775 8.69882 129.918 11.4154 132.638C14.9154 136.234 19.7075 138.709 25.2119 139.82C40.6263 143.008 120.038 144.791 179.671 140.299C185.165 139.341 190.028 136.785 193.864 133.037C209.085 117.818 208.047 31.2775 195.858 12.0864Z";
const GH_PATH = "M101 0C156.782 0 202 46.3583 202 103.555C202 149.297 173.094 188.102 132.987 201.808C127.866 202.828 126.048 199.594 126.048 196.837C126.048 193.423 126.169 182.273 126.169 168.416C126.169 158.76 122.937 152.458 119.311 149.246C141.804 146.681 165.438 137.923 165.438 98.1495C165.438 86.8375 161.519 77.6066 155.035 70.3548C156.085 67.7389 159.55 57.2059 154.045 42.9447C154.045 42.9447 145.581 40.1699 126.3 53.5625C118.231 51.2698 109.585 50.1163 101 50.0759C92.415 50.1163 83.7795 51.2698 75.7197 53.5625C56.4186 40.1699 47.9346 42.9447 47.9346 42.9447C42.4503 57.2059 45.9146 67.7389 46.9549 70.3548C40.501 77.6066 36.5519 86.8375 36.5519 98.1495C36.5519 137.822 60.1354 146.714 82.5675 149.33C79.6789 151.916 77.063 156.477 76.154 163.173C70.397 165.819 55.7722 170.399 46.763 154.572C46.763 154.572 41.4201 144.623 31.2797 143.895C31.2797 143.895 21.4322 143.765 30.5929 150.188C30.5929 150.188 37.2084 153.37 41.8039 165.338C41.8039 165.338 47.7326 183.821 75.8308 177.559C75.8813 186.214 75.9722 194.372 75.9722 196.837C75.9722 199.574 74.1138 202.777 69.0739 201.818C28.9365 188.132 0 149.308 0 103.555C0 46.3583 45.2278 0 101 0Z";
// footer social icons (links come from LINKS above)
const SOCIALS = [
    {
        href: LINKS.x,
        w: 120,
        h: 109,
        path: X_PATH
    },
    {
        href: LINKS.youtube,
        w: 206,
        h: 143,
        path: YT_PATH
    },
    {
        href: LINKS.github,
        w: 202,
        h: 202,
        path: GH_PATH
    }
];
// ---- the languages shown in the infinity band ----
const LANGUAGES = [
    {
        name: "Python",
        slug: "python"
    },
    {
        name: "Node.js",
        slug: "nodedotjs"
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
        name: "JavaScript",
        slug: "javascript"
    },
    {
        name: "TypeScript",
        slug: "typescript"
    },
    {
        name: "Java",
        slug: "openjdk"
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
    }
];
function List({ hidden }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        "aria-hidden": hidden || undefined,
        className: "flex shrink-0 items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-8",
        style: {
            animation: "infinite-scroll 25s linear infinite"
        },
        children: LANGUAGES.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 rounded-xl border border-amber-500/20 bg-[#141210]/80 px-4 py-3 shadow-[0_0_15px_rgba(245,158,11,0.05)] transition-colors hover:border-amber-500/40 hover:bg-[#1f1a17]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `https://cdn.simpleicons.org/${l.slug}/white`,
                            alt: "",
                            width: 36,
                            height: 36,
                            className: "h-9 w-9 object-contain",
                            onError: (e)=>{
                                e.currentTarget.style.display = "none";
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/AboutMe.js",
                            lineNumber: 368,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "whitespace-nowrap text-lg font-semibold text-white",
                            children: l.name
                        }, void 0, false, {
                            fileName: "[project]/app/components/AboutMe.js",
                            lineNumber: 378,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AboutMe.js",
                    lineNumber: 366,
                    columnNumber: 11
                }, this)
            }, l.slug, false, {
                fileName: "[project]/app/components/AboutMe.js",
                lineNumber: 364,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/AboutMe.js",
        lineNumber: 358,
        columnNumber: 5
    }, this);
}
function SmallAbout() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            duration: 0.7,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: "mx-auto max-w-[1400px] px-6 pb-20 text-left lg:px-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-1 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
                children: [
                    "Hi there! I'm ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        className: `italic ${GRADIENT_TEXT}`,
                        children: ABOUT.name
                    }, void 0, false, {
                        fileName: "[project]/app/components/AboutMe.js",
                        lineNumber: 396,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AboutMe.js",
                lineNumber: 395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-6 max-w-2xl text-[15px] leading-7 text-neutral-300 sm:text-base",
                children: ABOUT.text
            }, void 0, false, {
                fileName: "[project]/app/components/AboutMe.js",
                lineNumber: 398,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AboutMe.js",
        lineNumber: 388,
        columnNumber: 5
    }, this);
}
function InfinityBandScroll() {
    const mask = "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 200px), transparent 100%)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 z-0 [clip-path:inset(0)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GridTrailFX$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/components/AboutMe.js",
                    lineNumber: 410,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/AboutMe.js",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16 inline-flex w-full flex-nowrap overflow-hidden py-8 text-5xl md:mb-28",
                        style: {
                            WebkitMaskImage: mask,
                            maskImage: mask
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                children: `@keyframes infinite-scroll { from { transform: translateX(0); } to { transform: translateX(-100%); } }`
                            }, void 0, false, {
                                fileName: "[project]/app/components/AboutMe.js",
                                lineNumber: 418,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(List, {}, void 0, false, {
                                fileName: "[project]/app/components/AboutMe.js",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(List, {
                                hidden: true
                            }, void 0, false, {
                                fileName: "[project]/app/components/AboutMe.js",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AboutMe.js",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallAbout, {}, void 0, false, {
                        fileName: "[project]/app/components/AboutMe.js",
                        lineNumber: 424,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AboutMe.js",
                lineNumber: 413,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AboutMe.js",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/Certificate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CertificatesBand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const CERTIFICATES = [
    {
        title: "Hackathon Certificate 1",
        src: "/certificate/certificate1.jpeg"
    },
    {
        title: "Hackathon Certificate 2",
        src: "/certificate/certificate2.jpeg"
    },
    {
        title: "Hackathon Certificate 3",
        src: "/certificate/certificate3.jpeg"
    },
    {
        title: "Hackathon Certificate 4",
        src: "/certificate/certificate4.jpeg"
    },
    {
        title: "Hackathon Certificate 5",
        src: "/certificate/certificate5.jpeg"
    },
    {
        title: "Hackathon Certificate 6",
        src: "/certificate/certificate6.jpeg"
    },
    {
        title: "Hackathon Certificate 7",
        src: "/certificate/certificate7.jpeg"
    },
    {
        title: "Hackathon Certificate 8",
        src: "/certificate/certificate8.jpeg"
    },
    {
        title: "Hackathon Certificate 9",
        src: "/certificate/certificate9.jpeg"
    },
    {
        title: "Hackathon Certificate 10",
        src: "/certificate/certificate10.jpeg"
    },
    {
        title: "Hackathon Certificate 11",
        src: "/certificate/certificate11.jpeg"
    },
    {
        title: "Hackathon Certificate 12",
        src: "/certificate/certificate12.jpeg"
    }
];
// Dotted dark background (same as the hero)
// const DOT_BG = {
//   backgroundColor: "#050505",
//   backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1.2px)",
//   backgroundSize: "8px 8px",
// };
const GRID_DARK = 'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[36px_36px]';
const GRID_LIGHT = 'bg-[linear-gradient(rgba(20,80,40,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(20,80,40,0.07)_1px,transparent_1px)] bg-size-[36px_36px]';
function CertCard({ c, onSelect }) {
    const [failed, setFailed] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "mx-3 shrink-0 sm:mx-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>!failed && onSelect(c.src),
                className: "h-48 w-72 cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02] sm:h-56 sm:w-80",
                children: !failed ? // eslint-disable-next-line @next/next/no-img-element
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: c.src,
                    alt: c.title,
                    loading: "lazy",
                    className: "h-full w-full object-cover rounded-xl border border-amber-500/20 shadow-lg",
                    onError: ()=>setFailed(true)
                }, void 0, false, {
                    fileName: "[project]/app/components/Certificate.js",
                    lineNumber: 43,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full w-full items-center justify-center rounded-xl border border-amber-500/20 bg-neutral-900 px-4 text-center text-sm text-neutral-400",
                    children: [
                        c.title,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/app/components/Certificate.js",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        "(add image: ",
                        c.src,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Certificate.js",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Certificate.js",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-center text-xs text-neutral-400 font-medium tracking-wide",
                children: c.title
            }, void 0, false, {
                fileName: "[project]/app/components/Certificate.js",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Certificate.js",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function CertList({ hidden, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        "aria-hidden": hidden || undefined,
        className: "cert-track flex shrink-0 items-start",
        style: {
            animation: "infinite-scroll 45s linear infinite"
        },
        children: CERTIFICATES.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CertCard, {
                c: c,
                onSelect: onSelect
            }, i, false, {
                fileName: "[project]/app/components/Certificate.js",
                lineNumber: 71,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/Certificate.js",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
function CertificatesBand() {
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const mask = "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: GRID_DARK,
        className: "py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cert-band mt-4 inline-flex w-full flex-nowrap overflow-hidden py-4",
                style: {
                    WebkitMaskImage: mask,
                    maskImage: mask
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .cert-band:hover .cert-track {
            animation-play-state: paused !important;
          }
        `
                    }, void 0, false, {
                        fileName: "[project]/app/components/Certificate.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CertList, {
                        onSelect: setSelectedImage
                    }, void 0, false, {
                        fileName: "[project]/app/components/Certificate.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CertList, {
                        hidden: true,
                        onSelect: setSelectedImage
                    }, void 0, false, {
                        fileName: "[project]/app/components/Certificate.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Certificate.js",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setSelectedImage(null),
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-4xl w-full overflow-hidden rounded-2xl border border-amber-500/30 bg-[#141210] p-2 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedImage(null),
                            className: "absolute top-4 right-4 z-10 rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-500 hover:text-black transition-colors",
                            children: "✕ Close"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Certificate.js",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: selectedImage,
                            alt: "Expanded Certificate",
                            className: "w-full h-auto max-h-[80vh] object-contain rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Certificate.js",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Certificate.js",
                    lineNumber: 107,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Certificate.js",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Certificate.js",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/Footer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// /* ======================================================================
//    FOOTER  (put this file in your components folder, then use <Footer /> at
//    the bottom of any page, e.g. under the Recent Work section)
//    Edit everything in the DATA section. The layout code never needs touching.
//    ====================================================================== */
// /* ============================== DATA ============================== */
// const BRAND = {
//   logo: "Aarchi Rai", // or replace the text with an <img> in the Footer below
//   // tagline: "Your Tagline here",
// };
// const ABOUT_TEXT = "We want to help bring talented students and unique startups together.";
// const CONTACT = {
//   phone: "+91 98731 06862",
//   email: "aarchirai3@gmail.com",
// };
// const INFORMATION = [
//   { label: "About Us", href: "/about" },
//   { label: "More Search", href: "/#work" },
//   { label: "Blog", href: "/" },
//   { label: "Testimonials", href: "/" },
//   // { label: "Events", href: "/" },
// ];
// const HELPFUL_LINKS = [
//   { label: "Services", href: "/" },
//   { label: "Supports", href: "/" },
//   // { label: "Terms & Condition", href: "/" },
//   // { label: "Privacy Policy", href: "/" },
// ];
// // Google+ no longer exists, so LinkedIn is used there. Change the href of each one.
// const SOCIALS = [
//   { name: "Facebook", href: "https://facebook.com/" },
//   { name: "LinkedIn", href: "https://linkedin.com/" },
//   { name: "Twitter", href: "https://twitter.com/" },
//   { name: "Instagram", href: "https://instagram.com/" },
// ];
// const COMPANY = "Aarchi Rai";
// // Subscribe form: paste your form service URL here (e.g. a Formspree link like "https://formspree.io/f/xxxxxxx").
// // The email is sent to it as JSON: { email }. While this is empty the form still works on screen
// // (it shows the success message) but nothing is sent anywhere.
// const FORM_ENDPOINT = "";
// /* ============================== COLORS ============================== */
// const ORANGE = "#f7941d";
// /* ============================== ICONS ============================== */
// function Icon({ children, className = "h-4 w-4", fill = "none" }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill={fill}
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//       aria-hidden="true"
//     >
//       {children}
//     </svg>
//   );
// }
// const PhoneIcon = (p) => (
//   <Icon {...p}>
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//   </Icon>
// );
// const MailIcon = (p) => (
//   <Icon {...p}>
//     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//     <polyline points="22,6 12,13 2,6" />
//   </Icon>
// );
// const ArrowUpIcon = (p) => (
//   <Icon {...p}>
//     <polyline points="18 15 12 9 6 15" />
//   </Icon>
// );
// /* ============================== PIECES ============================== */
// function ColumnTitle({ children, className = "" }) {
//   return (
//     <h3 className={`mb-4 text-lg font-medium sm:text-xl ${className}`} style={{ color: ORANGE }}>
//       {children}
//     </h3>
//   );
// }
// function LinkList({ items }) {
//   return (
//     <ul className="space-y-2.5">
//       {items.map((l) => (
//         <li key={l.label}>
//           <Link
//             href={l.href}
//             className="text-[15px] text-neutral-100 transition-colors hover:text-[#f7941d]"
//           >
//             {l.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }
// // ---------- subscribe form ----------
// function SubscribeForm() {
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState("idle");
//   const [message, setMessage] = useState("");
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const form = new FormData(e.currentTarget);
//     if (form.get("website")) return;
//     const value = email.trim();
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
//       setStatus("error");
//       setMessage("Please enter a valid email address.");
//       return;
//     }
//     setStatus("loading");
//     setMessage("");
//     try {
//       if (FORM_ENDPOINT) {
//         const res = await fetch(FORM_ENDPOINT, {
//           method: "POST",
//           headers: { "Content-Type": "application/json", Accept: "application/json" },
//           body: JSON.stringify({ email: value }),
//         });
//         if (!res.ok) throw new Error("Request failed");
//       } else {
//         await new Promise((r) => setTimeout(r, 600));
//       }
//       setStatus("success");
//       setMessage("Thanks for subscribing!");
//       setEmail("");
//     } catch {
//       setStatus("error");
//       setMessage("Something went wrong. Please try again.");
//     }
//   };
//   return (
//     <form onSubmit={onSubmit} noValidate className="w-full max-w-[290px]">
//       <label htmlFor="footer-email" className="sr-only">
//         Email address
//       </label>
//       <div className="flex items-center gap-2.5 rounded-[3px] bg-white px-3 py-2.5">
//         <MailIcon className="h-4 w-4 shrink-0 text-black" />
//         <input
//           id="footer-email"
//           type="email"
//           name="email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//             if (status !== "idle") setStatus("idle");
//           }}
//           placeholder="Enter your Email"
//           autoComplete="email"
//           aria-invalid={status === "error"}
//           aria-describedby="footer-form-msg"
//           className="w-full bg-transparent text-xs text-black placeholder:text-neutral-700 focus:outline-none"
//         />
//       </div>
//       <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
//       <button
//         type="submit"
//         disabled={status === "loading"}
//         className="mt-4 rounded-[3px] px-5 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
//         style={{ backgroundColor: ORANGE }}
//       >
//         {status === "loading" ? "Sending…" : "Subscribe"}
//       </button>
//       <p
//         id="footer-form-msg"
//         role="status"
//         aria-live="polite"
//         className={`mt-3 min-h-[1.25rem] text-xs ${status === "error" ? "text-red-400" : "text-neutral-300"}`}
//       >
//         {message}
//       </p>
//     </form>
//   );
// }
// /* ============================== FOOTER ============================== */
// export default function Footer() {
//   const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-60px" }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className="relative w-full bg-black text-white"
//     >
//       <div className="mx-auto max-w-[1400px] px-6 pb-8 pt-16 lg:px-20">
//         <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.1fr] lg:gap-10">
//           {/* brand + about + contact */}
//           <div>
//             <p className="text-2xl font-bold leading-none">{BRAND.logo}</p>
//             <p className="mt-1.5 text-[11px] text-neutral-300">{BRAND.tagline}</p>
//             <h3 className="mb-3 mt-9 text-base font-medium" style={{ color: ORANGE }}>
//               Contact Us
//             </h3>
//             <ul className="space-y-3 text-sm text-neutral-100">
//               <li className="flex items-center gap-4">
//                 <PhoneIcon className="h-4 w-4 shrink-0" />
//                 <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-[#f7941d]">
//                   {CONTACT.phone}
//                 </a>
//               </li>
//               <li className="flex items-center gap-4">
//                 <MailIcon className="h-4 w-4 shrink-0" />
//                 <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-[#f7941d]">
//                   {CONTACT.email}
//                 </a>
//               </li>
//               </ul>
//         </div>
//           {/* information */}
//           <div>
//             <ColumnTitle>Information</ColumnTitle>
//             <LinkList items={INFORMATION} />
//           </div>
//           {/* helpful links */}
//           <div>
//             <ColumnTitle>Helpful Links</ColumnTitle>
//             <LinkList items={HELPFUL_LINKS} />
//           </div>
//           {/* subscribe + back to top */}
//           <div className="flex flex-col justify-between gap-10">
//             <div>
//               <h3 className="mb-4 text-base font-medium text-white">Subscribe More Info</h3>
//               <SubscribeForm />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="button"
//                 onClick={toTop}
//                 aria-label="Back to top"
//                 className="flex h-[22px] w-[22px] items-center justify-center rounded-[3px] text-white transition-transform hover:-translate-y-0.5"
//                 style={{ backgroundColor: ORANGE }}
//               >
//                 <ArrowUpIcon className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Divider Line Added Here */}
//         <div className="mt-12 h-px w-full bg-neutral-800" />
//         {/* Bottom Copyright / Extra Content (Optional to uncomment if needed) */}
//         <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-neutral-400 sm:flex-row">
//           <p>{new Date().getFullYear()} © {COMPANY}. All Rights Reserved.</p>
//           <p>Designed with care.</p>
//         </div>
//     </div> 
//   </motion.footer>
//   );
// }
"use client";
;
;
;
;
/* ======================================================================
   FOOTER  (put this file in your components folder, then use <Footer /> at
   the bottom of any page, e.g. under the Recent Work section)
   Edit everything in the DATA section. The layout code never needs touching.
   ====================================================================== */ /* ============================== DATA ============================== */ const BRAND = {
    logo: "Aarchi Rai"
};
const CONTACT = {
    phone: "+91 98731 06862",
    email: "aarchirai3@gmail.com"
};
const INFORMATION = [
    {
        label: "About Us",
        href: "/about"
    },
    {
        label: "More Search",
        href: "/#work"
    },
    {
        label: "Blog",
        href: "/"
    },
    {
        label: "Testimonials",
        href: "/"
    }
];
const HELPFUL_LINKS = [
    {
        label: "Services",
        href: "/"
    },
    {
        label: "Supports",
        href: "/"
    }
];
/* ============================== COLORS ============================== */ const ORANGE = "#f7941d";
/* ============================== ICONS ============================== */ function Icon({ children, className = "h-4 w-4", fill = "none" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: fill,
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": "true",
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.js",
        lineNumber: 345,
        columnNumber: 5
    }, this);
}
const PhoneIcon = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.js",
            lineNumber: 362,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.js",
        lineNumber: 361,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MailIcon = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        ...p,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 368,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22,6 12,13 2,6"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 369,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Footer.js",
        lineNumber: 367,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
/* ============================== PIECES ============================== */ function ColumnTitle({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: `mb-4 text-lg font-medium sm:text-xl ${className}`,
        style: {
            color: ORANGE
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.js",
        lineNumber: 377,
        columnNumber: 5
    }, this);
}
function LinkList({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "space-y-2.5",
        children: items.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: l.href,
                    className: "text-[15px] text-neutral-100 transition-colors hover:text-[#f7941d]",
                    children: l.label
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.js",
                    lineNumber: 388,
                    columnNumber: 11
                }, this)
            }, l.label, false, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 387,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.js",
        lineNumber: 385,
        columnNumber: 5
    }, this);
}
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].footer, {
        initial: {
            opacity: 0,
            y: 24
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-60px"
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
        className: "relative w-full bg-black text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1400px] px-6 pb-16 pt-16 lg:px-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold leading-none",
                                children: BRAND.logo
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 415,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[11px] text-neutral-300",
                                children: BRAND.tagline
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 416,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-3 mt-9 text-base font-medium",
                                style: {
                                    color: ORANGE
                                },
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3 text-sm text-neutral-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneIcon, {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 423,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
                                                className: "transition-colors hover:text-[#f7941d]",
                                                children: CONTACT.phone
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 424,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 422,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MailIcon, {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 429,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `mailto:${CONTACT.email}`,
                                                className: "transition-colors hover:text-[#f7941d]",
                                                children: CONTACT.email
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 430,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 428,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.js",
                        lineNumber: 414,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColumnTitle, {
                                children: "Information"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkList, {
                                items: INFORMATION
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 440,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.js",
                        lineNumber: 438,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColumnTitle, {
                                children: "Helpful Links"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 445,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkList, {
                                items: HELPFUL_LINKS
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 446,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.js",
                        lineNumber: 444,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 412,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.js",
            lineNumber: 411,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.js",
        lineNumber: 404,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/Form.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOT_BG",
    ()=>DOT_BG,
    "default",
    ()=>ContactPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Navbar.js [app-ssr] (ecmascript)");
// // "use client";
// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Navbar from "../components/Navbar";
// // /* ======================================================================
// //    CONTACT / PROJECT FORM  ->  lives at /contact   (file: app/contact/page.js)
// //    Wide two-column layout. Messages are emailed straight to EMAIL below.
// //    ====================================================================== */
// // const EMAIL = "aarchirai1@gmail.com";
// // // FormSubmit.co sends every form entry to EMAIL, no account or key needed.
// // // ONE-TIME SETUP: the very first time anyone submits the form, FormSubmit emails
// // // a confirmation link to EMAIL. Open that email and click "Activate". After that
// // // every message arrives in your inbox automatically.
// // const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;
// // const KINDS = ["Website", "Web app", "Landing page", "Portfolio", "AI tool", "Something else"];
// // const GRADIENT_TEXT =
// //   "bg-gradient-to-r from-fuchsia-600 via-purple-500 to-blue-500 bg-clip-text text-transparent";
// // const inputCls =
// //   "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-neutral-500 outline-none transition-colors focus:border-purple-400/70 focus:bg-white/[0.07]";
// // const EMPTY = { name: "", email: "", kind: "Website", details: "" };
// // export default function ContactPage() {
// //   const [form, setForm] = useState(EMPTY);
// //   const [status, setStatus] = useState("idle"); // idle | sending | sent | error
// //   const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
// //   async function onSubmit(e) {
// //     e.preventDefault();
// //     setStatus("sending");
// //     try {
// //       const res = await fetch(ENDPOINT, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json", Accept: "application/json" },
// //         body: JSON.stringify({
// //           _subject: `New project request: ${form.kind} - ${form.name}`,
// //           _replyto: form.email,
// //           _template: "table",
// //           _captcha: "false",
// //           Name: form.name,
// //           Email: form.email,
// //           "What to make": form.kind,
// //           Details: form.details,
// //         }),
// //       });
// //       const data = await res.json().catch(() => ({}));
// //       if (!res.ok || data.success === "false") throw new Error("failed");
// //       setStatus("sent");
// //     } catch {
// //       setStatus("error");
// //     }
// //   }
// //   return (
// //     <div className="relative min-h-screen overflow-x-clip bg-black text-white selection:bg-white selection:text-black">
// //       <Navbar />
// //       <main className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 pt-32 lg:px-20 lg:pt-40">
// //         <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-20">
// //           {/* LEFT: heading + info */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 24 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// //           >
// //             <p className="text-base text-neutral-200">Contact Me</p>
// //             <h1 className="mt-1 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
// //               Let&apos;s build <em className={`italic ${GRADIENT_TEXT}`}>something.</em>
// //             </h1>
// //             <p className="mt-6 max-w-md text-[15px] leading-7 text-neutral-400 sm:text-base">
// //               Tell me who you are and what you&apos;d like me to make. I&apos;ll get back to you soon.
// //             </p>
// //             <div className="mt-10 space-y-3 text-sm text-neutral-400">
// //               <p>
// //                 <span className="text-neutral-500">Email · </span>
// //                 <a href={`mailto:${EMAIL}`} className="text-neutral-200 underline-offset-4 hover:underline">
// //                   {EMAIL}
// //                 </a>
// //               </p>
// //               <p>
// //                 <span className="text-neutral-500">Based in · </span>
// //                 <span className="text-neutral-200">Delhi NCR, India</span>
// //               </p>
// //             </div>
// //           </motion.div>
// //           {/* RIGHT: the form */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 24 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
// //             className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10"
// //           >
// //             <AnimatePresence mode="wait">
// //               {status === "sent" ? (
// //                 <motion.div
// //                   key="done"
// //                   initial={{ opacity: 0, scale: 0.97 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   className="py-16 text-center"
// //                 >
// //                   <p className="text-3xl font-bold">Thank you! 🎉</p>
// //                   <p className="mt-3 text-neutral-400">
// //                     Your request is on its way. I&apos;ll reply to {form.email} soon.
// //                   </p>
// //                   <button
// //                     onClick={() => {
// //                       setForm(EMPTY);
// //                       setStatus("idle");
// //                     }}
// //                     className="mt-8 rounded-full border border-white/20 px-6 py-2.5 text-sm hover:bg-white hover:text-black"
// //                   >
// //                     Send another
// //                   </button>
// //                 </motion.div>
// //               ) : (
// //                 <motion.form
// //                   key="form"
// //                   onSubmit={onSubmit}
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   className="space-y-6"
// //                 >
// //                   {/* name + email side by side */}
// //                   <div className="grid gap-6 sm:grid-cols-2">
// //                     <div>
// //                       <label htmlFor="name" className="mb-2 block text-sm text-neutral-300">
// //                         Your name
// //                       </label>
// //                       <input id="name" required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
// //                     </div>
// //                     <div>
// //                       <label htmlFor="email" className="mb-2 block text-sm text-neutral-300">
// //                         Your email
// //                       </label>
// //                       <input
// //                         id="email"
// //                         type="email"
// //                         required
// //                         value={form.email}
// //                         onChange={set("email")}
// //                         placeholder="you@example.com"
// //                         className={inputCls}
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <span className="mb-2 block text-sm text-neutral-300">What should I make?</span>
// //                     <div className="flex flex-wrap gap-2">
// //                       {KINDS.map((k) => (
// //                         <button
// //                           type="button"
// //                           key={k}
// //                           onClick={() => setForm((f) => ({ ...f, kind: k }))}
// //                           className={`rounded-full border px-4 py-2 text-sm transition-colors ${
// //                             form.kind === k
// //                               ? "border-purple-400 bg-purple-500/20 text-white"
// //                               : "border-white/15 text-neutral-400 hover:text-white"
// //                           }`}
// //                         >
// //                           {k}
// //                         </button>
// //                       ))}
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label htmlFor="details" className="mb-2 block text-sm text-neutral-300">
// //                       Tell me a little more
// //                     </label>
// //                     <textarea
// //                       id="details"
// //                       required
// //                       rows={5}
// //                       value={form.details}
// //                       onChange={set("details")}
// //                       placeholder="What is it for? Any ideas, links or deadline?"
// //                       className={`${inputCls} resize-none`}
// //                     />
// //                   </div>
// //                   <button
// //                     type="submit"
// //                     disabled={status === "sending"}
// //                     className="w-full rounded-xl bg-gradient-to-r from-fuchsia-600 via-purple-500 to-blue-500 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-12"
// //                   >
// //                     {status === "sending" ? "Sending..." : "Send"}
// //                   </button>
// //                   {status === "error" && (
// //                     <p className="text-sm text-red-400">
// //                       Something went wrong. Please try again, or email me directly at {EMAIL}.
// //                     </p>
// //                   )}
// //                 </motion.form>
// //               )}
// //             </AnimatePresence>
// //           </motion.div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }
// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "../components/Navbar";
// /* ======================================================================
//    CONTACT / PROJECT FORM  ->  lives at /contact   (file: app/contact/page.js)
//    Wide two-column layout. Messages are emailed straight to EMAIL below.
//    ====================================================================== */
// const EMAIL = "aarchirai1@gmail.com";
// // FormSubmit.co sends every form entry to EMAIL, no account or key needed.
// const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;
// const KINDS = ["Website", "Web app", "Landing page", "Portfolio", "AI tool", "Something else"];
// // Updated gradient to match the warm amber/orange/red theme
// const GRADIENT_TEXT =
//   "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent";
// // Updated focus ring and border states to use warm amber instead of purple/blue
// const inputCls =
//   "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-neutral-500 outline-none transition-colors focus:border-amber-500/70 focus:bg-white/[0.07]";
// const EMPTY = { name: "", email: "", kind: "Website", details: "" };
// export default function ContactPage() {
//   const [form, setForm] = useState(EMPTY);
//   const [status, setStatus] = useState("idle"); // idle | sending | sent | error
//   const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
//   async function onSubmit(e) {
//     e.preventDefault();
//     setStatus("sending");
//     try {
//       const res = await fetch(ENDPOINT, {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Accept: "application/json" },
//         body: JSON.stringify({
//           _subject: `New project request: ${form.kind} -${form.name}`,
//           _replyto: form.email,
//           _template: "table",
//           _captcha: "false",
//           Name: form.name,
//           Email: form.email,
//           "What to make": form.kind,
//           Details: form.details,
//         }),
//       });
//       const data = await res.json().catch(() => ({}));
//       if (!res.ok || data.success === "false") throw new Error("failed");
//       setStatus("sent");
//     } catch {
//       setStatus("error");
//     }
//   }
//   return (
//     <div className="relative min-h-screen overflow-x-clip bg-black text-white selection:bg-amber-500 selection:text-black">
//       <Navbar />
//       <main className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 pt-32 lg:px-20 lg:pt-40">
//         <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-20">
//           {/* LEFT: heading + info */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <p className="text-base text-neutral-200">Contact Me</p>
//             <h1 className="mt-1 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
//               Let&apos;s build <em className={`italic ${GRADIENT_TEXT}`}>something.</em>
//             </h1>
//             <p className="mt-6 max-w-md text-[15px] leading-7 text-neutral-400 sm:text-base">
//               Tell me who you are and what you&apos;d like me to make. I&apos;ll get back to you soon.
//             </p>
//             <div className="mt-10 space-y-3 text-sm text-neutral-400">
//               <p>
//                 <span className="text-neutral-500">Email · </span>
//                 <a href={`mailto:${EMAIL}`} className="text-neutral-200 underline-offset-4 hover:underline hover:text-amber-400">
//                   {EMAIL}
//                 </a>
//               </p>
//               <p>
//                 <span className="text-neutral-500">Based in · </span>
//                 <span className="text-neutral-200">Delhi NCR, India</span>
//               </p>
//             </div>
//           </motion.div>
//           {/* RIGHT: the form */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//             className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 shadow-[0_0_30px_rgba(245,158,11,0.02)]"
//           >
//             <AnimatePresence mode="wait">
//               {status === "sent" ? (
//                 <motion.div
//                   key="done"
//                   initial={{ opacity: 0, scale: 0.97 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="py-16 text-center"
//                 >
//                   <p className="text-3xl font-bold">Thank you! 🎉</p>
//                   <p className="mt-3 text-neutral-400">
//                     Your request is on its way. I&apos;ll reply to {form.email} soon.
//                   </p>
//                   <button
//                     onClick={() => {
//                       setForm(EMPTY);
//                       setStatus("idle");
//                     }}
//                     className="mt-8 rounded-full border border-amber-500/30 px-6 py-2.5 text-sm hover:bg-amber-500 hover:text-black transition-colors"
//                   >
//                     Send another
//                   </button>
//                 </motion.div>
//               ) : (
//                 <motion.form
//                   key="form"
//                   onSubmit={onSubmit}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="space-y-6"
//                 >
//                   {/* name + email side by side */}
//                   <div className="grid gap-6 sm:grid-cols-2">
//                     <div>
//                       <label htmlFor="name" className="mb-2 block text-sm text-neutral-300">
//                         Your name
//                       </label>
//                       <input id="name" required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="mb-2 block text-sm text-neutral-300">
//                         Your email
//                       </label>
//                       <input
//                         id="email"
//                         type="email"
//                         required
//                         value={form.email}
//                         onChange={set("email")}
//                         placeholder="you@example.com"
//                         className={inputCls}
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <span className="mb-2 block text-sm text-neutral-300">What should I make?</span>
//                     <div className="flex flex-wrap gap-2">
//                       {KINDS.map((k) => (
//                         <button
//                           type="button"
//                           key={k}
//                           onClick={() => setForm((f) => ({ ...f, kind: k }))}
//                           className={`rounded-full border px-4 py-2 text-sm transition-colors ${
//                             form.kind === k
//                               ? "border-amber-500 bg-amber-500/20 text-white"
//                               : "border-white/15 text-neutral-400 hover:text-white"
//                           }`}
//                         >
//                           {k}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="details" className="mb-2 block text-sm text-neutral-300">
//                       Tell me a little more
//             `        </label>
//                     <textarea
//                       id="details"
//                       required
//                       rows={5}
//                       value={form.details}
//                       onChange={set("details")}
//                       placeholder="What is it for? Any ideas, links or deadline?"
//                       className={`${inputCls} resize-none`}
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     disabled={status === "sending"}
//                     className="w-full rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-12 shadow-lg shadow-amber-500/10"
//                   >
//                     {status === "sending" ? "Sending..." : "Send"}
//                   </button>
//                   {status === "error" && (
//                     <p className="text-sm text-red-400">
//                       Something went wrong. Please try again, or email me directly at {EMAIL}.
//                     </p>
//                   )}
//                 </motion.form>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </main>
//   </div>
//   );
// }
"use client";
;
;
;
;
const EMAIL = "aarchirai1@gmail.com";
// FormSubmit.co sends every form entry to EMAIL, no account or key needed.
const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;
const KINDS = [
    "Website",
    "Web app",
    "Landing page",
    "Portfolio",
    "AI tool",
    "Something else"
];
const DOT_BG = {
    backgroundColor: "#050505",
    backgroundImage: `
    linear-gradient(to bottom, #050505 0%, transparent 25%, transparent 75%, #050505 100%),
    radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1.2px)
  `,
    backgroundSize: "100% 100%, 8px 8px"
};
const GRADIENT_TEXT = "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent";
const inputCls = "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-neutral-500 outline-none transition-colors focus:border-amber-500/70 focus:bg-white/[0.07]";
const EMPTY = {
    name: "",
    email: "",
    kind: "Website",
    details: ""
};
function ContactPage() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(EMPTY);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle"); // idle | sending | sent | error
    const set = (k)=>(e)=>setForm((f)=>({
                    ...f,
                    [k]: e.target.value
                }));
    async function onSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch(ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    _subject: `New project request: ${form.kind} - ${form.name}`,
                    _replyto: form.email,
                    _template: "table",
                    _captcha: "false",
                    Name: form.name,
                    Email: form.email,
                    "What to make": form.kind,
                    Details: form.details
                })
            });
            const data = await res.json().catch(()=>({}));
            if (!res.ok || data.success === "false") throw new Error("failed");
            setStatus("sent");
        } catch  {
            setStatus("error");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: DOT_BG,
        className: "relative min-h-screen overflow-x-clip text-white selection:bg-amber-500 selection:text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/Form.js",
                lineNumber: 496,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-10 mx-auto max-w-[1400px] px-6 pb-24 pt-32 lg:px-20 lg:pt-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base text-neutral-200",
                                    children: "Contact Me"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Form.js",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-1 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl",
                                    children: [
                                        "Let's build ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            className: `italic ${GRADIENT_TEXT}`,
                                            children: "something."
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 508,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Form.js",
                                    lineNumber: 507,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 max-w-md text-[15px] leading-7 text-neutral-400 sm:text-base",
                                    children: "Tell me who you are and what you'd like me to make. I'll get back to you soon."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Form.js",
                                    lineNumber: 510,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 space-y-3 text-sm text-neutral-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-neutral-500",
                                                    children: "Email · "
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 516,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `mailto:${EMAIL}`,
                                                    className: "text-neutral-200 underline-offset-4 hover:underline hover:text-amber-400",
                                                    children: EMAIL
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 517,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-neutral-500",
                                                    children: "Based in · "
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 522,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-neutral-200",
                                                    children: "Delhi NCR, India"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 523,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 521,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Form.js",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Form.js",
                            lineNumber: 501,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.7,
                                delay: 0.1,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            className: "rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm sm:p-10 shadow-[0_0_30px_rgba(245,158,11,0.02)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: status === "sent" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.97
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    className: "py-16 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl font-bold",
                                            children: "Thank you! 🎉"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 543,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-neutral-400",
                                            children: [
                                                "Your request is on its way. I'll reply to ",
                                                form.email,
                                                " soon."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 544,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setForm(EMPTY);
                                                setStatus("idle");
                                            },
                                            className: "mt-8 rounded-full border border-amber-500/30 px-6 py-2.5 text-sm hover:bg-amber-500 hover:text-black transition-colors",
                                            children: "Send another"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 547,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, "done", true, {
                                    fileName: "[project]/app/components/Form.js",
                                    lineNumber: 537,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].form, {
                                    onSubmit: onSubmit,
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-6 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "name",
                                                            className: "mb-2 block text-sm text-neutral-300",
                                                            children: "Your name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Form.js",
                                                            lineNumber: 568,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "name",
                                                            required: true,
                                                            value: form.name,
                                                            onChange: set("name"),
                                                            placeholder: "Your name",
                                                            className: inputCls
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Form.js",
                                                            lineNumber: 571,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 567,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "email",
                                                            className: "mb-2 block text-sm text-neutral-300",
                                                            children: "Your email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Form.js",
                                                            lineNumber: 574,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "email",
                                                            type: "email",
                                                            required: true,
                                                            value: form.email,
                                                            onChange: set("email"),
                                                            placeholder: "you@example.com",
                                                            className: inputCls
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Form.js",
                                                            lineNumber: 577,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 573,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 566,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mb-2 block text-sm text-neutral-300",
                                                    children: "What should I make?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 590,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: KINDS.map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setForm((f)=>({
                                                                        ...f,
                                                                        kind: k
                                                                    })),
                                                            className: `rounded-full border px-4 py-2 text-sm transition-colors ${form.kind === k ? "border-amber-500 bg-amber-500/20 text-white" : "border-white/15 text-neutral-400 hover:text-white"}`,
                                                            children: k
                                                        }, k, false, {
                                                            fileName: "[project]/app/components/Form.js",
                                                            lineNumber: 593,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 591,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 589,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "details",
                                                    className: "mb-2 block text-sm text-neutral-300",
                                                    children: "Tell me a little more"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 610,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "details",
                                                    required: true,
                                                    rows: 5,
                                                    value: form.details,
                                                    onChange: set("details"),
                                                    placeholder: "What is it for? Any ideas, links or deadline?",
                                                    className: `${inputCls} resize-none`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 613,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 609,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: status === "sending",
                                            className: "w-full rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-12 shadow-lg shadow-amber-500/10",
                                            children: status === "sending" ? "Sending..." : "Send"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 624,
                                            columnNumber: 19
                                        }, this),
                                        status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-400",
                                            children: [
                                                "Something went wrong. Please try again, or email me directly at ",
                                                EMAIL,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 633,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, "form", true, {
                                    fileName: "[project]/app/components/Form.js",
                                    lineNumber: 558,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Form.js",
                                lineNumber: 535,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Form.js",
                            lineNumber: 529,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Form.js",
                    lineNumber: 499,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Form.js",
                lineNumber: 498,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Form.js",
        lineNumber: 492,
        columnNumber: 5
    }, this);
}
}),
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
// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { createPortal } from 'react-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useLenis } from 'lenis/react';
// const LINKS = [
//   { label: 'About Me', href: '/about' }, // opens the separate About page
//   { label: 'Projects', href: '/project' }, // scrolls to your Recent Work section on the home page
//   { label: 'Contact Me', href: '/#contact' },
// ];
// const NEAR = 70; // px: how close the cursor must get to a link for its underline to appear
// const NAV_HEIGHT = 80; // px: space left above a section so the navbar doesn't cover its heading
// const HOME_INTRO_MS = 4700; // home page intro (logo + doors) length; hash scroll waits for it
// function distanceToRect(x, y, r) {
//   const dx = Math.max(r.left - x, 0, x - r.right);
//   const dy = Math.max(r.top - y, 0, y - r.bottom);
//   return Math.hypot(dx, dy);
// }
// const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
// export default function Navbar() {
//   const refs = useRef([]);
//   const pathname = usePathname();
//   const lenis = useLenis();
//   const [mounted, setMounted] = useState(false);
//   const [near, setNear] = useState(null);
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => setMounted(true), []);
//   const scrollToTop = () =>
//     lenis
//       ? lenis.scrollTo(0, { duration: 1.4, easing: easeOutQuart })
//       : window.scrollTo({ top: 0, behavior: 'smooth' });
//   const scrollToTarget = (target, duration) => {
//     if (lenis) {
//       lenis.scrollTo(target, { offset: -NAV_HEIGHT, duration, easing: easeOutQuart });
//     } else {
//       const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
//       window.scrollTo({ top, behavior: 'smooth' });
//     }
//   };
//   const handleClick = (e, href) => {
//     setOpen(false);
//     // section links (/#work, /#contact) while already on the home page: smooth scroll
//     if (href.startsWith('/#') && pathname === '/') {
//       e.preventDefault();
//       const target = document.querySelector(href.replace('/#', '#'));
//       if (!target) return;
//       const distance = Math.abs(target.getBoundingClientRect().top);
//       const duration = Math.min(2, Math.max(0.9, distance / 3000 + 0.7));
//       scrollToTarget(target, duration);
//     }
//     // everything else (like /about, or /#work from another page) is a normal page navigation
//   };
//   // arriving on the home page from another page with a #section in the link: scroll to it
//   // once the home intro has finished (the page can't scroll while the intro plays)
//   useEffect(() => {
//     if (pathname !== '/') return;
//     const hash = window.location.hash;
//     if (!hash) return;
//     const t = setTimeout(() => {
//       const target = document.querySelector(hash);
//       if (target) scrollToTarget(target, 1.2);
//     }, HOME_INTRO_MS);
//     return () => clearTimeout(t);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname, lenis]);
//   // proximity detection
//   useEffect(() => {
//     let frame = 0;
//     const onMove = (e) => {
//       cancelAnimationFrame(frame);
//       frame = requestAnimationFrame(() => {
//         let best = null;
//         let bestDist = NEAR;
//         refs.current.forEach((el, i) => {
//           if (!el) return;
//           const d = distanceToRect(e.clientX, e.clientY, el.getBoundingClientRect());
//           if (d < bestDist) {
//             bestDist = d;
//             best = i;
//           }
//         });
//         setNear((prev) => (prev === best ? prev : best));
//       });
//     };
//     const onLeave = () => setNear(null);
//     window.addEventListener('mousemove', onMove, { passive: true });
//     document.documentElement.addEventListener('mouseleave', onLeave);
//     return () => {
//       cancelAnimationFrame(frame);
//       window.removeEventListener('mousemove', onMove);
//       document.documentElement.removeEventListener('mouseleave', onLeave);
//     };
//   }, []);
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);
//   if (!mounted) return null;
//   return createPortal(
//     <header
//       style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}
//       className={`transition-colors duration-300 ${
//         scrolled ? 'border-b border-white/10 bg-black/60 backdrop-blur-md' : 'bg-transparent'
//       }`}
//     >
//       <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 text-white lg:px-[4vw]">
//         {/* Logo: home page (or back to the top if already there) */}
//         <Link
//           href="/"
//           onClick={(e) => {
//             if (pathname === '/') {
//               e.preventDefault();
//               scrollToTop();
//             }
//           }}
//           className="text-2xl font-black tracking-tighter text-white"
//         >
//           portfolio.
//         </Link>
//         {/* Desktop links */}
//         <ul className="hidden items-center gap-10 md:flex">
//           {LINKS.map((link, i) => {
//             const active = near === i || pathname === link.href;
//             return (
//               <li key={link.label}>
//                 <Link
//                   href={link.href}
//                   onClick={(e) => handleClick(e, link.href)}
//                   ref={(el) => (refs.current[i] = el)}
//                   className={`relative inline-block py-1 text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
//                     active ? 'text-white' : 'text-neutral-400'
//                   }`}
//                 >
//                   {link.label}
//                   <motion.span
//                     initial={false}
//                     animate={{ scaleX: active ? 1 : 0 }}
//                     transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//                     style={{ transformOrigin: active ? 'left' : 'right' }}
//                     className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
//                   />
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//         {/* Mobile menu button */}
//         <button
//           onClick={() => setOpen((o) => !o)}
//           aria-label="Toggle menu"
//           className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
//         >
//           <span className={`h-0.5 w-6 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
//           <span className={`h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`} />
//           <span className={`h-0.5 w-6 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
//         </button>
//       </nav>
//       {/* Mobile menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.ul
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-md md:hidden"
//           >
//             {LINKS.map((link) => (
//               <li key={link.label}>
//                 <Link
//                   href={link.href}
//                   onClick={(e) => handleClick(e, link.href)}
//                   className="block px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-neutral-300"
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </header>,
//     document.body
//   );
// }
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
        href: '/project'
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
    const handleClick = (e, href)=>{
        setOpen(false);
        // section links (/#work, /#contact) while already on the home page: smooth scroll
        if (href.startsWith('/#') && pathname === '/') {
            e.preventDefault();
            const target = document.querySelector(href.replace('/#', '#'));
            if (!target) return;
            const distance = Math.abs(target.getBoundingClientRect().top);
            const duration = Math.min(2, Math.max(0.9, distance / 3000 + 0.7));
            scrollToTarget(target, duration);
        }
    // everything else (like /about, or /#work from another page) is a normal page navigation
    };
    // arriving on the home page from another page with a #section in the link: scroll to it
    // once the home intro has finished (the page can't scroll while the intro plays)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pathname !== '/') return;
        const hash = window.location.hash;
        if (!hash) return;
        const t = setTimeout(()=>{
            const target = document.querySelector(hash);
            if (target) scrollToTarget(target, 1.2);
        }, HOME_INTRO_MS);
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
                        lineNumber: 339,
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
                                            lineNumber: 367,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Navbar.js",
                                    lineNumber: 358,
                                    columnNumber: 17
                                }, this)
                            }, link.label, false, {
                                fileName: "[project]/app/components/Navbar.js",
                                lineNumber: 357,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.js",
                        lineNumber: 353,
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
                                lineNumber: 386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.js",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-0.5 w-6 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.js",
                                lineNumber: 388,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.js",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.js",
                lineNumber: 337,
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
                                lineNumber: 403,
                                columnNumber: 17
                            }, this)
                        }, link.label, false, {
                            fileName: "[project]/app/components/Navbar.js",
                            lineNumber: 402,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/Navbar.js",
                    lineNumber: 395,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.js",
                lineNumber: 393,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Navbar.js",
        lineNumber: 331,
        columnNumber: 5
    }, this), document.body);
}
}),
"[project]/app/components/RecentWork.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecentWork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GridTrailFX$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GridTrailFX.js [app-ssr] (ecmascript)");
// 'use client';
// import { useId, useMemo, useRef, useState } from 'react';
// import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// import GridTrailFX from './GridTrailFX';
// /* ======================================================================
//    RECENT WORK  (components/RecentWork.jsx)
//    Theme: pure black, with small warm accents (cream heading, orange details).
//    - Card 1 is already in place under the heading (no empty stage).
//    - Scroll: the stage pins and cards 2, 3, 4 slide up and stack over it.
//    - Needs NO overflow-hidden/auto ancestor (overflow-x-clip is fine).
//    ====================================================================== */
// // ---- THEME COLORS (edit here) ----
// const CREAM = '#ffe6cc';
// const ORANGE = '#ff8a3d';
// // shared card styling (same look for every card, only the depth of the dark changes)
// const THEME = {
//   shot: 'from-white/10 to-white/[0.02]',
//   capColor: 'text-neutral-200',
//   dot: 'bg-[#ff8a3d]',
//   tag: 'bg-white/5 text-neutral-200 border-white/15',
//   muted: 'text-neutral-400',
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
//     card: 'bg-gradient-to-br from-[#161616] to-[#050505] border-white/10',
//     ...THEME,
//     link: 'https://chatter-box-blue-rho.vercel.app/',
//   },
//   // Add other projects here...
//   {
//     title: 'ResumeAI Pro',
//     caption: 'AI-powered resume builder with live preview.',
//     description:
//       'Create, edit and export professional resumes with tailored bullet points, summaries and drag-and-drop ordering.',
//     points: [
//       'AI bullet points tailored to a job description (Gemini).',
//       'Real-time WYSIWYG preview with PDF, TXT and JSON export.',
//       'Drag-and-drop section ordering and docx import/export.',
//     ],
//     tags: ['Next.js 15', 'React', 'Firebase', 'Gemini API', 'react-pdf', 'framer-motion'],
//     card: 'bg-gradient-to-br from-[#131313] to-[#050505] border-white/10',
//     ...THEME,
//     image: null,
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
//     card: 'bg-gradient-to-br from-[#101010] to-[#050505] border-white/10',
//     ...THEME,
//     image: null,
//   },
//   {
//     title: 'CodeWing',
//     caption: 'Early access to beta apps, with a clean way to submit ideas.',
//     description:
//       'A platform that gives Apple users early access to beta apps, and lets developers submit their ideas for users to browse.',
//     points: [
//       'Partial Prerendering and After for faster loading.',
//       'Clean, intuitive idea-submission flow.',
//       'Seamless browsing with optimised performance.',
//     ],
//     tags: ['Next.js', 'React', 'Tailwind', 'Firebase', 'PostgreSQL', 'Auth.js'],
//     card: 'bg-gradient-to-br from-[#0d0d0d] to-[#050505] border-white/10',
//     ...THEME,
//     image: null,
//   },
// ];
// // ---- YOUR FLOWER VIDEOS (put the files in /public/flowers/) ----
// // Use a clip filmed on a BLACK background. Set a path, or null to keep the drawn flower.
// const FLOWER_VIDEOS = {
//   big: '/flowers/bloom.mp4', // big bottom-left flower
//   amber: null, // e.g. '/flowers/bloom-2.mp4'
//   violet: null,
//   gold: null,
// };
// // ---- YOUR FLOWER IMAGES (transparent PNG/WebP in /public/flowers/) ----
// // Used when there is no video for that flower. null = keep the drawn flower.
// const FLOWER_IMAGES = {
//   big: '/flowers/flower.png', // e.g. '/flowers/flower-1.png'
//   amber: '/flowers/flower.png',
//   violet: '/flowers/flower.png',
//   gold: '/flowers/flower.png',
// };
// // ---- FLOWER POSITION & SIZE (edit these numbers) ----
// // x = left/right, y = up/down, size = width of the flower.
// // All values are % of the "Recent Work" heading box. Examples:
// //   x: 0 = at the heading's left edge, 100 = at its right edge, negative = further left
// //   y: 0 = at the heading's top edge,  100 = at its bottom edge, negative = further up
// //   size: 30 = flower is 30% as wide as the heading text
// const FLOWER_LAYOUT = {
//   big:    { x: 50, y: 0, size: 100 }, // big bottom-left flower
//   amber:  { x: -30, y: -40, size: 60 }, // top-right, largest
//   violet: { x: 84,  y: -50, size: 40 }, // top-right, medium
//   gold:   { x: 70, y: -40,   size: 30 }, // top-right, small
// };
// const PEEK = 16; // px each stacked card shows above the next
// const GRID =
//   'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[36px_36px]';
// /* ----------------------------- flowers ----------------------------- */
// // drawn flowers use warm ember colors too (only shown when no image/video is set)
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
// // outer ring first, inner rings drawn on top
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
//                 // inner rings open first, outer rings last
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
// // Real bloom: a time-lapse video of a flower opening, shot on a BLACK background.
// // mix-blend-screen makes the black vanish on the dark page, so no cut-out is needed.
// // Plays once when it scrolls into view and holds on the last (fully open) frame.
// function BloomVideo({ src, delay = 0, palette }) {
//   const ref = useRef(null);
//   const timer = useRef(null);
//   const [failed, setFailed] = useState(false);
//   if (failed) return <FlowerArt palette={palette} />; // video missing -> drawn flower
//   // start from the first frame every time you arrive at this section
//   const play = () => {
//     const v = ref.current;
//     if (!v) return;
//     clearTimeout(timer.current);
//     v.pause();
//     v.currentTime = 0;
//     timer.current = setTimeout(() => v.play().catch(() => {}), delay * 1000);
//   };
//   // leaving the section: stop and rewind, ready for next time
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
// // `src` = optional transparent PNG (e.g. '/flower.png') for a photoreal flower
// function Flower({ palette, src, video, left, top, width, delay = 0 }) {
//   return (
//     <div
//       className="pointer-events-none absolute"
//       style={{ left, top, width, aspectRatio: '1 / 1' }}
//     >
//       {/* bloom: starts as a small bud, then opens when it scrolls into view */}
//       <motion.div
//         className="h-full w-full"
//         initial="closed"
//         whileInView="open"
//         viewport={{ once: false, amount: 0.2 }}
//         style={{ transformOrigin: '50% 85%' }}
//         variants={
//           src && !video
//             ? {
//                 // photo flower: tiny bud -> full size, with a little turn as it opens
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
//         {/* big flower, bottom-left */}
//         <Flower palette="burgundy" video={FLOWER_VIDEOS.big} src={FLOWER_IMAGES.big} left={`${FLOWER_LAYOUT.big.x}%`} top={`${FLOWER_LAYOUT.big.y}%`} width={`${FLOWER_LAYOUT.big.size}%`} />
//         {/* cluster, top-right */}
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
//   // Card 0 never moves in: it is already in place. Cards 1.. slide up during their slice.
//   const yRange = index === 0 ? [0, 1] : [(index - 1) / last, index / last];
//   const yOut = index === 0 ? ['0vh', '0vh'] : ['105vh', '0vh'];
//   const y = useTransform(progress, yRange, yOut);
//   // when the next card covers this one, shrink it slightly (stacking depth)
//   const sRange = index === last ? [0, 1] : [index / last, (index + 1) / last];
//   const sOut = index === last ? [1, 1] : [1, 0.94];
//   const scale = useTransform(progress, sRange, sOut);
//   return (
//     <motion.article
//       style={{ y, scale, top: `calc(1vh + ${index * PEEK}px)`, zIndex: index + 1 }}
//       className={`absolute inset-x-0 mx-auto h-[min(60vh,500px)] w-[min(92vw,1080px)] origin-top overflow-hidden rounded-3xl border shadow-[0_-18px_50px_rgba(0,0,0,0.55)] ${p.card}`}
//     >
//       <div className={`absolute inset-0 ${GRID}`} />
//       <div className="relative grid h-full gap-6 p-5 sm:p-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10">
//         {/* left: caption + screenshot */}
//         <div className="hidden flex-col justify-between rounded-2xl border border-white/10 bg-black/25 p-5 md:flex">
//           <p className={`text-sm font-semibold leading-snug ${p.capColor}`}>{p.caption}</p>
//           <div className={`mt-4 flex-1 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b ${p.shot}`}>
//             {p.image ? (
//               // eslint-disable-next-line @next/next/no-img-element
//               <img src={p.image} alt={p.title} className="h-full w-full object-cover object-top" />
//             ) : (
//               <div className="flex h-full flex-col gap-2 p-4">
//                 <div className="h-2 w-1/3 rounded bg-white/25" />
//                 <div className="h-2 w-2/3 rounded bg-white/10" />
//                 <div className="mt-2 flex-1 rounded-lg bg-black/30" />
//                 <div className="h-8 rounded-lg bg-white/10" />
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
//             className="mt-2 text-4xl font-light italic sm:text-5xl"
//             style={{
//               color: CREAM,
//               fontFamily: "'Cormorant Garamond', Georgia, serif",
//               textShadow: '0 0 30px rgba(255,140,60,0.35)',
//             }}
//           >
//             {p.title}
//           </h3>
//           <p className={`mt-3 text-sm leading-6 sm:text-[15px] ${p.muted}`}>{p.description}</p>
//           <ul className="mt-4 space-y-2 text-sm text-[#ffe6cc]/90">
//             {p.points.map((pt) => (
//               <li key={pt} className="flex gap-3">
//                 <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${p.dot}`} />
//                 <span>{pt}</span>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-5 flex flex-wrap gap-2">
//             {p.tags.map((t) => (
//               <span key={t} className={`rounded-full border px-3 py-1 text-xs ${p.tag}`}>
//                 {t}
//               </span>
//             ))}
//           </div>
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
//       {/* grid + blurry cursor trail, clipped so it shows ONLY inside this section */}
//       <div aria-hidden className="pointer-events-none absolute inset-0 z-0 [clip-path:inset(0)]">
//         <GridTrailFX />
//       </div>
//       {/* tall track: the stage inside pins while you scroll through it */}
//       <div ref={track} style={{ height: `${n * 100}vh` }} className="relative z-10">
//         <div className="sticky top-0 flex h-screen flex-col">
//           {/* heading stays pinned while the cards stack below it */}
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
;
;
;
;
/* ======================================================================
   RECENT WORK  (components/RecentWork.jsx)
   Theme: pure black, with small warm accents (cream heading, orange details).
   - Card 1 is already in place under the heading (no empty stage).
   - Scroll: the stage pins and cards 2, 3, 4 slide up and stack over it.
   - Each project can have its own colour (see GREEN below) and a `link`
     that shows a "Visit site" button.
   - Needs NO overflow-hidden/auto ancestor (overflow-x-clip is fine).
   ====================================================================== */ // ---- THEME COLORS (edit here) ----
const CREAM = '#ffe6cc';
const ORANGE = '#ff8a3d';
const GRID_DARK = 'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[36px_36px]';
const GRID_LIGHT = 'bg-[linear-gradient(rgba(20,80,40,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(20,80,40,0.07)_1px,transparent_1px)] bg-size-[36px_36px]';
// default (dark) card look. Every project spreads this unless it has its own colours.
const THEME = {
    shot: 'from-white/10 to-white/[0.02]',
    capColor: 'text-neutral-200',
    dot: 'bg-[#ff8a3d]',
    tag: 'bg-white/5 text-neutral-200 border-white/15',
    muted: 'text-neutral-400',
    grid: GRID_DARK,
    panel: 'border-white/10 bg-black/25',
    shotBorder: 'border-white/10',
    ph1: 'bg-white/25',
    ph2: 'bg-white/10',
    ph3: 'bg-black/30',
    titleColor: CREAM,
    titleGlow: '0 0 30px rgba(255,140,60,0.35)',
    body: 'text-[#ffe6cc]/90',
    btn: 'bg-[#ffe6cc] text-[#1a0a04] hover:bg-white'
};
// light green card (Chatterbox). Copy this block to give another project its own colour.
const GREEN = {
    card: 'bg-gradient-to-br from-[#eaf9e2] to-[#b8e6ae] border-[#7cc274]/60',
    shot: 'from-[#6fbf6a]/30 to-white/50',
    capColor: 'text-[#1d4a2a]',
    dot: 'bg-[#2f8f46]',
    tag: 'bg-[#2f8f46]/10 text-[#1d4a2a] border-[#2f8f46]/35',
    muted: 'text-[#3d6a48]',
    grid: GRID_LIGHT,
    panel: 'border-[#2f8f46]/25 bg-white/45',
    shotBorder: 'border-[#2f8f46]/25',
    ph1: 'bg-[#2f8f46]/35',
    ph2: 'bg-[#2f8f46]/20',
    ph3: 'bg-white/50',
    titleColor: '#12391f',
    titleGlow: 'none',
    body: 'text-[#1b3a26]',
    btn: 'bg-[#12391f] text-[#eaf9e2] hover:bg-[#0b2714]'
};
const PROJECTS = [
    {
        title: 'Chatterbox',
        caption: 'Practice, record, and get feedback to improve your speaking skills.',
        description: 'An interactive web app featuring random topics, interview preparation prompts, and vocabulary learning tools with custom timers and recording features.',
        points: [
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
        ],
        card: 'bg-gradient-to-br from-[#101714] to-[#070b09] border-emerald-500/30 shadow-lg shadow-emerald-900/10',
        image: "/work/chatterbox.png",
        link: 'https://chatter-box-blue-rho.vercel.app/'
    },
    // Add other projects here...
    {
        title: 'ResumeAI Pro',
        caption: 'AI-powered resume builder with live preview.',
        description: 'Create, edit and export professional resumes with tailored bullet points, summaries and drag-and-drop ordering.',
        points: [
            'AI bullet points tailored to a job description (Gemini).',
            'Real-time WYSIWYG preview with PDF, TXT and JSON export.',
            'Drag-and-drop section ordering and docx import/export.'
        ],
        tags: [
            'Next.js 15',
            'React',
            'Firebase',
            'Gemini API',
            'react-pdf',
            'framer-motion'
        ],
        card: 'bg-gradient-to-br from-[#131313] to-[#050505] border-white/10',
        ...THEME,
        image: null,
        link: null
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
        // card: 'bg-gradient-to-br from-[#101010] to-[#050505] border-white/10',
        card: 'bg-gradient-to-br from-[#10192e] to-[#0a0f1d] border-blue-500/30 shadow-lg shadow-blue-500/10',
        ...THEME,
        image: null,
        link: 'https://dermasetu.vercel.app/dashboard'
    },
    {
        title: 'CodeWing',
        caption: 'Early access to beta apps, with a clean way to submit ideas.',
        description: 'A platform that gives Apple users early access to beta apps, and lets developers submit their ideas for users to browse.',
        points: [
            'Partial Prerendering and After for faster loading.',
            'Clean, intuitive idea-submission flow.',
            'Seamless browsing with optimised performance.'
        ],
        tags: [
            'Next.js',
            'React',
            'Tailwind',
            'Firebase',
            'PostgreSQL',
            'Auth.js'
        ],
        card: 'bg-gradient-to-br from-[#0d0d0d] to-[#050505] border-white/10',
        ...THEME,
        image: null,
        link: null
    }
];
// ---- YOUR FLOWER VIDEOS (put the files in /public/flowers/) ----
// Use a clip filmed on a BLACK background. Set a path, or null to keep the drawn flower.
const FLOWER_VIDEOS = {
    big: '/flowers/bloom.mp4',
    amber: null,
    violet: null,
    gold: null
};
// ---- YOUR FLOWER IMAGES (transparent PNG/WebP in /public/flowers/) ----
// Used when there is no video for that flower. null = keep the drawn flower.
const FLOWER_IMAGES = {
    big: '/flowers/flower.png',
    amber: '/flowers/flower.png',
    violet: '/flowers/flower.png',
    gold: '/flowers/flower.png'
};
// ---- FLOWER POSITION & SIZE (edit these numbers) ----
// x = left/right, y = up/down, size = width of the flower.
// All values are % of the "Recent Work" heading box. Examples:
//   x: 0 = at the heading's left edge, 100 = at its right edge, negative = further left
//   y: 0 = at the heading's top edge,  100 = at its bottom edge, negative = further up
//   size: 30 = flower is 30% as wide as the heading text
const FLOWER_LAYOUT = {
    big: {
        x: 50,
        y: 0,
        size: 100
    },
    amber: {
        x: -30,
        y: -40,
        size: 60
    },
    violet: {
        x: 84,
        y: -50,
        size: 40
    },
    gold: {
        x: 70,
        y: -40,
        size: 30
    }
};
const PEEK = 16; // px each stacked card shows above the next
/* ----------------------------- flowers ----------------------------- */ // drawn flowers use warm ember colors too (only shown when no image/video is set)
const PALETTES = {
    burgundy: [
        '#1a0504',
        '#6b1a12',
        '#d9482b'
    ],
    amber: [
        '#5a2400',
        '#c2570c',
        '#ffb347'
    ],
    violet: [
        '#2a0505',
        '#8f1d1d',
        '#ff6a4a'
    ],
    gold: [
        '#6b4a00',
        '#d99a00',
        '#ffe08a'
    ]
};
const rnd = (i)=>{
    const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
};
// outer ring first, inner rings drawn on top
const RINGS = [
    {
        n: 13,
        len: 92,
        w: 30,
        tone: 0
    },
    {
        n: 12,
        len: 78,
        w: 27,
        tone: 0.25
    },
    {
        n: 11,
        len: 64,
        w: 24,
        tone: 0.5
    },
    {
        n: 10,
        len: 50,
        w: 20,
        tone: 0.75
    },
    {
        n: 8,
        len: 34,
        w: 15,
        tone: 0.95
    }
];
function petalPath(len, w) {
    return `M0 0 C ${w} ${-len * 0.25}, ${w * 0.9} ${-len * 0.85}, 0 ${-len} C ${-w * 0.9} ${-len * 0.85}, ${-w} ${-len * 0.25}, 0 0 Z`;
}
function FlowerArt({ palette }) {
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, '');
    const [dark, mid, light] = PALETTES[palette] || PALETTES.burgundy;
    const rings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>RINGS.map((r, ri)=>({
                ...r,
                petals: Array.from({
                    length: r.n
                }, (_, k)=>({
                        rot: 360 / r.n * k + ri * 13 + (rnd(ri * 50 + k) - 0.5) * 8,
                        s: 0.92 + rnd(ri * 90 + k + 3) * 0.16
                    }))
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "-110 -110 220 220",
        className: "h-full w-full overflow-visible",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    rings.map((r, ri)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: `${uid}-g${ri}`,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: dark
                                }, void 0, false, {
                                    fileName: "[project]/app/components/RecentWork.js",
                                    lineNumber: 682,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "55%",
                                    stopColor: mid
                                }, void 0, false, {
                                    fileName: "[project]/app/components/RecentWork.js",
                                    lineNumber: 683,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: light,
                                    stopOpacity: 0.6 + r.tone * 0.4
                                }, void 0, false, {
                                    fileName: "[project]/app/components/RecentWork.js",
                                    lineNumber: 684,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, ri, true, {
                            fileName: "[project]/app/components/RecentWork.js",
                            lineNumber: 681,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: `${uid}-c`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: light
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 688,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: mid
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 689,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/RecentWork.js",
                        lineNumber: 687,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: `${uid}-s`,
                        x: "-30%",
                        y: "-30%",
                        width: "160%",
                        height: "160%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                            dx: "0",
                            dy: "4",
                            stdDeviation: "5",
                            floodColor: "#000",
                            floodOpacity: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/app/components/RecentWork.js",
                            lineNumber: 692,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/RecentWork.js",
                        lineNumber: 691,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 679,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                filter: `url(#${uid}-s)`,
                children: [
                    rings.map((r, ri)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].g, {
                            variants: {
                                closed: {
                                    scale: 0.12,
                                    rotate: -30,
                                    opacity: 0
                                },
                                open: {
                                    scale: 1,
                                    rotate: 0,
                                    opacity: 1,
                                    // inner rings open first, outer rings last
                                    transition: {
                                        delay: (rings.length - 1 - ri) * 0.28,
                                        duration: 1.6,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    }
                                }
                            },
                            style: {
                                transformBox: 'fill-box',
                                transformOrigin: '50% 50%'
                            },
                            children: r.petals.map((p, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: petalPath(r.len, r.w),
                                    transform: `rotate(${p.rot}) scale(${p.s})`,
                                    fill: `url(#${uid}-g${ri})`,
                                    stroke: dark,
                                    strokeOpacity: "0.35",
                                    strokeWidth: "0.6"
                                }, k, false, {
                                    fileName: "[project]/app/components/RecentWork.js",
                                    lineNumber: 712,
                                    columnNumber: 15
                                }, this))
                        }, ri, false, {
                            fileName: "[project]/app/components/RecentWork.js",
                            lineNumber: 697,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                        r: "9",
                        fill: `url(#${uid}-c)`,
                        variants: {
                            closed: {
                                scale: 0
                            },
                            open: {
                                scale: 1,
                                transition: {
                                    delay: 0.1,
                                    duration: 0.8
                                }
                            }
                        },
                        style: {
                            transformBox: 'fill-box',
                            transformOrigin: '50% 50%'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/RecentWork.js",
                        lineNumber: 724,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 695,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 678,
        columnNumber: 5
    }, this);
}
// Real bloom: a time-lapse video of a flower opening, shot on a BLACK background.
// mix-blend-screen makes the black vanish on the dark page, so no cut-out is needed.
// Plays once when it scrolls into view and holds on the last (fully open) frame.
function BloomVideo({ src, delay = 0, palette }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (failed) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowerArt, {
        palette: palette
    }, void 0, false, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 742,
        columnNumber: 22
    }, this); // video missing -> drawn flower
    // start from the first frame every time you arrive at this section
    const play = ()=>{
        const v = ref.current;
        if (!v) return;
        clearTimeout(timer.current);
        v.pause();
        v.currentTime = 0;
        timer.current = setTimeout(()=>v.play().catch(()=>{}), delay * 1000);
    };
    // leaving the section: stop and rewind, ready for next time
    const reset = ()=>{
        const v = ref.current;
        clearTimeout(timer.current);
        if (v) {
            v.pause();
            v.currentTime = 0;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "h-full w-full",
        onViewportEnter: play,
        onViewportLeave: reset,
        viewport: {
            amount: 0.4
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            ref: ref,
            src: src,
            muted: true,
            playsInline: true,
            preload: "auto",
            onError: ()=>setFailed(true),
            className: "h-full w-full object-contain mix-blend-screen"
        }, void 0, false, {
            fileName: "[project]/app/components/RecentWork.js",
            lineNumber: 770,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 764,
        columnNumber: 5
    }, this);
}
// `src` = optional transparent PNG (e.g. '/flower.png') for a photoreal flower
function Flower({ palette, src, video, left, top, width, delay = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute",
        style: {
            left,
            top,
            width,
            aspectRatio: '1 / 1'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "h-full w-full",
            initial: "closed",
            whileInView: "open",
            viewport: {
                once: false,
                amount: 0.2
            },
            style: {
                transformOrigin: '50% 85%'
            },
            variants: src && !video ? {
                // photo flower: tiny bud -> full size, with a little turn as it opens
                closed: {
                    scale: 0.05,
                    opacity: 0,
                    rotate: -18
                },
                open: {
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                    transition: {
                        delay,
                        duration: 2.4,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    }
                }
            } : {
                closed: {
                    scale: 0.35,
                    opacity: 0
                },
                open: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay,
                        delayChildren: delay,
                        duration: 1.8,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    }
                }
            },
            children: video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BloomVideo, {
                src: video,
                delay: delay,
                palette: palette
            }, void 0, false, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 811,
                columnNumber: 11
            }, this) : src ? // eslint-disable-next-line @next/next/no-img-element
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: "",
                className: "h-full w-full object-contain drop-shadow-2xl"
            }, void 0, false, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 814,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowerArt, {
                palette: palette
            }, void 0, false, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 816,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/RecentWork.js",
            lineNumber: 791,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 786,
        columnNumber: 5
    }, this);
}
function FlowerHeading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto max-w-5xl px-6 pb-3 pt-24 text-center sm:pt-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative inline-block",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Flower, {
                    palette: "burgundy",
                    video: FLOWER_VIDEOS.big,
                    src: FLOWER_IMAGES.big,
                    left: `${FLOWER_LAYOUT.big.x}%`,
                    top: `${FLOWER_LAYOUT.big.y}%`,
                    width: `${FLOWER_LAYOUT.big.size}%`
                }, void 0, false, {
                    fileName: "[project]/app/components/RecentWork.js",
                    lineNumber: 828,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Flower, {
                    palette: "amber",
                    video: FLOWER_VIDEOS.amber,
                    src: FLOWER_IMAGES.amber,
                    left: `${FLOWER_LAYOUT.amber.x}%`,
                    top: `${FLOWER_LAYOUT.amber.y}%`,
                    width: `${FLOWER_LAYOUT.amber.size}%`
                }, void 0, false, {
                    fileName: "[project]/app/components/RecentWork.js",
                    lineNumber: 830,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Flower, {
                    palette: "violet",
                    video: FLOWER_VIDEOS.violet,
                    src: FLOWER_IMAGES.violet,
                    left: `${FLOWER_LAYOUT.violet.x}%`,
                    top: `${FLOWER_LAYOUT.violet.y}%`,
                    width: `${FLOWER_LAYOUT.violet.size}%`,
                    delay: 0.6
                }, void 0, false, {
                    fileName: "[project]/app/components/RecentWork.js",
                    lineNumber: 831,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Flower, {
                    palette: "gold",
                    video: FLOWER_VIDEOS.gold,
                    src: FLOWER_IMAGES.gold,
                    left: `${FLOWER_LAYOUT.gold.x}%`,
                    top: `${FLOWER_LAYOUT.gold.y}%`,
                    width: `${FLOWER_LAYOUT.gold.size}%`,
                    delay: 1.1
                }, void 0, false, {
                    fileName: "[project]/app/components/RecentWork.js",
                    lineNumber: 832,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "relative z-10 text-[11px] font-light uppercase tracking-[0.45em] sm:text-xs",
                    style: {
                        color: CREAM,
                        opacity: 0.8,
                        fontFamily: "'Jost', sans-serif"
                    },
                    children: "Featured Projects"
                }, void 0, false, {
                    fileName: "[project]/app/components/RecentWork.js",
                    lineNumber: 834,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "relative z-10 mt-2 text-5xl font-light leading-none sm:text-7xl lg:text-8xl",
                    style: {
                        color: CREAM,
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        textShadow: '0 0 40px rgba(255,140,60,0.25)'
                    },
                    children: [
                        "Recent",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            className: "bg-gradient-to-r from-[#ffb347] via-[#ff7a30] to-[#e8412f] bg-clip-text italic text-transparent [text-shadow:none]",
                            children: "Work"
                        }, void 0, false, {
                            fileName: "[project]/app/components/RecentWork.js",
                            lineNumber: 849,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/RecentWork.js",
                    lineNumber: 840,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/RecentWork.js",
            lineNumber: 826,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 825,
        columnNumber: 5
    }, this);
}
/* ------------------------------ cards ------------------------------ */ function ProjectCard({ project: p, index, total, progress }) {
    const n = total;
    const last = n - 1;
    // Card 0 never moves in: it is already in place. Cards 1.. slide up during their slice.
    const yRange = index === 0 ? [
        0,
        1
    ] : [
        (index - 1) / last,
        index / last
    ];
    const yOut = index === 0 ? [
        '0vh',
        '0vh'
    ] : [
        '105vh',
        '0vh'
    ];
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(progress, yRange, yOut);
    // when the next card covers this one, shrink it slightly (stacking depth)
    const sRange = index === last ? [
        0,
        1
    ] : [
        index / last,
        (index + 1) / last
    ];
    const sOut = index === last ? [
        1,
        1
    ] : [
        1,
        0.94
    ];
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(progress, sRange, sOut);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].article, {
        style: {
            y,
            scale,
            top: `calc(1vh + ${index * PEEK}px)`,
            zIndex: index + 1
        },
        className: `absolute inset-x-0 mx-auto h-[min(60vh,500px)] w-[min(92vw,1080px)] origin-top overflow-hidden rounded-3xl border shadow-[0_-18px_50px_rgba(0,0,0,0.55)] ${p.card}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 ${p.grid}`
            }, void 0, false, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 879,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative grid h-full gap-6 p-5 sm:p-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `hidden flex-col justify-between rounded-2xl border p-5 md:flex ${p.panel}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-sm font-semibold leading-snug ${p.capColor}`,
                                children: p.caption
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 883,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mt-4 flex-1 overflow-hidden rounded-xl border bg-gradient-to-b ${p.shotBorder} ${p.shot}`,
                                children: p.image ? // eslint-disable-next-line @next/next/no-img-element
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: p.image,
                                    alt: p.title,
                                    className: "h-full w-full object-cover object-top"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/RecentWork.js",
                                    lineNumber: 887,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-full flex-col gap-2 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-2 w-1/3 rounded ${p.ph1}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/RecentWork.js",
                                            lineNumber: 890,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-2 w-2/3 rounded ${p.ph2}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/RecentWork.js",
                                            lineNumber: 891,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `mt-2 flex-1 rounded-lg ${p.ph3}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/RecentWork.js",
                                            lineNumber: 892,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-8 rounded-lg ${p.ph2}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/RecentWork.js",
                                            lineNumber: 893,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/RecentWork.js",
                                    lineNumber: 889,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 884,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/RecentWork.js",
                        lineNumber: 882,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-xs tracking-[0.25em] ${p.muted}`,
                                children: [
                                    String(index + 1).padStart(2, '0'),
                                    " / ",
                                    String(n).padStart(2, '0')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 901,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-2 text-4xl font-light italic sm:text-[44px] sm:leading-tight",
                                style: {
                                    color: p.titleColor,
                                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                                    textShadow: p.titleGlow
                                },
                                children: p.title
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 904,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-2 text-sm leading-6 sm:text-[15px] ${p.muted}`,
                                children: p.description
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 914,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: `mt-3 space-y-1.5 text-sm ${p.body}`,
                                children: p.points.map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${p.dot}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/RecentWork.js",
                                                lineNumber: 918,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: pt
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/RecentWork.js",
                                                lineNumber: 919,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, pt, true, {
                                        fileName: "[project]/app/components/RecentWork.js",
                                        lineNumber: 917,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 915,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-wrap gap-2",
                                children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `rounded-full border px-3 py-1 text-xs ${p.tag}`,
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/app/components/RecentWork.js",
                                        lineNumber: 925,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 923,
                                columnNumber: 11
                            }, this),
                            p.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: p.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: `mt-4 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 hover:gap-3 ${p.btn}`,
                                children: [
                                    "Visit site",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        "aria-hidden": true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M7 17L17 7M8 7h9v9"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/RecentWork.js",
                                            lineNumber: 941,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/RecentWork.js",
                                        lineNumber: 940,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 933,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/RecentWork.js",
                        lineNumber: 900,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 880,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 875,
        columnNumber: 5
    }, this);
}
function RecentWork() {
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const n = PROJECTS.length;
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: track,
        offset: [
            'start start',
            'end end'
        ]
    });
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 120,
        damping: 26,
        mass: 0.3
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "work",
        className: "relative z-10 bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap"
            }, void 0, false, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 960,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 z-0 [clip-path:inset(0)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GridTrailFX$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/components/RecentWork.js",
                    lineNumber: 967,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 966,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: track,
                style: {
                    height: `${n * 100}vh`
                },
                className: "relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 flex h-screen flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowerHeading, {}, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 975,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/RecentWork.js",
                            lineNumber: 974,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-20 flex-1",
                            children: PROJECTS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                    project: p,
                                    index: i,
                                    total: n,
                                    progress: progress
                                }, p.title, false, {
                                    fileName: "[project]/app/components/RecentWork.js",
                                    lineNumber: 979,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/RecentWork.js",
                            lineNumber: 977,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/RecentWork.js",
                    lineNumber: 972,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 971,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 959,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RecentWork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/RecentWork.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AboutMe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AboutMe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Navbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Form.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Certificate.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
/* ======================= YOUR EDITABLE DETAILS ======================= */ const NAME = "Aarchi Rai";
const PHOTO_SRC = "/about/hero-wide.jpg"; // your hero image (in /public/about/)
const LABEL = "Aarchi Rai — Portfolio";
const CREAM = "#ffe6cc"; // text color, warm like the glow
const CTA = "See More";
const SLIDES = [
    {
        title: "Design",
        text: "A modern and convenient design is the key to successful communication with the client."
    },
    {
        title: "Develop",
        text: "Fast, scalable full-stack builds that turn complex ideas into seamless digital experiences."
    },
    {
        title: "Deliver",
        text: "Pixel-perfect, responsive websites shipped on time and built to convert."
    }
];
/* ===================================================================== */ /* ---------------- Intro (portfolio logo + doors) ---------------- */ const W = 7948;
const H = 1792;
const PAD = 40;
const LETTERS = [
    "M78 1776V16H543Q689 16 774.5 81Q860 146 897 266Q934 386 934 552Q934 712 903 830.5Q872 949 792.5 1014Q713 1079 567 1079H424V1776ZM424 763H444Q542 763 564 708Q586 653 586 546Q586 446 564.5 391.5Q543 337 463 337H424Z",
    "M1479 1792Q1268 1792 1156.5 1664.5Q1045 1537 1045 1296V460Q1045 234 1155.5 117Q1266 0 1479 0Q1692 0 1802.5 117Q1913 234 1913 460V1296Q1913 1537 1801.5 1664.5Q1690 1792 1479 1792ZM1482 1468Q1562 1468 1562 1313V454Q1562 324 1484 324Q1396 324 1396 457V1315Q1396 1397 1416 1432.5Q1436 1468 1482 1468Z",
    "M2069 1776V16H2609Q2744 16 2813 77.5Q2882 139 2905.5 249.5Q2929 360 2929 509Q2929 653 2892.5 739Q2856 825 2755 858Q2838 875 2871.5 940.5Q2905 1006 2905 1110V1776H2558V1087Q2558 1010 2526.5 991.5Q2495 973 2425 973V1776ZM2427 668H2512Q2585 668 2585 509Q2585 406 2569 374Q2553 342 2509 342H2427Z",
    "M3210 1776V354H3001V16H3771V354H3562V1776Z",
    "M3883 1776V16H4587V359H4237V639H4569V978H4237V1776Z",
    "M5134 1792Q4923 1792 4811.5 1664.5Q4700 1537 4700 1296V460Q4700 234 4810.5 117Q4921 0 5134 0Q5347 0 5457.5 117Q5568 234 5568 460V1296Q5568 1537 5456.5 1664.5Q5345 1792 5134 1792ZM5137 1468Q5217 1468 5217 1313V454Q5217 324 5139 324Q5051 324 5051 457V1315Q5051 1397 5071 1432.5Q5091 1468 5137 1468Z",
    "M5724 1776V16H6076V1476H6438V1776Z",
    "M6536 1776V16H6876V1776Z",
    "M7450 1792Q7239 1792 7127.5 1664.5Q7016 1537 7016 1296V460Q7016 234 7126.5 117Q7237 0 7450 0Q7663 0 7773.5 117Q7884 234 7884 460V1296Q7884 1537 7772.5 1664.5Q7661 1792 7450 1792ZM7453 1468Q7533 1468 7533 1313V454Q7533 324 7455 324Q7367 324 7367 457V1315Q7367 1397 7387 1432.5Q7407 1468 7453 1468Z"
];
const TRACE_START = 0.2;
const TRACE_TIME = 1.2;
const STAGGER = 0.09;
const FILL_START = 1.9;
const FILL_TIME = 0.9;
const EASE = [
    0.76,
    0,
    0.24,
    1
];
const INTRO_DURATION = 3300;
const DOOR_TIME = 0.8;
const DOOR_HOLD = 300;
function PortfolioMark() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `${-PAD} ${-PAD} ${W + PAD * 2} ${H + PAD * 2}`,
        className: "h-auto w-[340px] overflow-visible sm:w-[500px] md:w-[680px]",
        role: "img",
        "aria-label": "Portfolio",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "pf-wipe",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].rect, {
                        x: -PAD,
                        y: -PAD,
                        height: H + PAD * 2,
                        initial: {
                            width: 0
                        },
                        animate: {
                            width: W + PAD * 2
                        },
                        transition: {
                            duration: FILL_TIME,
                            delay: FILL_START,
                            ease: EASE
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].g, {
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: 26,
                strokeLinejoin: "round",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 0.16
                },
                transition: {
                    duration: 0.5
                },
                children: LETTERS.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: d
                    }, i, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: 26,
                strokeLinejoin: "round",
                strokeLinecap: "butt",
                children: LETTERS.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: d,
                        initial: {
                            pathLength: 0
                        },
                        animate: {
                            pathLength: 1
                        },
                        transition: {
                            duration: TRACE_TIME,
                            delay: TRACE_START + i * STAGGER,
                            ease: "easeInOut"
                        }
                    }, i, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "#ffffff",
                clipPath: "url(#pf-wipe)",
                children: LETTERS.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: d
                    }, i, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
/* ---------------- New hero ---------------- */ function Hero() {
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (reduce) return;
        const t = setInterval(()=>setIdx((i)=>(i + 1) % SLIDES.length), 5000);
        return ()=>clearInterval(t);
    }, [
        reduce
    ]);
    const slide = SLIDES[idx];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-screen min-h-[560px] overflow-hidden bg-[#2a0a02]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 1.06
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 1.4,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: PHOTO_SRC,
                    alt: NAME,
                    draggable: false,
                    className: "h-full w-full object-cover",
                    style: {
                        objectPosition: "70% 50%"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/50 to-transparent"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex h-full flex-col justify-center px-6 pb-24 pt-28 sm:px-12 lg:w-[52%] lg:px-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "text-[11px] font-light uppercase tracking-[0.45em] sm:text-xs",
                        style: {
                            color: CREAM,
                            opacity: 0.8,
                            fontFamily: "'Jost', sans-serif"
                        },
                        children: LABEL
                    }, "l" + idx, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 20,
                            filter: "blur(14px)"
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)"
                        },
                        transition: {
                            duration: 1.1,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "mt-4 text-6xl font-light italic leading-[0.95] sm:text-8xl lg:text-[8.5rem]",
                        style: {
                            color: CREAM,
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            letterSpacing: "-0.01em",
                            textShadow: "0 0 40px rgba(255,140,60,0.55), 0 0 90px rgba(255,90,30,0.35)"
                        },
                        children: slide.title
                    }, "t" + idx, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 0.85
                        },
                        transition: {
                            duration: 1,
                            delay: 0.25
                        },
                        className: "mt-7 max-w-sm text-sm font-light leading-[1.9] tracking-wide sm:text-[15px]",
                        style: {
                            color: CREAM,
                            fontFamily: "'Jost', sans-serif"
                        },
                        children: slide.text
                    }, "p" + idx, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#work",
                        className: "group mt-10 inline-flex w-fit items-center gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-14 w-14 items-center justify-center rounded-full border border-[#ffe6cc]/50 bg-white/5 text-[#ffe6cc] backdrop-blur-sm transition duration-500 group-hover:bg-[#ffe6cc] group-hover:text-[#5a1a05]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "22",
                                    height: "22",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M4 12h16M14 6l6 6-6 6"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-light uppercase tracking-[0.35em]",
                                style: {
                                    color: CREAM,
                                    fontFamily: "'Jost', sans-serif"
                                },
                                children: CTA
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
function Home() {
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("intro");
    const isLoaded = phase === "open";
    const doorsShut = phase === "closing";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const closeTimer = setTimeout(()=>setPhase("closing"), INTRO_DURATION);
        const openTimer = setTimeout(()=>setPhase("open"), INTRO_DURATION + DOOR_TIME * 1000 + DOOR_HOLD);
        return ()=>{
            clearTimeout(closeTimer);
            clearTimeout(openTimer);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = isLoaded ? "" : "hidden";
        // flags used by the CSS below to keep any navbar hidden during the intro
        if (isLoaded) {
            document.body.removeAttribute("data-intro");
            document.body.setAttribute("data-ready", "1");
        } else {
            document.body.setAttribute("data-intro", "1");
            document.body.removeAttribute("data-ready");
        }
        return ()=>{
            document.body.style.overflow = "";
            document.body.removeAttribute("data-intro");
            document.body.removeAttribute("data-ready");
        };
    }, [
        isLoaded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-clip",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        body[data-intro] header,
        body[data-intro] nav,
        body[data-intro] [class*="fixed"][class*="top-0"] {
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        @keyframes navFadeIn { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: none; } }
        body[data-ready] header,
        body[data-ready] nav { animation: navFadeIn 0.8s ease both; }
      `
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            phase !== "open" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-intro-layer": true,
                className: "fixed inset-0 z-[200] flex items-center justify-center bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PortfolioMark, {}, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 2.5
                            },
                            className: "absolute -bottom-12 md:-bottom-14 left-0 text-base sm:text-lg md:text-2xl uppercase tracking-[0.4em] text-neutral-400 font-semibold whitespace-nowrap",
                            children: "aarchi rai"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 268,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 266,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 265,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-[210] overflow-hidden ${phase === "open" ? "pointer-events-none" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            x: "-100%"
                        },
                        animate: {
                            x: doorsShut ? "0%" : "-100%"
                        },
                        transition: {
                            duration: DOOR_TIME,
                            ease: EASE
                        },
                        className: "absolute left-0 top-0 h-full w-[51%] bg-black"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            x: "100%"
                        },
                        animate: {
                            x: doorsShut ? "0%" : "100%"
                        },
                        transition: {
                            duration: DOOR_TIME,
                            ease: EASE
                        },
                        className: "absolute right-0 top-0 h-full w-[51%] bg-black"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 296,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 z-0 h-screen overflow-hidden",
                        children: isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {}, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 300,
                            columnNumber: 81
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 shadow-[0_-40px_80px_rgba(0,0,0,0.7)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$RecentWork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AboutMe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 307,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
}),
];})()

//# sourceMappingURL=app_1i8t0u0rs8rhz._.js.map