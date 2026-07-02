import {
  BrainCircuit, Gauge, ShieldCheck, Smartphone, Target, Headset, TrendingUp, Layers,
} from "lucide-react";

const items = [
  { icon: Target, label: "Foco em resultado de negócio" },
  { icon: BrainCircuit, label: "IA aplicada com propósito" },
  { icon: Gauge, label: "Performance de padrão enterprise" },
  { icon: Layers, label: "Arquitetura escalável" },
  { icon: TrendingUp, label: "Crescimento previsível" },
  { icon: ShieldCheck, label: "Segurança e confiabilidade" },
  { icon: Smartphone, label: "Experiência multi-dispositivo" },
  { icon: Headset, label: "Parceria estratégica de longo prazo" },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Autoridade
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Por que empresas escolhem a <span className="text-gradient">Horizonte Fractal</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Combinamos visão estratégica, engenharia sólida e inteligência
            artificial para gerar impacto real onde importa: no seu resultado.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((i) => (
            <div
              key={i.label}
              className="group flex flex-col items-start gap-3 rounded-2xl glass p-5 transition-all hover:-translate-y-0.5"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-card/60 text-brand-orange transition-colors group-hover:text-brand-gold">
                <i.icon className="h-4.5 w-4.5" />
              </div>
              <p className="text-sm font-medium text-foreground/90">{i.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
