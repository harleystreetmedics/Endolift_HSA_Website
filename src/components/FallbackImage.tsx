"use client";

import { useState } from "react";

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
