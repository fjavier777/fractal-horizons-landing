import { Brain, Cloud, Layout, Server, Workflow, Database, Plug, Container, Check } from "lucide-react";
import { SectionCta } from "./SectionCta";

interface TechItem {
  name: string;
}

interface TechCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: TechItem[];
  accent: string;
}

const categories: TechCategory[] = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    accent: "oklch(0.78 0.13 82 / 0.25)",
    items: [
      { name: "OpenAI" },
      { name: "Anthropic" },
      { name: "LangChain" },
      { name: "Python" },
      { name: "LLM Fine-tuning" },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud",
    accent: "oklch(0.55 0.08 80 / 0.25)",
    items: [
      { name: "AWS" },
      { name: "Cloudflare" },
      { name: "Vercel" },
      { name: "Azure" },
      { name: "Google Cloud" },
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    accent: "oklch(0.88 0.11 86 / 0.25)",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "TanStack" },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    accent: "oklch(0.7 0.13 70 / 0.25)",
    items: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "Redis" },
    ],
  },
  {
    icon: Workflow,
    title: "Automação",
    accent: "oklch(0.78 0.13 82 / 0.25)",
    items: [
      { name: "n8n" },
      { name: "Zapier" },
      { name: "Make" },
      { name: "RPA" },
      { name: "Agentes IA" },
    ],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    accent: "oklch(0.55 0.08 80 / 0.25)",
    items: [
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "ClickHouse" },
    ],
  },
  {
    icon: Plug,
    title: "APIs",
    accent: "oklch(0.88 0.11 86 / 0.25)",
    items: [
      { name: "REST" },
      { name: "GraphQL" },
      { name: "Webhooks" },
      { name: "OAuth 2.0" },
      { name: "gRPC" },
    ],
  },
  {
    icon: Container,
    title: "DevOps",
    accent: "oklch(0.7 0.13 70 / 0.25)",
    items: [
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "GitHub Actions" },
      { name: "Kubernetes" },
      { name: "Terraform" },
    ],
  },
];

export function Tecnologias() {
  return (
    <section id="tecnologias" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Nosso arsenal
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Tecnologias que <span className="text-gradient">aceleram</span> seu crescimento
          </h2>
          <p className="mt-4 text-muted-foreground">
            Stack moderno, escalável e comprovado. Cada ferramenta escolhida para entregar resultados reais.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="group animate-fade-up relative overflow-hidden rounded-2xl border border-transparent bg-card/60 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/80 hover:shadow-[0_0_40px_-12px_var(--glow-color)]"
                style={
                  {
                    "--glow-color": cat.accent,
                    animationDelay: `${0.1 * (i + 1)}s`,
                  } as React.CSSProperties
                }
              >
                {/* Orb accent */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: cat.accent }}
                />

                {/* Icon */}
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-sunset text-primary-foreground shadow-lg transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-4 font-display text-base font-semibold text-foreground">
                  {cat.title}
                </h3>

                {/* Tech items */}
                <ul className="relative z-10 mt-4 space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-2.5 w-2.5 text-primary" />
                      </span>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
