export function IconArrow({
  size = 14,
  rotate = -45,
  stroke = 1.5,
}: {
  size?: number;
  rotate?: number;
  stroke?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)`, transition: "transform 240ms ease" }}
    >
      <path
        d="M5 12 H19 M13 6 L19 12 L13 18"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
