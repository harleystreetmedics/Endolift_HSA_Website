/**
 * Text wordmark used until the official logo file is supplied (docs/decisions.md D12).
 * To use the image logo instead, swap this for <img src={BRAND.logo} …/>.
 */
export function Wordmark({ tone = "dark", sub }: { tone?: "dark" | "light"; sub?: string }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-serif text-[1.15rem] tracking-[0.18em] uppercase sm:text-xl ${tone === "dark" ? "text-white" : "text-cream"}`}>
        Harley Street
      </span>{" "}
      <span className="mt-1 flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.42em] text-gold uppercase">
        <span aria-hidden="true" className="h-px w-4 bg-gold" />
        Aesthetics
        {sub && <span className="sr-only"> {sub}</span>}
      </span>
    </span>
  );
}
