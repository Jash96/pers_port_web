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
  const titleY = useTransform(progress, [0, 900], [0, -92]);
  const titleScale = useTransform(progress, [0, 900], [1, 0.94]);
  const subtitleY = useTransform(progress, [0, 900], [0, -48]);
  const cornerTopY = useTransform(progress, [0, 900], [0, -28]);
  const cornerBottomY = useTransform(progress, [0, 900], [0, 42]);
  const fade = useTransform(progress, [0, 650, 900], [1, 0.9, 0.36]);

  return (
    <section className="hero hero-art reveal-stagger in" id="top">
      <div className="hero-art__inner">
        <motion.div
          className="hero-art__corner-tl"
          style={reducedMotion ? undefined : { y: cornerTopY, opacity: fade }}
        >
          <div className="eyebrow">[ Index / 01 ]</div>
          <div className="meta" style={{ marginTop: 6 }}>Jashan — folio &rsquo;26</div>
        </motion.div>
        <motion.div
          className="hero-art__corner-tr"
          style={reducedMotion ? undefined : { y: cornerTopY, opacity: fade }}
        >
          <div className="eyebrow txt-right">Singapore</div>
          <div className="meta txt-right" style={{ marginTop: 6 }}>1.35° N · 103.82° E</div>
        </motion.div>

        <motion.h1
          className="hero-art__name display"
          style={reducedMotion ? undefined : { y: titleY, scale: titleScale, opacity: fade }}
        >
          Jashan<span className="accent-dot">.</span>
        </motion.h1>

        <motion.div
          className="hero-art__subtitle"
          style={reducedMotion ? undefined : { x: "-50%", y: subtitleY, opacity: fade }}
        >
          <span className="rule-h" />
          <span className="meta">
            <i />
            analyst · automator · researcher
          </span>
          <span className="rule-h" />
        </motion.div>

        <motion.div
          className="hero-art__corner-bl meta"
          style={reducedMotion ? undefined : { y: cornerBottomY, opacity: fade }}
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
        <motion.div
          className="hero-art__corner-br meta"
          style={reducedMotion ? undefined : { y: cornerBottomY, opacity: fade }}
        >
          [ scroll-linked atmosphere ]
        </motion.div>
      </div>
    </section>
  );
}
