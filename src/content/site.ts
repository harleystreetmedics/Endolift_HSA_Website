/**
 * Site-wide settings and facts.
 *
 * Every fact here was taken from harleystreetaesthetic.co.uk (23 Oct 2026).
 * Anything we could not confirm is wrapped in a `[TBC: …]` string. Run
 * `npm run check:tbc` to list them all before launch.
 */

/**
 * Endolift® is a registered trademark of Eufoton. Only switch this to `true`
 * once the clinic has confirmed it uses the genuine Eufoton device.
 * See docs/decisions.md (D2).
 */
export const USE_ENDOLIFT_TRADEMARK = false;

export const TREATMENT_NAME = USE_ENDOLIFT_TRADEMARK ? "Endolift®" : "Endomax Lift";
/** Plain form for titles, alt text and schema (no ® symbol). */
export const TREATMENT_NAME_PLAIN = USE_ENDOLIFT_TRADEMARK ? "Endolift" : "Endomax Lift";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://endolift.harleystreetaesthetic.co.uk"
).replace(/\/$/, "");

export const BRAND = {
  name: "Harley Street Aesthetics",
  mainSite: "https://harleystreetaesthetic.co.uk",
  allTreatments: "https://harleystreetaesthetic.co.uk/london/treatments",
  finance: "https://harleystreetaesthetic.co.uk/london/finance",
  financeApply: "https://ideal4finance.com/retail/apply/hsm",
  // TODO(launch): self-host an SVG version of the logo in /public (D12).
  logo: "https://images-strategyguys.netlify.app/harleystreemedics-image-source-main/hsa%20logo.png",
  email: "hello@harleystreetaesthetic.co.uk",
  whatsapp: {
    display: "07700 106236",
    // The live site uses wa.me/07700106236, which is malformed. wa.me needs the international format.
    href: "https://wa.me/447700106236",
    enabled: true,
  },
  sameAs: [
    // [TBC: confirm HSA social profiles from Facebook Business Suite]
  ] as string[],
} as const;

export type ClinicId = "london" | "glasgow";

export interface Clinic {
  id: ClinicId;
  city: string;
  name: string;
  addresses: { line1: string; line2?: string; locality: string; postcode: string }[];
  phone: { display: string; href: string; e164: string };
  mapsUrl: string;
  hours: string;
  regulator: string;
  geo?: { lat: number; lng: number };
}

export const CLINICS: Record<ClinicId, Clinic> = {
  london: {
    id: "london",
    city: "London",
    name: "Harley Street Aesthetics London",
    addresses: [
      // 10 Harley Street is not listed: the Copilot playbook says it is under construction.
      { line1: "2 Grosvenor Gardens", line2: "Belgravia", locality: "London", postcode: "SW1W 0DH" },
    ],
    phone: { display: "020 4628 3165", href: "tel:+442046283165", e164: "+442046283165" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=2+Grosvenor+Gardens+London+SW1W+0DH",
    hours: "[TBC: London opening hours]",
    regulator: "[TBC: CQC registration status and provider ID]",
  },
  glasgow: {
    id: "glasgow",
    city: "Glasgow",
    name: "Harley Street Aesthetics Glasgow",
    addresses: [
      { line1: "5th Floor, Ingram House", line2: "227 Ingram Street", locality: "Glasgow", postcode: "G1 1DA" },
    ],
    phone: { display: "0141 488 8985", href: "tel:+441414888985", e164: "+441414888985" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ingram+House+227+Ingram+Street+Glasgow+G1+1DA",
    hours: "[TBC: Glasgow opening hours]",
    regulator: "[TBC: Healthcare Improvement Scotland registration status]",
  },
};

export const CLINIC_LIST = [CLINICS.london, CLINICS.glasgow];

/** Analytics IDs load only after cookie consent. Leave empty to disable. */
export const TRACKING = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
};

export const NAV = [
  { href: "/treatment-areas/", label: "Treatment areas" },
  { href: "/how-it-works/", label: "How it works" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/results/", label: "Results" },
  { href: "/faq/", label: "FAQ" },
  { href: "/about/", label: "Clinics & team" },
];

export const LEGAL_NAV = [
  { href: "/privacy-policy/", label: "Privacy policy" },
  { href: "/cookie-policy/", label: "Cookie policy" },
  { href: "/terms/", label: "Terms" },
  { href: "/medical-disclaimer/", label: "Medical disclaimer" },
];

export const LAST_REVIEWED = "23 October 2026";
