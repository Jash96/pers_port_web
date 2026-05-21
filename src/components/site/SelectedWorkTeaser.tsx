"use client";
import Link from "next/link";
import { useReveal } from "./hooks";
import { SectionHead } from "./SectionHead";
import { IconArrow } from "./IconArrow";

const ITEMS = [
  {
    n: "01",
    year: "'21 — ongoing",
    title: "Systematic Trading Systems",
    kind: "Trading / Systems",
    blurb:
      "Forward-tested FX and crypto strategy tooling built around MT5, MQL5, Python, and risk-aware research.",
  },
  {
    n: "02",
    year: "'24 — ongoing",
    title: "AI Automation Work",
    kind: "AI / Automation",
    blurb:
      "Telegram assistants, market-news publishing workflows, RAG support, and CRM automations built for real operating use.",
  },
  {
    n: "03",
    year: "'25 — ongoing",
    title: "Cambre Station",
    kind: "Trading / Scanner",
    blurb:
      "A read-only FX and crypto scanner with a Python backend, TimescaleDB history, Redis state, and a Next.js dashboard.",
  },
  {
    n: "04",
    year: "'22 — ongoing",
    title: "Blockchain Data Analysis",
    kind: "Web3 / Analytics",
    blurb:
      "DuneSQL dashboards and on-chain research views that translate protocol activity into readable market signal.",
  },
];

export function SelectedWorkTeaser() {
  const ref = useReveal<HTMLUListElement>();
  return (
    <section className="section selected" id="work">
      <SectionHead
        num="03"
        label="Work"
        title={<>Selected <em>work</em>.</>}
      />
      <ul className="selected__list reveal-stagger" ref={ref}>
        {ITEMS.map((it) => (
          <li key={it.n} className="selected__row">
            <Link
              href="/projects"
              style={{ display: "contents" }}
              aria-label={`${it.title} — ${it.kind}`}
            >
              <span className="selected__num meta">{it.n}</span>
              <span className="selected__year meta dim-2">{it.year}</span>
              <span className="selected__title display">{it.title}</span>
              <span className="selected__kind meta">{it.kind}</span>
              <span className="selected__blurb dim">{it.blurb}</span>
              <span className="selected__arrow">
                <IconArrow size={16} rotate={-45} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div style={{ textAlign: "center", marginTop: 56 }}>
        <Link href="/projects" className="btn">
          Read all work
          <span className="btn-arrow">
            <IconArrow size={12} rotate={-45} />
          </span>
        </Link>
      </div>
    </section>
  );
}
