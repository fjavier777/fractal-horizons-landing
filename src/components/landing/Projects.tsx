import { ArrowUpRight, Eye } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import landingImg from "@/assets/project-landing.jpg";
import impactflowImg from "@/assets/project-impactflow.jpg";
import transportImg from "@/assets/project-transport.jpg";
import corporateImg from "@/assets/project-corporate.jpg";

const projects = [
  {
    title: "Motor de Aquisição Digital",
    category: "Growth & IA",
    desc: "Leads certos, no momento certo. IA qualifica, automação nutre, o vendedor só fecha.",
    image: landingImg,
  },
  {
    title: "ImpactFlow",
    category: "Plataforma SaaS",
    desc: "Decisões guiadas por dados, não por achismo. Dashboards que mostram onde agir agora.",
    image: impactflowImg,
  },
  {
    title: "Operação Digital para Logística",
    category: "Transformação Digital",
    desc: "Uma transportadora saiu do papel e da planilha. Hoje a operação roda no piloto automático.",
    image: transportImg,
  },
  {
    title: "Presença Corporativa Premium",
    category: "Autoridade Digital",
    desc: "Um portal que fala com CEO. Autoridade no ar, oportunidades chegando sozinhas.",
    image: corporateImg,
  },
];


export function Projects() {
  return (
    <section id="projetos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Casos reais
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Empresas que já vivem <span className="text-gradient">o próximo capítulo</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada projeto virou uma história de crescimento. A sua pode ser a próxima.
          </p>
        </div>


        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl glass animate-fade-up"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-orange backdrop-blur">
                  {p.category}
                </span>
              </div>

              <div className="relative p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mt-5">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-4 py-2 text-xs font-semibold transition-all hover:border-brand-orange/60 hover:bg-sunset hover:text-primary-foreground"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Quero um assim

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
