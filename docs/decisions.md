# Decisions log

| # | Decision | Why |
|---|---|---|
| D1 | Next.js 16 App Router + TypeScript + Tailwind v4, `output: 'export'`, `trailingSlash: true` | Brief requirement; static hosting on Netlify; trailing slashes map cleanly to `/page/index.html`. |
| D2 | Public treatment name is **"Endomax Lift"**. "Endolift®" is not used in visible copy, and is not set as a brand claim in metadata. One switch (`USE_ENDOLIFT_TRADEMARK` in `src/content/site.ts`) changes it | The Eufoton device is not confirmed (Copilot not reachable). "Endomax Lift" is what the live H1/nav uses. |
| D3 | Copy is **adapted from the live HSA Endolift page**. No new medical claims added | Brief: never invent medical facts. The live page is the clinic's own published material. |
| D4 | **No "was/now" strikethrough prices.** Only current "from" prices are shown | CAP Code section 3 (price comparisons): savings claims need evidence that the higher price was genuinely charged. Re-enable once confirmed. |
| D5 | Live-site reviews and before/after photos are **not reused** | Reviews look templated and undated. Photos have no recorded consent. CAP Code section 3 (testimonials) and section 12. |
| D6 | No CQC/HIS badges and no GMC numbers | Not confirmed. Generic "GMC-registered doctors" wording kept because the live site states it (flagged for review). |
| D7 | Avoided "surgical-grade results", "look 10 years younger", "replies under 1 minute" and "exclusively consultants" | Unsubstantiated or time-pressure claims (CAP Code section 3: misleading claims, substantiation, urgency). |
| D8 | Location switcher: client-side preference (London default) saved in `localStorage`. Switches phone, address, CTA and form default. Plus dedicated `/london/` and `/glasgow/` landing pages for local SEO | One-treatment microsite. Avoids duplicating every page per city while keeping local landing pages. |
| D9 | Enquiry form uses **Netlify Forms** (static `public/__forms.html` registration + fetch POST), with a honeypot and an optional Netlify reCAPTCHA. The destination email is set in the Netlify UI → [TBC] | Free, works with static export, keeps patient data off third-party JS. |
| D10 | Analytics (GA4/GTM/Meta Pixel) only load after "Accept" in the cookie banner. IDs come from `NEXT_PUBLIC_*` env vars and are empty by default | UK GDPR + PECR reg. 6. |
| D11 | Fonts: Playfair Display + Inter, self-hosted via @fontsource | Live fonts not readable from here. Self-hosting avoids third-party requests before consent and helps Lighthouse. |
| D12 | Logo and practitioner photos are referenced from the brand's existing CDNs, with a text/initials fallback if they fail to load | The container couldn't download them. Self-host before launch (checklist). |
| D13 | The hero uses an abstract gold/ivory art direction instead of a patient image | No consented imagery available. Avoids stock "results" imagery. |
| D14 | FAQ answers draw only from the live page and pricing FAQ. Unknowns are shown as [TBC] | Same as D3. |
| D15 | `[TBC: …]` markers render as a visible amber highlight, and `npm run check:tbc` lists every one | So nothing unflagged reaches launch. |
| D16 | No body-area pages yet | Body is not on the treatment page or price list. Only one gallery image hints at it. |
| D17 | 18+ statement in footer and form | ASA guidance on cosmetic interventions not targeting under-18s. |
| D18 | Glasgow regulator noted as Healthcare Improvement Scotland, not CQC | CQC covers England only. |
| D19 | Applied the Copilot playbook (23 Oct): removed "non-surgical facelift / neck lift" wording, the deposit, cancellation and instalment details, named finance providers, and 10 Harley Street. Consultation is now "free, online". Sessions "usually one per area". Results longevity is not promised | Banned or undocumented per the Copilot "Endolift (Endomax Lift)" playbook. |
| D20 | Neck page now targets "laser neck tightening" and the face page "laser face and cheek tightening", instead of "non-surgical neck lift / facelift" | Banned-wording rule. Keep these terms out of ads as well. |
| D21 | Kept "Endomax Lift" (no Endolift®) | Copilot confirms no Eufoton device is documented. |
| D22 | The per-area £999 starting price is shown. The "from £1,450" campaign headline is flagged, not used | The two conflict, and the per-area list is the documented price list. |
