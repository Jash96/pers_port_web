"use client";

import { motion } from "framer-motion";

interface PreloaderProps {
  progress: number;
}

export default function Preloader({ progress }: PreloaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-64 relative">
        {/* Progress Text */}
        <div className="flex justify-between text-sm text-text-muted mb-2 font-mono">
          <span>Loading Experience</span>
          <span>{Math.round(progress)}%</span>
        </div>

        {/* Progress Bar Background */}
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          {/* Progress Bar Fill */}
          <motion.div
            className="h-full bg-cyan"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
