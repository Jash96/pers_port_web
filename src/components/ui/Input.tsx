"use client";

import { motion } from "framer-motion";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <input
        {...props}
        placeholder=" "
        className={`
          peer w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl
          text-text placeholder-transparent
          focus:outline-none focus:border-cyan focus:shadow-[0_0_20px_rgba(0,212,255,0.3)]
          transition-all duration-300
          ${className}
        `}
      />
      <label
        className="
          absolute left-5 top-4 text-text-muted text-sm
          transition-all duration-300 pointer-events-none
          peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-cyan
          peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-xs
        "
      >
        {label}
      </label>
    </motion.div>
  );
}

export function Textarea({ label, className = "", ...props }: TextareaProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <textarea
        {...props}
        placeholder=" "
        className={`
          peer w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl
          text-text placeholder-transparent resize-none min-h-[150px]
          focus:outline-none focus:border-cyan focus:shadow-[0_0_20px_rgba(0,212,255,0.3)]
          transition-all duration-300
          ${className}
        `}
      />
      <label
        className="
          absolute left-5 top-4 text-text-muted text-sm
          transition-all duration-300 pointer-events-none
          peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-cyan
          peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-xs
        "
      >
        {label}
      </label>
    </motion.div>
  );
}
