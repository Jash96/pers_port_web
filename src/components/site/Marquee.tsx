import { Fragment } from "react";

export function Marquee({
  words = ["Research", "Automation", "Systems", "Web3", "Algo Trading", "Writing", "AI Agents"],
  reverse = false,
  dot = true,
}: {
  words?: string[];
  reverse?: boolean;
  dot?: boolean;
}) {
  const Row = () => (
    <span style={{ display: "inline-flex", gap: 56, alignItems: "center" }}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span>{w}</span>
          {dot && <i />}
        </Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div
        className="marquee-track"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        <Row />
        <Row />
      </div>
    </div>
  );
}
