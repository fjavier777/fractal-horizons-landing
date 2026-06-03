import { ArrowRight, MessageCircle, Sparkles, Zap, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
import logoAsset from "@/assets/horizonte-fractal-logo.png.asset.json";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const badges = [
  { icon: Zap, label: "Atendimento rápido" },
  { icon: Sparkles, label: "Soluções sob medida" },
  { icon: ShieldCheck, label: "Tecnologia de ponta" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-radial-hero)" }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 grid-pattern" aria-hidden />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground animate-fade-up">
          <img src={logoAsset.url} alt="" className="h-4 w-4 rounded-sm" />
          Transformando ideias em sistemas que escalam
        </div>

        <h1
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Tecnologia que acelera o<br />
          <span className="text-gradient">crescimento da sua empresa</span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Criamos sites, sistemas, automações e soluções com inteligência artificial
          para empresas que desejam vender mais, reduzir custos e escalar operações.
        </p>

        <div
          className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-full bg-sunset px-6 py-3 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
          >
            Solicitar Orçamento
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground"
            >
              <b.icon className="h-3.5 w-3.5 text-brand-orange" />
              {b.label}
            </span>
          ))}
        </div>

        <div
          className="relative mx-auto mt-16 max-w-5xl animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-sunset opacity-30 blur-3xl" />
          <div className="overflow-hidden rounded-2xl glass p-2 glow">
            <img
              src={heroImage}
              alt="Mockups de dashboards, analytics e automações desenvolvidos pela Horizonte Fractal"
              width={1920}
              height={1080}
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
