import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            [ Let&apos;s talk ]
          </div>
          <div className="footer-display">
            Build<br />something<br />quiet.
          </div>
        </div>
        <div className="footer-col">
          <h4>Index</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Elsewhere</h4>
          <ul>
            <li><a href="https://github.com/" target="_blank" rel="noreferrer">Github ↗</a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
            <li><a href="https://x.com/" target="_blank" rel="noreferrer">X / Twitter ↗</a></li>
            <li><a href="mailto:hi@j45h.xyz">Email ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} Jashan</span>
        <span>Singapore · 1.3521° N, 103.8198° E</span>
        <span>v.04 — May &lsquo;26</span>
      </div>
    </footer>
  );
}
