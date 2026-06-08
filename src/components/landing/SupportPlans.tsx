import { Check, MessageCircle, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const plans = [
  {
    name: "Essencial",
    price: "149",
    tagline: "Mantenha seu site no ar com segurança.",
    features: ["Hospedagem", "Backup", "Atualizações básicas"],
    highlight: false,
  },
  {
    name: "Crescimento",
    price: "299",
    tagline: "Cresça com presença digital otimizada.",
    features: ["Hospedagem", "SEO básico", "Relatório mensal"],
    highlight: true,
  },
  {
    name: "Performance",
    price: "599",
    tagline: "Resultados consistentes e escaláveis.",
    features: [
      "SEO",
      "Ajustes contínuos",
      "Landing Pages de campanha",
      "Relatórios de desempenho",
    ],
    highlight: false,
  },
];

export function SupportPlans() {
  return (
    <section id="suporte" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Suporte e Evolução
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Planos para <span className="text-gradient">manter e crescer</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escolha o nível de acompanhamento ideal para o seu projeto digital.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <article
              key={plan.name}
              className={`group relative overflow-hidden rounded-2xl p-7 animate-fade-up transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "border border-brand-orange/50 bg-sunset/10 shadow-2xl md:scale-105"
                  : "glass"
              }`}
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              {plan.highlight && (
                <>
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sunset opacity-30 blur-3xl" />
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-sunset px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    <Sparkles className="h-3 w-3" />
                    Mais escolhido
                  </span>
                </>
              )}

              <div className="relative">
                <h3 className="font-display text-xl font-semibold">
                  Plano {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="font-display text-5xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                          plan.highlight
                            ? "bg-sunset text-primary-foreground"
                            : "bg-secondary text-brand-orange"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppUrl(`Plano ${plan.name}`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                    plan.highlight
                      ? "bg-sunset text-primary-foreground shadow-lg"
                      : "border border-border bg-background/40 hover:border-brand-orange/60"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  Quero este plano
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
