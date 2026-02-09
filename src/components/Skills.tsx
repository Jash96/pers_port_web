"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  Search,
  FileText,
  TrendingUp,
  Workflow,
  Plug,
  Cpu,
  Bot,
  LineChart,
  BarChart3,
  Zap,
  Code2,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";

const skillPillars = [
  {
    title: "Web3 Research & Intel",
    icon: Wallet,
    color: "cyan",
    gradient: "from-cyan to-cyan/50",
    skills: [
      { name: "Protocol Analysis", icon: Search },
      { name: "Tokenomics Research", icon: FileText },
      { name: "Market Intelligence", icon: TrendingUp },
    ],
    description: "4+ years analyzing blockchain protocols, DeFi ecosystems, and delivering actionable Web3 intelligence.",
  },
  {
    title: "AI Automation",
    icon: Bot,
    color: "purple",
    gradient: "from-purple to-purple/50",
    skills: [
      { name: "N8N Workflows", icon: Workflow },
      { name: "Claude Agents & MCPs", icon: Cpu },
      { name: "API Integrations", icon: Plug },
    ],
    description: "Building intelligent automation systems with N8N, Claude agents, and Model Context Protocols.",
  },
  {
    title: "Algo Trading",
    icon: LineChart,
    color: "magenta",
    gradient: "from-magenta to-magenta/50",
    skills: [
      { name: "MQL5 Development", icon: Code2 },
      { name: "Expert Advisors", icon: Zap },
      { name: "Strategy Backtesting", icon: BarChart3 },
    ],
    description: "Developing automated trading algorithms and Expert Advisors for MetaTrader 5 platforms.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
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
            [ 02 / Expertise ]
          </motion.span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-text">What I </span>
            <span className="text-gradient">Do</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <GlassCard
                className="h-full flex flex-col"
                hover={true}
                glow={pillar.color as "cyan" | "purple" | "none"}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${pillar.gradient}`}
                >
                  <pillar.icon className="text-void" size={32} />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-text mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm mb-6 leading-relaxed flex-grow">
                  {pillar.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {pillar.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + skillIndex * 0.1 }}
                    >
                      <skill.icon
                        size={18}
                        className={
                          pillar.color === "cyan"
                            ? "text-cyan"
                            : pillar.color === "purple"
                            ? "text-purple"
                            : "text-magenta"
                        }
                      />
                      <span className="text-text text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
