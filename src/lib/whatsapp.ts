// Unified WhatsApp contact link
const PHONE = "5519993931841";
const MESSAGE = "Olá! Gostaria de solicitar um orçamento para meu projeto.";

export const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

export const servicesList = [
  "Landing Pages",
  "Sites Institucionais",
  "Sites Corporativos",
  "SEO",
  "Google Ads",
];

// Accepts an optional service for backwards compatibility, but always
// returns the unified WhatsApp URL with the standard message.
export function getWhatsAppUrl(_service?: string): string {
  return WHATSAPP_URL;
}
