import { Fragment } from "react";

const TBC_RE = /(\[TBC[^\]]*\])/g;

/**
 * Renders a content string and highlights any `[TBC: …]` placeholder so it can't
 * slip through review unnoticed (docs/decisions.md D15).
 */
export function T({ children }: { children: string }) {
  if (!children.includes("[TBC")) return <>{children}</>;
  return (
    <>
      {children.split(TBC_RE).map((part, i) =>
        part.startsWith("[TBC") ? (
          <mark
            key={i}
            data-tbc
            className="rounded bg-amber-200 px-1 py-0.5 font-mono text-[0.8em] text-amber-950 not-italic"
          >
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export const isTbc = (v?: string) => !v || v.includes("[TBC");
