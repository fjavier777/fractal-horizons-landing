import { Star } from "lucide-react";

const items = [
  {
    quote:
      "Automatizamos processos críticos e ganhamos tempo estratégico para crescer. A Horizonte Fractal entrega tecnologia com visão de negócio.",
    name: "Marina Almeida",
    role: "CEO, Vento Sul Logística",
  },
  {
    quote:
      "A solução de IA que construíram gerou um salto real em produtividade comercial. Investimento que se pagou em poucos meses.",
    name: "Rafael Monteiro",
    role: "Diretor Comercial, Nexa Saúde",
  },
  {
    quote:
      "Mais do que tecnologia, encontramos um parceiro estratégico. A transformação digital deixou de ser promessa e virou resultado.",
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
            Confiança
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Empresas que <span className="text-gradient">crescem com tecnologia</span>
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
