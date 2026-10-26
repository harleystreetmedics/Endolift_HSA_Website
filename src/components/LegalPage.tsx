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
          {children}
        </div>
      </Section>
    </>
  );
}
