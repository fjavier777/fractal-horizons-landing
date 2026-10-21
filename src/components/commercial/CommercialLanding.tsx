import { ArrowRight, Check, ShieldCheck, Eye, MessageCircle, Monitor, Smartphone, Zap, Minus, Clock, FileText, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ESSENCIAL_SITE_URL, PROFISSIONAL_SITE_URL } from "@/lib/commercial-sites";
import { CommercialContact, CommercialHeader, CommercialFooter } from "./CommercialChrome";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";
import { COMMERCIAL_WHATSAPP_URL } from "@/lib/commercial-sites";

const container = "mx-auto max-w-6xl px-6";
const section = "py-24 md:py-32";
const heading = "mt-3 font-display text-4xl font-semibold tracking-normal md:text-5xl";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-medium uppercase tracking-normal text-brand-orange">{children}</span>;
}

function ProductAnchor() {
  return <Button asChild variant="outline" className="h-auto rounded-full glass px-6 py-3 text-sm font-semibold"><a href="#sites-advogados">Ver sites para advogados<ArrowRight aria-hidden="true" /></a></Button>;
}

function CommercialHero() {
  return (
    <section id="inicio" className="relative pb-16 pt-36 md:pb-24 md:pt-40">
      <div className={`${container} text-center`}>
        <img src="/horizonte-fractal-logo.png" alt="" aria-hidden="true" width={160} height={160} fetchPriority="high" decoding="async" className="mx-auto h-32 w-32 rounded-xl md:h-40 md:w-40" />
        <p className="mx-auto mt-3 max-w-4xl font-display text-5xl font-bold tracking-normal text-foreground sm:text-6xl md:text-7xl">Horizonte <span className="text-gradient">Fractal</span></p>
        <Eyebrow>SITES PROFISSIONAIS PARA ADVOGADOS E ESCRITÓRIOS</Eyebrow>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-6xl md:text-7xl">Sites profissionais para <span className="text-gradient">advogados e escritórios.</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">Criamos sites rápidos, elegantes e estratégicos para advogados e escritórios que querem transformar sua presença digital em novas oportunidades.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><CommercialContact /><ProductAnchor /></div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const items = [
    { number: "01", title: "Credibilidade", text: "Apresente seu negócio com uma presença digital profissional.", Icon: ShieldCheck },
    { number: "02", title: "Clareza", text: "Mostre seus serviços de forma simples e objetiva.", Icon: Eye },
    { number: "03", title: "Conversão", text: "Facilite o próximo passo para quem quer entrar em contato.", Icon: MessageCircle },
  ];
  return (
    <section className={`${section} border-t border-border/60`} aria-labelledby="problem-title">
      <div className={container}>
        <div className="mx-auto max-w-3xl text-center"><Eyebrow>UM SITE PODE FAZER MAIS</Eyebrow><h2 id="problem-title" className={heading}>Seu negócio merece uma presença digital à altura do que oferece.</h2>
          <p className="mt-5 text-muted-foreground">Um site desatualizado, confuso ou pouco profissional pode transmitir uma impressão diferente daquela que você gostaria de passar aos seus clientes.</p>
          <p className="mt-3 text-muted-foreground">A Horizonte Fractal cria experiências digitais que combinam design, clareza e estratégia para apresentar seu negócio de forma profissional.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">{items.map(({ number, title, text, Icon }) => <Card key={title} className="rounded-2xl glass p-7"><div className="flex items-center justify-between text-brand-orange"><Icon className="h-6 w-6" aria-hidden="true" /><span className="font-display text-sm">{number}</span></div><h3 className="mt-6 text-xl tracking-normal">{title}</h3><p className="mt-3 text-sm text-muted-foreground">{text}</p></Card>)}</div>
      </div>
    </section>
  );
}

const products = [
  { name: "Site Essencial", badge: "ESSENCIAL", audience: "Para advogados autônomos", highlight: false, title: "Presença profissional sem complicação.", description: "Um site elegante e objetivo para advogados que precisam estabelecer uma presença digital profissional.", price: "R$ 797", url: ESSENCIAL_SITE_URL, features: ["Design profissional", "Layout responsivo", "Apresentação de serviços", "Integração com WhatsApp", "SEO básico", "Publicação do site"] },
  { name: "Site Profissional", badge: "PROFISSIONAL", audience: "Para advogados e escritórios", highlight: true, title: "Mais espaço para apresentar seu escritório.", description: "Uma estrutura mais completa para advogados e escritórios que precisam comunicar seus serviços, diferenciais e posicionamento com mais profundidade.", price: "R$ 1.497", url: PROFISSIONAL_SITE_URL, features: ["Design profissional", "Layout responsivo", "Estrutura ampliada", "Apresentação de serviços", "Seção institucional", "Integração com WhatsApp", "SEO básico", "Publicação do site"] },
];

function ProductCard({ product }: { product: typeof products[number] }) {
  return (
    <Card className={`relative flex h-full flex-col rounded-2xl p-7 md:p-10 ${product.highlight ? "border border-brand-orange/50 bg-sunset/10" : "glass"}`}>
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="outline" className="rounded-full border-brand-orange/40 px-3 py-1 text-brand-orange">{product.badge}</Badge>
        {product.highlight && <Badge className="rounded-full bg-sunset px-3 py-1 text-primary-foreground">Recomendado</Badge>}
      </div>
      <p className="mt-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">{product.audience}</p>
      <h3 className="mt-2 text-2xl tracking-normal md:text-3xl">{product.title}</h3>
      <p className="mt-4 text-sm text-muted-foreground">{product.description}</p>
      <p className="mt-8 font-display text-5xl font-semibold text-foreground">{product.price}</p>
      <ul className="mb-8 mt-8 space-y-3">{product.features.map((feature) => <li key={feature} className="flex items-start gap-2.5 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" /><span>{feature}</span></li>)}</ul>
      <Button asChild className="mt-auto h-auto w-full rounded-full bg-sunset px-4 py-3 text-sm font-semibold shadow-soft"><a href={product.url} target="_blank" rel="noopener noreferrer">Ver {product.name}<ArrowRight aria-hidden="true" /></a></Button>
    </Card>
  );
}

function LawyerSitesSection() {
  return (
    <section id="sites-advogados" className={`${section} border-y border-border/60`} aria-labelledby="products-title"><div className={container}>
      <div className="mx-auto max-w-3xl text-center"><Eyebrow>PRODUTOS EM DESTAQUE</Eyebrow><h2 id="products-title" className={heading}>Sites profissionais para <span className="text-gradient">advogados e escritórios</span></h2><p className="mt-5 text-muted-foreground">Modelos desenvolvidos para profissionais jurídicos que querem apresentar seus serviços com mais autoridade, clareza e profissionalismo na internet.</p></div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">{products.map((product) => <ProductCard key={product.name} product={product} />)}</div>
    </div></section>
  );
}

const comparison = [
  ["Para quem", "Advogado autônomo", "Advogado ou escritório"],
  ["Estrutura", "Objetiva", "Completa"],
  ["Apresentação de serviços", "✓", "✓"],
  ["WhatsApp", "✓", "✓"],
  ["Responsivo", "✓", "✓"],
  ["SEO básico", "✓", "✓"],
  ["Conteúdo institucional ampliado", "—", "✓"],
  ["Estrutura avançada", "—", "✓"],
];

function ComparisonValue({ value }: { value: string }) {
  if (value === "✓") return <span className="inline-flex text-brand-orange"><Check className="h-5 w-5" aria-hidden="true" /><span className="sr-only">Incluído</span></span>;
  if (value === "—") return <span className="inline-flex text-muted-foreground"><Minus className="h-5 w-5" aria-hidden="true" /><span className="sr-only">Não incluído</span></span>;
  return <>{value}</>;
}

function ProductComparison() {
  return (
    <section className={section} aria-labelledby="comparison-title"><div className={container}>
      <div className="mx-auto max-w-3xl text-center"><Eyebrow>QUAL MODELO É PARA VOCÊ?</Eyebrow><h2 id="comparison-title" className={heading}>Escolha a estrutura que combina com seu momento.</h2></div>
      <table className="mt-14 hidden w-full text-left text-sm md:table"><caption className="sr-only">Comparação entre Site Essencial e Site Profissional</caption><thead><tr className="border-b border-border"><th scope="col" className="px-5 py-5 font-medium text-muted-foreground">Característica</th><th scope="col" className="px-5 py-5 font-display text-lg font-semibold">Essencial</th><th scope="col" className="px-5 py-5 font-display text-lg font-semibold text-brand-orange">Profissional</th></tr></thead><tbody>{comparison.map(([label, essential, professional]) => <tr key={label} className="border-b border-border/60"><th scope="row" className="px-5 py-4 font-normal text-muted-foreground">{label}</th><td className="px-5 py-4"><ComparisonValue value={essential} /></td><td className="px-5 py-4"><ComparisonValue value={professional} /></td></tr>)}</tbody></table>
      <div className="mt-10 grid gap-6 md:hidden">{["Essencial", "Profissional"].map((name, index) => <Card key={name} className="rounded-2xl glass p-6"><h3 className="text-xl tracking-normal">{name}</h3><dl className="mt-5">{comparison.map((row) => <div key={row[0]} className="grid grid-cols-2 gap-3 border-t border-border py-3 text-sm"><dt className="text-muted-foreground">{row[0]}</dt><dd><ComparisonValue value={row[index + 1]} /></dd></div>)}</dl></Card>)}</div>
      <div className="mt-10 flex justify-center"><CommercialContact className="whitespace-normal text-center">Ainda está em dúvida? Fale conosco</CommercialContact></div>
    </div></section>
  );
}

function ConditionsSection() {
  const items = [
    { Icon: Clock, title: "Entrega em até 7 dias úteis", text: "Do início do projeto à publicação do seu site." },
    { Icon: FileText, title: "Materiais fornecidos por você", text: "Para desenvolver o site, você envia a logo, os textos e as imagens do seu escritório." },
    { Icon: ClipboardCheck, title: "Escopo definido por plano", text: "Cada plano inclui exatamente os itens listados na sua apresentação." },
  ];
  return (
    <section id="condicoes" className={`${section} border-t border-border/60`} aria-labelledby="conditions-title">
      <div className={container}>
        <div className="mx-auto max-w-3xl text-center"><Eyebrow>ESCOPO E CONDIÇÕES</Eyebrow><h2 id="conditions-title" className={heading}>Tudo esclarecido antes de começar.</h2><p className="mt-5 text-muted-foreground">Sem surpresas: você sabe exatamente o que recebe em cada modelo.</p></div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">{items.map(({ Icon, title, text }) => <Card key={title} className="rounded-2xl glass p-7"><Icon className="h-6 w-6 text-brand-orange" aria-hidden="true" /><h3 className="mt-6 text-xl tracking-normal">{title}</h3><p className="mt-3 text-sm text-muted-foreground">{text}</p></Card>)}</div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    ["01", "Conversamos", "Entendemos seu negócio, suas necessidades e o modelo ideal para você."],
    ["02", "Definimos", "Organizamos as informações e definimos a estrutura do site."],
    ["03", "Desenvolvemos", "Criamos e ajustamos seu site com foco em qualidade e experiência."],
    ["04", "Publicamos", "Colocamos seu novo site no ar."],
  ];
  return <section id="como-funciona" className={`${section} border-y border-border/60`} aria-labelledby="process-title"><div className={container}><div className="mx-auto max-w-3xl text-center"><Eyebrow>PROCESSO SIMPLES</Eyebrow><h2 id="process-title" className={heading}>Do primeiro contato ao site publicado.</h2></div><ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number, title, text]) => <li key={number} className="rounded-2xl glass p-5"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-sunset font-display text-sm font-bold text-primary-foreground">{number}</div><h3 className="mt-5 text-lg tracking-normal">{title}</h3><p className="mt-3 text-sm text-muted-foreground">{text}</p></li>)}</ol><div className="mt-10 flex justify-center"><CommercialContact>Quero começar<ArrowRight aria-hidden="true" /></CommercialContact></div></div></section>;
}

