/**
 * Before/after photos reused at the clinic's request from the gallery on
 * https://harleystreetaesthetic.co.uk/london/gallery (Endolift filter, read 23 Oct 2026).
 * Titles are reworded to avoid "non-surgical lift" wording (Copilot playbook). The body result is
 * left out because body areas aren't offered. Written consent for web use must be held on file.
 */
const CDN = "https://images-strategyguys.netlify.app/harley-street-aesthetics-main/";

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
    before: `${CDN}Endo%20Lift%20Jaw%20Before.webp`,
    after: `${CDN}Endo%20Lift%20Jaw%20After.webp`,
  },
  {
    title: "Neck tightening",
    area: "Neck",
    text: "Tightening loose skin and improving neck contour.",
    before: `${CDN}Neck%20Lift%20Before.webp`,
    after: `${CDN}Neck%20Lift%20After.webp`,
  },
  {
    title: "Neck laxity",
    area: "Neck",
    text: "Reducing laxity and banding in the neck area.",
    before: `${CDN}Neck%20Before.webp`,
    after: `${CDN}Neck%20After.webp`,
  },
  {
    title: "Eye area",
    area: "Under-eyes (periorbital)",
    text: "Tightening the delicate skin around the eyes and reducing the appearance of bags.",
    before: `${CDN}Endolift%20eye%20before.webp`,
    after: `${CDN}Endolift%20eye%20after.webp`,
  },
];

export const RESULTS_NOTE =
  "Real patient results from our clinics. Individual results vary and are not guaranteed. Photos are shown with the patient's consent.";
