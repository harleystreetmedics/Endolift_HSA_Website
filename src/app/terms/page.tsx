import { BRAND } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Terms of Use", description: "Terms of use for this Harley Street Aesthetics treatment website.", path: "/terms/" });

export default function Page() {
  return (
    <LegalPage title="Terms of use" path="/terms/">
      <h2>About this website</h2>
      <p>
        This website provides general information about a treatment offered by Harley Street Aesthetics. It does not form a contract for treatment. Treatment
        is only provided after a consultation with a qualified medical practitioner and your informed consent.
      </p>
      <h2>Prices and offers</h2>
      <p>
        Prices shown are a guide per treatment area and are confirmed at consultation. We may change prices. Any included extras (such as a complimentary Nu
        Sculpt session) are subject to the terms shown next to them and to your suitability.
      </p>
      <h2>Bookings and cancellations</h2>
      <p>
        Your first consultation is free and online. To secure a clinic appointment we ask for a £50 deposit, which is fully redeemable against the cost of your treatment. If you decide not to go ahead after your consultation, the deposit is refundable provided you give us 48 hours&rsquo; notice.
      </p>
      <h2>Content</h2>
      <p>
        We take care to keep information accurate, but it is general in nature and not a substitute for medical advice. All content and branding belong to
        Harley Street Aesthetics. Third-party trademarks belong to their owners.
      </p>
      <h2>Complaints</h2>
      <p>
        If you are unhappy with any aspect of our service, please contact <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>. We will look into it and reply to you.
      </p>
      <h2>Law</h2>
      <p>These terms are governed by the laws of England and Wales, or Scotland for treatment received at our Glasgow clinic.</p>
    </LegalPage>
  );
}
