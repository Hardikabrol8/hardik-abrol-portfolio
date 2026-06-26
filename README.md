# Hardik Abrol — Portfolio

A premium, animated personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Content is sourced from Hardik's resume and GitHub (`github.com/Hardikabrol8`).

**Run it locally:**

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

**Production build:**

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

---

## 1. What's included

- Dark, glassmorphism "premium" theme with a custom palette, Inter/Space Grotesk/JetBrains Mono type system
- A boot-sequence loader, scroll progress bar, mouse glow, animated grid + gradient blobs, and a signature **animated neural-network canvas** behind the hero (a nod to the ML focus, instead of a generic decorative blob)
- Terminal/CLI-style "eyebrows" (`$ whoami`, `$ cat skills.json`, etc.) used as the section-heading signature motif
- Framer Motion scroll reveals, stagger animations, 3D tilt on project cards, animated stat counters
- A GSAP-driven infinite tech-stack marquee
- Fully responsive navbar with active-section highlighting and a mobile menu
- A live GitHub stats block that fetches your public repo/follower counts directly from the GitHub API in the visitor's browser, plus GitHub README-stats badges and a contribution heatmap
- A working contact form wired to EmailJS, with a graceful `mailto:` fallback if EmailJS isn't configured
- Basic SEO: meta description/keywords, Open Graph + Twitter card tags (including a generated `og-image.png`), `robots.txt`, `sitemap.xml`
- All content lives in plain data files under `src/data/` — update your info without touching component code

## 2. Project structure

```
src/
  assets/         static images (add your own photos/screenshots here)
  components/     reusable UI: Navbar, Button, GlassCard, ProjectCard, etc.
  sections/       one file per page section (Hero, About, Skills, Projects, ...)
  animations/     shared Framer Motion variants
  hooks/          useActiveSection, useGithubStats
  utils/          tiny helpers (cn for classNames)
  constants/      navLinks
  data/           ALL editable content: projects.js, skills.js, experience.js,
                  certifications.js, education.js, socials.js, about.js,
                  currentlyLearning.js
  pages/          Home.jsx assembles all sections
```

## 3. Things you'll likely want to personalize

1. **Resume file** — drop your actual PDF at `public/resume.pdf`. The "Download Resume" buttons already link to `/resume.pdf`.
2. **Profile photo** — the hero currently uses a styled "HA" monogram instead of a real photo placeholder. If you'd like a real photo, add it to `src/assets/images/` and swap the monogram block in `src/sections/Hero.jsx` for an `<img>`.
3. **EmailJS** — copy `.env.example` to `.env`, create a free account at emailjs.com, and fill in your Service ID, Template ID, and Public Key. Until you do, the form opens the visitor's email client instead of silently failing.
4. **Open Graph URL** — `index.html` and `public/sitemap.xml` / `robots.txt` reference a placeholder domain (`hardikabrol.dev`). Update these once you have a real deployed URL.
5. **Content** — everything in `src/data/` was generated from your resume and the three public repos with the most detail (`Mental_Health_Predictor`, `Bike_Rental_System`, `Topsis`). If you add new repos or want different copy, just edit the relevant data file — no component changes needed.

## 4. Deploying

This is a static Vite build, so it deploys cleanly to Vercel, Netlify, Cloudflare Pages, or GitHub Pages:

```bash
npm run build
```

Upload the resulting `dist/` folder, or connect the repo directly to your host of choice (build command `npm run build`, output directory `dist`).

## 5. Notes

- The stats images / contribution graph call public third-party badge services (`github-readme-stats`, `ghchart.rshah.org`) — they need real internet access in the visitor's browser to render.
- `npm run lint` runs `oxlint` over `src/` for a quick sanity check after edits.
