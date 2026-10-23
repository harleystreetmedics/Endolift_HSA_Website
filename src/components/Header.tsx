"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND, NAV } from "@/content/site";
import { useLocation } from "./LocationProvider";
import { LocationSwitcher } from "./LocationSwitcher";
import { Icon } from "./Icon";
import { Wordmark } from "./Wordmark";
import { buttonClass } from "./Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { clinic } = useLocation();

  // eslint-disable-next-line react-hooks/set-state-in-effect -- close the menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 text-white backdrop-blur supports-[backdrop-filter]:bg-ink/85">
      <div className="hidden border-b border-white/10 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs text-white/70">
          <a href={BRAND.mainSite} className="hover:text-gold">
            ← Harley Street Aesthetics main site
          </a>
          <div className="flex items-center gap-6">
            <a href={BRAND.allTreatments} className="hover:text-gold">
              All treatments
            </a>
            <a href={`mailto:${BRAND.email}`} className="hover:text-gold">
              {BRAND.email}
            </a>
          </div>
        </div>
      </div>
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
        <a href={BRAND.mainSite} aria-label="Harley Street Aesthetics – main website" className="shrink-0">
          <Wordmark />
        </a>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-6 text-[0.82rem] font-medium tracking-wide whitespace-nowrap">
            <li>
              <Link href="/" className={`hover:text-gold ${pathname === "/" ? "text-gold" : "text-white/85"}`} aria-current={pathname === "/" ? "page" : undefined}>
                Home
              </Link>
            </li>
            {NAV.map((item) => {
              const active = pathname?.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={active ? "page" : undefined} className={`hover:text-gold ${active ? "text-gold" : "text-white/85"}`}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LocationSwitcher className="hidden md:inline-flex" />
          <a href={clinic.phone.href} className="hidden items-center gap-2 text-sm text-white/85 hover:text-gold 2xl:flex">
            <Icon name="phone" className="h-4 w-4 text-gold" />
            {clinic.phone.display}
          </a>
          <Link href="/book/" className={buttonClass("gold", "hidden min-h-11! px-5! text-xs! whitespace-nowrap sm:inline-flex")}>
            Book consultation
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-ink xl:hidden">
          <nav aria-label="Mobile" className="container-x py-6">
            <ul className="flex flex-col divide-y divide-white/10">
              {[{ href: "/", label: "Home" }, ...NAV, { href: "/book/", label: "Book a consultation" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex min-h-12 items-center justify-between py-3 font-serif text-xl hover:text-gold">
                    {item.label}
                    <Icon name="chevron-right" className="h-5 w-5 text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-4">
              <p className="eyebrow text-white/60">Your clinic</p>
              <LocationSwitcher />
              <a href={BRAND.allTreatments} className="text-sm text-white/70 underline underline-offset-4">
                View all Harley Street Aesthetics treatments
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
