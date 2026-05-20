"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
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

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  playbackStart?: number;
  playbackEnd?: number;
};

type ProfessionalExperience = {
  id: string;
  company: string;
  shortCompany: string;
  year: string;
  role: string;
  stack: string[];
  tags: string[];
  intro: string;
  points: string[];
  metrics: [string, string][];
  media: string;
  mediaCaption: string;
  gallery?: GalleryImage[];
  href?: string;
  hrefLabel?: string;
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
  blurb: string;
  points: string[];
  metrics: [string, string][];
  media: string;
  mediaCaption: string;
  gallery?: GalleryImage[];
  features?: Feature[];
  href?: string;
  hrefLabel?: string;
};

type IndexItem = {
  n: string;
  year: string;
  title: string;
  kind: string;
  stack: string[];
  tags: string[];
  media: string;
  mediaCaption: string;
};

type CollectionMode = "projects" | "career";
type LayoutMode = "index" | "spreads";

const PROFESSIONAL_EXPERIENCE: ProfessionalExperience[] = [
  {
    id: "messari",
    company: "Messari, Inc.",
    shortCompany: "Messari",
    year: "June 2023 - present",
    role: "Intel Specialist, Product",
    stack: ["Messari Intel", "Market events", "Taxonomy", "Research ops"],
    tags: ["Institutional", "Web3", "Product"],
    intro:
      "Crypto intelligence product work for institutional clients, translating governance, protocol, market, and on-chain events into usable signal across a broad asset universe.",
    points: [
      "Owned coverage requirements and roadmap inputs across 500+ digital assets.",
      "Authored 15,000+ intelligence briefs spanning governance, protocol mechanics, and infrastructure.",
      "Redesigned research delivery workflows with Engineering and Data, reducing latency by roughly 50%.",
    ],
    metrics: [
      ["Assets covered", "500+"],
      ["Briefs authored", "15k+"],
      ["Latency cut", "~50%"],
    ],
    media: "/gallery/career/messari/image1.png",
    mediaCaption: "Messari Enterprise Intel / crypto intelligence workspace",
    gallery: [
      {
        src: "/gallery/career/messari/image1.png",
        alt: "Messari Enterprise Intel product dashboard",
        caption: "Enterprise Intel / crypto intelligence workspace",
      },
      {
        src: "/gallery/career/messari/image2.png",
        alt: "Messari monitoring product page for agentic crypto event surveillance",
        caption: "Monitoring / agentic event surveillance",
      },
    ],
    href: "https://messari.io/",
    hrefLabel: "Visit Messari",
  },
  {
    id: "treehouse",
    company: "Treehouse Finance",
    shortCompany: "Treehouse",
    year: "May 2022 - Feb 2023",
    role: "Digital Assets Research Analyst",
    stack: ["DeFi research", "SQL", "Portfolio analytics", "Market coverage"],
    tags: ["Research", "DeFi", "Analytics"],
    intro:
      "Digital-asset research and DeFi analytics work connecting portfolio context, liquidity signals, macro coverage, and on-chain data for institutional readers.",
    points: [
      "Defined product requirements for a DeFi portfolio tracker and analytics platform.",
      "Used SQL and on-chain queries to surface pricing, liquidity, and risk signals.",
      "Built automated research workflows that improved macro and on-chain coverage rhythm.",
    ],
    metrics: [
      ["Tenure", "10 mo"],
      ["Markets", "TradFi + DeFi"],
      ["Focus", "Liquidity"],
    ],
    media: "/gallery/career/treehouse/image.png",
    mediaCaption: "Treehouse Finance / DeFi analytics and research",
    gallery: [
      {
        src: "/gallery/career/treehouse/image.png",
        alt: "Treehouse Finance analytics product interface",
        caption: "DeFi analytics / portfolio context",
      },
      {
        src: "/gallery/career/treehouse/image2.png",
        alt: "Treehouse Finance market and portfolio interface",
        caption: "Market coverage / structured DeFi research",
      },
      {
        src: "/gallery/career/treehouse/mevarticle.png",
        alt: "Treehouse research article about MEV",
        caption: "Research writing / MEV market structure",
      },
    ],
    href: "https://www.treehouse.finance/",
    hrefLabel: "Visit Treehouse",
  },
  {
    id: "rolls-royce",
    company: "Rolls-Royce Singapore, Pte. Ltd.",
    shortCompany: "Rolls-Royce",
    year: "Jan 2020 - June 2020",
    role: "Digital Manufacturing Intern",
    stack: ["Industry 4.0", "IoT", "Python", "Intera5"],
    tags: ["Aerospace", "Manufacturing", "Automation"],
    intro:
      "Digital manufacturing internship inside a regulated aerospace production environment, focused on measurement workflows, automation, and shop-floor system integration.",
    points: [
      "Tested GelSight tactile measurement workflows in a high-reliability manufacturing setting.",
      "Built a cost-benefit case supporting roughly GBP 40,000 in asset savings.",
      "Programmed a Sawyer collaborative robot with Python and Intera5 for Industry 4.0 automation.",
    ],
    metrics: [
      ["Duration", "6 mo"],
      ["Savings case", "GBP 40k"],
      ["Domain", "Industry 4.0"],
    ],
    media: "/gallery/career/rolls-royce/image.png",
    mediaCaption: "Rolls-Royce / digital manufacturing study",
    gallery: [
      {
        src: "/gallery/career/rolls-royce/image.png",
        alt: "Rolls-Royce digital manufacturing and aerospace production image",
        caption: "Digital manufacturing / aerospace automation",
      },
    ],
  },
  {
    id: "saab",
    company: "NTU final-year project attachment",
    shortCompany: "NTU / SAAB",
    year: "July 2020 - June 2021",
    role: "Computer Vision Research Attachment",
    stack: ["Python", "Computer vision", "YOLOv3", "Deep learning"],
    tags: ["Engineering", "Computer Vision", "Detection"],
    intro:
      "A year-long applied engineering project shaped around real-time object detection, research discipline, and reliable technical documentation.",
    points: [
      "Built a real-time drone-detection workflow using convolutional neural networks.",
      "Worked with YOLOv3 and computer-vision pipelines targeting 30fps detection.",
      "Turned open-ended technical exploration into a structured aerospace engineering capstone.",
    ],
    metrics: [
      ["Duration", "12 mo"],
      ["Target", "30fps"],
      ["Method", "YOLOv3"],
    ],
    media: "/gallery/career/saab/image.png",
    mediaCaption: "Computer vision / drone detection study",
    gallery: [
      {
        src: "/gallery/career/saab/image.png",
        alt: "Real-time drone detection project interface and detection output",
        caption: "YOLOv3 / real-time drone detection",
      },
    ],
    href: "https://dr.ntu.edu.sg/entities/publication/b896aab6-d5e8-4a7d-aa6b-b012af3167b5",
    hrefLabel: "View NTU publication",
  },
];

