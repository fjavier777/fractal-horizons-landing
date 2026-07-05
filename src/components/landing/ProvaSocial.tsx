import { Star, Quote, TrendingUp, ArrowRight, Building2, Sparkles } from "lucide-react";
import { SectionCta } from "./SectionCta";

// [PLACEHOLDER] — Substituir por logos reais de clientes
const logos = [
  { name: "Cliente Alpha" },
  { name: "Cliente Beta" },
  { name: "Cliente Gama" },
  { name: "Cliente Delta" },
  { name: "Cliente Epsilon" },
  { name: "Cliente Zeta" },
];

// [PLACEHOLDER] — Substituir por resultados agregados reais
const metrics = [
  { value: "+320%", label: "aumento médio em leads qualificados" },
  { value: "-68%", label: "redução de tempo em processos manuais" },
  { value: "24/7", label: "operação com agentes de IA" },
  { value: "3x", label: "velocidade de entrega vs. mercado" },
];

// [PLACEHOLDER] — Substituir por estudos de caso reais
const cases = [
  {
    tag: "Logística",
    title: "De 40h para 6h de operação semanal",
    summary:
      "Automatizamos o roteirizador e o atendimento. A equipe saiu do reativo e o crescimento voltou a acelerar.",
    kpis: [
      { k: "-85%", v: "tempo operacional" },
      { k: "+2.4x", v: "capacidade sem contratar" },
    ],
  },
  {
    tag: "Saúde",
    title: "Comercial que vende sozinho no digital",
    summary:
      "Um agente de IA qualifica, agenda e faz follow-up. O time humano só entra quando a venda está madura.",
    kpis: [
      { k: "+180%", v: "conversão do funil" },
      { k: "3 meses", v: "para pagar o projeto" },
    ],
  },
  {
    tag: "Serviços",
    title: "Plataforma sob medida que virou vantagem competitiva",
    summary:
      "Substituímos cinco ferramentas soltas por um só sistema. Decisão em minutos, não em dias.",
    kpis: [
      { k: "5 → 1", v: "ferramentas unificadas" },
      { k: "+40%", v: "margem operacional" },
    ],
  },
];

// [PLACEHOLDER] — Substituir por depoimentos verificados
const highlights = [
  {
    quote:
      "Deixaram de ser fornecedor e viraram parte do time. Cada trimestre a gente cresce um pouco mais graças a eles.",
    name: "Marina Almeida",
    role: "CEO · Vento Sul Logística",
  },
  {
    quote:
      "Colocaram IA no comercial e o pipeline dobrou. O ROI apareceu antes do que qualquer previsão otimista.",
    name: "Rafael Monteiro",
    role: "Diretor Comercial · Nexa Saúde",
  },
];

export function ProvaSocial() {
  return (
    <section id="prova-social" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-96 w-[80%] rounded-full bg-sunset opacity-10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Prova social
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Resultado não se promete.{" "}
            <span className="text-gradient">Se comprova.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Empresas que pararam de tentar sozinhas e passaram a crescer com um
            parceiro de tecnologia ao lado.
          </p>
        </div>

        {/* Logos row */}
        <div
          className="mt-14 rounded-2xl glass p-6 md:p-8 animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Empresas que já cresceram com a gente
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {logos.map((l, i) => (
              <div
                key={l.name}
                className="group relative flex h-16 items-center justify-center rounded-xl border border-border/60 bg-card/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/40 animate-fade-up"
                style={{ animationDelay: `${0.05 * (i + 1)}s` }}
                title="Placeholder — logo do cliente"
              >
                <Building2 className="h-5 w-5 text-muted-foreground/60 transition-colors group-hover:text-brand-orange" />
                <span className="ml-2 font-display text-xs font-medium text-muted-foreground/80 transition-colors group-hover:text-foreground/90">
                  {l.name}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[10px] uppercase tracking-widest text-muted-foreground/60">
            * Logos ilustrativos — em breve substituídos pelas marcas parceiras
          </p>
        </div>

        {/* Metrics strip */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 animate-fade-up"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sunset opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
              <div className="relative flex items-start gap-3">
                <div className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-sunset text-primary-foreground shadow-md">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs leading-relaxed text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
                Estudos de caso
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                Casos de sucesso que{" "}
                <span className="text-gradient">contam a história completa</span>
              </h3>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {cases.map((c, i) => (
              <article
                key={c.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 animate-fade-up"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sunset opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                <div className="relative flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-orange">
                    <Sparkles className="h-3 w-3" />
                    {c.tag}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
                    Caso exemplo
                  </span>
                </div>

                <h4 className="relative mt-5 font-display text-lg font-semibold leading-snug">
                  {c.title}
                </h4>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.summary}
                </p>

                <dl className="relative mt-5 grid grid-cols-2 gap-3 border-t border-border/60 pt-4">
                  {c.kpis.map((kpi) => (
                    <div key={kpi.v}>
                      <dt className="font-display text-lg font-semibold text-foreground">
                        {kpi.k}
                      </dt>
                      <dd className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        {kpi.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          <p className="mt-4 text-center text-[10px] uppercase tracking-widest text-muted-foreground/60">
            * Estudos de caso ilustrativos — substituídos por cases reais em breve
          </p>
        </div>

        {/* Highlight testimonials */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {highlights.map((h, i) => (
            <figure
              key={h.name}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 animate-fade-up"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-sunset opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <Quote className="relative h-7 w-7 text-brand-orange/80" />
              <div className="relative mt-3 flex gap-0.5 text-brand-gold" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="relative mt-4 font-display text-lg leading-relaxed text-foreground/95">
                "{h.quote}"
              </blockquote>
              <figcaption className="relative mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sunset text-primary-foreground font-display text-sm font-semibold">
                  {h.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-display text-sm font-semibold">{h.name}</div>
                  <div className="text-xs text-muted-foreground">{h.role}</div>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5" />
              </figcaption>
            </figure>
          ))}
        </div>

        <SectionCta
          label="Quero ser o próximo caso de sucesso"
          context="Prova Social"
          hint="Comece pelo diagnóstico gratuito. Sem custo, sem compromisso."
        />
      </div>
    </section>
  );
}
