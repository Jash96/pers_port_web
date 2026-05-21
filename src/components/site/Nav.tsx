"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useScrolled } from "./hooks";

type LinkItem = { key: string; href: string; label: string; num: string };
type Theme = "dark" | "light";
type CurtainPhase = "idle" | "falling" | "rising";

const THEME_COLORS: Record<Theme, string> = {
  light: "#EFE9D8",
  dark: "#0C1411",
};
const CURTAIN_FALL_MS = 860;
const CURTAIN_RISE_MS = 1320;
const CURTAIN_HOLD_MS = 90;

const LINKS: LinkItem[] = [
  { key: "home",     href: "/#top",     label: "Index",   num: "01" },
  { key: "about",    href: "/#about",   label: "About",   num: "02" },
  { key: "projects", href: "/projects", label: "Work",    num: "03" },
  { key: "contact",  href: "/#contact", label: "Contact", num: "04" },
];

export function Nav() {
  const scrolled = useScrolled(24);
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("light");
  const [phase, setPhase] = useState<CurtainPhase>("idle");
  const [pressed, setPressed] = useState(false);
  const [curtainColor, setCurtainColor] = useState(THEME_COLORS.light);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const current = document.documentElement.getAttribute("data-theme");
      if (current === "light" || current === "dark") setTheme(current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      timersRef.current = [];
    };
  }, []);

  const applyTheme = useCallback((next: Theme) => {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("jashan-theme", next);
    } catch {}
  }, []);

  const toggleTheme = useCallback(() => {
    if (phase !== "idle") return;
    const next: Theme = theme === "dark" ? "light" : "dark";
    setCurtainColor(THEME_COLORS[next]);

    setPressed(true);
    setPhase("falling");

    const swapTimer = window.setTimeout(() => {
      applyTheme(next);
      const riseTimer = window.setTimeout(() => {
        setPhase("rising");
        const settleTimer = window.setTimeout(() => {
          setPhase("idle");
          setPressed(false);
        }, CURTAIN_RISE_MS + 80);
        timersRef.current.push(settleTimer);
      }, CURTAIN_HOLD_MS);
      timersRef.current.push(riseTimer);
    }, CURTAIN_FALL_MS);
    timersRef.current.push(swapTimer);
  }, [applyTheme, phase, theme]);

  const isActive = (l: LinkItem) => {
    if (l.href.startsWith("/projects")) return pathname?.startsWith("/projects");
    if (l.href.startsWith("/#")) return pathname === "/" && l.key === "home";
    return false;
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <Link href="/" className="nav-mark" aria-label="Home">
        Jashan
      </Link>
      <div className="nav-right">
        <div className="nav-links">
          {LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`nav-link ${isActive(l) ? "active" : ""}`}
            >
              <span className="nav-num">{l.num}</span>
              {l.label}
            </Link>
          ))}
        </div>
        <span
          className={`theme-toggle__curtain theme-toggle__curtain--${phase}`}
          style={{ backgroundColor: curtainColor }}
          aria-hidden="true"
        />
        <button
          className={`theme-toggle theme-toggle--${theme} ${pressed ? "theme-toggle--pressed" : ""}`}
          onClick={toggleTheme}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => phase === "idle" && setPressed(false)}
          onMouseLeave={() => phase === "idle" && setPressed(false)}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          aria-pressed={theme === "dark"}
          title={theme === "dark" ? "Switch to light" : "Switch to dark"}
          type="button"
        >
          <span className="theme-toggle__icon" aria-hidden="true">
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </span>
          <span className="theme-toggle__label">{theme === "light" ? "Dark" : "Light"}</span>
        </button>
      </div>
    </nav>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
