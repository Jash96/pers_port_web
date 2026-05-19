"use client";
import { useReveal } from "./hooks";
import { SectionHead } from "./SectionHead";
import { PortraitSlot } from "./PortraitSlot";

function Fact({ n, l, suffix = "+" }: { n: string; l: string; suffix?: string }) {
  return (
    <div className="fact">
      <div className="fact__n display">
        {n}
        <span className="dim">{suffix}</span>
      </div>
      <div className="fact__l meta">{l}</div>
    </div>
  );
}

export function AboutTeaser() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="section about-teaser" id="about">
      <SectionHead
        num="02"
        label="About"
        title={<><em>The</em> story.</>}
        lede="Singaporean. Audiophile. Analyst by trade, builder by instinct, eternally curious."
      />
      <div className="about-teaser__body reveal-stagger" ref={ref}>
        <div className="about-teaser__portrait">
          <PortraitSlot ratio="4-5" placeholder="Drop a portrait — 4:5 works best" corner="image" />
          <div
            className="meta dim-2"
            style={{ marginTop: 14, display: "flex", justifyContent: "space-between" }}
          >
            <span>fig. 01</span>
            <span>Douro Valley, &rsquo;24</span>
          </div>
        </div>
        <div className="about-teaser__text body-measure">
          <p>
            Originally an <span className="accent">aerospace engineer</span>, I detoured through
            computing and data analysis before settling into <em>digital-asset finance</em> — where
            the paperwork is on-chain and the day moves at the speed of new blocks.
          </p>
          <p>
            Now I write Web3 research reports, wire AI agents to do the boring half of my job, and
            run algorithmic trading systems on the side. The throughline is{" "}
            <em>systems that quietly do good work</em> — for me, my clients, and the people who
            read what I publish.
          </p>
          <div className="about-teaser__facts">
            <Fact n="04" l="years in Web3" />
            <Fact n="20" l="automations shipped" />
            <Fact n="100" l="research notes" suffix="+" />
            <Fact n="03" l="languages" />
          </div>
        </div>
      </div>
    </section>
  );
}
