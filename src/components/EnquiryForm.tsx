"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { AREAS } from "@/content/areas";
import { CLINIC_LIST, type ClinicId } from "@/content/site";
import { useLocation } from "./LocationProvider";
import { trackLead } from "./Analytics";

/**
 * Enquiry form → Netlify Forms (docs/decisions.md D9).
 * The form is registered at build time by public/__forms.html. Field names must match it.
 * TODO(launch): set the notification email / CRM webhook in Netlify → Forms → Notifications
 * ([TBC: enquiry destination from Copilot]).
 */

const FORM_NAME = "enquiry";
type Status = "idle" | "sending" | "sent" | "error";

const TIMES = ["Any time", "Morning (9am–12pm)", "Afternoon (12pm–5pm)", "Evening (after 5pm)", "Weekend"];

const inputCls =
  "mt-1.5 block w-full min-h-12 rounded-xl border border-ink/15 bg-white px-4 text-base text-ink placeholder:text-stone/60 transition focus:border-gold-700 focus:ring-2 focus:ring-gold/40 focus:outline-none aria-[invalid=true]:border-red-700";

export function EnquiryForm({ compact = false, defaultArea }: { compact?: boolean; defaultArea?: string }) {
  const { location, setLocation } = useLocation();
  const [clinic, setClinic] = useState<ClinicId>(location);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const uid = useId();
  const id = (n: string) => `${uid}-${n}`;

  // eslint-disable-next-line react-hooks/set-state-in-effect -- follow the header switcher
  useEffect(() => setClinic(location), [location]);

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const e: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) e.name = "Please enter your name.";
    const phone = String(data.get("phone") ?? "").replace(/[\s()-]/g, "");
    if (!/^\+?\d{10,14}$/.test(phone)) e.phone = "Please enter a valid UK phone number.";
    const email = String(data.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = "Please enter a valid email address.";
    if (!data.get("consent")) e.consent = "Please confirm you agree to be contacted about your enquiry.";
    if (!data.get("age")) e.age = "Treatments are only available to adults aged 18 and over.";
    return e;
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`);
      first?.focus();
      return;
    }
    setStatus("sending");
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
    try {
      if (process.env.NODE_ENV !== "production") {
        // Local dev has no Netlify Forms endpoint. Simulate success.
        await new Promise((r) => setTimeout(r, 400));
      } else {
        const res = await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body,
        });
        if (!res.ok) throw new Error(String(res.status));
      }
      trackLead(clinic);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const selected = CLINIC_LIST.find((c) => c.id === clinic)!;

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-gold/40 bg-white p-8 text-center shadow-card">
        <p className="font-serif text-2xl text-ink">Thank you, we&rsquo;ve received your enquiry.</p>
        <p className="mt-3 text-stone">
          A member of our {selected.city} team will be in touch to arrange your consultation. If you&rsquo;d prefer to speak to us now, call{" "}
          <a className="font-semibold text-gold-700 underline" href={selected.phone.href}>
            {selected.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  const err = (n: string) =>
    errors[n] ? (
      <p id={id(`${n}-err`)} className="mt-1.5 text-sm text-red-700">
        {errors[n]}
      </p>
    ) : null;
  const aria = (n: string) => ({ "aria-invalid": Boolean(errors[n]), "aria-describedby": errors[n] ? id(`${n}-err`) : undefined });

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="company"
      noValidate
      onSubmit={onSubmit}
      className="rounded-2xl bg-white p-6 shadow-card sm:p-8"
      aria-label="Consultation enquiry form"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden" aria-hidden="true">
        <label>
          Leave this field empty <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor={id("name")} className="text-sm font-semibold text-ink">
            Full name <span aria-hidden="true" className="text-red-700">*</span>
          </label>
          <input id={id("name")} name="name" autoComplete="name" required className={inputCls} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor={id("phone")} className="text-sm font-semibold text-ink">
            Phone <span aria-hidden="true" className="text-red-700">*</span>
          </label>
          <input id={id("phone")} name="phone" type="tel" inputMode="tel" autoComplete="tel" required className={inputCls} {...aria("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor={id("email")} className="text-sm font-semibold text-ink">
            Email <span aria-hidden="true" className="text-red-700">*</span>
          </label>
          <input id={id("email")} name="email" type="email" autoComplete="email" required className={inputCls} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor={id("clinic")} className="text-sm font-semibold text-ink">
            Preferred clinic
          </label>
          <select
            id={id("clinic")}
            name="clinic"
            value={clinic}
            onChange={(e) => {
              setClinic(e.target.value as ClinicId);
              setLocation(e.target.value as ClinicId);
            }}
            className={inputCls}
          >
            {CLINIC_LIST.map((c) => (
              <option key={c.id} value={c.id}>
                {c.city}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={id("time")} className="text-sm font-semibold text-ink">
            Best time to call
          </label>
          <select id={id("time")} name="preferred_time" className={inputCls} defaultValue={TIMES[0]}>
            {TIMES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor={id("area")} className="text-sm font-semibold text-ink">
            Area of interest
          </label>
          <select id={id("area")} name="area" className={inputCls} defaultValue={defaultArea ?? "Not sure yet"}>
            <option>Not sure yet</option>
            {AREAS.map((a) => (
              <option key={a.slug}>{a.name}</option>
            ))}
          </select>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor={id("message")} className="text-sm font-semibold text-ink">
            Message <span className="font-normal text-stone">(optional)</span>
          </label>
          <textarea id={id("message")} name="message" rows={compact ? 3 : 4} className={`${inputCls} py-3`} />
          <p className="mt-1.5 text-xs text-stone">Please don&rsquo;t include detailed medical information. Your doctor will discuss this with you at consultation.</p>
        </div>
      </div>

      <div className="mt-6 space-y-3 text-sm text-stone">
        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input type="checkbox" name="age" value="yes" className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-gold-700)]" {...aria("age")} />
            <span>I confirm I am aged 18 or over. <span aria-hidden="true" className="text-red-700">*</span></span>
          </label>
          {err("age")}
        </div>
        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input type="checkbox" name="consent" value="yes" className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-gold-700)]" {...aria("consent")} />
            <span>
              I agree to Harley Street Aesthetics contacting me by phone, email or text about this enquiry, and I have read the{" "}
              <Link href="/privacy-policy/" className="text-gold-700 underline underline-offset-2">
                privacy policy
              </Link>
              . <span aria-hidden="true" className="text-red-700">*</span>
            </span>
          </label>
          {err("consent")}
        </div>
        <label className="flex cursor-pointer items-start gap-3">
          <input type="checkbox" name="marketing" value="yes" className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-gold-700)]" />
          <span>I&rsquo;d like to receive occasional news and offers by email (optional, unsubscribe at any time).</span>
        </label>
      </div>

      {/* Optional extra spam protection: enable reCAPTCHA in Netlify Forms and uncomment. */}
      {/* <div data-netlify-recaptcha="true" className="mt-4" /> */}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-7 text-sm font-semibold tracking-[0.12em] text-ink uppercase shadow-gold transition hover:bg-gold-600 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request my consultation"}
      </button>

      <p aria-live="polite" className="mt-3 text-center text-sm">
        {status === "error" && (
          <span className="text-red-700">
            Sorry, something went wrong. Please call us on{" "}
            <a href={selected.phone.href} className="font-semibold underline">
              {selected.phone.display}
            </a>
            .
          </span>
        )}
      </p>
      <p className="mt-2 text-center text-xs text-stone">Fields marked * are required. A consultation does not commit you to treatment.</p>
    </form>
  );
}
