import type { SVGProps } from "react";

/** Thin-line icon set (24px grid, 1.5 stroke), drawn to match a premium clinical style. */
const PATHS: Record<string, React.ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z M9 12l2 2 4-4" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  sparkle: <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7Z M19 16c.2 1.4.9 2.1 2 2.3-1.1.2-1.8.9-2 2.2-.2-1.3-.9-2-2-2.2 1.1-.2 1.8-.9 2-2.3Z" />,
  feather: <path d="M20 4c-6 0-11 4-12 11l-3 5M8 15h6c3-1 5-4 6-8M10 11h7" />,
  layers: <path d="m12 3 9 5-9 5-9-5 9-5Z M3 13l9 5 9-5" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.2-4 4.3-6 8-6s6.8 2 8 6" />
    </>
  ),
  phone: <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  whatsapp: (
    <>
      <path d="M4 20l1.3-4A8.5 8.5 0 1 1 8.4 19L4 20Z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a5 5 0 0 1-2.2-2.2l.8-1-1-2-1.6 1Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  "chevron-left": <path d="m15 6-6 6 6 6" />,
  "chevron-right": <path d="m9 6 6 6-6 6" />,
  check: <path d="m5 12 4.5 4.5L19 7" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  star: <path d="m12 3.5 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.6l1-5.8-4.2-4.1 5.9-.9L12 3.5Z" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  jaw: <path d="M5 6c0 6 2.5 10 7 13 4.5-3 7-7 7-13M8 15.5c1.2.8 2.6 1.2 4 1.2s2.8-.4 4-1.2" />,
  chin: <path d="M6 4c0 5 1.5 8 6 9.5C16.5 12 18 9 18 4M8 14.5c0 3 1.8 5.5 4 5.5s4-2.5 4-5.5" />,
  neck: <path d="M8 3c0 3-1 5-1 8v10M16 3c0 3 1 5 1 8v10M9 13c2 .8 4 .8 6 0M9 17c2 .8 4 .8 6 0" />,
  face: (
    <>
      <path d="M12 3c-4 0-7 3-7 8 0 5 3 10 7 10s7-5 7-10c0-5-3-8-7-8Z" />
      <path d="M9 10h.01M15 10h.01M10 15.5c1.2.8 2.8.8 4 0" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  brow: <path d="M3 10c3-3 6-3.5 9-2M12 8c3-1.5 6-1 9 2M5 15s2.5-2 7-2 7 2 7 2" />,
  gift: (
    <>
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <path d="M3 9h18M12 9v11M12 9c-2-4-6-4-6-1.5S10 9 12 9Zm0 0c2-4 6-4 6-1.5S14 9 12 9Z" />
    </>
  ),
};

export function Icon({ name, className = "h-5 w-5", ...rest }: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {PATHS[name] ?? PATHS.sparkle}
    </svg>
  );
}
