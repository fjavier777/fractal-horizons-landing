import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Services } from "@/components/landing/Services";
import { Differentials } from "@/components/landing/Differentials";
import { Process } from "@/components/landing/Process";
import { Results } from "@/components/landing/Results";
import { Tech } from "@/components/landing/Tech";
import { Testimonials } from "@/components/landing/Testimonials";
import { PreCta } from "@/components/landing/PreCta";
import { CtaFinal } from "@/components/landing/CtaFinal";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horizonte Fractal — Sites e Landing Pages que transformam visitantes em clientes" },
      {
        name: "description",
        content:
          "Agência especializada em Landing Pages, Sites Institucionais, Sites Corporativos, SEO e Google Ads. Presença digital profissional, otimizada para conversão e crescimento.",
      },
      { property: "og:title", content: "Horizonte Fractal — Sites e Landing Pages que vendem" },
      {
        property: "og:description",
        content:
          "Landing Pages, Sites Institucionais e Corporativos, SEO e Google Ads para pequenas e médias empresas que querem vender mais online.",
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
      <HowItWorks />
      <Differentials />
      <Process />
      <Results />
      <Testimonials />
      <CtaFinal />
      <Footer />
    </main>
  );
}
