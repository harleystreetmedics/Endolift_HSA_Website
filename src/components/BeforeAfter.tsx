"use client";

import { useState } from "react";
import type { Result } from "@/content/results";

/** Drag slider comparing before and after, as on the main site's gallery. */
export function BeforeAfter({ r, eager = false }: { r: Result; eager?: boolean }) {
  const [pos, setPos] = useState(50);
  return (
    <figure className="overflow-hidden rounded-xl border border-gold/20 bg-card">
      <div className="relative aspect-[43/24] select-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={r.after} srcSet={`${r.after.replace(".webp", "-800.webp")} 800w, ${r.after} 1600w`} sizes="(min-width: 640px) 50vw, 100vw" alt={`${r.title}: after treatment`} width={1600} height={893} loading={eager ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={r.before} srcSet={`${r.before.replace(".webp", "-800.webp")} 800w, ${r.before} 1600w`} sizes="(min-width: 640px) 50vw, 100vw" alt={`${r.title}: before treatment`} width={1600} height={893} loading={eager ? "eager" : "lazy"} className="h-full w-full object-cover" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px bg-gold" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-black-rich/80 text-gold">
            ‹›
          </span>
        </div>
        <span className="pointer-events-none absolute top-3 left-3 rounded-sm bg-black-rich/70 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-gold uppercase">Before</span>
        <span className="pointer-events-none absolute top-3 right-3 rounded-sm bg-black-rich/70 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-gold uppercase">After</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Compare before and after: ${r.title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="p-5">
        <p className="eyebrow text-gold">{r.area}</p>
        <p className="mt-1 font-serif text-xl text-cream">{r.title}</p>
        <p className="mt-1 text-sm text-stone">{r.text}</p>
      </figcaption>
    </figure>
  );
}
