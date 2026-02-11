"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "cyan" | "purple" | "magenta" | "none";
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = "none",
  delay = 0,
}: GlassCardProps) {
  const glowClass = glow === "cyan" ? "glow-cyan" : glow === "purple" ? "glow-purple" : glow === "magenta" ? "glow-magenta" : "";

  return (
    <motion.div
      className={`glass p-6 ${glowClass} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hover
          ? {
            scale: 1.02,
            boxShadow:
              glow === "cyan"
                ? "0 0 60px rgba(0, 212, 255, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)"
                : glow === "purple"
                  ? "0 0 60px rgba(168, 85, 247, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)"
                  : glow === "magenta"
                    ? "0 0 60px rgba(236, 72, 153, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)"
                    : "0 20px 40px rgba(0, 0, 0, 0.3)",
          }
          : {}
      }
      transition-property="transform, box-shadow"
    >
      {children}
    </motion.div>
  );
}
