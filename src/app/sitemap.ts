import type { MetadataRoute } from "next";
import { AREAS } from "@/content/areas";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const main = ["/", "/treatment-areas/", "/how-it-works/", "/pricing/", "/results/", "/faq/", "/about/", "/london/", "/glasgow/", "/book/"];
  const legal = ["/privacy-policy/", "/cookie-policy/", "/terms/", "/medical-disclaimer/"];
  return [
    ...main.map((p) => ({ url: absoluteUrl(p), lastModified: now, changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.8 })),
    ...AREAS.map((a) => ({ url: absoluteUrl(`/treatment-areas/${a.slug}/`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...legal.map((p) => ({ url: absoluteUrl(p), lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 })),
  ];
}
