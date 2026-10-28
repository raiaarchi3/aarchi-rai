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

import React from "react";
import { motion } from "framer-motion";
import GridTrailFX from "./GridTrailFX"; // grid + blurry cursor trail

// ---- your "About Me" (shown right after the band) ----
const ABOUT = {
  name: "Aarchi Rai",
  text:
    "I'm a Next.js developer from Delhi NCR who loves turning ideas into fast, good-looking web apps. I enjoy building end to end, from clean interfaces to the back end behind them, and I'm always learning something new.",
};

const GRADIENT_TEXT =
  "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent";

// ---- the languages shown in the infinity band ----
const LANGUAGES = [
  { name: "Python", slug: "python" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Java", slug: "openjdk" },
  { name: "HTML", slug: "html5" },
  { name: "CSS", slug: "css3" },
  { name: "SQL", slug: "mysql" },
];

function List({ hidden }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-8"
      style={{ animation: "infinite-scroll 25s linear infinite" }}
    >
      {LANGUAGES.map((l) => (
        <li key={l.slug}>
          <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-[#141210]/80 px-4 py-3 shadow-[0_0_15px_rgba(245,158,11,0.05)] transition-colors hover:border-amber-500/40 hover:bg-[#1f1a17]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://cdn.simpleicons.org/${l.slug}/white`}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="whitespace-nowrap text-lg font-semibold text-white">{l.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function SmallAbout() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-28 pt-8 lg:px-20 lg:pb-40">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-left"
      >
        <h2 className="mt-2 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Hi there! I&apos;m <em className={`italic ${GRADIENT_TEXT}`}>{ABOUT.name}</em>
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">{ABOUT.text}</p>
      </motion.div>
    </div>
  );
}

export default function InfinityBandScroll() {
  const mask =
    "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 200px), transparent 100%)";
  return (
    <div className="relative">
      {/* grid + blurry cursor trail, clipped to this section only */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 [clip-path:inset(0)]">
        <GridTrailFX />
      </div>

      <div className="relative z-10">
        <div
          className="mb-16 inline-flex w-full flex-nowrap overflow-hidden py-8 text-5xl md:mb-28"
          style={{ WebkitMaskImage: mask, maskImage: mask }}
        >
          <style>{`@keyframes infinite-scroll { from { transform: translateX(0); } to { transform: translateX(-100%); } }`}</style>
          <List />
          <List hidden />
        </div>

        <SmallAbout />
      </div>
    </div>
  );
}