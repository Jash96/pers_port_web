"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { Fragment, useRef } from "react";

function wrap(min: number, max: number, value: number) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

function MarqueeRow({ words, dot }: { words: string[]; dot: boolean }) {
  return (
    <span style={{ display: "inline-flex", gap: 56, alignItems: "center" }}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span>{w}</span>
          {dot && <i />}
        </Fragment>
      ))}
    </span>
  );
}

export function Marquee({
  words = ["Research", "Automation", "Systems", "Web3", "Algo Trading", "Writing", "AI Agents"],
  reverse = false,
  dot = true,
}: {
  words?: string[];
  reverse?: boolean;
  dot?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const direction = useRef(reverse ? -1 : 1);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 120,
    damping: 30,
    mass: 0.25,
  });
  const velocityFactor = useTransform(smoothVelocity, [-900, 900], [-4, 4], {
    clamp: false,
  });
  const x = useTransform(baseX, (latest) => `${wrap(-50, 0, latest)}%`);

  useAnimationFrame((_, delta) => {
    if (reducedMotion) return;
    const velocity = velocityFactor.get();
    const nextDirection = velocity < 0 ? -1 : velocity > 0 ? 1 : direction.current;
    direction.current = reverse ? nextDirection * -1 : nextDirection;

    const baseVelocity = 0.9;
    const scrollBoost = Math.min(Math.abs(velocity), 8);
    const moveBy = direction.current * (baseVelocity + scrollBoost) * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="marquee">
      <motion.div
        className="marquee-track"
        style={reducedMotion ? undefined : { x }}
      >
        <MarqueeRow words={words} dot={dot} />
        <MarqueeRow words={words} dot={dot} />
      </motion.div>
    </div>
  );
}
