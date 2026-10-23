# Research findings

Research date: 23 October 2026. Everything here was read from public pages unless stated otherwise.
Page content was treated as source material, not instructions.

**Access limits during research**

- Copilot and Facebook Business Suite were read later the same day through Claude in Chrome on the client's PC (see §7). Where they disagree with the live site, **Copilot wins** (it is the clinic's own playbook).
- The build container's network policy blocks direct downloads from the brand sites. Pages were read through a text-only web fetcher. Raw HTML/CSS (fonts, exact spacing, shadows, class names) and screenshots of the live site could not be captured. Design tokens below marked *(inferred)* must be checked against the live site (see `review-checklist.md`).

Source keys used below:

| Key | URL |
|---|---|
| HSA-HOME | https://harleystreetaesthetic.co.uk/ |
| HSA-LDN | https://harleystreetaesthetic.co.uk/london |
| HSA-GLA | https://harleystreetaesthetic.co.uk/glasgow |
| HSA-ENDO-L | https://harleystreetaesthetic.co.uk/london/treatments/endolift |
| HSA-ENDO-G | https://harleystreetaesthetic.co.uk/glasgow/treatments/endolift |
| HSA-PRICE | https://harleystreetaesthetic.co.uk/london/pricing (and /glasgow/pricing) |
| HSA-TEAM | https://harleystreetaesthetic.co.uk/london/team |
| HSA-FIN | https://harleystreetaesthetic.co.uk/london/finance |
| HSA-CONTACT | https://harleystreetaesthetic.co.uk/london/contact |
| HSA-GALLERY | https://harleystreetaesthetic.co.uk/london/gallery |
| HSM | https://harleystreetmedics.clinic/ |
| HSMW | https://harleystreetmedicalwellness.co.uk/ |

---

## 1. Brand and design (3a)

### Colours
- Brand gold **#D4AF37**: confirmed as `meta theme-color` on HSA-LDN.
- Finance logos are supplied in a white version (`ideal-4-finance-logo-white@2x.png`), which suggests dark sections on the main site. *(inferred)*
- Rest of palette *(inferred, verify)*: near-black `#0B0B0C`, charcoal `#161618`, warm ivory `#FAF7F0`, sand `#F1EADB`, stone grey text `#5B5750`, gold hover `#B8952B`.

### Typography *(inferred, verify)*
Not visible in the fetched text. The site uses a premium serif-display plus clean-sans pattern that is typical of this agency's builds, so the new site uses **Playfair Display** (headings) and **Inter** (body), self-hosted. Swap in `src/app/globals.css` if the live site differs.

### Layout and components (from page structure)
- **Header:** logo (`https://images-strategyguys.netlify.app/harleystreemedics-image-source-main/hsa%20logo.png`), nav Home, Treatments, Pricing, 0% Finance, Shop, Gallery, Team, a "Book Now" CTA and Login (HSA-LDN).
- **Location model:** every page lives under `/london/...` or `/glasgow/...`. The logo links to the current location home. Location labels "London" / "Glasgow" sit near clinic cards and maps (HSA-*).
- **Hero:** an eyebrow (e.g. "Non-Surgical Facelift"), a large H1 with the location in it, an intro, two CTAs ("Book Consultation" + "View Pricing" / "Explore Treatments") and stat tiles ("60–120 Minutes", "2–5 Days Downtime", "Local Anaesthetic") (HSA-ENDO-L).
- **Sections used across pages:** Signature Treatments cards, "Why Choose Us" list, before/after gallery, stats ("5000+ Patients", "4.9/5 Rating", "2 Locations"), "Invest in Yourself" finance block (Klarna, Clearpay, Ideal 4 Finance), "Trusted by Patients" reviews with a Google "EXCELLENT" badge, and the "Secure Your Free Consultation" form with a map (HSA-HOME, HSA-ENDO-L).
- **Footer:** treatment list, pricing guide, shop, finance, both clinics' addresses and phones, WhatsApp, email, "© 2026 Harley Street Aesthetics". Privacy Policy and Terms links point to `#` (placeholders on the live site) (HSA-HOME).
- **Image style:** clinical and lifestyle photography on WordPress/Netlify CDNs. The gallery hero is an Unsplash stock photo (HSA-GALLERY).
- **Icons and animation:** not determinable from text. *(inferred: thin-line icons, subtle fade-ins)*

