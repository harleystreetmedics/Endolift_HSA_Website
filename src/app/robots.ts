import type { MetadataRoute } from "next";
import { IS_PRODUCTION_HOST, SITE_URL } from "@/content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: IS_PRODUCTION_HOST ? [{ userAgent: "*", allow: "/" }] : [{ userAgent: "*", disallow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
