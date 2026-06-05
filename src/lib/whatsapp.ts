// WhatsApp message templates per service
const PHONE = "5519993931841";

const messages: Record<string, string> = {
  default:
    "Olá! Gostaria de solicitar um orçamento com a Horizonte Fractal. Podemos conversar?",
  "Landing Pages":
    "Olá! Tenho interesse em criar uma Landing Page de alta conversão com a Horizonte Fractal. Gostaria de solicitar um orçamento.",
  "Sites Institucionais":
    "Olá! Quero desenvolver um Site Institucional profissional para minha empresa. Gostaria de solicitar um orçamento.",
  "Sites Corporativos":
    "Olá! Preciso de um Site Corporativo moderno e otimizado para conversão. Podemos conversar sobre um orçamento?",
  "SEO":
    "Olá! Quero melhorar o posicionamento da minha empresa no Google com uma estratégia de SEO. Gostaria de um orçamento.",
  "Google Ads":
    "Olá! Tenho interesse em campanhas de Google Ads para atrair mais clientes. Podemos conversar sobre um orçamento?",
};

export const servicesList = Object.keys(messages).filter((k) => k !== "default");

export function getWhatsAppUrl(service?: string): string {
  const msg = messages[service ?? ""] ?? messages.default;
  const encoded = encodeURIComponent(msg);
  return `https://wa.me/${PHONE}?text=${encoded}`;
}
