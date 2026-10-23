import { AREAS, CONSULTATION, FINANCE, FINANCE_SMALLPRINT, NU_SCULPT_TERMS, PACKAGES } from "@/content/areas";
import { faqsByTag } from "@/content/faqs";
import { BRAND, TREATMENT_NAME, TREATMENT_NAME_PLAIN } from "@/content/site";
import { CtaBanner, MedicalDisclaimer, PageHero } from "@/components/Blocks";
import { ButtonLink } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/Section";
import { T } from "@/components/Tbc";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

const crumbs = [{ name: "Pricing", path: "/pricing/" }];

export const metadata = pageMetadata({
  title: `${TREATMENT_NAME_PLAIN} Prices London & Glasgow | From £999`,
  description: `${TREATMENT_NAME_PLAIN} prices by area: under-eyes from £999, jawline and brow from £1,495, full face or neck from £1,995. 0% finance available, subject to status.`,
  path: "/pricing/",
});

export default function PricingPage() {
  const faqs = faqsByTag("pricing");
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Pricing"
        title={`${TREATMENT_NAME} prices`}
        intro="Prices are per area and the same at our London and Glasgow clinics. Your doctor will confirm your treatment plan and final price at consultation, with no hidden costs."
      />

      <Section tone="ivory" labelledBy="prices">
        <SectionHeading id="prices" eyebrow="Price list" title="Treatment areas" />
        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card">
          <table className="w-full text-left">
            <caption className="sr-only">{TREATMENT_NAME_PLAIN} prices by treatment area</caption>
            <thead className="bg-sand/60 text-xs tracking-wider text-stone uppercase">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold sm:px-7">
                  Area
                </th>
                <th scope="col" className="hidden px-5 py-4 font-semibold md:table-cell">
                  Includes
                </th>
                <th scope="col" className="px-5 py-4 text-right font-semibold sm:px-7">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {AREAS.map((a) => (
                <tr key={a.slug}>
                  <th scope="row" className="px-5 py-5 font-normal sm:px-7">
                    <Link href={`/treatment-areas/${a.slug}/`} className="font-serif text-lg text-ink hover:text-gold-700">
                      {a.name}
                    </Link>
                    <span className="mt-1 block text-sm text-stone md:hidden">{a.includesNuSculpt ? "Includes one free Nu Sculpt session" : ""}</span>
                  </th>
                  <td className="hidden px-5 py-5 text-sm text-stone md:table-cell">{a.includesNuSculpt ? "One free Nu Sculpt session" : "n/a"}</td>
                  <td className="px-5 py-5 text-right font-serif text-xl text-ink sm:px-7">
                    <T>{a.price}</T>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-14 mb-5 font-serif text-2xl">Packages</h3>
        <ul className="grid gap-5 md:grid-cols-2">
          {PACKAGES.map((p) => (
            <li key={p.name} className="flex flex-col rounded-2xl border border-ink/10 bg-white p-7">
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-serif text-2xl">{p.name}</h4>
                <span className="font-serif text-2xl text-gold-700">{p.price}</span>
              </div>
              <p className="mt-3 text-stone">
                <T>{p.description}</T>
              </p>
              {p.includesNuSculpt && <p className="mt-3 text-sm font-semibold text-ink">Includes one free Nu Sculpt session</p>}
            </li>
          ))}
        </ul>

        <p className="mt-8 flex gap-3 rounded-xl border border-gold/40 bg-gold-100/50 p-5 text-sm text-stone">
          <Icon name="gift" className="h-5 w-5 shrink-0 text-gold-700" />
          <span>
            <strong className="text-ink">Nu Sculpt terms:</strong> {NU_SCULPT_TERMS}{" "}
            <a href={`${BRAND.mainSite}/london/treatments/nu-sculpt`} className="text-gold-700 underline underline-offset-2">
              About Nu Sculpt
            </a>
          </span>
        </p>

        <dl className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-sand p-6">
            <dt className="font-semibold">Consultation</dt>
            <dd className="mt-2 text-sm text-stone">
              <T>{CONSULTATION.price}</T>
            </dd>
          </div>
          <div className="rounded-2xl bg-sand p-6">
            <dt className="font-semibold">Deposit</dt>
            <dd className="mt-2 text-sm text-stone">{CONSULTATION.deposit}</dd>
          </div>
          <div className="rounded-2xl bg-sand p-6">
            <dt className="font-semibold">Ways to pay</dt>
            <dd className="mt-2 text-sm text-stone">{CONSULTATION.payment}</dd>
          </div>
        </dl>
      </Section>

      <Section tone="dark" labelledBy="finance">
        <SectionHeading
          id="finance"
          tone="dark"
          eyebrow="Flexible payments"
          title="Spread the cost"
          intro="If you'd prefer to spread the cost of treatment, we offer a choice of payment plans."
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {FINANCE.map((f) => (
            <li key={f.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <p className="eyebrow text-gold">{f.name}</p>
              <h3 className="mt-3 font-serif text-2xl">{f.title}</h3>
              <p className="mt-3 text-sm text-white/70">{f.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-white/60">
          <T>{FINANCE_SMALLPRINT}</T>
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={BRAND.finance}>Finance options</ButtonLink>
          <ButtonLink href="/book/" variant="outline-light">
            Book consultation
          </ButtonLink>
        </div>
      </Section>

      <Section tone="ivory" labelledBy="price-faq">
        <SectionHeading id="price-faq" eyebrow="FAQ" title="Pricing questions" />
        <FaqAccordion faqs={faqs} />
        <MedicalDisclaimer className="mt-10" />
      </Section>
      <CtaBanner />
    </>
  );
}
