// WhatsApp message templates per service
const PHONE = "5500000000000";

const messages: Record<string, string> = {
  default:
    "Olá! Gostaria de saber mais sobre os serviços da Horizonte Fractal. Poderia me ajudar?",
  "Landing Pages":
    "Olá! Tenho interesse em criar uma Landing Page de alta conversão com a Horizonte Fractal. Gostaria de solicitar um orçamento.",
  "Sites Corporativos":
    "Olá! Gostaria de desenvolver um Site Corporativo profissional para minha empresa. Podemos conversar sobre um orçamento?",
  "Sistemas Web":
    "Olá! Preciso de um Sistema Web sob medida para automatizar processos da minha empresa. Quero solicitar um orçamento.",
  Aplicativos:
    "Olá! Tenho interesse em desenvolver um Aplicativo (Android/iOS) com a Horizonte Fractal. Gostaria de um orçamento.",
  "Inteligência Artificial":
    "Olá! Quero implementar soluções de Inteligência Artificial na minha empresa — chatbots, agentes de IA ou automações. Podemos conversar?",
  "Consultoria Tecnológica":
    "Olá! Gostaria de uma Consultoria Tecnológica estratégica para acelerar os resultados do meu negócio. Quero saber mais.",
};

export function getWhatsAppUrl(service?: string): string {
  const msg = messages[service ?? ""] ?? messages.default;
  const encoded = encodeURIComponent(msg);
  return `https://wa.me/${PHONE}?text=${encoded}`;
}
