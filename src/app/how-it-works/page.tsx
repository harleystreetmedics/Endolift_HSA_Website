import { TREATMENT_NAME, TREATMENT_NAME_PLAIN } from "@/content/site";
import { AFTERCARE, CANDIDACY, DEVICE, SESSIONS, STEPS, WHAT_IT_IS } from "@/content/treatment";
import { CtaBanner, KeyFacts, MedicalDisclaimer, PageHero, RecoveryTimeline, RiskList } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/Section";
import { T } from "@/components/Tbc";
import { breadcrumbSchema, procedureSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const crumbs = [{ name: "How it works", path: "/how-it-works/" }];

export const metadata = pageMetadata({
  title: `How ${TREATMENT_NAME_PLAIN} Works | Procedure, Risks & Recovery`,
  description: `How ${TREATMENT_NAME_PLAIN} laser tightening works, what happens on the day, who it suits, side effects and the recovery timeline. Doctor-led in London and Glasgow.`,
  path: "/how-it-works/",
});

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), procedureSchema()]} />
      <PageHero crumbs={crumbs} eyebrow="The procedure" title={`How ${TREATMENT_NAME} works`} intro={WHAT_IT_IS.intro}>
        <div className="mt-12">
          <KeyFacts />
        </div>
      </PageHero>

      <Section tone="ivory" labelledBy="science">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="science" eyebrow="The technology" title="Laser energy, beneath the skin" />
            <div className="space-y-4 leading-relaxed text-stone">
              <p>{WHAT_IT_IS.body}</p>
              <p>{DEVICE}</p>
              <p>{SESSIONS}, carried out under local anaesthetic, and you go home the same day.</p>
            </div>
          </div>
          <ol className="space-y-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-5 rounded-2xl border border-ink/10 bg-white p-6">
                <span className="font-serif text-3xl text-gold-700">0{i + 1}</span>
                <div>
                  <h3 className="font-serif text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="sand" labelledBy="candidate">
        <SectionHeading id="candidate" eyebrow="Suitability" title="Are you a good candidate?" intro={CANDIDACY.intro} />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-7">
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
          <div className="rounded-2xl bg-white p-7">
            <h3 className="font-sans text-base font-semibold">It may not suit</h3>
            <ul className="mt-4 space-y-2 text-stone">
              {CANDIDACY.unsuitable.map((s) => (
                <li key={s} className="flex gap-3">
                  <Icon name="x" className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>
                    <T>{s}</T>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="ivory" labelledBy="risks">
        <SectionHeading
          id="risks"
          eyebrow="Safety"
          title="Risks & side effects"
          intro="All medical procedures carry some risk. Your doctor will go through these with you in detail, alongside your medical history, before you decide whether to go ahead."
        />
        <RiskList />
      </Section>

      <Section tone="dark" labelledBy="recovery">
        <SectionHeading
          id="recovery"
          tone="dark"
          eyebrow="Recovery"
          title="What recovery usually looks like"
          intro="A general guide only. Your doctor will give you personalised aftercare advice."
        />
        <RecoveryTimeline />
        <p className="mt-12 rounded-2xl border border-white/10 p-5 text-sm text-white/70">
          <strong className="text-white">Aftercare:</strong> {AFTERCARE}
        </p>
      </Section>

      <Section tone="ivory">
        <MedicalDisclaimer />
      </Section>
      <CtaBanner />
    </>
  );
}
