"use client";

import { motion } from "framer-motion";
import { Zap, Bot, TrendingUp } from "lucide-react";
import GlassCard from "./ui/GlassCard";

const highlights = [
  { icon: Zap, label: "Years in Web3", value: "4+" },
  { icon: Bot, label: "Automations Built", value: "20+" },
  { icon: TrendingUp, label: "Trading EAs Deployed", value: "100+" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            [ 01 / About ]
          </motion.span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-text">The </span>
            <span className="text-gradient">Story</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {/* New Bio Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div
              className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-purple/20 mix-blend-overlay z-10" />
              <img
                src="/personal-photos/jashan.jpg"
                alt="Jashan"
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Bio Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-text">
                A Bit About Me
              </h3>
              <p className="text-xl text-text font-medium leading-relaxed">
                Singaporean. Audiophile. Eternally curious.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                Avid music connoisseur, spanning from trance, house, indie, and a lot more. I love traveling abroad and gaining new experiences, when I get the chance. A foodie at heart for sure.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                I'm truly happy when I get opportunities to be creative, and I enjoy conversations of profound topics with friends. I keep myself physically active and I enjoy tennis.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                Originally with a background in Aerospace Engineering, I ventured into Computing &amp; Data Analysis and eventually pivoted to digital-asset finance as an analyst. Mandarin (Chinese) is my second language that I took throughout my schooling years.
              </p>
            </motion.div>
          </div>

          {/* Existing Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-text mb-6">
                Professional Focus
              </h3>
              <p className="text-lg text-text-muted leading-relaxed">
                I am a <span className="text-cyan font-semibold">Web3 and digital-asset Intel Analyst</span> with over 4 years of experience navigating the blockchain ecosystem. I specialize in dissecting protocols, analyzing tokenomics, and delivering actionable market intelligence on this ever-evolving landscape.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                I also dive into <span className="text-purple">AI automation</span>—building intelligent workflows with N8N, deploying Claude agents, and leveraging MCPs and RAG to create systems that work smarter, not harder.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                Another passion of mine lies in developing <span className="text-magenta">Expert Advisors (EAs)</span>, algorithmic trading strategies that execute with precision in various markets.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <GlassCard
                  key={item.label}
                  className="flex items-center gap-6"
                  glow={index === 0 ? "cyan" : index === 1 ? "purple" : "magenta"}
                  delay={0.3 + index * 0.15}
                >
                  <div
                    className={`p-4 rounded-xl ${index === 0
                      ? "bg-cyan/10 text-cyan"
                      : index === 1
                        ? "bg-purple/10 text-purple"
                        : "bg-magenta/10 text-magenta"
                      }`}
                  >
                    <item.icon size={28} />
                  </div>
                  <div>
                    <div
                      className="text-3xl font-bold text-text"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.value}
                    </div>
                    <div className="text-text-muted text-sm">{item.label}</div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
