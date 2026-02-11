"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { Input, Textarea } from "./ui/Input";
import Button from "./ui/Button";
import GlassCard from "./ui/GlassCard";

const contactInfo = [
  { icon: Mail, label: "Email", value: "jashanthadani0696@gmail.com" },
  { icon: MapPin, label: "Location", value: "Remote / Singapore" },
  { icon: Clock, label: "Timezone", value: "UTC+8" },
];

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

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-cyan text-sm font-mono uppercase tracking-widest mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            [ 04 / Contact ]
          </motion.span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-text">Hit </span>
            <span className="text-gradient">Me </span>
            <span className="text-text">Up</span>
          </h2>

        </motion.div>

        <div className="flex flex-col items-center justify-center text-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex flex-col items-center gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex flex-col items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-4 glass rounded-2xl text-cyan mb-2">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <div className="text-text-muted text-sm mb-1">{info.label}</div>
                    <div className="text-text font-medium">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links & Email Button */}
            <motion.div
              className="pt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-text-muted text-sm mb-6 uppercase tracking-wider">Connect with me</div>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-xl text-text-muted hover:text-cyan hover:border-cyan/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}

                {/* Email Button */}
                <motion.a
                  href="mailto:jashanthadani0696@gmail.com"
                  className="p-4 glass rounded-xl text-text-muted hover:text-cyan hover:border-cyan/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }} // Delays are sequential based on social links length (3 items -> ~0.8)
                  aria-label="Email"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
