"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#"
            onClick={scrollToTop}
            className="text-3xl tracking-wide relative z-10 text-white mb-4 md:mb-0"
            style={{ fontFamily: "var(--font-molle)" }}
          >
            Jashan
          </a>

          {/* Credits */}
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-magenta fill-magenta" />
            </motion.span>
            <span>and curiosity</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 glass rounded-xl text-text-muted hover:text-cyan transition-colors"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-white/5">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Jashan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