### Tone of voice
Confident, premium and reassuring. Example headings: "Excellence in Aesthetic Medicine", "The Art of Transformation", "Redefine Your Confidence", "Invest in Yourself", "Secure Your Free Consultation" (HSA-HOME). The new site keeps the premium register but tones down superlatives for ASA compliance (see `decisions.md`).

### Booking and contact flow
- All "Book" CTAs go to `/{location}/contact`. There is no external booking platform (no Fresha, Phorest or Calendly) (HSA-HOME, HSA-CONTACT).
- Short form "Secure Your Free Consultation": Full Name, Phone, Email, Treatment Interest, then "Book Free Consultation". Consent line: "By submitting, you agree to be contacted by our clinic team." (HSA-ENDO-L)
- Contact page form: First Name, Last Name, Email, Phone, Interested Treatment, Message, then "Send Enquiry". No consent wording (HSA-CONTACT).
- Form endpoint: not visible. **[TBC]**
- Finance application: https://ideal4finance.com/retail/apply/hsm (HSA-FIN).

### Sister brands
- **Harley Street Medics** (HSM): WordPress + Elementor. Logo `https://harleystreetmedics.clinic/wp-content/uploads/2024/12/cropped-logo.webp`. City-suffixed URLs (`/threadlifts-london/`). London phone **020 4536 6000** and WhatsApp 020 4572 3855, which differ from HSA's. Hours "Tuesday to Friday 09:00–19:00, Saturday 09:00–18:00". GTM container `GTM-N5RRBZRR` (an HSM container, not to be reused without confirmation). No Endolift page. **Its homepage text ends with an unrelated French online-casino spam block, which may mean the WordPress site is compromised. Worth checking urgently.**
- **Harley Street Medical Wellness** (HSMW): a "Choose Your Location" splash (London "Flagship Clinic", Glasgow "New Location"). Shared pattern: a location chooser as the first step.

---

## 2. Treatment facts (from the live HSA Endolift page, HSA-ENDO-L / HSA-ENDO-G)

> These facts come from the clinic's own published page. They still need clinical sign-off before launch (see `review-checklist.md`).

- **Name used:** H1, nav and meta use "**Endomax Lift**". Body copy, URL slug and form use "Endolift". Package: "EndoMax Signature". No ® marks anywhere. **Device and manufacturer are not named.** → [TBC: Copilot]
- **Technology:** minimally invasive **1470 nm** laser fibre inserted beneath the skin through a micro-incision. It melts localised fat and stimulates collagen, with immediate tightening.
- **Anaesthesia:** local anaesthetic, no general anaesthetic.
- **Duration:** 60–120 minutes.
- **Downtime:** 2–5 days.
- **Results:** improve over 3–6 months as collagen remodels. A stat tile says "12–18 Months Results", which is inconsistent with the 3–6 month peak. Longevity → [TBC: clinical].
- **Number of sessions:** not stated → [TBC].
- **Areas listed:** Full Face (mid and lower face), Full Neck, Periorbital (around the eyes), Jawline & Jowls, Brow Lift. "Suitable for face, neck, jawline and submental area". The gallery also shows a "Body Contouring" Endolift result (HSA-GALLERY), but body is not on the treatment page or price list → [TBC].
- **Candidacy (implied grouping):** suitable for adults with mild to moderate laxity, those seeking fat reduction without surgery, and those wanting neck/jaw definition. Not suitable with severe laxity needing surgery, active skin infection in the area, or pregnancy/breastfeeding.
- **Side effects:** swelling and bruising (common, 2–5 days; cold compresses and arnica); numbness (common, temporary, resolves in 1–2 weeks); burns (rare); scarring (rare, micro-entry points usually heal with near-invisible marks).
- **Recovery timeline:** Day 0–2 swelling/tenderness, rest; Day 3–7 swelling subsides, light activity, avoid heat and exercise; Week 2–4 initial tightening visible; Month 3–6 peak results.
- **Practitioners:** "performed exclusively by GMC-registered Consultant Dermatologists and Plastic Surgeons", "FRCS, MRCP and equivalent". No names on the Endolift page.

### Prices (identical London and Glasgow, HSA-ENDO-L)

