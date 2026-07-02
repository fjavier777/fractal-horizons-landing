import { useState, useRef, useEffect, useCallback, useId } from "react";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Zap,
  ShieldCheck,
  ChevronDown,
  Check,
  Globe,
  ExternalLink,
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
import logoAsset from "@/assets/horizonte-fractal-logo.png.asset.json";
import { getWhatsAppUrl, servicesList } from "@/lib/whatsapp";

const badges = [
  { icon: Zap, label: "Resultados mensuráveis" },
  { icon: Sparkles, label: "Inteligência aplicada" },
  { icon: ShieldCheck, label: "Escala com segurança" },
];

const benefits = [
  "IA & Automação",
  "Software sob medida",
  "Integrações inteligentes",
  "ROI comprovado",
];


const allOptions = ["Geral", ...servicesList];

export function Hero() {
  const [selectedService, setSelectedService] = useState<string>("default");
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const listboxId = useId();
  const triggerId = useId();

  const displayLabel =
    selectedService === "default"
      ? "Escolha um serviço"
      : selectedService;

  const whatsappUrl = getWhatsAppUrl(
    selectedService === "default" ? undefined : selectedService
  );

  const currentIndex = selectedService === "default" ? 0 : allOptions.indexOf(selectedService);

  const closeListbox = useCallback(() => {
    setOpen(false);
    setHighlightedIndex(currentIndex);
    triggerRef.current?.focus();
  }, [currentIndex]);

  const selectOption = useCallback((index: number) => {
    const option = allOptions[index];
    setSelectedService(option === "Geral" ? "default" : option);
    setOpen(false);
    setHighlightedIndex(index);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (open) {
      setHighlightedIndex(currentIndex);
      requestAnimationFrame(() => {
        optionRefs.current[currentIndex]?.focus();
      });
    }
  }, [open, currentIndex]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        listRef.current &&
        !listRef.current.contains(target)
      ) {
        setOpen(false);
        setHighlightedIndex(currentIndex);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, currentIndex]);

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowUp":
      case "Enter":
      case " ":
        e.preventDefault();
        setOpen(true);
        break;
      case "Escape":
        if (open) {
          e.preventDefault();
          closeListbox();
        }
        break;
      case "Tab":
        if (open) {
          e.preventDefault();
          closeListbox();
          const focusableElements = document.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          const triggerIndex = Array.from(focusableElements).indexOf(triggerRef.current!);
          if (e.shiftKey) {
            focusableElements[triggerIndex - 1]?.focus();
          } else {
            focusableElements[triggerIndex + 1]?.focus();
          }
        }
        break;
    }
  };

  const handleOptionKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) => {
          const next = (prev + 1) % allOptions.length;
          optionRefs.current[next]?.focus();
          return next;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => {
          const next = (prev - 1 + allOptions.length) % allOptions.length;
          optionRefs.current[next]?.focus();
          return next;
        });
        break;
      case "Home":
        e.preventDefault();
        setHighlightedIndex(0);
        optionRefs.current[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        setHighlightedIndex(allOptions.length - 1);
        optionRefs.current[allOptions.length - 1]?.focus();
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        selectOption(index);
        break;
      case "Escape":
        e.preventDefault();
        closeListbox();
        break;
      case "Tab":
        e.preventDefault();
        closeListbox();
        const focusableElements = document.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const triggerIndex = Array.from(focusableElements).indexOf(triggerRef.current!);
        if (e.shiftKey) {
          focusableElements[triggerIndex - 1]?.focus();
        } else {
          focusableElements[triggerIndex + 1]?.focus();
        }
        break;
    }
  };

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-radial-hero)" }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 grid-pattern" aria-hidden />

      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <div
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground animate-fade-up"
        >
          <img src={logoAsset.url} alt="" className="h-4 w-4 rounded-sm" />
          Tecnologia, IA e Automação para acelerar o crescimento de empresas
        </div>

        {/* Headline */}
        <h1
          className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Transformamos empresas através da{" "}
          <span className="text-gradient">tecnologia e da inteligência artificial</span>
        </h1>

        {/* Subheadline */}
        <p
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Criamos soluções inteligentes que automatizam processos, escalam
          operações e aceleram o faturamento de negócios que decidiram crescer.

        </p>

        {/* Benefits */}
        <div
          className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-3 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {benefits.map((benefit) => (
            <span
              key={benefit}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange/15">
                <Check className="h-3 w-3 text-brand-orange" strokeWidth={3} />
              </span>
              {benefit}
            </span>
          ))}
        </div>

        {/* Service selector + CTA buttons */}
        <div
          className="mt-9 flex flex-col items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Dropdown */}
          <div className="relative w-full max-w-xs">
            <button
              ref={triggerRef}
              id={triggerId}
              type="button"
              onClick={() => setOpen((v) => !v)}
              onKeyDown={handleTriggerKeyDown}
              className="flex w-full items-center justify-between rounded-full glass px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
              aria-haspopup="listbox"
              aria-expanded={open}
              aria-controls={open ? listboxId : undefined}
              aria-activedescendant={open ? `${listboxId}-option-${highlightedIndex}` : undefined}
            >
              <span className="truncate">{displayLabel}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {open && (
              <ul
                ref={listRef}
                id={listboxId}
                className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-border/60 bg-card/95 p-1.5 shadow-xl backdrop-blur-md"
                role="listbox"
                aria-labelledby={triggerId}
                aria-orientation="vertical"
              >
                {allOptions.map((option, index) => {
                  const isSelected = selectedService === (option === "Geral" ? "default" : option);
                  return (
                    <li key={option} role="presentation">
                      <button
                        ref={(el) => { optionRefs.current[index] = el; }}
                        id={`${listboxId}-option-${index}`}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        tabIndex={-1}
                        onClick={() => selectOption(index)}
                        onKeyDown={(e) => handleOptionKeyDown(e, index)}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        className={`w-full rounded-xl px-4 py-2 text-left text-sm transition-colors ${
                          isSelected
                            ? "bg-white/10 text-foreground"
                            : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                        } ${highlightedIndex === index ? "ring-2 ring-brand-orange/50" : ""}`}
                      >
                        {option}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-sunset px-7 py-3.5 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
            >
              Ver Portfólio
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Trust indicator */}
        <div
          className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Globe className="h-3.5 w-3.5 text-brand-orange" aria-hidden />
          <span>Atendimento para empresas em todo o Brasil</span>
        </div>

        {/* Badges */}
        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-2 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground"
            >
              <b.icon className="h-3.5 w-3.5 text-brand-orange" />
              {b.label}
            </span>
          ))}
        </div>

        {/* Hero image */}
        <div
          className="relative mx-auto mt-16 max-w-5xl animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-sunset opacity-30 blur-3xl" />
          <div className="overflow-hidden rounded-2xl glass p-2 glow">
            <img
              src={heroImage}
              alt="Mockups de sites e landing pages desenvolvidos pela Horizonte Fractal"
              width={1920}
              height={1080}
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
