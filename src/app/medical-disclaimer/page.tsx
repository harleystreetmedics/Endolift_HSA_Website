import { TREATMENT_NAME, USE_ENDOLIFT_TRADEMARK } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Medical Disclaimer", description: "Important information about treatment suitability, results and risks.", path: "/medical-disclaimer/" });

export default function Page() {
  return (
    <LegalPage title="Medical disclaimer" path="/medical-disclaimer/">
      <h2>General information only</h2>
      <p>
        The information on this website about {TREATMENT_NAME} is for general education. It is not medical advice and should not replace a consultation with a
        qualified medical practitioner.
      </p>
      <h2>Consultation required</h2>
      <p>
        Every patient must have a consultation before treatment. Your practitioner will review your medical history, assess your suitability and explain the
        benefits, risks, alternatives and likely costs, so you can make an informed decision. We may advise that the treatment is not right for you.
      </p>
      <h2>Results vary</h2>
      <p>
        Results differ from person to person and depend on factors such as age, skin quality, anatomy, lifestyle and how your body heals. We do not guarantee any
        particular outcome. Before-and-after photos show individual results only.
      </p>
      <h2>Risks</h2>
      <p>
        All medical procedures carry risks. Common side effects include swelling, bruising and temporary numbness. Rare complications can include burns and
        scarring. Your practitioner will discuss these with you in detail.
      </p>
      <h2>Age</h2>
      <p>Our treatments are only available to adults aged 18 and over.</p>
      {USE_ENDOLIFT_TRADEMARK && (
        <>
          <h2>Trademarks</h2>
          <p>Endolift® is a registered trademark of Eufoton S.r.l.</p>
        </>
      )}
    </LegalPage>
  );
}