function DifferentialsSection() {
  const items = [
    { Icon: Monitor, title: "Design profissional", text: "Interfaces modernas e pensadas para transmitir credibilidade." },
    { Icon: Smartphone, title: "Responsividade", text: "Seu site funciona bem em computadores, tablets e celulares." },
    { Icon: Zap, title: "Performance", text: "Estrutura desenvolvida pensando em velocidade e experiência." },
    { Icon: MessageCircle, title: "Atendimento direto", text: "Você conversa diretamente com quem desenvolve seu projeto." },
  ];
  return <section className={section} aria-labelledby="differences-title"><div className={container}><div className="mx-auto max-w-3xl text-center"><Eyebrow>POR QUE HORIZONTE FRACTAL</Eyebrow><h2 id="differences-title" className={heading}>Tecnologia sem complicação.</h2></div><div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2">{items.map(({ Icon, title, text }) => <div key={title} className="flex gap-4 border-t border-border pt-6"><Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-brand-orange" /><div><h3 className="text-xl tracking-normal">{title}</h3><p className="mt-3 text-sm text-muted-foreground">{text}</p></div></div>)}</div></div></section>;
}

function AboutSection() {
  return <section id="sobre" className={`${section} border-y border-border/60`} aria-labelledby="about-title"><div className={`${container} text-center`}><h2 id="about-title" className={heading}>Tecnologia aplicada ao crescimento.</h2><div className="mx-auto mt-6 max-w-3xl text-muted-foreground"><p>A Horizonte Fractal desenvolve experiências digitais para empresas e profissionais que querem transformar sua presença online em uma ferramenta de negócio.</p><p className="mt-4">Unimos design, tecnologia e estratégia para criar soluções digitais objetivas, profissionais e preparadas para crescer junto com o cliente.</p></div></div></section>;
}

function FinalCTA() {
  return <section id="contato" className={section} aria-labelledby="contact-title"><div className={`${container} text-center`}><Eyebrow>PRONTO PARA COMEÇAR?</Eyebrow><h2 id="contact-title" className={`${heading} mx-auto max-w-3xl`}>Seu próximo cliente pode <span className="text-gradient">começar pelo seu site.</span></h2><p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Escolha o modelo ideal para seu negócio ou fale conosco para descobrir qual estrutura faz mais sentido para você.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><CommercialContact /><ProductAnchor /></div></div></section>;
}

export function CommercialLanding() {
  return <><a href="#conteudo-comercial" className="skip-link">Pular para o conteúdo</a><CommercialHeader /><main id="conteudo-comercial" className="min-h-dvh"><CommercialHero /><ProblemSection /><LawyerSitesSection /><ProductComparison /><ConditionsSection /><ProcessSection /><DifferentialsSection /><AboutSection /><FinalCTA /></main><CommercialFooter /><WhatsAppFloat href={COMMERCIAL_WHATSAPP_URL} label="Falar no WhatsApp" /></>;
}
