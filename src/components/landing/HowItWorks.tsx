import {
  ClipboardCheck,
  Map,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Entendemos seu negócio a fundo",
    desc: "Antes de qualquer código, mergulhamos na sua operação para achar onde a tecnologia gera mais dinheiro.",
    icon: ClipboardCheck,
  },
  {
    n: "02",
    title: "Desenhamos o caminho certo",
    desc: "Nada de tentativa e erro. Um plano claro, com IA e automação onde faz diferença de verdade.",
    icon: Map,
  },
  {
    n: "03",
    title: "Construímos com excelência",
    desc: "Engenharia sênior e IA de ponta. Tecnologia que sua concorrência ainda não descobriu.",
    icon: Code2,
  },
  {
    n: "04",
    title: "Colocamos no ar sem susto",
    desc: "Implantação cuidadosa, integrada aos seus sistemas. Você acorda com a solução funcionando.",
    icon: Rocket,
  },
  {
    n: "05",
    title: "Evoluímos com seu crescimento",
    desc: "Acompanhamos, ajustamos, escalamos. Sua tecnologia cresce no ritmo do seu faturamento.",
    icon: TrendingUp,
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Como Trabalhamos
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Da estratégia à{" "}
            <span className="text-gradient">escala inteligente</span>
          </h2>
        </div>


        <div className="relative mt-16">
          {/* Timeline connector line */}
          <div className="absolute left-6 top-0 hidden h-full w-px md:block md:left-1/2">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-brand-orange/40 to-transparent" />
          </div>

          <ol className="relative flex flex-col gap-10 md:gap-16">
            {steps.map((s, i) => {
              const isEven = i % 2 === 0;
              const Icon = s.icon;
              return (
                <li
                  key={s.n}
                  className={`animate-fade-up relative flex items-center gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${0.15 * (i + 1)}s` }}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 ${
                      isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div
                      className={`rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40`}
                    >
                      <h3 className="font-display text-lg font-semibold">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sunset font-display text-sm font-bold text-primary-foreground shadow-[0_0_30px_-6px_oklch(0.6_0.24_0/0.45)] md:h-16 md:w-16">
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>

                  {/* Number label */}
                  <div
                    className={`hidden flex-1 items-center font-display text-6xl font-bold leading-none text-muted/20 md:flex ${
                      isEven ? "md:justify-start md:pl-16" : "md:justify-end md:pr-16"
                    }`}
                  >
                    {s.n}
                  </div>

                  {/* Mobile number */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 font-display text-5xl font-bold leading-none text-muted/20 md:hidden">
                    {s.n}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
