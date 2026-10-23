/**
 * Practitioners as listed on https://harleystreetaesthetic.co.uk/london/team (read 23 Oct 2026).
 * Which doctors perform this treatment at each clinic is still to be confirmed.
 * GMC numbers were not published, so none are shown here.
 */

export interface Practitioner {
  name: string;
  title: string;
  qualifications?: string;
  bio: string;
  photo?: string;
  gmc: string;
  clinics: string;
}

export const PRACTITIONERS: Practitioner[] = [
  {
    name: "Dr Nina Ku",
    title: "Dermatologist",
    qualifications: "[TBC: qualifications]",
    bio: "Dr Ku has trained and worked across the UK, France and Europe. Clinical interests include laser and energy-based treatments, laser lifting and injectables. Dr Ku speaks English, French and Russian.",
    photo: "https://harleystreetaesthetic.co.uk/images/team/dr-nina-ku.webp",
    gmc: "[TBC: GMC number]",
    clinics: "[TBC: clinic(s)]",
  },
  {
    name: "Mr Khalil Al-Nakib",
    title: "Consultant Plastic Surgeon",
    qualifications: "FRCSEd",
    bio: "A Fellow of the Royal College of Surgeons of Edinburgh with experience in plastic, aesthetic and reconstructive surgery. Skilled in the use of medical lasers and a member of the British Laser Association, Mr Al-Nakib also holds regular clinics in Glasgow.",
    photo: "https://harleystreetmedics.clinic/wp-content/uploads/2024/11/6-1.webp",
    gmc: "[TBC: GMC number]",
    clinics: "London & Glasgow",
  },
  {
    name: "Dr Ayda Soltanzadeh",
    title: "Consultant Dermatologist",
    qualifications: "[TBC: qualifications]",
    bio: "Dr Soltanzadeh offers bespoke treatment plans, with a focus on thread lifts, facial contouring and non-surgical facial rejuvenation.",
    photo: "https://images-strategyguys.netlify.app/harleystreemedics-image-source-main/dr.%20ayda.webp",
    gmc: "[TBC: GMC number]",
    clinics: "[TBC: clinic(s)]",
  },
];

export interface Review {
  name: string;
  text: string;
  source: string;
  date: string;
}

/**
 * Only add genuine reviews you have permission to quote (CAP Code section 3).
 * The live-site testimonials were not reused (D5).
 */
export const REVIEWS: Review[] = [
  {
    name: "[TBC: reviewer first name + initial]",
    text: "[TBC: verified patient review of this treatment, quoted with permission]",
    source: "Google",
    date: "[TBC: date]",
  },
  {
    name: "[TBC: reviewer first name + initial]",
    text: "[TBC: verified patient review of this treatment, quoted with permission]",
    source: "Google",
    date: "[TBC: date]",
  },
  {
    name: "[TBC: reviewer first name + initial]",
    text: "[TBC: verified patient review of this treatment, quoted with permission]",
    source: "Google",
    date: "[TBC: date]",
  },
];

export const REVIEW_SUMMARY = {
  rating: "[TBC: Google rating]",
  count: "[TBC: number of reviews]",
  url: "[TBC: Google reviews link]",
};
