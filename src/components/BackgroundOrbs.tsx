"use client";

import { motion } from "framer-motion";

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary cyan orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full animate-float animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, rgba(0, 212, 255, 0) 70%)",
          top: "-10%",
          right: "-10%",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Secondary purple orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full animate-float-delayed animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(168, 85, 247, 0) 70%)",
          bottom: "10%",
          left: "-5%",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
      />

      {/* Tertiary magenta orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full animate-float-slow animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, rgba(236, 72, 153, 0) 70%)",
          top: "40%",
          left: "30%",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
      />

      {/* Small accent orb */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full animate-float"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, rgba(0, 212, 255, 0) 70%)",
          bottom: "30%",
          right: "20%",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.9, ease: "easeOut" }}
      />
    </div>
  );
}
