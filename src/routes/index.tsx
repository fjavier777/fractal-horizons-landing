import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Differentials } from "@/components/landing/Differentials";
import { Process } from "@/components/landing/Process";
import { Results } from "@/components/landing/Results";
import { Tech } from "@/components/landing/Tech";
import { Testimonials } from "@/components/landing/Testimonials";
import { CtaFinal } from "@/components/landing/CtaFinal";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horizonte Fractal — Tecnologia que acelera o crescimento da sua empresa" },
      {
        name: "description",
        content:
          "Sites, sistemas, automações e soluções com inteligência artificial para empresas que querem vender mais, reduzir custos e escalar operações.",
      },
      { property: "og:title", content: "Horizonte Fractal — Tecnologia inteligente para empresas que querem crescer sem limites" },
      {
        property: "og:description",
        content:
          "Desenvolvimento sob medida: landing pages, sites corporativos, sistemas web, apps e IA. Transformamos ideias em sistemas que escalam.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Tech />
      <Services />
      <Differentials />
      <Process />
      <Results />
      <Testimonials />
      <CtaFinal />
      <Footer />
    </main>
  );
}
