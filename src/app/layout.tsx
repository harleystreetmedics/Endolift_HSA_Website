import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BRAND, SITE_URL, TREATMENT_NAME_PLAIN } from "@/content/site";
import { LocationProvider } from "@/components/LocationProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${TREATMENT_NAME_PLAIN} London & Glasgow | Laser Skin Tightening | ${BRAND.name}`,
    template: `%s | ${BRAND.name}`,
  },
  description: `Minimally invasive ${TREATMENT_NAME_PLAIN} laser skin tightening for the jawline, neck and face at our London and Glasgow clinics.`,
  applicationName: `${TREATMENT_NAME_PLAIN} by ${BRAND.name}`,
  formatDetection: { telephone: false },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <a href="#main" className="sr-only z-[60] rounded-full bg-gold px-5 py-3 font-semibold text-on-gold focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
          Skip to content
        </a>
        <LocationProvider>
          <Header />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <StickyMobileCta />
          <CookieConsent />
          <Analytics />
        </LocationProvider>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
