"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import RecentWork from "./components/RecentWork";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Certificate from "./components/Certificate";

/* ======================= YOUR EDITABLE DETAILS ======================= */
const NAME = "Aarchi Rai";
const PHOTO_SRC = "/about/hero-wide.jpg"; // your hero image (in /public/about/)
const LABEL = "Aarchi Rai — Portfolio";
const CREAM = "#ffe6cc"; // text color, warm like the glow
const CTA = "See More";
const SLIDES = [
  { title: "Design", text: "A modern and convenient design is the key to successful communication with the client." },
  { title: "Develop", text: "Fast, scalable full-stack builds that turn complex ideas into seamless digital experiences." },
  { title: "Deliver", text: "Pixel-perfect, responsive websites shipped on time and built to convert." },
];
/* ===================================================================== */

/* ---------------- Intro (portfolio logo + doors) ---------------- */
const W = 7948;
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
  "M7450 1792Q7239 1792 7127.5 1664.5Q7016 1537 7016 1296V460Q7016 234 7126.5 117Q7237 0 7450 0Q7663 0 7773.5 117Q7884 234 7884 460V1296Q7884 1537 7772.5 1664.5Q7661 1792 7450 1792ZM7453 1468Q7533 1468 7533 1313V454Q7533 324 7455 324Q7367 324 7367 457V1315Q7367 1397 7387 1432.5Q7407 1468 7453 1468Z",
];

const TRACE_START = 0.2;
const TRACE_TIME = 1.2;
const STAGGER = 0.09;
const FILL_START = 1.9;
const FILL_TIME = 0.9;
const EASE = [0.76, 0, 0.24, 1];

const INTRO_DURATION = 3300;
const DOOR_TIME = 0.8;
const DOOR_HOLD = 300;

function PortfolioMark() {
  return (
    <svg
      viewBox={`${-PAD} ${-PAD} ${W + PAD * 2} ${H + PAD * 2}`}
      className="h-auto w-[340px] overflow-visible sm:w-[500px] md:w-[680px]"
      role="img"
      aria-label="Portfolio"
    >
      <defs>
        <clipPath id="pf-wipe">
          <motion.rect
            x={-PAD}
            y={-PAD}
            height={H + PAD * 2}
            initial={{ width: 0 }}
            animate={{ width: W + PAD * 2 }}
            transition={{ duration: FILL_TIME, delay: FILL_START, ease: EASE }}
          />
        </clipPath>
      </defs>

      <motion.g
        fill="none"
        stroke="#ffffff"
        strokeWidth={26}
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.16 }}
        transition={{ duration: 0.5 }}
      >
        {LETTERS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </motion.g>

      <g fill="none" stroke="#ffffff" strokeWidth={26} strokeLinejoin="round" strokeLinecap="butt">
        {LETTERS.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: TRACE_TIME,
              delay: TRACE_START + i * STAGGER,
              ease: "easeInOut",
            }}
          />
        ))}
      </g>

      <g fill="#ffffff" clipPath="url(#pf-wipe)">
        {LETTERS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}

/* ---------------- New hero ---------------- */

