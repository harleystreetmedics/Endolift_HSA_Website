"use client";

import { useRef } from "react";
import { REVIEWS, REVIEW_SUMMARY } from "@/content/people";
import { Icon } from "./Icon";
import { T, isTbc } from "./Tbc";

/** Scroll-snap carousel: swipe on touch, buttons on desktop, no autoplay (WCAG 2.2.2). */
export function ReviewsCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-white/70">
          <T>{`Rated ${REVIEW_SUMMARY.rating} from ${REVIEW_SUMMARY.count} reviews`}</T>
        </p>
        <div className="flex gap-2">
          <button type="button" onClick={() => scroll(-1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-gold hover:text-gold" aria-label="Previous reviews">
            <Icon name="chevron-left" />
          </button>
          <button type="button" onClick={() => scroll(1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-gold hover:text-gold" aria-label="Next reviews">
            <Icon name="chevron-right" />
          </button>
        </div>
      </div>
      <ul
        ref={track}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:px-0"
        aria-label="Patient reviews"
        tabIndex={0}
      >
        {REVIEWS.map((r, i) => (
          <li key={i} className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.84rem)]">
            <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              {!isTbc(r.text) && (
                <div className="mb-4 flex gap-1 text-gold" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="star" className="h-4 w-4 fill-current" />
                  ))}
                </div>
              )}
              <blockquote className="flex-1 font-serif text-lg leading-relaxed text-white/90">
                <p>
                  <T>{r.text}</T>
                </p>
              </blockquote>
              <figcaption className="mt-6 text-sm text-white/60">
                <span className="font-semibold text-white">
                  <T>{r.name}</T>
                </span>{" "}
                · {r.source} · <T>{r.date}</T>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-white/50">Reviews reflect individual experiences. Results vary from person to person.</p>
    </div>
  );
}
