"use client";

import { motion } from "framer-motion";
import { Zap, Bot, TrendingUp } from "lucide-react";
import GlassCard from "./ui/GlassCard";

const highlights = [
  { icon: Zap, label: "Years in Web3", value: "4+" },
  { icon: Bot, label: "Automations Built", value: "20+" },
  { icon: TrendingUp, label: "Trading EAs Deployed", value: "50+" },
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-text-muted leading-relaxed">
              I&apos;m <span className="text-text font-semibold">Jashan</span>, a Web3 research
              and intel analyst with over 4 years of experience navigating the blockchain
              ecosystem. I specialize in dissecting protocols, analyzing tokenomics, and
              delivering actionable intelligence on the ever-evolving crypto landscape.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              I&apos;m also deep into{" "}
              <span className="text-cyan">AI automation</span>—building intelligent workflows
              with <span className="text-purple">N8N</span>, deploying{" "}
              <span className="text-cyan">Claude agents</span>, and leveraging{" "}
              <span className="text-purple">MCPs</span> to create systems that work smarter,
              not harder.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              On the trading side, I develop{" "}
              <span className="text-magenta">Expert Advisors (EAs)</span> using MQL5 for
              MetaTrader 5—algorithmic trading strategies that execute with precision in
              the forex and crypto markets.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <GlassCard
                key={item.label}
                className="flex items-center gap-6"
                glow={index === 0 ? "cyan" : index === 1 ? "purple" : "none"}
                delay={0.3 + index * 0.15}
              >
                <div
                  className={`p-4 rounded-xl ${
                    index === 0
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
    </section>
  );
}
