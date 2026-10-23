# Open questions

Answers are needed before launch. Each item maps to `[TBC: …]` markers in the code. Run `npm run check:tbc` to list them.

## A. Not answered by Copilot (playbook read 23 Oct 2026): the clinic must supply these

Resolved by Copilot: treatment name, sessions, results/longevity wording, consultation (free, online), areas (no body), aftercare, suitability. Still open:
1. **Device:** which laser device and manufacturer do we use? Is it a genuine **Eufoton** device (needed before we can say "Endolift®")?
2. **Treatment name:** confirm the public name: "Endomax Lift" (live H1/nav) or "Endolift®".
3. **Number of sessions** usually needed per area.
4. **How long results last.** The live site says "12–18 months" in one tile but "peak at 3–6 months" in the body.
5. **Consultation fee:** "free consultation" (forms) or a fee deducted from treatment (pricing FAQ)? Amount?
6. **Prices:** confirm the current prices below, and whether the struck-through "was" prices were genuinely charged (ASA rule on savings claims). Standalone double-chin/submental price? Body areas offered, and their prices?
7. **Practitioners:** who performs the Endomax Lift in London and in Glasgow? GMC numbers, approved bios and photo permission.
8. **Regulators:** CQC registration (London) and Healthcare Improvement Scotland registration (Glasgow): numbers and status.
9. **Enquiry destination:** email inbox or CRM (and its API/webhook) for form leads.
10. **Tracking IDs:** GA4 (G-…), GTM (GTM-…), Meta Pixel ID for this site.
11. **WhatsApp:** is 07700 106236 the right number for this site, for both clinics?
12. **Opening hours** for each clinic.
13. **Brand guidelines:** official fonts, logo files (SVG), colour palette and tone rules.
14. **USPs and competitors** for positioning.
15. **Testimonials:** verified reviews (Google link and review count), with permission to quote.
16. **Before/after photos:** written patient consent covering web/advertising use, plus details per photo (area, number of sessions, time since treatment, practitioner).
17. **Aftercare instructions:** the official patient leaflet.
18. **Finance:** is the clinic FCA authorised or an appointed representative / introducer for Ideal 4 Finance? Approved finance wording and representative example.
19. **Aftercare, contraindications and side effects:** clinical sign-off of the copy taken from the live page.

## B. Facebook Business Suite (read 23 Oct 2026)
The page is new and empty (0 followers, no posts or reviews). Items 1–4 below have nothing to source yet. Please also fix the page bio and name before advertising (see research §7).
1. Page info (name, category, links) to match the schema `sameAs`.
2. Top Endolift/Endomax posts and ads: messaging, offers and imagery style.
3. Common customer questions in comments (to refine the FAQ).
4. Recommendations/reviews we may quote, with permission.

## C. Needs you
1. **Final subdomain** (default in config: `endolift.harleystreetaesthetic.co.uk`).
2. GitHub repo name/org, if you want the code on GitHub, and the Netlify team/account to deploy from.
3. Confirm the London main line: HSA uses **020 4628 3165** and HSM uses **020 4536 6000**.
4. **HSM website:** the homepage text contains an unrelated casino spam block. Please have someone check the WordPress install.
5. Is the 10 Harley Street address a treatment location for the Endomax Lift, or a correspondence address?
6. Live site legal pages: Privacy/Terms links are `#` on harleystreetaesthetic.co.uk. Do approved policies exist that we should mirror?

## D. New from the Copilot read
1. **Headline price:** "from £999" (per-area list) or "from £1,450, usually from £2,000" (campaign)?
2. **"Was" prices:** is there evidence they were charged? If not, they should come off the main site too.
3. **Main site:** it still says "Non-Surgical Facelift", shows a £50 deposit, names Klarna/Clearpay/Ideal 4 Finance and lists 10 Harley Street, all of which conflict with the playbook.

## E. Raised by the public-register check (important)
1. **HIS conditions (Glasgow):** the registration says "non-surgical treatments only" plus listed minor procedures. Does it cover a laser fibre inserted under the skin under local anaesthetic? Please check with HIS before offering or advertising Endomax Lift in Glasgow.
2. **CQC (London):** no registration found. Doctor-led procedures in England usually need CQC registration (or a registered host provider). Who is the registered provider at 2 Grosvenor Gardens?
3. **Titles:** Mr Al-Nakib isn't on the GMC Specialist Register, so "Consultant Plastic Surgeon" (used on both brand sites) may be misleading. Please confirm titles and qualifications (FRCSEd) for everyone listed.
4. **GMC numbers** for Dr Soltanzadeh, Dr Ku, Dr Khan and Dr Mohammed.
5. **Legal entity:** is "Harley Street Aesthetics" a trading name of Harley Street Medics Ltd (SC818003)? Also the ICO registration number.
6. **Addresses:** the HSM privacy policy lists Portpool Lane EC1N and 154 Clyde Street. Are these old addresses?
