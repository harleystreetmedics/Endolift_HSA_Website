import { TREATMENT_NAME } from "./site";
import { RESULTS_LONGEVITY, SESSIONS } from "./treatment";
import { CONSULTATION } from "./areas";

/**
 * FAQ answers use only facts from the clinic's live Endolift and pricing pages (D14).
 * Placeholders are left where facts still need confirming.
 */

export interface Faq {
  q: string;
  a: string;
  tags: string[];
}

export const FAQS: Faq[] = [
  {
    q: `What is ${TREATMENT_NAME}?`,
    a: `${TREATMENT_NAME} is a minimally invasive laser treatment. A fine 1470 nm laser fibre is placed beneath the skin through a micro entry point to help reduce small areas of fat and stimulate collagen, which can tighten and define the treated area.`,
    tags: ["home", "general"],
  },
  {
    q: "Which areas can be treated?",
    a: "We treat the jawline and jowls, under the chin (submental), the neck, the cheeks and lower face, the area around the eyes and the brow. We do not currently offer it for body areas. Your clinician will advise which areas suit you.",
    tags: ["home", "general"],
  },
  {
    q: "Does it hurt?",
    a: "The treatment is carried out under local anaesthetic, so the area is numbed before the laser fibre is introduced. Some tenderness and swelling afterwards is normal.",
    tags: ["home", "procedure"],
  },
  {
    q: "How long does the treatment take?",
    a: "Usually between 60 and 120 minutes, depending on the number and size of the areas treated.",
    tags: ["procedure"],
  },
  {
    q: "How much downtime is there?",
    a: "Most people are back to their normal routine within 2–5 days and go home the same day. Swelling, bruising, tenderness and numbness usually settle within 1–2 weeks. Avoid strenuous exercise, saunas and heat for about a week.",
    tags: ["home", "procedure", "recovery"],
  },
  {
    q: "When will I see results?",
    a: "Some tightening may be noticeable early on, but results develop gradually as new collagen forms. Most people see their final result between three and six months after treatment. Results vary from person to person and are not guaranteed.",
    tags: ["home", "results"],
  },
  {
    q: "How long do results last?",
    a: RESULTS_LONGEVITY,
    tags: ["results"],
  },
  {
    q: "How many sessions will I need?",
    a: `${SESSIONS}. Your clinician will confirm your plan at consultation and review your progress at 3–6 months.`,
    tags: ["procedure"],
  },
  {
    q: "What are the possible side effects?",
    a: "Common side effects are swelling, bruising and temporary numbness, which usually resolve within a few days to two weeks. Burns and visible scarring are rare when the treatment is performed by a trained doctor. Your doctor will explain all risks before you agree to treatment.",
    tags: ["home", "safety"],
  },
  {
    q: "Am I suitable?",
    a: "It is generally suited to adults with mild to moderate skin laxity or small areas of stubborn fat. It may not be suitable if you have severe laxity, an active skin infection in the area, or are pregnant or breastfeeding. Suitability can only be confirmed at a face-to-face consultation with one of our doctors.",
    tags: ["safety", "general"],
  },
  {
    q: "Who performs the treatment?",
    a: "Every treatment is planned and carried out by a GMC-registered doctor following a full medical consultation.",
    tags: ["general", "safety"],
  },
  {
    q: "How much does it cost?",
    a: "Prices start from £999 for the area around the eyes, £1,495 for the jawline and jowls or brow, and £1,995 for the full face or full neck. Your exact price is confirmed at consultation once your doctor has agreed a treatment plan.",
    tags: ["pricing", "home"],
  },
  {
    q: "Is there a consultation fee?",
    a: `No. ${CONSULTATION.detail} There is no obligation to go ahead with treatment.`,
    tags: ["pricing"],
  },
  {
    q: "Can I spread the cost?",
    a: "0% finance may be available, subject to status. Our team can talk you through the options after your consultation.",
    tags: ["pricing"],
  },
  {
    q: "Is it the same as surgery?",
    a: "No. It is a minimally invasive procedure carried out under local anaesthetic without surgical incisions. It is designed for mild to moderate laxity and will not produce the same results as surgery for more advanced laxity. Your doctor will tell you honestly if a surgical opinion would suit you better.",
    tags: ["general"],
  },
  {
    q: "Where can I have the treatment?",
    a: "At our London clinic (2 Grosvenor Gardens, Belgravia, SW1W 0DH) and our Glasgow clinic (Ingram House, 227 Ingram Street, G1 1DA). Your first consultation takes place online.",
    tags: ["general"],
  },
];

export const faqsByTag = (tag: string) => FAQS.filter((f) => f.tags.includes(tag));
