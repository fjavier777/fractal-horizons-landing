const steps = [
  { n: "01", title: "Discovery", desc: "Mergulhamos no seu negócio, dados e objetivos para identificar onde a tecnologia gera mais impacto." },
  { n: "02", title: "Estratégia & Arquitetura", desc: "Definimos o roadmap, a stack e a arquitetura de IA, automação e software mais adequada." },
  { n: "03", title: "Engenharia", desc: "Construímos com práticas modernas: cloud, observabilidade, segurança e IA de ponta." },
  { n: "04", title: "Go-live", desc: "Implantamos com testes rigorosos, integrações e monitoramento contínuo do primeiro dia." },
  { n: "05", title: "Escala & Evolução", desc: "Acompanhamos métricas de negócio e evoluímos a solução para maximizar ROI." },
];

export function Process() {
  return (
    <section id="processo" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Metodologia
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Da visão estratégica ao <span className="text-gradient">impacto no P&L</span>
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
