import { CheckCircle2, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const benefits = [
  "Diagnóstico gratuito",
  "Conversa sem enrolação",
  "Solução sob medida",
  "Parceria de longo prazo",
];


export function PreCta() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass p-10 text-center md:p-16 animate-fade-up">
          {/* Glow background */}
          <div className="absolute inset-0 -z-10 bg-sunset opacity-15" />
          <div className="absolute -top-20 left-1/2 -z-10 h-64 w-[120%] -translate-x-1/2 rounded-full bg-sunset opacity-25 blur-3xl" />

          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            E se, em 30 dias,{" "}
            <span className="text-gradient">sua empresa fosse outra?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Uma conversa. Sem custo, sem compromisso. Só o mapa do que
            IA e automação podem fazer pelo seu negócio.
          </p>


          {/* Benefits */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-orange" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          {/* Counter highlight */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-5 py-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-sunset">
              <Clock className="h-4 w-4 text-primary-foreground" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-brand-gold ring-2 ring-background" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Resposta em até 24 horas</p>
              <p className="text-xs text-muted-foreground">Conversa estratégica sem compromisso</p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-sunset px-7 py-3.5 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com um especialista
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />

            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
