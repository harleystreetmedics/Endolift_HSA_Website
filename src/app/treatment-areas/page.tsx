import { AREAS } from "@/content/areas";
import { TREATMENT_NAME, TREATMENT_NAME_PLAIN } from "@/content/site";
import { AreaCard, CtaBanner, MedicalDisclaimer, PageHero } from "@/components/Blocks";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const crumbs = [{ name: "Treatment areas", path: "/treatment-areas/" }];

export const metadata = pageMetadata({
  title: `${TREATMENT_NAME_PLAIN} Treatment Areas | Jawline, Neck, Double Chin & Face`,
  description: `See where ${TREATMENT_NAME_PLAIN} laser tightening can help: jawline and jowls, double chin, neck, full face, under-eyes and brow. London and Glasgow.`,
  path: "/treatment-areas/",
});

export default function AreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Treatment areas"
        title="Targeted laser tightening for face and neck"
        intro={`${TREATMENT_NAME} can be used on several areas of the face and neck, alone or in combination. Your doctor will recommend a plan based on your skin, anatomy and goals.`}
      />
      <Section tone="ivory">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <li key={a.slug}>
              <AreaCard area={a} />
            </li>
          ))}
        </ul>
        <MedicalDisclaimer className="mt-12" />
      </Section>
      <CtaBanner />
    </>
  );
}
