"use client";
import { ReactNode } from "react";
import { useReveal } from "./hooks";

export function SectionHead({
  num,
  label,
  title,
  lede,
}: {
  num: string;
  label: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="section-head reveal-stagger" ref={ref}>
      <div>
        <div className="section-num">[ {num} / {label} ]</div>
      </div>
      <div>
        <h2 className="section-title">{title}</h2>
        {lede && (
          <p className="lede dim" style={{ marginTop: 18 }}>
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}
