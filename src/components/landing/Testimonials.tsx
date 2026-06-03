import { Star } from "lucide-react";

const items = [
  {
    quote:
      "A Horizonte Fractal entregou uma plataforma robusta em tempo recorde. O time é técnico, atencioso e estratégico — sentimos que estavam comprometidos com o nosso resultado.",
    name: "Marina Almeida",
    role: "CEO, Vento Sul Logística",
  },
  {
    quote:
      "Automatizamos 70% dos processos manuais com IA. O ROI veio em poucas semanas e o suporte continuado nos dá total previsibilidade.",
    name: "Rafael Monteiro",
    role: "Diretor de Operações, Nexa Saúde",
  },
  {
    quote:
      "Design premium, performance impecável e uma atenção a detalhes raríssima no mercado. Nosso site triplicou a taxa de conversão.",
    name: "Camila Duarte",
    role: "CMO, Atlas Capital",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Empresas que <span className="text-gradient">cresceram com a gente</span>
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