const PRODUCT_DEVELOPMENTS: Project[] = [
  {
    n: "02",
    year: "2021 - now",
    title: "Systematic trading systems",
    subtitle: "Expert advisors, forward tests, and a long relationship with risk",
    kind: "Trading / Systems",
    role: "Strategy Lead and Product Manager",
    stack: ["MT5", "MQL5", "Python", "C#", "NinjaTrader"],
    tags: ["Trading", "FX", "Automation"],
    blurb:
      "Five years building and managing automated trading strategies across FX and crypto, with emphasis on forward-testing discipline, parameter research, and risk-aware system design.",
    points: [
      "Handled product and strategy work in a lean team building systematic trading tools.",
      "Developed and reviewed 100+ multi-timeframe strategy variants across market regimes.",
      "Explored optimizer models and neural-network experiments on price data without letting automation outrun risk controls.",
    ],
    metrics: [
      ["Years building", "5"],
      ["Strategies", "100+"],
      ["Primary venue", "MT5"],
    ],
    media: "/gallery/projects/systematic-trading-systems/AlgoTradingExample1.mp4",
    mediaCaption: "Forward-test motion study / MT5 execution",
    gallery: [
      {
        src: "/gallery/projects/systematic-trading-systems/AlgoTradingExample1.mp4",
        alt: "Recorded trading system interface and chart automation",
        caption: "Forward-test motion study / MT5 execution",
        playbackStart: 0.3,
      },
      {
        src: "/gallery/projects/systematic-trading-systems/image.png",
        alt: "Systematic trading chart and strategy dashboard",
        caption: "Strategy research / market structure",
      },
      {
        src: "/gallery/projects/systematic-trading-systems/AlgoTrading_example2.jpg",
        alt: "Trading system interface with market data and chart context",
        caption: "Execution tooling / chart context",
      },
    ],
  },
  {
    n: "03",
    year: "2024 - now",
    title: "AI automation work",
    subtitle: "Personal agents, research pipes, and SME operating systems",
    kind: "AI / Automation",
    role: "Automation Architect and Builder",
    stack: ["n8n", "Claude Code", "OpenClaw", "Hermes Agent", "RAG", "Memory and Context Driven"],
    tags: ["AI", "Agents", "Automation", "Skills", "MCPs", "Spec-driven Dev"],
    blurb:
      "Practical agentic workflows across personal productivity, research distribution, client CRM operations, and business-site support.",
    points: [
      "Built Telegram-based assistants with multi-app integration and natural-language task execution.",
      "Shipped research and news-scraping workflows that format and publish market context to X.",
      "Owned an AI-powered CRM workspace for an SME client, cutting content scoping and lead retrieval overhead.",
    ],
    metrics: [
      ["Workflows", "20+"],
      ["Client CRM", "1"],
      ["Mode", "Agentic"],
    ],
    media: "/gallery/projects/ai-automation-work/image2.png",
    mediaCaption: "AphelionWire / automated crypto news publishing",
    gallery: [
      {
        src: "/gallery/projects/ai-automation-work/image2.png",
        alt: "AphelionWire automated crypto roundup post on X",
        caption: "Crypto news automation / X publishing workflow",
      },
      {
        src: "/gallery/projects/ai-automation-work/image.png",
        alt: "AI automation workflow canvas",
        caption: "Workflow canvas / agentic operations",
      },
      {
        src: "/gallery/projects/ai-automation-work/image3.png",
        alt: "AI automation workflow routing generated content to LinkedIn, X, and Facebook",
        caption: "Multi-channel publishing / generated content pipeline",
      },
    ],
    features: [
      { n: "03.1", title: "Self-updating weekly economic calendar on Telegram", kind: "n8n / Bot" },
      { n: "03.2", title: "Personal assistant with multi-app access", kind: "Agentic AI" },
      { n: "03.3", title: "Crypto news aggregator on X", kind: "Social / LLM" },
      { n: "03.4", title: "RAG chatbot for a business website", kind: "Pinecone / RAG" },
    ],
  },
  {
    n: "04",
    year: "2024 - now",
    title: "Websites and full-stack applications",
    subtitle: "Small, sharp web products with clean production habits",
    kind: "Web / Product",
    role: "Designer and Full-stack Developer",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Framer Motion", "Vercel"],
    tags: ["Web", "Full-stack", "Design"],
    blurb:
      "A compact body of web builds spanning this portfolio, small-business sites, custom CRM surfaces, and automation-backed interfaces.",
    points: [
      "Built this redesign with Next.js 16, React 19, Tailwind v4, Framer Motion, TypeScript, and Vercel.",
      "Designed production-minded interfaces that pair editorial presentation with maintainable component structure.",
      "Worked across frontend, deployment, CRM automation, and practical integration glue for real operators.",
    ],
    metrics: [
      ["Stack", "Next 16"],
      ["Motion", "Framer"],
      ["Deploy", "Vercel"],
    ],
    media: "/gallery/projects/websites-and-full-stack-applications/my_website_eg.png",
    mediaCaption: "Portfolio and product surfaces / full-stack web work",
    gallery: [
      {
        src: "/gallery/projects/websites-and-full-stack-applications/my_website_eg.png",
        alt: "Personal portfolio redesign interface",
        caption: "Portfolio redesign / Next.js 16 surface",
      },
      {
        src: "/gallery/projects/websites-and-full-stack-applications/gapwebsite.png",
        alt: "Small business website project",
        caption: "Business website / production landing surface",
      },
      {
        src: "/gallery/projects/websites-and-full-stack-applications/customCRMgap.png",
        alt: "Custom CRM application interface",
        caption: "Custom CRM / client operating workspace",
      },
      {
        src: "/gallery/projects/websites-and-full-stack-applications/gapCRMcustomautomation.png",
        alt: "CRM automation workflow and dashboard",
        caption: "CRM automation / workflow integration",
      },
    ],
  },
  {
    n: "05",
    year: "2022 - now",
    title: "Blockchain Data Analysis",
    subtitle: "DuneSQL dashboards, on-chain context, and research-grade market views",
    kind: "Web3 / Analytics",
    role: "Data Analyst and Researcher",
    stack: ["DuneSQL", "SQL", "DeFi", "Dashboards", "On-chain data"],
    tags: ["Analytics", "Web3", "Research"],
    blurb:
      "On-chain analytics work using DuneSQL and crypto research context to turn blockchain activity into readable dashboards and market explanations.",
    points: [
      "Built dashboards that expose protocol, user, and market behavior through queryable on-chain data.",
      "Used DuneSQL alongside research judgment to connect raw transactions with investment and product context.",
      "Kept outputs readable for analysts who need signal without digging through query plumbing.",
    ],
    metrics: [
      ["Query layer", "DuneSQL"],
      ["Focus", "On-chain"],
      ["Mode", "Research"],
    ],
    media: "/gallery/projects/blockchain-data-analysis/image.png",
    mediaCaption: "Dune analytics / on-chain research dashboard",
    gallery: [
      {
        src: "/gallery/projects/blockchain-data-analysis/image.png",
        alt: "Dune analytics dashboard with blockchain metrics",
        caption: "Dune dashboard / on-chain market view",
      },
      {
        src: "/gallery/projects/blockchain-data-analysis/image2.png",
        alt: "Blockchain data dashboard with charts and metrics",
        caption: "Protocol analytics / data synthesis",
      },
      {
        src: "/gallery/projects/blockchain-data-analysis/dune2.jpg",
        alt: "Dune dashboard screen for crypto analytics",
        caption: "Dashboard detail / research-grade views",
      },
    ],
    href: "https://dune.com/pepperones/jashan-tw",
    hrefLabel: "View Dune example",
  },
  {
    n: "06",
    year: "2025 - now",
    title: "Crypto wallet security MCP",
    subtitle: "Wallet-address checks for sanctions exposure and security context",
    kind: "Security / MCP",
    role: "Developer",
    stack: ["MCP", "Wallet intelligence", "Sanctions screening", "Security analysis"],
    tags: ["MCP", "Crypto", "Security"],
    blurb:
      "A custom MCP server concept for wallet-address analysis, focused on sanctions exposure, suspicious counterparty context, and structured analyst output.",
    points: [
      "Designed for wallet-address intake, screening, and readable risk output.",
      "Frames sanctions exposure and address-level security context for analyst workflows.",
      "Treats MCP as the interface layer between LLM workflows and crypto security checks.",
    ],
    metrics: [
      ["Interface", "MCP"],
      ["Focus", "Wallets"],
      ["Mode", "Security"],
    ],
    media: "/gallery/projects/crypto-wallet-security-mcp/image1.png",
    mediaCaption: "Wallet security MCP / address-level risk context",
    gallery: [
      {
        src: "/gallery/projects/crypto-wallet-security-mcp/image1.png",
        alt: "Crypto wallet security MCP interface",
        caption: "Wallet check / MCP intake",
      },
      {
        src: "/gallery/projects/crypto-wallet-security-mcp/image2.png",
        alt: "Wallet address screening result view",
        caption: "Screening result / sanctions context",
      },
      {
        src: "/gallery/projects/crypto-wallet-security-mcp/image3.png",
        alt: "Crypto wallet security analysis output",
        caption: "Security output / analyst summary",
      },
    ],
  },
  {
    n: "07",
    year: "2024 - now",
    title: "Cambre Station",
    subtitle: "A read-only market scanner for FX, crypto, and event-aware confluence",
    kind: "Product / Trading",
    role: "Product Owner and Founder",
    stack: ["FastAPI", "APScheduler", "pandas-ta", "TimescaleDB", "Redis", "Next.js"],
    tags: ["Product", "Trading", "Dashboard"],
    blurb:
      "Cambre Station is a personal FX/crypto market scanner that reads price data, scores strategy confluences, and pings Telegram. It never places trades.",
    points: [
      "Python brain pulls candles from OANDA, Binance, yfinance for DXY, and ForexFactory event data.",
      "Stores history in Postgres/TimescaleDB, keeps live state in Redis, and runs via Docker Compose on a Hostinger VPS.",
      "Uses a Next.js and Tailwind dashboard on Vercel as a read-only window into scanner state.",
    ],
    metrics: [
      ["Markets", "FX + crypto"],
      ["Backend", "FastAPI"],
      ["Mode", "Read-only"],
    ],
    media: "/gallery/projects/cambre-station/image.png",
    mediaCaption: "Cambre Station / read-only market scanner",
    gallery: [
      {
        src: "/gallery/projects/cambre-station/image.png",
        alt: "Cambre Station trading companion dashboard",
        caption: "Scanner dashboard / market confluence",
      },
      {
        src: "/gallery/projects/cambre-station/image2.png",
        alt: "Cambre Station market scanner detail screen",
        caption: "Signal detail / read-only strategy state",
      },
      {
        src: "/gallery/projects/cambre-station/image3.png",
        alt: "Cambre Station dashboard with strategy and market panels",
        caption: "Dashboard surface / Python backend window",
      },
    ],
  },
];

