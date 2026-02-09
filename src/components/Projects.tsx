"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Web3 Intel Reports",
    description:
      "In-depth research reports covering protocol analysis, tokenomics breakdowns, and market intelligence across DeFi, L2s, and emerging blockchain ecosystems.",
    image: "/project-1.jpg",
    tags: ["Web3", "Research", "DeFi", "Analysis"],
    liveUrl: "#",
    githubUrl: "#",
    color: "cyan",
  },
  {
    title: "AI Automation Workflows",
    description:
      "Production-ready N8N workflows integrating Claude agents and MCPs for automated research, data processing, and intelligent task execution.",
    image: "/project-2.jpg",
    tags: ["N8N", "Claude", "MCPs", "Automation"],
    liveUrl: "#",
    githubUrl: "#",
    color: "purple",
  },
  {
    title: "MetaTrader 5 Expert Advisors",
    description:
      "Custom MQL5 trading algorithms with advanced risk management, multi-timeframe analysis, and backtested strategies for forex and crypto markets.",
    image: "/project-3.jpg",
    tags: ["MQL5", "MT5", "Algo Trading", "EAs"],
    liveUrl: "#",
    githubUrl: "#",
    color: "magenta",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowColor =
    project.color === "cyan"
      ? "rgba(0, 212, 255, 0.4)"
      : project.color === "purple"
      ? "rgba(168, 85, 247, 0.4)"
      : "rgba(236, 72, 153, 0.4)";

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="glass overflow-hidden transition-all duration-500"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Image Placeholder */}
        <div className="relative h-56 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              project.color === "cyan"
                ? "from-cyan/20 to-abyss"
                : project.color === "purple"
                ? "from-purple/20 to-abyss"
                : "from-magenta/20 to-abyss"
            }`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-6xl font-bold text-white/10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              0{index + 1}
            </span>
          </div>
          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6"
          >
            <div className="flex gap-3">
              <motion.a
                href={project.liveUrl}
                className="p-3 glass rounded-xl text-cyan hover:bg-cyan/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
              </motion.a>
              <motion.a
                href={project.githubUrl}
                className="p-3 glass rounded-xl text-text hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3
              className="text-xl font-bold text-text group-hover:text-gradient transition-all duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>
            <ArrowUpRight
              size={20}
              className="text-text-muted group-hover:text-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            />
          </div>
          <p className="text-text-muted text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 text-xs font-mono rounded-full border ${
                  project.color === "cyan"
                    ? "border-cyan/30 text-cyan bg-cyan/5"
                    : project.color === "purple"
                    ? "border-purple/30 text-purple bg-purple/5"
                    : "border-magenta/30 text-magenta bg-magenta/5"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
        style={{ background: glowColor }}
      />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
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
            [ 03 / Work ]
          </motion.span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-text">Featured </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my work in Web3 research, AI automation, and
            algorithmic trading.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-text-muted hover:text-cyan transition-colors group"
            whileHover={{ x: 5 }}
          >
            <span>View all projects</span>
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
