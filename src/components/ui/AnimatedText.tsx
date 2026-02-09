"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
}

export default function AnimatedText({ texts, className = "" }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="text-gradient">{displayText}</span>
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-cyan ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}
