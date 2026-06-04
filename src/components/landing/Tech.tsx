const techs = [
  "HTML5", "CSS3", "JavaScript", "React", "Next.js", "WordPress",
  "Tailwind", "Figma", "SEO", "Google Ads", "Google Analytics", "Tag Manager",
];

export function Tech() {
  const loop = [...techs, ...techs];
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Tecnologias e ferramentas que usamos
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-3 animate-marquee">
            {loop.map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-foreground/90"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sunset" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
