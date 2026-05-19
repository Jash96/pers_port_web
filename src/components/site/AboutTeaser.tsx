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
        lede="Singaporean. Music-head, web3 native now building with AI. Eternally curious."
      />
      <div className="about-teaser__body reveal-stagger" ref={ref}>
        <div className="about-teaser__portrait">
          <PortraitSlot
            src="/personal-photos/jashan.jpg"
            alt="Jashan in Douro Valley"
            ratio="1-1"
            objectPosition="42% 58%"
            placeholder="Drop a portrait — 4:5 works best"
            corner="image"
          />
        </div>
        <div className="about-teaser__text body-measure">
          <p>
            Active with tennis, gym, football, and trying out random new things like climbing,
            cycling, hiking. I love good food, exploring the world, really good music, and vibes.
          </p>
          <p>
            Professional expertise in <span className="accent">web3/crypto product</span> and
            analyst work, with a developed interest in finance (trad-fi and digital assets) where I
            develop systematic trading algos. More recently, have been building full-stack
            applications and workflows with spec-driven AI development. Academically trained in
            aerospace engineering.
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
