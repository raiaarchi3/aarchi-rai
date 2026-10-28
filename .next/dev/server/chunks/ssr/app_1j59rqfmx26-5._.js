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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GridTrailFX$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GridTrailFX.js [app-ssr] (ecmascript)"); // grid + blurry cursor trail
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import GridTrailFX from "./GridTrailFX"; // grid + blurry cursor trail
// // ---- your "About Me" (shown right after the band) ----
// const ABOUT = {
//   name: "Aarchi Rai",
//   initials: "AR",
//   image: "/about/me.jpeg", // put your photo in /public/about/ and set e.g. "/about/me.jpg" (null shows the initials)
//   text:
//     "I'm a Next.js developer from Delhi NCR who loves turning ideas into fast, good-looking web apps. I enjoy building end to end, from clean interfaces to the back end behind them, and I'm always learning something new.",
// };
// const GRADIENT_TEXT =
//   "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent";
// // ---- the languages shown in the infinity band ----
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
// function List({ hidden }) {
//   return (
//     <ul
//       aria-hidden={hidden || undefined}
//       className="flex shrink-0 items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-8"
//       style={{ animation: "infinite-scroll 25s linear infinite" }}
//     >
//       {LANGUAGES.map((l) => (
//         <li key={l.slug}>
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
// // function SmallAbout() {
// //   return (
// //     <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 pb-28 pt-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-16 lg:px-20 lg:pb-40">
// //       {/* left: text */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 28 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true, margin: "-80px" }}
// //         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// //         className="text-left"
// //       >
// //         {/* <p className="text-base text-neutral-200 sm:text-lg">About Me</p> */}
// //         <h2 className="mt-2 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
// //           Hi there! I&apos;m <em className={`italic ${GRADIENT_TEXT}`}>{ABOUT.name}</em>
// //         </h2>
// //         <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">{ABOUT.text}</p>
// //       </motion.div>
// //       {/* right: profile circle */}
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.92 }}
// //         whileInView={{ opacity: 1, scale: 1 }}
// //         viewport={{ once: true, margin: "-80px" }}
// //         transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
// //         className="flex justify-center lg:justify-end"
// //       >
// //         <div className="relative">
// //           {/* orange glow */}
// //           <div
// //             aria-hidden
// //             className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/30 via-orange-500/20 to-red-500/30 blur-3xl"
// //           />
// //           <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-black bg-[#141210] shadow-[0_0_80px_rgba(247,148,29,0.25)] ring-1 ring-amber-500/30 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]">
// //             {ABOUT.image ? (
// //               // eslint-disable-next-line @next/next/no-img-element
// //               <img src={ABOUT.image} alt={ABOUT.name} className="h-full w-full object-cover" />
// //             ) : (
// //               <span className={`text-7xl font-bold sm:text-8xl lg:text-9xl ${GRADIENT_TEXT}`}>
// //                 {ABOUT.initials}
// //               </span>
// //             )}
// //           </div>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // }
// function SmallAbout() {
//   return (
//     <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 pb-28 pt-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-16 lg:px-20 lg:pb-40">
//       {/* left: text */}
//       <motion.div
//         initial={{ opacity: 0, y: 28 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-80px" }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="text-left"
//       >
//         {/* <p className="text-base text-neutral-200 sm:text-lg">About Me</p> */}
//         <h2 className="mt-2 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
//           Hi there! I&apos;m <em className={`italic ${GRADIENT_TEXT}`}>{ABOUT.name}</em>
//         </h2>
//         <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">{ABOUT.text}</p>
//       </motion.div>
//       {/* right: profile circle */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.92 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true, margin: "-80px" }}
//         transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//         className="flex justify-center lg:justify-end"
//       >
//         <div className="relative">
//           <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-black bg-[#141210] shadow-[0_0_80px_rgba(247,148,29,0.25)] ring-1 ring-amber-500/30 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]">
//             {ABOUT.image ? (
//               // eslint-disable-next-line @next/next/no-img-element
//               <img src={ABOUT.image} alt={ABOUT.name} className="h-full w-full object-cover" />
//             ) : (
//               <span className={`text-7xl font-bold sm:text-8xl lg:text-9xl ${GRADIENT_TEXT}`}>
//                 {ABOUT.initials}
//               </span>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
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
//         <SmallAbout />
//       </div>
//     </div>
//   );
// }
"use client";
;
;
;
;
// ---- your "About Me" (shown right after the band) ----
const ABOUT = {
    name: "Aarchi Rai",
    text: "I'm a Next.js developer from Delhi NCR who loves turning ideas into fast, good-looking web apps. I enjoy building end to end, from clean interfaces to the back end behind them, and I'm always learning something new."
};
const GRADIENT_TEXT = "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent";
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
                            lineNumber: 218,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "whitespace-nowrap text-lg font-semibold text-white",
                            children: l.name
                        }, void 0, false, {
                            fileName: "[project]/app/components/AboutMe.js",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AboutMe.js",
                    lineNumber: 216,
                    columnNumber: 11
                }, this)
            }, l.slug, false, {
                fileName: "[project]/app/components/AboutMe.js",
                lineNumber: 215,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/AboutMe.js",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
function SmallAbout() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-[1400px] px-6 pb-28 pt-8 lg:px-20 lg:pb-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            className: "text-left",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-2 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
                    children: [
                        "Hi there! I'm ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            className: `italic ${GRADIENT_TEXT}`,
                            children: ABOUT.name
                        }, void 0, false, {
                            fileName: "[project]/app/components/AboutMe.js",
                            lineNumber: 247,
                            columnNumber: 30
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AboutMe.js",
                    lineNumber: 246,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-8 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg",
                    children: ABOUT.text
                }, void 0, false, {
                    fileName: "[project]/app/components/AboutMe.js",
                    lineNumber: 249,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/AboutMe.js",
            lineNumber: 239,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/AboutMe.js",
        lineNumber: 238,
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
                    lineNumber: 262,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/AboutMe.js",
                lineNumber: 261,
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
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(List, {}, void 0, false, {
                                fileName: "[project]/app/components/AboutMe.js",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(List, {
                                hidden: true
                            }, void 0, false, {
                                fileName: "[project]/app/components/AboutMe.js",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AboutMe.js",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmallAbout, {}, void 0, false, {
                        fileName: "[project]/app/components/AboutMe.js",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AboutMe.js",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AboutMe.js",
        lineNumber: 259,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DotBackground$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/DotBackground.js [app-ssr] (ecmascript)");
// "use client";
// import React, { useState } from "react";
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
// ];
// // Dotted dark background (same as the hero)
// // const DOT_BG = {
// //   backgroundColor: "#050505",
// //   backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1.2px)",
// //   backgroundSize: "8px 8px",
// // };
// const GRID_DARK =
//   'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[36px_36px]';
// const GRID_LIGHT =
//   'bg-[linear-gradient(rgba(20,80,40,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(20,80,40,0.07)_1px,transparent_1px)] bg-size-[36px_36px]';
// function CertCard({ c, onSelect }) {
//   const [failed, setFailed] = React.useState(false);
//   return (
//     <li className="mx-3 shrink-0 sm:mx-5">
//       <div
//         onClick={() => !failed && onSelect(c.src)}
//         className="h-48 w-72 cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02] sm:h-56 sm:w-80"
//       >
//         {!failed ? (
//           // eslint-disable-next-line @next/next/no-img-element
//           <img
//             src={c.src}
//             alt={c.title}
//             loading="lazy"
//             className="h-full w-full object-cover rounded-xl border border-amber-500/20 shadow-lg"
//             onError={() => setFailed(true)}
//           />
//         ) : (
//           <div className="flex h-full w-full items-center justify-center rounded-xl border border-amber-500/20 bg-neutral-900 px-4 text-center text-sm text-neutral-400">
//             {c.title}
//             <br />
//             (add image: {c.src})
//           </div>
//         )}
//       </div>
//       <p className="mt-2 text-center text-xs text-neutral-400 font-medium tracking-wide">{c.title}</p>
//     </li>
//   );
// }
// function CertList({ hidden, onSelect }) {
//   return (
//     <ul
//       aria-hidden={hidden || undefined}
//       className="cert-track flex shrink-0 items-start"
//       style={{ animation: "infinite-scroll 45s linear infinite" }}
//     >
//       {CERTIFICATES.map((c, i) => (
//         <CertCard key={i} c={c} onSelect={onSelect} />
//       ))}
//     </ul>
//   );
// }
// export default function CertificatesBand() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const mask = "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)";
//   return (
//     <section style={GRID_DARK} className="py-20">
//       {/* Infinite Scroll Track */}
//       <div
//         className="cert-band mt-4 inline-flex w-full flex-nowrap overflow-hidden py-4"
//         style={{ WebkitMaskImage: mask, maskImage: mask }}
//       >
//         <style>{`
//           @keyframes infinite-scroll {
//             from { transform: translateX(0); }
//             to { transform: translateX(-100%); }
//           }
//           .cert-band:hover .cert-track {
//             animation-play-state: paused !important;
//           }
//         `}</style>
//         <CertList onSelect={setSelectedImage} />
//         <CertList hidden onSelect={setSelectedImage} />
//       </div>
//       {/* Fullscreen Modal Preview when clicked */}
//       {selectedImage && (
//         <div
//           onClick={() => setSelectedImage(null)}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
//         >
//           <div className="relative max-w-4xl w-full overflow-hidden rounded-2xl border border-amber-500/30 bg-[#141210] p-2 shadow-2xl">
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute top-4 right-4 z-10 rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-500 hover:text-black transition-colors"
//             >
//               ✕ Close
//             </button>
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={selectedImage}
//               alt="Expanded Certificate"
//               className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
"use client";
;
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
                    className: "h-full w-full rounded-xl border border-amber-500/20 object-cover shadow-lg",
                    onError: ()=>setFailed(true)
                }, void 0, false, {
                    fileName: "[project]/app/components/Certificate.js",
                    lineNumber: 156,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full w-full items-center justify-center rounded-xl border border-amber-500/20 bg-neutral-900 px-4 text-center text-sm text-neutral-400",
                    children: [
                        c.title,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/app/components/Certificate.js",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this),
                        "(add image: ",
                        c.src,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Certificate.js",
                    lineNumber: 164,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Certificate.js",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-center text-xs font-medium tracking-wide text-neutral-400",
                children: c.title
            }, void 0, false, {
                fileName: "[project]/app/components/Certificate.js",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Certificate.js",
        lineNumber: 149,
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
                lineNumber: 184,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/Certificate.js",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
function CertificatesBand() {
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const mask = "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DotBackground$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DOT_BG"],
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
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CertList, {
                        onSelect: setSelectedImage
                    }, void 0, false, {
                        fileName: "[project]/app/components/Certificate.js",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CertList, {
                        hidden: true,
                        onSelect: setSelectedImage
                    }, void 0, false, {
                        fileName: "[project]/app/components/Certificate.js",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Certificate.js",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setSelectedImage(null),
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-4xl overflow-hidden rounded-2xl border border-amber-500/30 bg-[#141210] p-2 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedImage(null),
                            className: "absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-amber-500 hover:text-black",
                            children: "✕ Close"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Certificate.js",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: selectedImage,
                            alt: "Expanded Certificate",
                            className: "h-auto max-h-[80vh] w-full rounded-xl object-contain"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Certificate.js",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Certificate.js",
                    lineNumber: 221,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Certificate.js",
                lineNumber: 217,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Certificate.js",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/DotBackground.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOT_BG",
    ()=>DOT_BG
]);
const DOT_BG = {
    backgroundColor: "#050505",
    backgroundImage: `
    linear-gradient(to bottom, #050505 0%, transparent 25%, transparent 75%, #050505 100%),
    radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1.2px)
  `,
    backgroundSize: "100% 100%, 8px 8px"
};
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
"use client";
;
;
;
;
/* ======================================================================
   FOOTER  (put this file in your components folder, then use <Footer /> at
   the bottom of any page, e.g. under the Recent Work section)
   Edit everything in the DATA section. The layout code never needs touching.

   Responsive layout:
   - phone:   everything stacked in one column (brand + contact, then links)
   - tablet:  two columns
   - desktop: three columns in one row (the 3rd stays empty while
              "Helpful Links" is commented out)
   ====================================================================== */ /* ============================== DATA ============================== */ const BRAND = {
    logo: "Aarchi Rai",
    tagline: ""
};
const CONTACT = {
    phone: "+91 98731 06862",
    email: "aarchirai3@gmail.com"
};
const INFORMATION = [
    {
        label: "About Us",
        href: "/about"
    }
];
const HELPFUL_LINKS = [];
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
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
const PhoneIcon = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.js",
            lineNumber: 68,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.js",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MailIcon = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        ...p,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 74,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22,6 12,13 2,6"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 75,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Footer.js",
        lineNumber: 73,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
/* ============================== PIECES ============================== */ function ColumnTitle({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: `mb-3 text-base font-medium sm:mb-4 sm:text-xl ${className}`,
        style: {
            color: ORANGE
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.js",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function LinkList({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "space-y-1 sm:space-y-1.5",
        children: items.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: l.href,
                    className: "inline-block py-1.5 text-sm text-neutral-100 transition-colors hover:text-[#f7941d] sm:text-[15px]",
                    children: l.label
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.js",
                    lineNumber: 98,
                    columnNumber: 11
                }, this)
            }, l.label, false, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 96,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.js",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].footer, {
        id: "contact",
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
        className: "relative w-full overflow-x-clip bg-black text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1400px] px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold leading-none",
                                children: BRAND.logo
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            BRAND.tagline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[11px] text-neutral-300",
                                children: BRAND.tagline
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-3 mt-7 text-base font-medium sm:mt-9",
                                style: {
                                    color: ORANGE
                                },
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3 text-sm text-neutral-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-3 sm:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneIcon, {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
                                                className: "py-1 transition-colors hover:text-[#f7941d]",
                                                children: CONTACT.phone
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-3 sm:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MailIcon, {
                                                className: "h-4 w-4 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `mailto:${CONTACT.email}`,
                                                className: "min-w-0 break-all py-1 transition-colors hover:text-[#f7941d]",
                                                children: CONTACT.email
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.js",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColumnTitle, {
                                children: "Information"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkList, {
                                items: INFORMATION
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.js",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 123,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.js",
            lineNumber: 122,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.js",
        lineNumber: 114,
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
                lineNumber: 73,
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
                                    lineNumber: 83,
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
                                            lineNumber: 85,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Form.js",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 max-w-md text-[15px] leading-7 text-neutral-400 sm:text-base",
                                    children: "Tell me who you are and what you'd like me to make. I'll get back to you soon."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Form.js",
                                    lineNumber: 87,
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
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `mailto:${EMAIL}`,
                                                    className: "text-neutral-200 underline-offset-4 hover:underline hover:text-amber-400",
                                                    children: EMAIL
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-neutral-500",
                                                    children: "Based in · "
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-neutral-200",
                                                    children: "Delhi NCR, India"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Form.js",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Form.js",
                            lineNumber: 78,
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
                                            lineNumber: 120,
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
                                            lineNumber: 121,
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
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, "done", true, {
                                    fileName: "[project]/app/components/Form.js",
                                    lineNumber: 114,
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
                                                            lineNumber: 145,
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
                                                            lineNumber: 148,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 144,
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
                                                            lineNumber: 151,
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
                                                            lineNumber: 154,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 143,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mb-2 block text-sm text-neutral-300",
                                                    children: "What should I make?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 167,
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
                                                            lineNumber: 170,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Form.js",
                                                    lineNumber: 168,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 166,
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
                                                    lineNumber: 187,
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
                                                    lineNumber: 190,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: status === "sending",
                                            className: "w-full rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-12 shadow-lg shadow-amber-500/10",
                                            children: status === "sending" ? "Sending..." : "Send"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Form.js",
                                            lineNumber: 201,
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
                                            lineNumber: 210,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, "form", true, {
                                    fileName: "[project]/app/components/Form.js",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Form.js",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Form.js",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Form.js",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Form.js",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Form.js",
        lineNumber: 69,
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
;
;
;
;
// ---- THEME COLORS ----
const CREAM = '#ffe6cc';
const GRID_DARK = 'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[36px_36px]';
const GRID_LIGHT = 'bg-[linear-gradient(rgba(20,80,40,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(20,80,40,0.07)_1px,transparent_1px)] bg-size-[36px_36px]';
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
    btn: 'bg-[#d8f3dc] text-[#07130d] hover:bg-white'
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
    btn: 'bg-white text-black hover:bg-neutral-200'
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
    btn: 'bg-blue-600 text-white hover:bg-blue-500'
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
    btn: 'bg-neutral-900 text-white hover:bg-neutral-800'
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
    btn: 'bg-amber-500 text-black hover:bg-amber-400'
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
        ...LIGHT_GREEN,
        image: '/work/chatterbox.png',
        link: 'https://chatter-box-blue-rho.vercel.app/'
    },
    {
        title: 'Movie Reel',
        caption: 'Discover movies by mood, genre, and region with instant trailers and details.',
        description: 'An interactive movie discovery platform where users can explore films filtered by genre (Action, Comedy, Drama, etc.) and region (Hollywood, Bollywood, Tollywood, World), watch trailers, and view detailed movie insights powered by the TMDB API.',
        points: [
            'Genre and regional filtering (Hollywood, Bollywood, Tollywood, etc.).',
            'Integrated trailers and detailed film overviews.',
            'Personal watchlist and custom movie curation.'
        ],
        tags: [
            'React',
            'Next.js',
            'Tailwind CSS',
            'TMDB API'
        ],
        ...MOOD_REEL,
        image: '/work/movie.png',
        link: 'https://movie-reel-blush.vercel.app'
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
        ...DERMA_SETU,
        image: '/work/dermasetu.png',
        link: 'https://dermasetu.vercel.app/dashboard'
    },
    {
        title: 'Drobe',
        caption: 'Your digital wardrobe and AI personal stylist.',
        description: 'An interactive digital closet platform where users can upload and organize their clothing items, track wardrobe pieces, and leverage AI to curate and generate custom outfits.',
        points: [
            'Digital closet inventory to upload and track your clothing pieces.',
            'AI-powered stylist to generate custom outfit combinations.',
            'Search and color-filtering to easily manage your wardrobe archive.'
        ],
        tags: [
            'Next.js',
            'React',
            'Tailwind CSS',
            'AI Stylist'
        ],
        ...DROBE_WHITE,
        image: '/work/drobe.png',
        link: 'https://my-closet-swart.vercel.app'
    },
    {
        title: 'Flora',
        caption: 'Explore flower species, origins, and botanical facts.',
        description: 'An immersive digital flower library where users can discover diverse plant and flower species, learn about their geographical origins, family classifications, and explore fascinating botanical facts.',
        points: [
            'Comprehensive species guides with family and origin details.',
            'Fascinating botanical facts and insights for plant enthusiasts.',
            'Clean, immersive browsing interface with high-visual presentation.'
        ],
        tags: [
            'Next.js',
            'React',
            'Tailwind CSS',
            'Botanical API'
        ],
        ...FLORA_ORANGE,
        image: '/work/flora.png',
        link: 'https://flora-nu-six.vercel.app'
    }
];
// ---- FLOWER VIDEOS / IMAGES & LAYOUT CONFIG ----
const FLOWER_VIDEOS = {
    big: '/flowers/bloom.mp4',
    amber: null,
    violet: null,
    gold: null
};
const FLOWER_IMAGES = {
    amber: '/flowers/flower.png',
    violet: '/flowers/flower.png',
    gold: '/flowers/flower.png'
};
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
const PEEK = 16;
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
                                    lineNumber: 1362,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "55%",
                                    stopColor: mid
                                }, void 0, false, {
                                    fileName: "[project]/app/components/RecentWork.js",
                                    lineNumber: 1363,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: light,
                                    stopOpacity: 0.6 + r.tone * 0.4
                                }, void 0, false, {
                                    fileName: "[project]/app/components/RecentWork.js",
                                    lineNumber: 1364,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, ri, true, {
                            fileName: "[project]/app/components/RecentWork.js",
                            lineNumber: 1361,
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
                                lineNumber: 1368,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: mid
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 1369,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/RecentWork.js",
                        lineNumber: 1367,
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
                            lineNumber: 1372,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/RecentWork.js",
                        lineNumber: 1371,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 1359,
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
                                    lineNumber: 1391,
                                    columnNumber: 15
                                }, this))
                        }, ri, false, {
                            fileName: "[project]/app/components/RecentWork.js",
                            lineNumber: 1377,
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
                        lineNumber: 1403,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 1375,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 1358,
        columnNumber: 5
    }, this);
}
function BloomVideo({ src, delay = 0, palette }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (failed) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowerArt, {
        palette: palette
    }, void 0, false, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 1418,
        columnNumber: 22
    }, this);
    const play = ()=>{
        const v = ref.current;
        if (!v) return;
        clearTimeout(timer.current);
        v.pause();
        v.currentTime = 0;
        timer.current = setTimeout(()=>v.play().catch(()=>{}), delay * 1000);
    };
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
            lineNumber: 1445,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 1439,
        columnNumber: 5
    }, this);
}
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
                lineNumber: 1483,
                columnNumber: 11
            }, this) : src ? // eslint-disable-next-line @next/next/no-img-element
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: "",
                className: "h-full w-full object-contain drop-shadow-2xl"
            }, void 0, false, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 1486,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowerArt, {
                palette: palette
            }, void 0, false, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 1488,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/RecentWork.js",
            lineNumber: 1464,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 1460,
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
                    lineNumber: 1499,
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
                    lineNumber: 1500,
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
                    lineNumber: 1501,
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
                    lineNumber: 1502,
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
                    lineNumber: 1504,
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
                            lineNumber: 1519,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/RecentWork.js",
                    lineNumber: 1510,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/RecentWork.js",
            lineNumber: 1498,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 1497,
        columnNumber: 5
    }, this);
}
function ProjectCard({ project: p, index, total, progress }) {
    const n = total;
    const last = n - 1;
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
                lineNumber: 1545,
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
                                lineNumber: 1548,
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
                                    lineNumber: 1552,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-full flex-col gap-2 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-2 w-1/3 rounded ${p.ph1}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/RecentWork.js",
                                            lineNumber: 1555,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-2 w-2/3 rounded ${p.ph2}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/RecentWork.js",
                                            lineNumber: 1556,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `mt-2 flex-1 rounded-lg ${p.ph3}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/RecentWork.js",
                                            lineNumber: 1557,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-8 rounded-lg ${p.ph2}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/RecentWork.js",
                                            lineNumber: 1558,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/RecentWork.js",
                                    lineNumber: 1554,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 1549,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/RecentWork.js",
                        lineNumber: 1547,
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
                                lineNumber: 1565,
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
                                lineNumber: 1568,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-2 text-sm leading-6 sm:text-[15px] ${p.muted}`,
                                children: p.description
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 1578,
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
                                                lineNumber: 1582,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: pt
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/RecentWork.js",
                                                lineNumber: 1583,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, pt, true, {
                                        fileName: "[project]/app/components/RecentWork.js",
                                        lineNumber: 1581,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 1579,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-wrap gap-2",
                                children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `rounded-full border px-3 py-1 text-xs ${p.tag}`,
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/app/components/RecentWork.js",
                                        lineNumber: 1589,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 1587,
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
                                            lineNumber: 1604,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/RecentWork.js",
                                        lineNumber: 1603,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 1596,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/RecentWork.js",
                        lineNumber: 1564,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 1546,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 1541,
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
                lineNumber: 1623,
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
                            "aria-hidden": true,
                            className: "pointer-events-none absolute inset-0 z-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GridTrailFX$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    style: {
                                        backgroundImage: 'radial-gradient(rgba(204,212,230,0.12) 1px, transparent 1.2px)',
                                        backgroundSize: '9px 9px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/RecentWork.js",
                                    lineNumber: 1633,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 1631,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/RecentWork.js",
                            lineNumber: 1630,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlowerHeading, {}, void 0, false, {
                                fileName: "[project]/app/components/RecentWork.js",
                                lineNumber: 1645,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/RecentWork.js",
                            lineNumber: 1644,
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
                                    lineNumber: 1649,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/RecentWork.js",
                            lineNumber: 1647,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/RecentWork.js",
                    lineNumber: 1629,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/RecentWork.js",
                lineNumber: 1628,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/RecentWork.js",
        lineNumber: 1622,
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

//# sourceMappingURL=app_1j59rqfmx26-5._.js.map