function Hero() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [reduce]);

  const slide = SLIDES[idx];

  return (
    <section className="relative h-screen min-h-[560px] overflow-hidden bg-[#2a0a02]">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap"
      />
      {/* one single full-screen image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTO_SRC}
          alt={NAME}
          draggable={false}
          className="h-full w-full object-cover"
          style={{ objectPosition: "70% 50%" }}
        />
      </motion.div>

      {/* dark shade on the left so text is readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/50 to-transparent" />

      {/* text */}
      <div className="relative z-20 flex h-full flex-col justify-center px-6 pb-24 pt-28 sm:px-12 lg:w-[52%] lg:px-20">
        <motion.p
          key={"l" + idx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] font-light uppercase tracking-[0.45em] sm:text-xs"
          style={{ color: CREAM, opacity: 0.8, fontFamily: "'Jost', sans-serif" }}
        >
          {LABEL}
        </motion.p>

        <motion.h1
          key={"t" + idx}
          initial={{ opacity: 0, y: 20, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-6xl font-light italic leading-[0.95] sm:text-8xl lg:text-[8.5rem]"
          style={{
            color: CREAM,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            letterSpacing: "-0.01em",
            textShadow: "0 0 40px rgba(255,140,60,0.55), 0 0 90px rgba(255,90,30,0.35)",
          }}
        >
          {slide.title}
        </motion.h1>

        <motion.p
          key={"p" + idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-7 max-w-sm text-sm font-light leading-[1.9] tracking-wide sm:text-[15px]"
          style={{ color: CREAM, fontFamily: "'Jost', sans-serif" }}
        >
          {slide.text}
        </motion.p>

        <a href="#work" className="group mt-10 inline-flex w-fit items-center gap-5">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ffe6cc]/50 bg-white/5 text-[#ffe6cc] backdrop-blur-sm transition duration-500 group-hover:bg-[#ffe6cc] group-hover:text-[#5a1a05]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          </span>
          <span className="text-xs font-light uppercase tracking-[0.35em]" style={{ color: CREAM, fontFamily: "'Jost', sans-serif" }}>{CTA}</span>
        </a>

      </div>

    </section>
  );
}

/* ---------------- Page ---------------- */

export default function Home() {
  const [phase, setPhase] = useState("intro");

  const isLoaded = phase === "open";
  const doorsShut = phase === "closing";

  useEffect(() => {
    const closeTimer = setTimeout(() => setPhase("closing"), INTRO_DURATION);
    const openTimer = setTimeout(
      () => setPhase("open"),
      INTRO_DURATION + DOOR_TIME * 1000 + DOOR_HOLD
    );
    return () => {
      clearTimeout(closeTimer);
      clearTimeout(openTimer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoaded ? "" : "hidden";
    // flags used by the CSS below to keep any navbar hidden during the intro
    if (isLoaded) {
      document.body.removeAttribute("data-intro");
      document.body.setAttribute("data-ready", "1");
    } else {
      document.body.setAttribute("data-intro", "1");
      document.body.removeAttribute("data-ready");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-intro");
      document.body.removeAttribute("data-ready");
    };
  }, [isLoaded]);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-clip">
      {/* hide the navbar (wherever it is rendered) until the hero appears */}
      <style>{`
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
      `}</style>

      {/* Intro logo animation */}
      {phase !== "open" && (
        <div data-intro-layer className="fixed inset-0 z-[200] flex items-center justify-center bg-black">
          <div className="relative flex flex-col items-center">
            <PortfolioMark />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="absolute -bottom-12 md:-bottom-14 left-0 text-base sm:text-lg md:text-2xl uppercase tracking-[0.4em] text-neutral-400 font-semibold whitespace-nowrap"
            >
              aarchi rai
            </motion.p>
          </div>
        </div>
      )}

      {/* Doors */}
      <div className={`fixed inset-0 z-[210] overflow-hidden ${phase === "open" ? "pointer-events-none" : ""}`}>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: doorsShut ? "0%" : "-100%" }}
          transition={{ duration: DOOR_TIME, ease: EASE }}
          className="absolute left-0 top-0 h-full w-[51%] bg-black"
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: doorsShut ? "0%" : "100%" }}
          transition={{ duration: DOOR_TIME, ease: EASE }}
          className="absolute right-0 top-0 h-full w-[51%] bg-black"
        />
      </div>

      {isLoaded && <Navbar />}

      {/* First page stays pinned; Recent Work slides up and covers it */}
      <div className="relative">
        <div className="sticky top-0 z-0 h-screen overflow-hidden">{isLoaded && <Hero />}</div>

        <div className="relative z-10 shadow-[0_-40px_80px_rgba(0,0,0,0.7)]">
          <RecentWork />
        </div>
      </div>

      <div className="relative z-10 bg-black">
        <AboutMe />
        <Certificate/>
        <Form />
        <Footer />
      </div>
    </div>
  );
}