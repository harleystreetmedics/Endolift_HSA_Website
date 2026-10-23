import type { Metadata } from "next";
import { BRAND, SITE_URL, TREATMENT_NAME_PLAIN } from "@/content/site";

export const absoluteUrl = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}

export function pageMetadata({ title, description, path, image = "/og/og-default.png", noindex }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: `${TREATMENT_NAME_PLAIN} | ${BRAND.name}`,
      title,
      description,
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: `${TREATMENT_NAME_PLAIN} at ${BRAND.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}
