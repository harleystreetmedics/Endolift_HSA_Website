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
    ivory: "bg-ivory text-ink",
    sand: "bg-sand text-ink",
    white: "bg-white text-ink",
    dark: "bg-ink text-white",
  };
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
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
    <div className={`mb-10 flex max-w-3xl flex-col gap-4 sm:mb-12 ${centre}`}>
      {eyebrow && (
        <p className={`eyebrow ${tone === "dark" ? "text-gold" : "text-gold-700"}`}>{eyebrow}</p>
      )}
      <Tag id={id} className={`text-3xl leading-tight sm:text-4xl lg:text-5xl ${tone === "dark" ? "text-white" : "text-ink"}`}>
        {title}
      </Tag>
      {intro && (
        <div className={`text-base leading-relaxed sm:text-lg ${tone === "dark" ? "text-white/75" : "text-stone"}`}>{intro}</div>
      )}
    </div>
  );
}
