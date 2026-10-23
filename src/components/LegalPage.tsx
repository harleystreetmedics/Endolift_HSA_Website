import { LAST_REVIEWED } from "@/content/site";
import { PageHero } from "./Blocks";
import { JsonLd } from "./JsonLd";
import { Section } from "./Section";
import { breadcrumbSchema } from "@/lib/schema";

export function LegalPage({ title, path, children }: { title: string; path: string; children: React.ReactNode }) {
  const crumbs = [{ name: title, path }];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero crumbs={crumbs} title={title} intro={`Last reviewed: ${LAST_REVIEWED}`} />
      <Section tone="ivory">
        <div className="prose-legal mx-auto max-w-3xl">
          <p className="rounded-xl bg-amber-100 p-4 text-sm text-amber-950!">
            <mark data-tbc className="bg-transparent font-mono text-amber-950">[TBC: legal review]</mark> This is a draft prepared for review. It must be checked
            and approved by Harley Street Aesthetics (and its legal/data protection adviser) before launch.
          </p>
          {children}
        </div>
      </Section>
    </>
  );
}
