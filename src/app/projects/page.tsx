"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";
import { Grain } from "@/components/site/Grain";
import { IconArrow } from "@/components/site/IconArrow";
import { useReveal } from "@/components/site/hooks";

type Feature = {
  n: string;
  title: string;
  kind: string;
};

type Project = {
  n: string;
  year: string;
  title: string;
  subtitle: string;
  kind: string;
  role: string;
  stack: string[];
  tags: string[];
  blurb: ReactNode;
  metrics: [string, string][];
  media: string;
  mediaCaption: string;
  features?: Feature[];
  href?: string;
};

const PROJECTS: Project[] = [
  {
    n: "01",
    year: "2022 — now",
    title: "Messari Intel",
    subtitle: "Three years covering 500+ digital assets",
    kind: "Research",
    role: "Intel Analyst · Full-time",
    stack: ["Messari", "On-chain data", "Long-form"],
    tags: ["Web3", "Research", "Enterprise"],
    blurb: (
      <>
        <p>
          Three years providing coverage of 500+ digital assets for{" "}
          <a href="https://messari.io/intel" target="_blank" rel="noopener noreferrer">
            Messari Intel
          </a>
          , an enterprise product used by Coinbase, hedge funds, node validators and others.
          Published 10,000+ summaries on protocol updates, regulatory changes, and security events
          — became a domain specialist across networks and applications.
        </p>
        <p>
          Helped secure an established protocol lead for Messari Research and Due Diligence
          services, closing a $100K deal. Previously digital asset research at Treehouse Finance.
        </p>
      </>
    ),
    metrics: [
      ["Summaries shipped", "10k+"],
      ["Assets covered", "500+"],
      ["Years in seat", "3"],
    ],
    media: "/home_images/web3_website_photo1.jpeg",
    mediaCaption: "Coverage · Messari Intel",
  },
  {
    n: "02",
    year: "2024 — now",
    title: "Agentic Workflows",
    subtitle: "Twenty pipelines that do the dull half of analysis",
    kind: "AI / Automation",
    role: "Designer · Builder",
    stack: ["n8n", "Claude", "MCP", "RAG"],
    tags: ["AI", "Agents", "Automation"],
    blurb: (
      <>
        <p>
          Built 20+ AI-powered workflows with n8n and Claude Code — from economic-calendar
          Telegram bots to Web3 news aggregators on X. Recently dove into agentic coding with
          Antigravity and OpenClaw, building everything from personal assistants to professional
          site builders.
        </p>
      </>
    ),
    metrics: [
      ["Workflows", "20+"],
      ["MCPs wired", "11"],
      ["Hours saved / wk", "~14"],
    ],
    media: "/home_images/ai_automation_art.jpeg",
    mediaCaption: "Topology · agent constellation",
    features: [
      { n: "02.1", title: "Self-updating weekly economic calendar on Telegram", kind: "n8n · Bot" },
      { n: "02.2", title: "Personal assistant with multi-app access", kind: "Agentic AI" },
      { n: "02.3", title: "Crypto news aggregator on X", kind: "Social · LLM" },
      { n: "02.4", title: "RAG chatbot for a business website", kind: "Pinecone · RAG" },
    ],
  },
  {
    n: "03",
    year: "2021 — now",
    title: "Counterweight",
    subtitle: "MetaTrader 5 expert advisors built to lose small, often",
    kind: "Algo / Quant",
    role: "Strategy · Engineering",
    stack: ["MQL5", "Python", "Backtrader"],
    tags: ["Algo", "FX", "Crypto"],
    blurb: (
      <>
        <p>
          4+ years building automated trading strategies with a small team. Developed 100+
          strategies as project manager and deployed several to live markets with multi-hundred
          percent returns. The focus is systematic process and risk management, not heroic calls.
        </p>
      </>
    ),
    metrics: [
      ["Strategies built", "100+"],
      ["Live systems", "6"],
      ["Years building", "4+"],
    ],
    media: "/home_images/algotrading_art.jpeg",
    mediaCaption: "Equity curve · live systems",
  },
  {
    n: "04",
    year: "2023 — now",
    title: "Liquidity Atlas",
    subtitle: "On-chain sleuthing, queries, and the occasional dashboard",
    kind: "Research · Data",
    role: "Analyst",
    stack: ["SQL", "Dune", "On-chain"],
    tags: ["Stablecoins", "On-chain", "Research"],
    blurb: (
      <>
        <p>
          Occasionally investigate trends and performance of crypto protocols and networks on{" "}
          <a href="https://dune.com/pepperones" target="_blank" rel="noopener noreferrer">
            Dune
          </a>
          , building queries and dashboards to pull meaningful signal out of raw on-chain data.
        </p>
      </>
    ),
    metrics: [
      ["Dashboards", "12"],
      ["Queries", "60+"],
      ["Chains tracked", "9"],
    ],
    media: "/04_Project/dune0.jpg",
    mediaCaption: "Dashboard · stablecoin flows",
  },
];

const FILTERS = ["All", "Research", "AI", "Algo", "Writing"];

function matchesFilter(p: Project, f: string) {
  if (f === "All") return true;
  const hay = `${p.kind} ${p.tags.join(" ")}`.toLowerCase();
  return hay.includes(f.toLowerCase());
}

