import {
  LayoutTemplate,
  Globe,
  Server,
  Smartphone,
  Brain,
  Compass,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    desc: "Páginas desenvolvidas para converter visitantes em clientes reais.",
  },
  {
    icon: Globe,
    title: "Sites Corporativos",
    desc: "Presença digital profissional para empresas modernas e em crescimento.",
  },
  {
    icon: Server,
    title: "Sistemas Web",
    desc: "Soluções sob medida para automatizar processos e operações internas.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos",
    desc: "Apps nativos para Android, iOS e soluções multiplataforma.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    desc: "Chatbots, agentes de IA e automações inteligentes para o seu negócio.",
  },
  {
    icon: Compass,
    title: "Consultoria Tecnológica",
    desc: "Planejamento digital estratégico para acelerar seus resultados.",
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
            Soluções completas para<br />
            <span className="text-gradient">empresas que escalam</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Da estratégia ao deploy. Construímos tecnologia que entrega resultado mensurável.
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
                    WhatsApp
                  </a>
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-white/5"
                  >
                    Orçamento
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
