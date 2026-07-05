import {
  BrainCircuit, Gauge, Layers, TrendingUp, ShieldCheck, Smartphone, Headset, Target,
} from "lucide-react";
import { SectionCta } from "./SectionCta";

const items = [
  { icon: Target, label: "Obcecados pelo seu resultado" },
  { icon: BrainCircuit, label: "IA aplicada com propósito claro" },
  { icon: Gauge, label: "Velocidade de startup, rigor de enterprise" },
  { icon: Layers, label: "Cresce sem quebrar" },
  { icon: TrendingUp, label: "Impacto que aparece no P&L" },
  { icon: ShieldCheck, label: "Seus dados sempre protegidos" },
  { icon: Smartphone, label: "Perfeito em qualquer tela" },
  { icon: Headset, label: "Parceiro que fica ao seu lado" },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Por que nós
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Por que líderes escolhem a <span className="text-gradient">Horizonte Fractal</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Não somos mais uma agência. Somos o time de tecnologia que faltava
            para sua empresa dar o próximo salto.
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

        <SectionCta label="Descobrir oportunidades" context="Diferenciais" />
      </div>
    </section>
  );
}
