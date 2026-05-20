# AGENTS.md

## Cursor Cloud specific instructions

### Repository structure

The `main` branch contains only a README placeholder. All product code lives on feature branches:

- **`cursor/rebuild-georgian-blue-site-d0b2`** — Next.js 16 website (Georgian Blue Water). This is the primary product.
- **`cursor/harbourview-plumbing-website-6c74`** — Static HTML/CSS landing page (Harbourview Plumbing). No build tooling needed.

### Georgian Blue Water (Next.js)

- **Node.js >= 18** required (Next.js 16 requirement). The environment ships with Node.js 22.
- **Package manager:** npm (lockfile: `package-lock.json`).
- **Scripts:** `npm run dev` (dev server), `npm run build` (production build), `npm run lint` (ESLint).
- **Dev server** runs on port 3000 by default.
- No environment variables, databases, or external services are required.
- No test framework is configured — there are no automated tests to run.

### Harbourview Plumbing (Static site)

- Plain HTML/CSS, no dependencies.
- Serve with `python3 -m http.server 8080` from the branch checkout directory.
