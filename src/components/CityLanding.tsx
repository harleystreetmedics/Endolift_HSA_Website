import { AREAS } from "@/content/areas";
import { faqsByTag } from "@/content/faqs";
import { CLINICS, TREATMENT_NAME, type ClinicId } from "@/content/site";
import { WHAT_IT_IS } from "@/content/treatment";
import { AreaCard, ClinicCard, CtaBanner, KeyFacts, MedicalDisclaimer, PageHero } from "./Blocks";
import { ButtonLink } from "./Button";
import { EnquiryForm } from "./EnquiryForm";
import { FaqAccordion } from "./FaqAccordion";
import { ForceLocation } from "./LocationProvider";
import { Section, SectionHeading } from "./Section";

export function CityLanding({ id }: { id: ClinicId }) {
  const clinic = CLINICS[id];
  const [addr] = clinic.addresses;
  return (
    <>
      <ForceLocation id={id} />
      <PageHero
        crumbs={[{ name: clinic.city, path: `/${id}/` }]}
        eyebrow={`${clinic.city} clinic`}
        title={`${TREATMENT_NAME} in ${clinic.city}`}
        intro={`Minimally invasive laser skin tightening at our ${clinic.city} clinic, ${addr.line1}${addr.line2 ? `, ${addr.line2}` : ""}, ${addr.postcode}. Doctor-led, under local anaesthetic.`}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#enquire">Book consultation</ButtonLink>
          <a href={clinic.phone.href} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-7 text-sm font-semibold tracking-[0.12em] text-white uppercase hover:border-gold hover:text-gold">
            Call {clinic.phone.display}
          </a>
        </div>
        <div className="mt-12">
          <KeyFacts />
        </div>
      </PageHero>

      <Section tone="ivory" labelledBy="city-about">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="city-about" eyebrow="About the treatment" title={`Laser lifting at our ${clinic.city} clinic`} />
            <div className="space-y-4 leading-relaxed text-stone">
              <p>{WHAT_IT_IS.intro}</p>
              <p>{WHAT_IT_IS.body}</p>
            </div>
          </div>
          <ClinicCard clinic={clinic} />
        </div>
      </Section>

      <Section tone="white" labelledBy="city-areas">
        <SectionHeading id="city-areas" eyebrow="Treatment areas" title={`Areas we treat in ${clinic.city}`} />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <li key={a.slug}>
              <AreaCard area={a} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sand" id="enquire" labelledBy="city-book">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="city-book" eyebrow="Book" title={`Book a consultation in ${clinic.city}`} />
            <FaqAccordion faqs={faqsByTag("home").slice(0, 4)} />
          </div>
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
        <MedicalDisclaimer className="mt-12" />
      </Section>
      <CtaBanner />
    </>
  );
}
