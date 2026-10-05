import { useState } from "react";
import { Menu, X, MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/horizonte-fractal-logo.png.asset.json";
import { COMMERCIAL_WHATSAPP_URL } from "@/lib/commercial-sites";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sites", href: "#sites-advogados" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function CommercialContact({ children = "Quero meu site", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <Button asChild className={`h-auto rounded-full bg-sunset px-6 py-3 text-sm font-semibold shadow-soft hover:-translate-y-0.5 ${className}`}>
      <a href={COMMERCIAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden="true" />{children}
      </a>
    </Button>
  );
}

function Brand() {
  return (
    <a href="#inicio" aria-label="Horizonte Fractal — início" className="flex min-w-0 items-center gap-2.5">
      <img src={logoAsset.url} alt="" aria-hidden="true" width={36} height={36} decoding="async" className="h-9 w-9 shrink-0 rounded-md" />
      <span className="font-display text-sm font-semibold text-foreground/90">Horizonte <span className="text-gradient">Fractal</span></span>
    </a>
  );
}

export function CommercialHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4" onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); document.getElementById("commercial-menu-toggle")?.focus(); } }}>
      <div className="mx-auto mt-4 max-w-6xl rounded-2xl glass">
        <div className="flex items-center justify-between gap-3 px-4 py-2.5 md:px-6">
          <Brand />
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Principal comercial">
            {links.map((link) => <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</a>)}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <CommercialContact className="px-3 py-2 text-xs sm:px-4"><span>Quero meu site</span></CommercialContact>
            <Button id="commercial-menu-toggle" variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="commercial-mobile-menu" onClick={() => setOpen(!open)}>
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>
        <nav id="commercial-mobile-menu" hidden={!open} aria-label="Navegação móvel comercial" className="border-t border-border px-4 py-3 lg:hidden">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-md px-2 py-3 text-sm text-foreground transition-colors hover:bg-secondary">{link.label}</a>)}
        </nav>
      </div>
    </header>
  );
}

export function CommercialFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div><Brand /><p className="mt-3 text-sm text-muted-foreground">Tecnologia, design e estratégia para negócios digitais.</p></div>
          <nav aria-label="Rodapé comercial" className="flex flex-wrap gap-x-6 gap-y-4 text-sm text-muted-foreground">
            {links.filter((link) => link.label !== "Sobre").map((link) => <a key={link.href} href={link.href} className="link-underline hover:text-foreground">{link.label}</a>)}
            <a href={COMMERCIAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-foreground">WhatsApp</a>
          </nav>
        </div>
        <div className="mt-10 flex items-center justify-between gap-4 border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">© 2026 Horizonte Fractal. Todos os direitos reservados.</p>
          <Button asChild variant="outline" size="icon" className="shrink-0 rounded-full glass"><a href="#inicio" aria-label="Voltar ao topo"><ArrowUp aria-hidden="true" /></a></Button>
        </div>
      </div>
    </footer>
  );
}