"use client";

import { useEffect } from "react";
import { TRACKING } from "@/content/site";
import { readConsent, type Consent } from "./CookieConsent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string; callMethod?: (...a: unknown[]) => void; push?: unknown };
    _fbq?: unknown;
  }
}

const loaded = new Set<string>();

function addScript(id: string, src: string) {
  if (loaded.has(id) || document.getElementById(id)) return;
  loaded.add(id);
  const s = document.createElement("script");
  s.id = id;
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadAnalytics() {
  if (TRACKING.gtmId) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    addScript("gtm", `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(TRACKING.gtmId)}`);
  }
  if (TRACKING.ga4Id && !TRACKING.gtmId) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", TRACKING.ga4Id, { anonymize_ip: true });
    addScript("ga4", `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(TRACKING.ga4Id)}`);
  }
}

function loadMetaPixel() {
  if (!TRACKING.metaPixelId || window.fbq) return;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue!.push(args);
  } as NonNullable<Window["fbq"]>;
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;
  window.fbq = fbq;
  window._fbq = fbq;
  addScript("meta-pixel", "https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", TRACKING.metaPixelId);
  fbq("track", "PageView");
}

function apply(c: Consent | null) {
  if (!c) return;
  if (c.analytics) loadAnalytics();
  if (c.marketing) loadMetaPixel();
}

/** Loads GTM / GA4 / Meta Pixel only after the visitor has opted in. */
export function Analytics() {
  useEffect(() => {
    apply(readConsent());
    const onConsent = (e: Event) => apply((e as CustomEvent<Consent>).detail);
    window.addEventListener("hsa:consent", onConsent);
    return () => window.removeEventListener("hsa:consent", onConsent);
  }, []);
  return null;
}

/** Fire a conversion event (only if the relevant tag was allowed and loaded). */
export function trackLead(clinic: string) {
  window.dataLayer?.push({ event: "generate_lead", clinic });
  window.gtag?.("event", "generate_lead", { clinic });
  window.fbq?.("track", "Lead", { content_name: clinic });
}
