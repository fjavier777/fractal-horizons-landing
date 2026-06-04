import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function CtaFinal() {
  return (
    <section id="contato" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass p-10 text-center md:p-16">
          <div className="absolute inset-0 -z-10 bg-sunset opacity-20" />
          <div className="absolute -bottom-20 left-1/2 -z-10 h-64 w-[120%] -translate-x-1/2 rounded-full bg-sunset opacity-30 blur-3xl" />
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            Pronto para ter um site que<br />
            <span className="text-gradient">vende todos os dias?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Solicite um orçamento sem compromisso e descubra como podemos transformar
            visitantes em clientes para a sua empresa.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-sunset px-6 py-3 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar orçamento no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
