/**
 * Before/after photos from the Endolift filter of the gallery on
 * harleystreetaesthetic.co.uk/london/gallery, downloaded 28 Oct 2026 and self-hosted in
 * public/results/ (resized to 1600 px wide). The "Body contouring" pair is left out because
 * body areas aren't offered on this site.
 * NOTE: every photo carries a small sparkle watermark in the bottom-right corner, which looks
 * like Google Gemini's AI-image mark. Confirm they are unedited patient photos with written
 * consent before launch (docs/review-checklist.md).
 */
export interface Result {
  title: string;
  area: string;
  text: string;
  before: string;
  after: string;
}

export const RESULTS: Result[] = [
  {
    title: "Jawline contouring",
    area: "Jawline & under the chin",
    text: "Laser treatment to reduce submental fat and tighten the skin for a more defined profile.",
    before: "/results/jaw-before.webp",
    after: "/results/jaw-after.webp",
  },
  {
    title: "Neck lift",
    area: "Neck",
    text: "Tightening loose skin and improving neck contour.",
    before: "/results/neck-lift-before.webp",
    after: "/results/neck-lift-after.webp",
  },
  {
    title: "Neck tightening",
    area: "Neck",
    text: "Reducing laxity and crepey texture across the neck.",
    before: "/results/neck-before.webp",
    after: "/results/neck-after.webp",
  },
  {
    title: "Eye area",
    area: "Under-eyes (periorbital)",
    text: "Tightening the delicate skin around the eyes and reducing the appearance of bags.",
    before: "/results/eye-before.webp",
    after: "/results/eye-after.webp",
  },
];

export const RESULTS_NOTE = "Individual results vary and are not guaranteed. Photos are shown with the patient's consent.";
