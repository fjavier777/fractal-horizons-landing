import logoAsset from "@/assets/horizonte-fractal-logo.png.asset.json";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl glass px-4 py-2.5 md:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Horizonte Fractal">
          <img src={logoAsset.url} alt="" className="h-9 w-9 rounded-md" />
          <span className="font-display text-sm font-semibold tracking-wide text-foreground/90">
            Horizonte <span className="text-gradient">Fractal</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="rounded-full bg-sunset px-4 py-2 text-xs font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.6_0.24_0/0.6)] transition-transform hover:-translate-y-0.5"
        >
          Solicitar orçamento
        </a>
      </div>
    </header>
  );
}
