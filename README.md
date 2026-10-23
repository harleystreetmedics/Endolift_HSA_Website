# Endomax Lift: Harley Street Aesthetics treatment site

A single-treatment microsite for Harley Street Aesthetics' minimally invasive laser lifting treatment.
It is built with Next.js (App Router), TypeScript and Tailwind CSS, and exported as static files for Netlify.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Node 20.9+ is required (`.nvmrc` pins 22). In dev, the enquiry form simulates a successful submit.

## Scripts

| Command | What it does |
|---|---|
| `npm run build` | Static export to `out/` |
| `npm run start` | Serve `out/` locally |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript |
| `npm run check` | Typecheck + lint + build + link check + TBC report |
| `npm run check:tbc` | List every `[TBC: …]` placeholder still in the content |
| `npm run check:links` | Check internal links, phone and email links in the built site |
| `npm run screens` | Screenshot every page at mobile/tablet/desktop into `docs/screens/` (needs Playwright Chromium; set `CHROMIUM_PATH` if needed) |
| `npm run lighthouse` | Lighthouse (mobile) for key pages (set `CHROME_PATH`) |
| `npm run make:og` | Regenerate the Open Graph image |

## Where to edit content

All copy, prices and facts are in `src/content/`:

- `site.ts`: clinics, phones, WhatsApp, URLs, tracking, the **Endolift® trademark switch** (`USE_ENDOLIFT_TRADEMARK`)
- `treatment.ts`: how it works, benefits, candidacy, risks, recovery
- `areas.ts`: treatment areas, prices, packages, finance, consultation
- `faqs.ts`: FAQs
- `people.ts`: practitioners and reviews

`[TBC: …]` strings are shown highlighted in amber on the page until they are replaced.

## Docs

- `docs/research.md`: findings and sources
- `docs/open-questions.md`: what's still needed
- `docs/decisions.md`: decisions log
- `docs/plan.md`: sitemap, wireframes, components
- `docs/review-checklist.md`: everything to check before launch
- `docs/deployment.md`: Netlify (and Vercel) deployment, custom domain and DNS
