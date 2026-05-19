"use client";
import Link from "next/link";
import { useReveal } from "./hooks";
import { SectionHead } from "./SectionHead";
import { IconArrow } from "./IconArrow";

const ITEMS = [
  {
    n: "01",
    year: "'22 — ongoing",
    title: "Web3 Intel Reports",
    kind: "Research / Writing",
    blurb:
      "Protocol breakdowns, tokenomics autopsies, and the occasional contrarian thesis. Published for analysts and funds.",
  },
  {
    n: "02",
    year: "'24 — ongoing",
    title: "Agentic Workflows",
    kind: "AI / Automation",
    blurb:
      "N8N pipelines, Claude agents, MCP tools and RAG indexes — wired together so the dull half of analysis writes itself.",
  },
  {
    n: "03",
    year: "'23 — ongoing",
    title: "MetaTrader 5 Systems",
    kind: "Algo / Quant",
    blurb:
      "MQL5 expert advisors with conservative sizing, multi-timeframe filters, and a refusal to over-fit.",
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
        lede="A short reading list. Long-form case studies live on the Projects page."
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
