import { MessageCircle, Mail } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function CtaFinal() {
  return (
    <section id="contato" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass p-10 text-center md:p-16">
          <div className="absolute inset-0 -z-10 bg-sunset opacity-20" />
          <div className="absolute -bottom-20 left-1/2 -z-10 h-64 w-[120%] -translate-x-1/2 rounded-full bg-sunset opacity-30 blur-3xl" />
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            O próximo passo da sua empresa<br />
            <span className="text-gradient">começa com uma conversa</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Chega de adiar. Vamos entender seu momento e mostrar o caminho
            mais curto até o próximo patamar.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-sunset px-6 py-3 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com um especialista
            </a>

            <a
              href="mailto:horizontefractal@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Enviar e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
