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
  features?: Feature[];
  href?: string;
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
      "Messari is a crypto market intelligence company serving institutions that need research, data, and workflow-grade context. I work on Intel, an enterprise product for market analysts, exchanges, funds, and public-sector teams.",
    points: [
      "Own coverage systems for institutional crypto intelligence across 500+ digital assets.",
      "Translate protocol, governance, security, and market events into product-ready signal.",
      "Work across research, data, engineering, and commercial teams to improve time-to-insight.",
    ],
    metrics: [
      ["Assets covered", "500+"],
      ["Briefs authored", "15k+"],
      ["Latency cut", "~50%"],
    ],
    media: "/home_images/web3_website_photo1.jpeg",
    mediaCaption: "Enterprise intelligence / Messari Intel",
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
      "Treehouse Finance builds analytics and structured-product tooling for digital-asset markets. I worked across research and market coverage, connecting protocol context with investor decision-making.",
    points: [
      "Defined research and product requirements for DeFi portfolio analytics.",
      "Covered macro, on-chain, and market-structure signals for institutional readers.",
      "Built automated research workflows that improved coverage rhythm and consistency.",
    ],
    metrics: [
      ["Tenure", "10 mo"],
      ["Markets", "TradFi + DeFi"],
      ["Focus", "Liquidity"],
    ],
    media: "/04_Project/dune0.jpg",
    mediaCaption: "Research systems / DeFi analytics",
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
      "Rolls-Royce Singapore operates in high-reliability aerospace manufacturing. My internship sat inside digital manufacturing, where software, production discipline, and factory realities meet.",
    points: [
      "Tested GelSight tactile measurement workflows in a regulated manufacturing environment.",
      "Built cost-benefit analysis supporting roughly GBP 40,000 in asset savings.",
      "Programmed a Sawyer collaborative robot with Python and Intera5 for shop-floor automation.",
    ],
    metrics: [
      ["Duration", "6 mo"],
      ["Savings case", "GBP 40k"],
      ["Domain", "Industry 4.0"],
    ],
    media: "/02_4_Project/Rag_App_2.jpg",
    mediaCaption: "Digital manufacturing / automation study",
  },
  {
    id: "saab",
    company: "SAAB attachment",
    shortCompany: "SAAB",
    year: "July 2020 - June 2021",
    role: "Final-year project attachment",
    stack: ["Python", "Computer vision", "YOLOv3", "Deep learning"],
    tags: ["Engineering", "Computer Vision", "Detection"],
    intro:
      "A year-long applied engineering attachment shaped around defense-adjacent systems work: research, prototyping, and documentation judged by reliability rather than spectacle.",
    points: [
      "Built a real-time drone-detection workflow using convolutional neural networks.",
      "Worked with YOLOv3 and computer-vision pipelines targeting 30fps detection.",
      "Turned open-ended technical exploration into a disciplined final-year engineering output.",
    ],
    metrics: [
      ["Duration", "12 mo"],
      ["Target", "30fps"],
      ["Method", "YOLOv3"],
    ],
    media: "/02_3_Project/Personal_Assistant_master.jpg",
    mediaCaption: "Applied detection / final-year attachment",
  },
];

const PROFESSIONAL_INDEX_ITEM: IndexItem = {
  n: "01",
  year: "2020 - now",
  title: "professional work exp.",
  kind: "Experience",
  stack: ["Messari", "Treehouse", "Rolls-Royce", "SAAB"],
  tags: ["Professional", "Research", "Engineering", "Product"],
  media: PROFESSIONAL_EXPERIENCE[0].media,
  mediaCaption: "Tabbed roles / professional experience",
};

