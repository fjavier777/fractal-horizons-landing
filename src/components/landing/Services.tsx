import {
  LayoutTemplate,
  Globe,
  Building2,
  Search,
  MousePointerClick,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    desc: "Páginas otimizadas para conversão, criadas para transformar visitantes em clientes.",
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    desc: "Presença digital profissional que comunica autoridade, confiança e credibilidade.",
  },
  {
    icon: Building2,
    title: "Sites Corporativos",
    desc: "Sites modernos e escaláveis para empresas que querem se destacar no mercado.",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Otimização para que sua empresa apareça no topo do Google e atraia clientes qualificados.",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Campanhas estratégicas que geram leads e vendas com previsibilidade e retorno.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Serviços
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Tudo que sua empresa precisa para<br />
            <span className="text-gradient">vender mais online</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sites, Landing Pages e tráfego qualificado — soluções completas para atrair, converter e crescer.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-brand-orange/40"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sunset opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sunset text-primary-foreground shadow-lg">
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
                    Solicitar orçamento
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
