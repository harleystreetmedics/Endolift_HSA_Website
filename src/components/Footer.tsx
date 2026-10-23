import Link from "next/link";
import { AREAS } from "@/content/areas";
import { BRAND, CLINIC_LIST, LEGAL_NAV, NAV, TREATMENT_NAME } from "@/content/site";
import { Icon } from "./Icon";
import { Wordmark } from "./Wordmark";
import { CookieSettingsButton } from "./CookieConsent";
import { T } from "./Tbc";

export function Footer() {
  return (
    <footer className="bg-ink pb-28 text-white/75 lg:pb-0">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <a href={BRAND.mainSite}>
            <Wordmark sub="main website" />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {TREATMENT_NAME}, minimally invasive laser skin tightening by GMC-registered doctors at our London and Glasgow clinics.
          </p>
          <a href={BRAND.allTreatments} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-white">
            All treatments at Harley Street Aesthetics <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>

        <nav aria-label="Treatment areas" className="lg:col-span-2">
          <h2 className="eyebrow mb-4 font-sans text-white">Treatment areas</h2>
          <ul className="space-y-2.5 text-sm">
            {AREAS.map((a) => (
              <li key={a.slug}>
                <Link href={`/treatment-areas/${a.slug}/`} className="hover:text-gold">
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="eyebrow mb-4 font-sans text-white">Explore</h2>
          <ul className="space-y-2.5 text-sm">
            {NAV.slice(1).map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book/" className="hover:text-gold">
                Book a consultation
              </Link>
            </li>
            <li>
              <a href={BRAND.finance} className="hover:text-gold">
                0% finance
              </a>
            </li>
          </ul>
        </nav>

        <div className="grid gap-8 sm:grid-cols-2 md:col-span-2 lg:col-span-4">
          {CLINIC_LIST.map((c) => (
            <div key={c.id}>
              <h2 className="eyebrow mb-4 font-sans text-white">{c.city} clinic</h2>
              <address className="space-y-3 text-sm not-italic">
                {c.addresses.map((a) => (
                  <p key={a.line1} className="flex gap-2">
                    <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>
                      {a.line1}
                      {a.line2 && (
                        <>
                          <br />
                          {a.line2}
                        </>
                      )}
                      <br />
                      {a.locality} {a.postcode}
                    </span>
                  </p>
                ))}
                <p>
                  <a href={c.phone.href} className="flex items-center gap-2 hover:text-gold">
                    <Icon name="phone" className="h-4 w-4 text-gold" />
                    {c.phone.display}
                  </a>
                </p>
              </address>
            </div>
          ))}
          <div className="space-y-3 text-sm sm:col-span-2">
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-gold">
              <Icon name="mail" className="h-4 w-4 text-gold" />
              {BRAND.email}
            </a>
            {BRAND.whatsapp.enabled && (
              <a href={BRAND.whatsapp.href} className="flex items-center gap-2 hover:text-gold" rel="noopener" target="_blank">
                <Icon name="whatsapp" className="h-4 w-4 text-gold" />
                WhatsApp {BRAND.whatsapp.display}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x space-y-4 py-8 text-xs leading-relaxed text-white/60">
          <p>
            Treatments are for adults aged 18 and over. All treatments require a consultation with a qualified medical practitioner, who will assess your
            suitability. Results vary from person to person and are not guaranteed.
          </p>
          <p>
            <T>{CLINIC_LIST.map((c) => `${c.city}: ${c.regulator}`).join(" · ")}</T>
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Harley Street Aesthetics. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {LEGAL_NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton className="hover:text-gold" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
