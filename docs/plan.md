# Site plan

Base URL: `https://endolift.harleystreetaesthetic.co.uk` (configurable: `SITE_URL` in `src/content/site.ts` / `NEXT_PUBLIC_SITE_URL`).

## Sitemap

| Path | Purpose | Primary keyword |
|---|---|---|
| `/` | Home: full overview + enquiry | Endomax Lift laser skin tightening London & Glasgow |
| `/treatment-areas/` | Area overview | laser skin tightening areas |
| `/treatment-areas/jawline-jowls/` | Jawline & jowls | laser jawline tightening |
| `/treatment-areas/double-chin/` | Submental / double chin | double chin laser treatment |
| `/treatment-areas/neck/` | Neck | non-surgical neck lift |
| `/treatment-areas/full-face/` | Mid & lower face | non-surgical facelift laser |
| `/treatment-areas/under-eyes/` | Periorbital | under-eye laser tightening |
| `/treatment-areas/brow/` | Brow & forehead | laser brow lift |
| `/how-it-works/` | Procedure, candidacy, risks, recovery | how laser lifting works |
| `/pricing/` | Price list, finance, consultation | Endomax Lift price / cost |
| `/results/` | Before & after policy (consent-gated gallery) | Endomax Lift results |
| `/faq/` | FAQ (FAQPage schema) | Endomax Lift FAQ |
| `/about/` | Clinics + practitioners | |
| `/london/` | Local landing: London | endolift London (see D2) |
| `/glasgow/` | Local landing: Glasgow | endolift Glasgow (see D2) |
| `/book/` | Enquiry form + both clinics + map links | book consultation |
| `/privacy-policy/`, `/cookie-policy/`, `/terms/`, `/medical-disclaimer/` | Legal | |
| `/404` | Not found | |

## Global layout
- **Header (sticky):** HSA logo (→ main site) · nav: Treatment areas, How it works, Pricing, Results, FAQ, Clinics · London/Glasgow switcher · phone (desktop) · "Book consultation" gold button · mobile burger menu.
- **Footer (dark):** logo + short brand line · treatment areas · site links · both clinic cards (address, tel, map link) · "All treatments" → main site · legal links · 18+ / results-vary line · cookie settings button · © Harley Street Aesthetics.
- **Mobile:** sticky bottom bar: Call (current clinic) · WhatsApp · Book consultation.
- **Cookie banner:** Accept all / Reject non-essential / Manage. Nothing tracks before consent.

## Home wireframe
1. Hero (dark): eyebrow "Minimally invasive laser lifting" · H1 "Endomax Lift in London & Glasgow" · intro · [Book consultation] [View pricing] · 4 stat tiles (60–120 min, 2–5 days downtime, local anaesthetic, results build over 3–6 months).
2. What it is: 2-column text + fact list.
3. Benefits: 4–6 icon cards.
4. Treatment areas: 6 cards → area pages, with "from £".
5. How it works: 4-step strip → /how-it-works/.
6. Results: consent policy note + CTA to /results/ (no images until consent).
7. Practitioners: cards (photo, name, title, GMC [TBC]).
8. Pricing teaser: table of 6 + finance logos line.
9. Reviews carousel (verified reviews [TBC]).
10. FAQ (6 most common) → /faq/.
11. CTA banner + enquiry form + clinic cards.
12. Medical disclaimer.

## Area page wireframe
Breadcrumb · hero (area name, short description, "from £", CTAs) · "What it can help with" · "What to expect" (duration, anaesthetic, downtime) · suitability · related areas · FAQ subset · CTA banner · disclaimer.

## Components
`Header`, `Footer`, `LocationProvider`/`LocationSwitcher`, `Button`/`ButtonLink`, `Card`, `SectionHeading`, `CtaBanner`, `FaqAccordion` (native `<details>`), `ReviewsCarousel`, `EnquiryForm`, `StickyMobileCta`, `CookieConsent`, `Analytics`, `JsonLd`, `Breadcrumbs`, `Tbc`, `MedicalDisclaimer`, `PriceTable`, `AreaCard`, `RecoveryTimeline`, `RiskList`, `PractitionerCard`, `ClinicCard`, `Icon`, `FallbackImage`.

## Content source
All copy is in `src/content/*.ts`, so the team can edit text without touching layout.

## Schema
- Every page: `Organization` (HSA) + `WebSite`.
- Home, /about/, /london/, /glasgow/, /book/: `MedicalClinic` ×2 (London, Glasgow).
- /how-it-works/ and area pages: `MedicalProcedure`.
- /faq/ (and FAQ blocks): `FAQPage`.
- All inner pages: `BreadcrumbList`.
