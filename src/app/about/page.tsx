import { PRACTITIONERS } from "@/content/people";
import { BRAND, CLINIC_LIST, TREATMENT_NAME_PLAIN } from "@/content/site";
import { ClinicCard, CtaBanner, PageHero, PractitionerCard } from "@/components/Blocks";
import { ButtonLink } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/Section";
import { T } from "@/components/Tbc";
import { allClinicsSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const crumbs = [{ name: "Clinics & team", path: "/about/" }];

export const metadata = pageMetadata({
  title: `Our Clinics & Doctors | ${TREATMENT_NAME_PLAIN} London & Glasgow`,
  description: `Meet the GMC-registered doctors behind ${TREATMENT_NAME_PLAIN} at Harley Street Aesthetics, with clinics in central London and Glasgow.`,
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), ...allClinicsSchema()]} />
      <PageHero
        crumbs={crumbs}
        eyebrow="About us"
        title="Harley Street Aesthetics"
        intro="A doctor-led aesthetic clinic group with clinics in London and Glasgow, offering advanced non-surgical and minimally invasive treatments."
      >
        <div className="mt-8">
          <ButtonLink href={BRAND.mainSite} variant="outline-light">
            Visit our main website
          </ButtonLink>
        </div>
      </PageHero>

      <Section tone="ivory" labelledBy="clinics">
        <SectionHeading id="clinics" eyebrow="Our clinics" title="London & Glasgow" />
        <div className="grid gap-6 md:grid-cols-2">
          {CLINIC_LIST.map((c) => (
            <ClinicCard key={c.id} clinic={c} />
          ))}
        </div>
        <p className="mt-6 text-sm text-stone">
          Regulation: <T>{CLINIC_LIST.map((c) => `${c.city} – ${c.regulator}`).join("; ")}</T>
        </p>
      </Section>

      <Section tone="white" labelledBy="doctors">
        <SectionHeading
          id="doctors"
          eyebrow="Our doctors"
          title="Medical expertise you can check"
          intro={
            <>
              Every doctor on the UK medical register can be checked on the{" "}
              <a href="https://www.gmc-uk.org/registration-and-licensing/the-medical-register" className="text-gold-700 underline underline-offset-2" target="_blank" rel="noopener">
                GMC medical register
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </>
          }
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTITIONERS.map((p) => (
            <li key={p.name}>
              <PractitionerCard p={p} />
            </li>
          ))}
        </ul>
      </Section>
      <CtaBanner />
    </>
  );
}