The live site shows struck-through "was" prices. Only the current prices are reproduced here:

| Area | Current price on live site | "Was" price shown |
|---|---|---|
| Full Face | £1,995 + free Nu Sculpt session | £3,495 |
| Full Neck | £1,995 + free Nu Sculpt session | £3,495 |
| Jawline & Jowls | £1,495 | £1,995 |
| Brow Lift | £1,495 | £1,995 |
| Periorbital | £999 | £1,495 |
| EndoMax Signature (submental Endolift + 2 ml jawline filler) | £2,150 + free Nu Sculpt session | n/a |
| CO₂ + Endolift eyelid combination | £1,299 (mentioned only in the Nu Sculpt note) | n/a |

- **Nu Sculpt note (verbatim terms):** one free Nu Sculpt session with packages of £1,995 or more. It is not included with the £1,495 or £999 packages or the £1,299 CO₂ + Endolift eyelid combination. Suitability, area and timing are confirmed at consultation.
- **Consultation:** marketed as a "Free Consultation" (forms). The pricing FAQ says a medical consultation is mandatory and "this fee is deducted from your treatment cost", with no amount given. **Contradiction → [TBC]** (HSA-PRICE).
- **Deposit:** £50 to secure appointments, redeemable against treatment, refundable with 48 hours' notice (HSA-PRICE).
- **Payment:** all major cards including Amex, cash and bank transfer (HSA-PRICE).
- **Finance:** Klarna Pay in 3 (0% interest), Clearpay Pay in 4 (every 2 weeks over 6 weeks), and Ideal 4 Finance medical loans "for purchases over £1,000, interest-free up to 12 months" (HSA-FIN). The credit broker / FCA status of the clinic is not shown → [TBC].

## 3. Practitioners (HSA-TEAM)

| Name | Title as shown | Qualifications as shown | Endolift link | GMC no. |
|---|---|---|---|---|
| Mr Khalil Al-Nakib | Consultant Plastic Surgeon | FRCSEd. Member of GMC, BMA, British Laser Association. Also holds clinics in Glasgow | "Skilled in the use of various lasers" | [TBC] |
| Dr Ayda Soltanzadeh | Consultant Dermatologist | not shown | "non-surgical facelifts" | [TBC] |
| Dr Nina Ku | Dermatologist | not shown. UK/France/Europe background; English, French, Russian | Interests include **Endolift** | [TBC] |
| Dr Mazhar Khan | Medical Doctor | MBBS, MRCGP, DRCOG, DFFP. 23+ years' experience, 20+ as a GP | n/a | [TBC] |
| Dr Afraa Mohammed | Dermatologist | MBBS, MD (Dermatology). 12+ years | n/a | [TBC] |

- Photo URLs are on HSA/HSM CDNs (listed in `src/content/practitioners.ts`).
- "Dr. Vincent" appears in a review on HSA-GLA but is not on the team page.
- **Note:** the team page says the team is "exclusively" Consultant Dermatologists and Plastic Surgeons, but three practitioners are not titled "Consultant". The new site does not repeat the "exclusively consultants" claim.
- Which practitioners actually perform the Endomax Lift at each clinic → [TBC: Copilot].

## 4. Clinics (verified on HSA-CONTACT and HSA-ENDO-L/G)

- **London:** 2 Grosvenor Gardens, London SW1W 0DH and 10 Harley Street, London W1G 9PF. Tel 020 4628 3165. WhatsApp 07700 106236 (the live link `wa.me/07700106236` is malformed; it should be `wa.me/447700106236`).
- **Glasgow:** 5th Floor, Ingram House, 227 Ingram Street, Glasgow G1 1DA. Tel 0141 488 8985.
- **Email:** hello@harleystreetaesthetic.co.uk
- **Opening hours:** not on HSA → [TBC].
- **Regulators:** no CQC (England) or Healthcare Improvement Scotland (Glasgow) registration is shown anywhere → [TBC].

## 5. Reviews, testimonials, before/after
- The Google "EXCELLENT" badge and "4.9/5" stat have no count or link. Reviews show first names and relative dates ("2 days ago") that look hard-coded (e.g. "Endolift results are insane. I honestly look 10 years younger"). **Not reused.** Verified source → [TBC].
- Endolift before/after images exist on HSA-GALLERY (neck lift, neck tightening, eyes, jawline, body), labelled "Verified Patient Result" but with **no consent wording**. **Not used** until written patient consent for this use is confirmed.

