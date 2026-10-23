import { FAQS } from "@/content/faqs";
import { TREATMENT_NAME, TREATMENT_NAME_PLAIN } from "@/content/site";
import { CtaBanner, MedicalDisclaimer, PageHero } from "@/components/Blocks";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const crumbs = [{ name: "FAQ", path: "/faq/" }];

export const metadata = pageMetadata({
  title: `${TREATMENT_NAME_PLAIN} FAQ | Downtime, Results, Side Effects & Cost`,
  description: `Answers to common questions about ${TREATMENT_NAME_PLAIN}: pain, downtime, results, side effects, suitability, prices and finance.`,
  path: "/faq/",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(FAQS)]} />
      <PageHero crumbs={crumbs} eyebrow="FAQ" title={`${TREATMENT_NAME}: your questions answered`} intro="Can't find what you're looking for? Our team is happy to help by phone, WhatsApp or at your consultation." />
      <Section tone="ivory">
        <div className="mx-auto max-w-4xl">
          <FaqAccordion faqs={FAQS} />
          <MedicalDisclaimer className="mt-10" />
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
