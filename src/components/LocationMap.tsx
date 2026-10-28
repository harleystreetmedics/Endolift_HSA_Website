"use client";

import { CLINIC_LIST } from "@/content/site";
import { Icon } from "./Icon";
import { useLocation } from "./LocationProvider";

/** Map with London/Glasgow tabs, following the location switcher. */
export function LocationMap() {
  const { clinic, setLocation } = useLocation();
  const a = clinic.addresses[0];
  const query = encodeURIComponent([a.line1, a.line2, a.locality, a.postcode].filter(Boolean).join(", "));
  return (
    <div className="grid overflow-hidden rounded-3xl border border-cream/10 bg-card shadow-card lg:grid-cols-12">
      <div className="p-7 sm:p-10 lg:col-span-5">
        <div role="tablist" aria-label="Choose a clinic" className="inline-flex rounded-full border border-cream/15 p-1">
          {CLINIC_LIST.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={c.id === clinic.id}
              onClick={() => setLocation(c.id)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase transition ${c.id === clinic.id ? "bg-gold text-on-gold" : "text-stone hover:text-cream"}`}
            >
              {c.city}
            </button>
          ))}
        </div>
        <h3 className="mt-6 font-serif text-3xl text-cream">{clinic.city} clinic</h3>
        <p className="mt-4 flex gap-3 text-stone">
          <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-gold-700" />
          <span>
            {a.line1}
            {a.line2 && <>, {a.line2}</>}
            <br />
            {a.locality} {a.postcode}
          </span>
        </p>
        <p className="mt-3 flex gap-3 text-stone">
          <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-gold-700" />
          {clinic.hours}
        </p>
        <p className="mt-3 flex gap-3">
          <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-gold-700" />
          <a href={clinic.phone.href} className="font-semibold text-cream hover:text-gold-700">
            {clinic.phone.display}
          </a>
        </p>
        <a href={clinic.mapsUrl} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-cream">
          Get directions <Icon name="arrow" className="h-4 w-4" />
          <span className="sr-only">(opens Google Maps in a new tab)</span>
        </a>
      </div>
      <iframe
        key={clinic.id}
        title={`Map of our ${clinic.city} clinic`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-80 w-full border-0 lg:col-span-7 lg:h-full lg:min-h-[420px]"
      />
    </div>
  );
}
