import { PageHero } from "@/components/Blocks";
import { ButtonLink } from "@/components/Button";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="We couldn't find that page" intro="The page may have moved. Try one of these instead.">
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/treatment-areas/" variant="outline-light">
          Treatment areas
        </ButtonLink>
        <ButtonLink href="/book/" variant="outline-light">
          Book consultation
        </ButtonLink>
      </div>
    </PageHero>
  );
}
