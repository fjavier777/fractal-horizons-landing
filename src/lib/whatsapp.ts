// Unified WhatsApp contact link
const PHONE = "5519993931841";
const MESSAGE =
  "Olá! Gostaria de conversar sobre como acelerar o crescimento da minha empresa com tecnologia.";

export const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

export const servicesList = [
  "Inteligência Artificial Aplicada",
  "Automação de Processos",
  "Desenvolvimento de Software Sob Medida",
  "Transformação Digital",
  "Presença Digital de Alta Performance",
  "Aceleração de Crescimento (SEO & Ads)",
];

// Accepts an optional service for backwards compatibility, but always
// returns the unified WhatsApp URL with the standard message.
export function getWhatsAppUrl(_service?: string): string {
  return WHATSAPP_URL;
}