const PROJECT_FILTERS = ["All", "AI", "Trading", "Web", "Analytics", "Security"];

const COLLECTIONS: Record<
  CollectionMode,
  {
    label: string;
    eyebrow: string;
    description: string;
    count: string;
  }
> = {
  projects: {
    label: "Projects",
    eyebrow: "Independent systems",
    description: "Trading tools, automations, web builds, and product experiments.",
    count: `${PRODUCT_DEVELOPMENTS.length} builds`,
  },
  career: {
    label: "Career record",
    eyebrow: "Professional roles",
    description: "A compact view of the research, product, and engineering roles.",
    count: `${PROFESSIONAL_EXPERIENCE.length} roles`,
  },
};

function matchesFilter(p: IndexItem, f: string) {
  if (f === "All") return true;
  const hay = `${p.kind} ${p.tags.join(" ")}`.toLowerCase();
  return hay.includes(f.toLowerCase());
}

function productToIndexItem(project: Project): IndexItem {
  return {
    n: project.n,
    year: project.year,
    title: project.title,
    kind: project.kind,
    stack: project.stack,
    tags: project.tags,
    media: project.media,
    mediaCaption: project.mediaCaption,
  };
}

function experienceToIndexItem(item: ProfessionalExperience, index: number): IndexItem {
  return {
    n: String(index + 1).padStart(2, "0"),
    year: item.year,
    title: item.company,
    kind: item.role,
    stack: item.stack,
    tags: item.tags,
    media: item.media,
    mediaCaption: item.mediaCaption,
  };
}

