import { notFound } from "next/navigation";
import Link from "next/link";
import { AREAS, NU_SCULPT_TERMS, getArea } from "@/content/areas";
import { faqsByTag } from "@/content/faqs";
import { TREATMENT_NAME, TREATMENT_NAME_PLAIN } from "@/content/site";
import { CANDIDACY, KEY_FACTS } from "@/content/treatment";
import { AreaCard, CtaBanner, KeyFacts, MedicalDisclaimer, PageHero } from "@/components/Blocks";
import { ButtonLink } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/Section";
import { T, isTbc } from "@/components/Tbc";
import { breadcrumbSchema, faqSchema, procedureSchema } from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const area = getArea((await params).slug);
  if (!area) return {};
  const keyword = area.keyword.charAt(0).toUpperCase() + area.keyword.slice(1);
  return pageMetadata({
    title: `${keyword} London & Glasgow | ${TREATMENT_NAME_PLAIN}`,
    description: area.metaDescription,
    path: `/treatment-areas/${area.slug}/`,
  });
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const area = getArea((await params).slug);
  if (!area) notFound();
  const path = `/treatment-areas/${area.slug}/`;
  const crumbs = [
    { name: "Treatment areas", path: "/treatment-areas/" },
    { name: area.name, path },
  ];
  const faqs = faqsByTag("procedure").concat(faqsByTag("safety")).slice(0, 5);
  const related = AREAS.filter((a) => a.slug !== area.slug).slice(0, 3);
  const minutes = `${KEY_FACTS[0].value} ${KEY_FACTS[0].label}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          procedureSchema({ name: `${TREATMENT_NAME_PLAIN}: ${area.name}`, bodyLocation: area.name, url: absoluteUrl(path) }),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow={`${TREATMENT_NAME_PLAIN} · ${area.shortName}`}
        title={`${area.keyword.charAt(0).toUpperCase()}${area.keyword.slice(1)}`}
        intro={area.summary}
      >
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
          <p className="text-white/80">
            {isTbc(area.price) ? (
              <T>{area.price}</T>
            ) : (
              <>
                From <span className="font-serif text-3xl text-gold">{area.price}</span>
              </>
            )}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book/">Book consultation</ButtonLink>
            <ButtonLink href="/pricing/" variant="outline-light">
              All prices
            </ButtonLink>
          </div>
        </div>
      </PageHero>

      <Section tone="ivory" labelledBy="concerns">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="concerns" eyebrow="What it can help with" title={`${area.name}: common concerns`} />
            <ul className="space-y-3">
              {area.concerns.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-xl border border-cream/10 bg-card p-4">
                  <Icon name="check" className="mt-0.5 h-5 w-5 text-gold-700" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            {area.priceNote && (
              <p className="mt-6 rounded-xl bg-black-soft p-4 text-sm text-stone">
                <T>{area.priceNote}</T>
              </p>
            )}
            {area.includesNuSculpt && (
              <p className="mt-6 flex gap-3 rounded-xl border border-gold/40 bg-gold-100/50 p-4 text-sm text-stone">
                <Icon name="gift" className="h-5 w-5 shrink-0 text-gold-700" />
                <span>{NU_SCULPT_TERMS}</span>
              </p>
            )}
          </div>
          <div>
            <SectionHeading eyebrow="What to expect" title="On the day" />
            <p className="mb-6 leading-relaxed text-stone">
              {TREATMENT_NAME} for the {area.shortName.toLowerCase()} is carried out under local anaesthetic and usually takes {minutes.toLowerCase()}, depending on
              the size of the area. Swelling and bruising are common for a few days. Read the{" "}
              <Link href="/how-it-works/" className="text-gold-700 underline underline-offset-2">
                full procedure, risks and recovery guide
              </Link>
              .
            </p>
            <KeyFacts tone="light" />
          </div>
        </div>
      </Section>

      <Section tone="sand" labelledBy="suitability">
        <SectionHeading id="suitability" eyebrow="Suitability" title="Is it right for you?" intro={CANDIDACY.intro} />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-7">
            <h3 className="font-sans text-base font-semibold">It may suit</h3>
            <ul className="mt-4 space-y-2 text-stone">
              {CANDIDACY.suitable.map((s) => (
                <li key={s} className="flex gap-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-gold-700" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-card p-7">
            <h3 className="font-sans text-base font-semibold">It may not suit</h3>
            <ul className="mt-4 space-y-2 text-stone">
              {CANDIDACY.unsuitable.map((s) => (
                <li key={s} className="flex gap-3">
                  <Icon name="x" className="mt-0.5 h-5 w-5 shrink-0 text-stone" />
                  <span>
                    <T>{s}</T>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="ivory" labelledBy="area-faq">
        <SectionHeading id="area-faq" eyebrow="FAQ" title="Common questions" />
        <FaqAccordion faqs={faqs} />
        <MedicalDisclaimer className="mt-10" />
      </Section>

      <Section tone="white" labelledBy="related">
        <SectionHeading id="related" eyebrow="Other areas" title="Often considered together" />
        <ul className="grid gap-5 md:grid-cols-3">
          {related.map((a) => (
            <li key={a.slug}>
              <AreaCard area={a} />
            </li>
          ))}
        </ul>
      </Section>
      <CtaBanner />
    </>
  );
}
