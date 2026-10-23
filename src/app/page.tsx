import Link from "next/link";
import { AREAS, CONSULTATION, PACKAGES } from "@/content/areas";
import { faqsByTag } from "@/content/faqs";
import { PRACTITIONERS } from "@/content/people";
import { CLINIC_LIST, TREATMENT_NAME, TREATMENT_NAME_PLAIN } from "@/content/site";
import { BENEFITS, STEPS, WHAT_IT_IS } from "@/content/treatment";
import { ButtonLink } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { AreaCard, ClinicCard, HeroArt, KeyFacts, MedicalDisclaimer, PractitionerCard } from "@/components/Blocks";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { T } from "@/components/Tbc";
import { allClinicsSchema, faqSchema, procedureSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${TREATMENT_NAME_PLAIN} London & Glasgow | Laser Skin Tightening`,
  description: `Minimally invasive ${TREATMENT_NAME_PLAIN} laser treatment for the jawline, double chin, neck and face. Doctor-led at our London and Glasgow clinics. From £999.`,
  path: "/",
});

export default function HomePage() {
  const homeFaqs = faqsByTag("home");
  return (
    <>
      <JsonLd data={[procedureSchema(), ...allClinicsSchema(), faqSchema(homeFaqs)]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white" aria-labelledby="hero-title">
        <HeroArt />
        <div className="container-x relative pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-28">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold">Minimally invasive laser lifting</p>
            <h1 id="hero-title" className="mt-5 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
              {TREATMENT_NAME} <span className="block text-gold italic">in London &amp; Glasgow</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Laser skin tightening for the jawline, under the chin, neck and face, performed under local anaesthetic by GMC-registered doctors.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book/">Book consultation</ButtonLink>
              <ButtonLink href="/pricing/" variant="outline-light">
                View pricing
              </ButtonLink>
            </div>
          </div>
          <div className="mt-14 sm:mt-20">
            <KeyFacts />
          </div>
        </div>
      </section>

      {/* What it is */}
      <Section tone="ivory" labelledBy="what-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading id="what-title" eyebrow={`What is ${TREATMENT_NAME_PLAIN}?`} title="Tightening and definition, without surgery" />
            <div className="space-y-5 text-lg leading-relaxed text-stone">
              <p>{WHAT_IT_IS.intro}</p>
              <p>{WHAT_IT_IS.body}</p>
            </div>
            <ButtonLink href="/how-it-works/" variant="outline-dark" className="mt-8">
              How it works
            </ButtonLink>
          </div>
          <div className="lg:col-span-5">
            <ul className="space-y-0 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white p-2 shadow-card">
              {WHAT_IT_IS.points.map((p) => (
                <li key={p} className="flex items-start gap-4 p-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-ink">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section tone="dark" labelledBy="benefits-title">
        <SectionHeading id="benefits-title" tone="dark" eyebrow="Why patients choose it" title="A considered alternative to surgery" align="center" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <li key={b.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <Icon name={b.icon} className="h-8 w-8 text-gold" />
              <h3 className="mt-5 font-serif text-2xl">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{b.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Treatment areas */}
      <Section tone="ivory" labelledBy="areas-title">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="areas-title"
            eyebrow="Treatment areas"
            title="Where it can help"
            intro="Your doctor will recommend the areas that suit your goals. Prices shown are per area. Your final price is confirmed at consultation."
          />
          <ButtonLink href="/treatment-areas/" variant="outline-dark" className="mb-10 shrink-0 sm:mb-12">
            All areas
          </ButtonLink>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <li key={a.slug}>
              <AreaCard area={a} />
            </li>
          ))}
        </ul>
      </Section>

      {/* How it works */}
      <Section tone="sand" labelledBy="steps-title">
        <SectionHeading id="steps-title" eyebrow="How it works" title="Your treatment, step by step" />
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-white p-7 shadow-card">
              <span className="font-serif text-4xl text-gold-700">0{i + 1}</span>
              <h3 className="mt-4 font-serif text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <ButtonLink href="/how-it-works/" variant="dark">
            Procedure, risks &amp; recovery
          </ButtonLink>
        </div>
      </Section>

      {/* Results */}
      <Section tone="ivory" labelledBy="results-title">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            id="results-title"
            eyebrow="Results"
            title="Gradual, natural-looking change"
            intro={
              <>
                <p>
                  Results build as new collagen forms, with most people seeing their final result between three and six months after treatment. Everyone&rsquo;s
                  skin is different, so results vary and are not guaranteed.
                </p>
                <p className="mt-4">We only show before-and-after photos of real patients who have given written consent, unedited and with full details.</p>
              </>
            }
          />
          <div className="rounded-2xl border border-dashed border-gold/60 bg-white p-8 text-center">
            <Icon name="sparkle" className="mx-auto h-8 w-8 text-gold-700" />
            <p className="mt-4 font-serif text-2xl text-ink">Before &amp; after gallery</p>
            <p className="mt-2 text-sm text-stone">
              <T>[TBC: consented before-and-after photos with treatment details]</T>
            </p>
            <Link href="/results/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-ink">
              About our results <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Practitioners */}
      <Section tone="white" labelledBy="team-title">
        <SectionHeading
          id="team-title"
          eyebrow="Your doctors"
          title="Doctor-led from consultation to aftercare"
          intro={<T>{"Treatment is planned and carried out by GMC-registered doctors. [TBC: confirm which practitioners perform this treatment at each clinic]"}</T>}
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTITIONERS.map((p) => (
            <li key={p.name}>
              <PractitionerCard p={p} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Pricing teaser */}
      <Section tone="dark" labelledBy="price-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="price-title"
              tone="dark"
              eyebrow="Pricing"
              title="Clear pricing, confirmed at consultation"
              intro="Prices are the same at our London and Glasgow clinics. Flexible payment options, including 0% finance, are available subject to status."
            />
            <ButtonLink href="/pricing/">Full pricing &amp; finance</ButtonLink>
          </div>
          <div className="lg:col-span-7">
            <table className="w-full text-left">
              <caption className="sr-only">{TREATMENT_NAME_PLAIN} prices by area</caption>
              <thead>
                <tr className="border-b border-white/15 text-xs tracking-wider text-white/60 uppercase">
                  <th scope="col" className="py-3 font-medium">
                    Area
                  </th>
                  <th scope="col" className="py-3 text-right font-medium">
                    From
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {AREAS.map((a) => (
                  <tr key={a.slug}>
                    <th scope="row" className="py-4 pr-4 font-serif text-lg font-normal">
                      <Link href={`/treatment-areas/${a.slug}/`} className="hover:text-gold">
                        {a.name}
                      </Link>
                    </th>
                    <td className="py-4 text-right font-serif text-xl text-gold">
                      <T>{a.price}</T>
                    </td>
                  </tr>
                ))}
                {PACKAGES.slice(0, 1).map((p) => (
                  <tr key={p.name}>
                    <th scope="row" className="py-4 pr-4 font-serif text-lg font-normal">
                      {p.name} <span className="block font-sans text-xs text-white/60">{p.description}</span>
                    </th>
                    <td className="py-4 text-right font-serif text-xl text-gold">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs text-white/60">
              Consultation: <T>{CONSULTATION.price}</T>
            </p>
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <section className="bg-charcoal py-16 text-white sm:py-20 lg:py-24" aria-labelledby="reviews-title">
        <div className="container-x">
          <SectionHeading id="reviews-title" tone="dark" eyebrow="Patient reviews" title="What our patients say" />
          <ReviewsCarousel />
        </div>
      </section>

      {/* FAQ */}
      <Section tone="ivory" labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-title" eyebrow="FAQ" title="Your questions, answered" />
            <ButtonLink href="/faq/" variant="outline-dark">
              All questions
            </ButtonLink>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion faqs={homeFaqs} />
          </div>
        </div>
      </Section>

      {/* Book */}
      <Section tone="sand" id="book" labelledBy="book-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="book-title"
              eyebrow="Book a consultation"
              title="Start with a conversation"
              intro="Tell us a little about yourself and our team will call you to arrange a consultation at your preferred clinic. There's no obligation to go ahead with treatment."
            />
            <div className="grid gap-4">
              {CLINIC_LIST.map((c) => (
                <ClinicCard key={c.id} clinic={c} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
        <MedicalDisclaimer className="mt-12" />
      </Section>
    </>
  );
}
