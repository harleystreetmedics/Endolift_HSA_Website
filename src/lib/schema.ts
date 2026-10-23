import { BRAND, CLINIC_LIST, SITE_URL, TREATMENT_NAME_PLAIN, type Clinic } from "@/content/site";
import type { Faq } from "@/content/faqs";
import { absoluteUrl } from "./seo";

const isTbc = (v?: string) => !v || v.includes("[TBC");

const ORG_ID = `${BRAND.mainSite}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: BRAND.name,
    url: BRAND.mainSite,
    logo: BRAND.logo,
    email: BRAND.email,
    ...(BRAND.sameAs.length ? { sameAs: BRAND.sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: `${TREATMENT_NAME_PLAIN} | ${BRAND.name}`,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-GB",
  };
}

export function clinicSchema(clinic: Clinic) {
  const [addr] = clinic.addresses;
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "MedicalBusiness"],
    "@id": `${SITE_URL}/${clinic.id}/#clinic`,
    name: clinic.name,
    url: absoluteUrl(`/${clinic.id}/`),
    telephone: clinic.phone.e164,
    email: BRAND.email,
    image: BRAND.logo,
    parentOrganization: { "@id": ORG_ID },
    medicalSpecialty: ["Dermatology", "PlasticSurgery"],
    address: {
      "@type": "PostalAddress",
      streetAddress: [addr.line1, addr.line2].filter(Boolean).join(", "),
      addressLocality: addr.locality,
      postalCode: addr.postcode,
      addressCountry: "GB",
    },
    hasMap: clinic.mapsUrl,
    availableService: { "@id": `${SITE_URL}/#procedure` },
  };
}

export const allClinicsSchema = () => CLINIC_LIST.map(clinicSchema);

export function procedureSchema(opts?: { name?: string; bodyLocation?: string; url?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": opts?.url ? `${opts.url}#procedure` : `${SITE_URL}/#procedure`,
    name: opts?.name ?? `${TREATMENT_NAME_PLAIN} laser skin tightening`,
    alternateName: "Minimally invasive laser lifting",
    procedureType: "https://schema.org/PercutaneousProcedure",
    bodyLocation: opts?.bodyLocation ?? "Face, jawline, under the chin and neck",
    howPerformed:
      "A 1470 nm laser fibre is placed beneath the skin through a micro entry point under local anaesthetic to reduce localised fat and stimulate collagen.",
    preparation: "Medical consultation and suitability assessment with a GMC-registered doctor.",
    followup: "Personalised aftercare and review with the clinic team.",
    status: "https://schema.org/ActiveActionStatus",
    url: opts?.url ?? `${SITE_URL}/how-it-works/`,
  };
}

export function faqSchema(faqs: Faq[]) {
  const answered = faqs.filter((f) => !isTbc(f.a));
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: answered.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
