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
import { Projects } from "@/components/landing/Projects";
import { PreCta } from "@/components/landing/PreCta";
import { SupportPlans } from "@/components/landing/SupportPlans";
import { CtaFinal } from "@/components/landing/CtaFinal";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Horizonte Fractal | Landing Pages, Sites e Marketing Digital";
    const description =
      "Criamos landing pages, sites institucionais, SEO e campanhas Google Ads para empresas que desejam crescer e gerar mais clientes.";
    const url = "https://fractal-growth-engine.lovable.app/";
    const image =
      "https://storage.googleapis.com/gpt-engineer-file-uploads/Qj4rx55C9NWoCCD3FSO3wFi1Bpk2/social-images/social-1780591805005-Banner_LinkedIn_1200x630_com_gradiente.webp";
    const keywords =
      "landing page, criação de sites, site institucional, site corporativo, seo, google ads, marketing digital, agência web, desenvolvimento web, campinas";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:site_name", content: "Horizonte Fractal" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Horizonte Fractal",
            description,
            url,
            image,
            telephone: "+55 19 99393-1841",
            priceRange: "$$",
            areaServed: "BR",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Campinas",
              addressRegion: "SP",
              addressCountry: "BR",
            },
            sameAs: [
              "https://www.facebook.com/profile.php?id=61590574383706",
              "https://www.instagram.com/horizontefractal.web/",
            ],
            makesOffer: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Criação de Landing Pages" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sites Institucionais e Corporativos" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads" } },
            ],
          }),
        },
      ],
    };
  },
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
      <Projects />
      <Testimonials />
      <SupportPlans />
      <PreCta />
      <CtaFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
