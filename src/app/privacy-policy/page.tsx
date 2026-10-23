import Link from "next/link";
import { BRAND } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";
import { T } from "@/components/Tbc";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Privacy Policy", description: "How Harley Street Aesthetics collects, uses and protects your personal data.", path: "/privacy-policy/" });

export default function Page() {
  return (
    <LegalPage title="Privacy policy" path="/privacy-policy/">
      <h2>Who we are</h2>
      <p>
        This website is operated by Harley Street Aesthetics, a trading name of <T>[TBC: confirm legal entity, e.g. Harley Street Medics Ltd (SC818003), 211b Main Street, Bellshill ML4 1AJ]</T>, the data controller
        for personal data collected through it. ICO registration number: <T>[TBC: ICO number]</T>.
      </p>
      <p>
        Contact us about privacy at <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>Details you give us in the enquiry form: name, phone number, email, preferred clinic, preferred call time, area of interest and your message.</li>
        <li>Records of your consent choices (cookie preferences, marketing preference).</li>
        <li>If you accept analytics or marketing cookies: information about how you use the site (see our <Link href="/cookie-policy/">cookie policy</Link>).</li>
      </ul>
      <p>Please do not send detailed medical information through the website form. Your doctor will collect your medical history securely at consultation.</p>
      <h2>How and why we use it</h2>
      <ul>
        <li>To respond to your enquiry and arrange a consultation (lawful basis: steps prior to entering a contract / legitimate interests).</li>
        <li>To send you news and offers, only if you opted in (lawful basis: consent, which you can withdraw at any time).</li>
        <li>To understand and improve our website, only if you accepted analytics cookies (lawful basis: consent).</li>
      </ul>
      <h2>Who we share it with</h2>
      <p>
        Our website host and form processor (Netlify, Inc.), our email provider and, if you consent, Google and Meta
        for analytics and advertising measurement. Some of these providers may process data outside the UK under appropriate safeguards.
      </p>
      <h2>How long we keep it</h2>
      <p>
        <T>[TBC: retention periods for enquiries that do and do not become patients]</T>
      </p>
      <h2>Your rights</h2>
      <p>
        You have the right to access, correct, erase, restrict or object to processing of your data, and to data portability. To exercise these rights, email{" "}
        <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>. You can also complain to the Information Commissioner&rsquo;s Office (ico.org.uk).
      </p>
    </LegalPage>
  );
}
