import { Star } from "lucide-react";
import { SectionCta } from "./SectionCta";

const items = [
  {
    quote:
      "Nosso time vivia apagando incêndio. Hoje a automação faz o trabalho pesado e a gente cresce sem contratar mais gente.",
    name: "Marina Almeida",
    role: "CEO, Vento Sul Logística",
  },
  {
    quote:
      "A IA deles turbinou nosso comercial. O investimento se pagou em três meses. Não voltaria atrás por nada.",
    name: "Rafael Monteiro",
    role: "Diretor Comercial, Nexa Saúde",
  },
  {
    quote:
      "Encontramos gente que fala de negócio, não só de tecnologia. Isso muda tudo. Virou parceria de verdade.",
    name: "Camila Duarte",
    role: "Sócia, Atlas Consultoria",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Quem já vive isso
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Histórias de quem parou de <span className="text-gradient">trabalhar mais e começou a crescer</span>
          </h2>
        </div>


        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl glass p-6">
              <div className="flex gap-0.5 text-brand-gold" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border/60 pt-4">
                <div className="font-display text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
