# Review checklist

Work through this before launch. Tick items as you go. Run `npm run check:tbc` to see where each placeholder lives in the code.

## 1. Blockers: information still needed (every [TBC] item)

The site shows each of these as an **amber highlighted** `[TBC: …]` on the page. There are 30 unique placeholders. The Copilot playbook (read 23 Oct) answered the rest; these are the items it didn't document.

- [ ] `[TBC: booking, deposit and cancellation terms (not documented in the Copilot playbook)]`
- [ ] `[TBC: campaign headline “from £1,450, usually from £2,000” conflicts with the £999 per-area price. Confirm which to use]`
- [ ] `[TBC: clinic(s)]`
- [ ] `[TBC: clinical sign-off of full contraindications list]`
- [ ] `[TBC: complaints procedure and escalation route]`
- [ ] `[TBC: confirm HSA social profiles from Facebook Business Suite]`
- [ ] `[TBC: confirm which practitioners perform this treatment at each clinic]`
- [ ] `[TBC: consented before-and-after photos with treatment details]`
- [ ] `[TBC: consented before/after photo: area, sessions, time since treatment, practitioner]`
- [ ] `[TBC: CQC registration status and provider ID]`
- [ ] `[TBC: CRM provider]`
- [ ] `[TBC: date]`
- [ ] `[TBC: enquiry destination from Copilot]`
- [ ] `[TBC: finance provider and FCA status before naming any lender or plan]`
- [ ] `[TBC: Glasgow opening hours]`
- [ ] `[TBC: GMC number]`
- [ ] `[TBC: Google rating]`
- [ ] `[TBC: Google reviews link]`
- [ ] `[TBC: Healthcare Improvement Scotland registration status]`
- [ ] `[TBC: ICO number]`
- [ ] `[TBC: legal review]`
- [ ] `[TBC: London opening hours]`
- [ ] `[TBC: number of reviews]`
- [ ] `[TBC: package details]`
- [ ] `[TBC: qualifications]`
- [ ] `[TBC: registered company name, company number and registered office]`
- [ ] `[TBC: retention periods for enquiries that do and do not become patients]`
- [ ] `[TBC: reviewer first name + initial]`
- [ ] `[TBC: standalone submental price]`
- [ ] `[TBC: verified patient review of this treatment, quoted with permission]`

Also not shown as a placeholder, but missing:
- [ ] Official logo files (SVG/PNG, light and dark). The site uses a text wordmark until supplied (`src/components/Wordmark.tsx`).
- [ ] Practitioner photos: self-host approved photos in `public/images/team/` (currently hot-linked from the main site CDN, with an initials fallback).
- [ ] Tracking IDs (GA4 / GTM / Meta Pixel) → Netlify env vars. If you use GTM, set up Consent Mode so tags inside GTM respect the marketing choice.
- [ ] Final subdomain (`NEXT_PUBLIC_SITE_URL`).

