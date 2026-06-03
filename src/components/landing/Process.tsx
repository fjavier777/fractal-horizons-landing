const steps = [
  { n: "01", title: "Descoberta e Planejamento", desc: "Entendemos seu negócio, objetivos e desafios." },
  { n: "02", title: "Design e Prototipação", desc: "Criamos a experiência ideal antes da primeira linha de código." },
  { n: "03", title: "Desenvolvimento", desc: "Engenharia de alto padrão com tecnologias modernas." },
  { n: "04", title: "Lançamento", desc: "Deploy, testes e otimização de performance." },
  { n: "05", title: "Suporte e Evolução", desc: "Acompanhamos sua operação e evoluímos junto com você." },
];

export function Process() {
  return (
    <section id="processo" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Processo
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Como transformamos sua ideia em <span className="text-gradient">resultado</span>
          </h2>
        </div>

        <ol className="relative mt-16 grid gap-6 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent md:block" />
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-2xl glass p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sunset font-display text-sm font-bold text-primary-foreground glow">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
