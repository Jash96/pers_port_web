"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const spring = {
  stiffness: 88,
  damping: 24,
  mass: 0.45,
};

export function HomeScrollAtmosphere() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, spring);

  const railX = useTransform(progress, [0, 1], [-90, 140]);
  const scanY = useTransform(progress, [0, 1], [96, 720]);
  const nodeOneY = useTransform(progress, [0, 1], [-80, 150]);
  const nodeTwoY = useTransform(progress, [0, 1], [130, -120]);
  const nodeThreeX = useTransform(progress, [0, 1], [-140, 150]);
  const progressScale = useTransform(progress, [0, 1], [0.04, 1]);
  const dialRotate = useTransform(progress, [0, 1], [-26, 42]);

  if (reducedMotion) {
    return <div className="scroll-atmosphere scroll-atmosphere--still" aria-hidden="true" />;
  }

  return (
    <div className="scroll-atmosphere" aria-hidden="true">
      <div className="scroll-atmosphere__corner scroll-atmosphere__corner--tl" />
      <div className="scroll-atmosphere__corner scroll-atmosphere__corner--br" />

      <div className="scroll-atmosphere__progress">
        <motion.span style={{ scaleY: progressScale }} />
      </div>

      <motion.div className="scroll-atmosphere__scan" style={{ y: scanY }} />
      <motion.div className="scroll-atmosphere__rail scroll-atmosphere__rail--top" style={{ x: railX }} />
      <motion.div className="scroll-atmosphere__rail scroll-atmosphere__rail--bottom" style={{ x: railX }} />

      <motion.div className="scroll-atmosphere__node scroll-atmosphere__node--one" style={{ y: nodeOneY }} />
      <motion.div className="scroll-atmosphere__node scroll-atmosphere__node--two" style={{ y: nodeTwoY }} />
      <motion.div className="scroll-atmosphere__node scroll-atmosphere__node--three" style={{ x: nodeThreeX }} />

      <motion.div className="scroll-atmosphere__dial" style={{ rotate: dialRotate }}>
        <span />
      </motion.div>
    </div>
  );
}