## 2. Decisions to confirm (see docs/decisions.md)
- [ ] **Treatment name.** Copilot confirms "Endomax Lift" and documents no Eufoton device, so stay with it unless proof arrives. To switch to "Endolift®", Flip `USE_ENDOLIFT_TRADEMARK` in `src/content/site.ts`. Also update `scripts/make-og.mjs` (the OG image text) and re-run `npm run make:og`.
- [ ] **Headline price.** "from £999" is used. Copilot's campaign headline is "from £1,450, usually from £2,000". Pick one.
- [ ] **Prices.** The site shows current prices only (£999 / £1,495 / £1,995 / £2,150 / £1,299). It drops the main site's struck-through "was" prices (£3,495 etc.) because ASA rules need evidence those were genuinely charged.
- [ ] **Nu Sculpt free session.** The wording is copied from the main site's terms. Confirm the offer is still running.
- [ ] **WhatsApp** 07700 106236 for both clinics? (The main site's link format is broken. This site uses `wa.me/447700106236`.)
- [ ] **Location switcher** behaviour: London is the default. Switching changes the phone number, the sticky call button and the form's clinic.
- [ ] **Duplicate content.** The main site has its own Endomax Lift pages. Decide whether those should link here and whether either should be canonical.

## 3. Clinical and compliance sign-off (ASA / CAP Code, GMC, CQC/HIS)
- [ ] A clinician reviews all treatment copy in `src/content/treatment.ts`, `areas.ts` and `faqs.ts` (adapted from the live HSA Endolift page).
- [ ] No guaranteed results anywhere. "Results vary" appears with results claims, and a medical disclaimer is on every treatment page.
- [ ] Copilot banned wording is respected: no "non-surgical facelift", no fixed years for results, no deposit, cancellation or instalment figures, and the consultation is described as online.
- [ ] Facebook page bio ("Non-surgical laser lift…", Glasgow only) and name ("Endolift - …") updated before advertising.
- [ ] No time-limited or pressure offers (none used). No "replies in under 1 minute" claims.
- [ ] Nothing targets under-18s: an 18+ line is in the footer and an 18+ confirmation is in the form.
- [ ] The "GMC-registered doctors" statement is accurate for everyone who performs the treatment at both clinics.
- [ ] CQC (London) and Healthcare Improvement Scotland (Glasgow) registration added once confirmed.
- [ ] Before/after photos only with written consent, unretouched, with area, sessions, time since treatment and practitioner.
- [ ] Reviews only if genuine, attributable and current, with permission. The main site's testimonials were **not** reused.
- [ ] Finance: only "0% finance may be available, subject to status" is shown. Name a lender only once FCA status is confirmed.
- [ ] Legal pages (privacy, cookies, terms, medical disclaimer) reviewed by your legal/DPO adviser. All four are drafts.

## 4. Visual consistency with harleystreetaesthetic.co.uk
The build container could not load the main site's CSS or images, so these were inferred:
- [ ] Fonts: Playfair Display (headings) + Inter (body). Swap in `src/app/globals.css` if the main site uses different ones.
- [ ] Palette: gold #D4AF37 (confirmed), plus near-black #0B0B0C, ivory #FAF7F0 and sand #F1EADB (inferred).
- [ ] Button shape (pill), header (dark, sticky) and footer (dark) against the main site.
- [ ] Compare `docs/screens/*.jpg` with the live site side by side.

## 5. Functional checks (after deploying to a Netlify preview)
- [ ] Submit the enquiry form. The email arrives at the right inbox and the thank-you message shows.
- [ ] Spam: a form with the hidden `company` field filled is rejected (Netlify honeypot).
- [ ] Cookie banner: before accepting, no requests go to googletagmanager.com or facebook.net (DevTools → Network). After "Accept all", they load. "Cookie settings" in the footer reopens the banner.
- [ ] Both phone numbers dial correctly on a mobile: London 020 4628 3165, Glasgow 0141 488 8985 (taken from the live site. Copilot has no phone numbers, so please confirm them).
- [ ] The WhatsApp button opens the chat. Email links work.
- [ ] Sticky mobile bar: Call / WhatsApp / Book.
- [ ] The location switcher remembers the choice between pages.
- [ ] External links: main site, all treatments, finance, Nu Sculpt, GMC register, Google Maps.
- [ ] Google Rich Results Test on `/`, `/faq/` and `/treatment-areas/neck/`.

## 6. Automated QA already run (23 Oct 2026)
- `npm run typecheck`: 0 errors. `npm run lint`: 0 errors, 0 warnings. `npm run build`: 24 static pages.
- `npm run check:links`: 0 broken internal links. Phone links are all `tel:+44…`.
- Lighthouse (mobile, local server with gzip): performance 95–99, accessibility 98–100, best practices 96–100, SEO 100 on 12 key pages. See `docs/lighthouse.json`. The one 96 for best practices is the practitioner photos failing to load in the offline test environment.
- Screenshots of every page at 390 / 820 / 1440 px are in `docs/screens/`. There is no horizontal scroll at 390 px.
