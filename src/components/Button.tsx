import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "gold" | "outline-light" | "outline-dark" | "dark" | "ghost";

const VARIANTS: Record<Variant, string> = {
  gold: "gold-gradient text-on-gold hover:brightness-110 shadow-gold",
  dark: "border border-gold text-gold hover:bg-gold hover:text-on-gold",
  "outline-light": "border border-gold text-gold hover:bg-gold hover:text-on-gold",
  "outline-dark": "border border-gold text-gold hover:bg-gold hover:text-on-gold",
  ghost: "text-gold-700 hover:text-cream underline-offset-4 hover:underline px-0!",
};

export const buttonClass = (variant: Variant = "gold", extra = "") =>
  `inline-flex min-h-12 items-center justify-center gap-2 rounded-none px-8 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 ${VARIANTS[variant]} ${extra}`;

export function ButtonLink({
  variant = "gold",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={buttonClass(variant, className)} {...props} />;
}
