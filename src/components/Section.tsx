export function Section({
  children,
  tone = "ivory",
  className = "",
  id,
  labelledBy,
}: {
  children: React.ReactNode;
  tone?: "ivory" | "sand" | "dark" | "white";
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  const tones = {
    ivory: "bg-black-rich text-cream",
    sand: "bg-black-soft text-cream",
    white: "bg-black-rich text-cream",
    dark: "bg-black-soft text-white",
  };
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} border-t border-white/5 py-16 sm:py-20 lg:py-28 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

/** The main site sets the last word of each section title in gold ("Treatment <gold>Options</gold>"). */
function GoldLastWord({ text }: { text: string }) {
  const m = text.match(/^(.*\s)(\S+?)([?!.]?)$/);
  if (!m) return <>{text}</>;
  return (
    <>
      {m[1]}
      <span className="text-gold">{m[2]}</span>
      {m[3]}
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  tone = "light",
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  id?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const centre = align === "center" ? "mx-auto text-center items-center" : "";
  return (
    <div className={`mb-10 flex max-w-3xl flex-col gap-4 sm:mb-14 ${centre}`}>
      {eyebrow && (
        <p className={`eyebrow ${tone === "dark" ? "text-gold" : "text-gold-700"}`}>{eyebrow}</p>
      )}
      <Tag id={id} className={`text-3xl leading-tight sm:text-4xl lg:text-5xl ${tone === "dark" ? "text-white" : "text-cream"}`}>
        <GoldLastWord text={title} />
      </Tag>
      {intro && (
        <div className={`text-base leading-relaxed sm:text-lg ${tone === "dark" ? "text-white/75" : "text-stone"}`}>{intro}</div>
      )}
    </div>
  );
}