function ProjectsHeader({
  count,
  activeFilter,
  onFilter,
  layout,
  onLayout,
}: {
  count: number;
  activeFilter: string;
  onFilter: (f: string) => void;
  layout: "index" | "spreads";
  onLayout: (l: "index" | "spreads") => void;
}) {
  return (
    <section className="projects-header">
      <div className="projects-header__top">
        <div className="eyebrow">[ Projects · 03 ]</div>
        <div className="meta dim-2">{count} works · 2021 – 2026</div>
      </div>
      <h1 className="projects-header__title display">
        Selected <em>work</em>
        <span className="accent">.</span>
      </h1>
      <p className="projects-header__lede lede dim">
        A reading list rather than a portfolio. Each entry is a system or a body of work that
        earned its place by being used, not by being pretty.
      </p>
      <div className="projects-header__controls">
        <div className="projects-header__filters" role="tablist">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`pill ${activeFilter === f ? "pill--on" : ""}`}
              onClick={() => onFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="projects-header__layout">
          <span className="meta dim-2">View</span>
          <button
            className={`pill ${layout === "spreads" ? "pill--on" : ""}`}
            onClick={() => onLayout("spreads")}
          >
            Spreads
          </button>
          <button
            className={`pill ${layout === "index" ? "pill--on" : ""}`}
            onClick={() => onLayout("index")}
          >
            Index
          </button>
        </div>
      </div>
    </section>
  );
}

function Media({ src, alt }: { src: string; alt: string }) {
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);
  if (isVideo) {
    return <video src={src} autoPlay loop muted playsInline />;
  }
  return <Image src={src} alt={alt} fill sizes="(max-width: 880px) 100vw, 50vw" />;
}

function ProjectSpread({ project, idx }: { project: Project; idx: number }) {
  const ref = useReveal<HTMLElement>();
  const flip = idx % 2 === 1;
  return (
    <article className={`spread reveal-stagger ${flip ? "spread--flip" : ""}`} ref={ref}>
      <div className="spread__media">
        <div className="slot-frame slot-frame--4-3 slot-frame--filled">
          <div className="slot-frame__tick" />
          <div className="slot-frame__corner">[ fig. {project.n} ]</div>
          <Media src={project.media} alt={project.title} />
        </div>
        <div className="spread__media-cap meta dim-2">
          fig. {project.n} — {project.mediaCaption}
        </div>
      </div>
      <div className="spread__body">
        <div className="spread__head">
          <span className="meta dim-2">
            {project.n} / {project.year}
          </span>
          <span className="meta">{project.kind}</span>
        </div>
        <h2 className="spread__title display">
          {project.title}
          <span className="accent">.</span>
        </h2>
        <p className="spread__sub">{project.subtitle}</p>
        <div className="spread__blurb body-measure">{project.blurb}</div>
        <dl className="spread__meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.stack.join(" · ")}</dd>
          </div>
          <div>
            <dt>Tags</dt>
            <dd>{project.tags.join(" · ")}</dd>
          </div>
        </dl>
        {project.features && (
          <div className="spread__features">
            <div className="spread__features-label">Featured workflows</div>
            <ul>
              {project.features.map((f) => (
                <li key={f.n}>
                  <span className="feat-n">{f.n}</span>
                  <span className="feat-t">{f.title}</span>
                  <span className="feat-k">{f.kind}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="spread__metrics">
          {project.metrics.map(([k, v]) => (
            <div key={k} className="spread__metric">
              <div className="display spread__metric-n">{v}</div>
              <div className="meta dim-2">{k}</div>
            </div>
          ))}
        </div>
        {project.href && (
          <a className="spread__cta" href={project.href} target="_blank" rel="noopener noreferrer">
            Read the case study <IconArrow size={12} rotate={-45} />
          </a>
        )}
      </div>
    </article>
  );
}

function ProjectsSpreads({ items }: { items: Project[] }) {
  return (
    <div className="projects-spreads">
      {items.map((p, i) => (
        <ProjectSpread key={p.n} project={p} idx={i} />
      ))}
    </div>
  );
}

function ProjectsIndex({ items }: { items: Project[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (previewRef.current && hover !== null) {
        previewRef.current.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 80}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [hover]);

  return (
    <div className="projects-index">
      <div className="projects-index__head meta dim-2">
        <span>No.</span>
        <span>Year</span>
        <span>Title</span>
        <span>Kind</span>
        <span>Stack</span>
        <span />
      </div>
      <ul>
        {items.map((p, i) => (
          <li
            key={p.n}
            className="projects-index__row"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <span className="meta dim-2">{p.n}</span>
            <span className="meta">{p.year}</span>
            <span className="projects-index__title display">{p.title}</span>
            <span className="meta dim">{p.kind}</span>
            <span className="meta dim-2">{p.stack.join(" · ")}</span>
            <span className="projects-index__arrow">
              <IconArrow size={16} rotate={-45} />
            </span>
          </li>
        ))}
      </ul>

      <div
        className="projects-index__preview"
        ref={previewRef}
        data-show={hover !== null ? "1" : "0"}
      >
        {hover !== null && (
          <>
            <div className="projects-index__preview-img">
              <Media src={items[hover].media} alt={items[hover].title} />
            </div>
            <div className="projects-index__preview-cap meta">
              {items[hover].title} <span className="dim-2">— {items[hover].year}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [layout, setLayout] = useState<"index" | "spreads">("spreads");
  const filtered = PROJECTS.filter((p) => matchesFilter(p, filter));

  return (
    <>
      <Grain />
      <Cursor />
      <Nav />
      <main className="projects-page">
        <ProjectsHeader
          count={PROJECTS.length}
          activeFilter={filter}
          onFilter={setFilter}
          layout={layout}
          onLayout={setLayout}
        />
        {layout === "spreads" ? (
          <ProjectsSpreads items={filtered} />
        ) : (
          <ProjectsIndex items={filtered} />
        )}
        <div style={{ textAlign: "center", padding: "0 var(--pad-x) var(--pad-y)" }}>
          <Link href="/#contact" className="btn">
            Get in touch
            <span className="btn-arrow">
              <IconArrow size={12} rotate={-45} />
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
