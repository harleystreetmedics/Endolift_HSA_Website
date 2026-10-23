"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { TRACKING } from "@/content/site";

/**
 * UK GDPR / PECR cookie consent. Nothing non-essential runs until the visitor
 * opts in. "Reject" is as easy as "Accept" (same prominence, same layer).
 */

export interface Consent {
  analytics: boolean;
  marketing: boolean;
  ts: string;
  v: 1;
}

const KEY = "hsa-cookie-consent";
const OPEN_EVENT = "hsa:open-cookie-settings";

export function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean, marketing: boolean) {
  const prev = readConsent();
  const c: Consent = { analytics, marketing, ts: new Date().toISOString(), v: 1 };
  try {
    window.localStorage.setItem(KEY, JSON.stringify(c));
  } catch {
    /* storage unavailable: consent applies to this page view only */
  }
  window.dispatchEvent(new CustomEvent<Consent>("hsa:consent", { detail: c }));
  // Withdrawing consent: reload so already-loaded tags stop running.
  if (prev && ((prev.analytics && !analytics) || (prev.marketing && !marketing))) window.location.reload();
}

export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie settings
    </button>
  );
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const hasTracking = Boolean(TRACKING.gtmId || TRACKING.ga4Id || TRACKING.metaPixelId);

  useEffect(() => {
    const existing = readConsent();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- consent lives in localStorage, read after mount
    if (!existing) setVisible(true);
    const open = () => {
      const c = readConsent();
      setAnalytics(c?.analytics ?? false);
      setMarketing(c?.marketing ?? false);
      setManage(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  useEffect(() => {
    if (visible && manage) headingRef.current?.focus();
  }, [visible, manage]);

  const close = useCallback((a: boolean, m: boolean) => {
    saveConsent(a, m);
    setVisible(false);
    setManage(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-3 bottom-24 z-50 mx-auto max-w-xl rounded-2xl border border-white/10 bg-charcoal p-5 text-white shadow-2xl sm:bottom-6 sm:p-6 lg:right-6 lg:left-auto lg:mx-0"
    >
      <h2 id="cookie-title" ref={headingRef} tabIndex={-1} className="font-serif text-xl outline-none">
        Your privacy
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-white/75">
        We use essential cookies to make this site work. With your permission we&rsquo;d also like to use analytics cookies to understand how the site is used
        {hasTracking ? " and marketing cookies to measure our advertising" : ""}. Read our{" "}
        <Link href="/cookie-policy/" className="text-gold underline underline-offset-2">
          cookie policy
        </Link>
        .
      </p>

      {manage && (
        <fieldset className="mt-4 space-y-3 rounded-xl border border-white/10 p-4 text-sm">
          <legend className="sr-only">Cookie preferences</legend>
          <label className="flex items-start gap-3 opacity-70">
            <input type="checkbox" checked disabled className="mt-1 h-4 w-4 accent-[var(--color-gold)]" />
            <span>
              <strong className="block">Essential</strong> Remembers your clinic and cookie choices. Always on.
            </span>
          </label>
          <label className="flex cursor-pointer items-start gap-3">
            <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="mt-1 h-4 w-4 accent-[var(--color-gold)]" />
            <span>
              <strong className="block">Analytics</strong> Google Analytics, to see which pages are useful.
            </span>
          </label>
          <label className="flex cursor-pointer items-start gap-3">
            <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-1 h-4 w-4 accent-[var(--color-gold)]" />
            <span>
              <strong className="block">Marketing</strong> Meta Pixel, to measure the effectiveness of our adverts.
            </span>
          </label>
        </fieldset>
      )}

      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        <button type="button" onClick={() => close(false, false)} className="min-h-11 rounded-full border border-white/30 px-4 text-sm font-semibold hover:border-gold">
          Reject non-essential
        </button>
        {manage ? (
          <button type="button" onClick={() => close(analytics, marketing)} className="min-h-11 rounded-full border border-white/30 px-4 text-sm font-semibold hover:border-gold">
            Save choices
          </button>
        ) : (
          <button type="button" onClick={() => setManage(true)} className="min-h-11 rounded-full border border-white/30 px-4 text-sm font-semibold hover:border-gold">
            Manage
          </button>
        )}
        <button type="button" onClick={() => close(true, true)} className="min-h-11 rounded-full bg-gold px-4 text-sm font-semibold text-ink hover:bg-gold-600">
          Accept all
        </button>
      </div>
    </div>
  );
}
