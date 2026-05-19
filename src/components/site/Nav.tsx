"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useScrolled } from "./hooks";

type LinkItem = { key: string; href: string; label: string; num: string };

const LINKS: LinkItem[] = [
  { key: "home",     href: "/#top",     label: "Index",   num: "01" },
  { key: "about",    href: "/#about",   label: "About",   num: "02" },
  { key: "projects", href: "/projects", label: "Work",    num: "03" },
  { key: "contact",  href: "/#contact", label: "Contact", num: "04" },
];

export function Nav() {
  const scrolled = useScrolled(24);
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const current = document.documentElement.getAttribute("data-theme");
      if (current === "light" || current === "dark") setTheme(current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const isActive = (l: LinkItem) => {
    if (l.href.startsWith("/projects")) return pathname?.startsWith("/projects");
    if (l.href.startsWith("/#")) return pathname === "/";
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
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === "dark" ? "Switch to light" : "Switch to dark"}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
