import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  ArrowUp,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";
import logoFractal from "@/assets/horizonte-fractal-logo.png";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const quickLinks = [
  { label: "Início", href: "#top" },
  { label: "Soluções", href: "#servicos" },
  { label: "Como trabalhamos", href: "#processo" },
  { label: "Cases", href: "#projetos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

const serviceLinks = [
  { label: "Inteligência Artificial", href: "#servicos" },
  { label: "Automação de Processos", href: "#servicos" },
  { label: "Software Sob Medida", href: "#servicos" },
  { label: "Transformação Digital", href: "#servicos" },
  { label: "Presença Digital", href: "#servicos" },
  { label: "Aceleração de Crescimento", href: "#servicos" },
];

const socials = [
  { Icon: Instagram, href: "https://www.instagram.com/horizontefractal.web/", label: "Instagram" },
  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590574383706", label: "Facebook" },
  { Icon: Mail, href: "mailto:horizontefractal@gmail.com", label: "E-mail" },
  { Icon: MessageCircle, href: getWhatsAppUrl(), label: "WhatsApp" },
];

function scrollToTop(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + summary */}
          <div className="animate-fade-up">
            <a href="#top" onClick={scrollToTop} className="inline-flex items-center gap-2.5">
              <img
                src={logoFractal}
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-9 w-9 rounded-md md:h-10 md:w-10"
              />
              <span className="font-display text-base font-semibold">
                Horizonte <span className="text-gradient">Fractal</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Aceleramos empresas com IA, automação e tecnologia sob medida.
              Do diagnóstico à evolução contínua.
            </p>

            <div className="mt-5 flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full glass text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground hover:border-brand-orange/40"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav className="animate-fade-up" style={{ animationDelay: "0.05s" }} aria-label="Links rápidos">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/90">
              Links rápidos
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="link-underline">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="animate-fade-up" style={{ animationDelay: "0.1s" }} aria-label="Serviços">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/90">
              Serviços
            </h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="link-underline">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/90">
              Contato
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-orange/80 transition-colors group-hover:text-brand-orange" />
                  <span className="link-underline">+55 11 91200-0583</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:horizontefractal@gmail.com"
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-orange/80 transition-colors group-hover:text-brand-orange" />
                  <span className="link-underline">horizontefractal@gmail.com</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange/80" />
                <span>Campinas, SP — Brasil</span>
              </li>
              <li className="pt-1">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-sunset px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Falar no WhatsApp
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Horizonte Fractal. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground/70">
              Feito para quem quer crescer com IA, automação e tecnologia sob medida.
            </p>
            <a
              href="#top"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full glass text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground hover:border-brand-orange/40"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
