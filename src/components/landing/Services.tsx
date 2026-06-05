import {
  Rocket,
  Building2,
  Briefcase,
  Search,
  Megaphone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const services = [
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "Páginas focadas em geração de leads e vendas.",
  },
  {
    icon: Building2,
    title: "Sites Institucionais",
    desc: "Presença digital profissional para fortalecer sua marca.",
  },
  {
    icon: Briefcase,
    title: "Sites Corporativos",
    desc: "Soluções completas para empresas que precisam de credibilidade online.",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Melhore seu posicionamento no Google e atraia clientes organicamente.",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    desc: "Campanhas estratégicas para gerar resultados rapidamente.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Nossos Serviços
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Soluções para{" "}
            <span className="text-gradient">vender mais online</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sites, Landing Pages e tráfego qualificado — soluções completas para atrair, converter e crescer.
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
                    Solicitar Orçamento
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
