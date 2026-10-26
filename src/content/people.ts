/**
 * Practitioners as listed on https://harleystreetaesthetic.co.uk/london/team (read 23 Oct 2026).
 * Which doctors perform this treatment at each clinic is still to be confirmed.
 * GMC numbers are not displayed, matching the main site (clinic decision, 26 Oct). Kept here for reference only.
 */

export interface Practitioner {
  name: string;
  title: string;
  qualifications?: string;
  bio: string;
  photo?: string;
  gmc?: string;
  clinics: string;
}

export const PRACTITIONERS: Practitioner[] = [
  {
    name: "Dr Nina Ku",
    title: "Dermatologist",
    bio: "Dr Ku has trained and worked across the UK, France and Europe. Clinical interests include laser and energy-based treatments, laser lifting and injectables. Dr Ku speaks English, French and Russian.",
    photo: "https://harleystreetaesthetic.co.uk/images/team/dr-nina-ku.webp",
    clinics: "London",
  },
  {
    name: "Mr Khalil Al-Nakib",
    // Title and FRCSEd as published on harleystreetaesthetic.co.uk/london/team (used at the clinic's request).
    // Note: the GMC register shows no Specialist Register entry. See docs/open-questions.md §E.
    title: "Consultant Plastic Surgeon",
    qualifications: "MB ChB, FRCSEd",
    bio: "Mr Al-Nakib qualified in medicine in 1971 and has experience in plastic, aesthetic and reconstructive surgery and the use of medical lasers, and holds regular clinics in London and Glasgow.",
    photo: "https://harleystreetmedics.clinic/wp-content/uploads/2024/11/6-1.webp",
    // Verified at https://www.gmc-uk.org/registrants/3632451 on 23 Oct 2026.
    gmc: "3632451",
    clinics: "London & Glasgow",
  },
  {
    name: "Dr Ayda Soltanzadeh",
    title: "Consultant Dermatologist",
    bio: "Dr Soltanzadeh offers bespoke treatment plans, with a focus on thread lifts, facial contouring and non-surgical facial rejuvenation.",
    photo: "https://images-strategyguys.netlify.app/harleystreemedics-image-source-main/dr.%20ayda.webp",
    clinics: "London & Glasgow",
  },
];

export interface Review {
  name: string;
  text: string;
  treatment: string;
}

/**
 * Reviews reused at the clinic's request from harleystreetaesthetic.co.uk ("Trusted by Patients",
 * read 23 Oct 2026), verbatim. The source platform, dates and permission to quote are still to be
 * confirmed (CAP Code section 3: testimonials must be genuine and held on file).
 */
export const REVIEWS: Review[] = [
  {
    name: "James Peterson",
    treatment: "Endomax Lift",
    text: "Endolift results are insane. I honestly look 10 years younger. The team explained everything perfectly and made me feel so comfortable throughout the process.",
  },
  {
    name: "Olivia K.",
    treatment: "Full Face Rejuvenation",
    text: "Finally found a clinic that prioritizes safety and elegance. The consultation was thorough and honest. I wouldn't trust anyone else with my face.",
  },
  {
    name: "Sarah Jenkins",
    treatment: "Dermal Fillers",
    text: "The best clinic in London! My dermal filler results are so natural, nobody knows I've had anything done—they just tell me I look rested.",
  },
  {
    name: "Sophia Liu",
    treatment: "Virtue RF Microneedling",
    text: "Professional, clean, and luxury service. The Glasgow clinic is stunning. Virtue RF changed my skin texture completely after just two sessions.",
  },
  {
    name: "David Mitchell",
    treatment: "PLACL Threads",
    text: "I was nervous about thread lifts, but Dr. Vincent was incredible. The PLACL threads gave me an immediate lift without looking 'pulled'. Highly recommend.",
  },
];

export const REVIEW_SOURCE_NOTE = "Verified independent reviews, as published on our main website.";