const PRODUCT_DEVELOPMENTS: Project[] = [
  {
    n: "02",
    year: "2021 - now",
    title: "Systematic trading systems",
    subtitle: "Expert advisors, forward tests, and a long relationship with risk",
    kind: "Trading / Systems",
    role: "Product Manager and Developer",
    stack: ["MT5", "MQL5", "Python", "Hyperliquid API"],
    tags: ["Trading", "FX", "Automation"],
    blurb:
      "Five years building and managing automated trading systems, primarily for FX on MetaTrader 5, with newer experiments around AI-assisted execution and crypto-native infrastructure.",
    points: [
      "Built and reviewed 100+ strategy variants across FX and crypto market conditions.",
      "Worked on optimizer models, neural-network experiments, and forward-testing discipline.",
      "Kept the product philosophy simple: surface signal, constrain risk, avoid theatrics.",
    ],
    metrics: [
      ["Years building", "5"],
      ["Strategies", "100+"],
      ["Primary venue", "MT5"],
    ],
    media: "/home_images/algotrading_art.jpeg",
    mediaCaption: "Systems research / execution tooling",
  },
  {
    n: "03",
    year: "2024 - now",
    title: "AI automation work",
    subtitle: "Personal agents, research pipes, and SME operating systems",
    kind: "AI / Automation",
    role: "Automation Architect and Builder",
    stack: ["n8n", "Claude Code", "OpenClaw", "Hermes Agent", "RAG"],
    tags: ["AI", "Agents", "Automation"],
    blurb:
      "A set of practical automations across personal productivity, research distribution, content operations, and client-facing workflow design.",
    points: [
      "Built multimodal personal assistants with n8n, Claude Code, OpenClaw, and Hermes Agent.",
      "Shipped economic-calendar and news workflows for Telegram and social publishing.",
      "Designed social-media automation and a custom CRM workspace for an SME client.",
    ],
    metrics: [
      ["Workflows", "20+"],
      ["Client CRM", "1"],
      ["Mode", "Agentic"],
    ],
    media: "/home_images/ai_automation_art.jpeg",
    mediaCaption: "Automation topology / agent workflows",
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
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    tags: ["Web", "Full-stack", "Design"],
    blurb:
      "A collection of web builds for this portfolio and external businesses, with attention to interface quality, fast iteration, and maintainable delivery.",
    points: [
      "Designed and shipped content-aware websites rather than template-first pages.",
      "Worked across frontend, deployment, integrations, and practical backend concerns.",
      "Kept the output quiet, fast, and easy for real operators to maintain.",
    ],
    metrics: [
      ["Stack", "Next.js"],
      ["Deploy", "Vercel"],
      ["Mode", "Full-stack"],
    ],
    media: "/02_4_Project/Rag_App_1.jpg",
    mediaCaption: "Web systems / interface work",
  },
  {
    n: "05",
    year: "2023 - now",
    title: "Crypto wallet security MCP",
    subtitle: "Wallet-address checks for sanctions exposure and security context",
    kind: "Security / MCP",
    role: "Developer",
    stack: ["MCP", "Wallet intelligence", "Sanctions screening", "Security analysis"],
    tags: ["MCP", "Crypto", "Security"],
    blurb:
      "A custom MCP server concept for crypto wallet-address analysis, focused on detecting sanctioned-address exposure and producing structured security context.",
    points: [
      "Designed for wallet-address intake, screening, and readable risk output.",
      "Frames sanctions exposure and address-level security context for analyst workflows.",
      "Prepared to link out to the GitHub repository once the readme is ready.",
    ],
    metrics: [
      ["Interface", "MCP"],
      ["Focus", "Wallets"],
      ["Link", "Pending"],
    ],
    media: "/04_Project/dune1.jpg",
    mediaCaption: "Security context / wallet intelligence",
  },
  {
    n: "06",
    year: "2024 - now",
    title: "True trading companion",
    subtitle: "A calmer product surface for signal, testing, and execution psychology",
    kind: "Product / Trading",
    role: "Product Owner and Founder",
    stack: ["Next.js", "FastAPI", "Python", "Market data", "TradingView charts"],
    tags: ["Product", "Trading", "Dashboard"],
    blurb:
      "A passion project with a serious product spine: accelerate bespoke signal discovery, support forward testing, and keep execution decisions grounded.",
    points: [
      "Surfaces signals according to precise strategies rather than generic market noise.",
      "Combines multi-market data, forward-testing records, and strategy dashboards.",
      "Treats trader psychology as part of the product, not a footnote.",
    ],
    metrics: [
      ["Markets", "FX + crypto"],
      ["Backend", "FastAPI"],
      ["Status", "Building"],
    ],
    media: "/03_Project/AlgoTrading_example2.jpg",
    mediaCaption: "Trading companion / forward-testing view",
  },
];

