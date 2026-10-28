import { BRAND, CLINIC_LIST, TREATMENT_NAME_PLAIN } from "@/content/site";
import { ClinicCard, MedicalDisclaimer, PageHero } from "@/components/Blocks";
import { BookingCalendar } from "@/components/BookingCalendar";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { allClinicsSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const crumbs = [{ name: "Book a consultation", path: "/book/" }];

export const metadata = pageMetadata({
  title: `Book an ${TREATMENT_NAME_PLAIN} Consultation | London & Glasgow`,
  description: `Request a ${TREATMENT_NAME_PLAIN} consultation at our London or Glasgow clinic. Book a free online consultation in our calendar, or call or WhatsApp us.`,
  path: "/book/",
});

export default function BookPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), ...allClinicsSchema()]} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Book a consultation"
        title="Let's talk about your goals"
        intro="Pick a time in our calendar for your free online consultation. There's no obligation to go ahead with treatment."
      />
      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="sr-only">Booking calendar</h2>
            <BookingCalendar />
          </div>
          <div className="space-y-5 lg:col-span-5">
            <h2 className="font-serif text-2xl">Prefer to talk?</h2>
            {CLINIC_LIST.map((c) => (
              <ClinicCard key={c.id} clinic={c} />
            ))}
            <div className="rounded-2xl border border-cream/10 bg-card p-6 text-sm">
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 hover:text-gold-700">
                <Icon name="mail" className="h-5 w-5 text-gold-700" /> {BRAND.email}
              </a>
              {BRAND.whatsapp.enabled && (
                <a href={BRAND.whatsapp.href} target="_blank" rel="noopener" className="mt-3 flex items-center gap-3 hover:text-gold-700">
                  <Icon name="whatsapp" className="h-5 w-5 text-gold-700" /> WhatsApp {BRAND.whatsapp.display}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </div>
          </div>
        </div>
        <MedicalDisclaimer className="mt-12" />
      </Section>
    </>
  );
}
