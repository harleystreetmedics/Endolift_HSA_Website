"use client";

import { useEffect, useRef, useState } from "react";

/** Remote image with an initials/gradient fallback when it fails to load. */
export function FallbackImage({
  src,
  alt,
  fallback,
  className = "",
  width,
  height,
}: {
  src?: string;
  alt: string;
  fallback: string;
  className?: string;
  width: number;
  height: number;
}) {
  const [failed, setFailed] = useState(!src);
  const ref = useRef<HTMLImageElement>(null);

  // The image may have failed before React hydrated, so onError never fired.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-graphite to-ink font-serif text-4xl text-gold ${className}`}
      >
        {fallback}
      </div>
    );
  }
  return (
    // Remote CDN images: next/image optimisation is unavailable in static export.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