const FILTERS = ["All", "Professional", "AI", "Trading", "Web", "Security"];

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

const INDEX_ITEMS: IndexItem[] = [
  PROFESSIONAL_INDEX_ITEM,
  ...PRODUCT_DEVELOPMENTS.map(productToIndexItem),
];

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
        <div className="eyebrow">[ Projects / 03 ]</div>
        <div className="meta dim-2">{count} works / 2020 - 2026</div>
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
          fig. {project.n} - {project.mediaCaption}
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
            Read the case study <IconArrow size={12} rotate={-45} />
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

  return (
    <article className="spread spread--professional reveal-stagger" ref={ref}>
      <div className="spread__media">
        <div className="slot-frame slot-frame--4-3 slot-frame--filled">
          <div className="slot-frame__tick" />
          <div className="slot-frame__corner">[ fig. 01 ]</div>
          <Media src={active.media} alt={active.company} />
        </div>
        <div className="spread__media-cap meta dim-2">
          fig. 01 - {active.mediaCaption}
        </div>
      </div>

      <div className="spread__body">
        <div className="spread__head">
          <span className="meta dim-2">01 / {active.year}</span>
          <span className="meta">Professional</span>
        </div>
        <h2 className="spread__title display">
          professional work exp<span className="accent">.</span>
        </h2>
        <p className="spread__sub">Institutional research, product systems, and applied engineering.</p>

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

function ProjectsSpreads({
  showProfessional,
  products,
}: {
  showProfessional: boolean;
  products: Project[];
}) {
  return (
    <>
      {showProfessional && (
        <WorkSection
          eyebrow="[ Experience ]"
          title="professional work exp."
          lede="A compact view of the roles that shaped the research, product, and engineering side of the work."
        >
          <div className="projects-spreads">
            <ProfessionalExperienceSpread />
          </div>
        </WorkSection>
      )}

      {products.length > 0 && (
        <WorkSection
          eyebrow="[ Builds ]"
          title="projects and product developments."
          lede="Systems, tools, and product ideas built around trading, automation, security, and useful web software."
        >
          <div className="projects-spreads">
            {products.map((p, i) => (
              <ProjectSpread key={p.n} project={p} idx={showProfessional ? i + 1 : i} />
            ))}
          </div>
        </WorkSection>
      )}
    </>
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
  const [filter, setFilter] = useState("All");
  const [layout, setLayout] = useState<"index" | "spreads">("spreads");
  const showProfessional = matchesFilter(PROFESSIONAL_INDEX_ITEM, filter);
  const filteredProducts = PRODUCT_DEVELOPMENTS.filter((p) =>
    matchesFilter(productToIndexItem(p), filter)
  );
  const indexItems = INDEX_ITEMS.filter((p) => matchesFilter(p, filter));

  return (
    <>
      <Grain />
      <Cursor />
      <Nav />
      <main className="projects-page">
        <ProjectsHeader
          count={INDEX_ITEMS.length}
          activeFilter={filter}
          onFilter={setFilter}
          layout={layout}
          onLayout={setLayout}
        />
        {layout === "spreads" ? (
          <ProjectsSpreads showProfessional={showProfessional} products={filteredProducts} />
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
