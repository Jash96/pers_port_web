"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Button from "./ui/Button";
import AnimatedText from "./ui/AnimatedText";

const XIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/jashanthadani/", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/0x_pepperones", label: "X" },
  { icon: Github, href: "https://github.com/Jash96", label: "GitHub" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}


        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-text">Hey, I&apos;m </span>
          <span className="text-gradient">Jashan</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.div
          className="text-xl md:text-2xl lg:text-3xl text-text-muted mb-8 h-[40px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <AnimatedText
            texts={[
              "Web3 Research & Intel Analyst",
              "AI Automation Builder",
              "Algo Trading Developer",
            ]}
            className="text-xl md:text-2xl lg:text-3xl font-medium"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Building at the intersection of{" "}
          <span className="text-cyan">Web3 research</span>,{" "}
          <span className="text-purple">AI-powered automation</span>, and{" "}
          <span className="text-magenta">algorithmic trading</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button variant="primary" href="#projects">
            View My Work
          </Button>
          <Button variant="secondary" href="#contact">
            Get in Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl text-text-muted hover:text-cyan transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-cyan transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
