# CLAUDE.md — Portfolio Redesign Journey

## What this repo is

Personal portfolio site for Jashan (j45h.xyz). Lives on Vercel, deployed from `main`.
The current `main` is the **previous version** of the site, built on the previous machine before a wipe.

## What we're doing now

Working on a **full redesign** on the `redesign` branch. Vercel auto-creates a preview URL for this branch on push — `main` stays untouched until the redesign is ready to merge.

### Important rule for the AI agent

**Do not treat the current code in this repo as a design reference.** The existing components, layout, styling, and content choices are from the old version and are being replaced. Read the code when needed for stack/tooling context (Next.js config, build setup, etc.), but do not use it to infer what the new design "should" look like.

The new design will arrive via:
- A `design.md` (to be added to this repo) describing the new direction
- Mockups/screenshots dropped into `design/` (to be created)
- Pasted output from Claude design, Stitch, or other design tools

Until those land, the agent should not start building UI. Ask for the design brief first.

## Stack

- Next.js 16 (App Router, Turbopack/webpack dev on port 8080)
- React 19
- Tailwind CSS v4
- Framer Motion
- lucide-react
- TypeScript
- Deployed on Vercel

`npm run dev` → http://localhost:8080

## Workflow

- All redesign work happens on the `redesign` branch
- Push to `redesign` → Vercel preview URL updates (does NOT touch j45h.xyz)
- When the redesign is approved, merge `redesign` → `main` → Vercel redeploys j45h.xyz

## Journey log

Keep brief, dated notes here as the redesign progresses. Newest at top.

- **2026-05-18** — Cloned repo to Mac, created `redesign` branch, wrote this CLAUDE.md. No design brief yet; gathering inspiration and mockups externally before any code changes.
