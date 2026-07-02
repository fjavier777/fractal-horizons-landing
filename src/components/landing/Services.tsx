import {
  BrainCircuit,
  Workflow,
  Code2,
  Rocket,
  LineChart,
  Layers,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const services = [
  {
    icon: BrainCircuit,
    title: "Inteligência Artificial Aplicada",
    desc: "Agentes, copilots e modelos preditivos que aumentam produtividade e criam vantagem competitiva real.",
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    desc: "Eliminamos tarefas repetitivas e conectamos sistemas para reduzir custo operacional e escalar sua operação.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento de Software Sob Medida",
    desc: "Plataformas, dashboards e sistemas internos construídos para resolver o seu problema — não um problema genérico.",
  },
  {
    icon: Layers,
    title: "Transformação Digital",
    desc: "Diagnóstico estratégico e roadmap para modernizar sua empresa com tecnologia, dados e novos modelos de negócio.",
  },
  {
    icon: Rocket,
    title: "Presença Digital de Alta Performance",
    desc: "Sites, landing pages e produtos web construídos para posicionar autoridade e converter oportunidades qualificadas.",
  },
  {
    icon: LineChart,
    title: "Aceleração de Crescimento",
    desc: "SEO, mídia paga e analytics unificados em uma máquina previsível de aquisição de clientes.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            O que fazemos
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Soluções inteligentes para{" "}
            <span className="text-gradient">acelerar o seu crescimento</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Unimos IA, automação, engenharia de software e estratégia digital em
            um único parceiro focado no resultado do seu negócio.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 animate-fade-up"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sunset opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sunset text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={getWhatsAppUrl(s.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-sunset px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Conversar com um especialista
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
