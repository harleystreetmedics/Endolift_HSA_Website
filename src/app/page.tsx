import Link from "next/link";
import { AREAS, NU_SCULPT_TERMS } from "@/content/areas";
import { faqsByTag } from "@/content/faqs";
import { TREATMENT_NAME, TREATMENT_NAME_PLAIN } from "@/content/site";
import { PROCEDURE_IMAGE, WHAT_IT_IS } from "@/content/treatment";
import { ButtonLink } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import {
  AreaCard,
  Candidacy,
  CtaBanner,
  HeroArt,
  KeyFacts,
  MedicalDisclaimer,
  NuSculptBanner,
  PaymentOptions,
  RecoveryTimeline,
  RiskList,
} from "@/components/Blocks";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { BookingCalendar } from "@/components/BookingCalendar";
import { FallbackImage } from "@/components/FallbackImage";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { LocationMap } from "@/components/LocationMap";
import { BeforeAfter } from "@/components/BeforeAfter";
import { RESULTS } from "@/content/results";
import { allClinicsSchema, faqSchema, procedureSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${TREATMENT_NAME_PLAIN} London & Glasgow | Laser Skin Tightening`,
  description: `Minimally invasive ${TREATMENT_NAME_PLAIN} laser skin tightening and fat reduction for the jawline, double chin, neck and face. Doctor-led at our London and Glasgow clinics. From £999.`,
  path: "/",
});

/** Section order follows the main site's Endolift page (harleystreetaesthetic.co.uk/glasgow/treatments/endolift). */
export default function HomePage() {
  const homeFaqs = faqsByTag("home");
  return (
    <>
      <JsonLd data={[procedureSchema(), ...allClinicsSchema(), faqSchema(homeFaqs)]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white" aria-labelledby="hero-title">
        <HeroArt />
        <div className="container-x relative pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold">Minimally invasive laser lifting</p>
              <h1 id="hero-title" className="mt-5 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
                {TREATMENT_NAME} <span className="block text-gold italic">in London &amp; Glasgow</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Minimally invasive skin tightening and fat reduction for the face, jawline and neck, delivered by GMC-registered doctors.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/book/">Book consultation</ButtonLink>
                <ButtonLink href="/pricing/" variant="outline-light">
                  View pricing
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-5">
              <FallbackImage
                src={PROCEDURE_IMAGE}
                alt={`${TREATMENT_NAME_PLAIN} treatment`}
                fallback={TREATMENT_NAME_PLAIN}
                width={640}
                height={720}
                className="aspect-[8/9] w-full rounded-3xl border border-white/10"
              />
            </div>
          </div>
          <div className="mt-14 sm:mt-16">
            <KeyFacts />
          </div>
        </div>
      </section>

      {/* How it works */}
      <Section tone="ivory" labelledBy="what-title">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading id="what-title" eyebrow="How it works" title={`${TREATMENT_NAME_PLAIN} at our clinics`} />
            <div className="space-y-5 text-lg leading-relaxed text-stone">
              <p>{WHAT_IT_IS.intro}</p>
              <p>{WHAT_IT_IS.body}</p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {WHAT_IT_IS.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink">{p}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/how-it-works/" variant="outline-dark" className="mt-8">
              More about the procedure
            </ButtonLink>
          </div>
          <div className="lg:col-span-5">
            <FallbackImage
              src={PROCEDURE_IMAGE}
              alt={`${TREATMENT_NAME_PLAIN} procedure`}
              fallback={TREATMENT_NAME_PLAIN}
              width={560}
              height={680}
              className="aspect-[4/5] w-full rounded-3xl shadow-card"
            />
          </div>
        </div>
      </Section>

      {/* Treatment options */}
      <Section tone="sand" labelledBy="areas-title">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="areas-title" eyebrow="Treatment options" title="Targeted protocols for every area of concern" />
          <ButtonLink href="/pricing/" variant="outline-dark" className="mb-10 shrink-0 sm:mb-12">
            Full pricing
          </ButtonLink>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <li key={a.slug}>
              <AreaCard area={a} />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-stone">{NU_SCULPT_TERMS}</p>
      </Section>

      {/* Results */}
      <Section tone="ivory" labelledBy="results-title">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="results-title"
            eyebrow="Results"
            title="Real patient results"
            intro="Results build as new collagen forms. Everyone's skin is different, so results vary and are not guaranteed."
          />
          <Link href="/results/" className="mb-10 inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold-700 hover:text-ink sm:mb-12">
            See all results <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {RESULTS.slice(0, 2).map((r) => (
            <BeforeAfter key={r.title} r={r} />
          ))}
        </div>
      </Section>

      {/* Candidacy */}
      <Section tone="sand" labelledBy="candidate-title">
        <SectionHeading
          id="candidate-title"
          eyebrow="Suitability"
          title="Are you a good candidate?"
          intro="Suitability is assessed at consultation by our GMC-registered doctors, based on your medical history, skin condition and goals."
        />
        <Candidacy />
      </Section>

      {/* Risks */}
      <Section tone="ivory" labelledBy="risks-title">
        <SectionHeading
          id="risks-title"
          eyebrow="Safety"
          title="Risks & side effects"
          intro="All medical procedures carry some risk. We believe in being open about them, and your doctor will go through them with you."
        />
        <RiskList />
      </Section>

      {/* Recovery */}
      <Section tone="white" labelledBy="recovery-title">
        <SectionHeading
          id="recovery-title"
          eyebrow="Recovery"
          title="Recovery timeline"
          intro="A general guide. You'll receive personalised aftercare advice at your appointment."
        />
        <RecoveryTimeline />
        <MedicalDisclaimer className="mt-12" />
      </Section>

      {/* Nu Sculpt */}
      <section className="bg-ivory py-16 sm:py-20" aria-label="Nu Sculpt">
        <div className="container-x">
          <NuSculptBanner />
        </div>
      </section>

      <CtaBanner title={`Book ${TREATMENT_NAME_PLAIN} in London or Glasgow`} />

      {/* Flexible payments */}
      <Section tone="sand" labelledBy="pay-title">
        <SectionHeading
          id="pay-title"
          eyebrow="Flexible payments"
          title="Invest in yourself"
          intro="Payment options are available to suit your needs, subject to status."
          align="center"
        />
        <PaymentOptions />
      </Section>

      {/* Reviews */}
      <section className="bg-charcoal py-16 text-white sm:py-20 lg:py-24" aria-labelledby="reviews-title">
        <div className="container-x">
          <SectionHeading id="reviews-title" tone="dark" eyebrow="Patient reviews" title="Trusted by patients" />
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
          <div className="lg:col-span-4">
            <SectionHeading
              id="book-title"
              eyebrow="Book a consultation"
              title="Secure your free consultation"
              intro="Choose a time that suits you for your free online consultation. There's no obligation to go ahead with treatment."
            />
            <ul className="space-y-3">
              {["Priority booking access", "Direct specialist assessment", "No-obligation discussion"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-ink">
                  <Icon name="check" className="h-5 w-5 text-gold-700" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8">
            <BookingCalendar />
          </div>
        </div>
      </Section>

      {/* Locations */}
      <Section tone="ivory" labelledBy="loc-title">
        <SectionHeading id="loc-title" eyebrow="Our clinics" title="Visit us in London or Glasgow" />
        <LocationMap />
      </Section>
    </>
  );
}