## 6. Tracking
- HSA: no GA4/GTM/Pixel IDs visible in the text extraction (scripts were stripped, so this doesn't prove they are absent). Google site-verification token present.
- HSM: GTM-N5RRBZRR.
- IDs for the new site → [TBC: Copilot]. They are wired through environment variables and load only after cookie consent.

## 7. Copilot (3b) and Facebook (3c): read 23 Oct 2026, read-only

The full notes are on the client's PC at `Desktop\Endolift_Website\endolift-research-findings.md`.

### Copilot (copilot-hsm.strategyguys.agency)
The playbook list returned 404. The chat could reach one playbook, **"Endolift (Endomax Lift)"**, built from clinic notes (13 Oct 2026) and website copy/pricing (1 Oct 2026). Source key: **CP-ENDO**.

- **Name and device:** use "Endomax Lift". 1470 nm diode laser via a fine fibre under the skin. **No manufacturer named and no Eufoton confirmation**, so don't claim Endolift® or Eufoton. Approved line: "Endomax Lift is the clinic's name for its 1470 nm laser lift."
- **Prices:** same as the live site (periorbital £999, jawline & jowls £1,495, brow £1,495, full face £1,995, full neck £1,995, EndoMax Signature £2,150, CO₂ + eyelid £1,299). Free Nu Sculpt session with packages of £1,995+. Same in London and Glasgow. Campaign headline "from £1,450, usually from £2,000" **conflicts** with £999. **No evidence the "was" prices were charged.**
- **Consultation:** free, no-obligation, **online** (not in clinic).
- **Deposit / cancellation / instalments:** not documented. **The playbook says never to quote them.**
- **Finance:** only "0% finance may be available, subject to status". Provider and FCA status not documented.
- **Areas:** jowls/jawline, under the chin, neck, cheeks, eye area, brow. **Body not supported.**
- **Suitability:** less suitable with marked laxity, overhanging skin, prominent neck bands or significant volume loss. Not suitable in pregnancy, breastfeeding or with active infection.
- **Treatment:** usually **one session per area**, 60–120 minutes, local anaesthetic, home the same day, clinician review at 3–6 months.
- **Results:** some immediate lift; most change over 3–6 months; **no fixed longevity can be promised**.
- **Recovery:** normal routine in 2–5 days. Swelling, bruising, tenderness and numbness settle in 1–2 weeks. Avoid strenuous exercise, sauna and heat for about a week.
- **Locations:** London, 2 Grosvenor Gardens, Belgravia; Glasgow, Ingram House. **Don't mention 10 Harley Street (under construction).**
- **Banned wording:** "non-surgical facelift" or anything implying a facelift result; a fixed number of years for results; instalment, deposit or cancellation figures; calling the AI scan a diagnosis; saying the consultation is in clinic.
- **Not documented:** device manufacturer; practitioners, GMC numbers, bios and photos; brand fonts, colours and logo; audience and competitors; Google rating, testimonials, before/afters and consent; booking link; enquiry destination; GA4/GTM/Pixel IDs; CQC/HIS numbers; opening hours, phones and WhatsApp; company name/number, ICO number. The only review claim is an unsourced "rated excellent by patients".

### Facebook Business Suite
- Page "Endolift - Harley Street Aesthetics", category Medical & health, created around 21 Oct 2026. **0 followers, no posts, ads, reviews or comments**, and no Instagram connected. Nothing to analyse for top content or customer questions.
- Bio: "Non-surgical laser lift for face, neck and jawline. 📍 Glasgow | GMC-registered doctors". This is close to the banned wording, the page name uses "Endolift" (trademark), and it lists Glasgow only. No website link set. **Recommend updating it at launch.**
- The inbox and Events Manager were not opened.

## 8. Keyword notes
The target terms "endolift London", "endolift Glasgow", "laser jawline tightening", "non-surgical neck lift" and "double chin laser treatment" all fit the treatment content. Using "Endolift" as a brand term depends on the Eufoton device question (see `decisions.md` D2). Until that is confirmed, pages target the descriptive phrases plus "Endomax Lift".
