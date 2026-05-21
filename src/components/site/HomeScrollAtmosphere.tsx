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

  const nodeOneY = useTransform(progress, [0, 1], [-36, 56]);
  const nodeTwoY = useTransform(progress, [0, 1], [42, -48]);
  const nodeThreeX = useTransform(progress, [0, 1], [-48, 58]);

  if (reducedMotion) {
    return <div className="scroll-atmosphere scroll-atmosphere--still" aria-hidden="true" />;
  }

  return (
    <div className="scroll-atmosphere" aria-hidden="true">
      <motion.div className="scroll-atmosphere__node scroll-atmosphere__node--one" style={{ y: nodeOneY }} />
      <motion.div className="scroll-atmosphere__node scroll-atmosphere__node--two" style={{ y: nodeTwoY }} />
      <motion.div className="scroll-atmosphere__node scroll-atmosphere__node--three" style={{ x: nodeThreeX }} />
    </div>
  );
}
