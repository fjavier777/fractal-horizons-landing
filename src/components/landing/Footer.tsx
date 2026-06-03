import { Github, Instagram, Linkedin } from "lucide-react";
import logoAsset from "@/assets/horizonte-fractal-logo.png.asset.json";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logoAsset.url} alt="" className="h-[4.5rem] w-[4.5rem] rounded-md" />
              <span className="font-display text-base font-semibold">
                Horizonte <span className="text-gradient">Fractal</span>
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Transformando ideias em sistemas que escalam.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Github, href: "#", label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-3 md:justify-end" aria-label="Rodapé">
            {[
              { label: "Serviços", href: "#servicos" },
              { label: "Portfólio", href: "#resultados" },
              { label: "Contato", href: "#contato" },
              { label: "WhatsApp", href: getWhatsAppUrl() },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Horizonte Fractal. Todos os direitos reservados.</p>
          <p>Tecnologia inteligente para empresas que querem crescer sem limites.</p>
        </div>
      </div>
    </footer>
  );
}
