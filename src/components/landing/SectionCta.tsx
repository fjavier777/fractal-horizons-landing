import { MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface SectionCtaProps {
  label?: string;
  context?: string;
  hint?: string;
}

export function SectionCta({
  label = "Solicitar diagnóstico gratuito",
  context,
  hint,
}: SectionCtaProps) {
  return (
    <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center">
      {hint && (
        <p className="text-sm text-muted-foreground">{hint}</p>
      )}
      <a
        href={getWhatsAppUrl(context)}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 rounded-full bg-sunset px-7 py-3.5 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="h-4 w-4" />
        {label}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
