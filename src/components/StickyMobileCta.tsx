"use client";

import Link from "next/link";
import { BRAND } from "@/content/site";
import { useLocation } from "./LocationProvider";
import { Icon } from "./Icon";

/** Bottom action bar on small screens: call the selected clinic, WhatsApp, book. */
export function StickyMobileCta() {
  const { clinic } = useLocation();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-ink/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-lg items-center gap-2">
        <a
          href={clinic.phone.href}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/25 text-sm font-semibold text-white"
          aria-label={`Call our ${clinic.city} clinic on ${clinic.phone.display}`}
        >
          <Icon name="phone" className="h-4 w-4 text-gold" /> Call
        </a>
        {BRAND.whatsapp.enabled && (
          <a
            href={BRAND.whatsapp.href}
            target="_blank"
            rel="noopener"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white"
            aria-label="Message us on WhatsApp (opens in a new tab)"
          >
            <Icon name="whatsapp" className="h-5 w-5 text-gold" />
          </a>
        )}
        <Link href="/book/" className="flex h-12 flex-[1.6] items-center justify-center rounded-full bg-gold text-sm font-semibold tracking-wide text-ink uppercase">
          Book consultation
        </Link>
      </div>
    </div>
  );
}
