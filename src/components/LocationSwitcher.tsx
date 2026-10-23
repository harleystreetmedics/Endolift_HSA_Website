"use client";

import { CLINIC_LIST } from "@/content/site";
import { useLocation } from "./LocationProvider";

/** London / Glasgow segmented switch, mirroring the main site's location selector. */
export function LocationSwitcher({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const { location, setLocation } = useLocation();
  const base = tone === "dark" ? "border-white/15 bg-white/5" : "border-ink/10 bg-white";
  return (
    <div role="group" aria-label="Choose your clinic" className={`inline-flex rounded-full border p-1 ${base} ${className}`}>
      {CLINIC_LIST.map((c) => {
        const active = c.id === location;
        return (
          <button
            key={c.id}
            type="button"
            aria-pressed={active}
            onClick={() => setLocation(c.id)}
            className={`min-h-9 rounded-full px-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
              active
                ? "bg-gold text-ink"
                : tone === "dark"
                  ? "text-white/80 hover:text-white"
                  : "text-stone hover:text-ink"
            }`}
          >
            {c.city}
          </button>
        );
      })}
    </div>
  );
}
