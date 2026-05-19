"use client";
import { useReveal } from "./hooks";

export function HeroArt() {
  const ref = useReveal<HTMLElement>({ threshold: 0 });
  return (
    <section className="hero hero-art reveal-stagger in" ref={ref} id="top">
      <div className="hero-art__inner">
        <div className="hero-art__corner-tl">
          <div className="eyebrow">[ Index / 01 ]</div>
          <div className="meta" style={{ marginTop: 6 }}>Jashan — folio &rsquo;26</div>
        </div>
        <div className="hero-art__corner-tr">
          <div className="eyebrow txt-right">Singapore</div>
          <div className="meta txt-right" style={{ marginTop: 6 }}>1.35° N · 103.82° E</div>
        </div>

        <h1 className="hero-art__name display">
          Jashan<span className="accent-dot">.</span>
        </h1>

        <div className="hero-art__subtitle">
          <span className="rule-h" />
          <span className="meta">
            <i />
            analyst · automator · researcher
          </span>
          <span className="rule-h" />
        </div>

        <div className="hero-art__corner-bl meta">
          Scroll to read
          <svg
            width="10"
            height="22"
            viewBox="0 0 10 22"
            style={{ marginLeft: 8, verticalAlign: "middle", display: "inline-block" }}
          >
            <line x1="5" y1="2" x2="5" y2="16" stroke="currentColor" strokeWidth="0.8" />
            <polyline points="2,13 5,18 8,13" fill="none" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>
        <div className="hero-art__corner-br meta">
          [ Remotion scroll · placeholder ]
        </div>
      </div>
    </section>
  );
}
