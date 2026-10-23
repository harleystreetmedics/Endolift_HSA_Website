import { TREATMENT_NAME } from "./site";

/**
 * Treatment facts, adapted from the clinic's own Endolift page:
 * https://harleystreetaesthetic.co.uk/london/treatments/endolift (read 23 Oct 2026).
 * Wording is softened so it doesn't promise outcomes (ASA/CAP). Clinical sign-off needed.
 */

export const KEY_FACTS = [
  { label: "Treatment time", value: "60–120 minutes", icon: "clock" },
  { label: "Anaesthetic", value: "Local anaesthetic", icon: "shield" },
  { label: "Typical downtime", value: "2–5 days", icon: "calendar" },
  { label: "Results develop", value: "Over 3–6 months", icon: "sparkle" },
] as const;

export const SESSIONS = "[TBC: typical number of sessions]";
export const RESULTS_LONGEVITY =
  "[TBC: how long results typically last. Live site shows “12–18 months” in one place; clinical confirmation needed]";
export const DEVICE = "[TBC: laser device name and manufacturer]";

export const WHAT_IT_IS = {
  intro: `${TREATMENT_NAME} is a minimally invasive laser treatment for skin laxity and small pockets of stubborn fat on the face and neck. A very fine 1470 nm laser fibre is placed just beneath the skin through a tiny entry point, under local anaesthetic.`,
  body: `The laser energy is designed to do two things in one session: break down localised fat and stimulate the skin’s own collagen production. Many patients notice some tightening soon after treatment, and the skin continues to change over the following 3–6 months as new collagen forms. Results vary from person to person, and your doctor will talk you through what is realistic for you at consultation.`,
  points: [
    "No general anaesthetic or surgical incisions",
    "Targets skin laxity and localised fat in the same session",
    "Tiny entry points rather than surgical scars",
    "Collagen remodelling continues for several months",
    "Carried out by GMC-registered doctors",
    "Used on the face, neck, jawline and under the chin",
  ],
};

export const BENEFITS = [
  {
    title: "Minimally invasive",
    text: "A fine laser fibre works beneath the skin through micro entry points, rather than surgical incisions.",
    icon: "feather",
  },
  {
    title: "Two actions, one session",
    text: "Laser energy is used to reduce small areas of fat and to stimulate collagen, helping to firm and define.",
    icon: "layers",
  },
  {
    title: "Local anaesthetic",
    text: "The treatment area is numbed with local anaesthetic, so no general anaesthetic is needed.",
    icon: "shield",
  },
  {
    title: "Short downtime",
    text: "Swelling and bruising usually settle within 2–5 days, and most people return to light activities within the week.",
    icon: "calendar",
  },
  {
    title: "Gradual, natural-looking change",
    text: "Because results build as collagen remodels, changes tend to appear gradually over 3–6 months.",
    icon: "sparkle",
  },
  {
    title: "Doctor-led",
    text: "Every treatment is planned and performed by a GMC-registered doctor after a full medical consultation.",
    icon: "user",
  },
] as const;

export const STEPS = [
  {
    title: "Consultation",
    text: "A doctor reviews your medical history, assesses your skin and discusses your goals, and tells you honestly whether the treatment is right for you.",
  },
  {
    title: "Preparation",
    text: "The area is cleansed and marked, and local anaesthetic is applied, so you are comfortable throughout.",
  },
  {
    title: "Laser treatment",
    text: "A fine 1470 nm fibre is introduced beneath the skin through a micro entry point and moved carefully across the treatment area. This usually takes 60–120 minutes.",
  },
  {
    title: "Recovery & review",
    text: "You receive personalised aftercare advice. Results develop over the following months, and your clinic team will arrange your follow-up.",
  },
] as const;

export const CANDIDACY = {
  intro: `${TREATMENT_NAME} is not suitable for everyone. Suitability is always assessed in person by one of our doctors, based on your medical history, skin condition and goals.`,
  suitable: [
    "Adults (18+) with mild to moderate skin laxity",
    "People looking to reduce small areas of fat without surgery",
    "Those wanting more definition along the jawline or neck",
  ],
  unsuitable: [
    "Severe skin laxity that would be better treated surgically",
    "Active skin infection in the treatment area",
    "Pregnancy or breastfeeding",
    "[TBC: full list of medical contraindications from clinical team]",
  ],
};

export const RISKS = [
  {
    title: "Swelling & bruising",
    frequency: "Common",
    text: "Expected for around 2–5 days. Cold compresses can help.",
  },
  {
    title: "Numbness",
    frequency: "Common",
    text: "Temporary numbness around the treated area usually resolves within 1–2 weeks.",
  },
  {
    title: "Burns",
    frequency: "Rare",
    text: "Very uncommon when the treatment is performed correctly by a trained doctor.",
  },
  {
    title: "Scarring",
    frequency: "Rare",
    text: "The micro entry points usually heal to marks that are barely visible, although this can't be guaranteed for everyone.",
  },
] as const;

export const RECOVERY = [
  {
    when: "Day 0–2",
    title: "Immediately after",
    text: "Some swelling and tenderness is normal. Rest, and avoid touching or pressing on the treated area.",
  },
  {
    when: "Day 3–7",
    title: "Swelling settles",
    text: "Most visible swelling goes down. Light activities can resume; avoid heat, saunas and strenuous exercise.",
  },
  {
    when: "Week 2–4",
    title: "Early changes",
    text: "Tightening may start to become noticeable as collagen production continues.",
  },
  {
    when: "Month 3–6",
    title: "Final result",
    text: "Collagen remodelling continues, and most people see their final result in this window. Individual results vary.",
  },
] as const;

export const AFTERCARE = "[TBC: approved aftercare instructions from the clinical team]";
