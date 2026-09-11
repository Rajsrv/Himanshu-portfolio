# Himanshu Singh — Portfolio

A single, dependency-free portfolio site for Himanshu Singh, Performance
Marketing Executive. Plain HTML/CSS/JS — no build step, no framework,
no npm install. Clone it, open it, host it.

**Live sections:** Hero · About · Skills · Featured Accounts (case studies)
· Experience · Contact

---

## Folder structure

```
portfolio/
├── index.html              → the whole site (one page)
├── css/
│   └── style.css           → all styling, incl. responsive breakpoints
├── js/
│   └── main.js              → mobile-menu behaviour (closes on link tap)
├── assets/
│   ├── images/
│   │   ├── sudathi-shopify-analytics.png
│   │   ├── sudathi-meta-ads-report.png
│   │   ├── celestial-shopify-analytics.png
│   │   └── celestial-meta-campaigns.png   (spare — not used on the page yet)
│   └── resume/
│       └── Himanshu-Singh-Resume.pdf       → linked from the "Download CV" button
└── README.md
```

Keep this structure intact — `index.html` references the CSS/JS/images
by relative path (`css/style.css`, `assets/images/...`, etc.), so moving
files around will break links.

---

## Run it locally

No build tools needed. Either:

- Double-click `index.html` to open it directly in a browser, **or**
- Serve it properly (recommended, avoids any relative-path quirks):
  ```bash
  cd portfolio
  python3 -m http.server 8000
  # then open http://localhost:8000
  ```

---

## Push it to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Host it for free — GitHub Pages

1. On GitHub, open the repo → **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
3. Branch: `main`, folder: `/ (root)` → **Save**.
4. GitHub gives you a URL in a minute or two:
   `https://<your-username>.github.io/<repo-name>/`

(If you'd rather use Netlify or Vercel instead: both let you drag-and-drop
this same `portfolio/` folder, or connect the GitHub repo directly, no
config needed since there's no build step.)

---

## Customizing content

Everything is plain text inside `index.html` — no CMS, no data file.

| Want to change...            | Where |
|---|---|
| Name, tagline, summary       | `<section class="hero">` near the top of `index.html` |
| Key stats (revenue, ROAS...) | `<section class="about">` → `.stat-grid` |
| Skills & percentages         | `<section id="skills">` → each `.skill-row` |
| Case studies / project cards | `<section id="work">` → each `.pcard` (swap the `<img src>` for a new screenshot in `assets/images/`) |
| Experience timeline          | `<section id="experience">` |
| Contact details / socials    | `<section class="cta-section" id="contact">` |
| Colors / fonts / spacing     | `css/style.css` → CSS variables at the top (`:root { --bg, --violet, --grad, ... }`) |
| Resume file                  | Replace `assets/resume/Himanshu-Singh-Resume.pdf` (keep the same filename, or update the `href` in the "Download CV" button) |

The skill percentages in the Skills section are **self-assessed**, not a
measured metric — adjust them freely to whatever feels right.

---

## Notes

- Fonts (Inter, JetBrains Mono) load from Google Fonts via `<link>` tags
  in `index.html` — an internet connection is needed for them to render;
  the site still works without it, just falls back to system fonts.
- The layout is fully responsive (tested at 360–1440px). Below 900px the
  nav collapses into a hamburger menu.
- No analytics, cookies, or third-party scripts are included.

---

© 2026 Himanshu Singh
