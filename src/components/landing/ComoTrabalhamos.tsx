import { Search, Map, Code2, Rocket, RefreshCw } from "lucide-react";
import { SectionCta } from "./SectionCta";

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Mapeamos gargalos, desperdícios e oportunidades escondidas na sua operação.",
    icon: Search,
  },
  {
    n: "02",
    title: "Estratégia",
    desc: "Desenhamos o plano mais curto entre o seu cenário atual e o resultado desejado.",
    icon: Map,
  },
  {
    n: "03",
    title: "Desenvolvimento",
    desc: "Engenharia sob medida. IA, automação e software que nascem do seu contexto.",
    icon: Code2,
  },
  {
    n: "04",
    title: "Implantação",
    desc: "Colocamos no ar com zero trauma. Integrado, testado e pronto para escalar.",
    icon: Rocket,
  },
  {
    n: "05",
    title: "Evolução Contínua",
    desc: "Medimos, ajustamos e otimizamos. Sua tecnologia acompanha seu crescimento.",
    icon: RefreshCw,
  },
];

export function ComoTrabalhamos() {
  return (
    <section id="como-trabalhamos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Nosso fluxo
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Como <span className="text-gradient">trabalhamos</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Um método claro, rápido e sem surpresas. Da primeira conversa à evolução contínua.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Desktop connector line */}
          <div className="absolute top-12 left-[10%] right-[10%] hidden h-px md:block">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
          </div>

          <ol className="relative grid gap-8 md:grid-cols-5 md:gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.n}
                  className="animate-fade-up relative flex flex-col items-center text-center"
                  style={{ animationDelay: `${0.15 * (i + 1)}s` }}
                >
                  {/* Top node */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-sunset font-display text-sm font-bold text-primary-foreground shadow-[0_0_30px_-6px_oklch(0.6_0.24_0/0.45)] md:h-16 md:w-16">
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>

                  {/* Card */}
                  <div className="mt-6 rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40">
                    <span className="font-display text-xs font-bold text-brand-orange/70">
                      {s.n}
                    </span>
                    <h3 className="mt-1 font-display text-base font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <SectionCta label="Solicitar diagnóstico gratuito" context="Como Trabalhamos" />
      </div>
    </section>
  );
}
