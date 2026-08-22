# Chirayu Lokhande — AI/ML & Data Science Portfolio

A premium, interactive personal portfolio built with Vite, React, Tailwind CSS v4,
and Framer Motion.
Live Demo: https://chirayu-portfolio-seven.vercel.app
## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

Requires Node 18+.

## Replacing placeholder content

| What | Where | Notes |
|---|---|---|
| Profile photo | `src/assets/profile.png` | Swap this file with a real headshot (same filename). If it fails to load, the hero automatically falls back to a "CL" placeholder card. |
| Resume | `public/resume.pdf` | Replace with your real resume, same filename — the download buttons already point here. |
| Project data | `src/data/projects.js` | Titles, descriptions, tech tags, GitHub/demo links, and the case-study copy shown in the project modal. |
| Skills data | `src/data/skills.js` | Skill categories and hover descriptions. |
| GitHub username | `src/components/GithubSection.jsx` | Change `GITHUB_USERNAME` if needed. Uses the public GitHub REST API with no auth by default; optionally set `VITE_GITHUB_TOKEN` in a local `.env` file to raise the rate limit (never commit real tokens). |
| Contact email | `src/components/Contact.jsx` and `Footer.jsx` | The contact form opens a pre-filled `mailto:` link — there's no backend, by design, so it never pretends to send email itself. |

## Architecture

```
src/
├── components/       # All UI sections + shared primitives (Reveal, MagneticButton, CustomCursor, BackgroundFX)
├── data/              # projects.js, skills.js — content lives here, not hardcoded in components
├── hooks/             # useActiveSection (nav highlighting), useCounter (animated stats)
├── assets/            # profile.png placeholder
├── App.jsx
├── main.jsx
└── index.css          # Design tokens (Tailwind v4 @theme) + global styles
```

## Notes

- Respects `prefers-reduced-motion` throughout (background canvas, counters, custom cursor).
- Custom cursor and mouse-based parallax are automatically disabled on touch devices.
- Background particle count is reduced on small screens for performance.
- Built with accessible semantics: focus states, alt text, keyboard-operable nav and modal (Escape to close).
