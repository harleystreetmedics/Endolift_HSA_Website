import type { Result } from "@/content/results";
import { FallbackImage } from "./FallbackImage";

export function BeforeAfter({ r }: { r: Result }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card">
      <div className="grid grid-cols-2 gap-px bg-mist">
        {(["before", "after"] as const).map((k) => (
          <div key={k} className="relative">
            <FallbackImage src={r[k]} alt={`${r.title}: ${k} treatment`} fallback={k === "before" ? "Before" : "After"} width={400} height={500} className="aspect-[4/5] w-full text-base" />
            <span className="absolute bottom-2 left-2 rounded-full bg-ink/80 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wider text-white uppercase">{k}</span>
          </div>
        ))}
      </div>
      <figcaption className="p-5">
        <p className="eyebrow text-gold-700">{r.area}</p>
        <p className="mt-1 font-serif text-xl text-ink">{r.title}</p>
        <p className="mt-1 text-sm text-stone">{r.text}</p>
      </figcaption>
    </figure>
  );
}
