/**
 * Treatment areas and prices, from the live Endolift page (London and Glasgow prices are identical).
 * Source: https://harleystreetaesthetic.co.uk/london/treatments/endolift (read 23 Oct 2026).
 * The struck-through "was" prices are deliberately not shown (docs/decisions.md D4).
 */

export interface Area {
  slug: string;
  name: string;
  shortName: string;
  keyword: string;
  summary: string;
  concerns: string[];
  price: string;
  priceNote?: string;
  includesNuSculpt: boolean;
  icon: string;
  metaDescription: string;
}

export const AREAS: Area[] = [
  {
    slug: "jawline-jowls",
    name: "Jawline & jowls",
    shortName: "Jawline",
    keyword: "laser jawline tightening",
    summary:
      "Laser jawline tightening to help define the jaw, soften the look of jowls and restore balance to the lower face.",
    concerns: [
      "Loss of definition along the jawline",
      "Early jowling",
      "Mild skin laxity in the lower face",
    ],
    price: "£1,495",
    includesNuSculpt: false,
    icon: "jaw",
    metaDescription:
      "Minimally invasive laser jawline tightening in London and Glasgow. Doctor-led, local anaesthetic, from £1,495. Book a consultation.",
  },
  {
    slug: "double-chin",
    name: "Double chin (submental)",
    shortName: "Double chin",
    keyword: "double chin laser treatment",
    summary:
      "Double chin laser treatment targeting small pockets of fat beneath the chin while tightening the overlying skin for a cleaner profile.",
    concerns: [
      "Fullness under the chin",
      "A soft neck–chin angle",
      "Mild laxity under the jaw",
    ],
    price: "[TBC: standalone submental price]",
    priceNote:
      "Our EndoMax Signature package combines submental treatment with 2 ml jawline filler for £2,150 and includes one free Nu Sculpt session.",
    includesNuSculpt: false,
    icon: "chin",
    metaDescription:
      "Double chin laser treatment in London and Glasgow. A minimally invasive, doctor-led option for submental fat and laxity. Book a consultation.",
  },
  {
    slug: "neck",
    name: "Full neck",
    shortName: "Neck",
    keyword: "non-surgical neck lift",
    summary:
      "A minimally invasive alternative to a surgical neck lift, using laser energy to help tighten lax neck skin and restore definition.",
    concerns: ["Loose or crepey neck skin", "Loss of neck definition", "Mild laxity and banding"],
    price: "£1,995",
    includesNuSculpt: true,
    icon: "neck",
    metaDescription:
      "Non-surgical neck lift with laser tightening in London and Glasgow. Local anaesthetic, doctor-led, from £1,995. Book a consultation.",
  },
  {
    slug: "full-face",
    name: "Full face (mid & lower)",
    shortName: "Full face",
    keyword: "non-surgical facelift laser",
    summary:
      "Mid and lower face tightening for people who want firmer, more lifted-looking skin without a surgical facelift.",
    concerns: ["Mild to moderate laxity in the mid face", "Mild to moderate laxity in the lower face", "Loss of facial definition"],
    price: "£1,995",
    includesNuSculpt: true,
    icon: "face",
    metaDescription:
      "Minimally invasive laser face tightening for the mid and lower face in London and Glasgow. From £1,995. Book a doctor-led consultation.",
  },
  {
    slug: "under-eyes",
    name: "Under-eyes (periorbital)",
    shortName: "Under-eyes",
    keyword: "under-eye laser tightening",
    summary:
      "Careful treatment of the delicate skin around the eyes to help reduce the appearance of hooding and under-eye bags.",
    concerns: ["Under-eye bags", "Mild hooding", "Crepey skin around the eyes"],
    price: "£999",
    priceNote: "A CO₂ laser + eyelid combination is also available for £1,299. Ask at consultation.",
    includesNuSculpt: false,
    icon: "eye",
    metaDescription:
      "Under-eye laser tightening around the eyes in London and Glasgow. Minimally invasive and doctor-led, from £999. Book a consultation.",
  },
  {
    slug: "brow",
    name: "Brow & forehead",
    shortName: "Brow",
    keyword: "laser brow lift",
    summary:
      "Treatment to help lift the brow and tighten the forehead for a fresher-looking upper face.",
    concerns: ["Low or heavy brows", "Forehead skin laxity", "A tired-looking upper face"],
    price: "£1,495",
    includesNuSculpt: false,
    icon: "brow",
    metaDescription:
      "Laser brow lift and forehead tightening in London and Glasgow. Minimally invasive, doctor-led, from £1,495. Book a consultation.",
  },
];

export const PACKAGES = [
  {
    name: "EndoMax Signature",
    description: "Submental (under-chin) laser treatment combined with 2 ml jawline filler.",
    price: "£2,150",
    includesNuSculpt: true,
  },
  {
    name: "CO₂ + eyelid combination",
    description: "CO₂ laser combined with laser treatment around the eyelids. [TBC: package details]",
    price: "£1,299",
    includesNuSculpt: false,
  },
];

export const NU_SCULPT_TERMS =
  "One free Nu Sculpt session is included with packages priced at £1,995 or more. It is not included with the £1,495 or £999 packages, or with the £1,299 CO₂ + eyelid combination. Suitability, treatment area and timing are confirmed at consultation.";

export const CONSULTATION = {
  price: "[TBC: consultation fee. Forms say “free consultation”, pricing FAQ says a fee is deducted from treatment]",
  deposit:
    "A £50 deposit secures your appointment. It is redeemable against your treatment cost and refundable with at least 48 hours’ notice.",
  payment: "We accept all major credit and debit cards, including American Express, as well as cash and bank transfer.",
};

export const FINANCE = [
  {
    name: "Klarna",
    title: "Pay in 3",
    text: "Spread the cost over three interest-free instalments.",
  },
  {
    name: "Clearpay",
    title: "Pay in 4",
    text: "Four equal payments, due every two weeks.",
  },
  {
    name: "Ideal 4 Finance",
    title: "Medical finance",
    text: "For treatments over £1,000, with interest-free options up to 12 months.",
  },
];

export const FINANCE_SMALLPRINT =
  "Finance is subject to status and affordability checks by the lender. [TBC: credit broker / FCA status and representative example]";

export function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug);
}
