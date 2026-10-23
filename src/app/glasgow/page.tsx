import { CLINICS, TREATMENT_NAME_PLAIN } from "@/content/site";
import { CityLanding } from "@/components/CityLanding";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, clinicSchema, procedureSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${TREATMENT_NAME_PLAIN} Glasgow | Laser Skin Tightening`,
  description: `${TREATMENT_NAME_PLAIN} laser skin tightening in Glasgow for the jawline, double chin, neck and face. Doctor-led at Harley Street Aesthetics Glasgow. Book a consultation.`,
  path: "/glasgow/",
});

export default function GlasgowPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Glasgow", path: "/glasgow/" }]), clinicSchema(CLINICS.glasgow), procedureSchema()]} />
      <CityLanding id="glasgow" />
    </>
  );
}
