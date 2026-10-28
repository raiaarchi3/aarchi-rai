
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

import React, { useState } from "react";
import { DOT_BG } from "./DotBackground";

const CERTIFICATES = [
  { title: "Hackathon Certificate 1", src: "/certificate/certificate1.jpeg" },
  { title: "Hackathon Certificate 2", src: "/certificate/certificate2.jpeg" },
  { title: "Hackathon Certificate 3", src: "/certificate/certificate3.jpeg" },
  { title: "Hackathon Certificate 4", src: "/certificate/certificate4.jpeg" },
  { title: "Hackathon Certificate 5", src: "/certificate/certificate5.jpeg" },
  { title: "Hackathon Certificate 6", src: "/certificate/certificate6.jpeg" },
  { title: "Hackathon Certificate 7", src: "/certificate/certificate7.jpeg" },
  { title: "Hackathon Certificate 8", src: "/certificate/certificate8.jpeg" },
  { title: "Hackathon Certificate 9", src: "/certificate/certificate9.jpeg" },
  { title: "Hackathon Certificate 10", src: "/certificate/certificate10.jpeg" },
  { title: "Hackathon Certificate 11", src: "/certificate/certificate11.jpeg" },
  { title: "Hackathon Certificate 12", src: "/certificate/certificate12.jpeg" },
];

function CertCard({ c, onSelect }) {
  const [failed, setFailed] = React.useState(false);
  return (
    <li className="mx-3 shrink-0 sm:mx-5">
      <div
        onClick={() => !failed && onSelect(c.src)}
        className="h-48 w-72 cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02] sm:h-56 sm:w-80"
      >
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={c.src}
            alt={c.title}
            loading="lazy"
            className="h-full w-full rounded-xl border border-amber-500/20 object-cover shadow-lg"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-xl border border-amber-500/20 bg-neutral-900 px-4 text-center text-sm text-neutral-400">
            {c.title}
            <br />
            (add image: {c.src})
          </div>
        )}
      </div>
      <p className="mt-2 text-center text-xs font-medium tracking-wide text-neutral-400">{c.title}</p>
    </li>
  );
}

function CertList({ hidden, onSelect }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="cert-track flex shrink-0 items-start"
      style={{ animation: "infinite-scroll 45s linear infinite" }}
    >
      {CERTIFICATES.map((c, i) => (
        <CertCard key={i} c={c} onSelect={onSelect} />
      ))}
    </ul>
  );
}

export default function CertificatesBand() {
  const [selectedImage, setSelectedImage] = useState(null);
  const mask =
    "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)";

  return (
    <section style={DOT_BG} className="py-20">
      {/* Infinite Scroll Track */}
      <div
        className="cert-band mt-4 inline-flex w-full flex-nowrap overflow-hidden py-4"
        style={{ WebkitMaskImage: mask, maskImage: mask }}
      >
        <style>{`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .cert-band:hover .cert-track {
            animation-play-state: paused !important;
          }
        `}</style>
        <CertList onSelect={setSelectedImage} />
        <CertList hidden onSelect={setSelectedImage} />
      </div>

      {/* Fullscreen modal preview when clicked */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-amber-500/30 bg-[#141210] p-2 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-amber-500 hover:text-black"
            >
              ✕ Close
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage}
              alt="Expanded Certificate"
              className="h-auto max-h-[80vh] w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}