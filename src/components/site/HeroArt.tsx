"use client";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const smooth = {
  stiffness: 92,
  damping: 28,
  mass: 0.35,
};

export function HeroArt() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const progress = useSpring(scrollY, smooth);
  const titleY = useTransform(progress, [0, 900], [0, -86]);
  const titleScale = useTransform(progress, [0, 900], [1, 0.96]);
  const textureY = useTransform(progress, [0, 900], [0, 58]);
  const textureX = useTransform(progress, [0, 900], [0, -32]);
  const pathRotate = useTransform(progress, [0, 900], [0, -4]);
  const noteY = useTransform(progress, [0, 900], [0, 34]);
  const fade = useTransform(progress, [0, 650, 900], [1, 0.9, 0.36]);
  const instrumentY = useTransform(progress, [0, 780], [0, -42]);
  const instrumentRotate = useTransform(progress, [0, 780], [-8, 18]);
  const instrumentScale = useTransform(progress, [0, 780], [0.96, 1.06]);
  const orbitOffset = useTransform(progress, [0, 780], [0, 1]);
  const traceLength = useTransform(progress, [0, 780], [0.18, 1]);

  return (
    <section className="hero hero-art reveal-stagger in" id="top">
      <motion.div
        className="hero-art__texture"
        aria-hidden="true"
        style={reducedMotion ? undefined : { x: textureX, y: textureY, opacity: fade }}
      >
        <span className="hero-art__wash hero-art__wash--one" />
        <span className="hero-art__wash hero-art__wash--two" />
        <span className="hero-art__wash hero-art__wash--three" />
        <span className="hero-art__contour hero-art__contour--one" />
        <span className="hero-art__contour hero-art__contour--two" />
        <span className="hero-art__mist hero-art__mist--one" />
        <span className="hero-art__mist hero-art__mist--two" />
      </motion.div>

      <motion.svg
        className="hero-art__signal"
        viewBox="0 0 1200 720"
        aria-hidden="true"
        style={reducedMotion ? undefined : { rotate: pathRotate, opacity: fade }}
      >
        <path d="M78 548 C 252 338, 338 620, 520 382 S 814 134, 1118 232" />
        <path d="M184 630 C 344 458, 432 526, 606 350 S 842 238, 1018 122" />
        <path d="M34 398 C 210 288, 354 420, 488 246 S 780 58, 1164 116" />
      </motion.svg>

      <div className="hero-art__inner">
        <motion.div
          className="hero-art__copy"
          style={reducedMotion ? undefined : { y: titleY, scale: titleScale, opacity: fade }}
        >
          <p className="hero-art__kicker meta">Singapore / folio &rsquo;26</p>
          <h1 className="hero-art__name display">
            Jashan<span className="accent-dot">.</span>
          </h1>
          <motion.div
            className="hero-art__instrument"
            aria-hidden="true"
            style={
              reducedMotion
                ? undefined
                : { y: instrumentY, rotate: instrumentRotate, scale: instrumentScale }
            }
          >
            <span className="hero-art__instrument-glow" />
            <svg className="hero-art__instrument-mark" viewBox="0 0 520 170">
              <defs>
                <linearGradient id="heroInstrumentLine" x1="26" y1="114" x2="492" y2="46">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                  <stop offset="44%" stopColor="currentColor" stopOpacity="0.74" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="heroInstrumentGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                  <stop offset="72%" stopColor="currentColor" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle className="hero-art__instrument-haze" cx="226" cy="82" r="78" />
              <motion.circle
                className="hero-art__instrument-ring hero-art__instrument-ring--outer"
                cx="226"
                cy="82"
                r="68"
                style={reducedMotion ? undefined : { pathLength: traceLength }}
              />
              <circle className="hero-art__instrument-ring hero-art__instrument-ring--mid" cx="226" cy="82" r="43" />
              <circle className="hero-art__instrument-ring hero-art__instrument-ring--inner" cx="226" cy="82" r="15" />
              <motion.path
                className="hero-art__instrument-trace"
                d="M22 112 C 88 56, 144 132, 216 78 S 336 18, 498 52"
                style={reducedMotion ? undefined : { pathLength: traceLength }}
              />
              <path
                className="hero-art__instrument-ticks"
                d="M226 8v15M226 141v15M152 82h15M285 82h15M174 30l11 11M268 124l11 11M174 134l11-11M268 40l11-11"
              />
              <motion.g
                className="hero-art__instrument-orbit"
                style={reducedMotion ? undefined : { pathLength: orbitOffset }}
              >
                <circle cx="168" cy="52" r="3" />
                <circle cx="302" cy="110" r="2.5" />
                <circle cx="402" cy="44" r="2" />
              </motion.g>
              <motion.line
                className="hero-art__instrument-needle"
                x1="226"
                y1="82"
                x2="286"
                y2="58"
                style={reducedMotion ? undefined : { rotate: instrumentRotate }}
              />
              <circle className="hero-art__instrument-core" cx="226" cy="82" r="4" />
              <path className="hero-art__instrument-bars" d="M364 122v-22M384 122V84M404 122V96M424 122V68M444 122V90" />
            </svg>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-art__artpiece"
          aria-hidden="true"
          style={reducedMotion ? undefined : { y: noteY, opacity: fade }}
        >
          <span className="hero-art__art-glow" />
          <span className="hero-art__art-dust hero-art__art-dust--one" />
          <span className="hero-art__art-dust hero-art__art-dust--two" />
          <svg className="hero-art__art-mark" viewBox="0 0 420 300">
            <defs>
              <radialGradient id="heroLensGlow" cx="58%" cy="45%" r="58%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.32" />
                <stop offset="48%" stopColor="currentColor" stopOpacity="0.1" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="heroLensThread" x1="32" y1="226" x2="390" y2="62">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                <stop offset="42%" stopColor="currentColor" stopOpacity="0.52" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle className="hero-art__art-haze" cx="262" cy="132" r="126" />
            <path
              className="hero-art__art-ribbon"
              d="M48 194 C 118 102, 188 234, 272 116 S 364 88, 394 42"
            />
            <path
              className="hero-art__art-thread hero-art__art-thread--one"
              d="M22 206 C 96 156, 146 174, 206 118 S 312 58, 400 84"
            />
            <path
              className="hero-art__art-thread hero-art__art-thread--two"
              d="M88 244 C 152 166, 216 204, 286 134 S 354 64, 386 106"
            />
            <ellipse className="hero-art__art-orbit hero-art__art-orbit--one" cx="262" cy="132" rx="118" ry="45" />
            <ellipse className="hero-art__art-orbit hero-art__art-orbit--two" cx="262" cy="132" rx="72" ry="26" />
            <ellipse className="hero-art__art-orbit hero-art__art-orbit--three" cx="262" cy="132" rx="28" ry="10" />
            <circle className="hero-art__art-core" cx="262" cy="132" r="4" />
            <circle className="hero-art__art-node hero-art__art-node--one" cx="122" cy="166" r="3" />
            <circle className="hero-art__art-node hero-art__art-node--two" cx="334" cy="86" r="3" />
            <path className="hero-art__art-ticks" d="M158 74v18M332 174v18M362 132h20M82 132h22" />
          </svg>
        </motion.div>

        <motion.div
          className="hero-art__scroll meta"
          style={reducedMotion ? undefined : { y: noteY, opacity: fade }}
        >
          Scroll to read
          <svg
            width="10"
            height="22"
            viewBox="0 0 10 22"
            style={{ marginLeft: 8, verticalAlign: "middle", display: "inline-block" }}
          >
            <line x1="5" y1="2" x2="5" y2="16" stroke="currentColor" strokeWidth="0.8" />
            <polyline points="2,13 5,18 8,13" fill="none" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
