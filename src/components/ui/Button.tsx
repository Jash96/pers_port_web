"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center px-8 py-4 font-semibold text-sm tracking-wide rounded-2xl transition-all duration-300 overflow-hidden group";

  const variants = {
    primary: `
      bg-gradient-to-r from-cyan to-purple text-void
      hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]
    `,
    secondary: `
      glass border-gradient text-text
      hover:bg-white/10
    `,
    ghost: `
      text-text-muted hover:text-cyan
      hover:bg-white/5
    `,
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
    >
      {content}
    </motion.button>
  );
}
