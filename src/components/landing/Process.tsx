const steps = [
  { n: "01", title: "Briefing", desc: "Entendemos seu negócio, público e objetivos de conversão." },
  { n: "02", title: "Estratégia e Design", desc: "Planejamos a estrutura e criamos um design persuasivo e moderno." },
  { n: "03", title: "Desenvolvimento", desc: "Construímos seu site com performance, SEO e responsividade." },
  { n: "04", title: "Publicação", desc: "Lançamos no ar com testes, otimizações e integrações de tráfego." },
  { n: "05", title: "Resultados", desc: "Acompanhamos métricas e evoluímos para aumentar suas conversões." },
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
            Do briefing aos <span className="text-gradient">primeiros clientes</span>
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
