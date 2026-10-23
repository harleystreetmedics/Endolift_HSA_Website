import Link from "next/link";
import type { Area } from "@/content/areas";
import type { Practitioner } from "@/content/people";
import type { Clinic } from "@/content/site";
import { KEY_FACTS, RECOVERY, RISKS } from "@/content/treatment";
import { ButtonLink } from "./Button";
import { FallbackImage } from "./FallbackImage";
import { Icon } from "./Icon";
import { T, isTbc } from "./Tbc";

export function KeyFacts({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {KEY_FACTS.map((f) => (
        <div key={f.label} className={`rounded-2xl border p-4 sm:p-5 ${dark ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}>
          <Icon name={f.icon} className={`mb-3 h-6 w-6 ${dark ? "text-gold" : "text-gold-700"}`} />
          <dt className={`text-xs tracking-wider uppercase ${dark ? "text-white/60" : "text-stone"}`}>{f.label}</dt>
          <dd className={`mt-1 font-serif text-lg sm:text-xl ${dark ? "text-white" : "text-ink"}`}>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function AreaCard({ area }: { area: Area }) {
  return (
    <Link
      href={`/treatment-areas/${area.slug}/`}
      className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-gold/60 sm:p-7"
    >
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-sand text-gold-700">
        <Icon name={area.icon} className="h-6 w-6" />
      </span>
      <h3 className="font-serif text-2xl text-ink">{area.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{area.summary}</p>
      <div className="mt-6 flex items-end justify-between gap-3 border-t border-ink/10 pt-4">
        <span className="text-sm text-stone">
          {isTbc(area.price) ? (
            <T>{area.price}</T>
          ) : (
            <>
              From <span className="font-serif text-xl text-ink">{area.price}</span>
            </>
          )}
        </span>
        <span className="flex items-center gap-1 text-sm font-semibold text-gold-700">
          Learn more <span className="sr-only">about {area.name}</span>
          <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function RiskList() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {RISKS.map((r) => (
        <li key={r.title} className="rounded-2xl border border-ink/10 bg-white p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-sans text-base font-semibold text-ink">{r.title}</h3>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${r.frequency === "Common" ? "bg-sand text-ink" : "bg-ink/5 text-stone"}`}>{r.frequency}</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-stone">{r.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function RecoveryTimeline() {
  return (
    <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
      <span aria-hidden="true" className="absolute top-5 right-0 left-0 hidden h-px bg-gradient-to-r from-gold via-gold/40 to-transparent md:block" />
      {RECOVERY.map((r, i) => (
        <li key={r.when} className="relative flex gap-4 md:block">
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold bg-ink font-serif text-gold">{i + 1}</span>
          <div className="md:mt-5">
            <p className="eyebrow text-gold">{r.when}</p>
            <h3 className="mt-1 font-serif text-xl text-white">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{r.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function PractitionerCard({ p }: { p: Practitioner }) {
  const initials = p.name.replace(/^(Dr|Mr|Mrs|Ms|Miss)\.?\s+/, "").split(" ").map((s) => s[0]).join("").slice(0, 2);
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card">
      <FallbackImage src={p.photo} alt={`Portrait of ${p.name}`} fallback={initials} width={480} height={560} className="aspect-[6/7] w-full" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl text-ink">{p.name}</h3>
        <p className="mt-1 text-sm font-semibold text-gold-700">
          <T>{p.title}</T>
        </p>
        {p.qualifications && (
          <p className="mt-1 text-xs text-stone">
            <T>{p.qualifications}</T>
          </p>
        )}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-stone">{p.bio}</p>
        <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-ink/10 pt-4 text-xs">
          <div>
            <dt className="text-stone">GMC number</dt>
            <dd className="mt-0.5 font-semibold text-ink">
              <T>{p.gmc}</T>
            </dd>
          </div>
          <div>
            <dt className="text-stone">Clinic</dt>
            <dd className="mt-0.5 font-semibold text-ink">
              <T>{p.clinics}</T>
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function ClinicCard({ clinic, tone = "light" }: { clinic: Clinic; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={`flex flex-col rounded-2xl border p-6 sm:p-8 ${dark ? "border-white/10 bg-white/[0.04] text-white" : "border-ink/10 bg-white text-ink shadow-card"}`}>
      <p className={`eyebrow ${dark ? "text-gold" : "text-gold-700"}`}>{clinic.city}</p>
      <h3 className="mt-2 font-serif text-2xl">{clinic.name}</h3>
      <address className={`mt-5 flex-1 space-y-4 text-sm not-italic ${dark ? "text-white/75" : "text-stone"}`}>
        {clinic.addresses.map((a) => (
          <p key={a.line1} className="flex gap-3">
            <Icon name="pin" className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? "text-gold" : "text-gold-700"}`} />
            <span>
              {a.line1}
              {a.line2 && (
                <>
                  , {a.line2}
                </>
              )}
              <br />
              {a.locality} {a.postcode}
            </span>
          </p>
        ))}
        <p className="flex gap-3">
          <Icon name="clock" className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? "text-gold" : "text-gold-700"}`} />
          <span>
            <T>{clinic.hours}</T>
          </span>
        </p>
      </address>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={clinic.phone.href} className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold ${dark ? "bg-gold text-ink" : "bg-ink text-white"}`}>
          <Icon name="phone" className="h-4 w-4" /> {clinic.phone.display}
        </a>
        <a
          href={clinic.mapsUrl}
          target="_blank"
          rel="noopener"
          className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold ${dark ? "border-white/25" : "border-ink/20"}`}
        >
          Directions <span className="sr-only">to our {clinic.city} clinic (opens Google Maps in a new tab)</span>
        </a>
      </div>
    </div>
  );
}

export function CtaBanner({
  title = "Find out if this treatment is right for you",
  text = "Every treatment starts with a free, no-obligation online consultation. Our clinical team will explain the options honestly and answer your questions.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ivory py-16 sm:py-20" aria-labelledby="cta-title">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-center sm:px-12 sm:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
          <p className="eyebrow relative text-gold">Book a consultation</p>
          <h2 id="cta-title" className="relative mx-auto mt-4 max-w-2xl text-3xl text-white sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-white/75">{text}</p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/book/">Book consultation</ButtonLink>
            <ButtonLink href="/pricing/" variant="outline-light">
              View pricing
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MedicalDisclaimer({ className = "" }: { className?: string }) {
  return (
    <aside className={`rounded-2xl border border-ink/10 bg-sand/60 p-5 text-sm leading-relaxed text-stone sm:p-6 ${className}`} aria-label="Medical disclaimer">
      <p className="flex gap-3">
        <Icon name="info" className="mt-0.5 h-5 w-5 shrink-0 text-gold-700" />
        <span>
          <strong className="text-ink">Important:</strong> this information is general and is not medical advice. Suitability for treatment is assessed by a
          qualified medical practitioner at consultation. Results vary between individuals and cannot be guaranteed. All medical procedures carry some risk; your
          doctor will explain these before you decide.{" "}
          <Link href="/medical-disclaimer/" className="text-gold-700 underline underline-offset-2">
            Read our medical disclaimer
          </Link>
          .
        </span>
      </p>
    </aside>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-white/60">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
        </li>
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-2">
            <Icon name="chevron-right" className="h-3 w-3" />
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-white/90">
                {it.name}
              </span>
            ) : (
              <Link href={it.path} className="hover:text-gold">
                {it.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  crumbs?: { name: string; path: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-10 pb-16 text-white sm:pt-14 sm:pb-20">
      <HeroArt />
      <div className="container-x relative">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div className="mt-8 max-w-3xl">
          {eyebrow && <p className="eyebrow text-gold">{eyebrow}</p>}
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
          {intro && <div className="mt-6 text-lg leading-relaxed text-white/75">{intro}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}

/** Abstract gold art direction used instead of patient imagery (D13). */
export function HeroArt() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
      <svg className="absolute top-0 right-0 h-full w-2/3 opacity-30" viewBox="0 0 600 600" preserveAspectRatio="xMaxYMid slice" fill="none">
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M ${620 - i * 8} -20 C ${420 - i * 22} ${180 + i * 6}, ${520 - i * 18} ${380 + i * 4}, ${300 - i * 24} 640`} stroke="url(#g)" strokeWidth="1" />
        ))}
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="0.5" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
