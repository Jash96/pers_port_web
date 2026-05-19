"use client";
import { useReveal } from "./hooks";
import { SectionHead } from "./SectionHead";
import { IconArrow } from "./IconArrow";
import { CONTACT_EMAIL, SocialSignals } from "./SocialSignals";

export function ContactTeaser() {
  const ref = useReveal<HTMLElement>();
  return (
    <section className="section contact-teaser reveal-stagger" ref={ref} id="contact">
      <SectionHead
        num="04"
        label="Contact"
        title={<>Let&rsquo;s <em>talk</em>.</>}
        lede="Open for Web3 research engagements, AI automation projects, and the occasional consultation on systematic trading."
      />
      <div className="contact-teaser__inner">
        <a href={`mailto:${CONTACT_EMAIL}`} className="contact-teaser__big display">
          Write a note
        </a>
        <SocialSignals />
        <div className="contact-teaser__row">
          <div className="meta">
            <div className="dim-2">Currently</div>
            <div>Singapore · GMT+8</div>
          </div>
          <div className="meta">
            <div className="dim-2">Response time</div>
            <div>~24 hours, usually faster</div>
          </div>
          <div className="meta">
            <div className="dim-2">Open for</div>
            <div>Research · Automation · Advisory</div>
          </div>
        </div>
        <div className="contact-teaser__cta">
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn">
            Email me
            <span className="btn-arrow">
              <IconArrow size={12} rotate={-45} />
            </span>
          </a>
          <a href={`mailto:${CONTACT_EMAIL}?subject=Call`} className="btn-ghost">
            Or book a call ↗
          </a>
        </div>
      </div>
    </section>
  );
}
