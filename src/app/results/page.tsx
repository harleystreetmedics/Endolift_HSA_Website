import { TREATMENT_NAME, TREATMENT_NAME_PLAIN } from "@/content/site";
import { CtaBanner, MedicalDisclaimer, PageHero } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/Section";
import { T } from "@/components/Tbc";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const crumbs = [{ name: "Results", path: "/results/" }];

export const metadata = pageMetadata({
  title: `${TREATMENT_NAME_PLAIN} Results | Before & After`,
  description: `What to expect from ${TREATMENT_NAME_PLAIN}: how results develop over 3–6 months, and how we present real patient before-and-after photos.`,
  path: "/results/",
});

const PRINCIPLES = [
  "Only real patients treated at our clinics, with their written consent",
  "No retouching, filters or changes to lighting between photos",
  "Each photo labelled with the area treated and time since treatment",
  "Results vary: photos show individual outcomes, not a guarantee",
];

export default function ResultsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Results"
        title={`${TREATMENT_NAME} results`}
        intro="Results develop gradually as collagen remodels. Some tightening may be visible early on, with most people seeing their final result between three and six months after treatment."
      />
      <Section tone="ivory" labelledBy="gallery">
        <SectionHeading id="gallery" eyebrow="Before & after" title="Real patients, honestly presented" />
        <ul className="mb-12 grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <li key={p} className="flex gap-3 rounded-xl border border-ink/10 bg-white p-5">
              <Icon name="check" className="h-5 w-5 shrink-0 text-gold-700" />
              {p}
            </li>
          ))}
        </ul>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <figure key={i} className="overflow-hidden rounded-2xl border border-dashed border-gold/60 bg-white">
              <div className="grid aspect-[4/3] grid-cols-2 gap-px bg-mist">
                <div className="flex items-center justify-center bg-sand text-xs tracking-wider text-stone uppercase">Before</div>
                <div className="flex items-center justify-center bg-sand text-xs tracking-wider text-stone uppercase">After</div>
              </div>
              <figcaption className="p-5 text-sm text-stone">
                <T>[TBC: consented before/after photo: area, sessions, time since treatment, practitioner]</T>
              </figcaption>
            </figure>
          ))}
        </div>
        <MedicalDisclaimer className="mt-12" />
      </Section>
      <CtaBanner />
    </>
  );
}