const PROJECT_INDEX_ITEMS = PRODUCT_DEVELOPMENTS.map(productToIndexItem);
const CAREER_INDEX_ITEMS = PROFESSIONAL_EXPERIENCE.map(experienceToIndexItem);

function ProjectsHeader({
  count,
  activeFilter,
  onFilter,
  layout,
  onLayout,
  activeCollection,
  onCollection,
}: {
  count: number;
  activeFilter: string;
  onFilter: (f: string) => void;
  layout: LayoutMode;
  onLayout: (l: LayoutMode) => void;
  activeCollection: CollectionMode;
  onCollection: (mode: CollectionMode) => void;
}) {
  const active = COLLECTIONS[activeCollection];

  return (
    <section className="projects-header">
      <div className="projects-header__top">
        <div className="eyebrow">[ Projects / 03 ]</div>
        <div className="meta dim-2">{count} shown / 2020 - 2026</div>
      </div>
      <h1 className="projects-header__title display">
        Work <em>archive</em>
        <span className="accent">.</span>
      </h1>
      <p className="projects-header__lede lede dim">
        Professional experience and independent systems, split so you can move straight to the
        signal you came for.
      </p>

      <div className="projects-mode-switch" role="tablist" aria-label="Project collection">
        {(Object.keys(COLLECTIONS) as CollectionMode[]).map((mode) => {
          const item = COLLECTIONS[mode];
          const selected = activeCollection === mode;
          return (
            <button
              key={mode}
              className={`projects-mode ${selected ? "projects-mode--on" : ""}`}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onCollection(mode)}
            >
              <span className="projects-mode__meta">
                <span>{item.eyebrow}</span>
                <span>{item.count}</span>
              </span>
              <span className={`projects-mode__title projects-mode__title--${mode} display`}>
                {mode === "projects" && selected ? (
                  <>
                    <span className="projects-mode__dot" aria-hidden="true" />
                    <em className="projects-mode__selected-word">selected </em>
                    <span>Projects</span>
                  </>
                ) : mode === "career" ? (
                  <>
                    Career record
                    <span className="projects-mode__dot projects-mode__dot--after" aria-hidden="true" />
                  </>
                ) : (
                  item.label
                )}
              </span>
              <span className="projects-mode__copy">{item.description}</span>
            </button>
          );
        })}
      </div>

      <div className="projects-header__controls">
        {activeCollection === "projects" ? (
          <div className="projects-header__filters" role="tablist" aria-label="Project filters">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`pill ${activeFilter === f ? "pill--on" : ""}`}
                onClick={() => onFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        ) : (
          <div className="projects-header__filters projects-header__filters--static">
            <span className="meta dim-2">{active.description}</span>
          </div>
        )}
        <div className="projects-header__layout">
          <span className="meta dim-2">View</span>
          <button
            type="button"
            className={`pill ${layout === "spreads" ? "pill--on" : ""}`}
            onClick={() => onLayout("spreads")}
          >
            Spreads
          </button>
          <button
            type="button"
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

function Media({
  src,
  alt,
  playbackStart = 0,
  playbackEnd = 1,
}: {
  src: string;
  alt: string;
  playbackStart?: number;
  playbackEnd?: number;
}) {
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const getPlaybackWindow = useCallback((video: HTMLVideoElement) => {
    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    const start = duration * Math.min(Math.max(playbackStart, 0), 0.98);
    const end = duration * Math.min(Math.max(playbackEnd, playbackStart + 0.01), 1);
    return { start, end };
  }, [playbackEnd, playbackStart]);

  useEffect(() => {
    if (!isVideo) return;
    const video = videoRef.current;
    if (!video) return;

    const seekToStart = () => {
      const { start } = getPlaybackWindow(video);
      if (start > 0 && video.currentTime < start - 0.25) {
        video.currentTime = start;
      }
      void video.play();
    };

    if (video.readyState >= 1) seekToStart();
    video.addEventListener("loadedmetadata", seekToStart);
    return () => video.removeEventListener("loadedmetadata", seekToStart);
  }, [getPlaybackWindow, isVideo, src]);

  if (isVideo) {
    return (
      <video
        ref={videoRef}
        src={src}
        aria-label={alt}
        autoPlay
        muted
        playsInline
        onLoadedMetadata={(event) => {
          const video = event.currentTarget;
          const { start } = getPlaybackWindow(video);
          if (start > 0) video.currentTime = start;
          void video.play();
        }}
        onTimeUpdate={(event) => {
          const video = event.currentTarget;
          const { start, end } = getPlaybackWindow(video);
          if (start > 0 && video.currentTime < start - 0.5) {
            video.currentTime = start;
            return;
          }
          if (end > 0 && video.currentTime >= end - 0.08) {
            video.currentTime = start;
            void video.play();
          }
        }}
        onEnded={(event) => {
          const video = event.currentTarget;
          const { start } = getPlaybackWindow(video);
          video.currentTime = start;
          void video.play();
        }}
      />
    );
  }
  return <Image src={src} alt={alt} fill sizes="(max-width: 880px) 100vw, 50vw" />;
}

function galleryFromMedia(title: string, media: string, mediaCaption: string, gallery?: GalleryImage[]) {
  if (gallery && gallery.length > 0) return gallery;
  return [{ src: media, alt: title, caption: mediaCaption }];
}

function ArchiveMediaFrame({
  title,
  fig,
  media,
  mediaCaption,
  gallery,
}: {
  title: string;
  fig: string;
  media: string;
  mediaCaption: string;
  gallery?: GalleryImage[];
}) {
  const items = galleryFromMedia(title, media, mediaCaption, gallery);

  if (items.length > 1) {
    return <KineticArchiveStack items={items} fig={fig} title={title} />;
  }

  return (
    <>
      <div className="slot-frame slot-frame--4-3 slot-frame--filled">
        <div className="slot-frame__tick" />
        <div className="slot-frame__corner">[ fig. {fig} ]</div>
        <Media
          src={items[0].src}
          alt={items[0].alt}
          playbackStart={items[0].playbackStart}
          playbackEnd={items[0].playbackEnd}
        />
      </div>
      <div className="spread__media-cap meta dim-2">
        fig. {fig} - {items[0].caption}
      </div>
    </>
  );
}

function KineticArchiveStack({
  items,
  fig,
  title,
}: {
  items: GalleryImage[];
  fig: string;
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const boundedIndex = ((activeIndex % items.length) + items.length) % items.length;
  const active = items[boundedIndex] ?? items[0];
  const previewIndexes = Array.from(
    { length: Math.min(3, Math.max(items.length - 1, 0)) },
    (_, index) => (boundedIndex + index + 1) % items.length
  );

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % items.length) + items.length) % items.length);
    },
    [items.length]
  );

  const goNext = useCallback(() => goTo(boundedIndex + 1), [boundedIndex, goTo]);
  const goPrev = useCallback(() => goTo(boundedIndex - 1), [boundedIndex, goTo]);

  const transition = reduceMotion
    ? { duration: 0.18 }
    : { type: "spring" as const, stiffness: 130, damping: 24, mass: 0.9 };

  return (
    <section
      className="kin-stack"
      aria-roledescription="carousel"
      aria-label={`${title} image gallery`}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") goNext();
        if (event.key === "ArrowLeft") goPrev();
      }}
    >
      <div className="kin-stack__stage">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={active.src}
            className="kin-stack__active"
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -54 || info.velocity.x < -420) goNext();
              if (info.offset.x > 54 || info.velocity.x > 420) goPrev();
            }}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 44, rotate: 1.4, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -38, rotate: -1.2, scale: 0.985 }}
            transition={transition}
          >
            <Media
              src={active.src}
              alt={active.alt}
              playbackStart={active.playbackStart}
              playbackEnd={active.playbackEnd}
            />
          </motion.div>
        </AnimatePresence>

        <div className="slot-frame__tick" />
        <div className="slot-frame__corner">[ fig. {fig} ]</div>
        <div className="kin-stack__count meta">
          {String(boundedIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </div>
      </div>

      <div className="kin-stack__deck" aria-label="Gallery previews">
        {previewIndexes.map((previewIndex, slot) => {
          const item = items[previewIndex];
          return (
            <motion.button
              key={item.src}
              className={`kin-stack__card kin-stack__card--${slot + 1}`}
              type="button"
              aria-label={`Show ${item.caption}`}
              onClick={() => goTo(previewIndex)}
              layout
              transition={transition}
            >
              <Media
                src={item.src}
                alt={item.alt}
                playbackStart={item.playbackStart}
                playbackEnd={item.playbackEnd}
              />
              <span className="kin-stack__card-index meta">
                {String(previewIndex + 1).padStart(2, "0")}
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className="kin-stack__bar">
        <button className="kin-stack__nav" type="button" aria-label="Previous image" onClick={goPrev}>
          <IconArrow size={14} rotate={135} />
        </button>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={active.caption}
            className="kin-stack__caption meta dim-2"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={transition}
          >
            fig. {fig}.{String(boundedIndex + 1).padStart(2, "0")} - {active.caption}
          </motion.p>
        </AnimatePresence>
        <button className="kin-stack__nav" type="button" aria-label="Next image" onClick={goNext}>
          <IconArrow size={14} rotate={-45} />
        </button>
      </div>
    </section>
  );
}

function ProjectSpread({ project, idx }: { project: Project; idx: number }) {
  const ref = useReveal<HTMLElement>();
  const flip = idx % 2 === 1;
  return (
    <article className={`spread reveal-stagger ${flip ? "spread--flip" : ""}`} ref={ref}>
      <div className="spread__media">
        <ArchiveMediaFrame
          title={project.title}
          fig={project.n}
          media={project.media}
          mediaCaption={project.mediaCaption}
          gallery={project.gallery}
        />
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
        <div className="spread__blurb body-measure">
          <p>{project.blurb}</p>
        </div>
        <SummaryList points={project.points} />
        <dl className="spread__meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.stack.join(" / ")}</dd>
          </div>
          <div>
            <dt>Tags</dt>
            <dd>{project.tags.join(" / ")}</dd>
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
            {project.hrefLabel ?? "Read the case study"} <IconArrow size={12} rotate={-45} />
          </a>
        )}
      </div>
    </article>
  );
}

function SummaryList({ points }: { points: string[] }) {
  return (
    <ol className="spread__summary">
      {points.map((point, index) => (
        <li key={point}>
          <span className="summary-n">{String(index + 1).padStart(2, "0")}</span>
          <span>{point}</span>
        </li>
      ))}
    </ol>
  );
}

function ProfessionalExperienceSpread() {
  const ref = useReveal<HTMLElement>();
  const [activeId, setActiveId] = useState(PROFESSIONAL_EXPERIENCE[0].id);
  const active =
    PROFESSIONAL_EXPERIENCE.find((item) => item.id === activeId) ?? PROFESSIONAL_EXPERIENCE[0];
  const activeFig = String(PROFESSIONAL_EXPERIENCE.findIndex((item) => item.id === active.id) + 1).padStart(
    2,
    "0"
  );

  return (
    <article className="spread spread--professional reveal-stagger" ref={ref}>
      <div className="spread__media">
        <ArchiveMediaFrame
          title={active.company}
          fig={activeFig}
          media={active.media}
          mediaCaption={active.mediaCaption}
          gallery={active.gallery}
        />
      </div>

      <div className="spread__body">
        <div className="spread__head">
          <span className="meta dim-2">
            {activeFig} / {active.year}
          </span>
          <span className="meta">Professional</span>
        </div>

        <div className="experience-tabs" role="tablist" aria-label="Professional experience">
          {PROFESSIONAL_EXPERIENCE.map((item) => {
            const selected = item.id === active.id;
            return (
              <button
                key={item.id}
                id={`experience-tab-${item.id}`}
                className={`experience-tab ${selected ? "experience-tab--on" : ""}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`experience-panel-${item.id}`}
                onClick={() => setActiveId(item.id)}
              >
                <span>{item.shortCompany}</span>
                <small>{item.year}</small>
              </button>
            );
          })}
        </div>

        <section
          id={`experience-panel-${active.id}`}
          className="experience-panel"
          role="tabpanel"
          aria-labelledby={`experience-tab-${active.id}`}
        >
          <div className="experience-panel__top">
            <h3 className="display">{active.company}</h3>
            <p className="meta">{active.role}</p>
          </div>
          <div className="spread__blurb body-measure">
            <p>{active.intro}</p>
          </div>
          <SummaryList points={active.points} />
          <dl className="spread__meta">
            <div>
              <dt>Role</dt>
              <dd>{active.role}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{active.stack.join(" / ")}</dd>
            </div>
            <div>
              <dt>Tags</dt>
              <dd>{active.tags.join(" / ")}</dd>
            </div>
          </dl>
          <div className="spread__metrics">
            {active.metrics.map(([k, v]) => (
              <div key={k} className="spread__metric">
                <div className="display spread__metric-n">{v}</div>
                <div className="meta dim-2">{k}</div>
              </div>
            ))}
          </div>
          {active.href && (
            <a className="spread__cta" href={active.href} target="_blank" rel="noopener noreferrer">
              {active.hrefLabel ?? "Visit company"} <IconArrow size={12} rotate={-45} />
            </a>
          )}
        </section>
      </div>
    </article>
  );
}

function WorkSection({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <section className="work-section">
      <div className="work-section__head">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="display">{title}</h2>
        <p className="dim">{lede}</p>
      </div>
      {children}
    </section>
  );
}

function ProjectsSpreads({ products }: { products: Project[] }) {
  return (
    <WorkSection
      eyebrow="[ Builds ]"
      title="Projects and product developments."
      lede="Systems, tools, and product ideas built around trading, automation, security, and useful web software."
    >
      <div className="projects-spreads">
        {products.map((p, i) => (
          <ProjectSpread key={p.n} project={p} idx={i} />
        ))}
      </div>
    </WorkSection>
  );
}

function CareerRecordSpreads() {
  return (
    <WorkSection
      eyebrow="[ Experience ]"
      title="Career record."
      lede="A compact view of the roles that shaped the research, product, and engineering side of the work."
    >
      <div className="projects-spreads projects-spreads--career">
        <ProfessionalExperienceSpread />
      </div>
    </WorkSection>
  );
}

function ProjectsIndex({ items }: { items: IndexItem[] }) {
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
            <span className="meta dim-2">{p.stack.join(" / ")}</span>
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
              {items[hover].title} <span className="dim-2">- {items[hover].year}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeCollection, setActiveCollection] = useState<CollectionMode>("projects");
  const [filter, setFilter] = useState("All");
  const [layouts, setLayouts] = useState<Record<CollectionMode, LayoutMode>>({
    projects: "spreads",
    career: "spreads",
  });
  const layout = layouts[activeCollection];
  const filteredProducts = PRODUCT_DEVELOPMENTS.filter((p) =>
    matchesFilter(productToIndexItem(p), filter)
  );
  const indexItems =
    activeCollection === "projects"
      ? PROJECT_INDEX_ITEMS.filter((p) => matchesFilter(p, filter))
      : CAREER_INDEX_ITEMS;
  const activeCount = activeCollection === "projects" ? indexItems.length : CAREER_INDEX_ITEMS.length;

  const setActiveLayout = (next: LayoutMode) => {
    setLayouts((current) => ({ ...current, [activeCollection]: next }));
  };

  const setCollection = (next: CollectionMode) => {
    setActiveCollection(next);
    if (next === "career") setFilter("All");
  };

  return (
    <>
      <Grain />
      <Cursor />
      <Nav />
      <main className="projects-page">
        <ProjectsHeader
          count={activeCount}
          activeFilter={filter}
          onFilter={setFilter}
          layout={layout}
          onLayout={setActiveLayout}
          activeCollection={activeCollection}
          onCollection={setCollection}
        />
        {layout === "spreads" ? (
          activeCollection === "projects" ? (
            <ProjectsSpreads products={filteredProducts} />
          ) : (
            <CareerRecordSpreads />
          )
        ) : (
          <ProjectsIndex items={indexItems} />
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
