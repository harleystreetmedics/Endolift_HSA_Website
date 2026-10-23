import { CLINICS, TREATMENT_NAME_PLAIN } from "@/content/site";
import { CityLanding } from "@/components/CityLanding";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, clinicSchema, procedureSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${TREATMENT_NAME_PLAIN} London | Laser Skin Tightening`,
  description: `${TREATMENT_NAME_PLAIN} laser skin tightening in London for the jawline, double chin, neck and face. Doctor-led at Harley Street Aesthetics London. Book a consultation.`,
  path: "/london/",
});

export default function LondonPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "London", path: "/london/" }]), clinicSchema(CLINICS.london), procedureSchema()]} />
      <CityLanding id="london" />
    </>
  );
}
