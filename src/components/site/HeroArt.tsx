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
          <p className="hero-art__statement">
            Crypto intelligence, automation, and trading systems. Quiet tools for markets that move
            fast.
          </p>
        </motion.div>

        <motion.div
          className="hero-art__drift"
          aria-hidden="true"
          style={reducedMotion ? undefined : { y: noteY, opacity: fade }}
        >
          <span>market structure</span>
          <span>agentic workflows</span>
          <span>risk systems</span>
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
