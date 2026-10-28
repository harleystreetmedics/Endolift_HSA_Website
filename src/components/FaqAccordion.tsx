import type { Faq } from "@/content/faqs";
import { Icon } from "./Icon";
import { T } from "./Tbc";

/** Native <details> accordion: accessible and works without JavaScript. */
export function FaqAccordion({ faqs, tone = "light" }: { faqs: Faq[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={`divide-y rounded-2xl border ${dark ? "divide-white/10 border-white/10" : "divide-cream/10 border-cream/10 bg-card"}`}>
      {faqs.map((f) => (
        <details key={f.q} className="group px-5 sm:px-7">
          <summary className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-serif text-lg sm:text-xl ${dark ? "text-white" : "text-cream"}`}>
            {f.q}
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform group-open:rotate-180 ${dark ? "border-white/20 text-gold" : "border-cream/15 text-gold-700"}`}>
              <Icon name="chevron" className="h-4 w-4" />
            </span>
          </summary>
          <div className={`pb-6 leading-relaxed ${dark ? "text-white/75" : "text-stone"}`}>
            <p>
              <T>{f.a}</T>
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
