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
  TrendingUp,
  Cpu,
  Layers,
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
import logoAsset from "@/assets/horizonte-fractal-logo.png.asset.json";
import { getWhatsAppUrl, servicesList } from "@/lib/whatsapp";

const allOptions = ["Geral", ...servicesList];

const trustBenefits = [
  {
    icon: Cpu,
    title: "Menos esforço, mais resultado",
    desc: "Sua equipe livre do operacional. Até 70% de horas recuperadas.",
  },
  {
    icon: Layers,
    title: "Feito para o seu negócio",
    desc: "Nada de software genérico. Cada solução nasce do seu contexto.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento em 90 dias",
    desc: "Impacto mensurável no faturamento. Rápido, previsível, real.",
  },
];

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
    selectedService === "default" ? "Escolha um serviço" : selectedService;

  const whatsappUrl = getWhatsAppUrl(
    selectedService === "default" ? undefined : selectedService
  );

  const currentIndex =
    selectedService === "default" ? 0 : allOptions.indexOf(selectedService);

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
          const triggerIndex = Array.from(focusableElements).indexOf(
            triggerRef.current!
          );
          if (e.shiftKey) {
            focusableElements[triggerIndex - 1]?.focus();
          } else {
            focusableElements[triggerIndex + 1]?.focus();
          }
        }
        break;
    }
  };

  const handleOptionKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
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
          const next =
            (prev - 1 + allOptions.length) % allOptions.length;
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
        const triggerIndex = Array.from(focusableElements).indexOf(
          triggerRef.current!
        );
        if (e.shiftKey) {
          focusableElements[triggerIndex - 1]?.focus();
        } else {
          focusableElements[triggerIndex + 1]?.focus();
        }
        break;
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Deep background layers */}
      <div className="absolute inset-0 -z-20" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.78 0.13 82 / 0.22), oklch(0.78 0.13 82 / 0.06) 45%, transparent 75%)",
          }}
        />
        {/* Floating orbs for depth */}
        <div
          className="hero-orb hero-orb-1"
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, oklch(0.78 0.13 82 / 0.12), transparent 70%)",
            top: "-5%",
            left: "-10%",
            filter: "blur(80px)",
            animation: "floatOrb1 18s ease-in-out infinite",
          }}
        />
        <div
          className="hero-orb hero-orb-2"
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, oklch(0.55 0.08 80 / 0.10), transparent 70%)",
            top: "20%",
            right: "-8%",
            filter: "blur(70px)",
            animation: "floatOrb2 22s ease-in-out infinite",
          }}
        />
        <div
          className="hero-orb hero-orb-3"
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, oklch(0.88 0.11 86 / 0.08), transparent 70%)",
            bottom: "10%",
            left: "30%",
            filter: "blur(60px)",
            animation: "floatOrb3 16s ease-in-out infinite",
          }}
        />
      </div>

      <div className="absolute inset-0 -z-10 grid-pattern" aria-hidden />

      <div className="mx-auto max-w-6xl px-6">
        {/* Top badge */}
        <div className="mx-auto mb-10 flex w-fit animate-fade-up items-center gap-2.5 rounded-full glass px-5 py-2 text-xs font-medium text-muted-foreground">
          <img
            src={logoAsset.url}
            alt=""
            className="h-4 w-4 rounded-sm"
          />
          <span className="text-foreground/80">
            O próximo salto da sua empresa começa aqui
          </span>
        </div>

        {/* Headline — short, punchy, memorable */}
        <h1 className="animate-fade-up text-center font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Sua empresa no{" "}
          <span className="text-gradient">próximo nível</span>
        </h1>

        {/* Subheadline — clear value prop */}
        <p className="animate-fade-up mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          style={{ animationDelay: "0.1s" }}
        >
          Enquanto seus concorrentes lutam com planilhas, você automatiza,
          decide com IA e cresce mais rápido. É assim que a Horizonte Fractal
          transforma negócios.
        </p>

        {/* 3 Trust benefit cards */}
        <div
          className="animate-fade-up mx-auto mt-10 flex max-w-3xl flex-col items-stretch justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.2s" }}
        >
          {trustBenefits.map((b) => (
            <div
              key={b.title}
              className="group flex flex-1 items-start gap-3 rounded-2xl glass p-4 transition-all duration-300 hover:border-brand-orange/30 hover:shadow-[0_0_40px_-12px_oklch(0.78_0.13_82/0.25)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 transition-colors group-hover:bg-brand-orange/20">
                <b.icon
                  className="h-5 w-5 text-brand-orange"
                  strokeWidth={1.8}
                />
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  {b.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Service selector + CTAs */}
        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4"
          style={{ animationDelay: "0.3s" }}
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
              aria-activedescendant={
                open
                  ? `${listboxId}-option-${highlightedIndex}`
                  : undefined
              }
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
                  const isSelected =
                    selectedService ===
                    (option === "Geral" ? "default" : option);
                  return (
                    <li key={option} role="presentation">
                      <button
                        ref={(el) => {
                          optionRefs.current[index] = el;
                        }}
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
              Quero acelerar meu negócio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
            >
              Ver o que já entregamos
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div
          className="animate-fade-up mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="inline-flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5 text-brand-orange" aria-hidden />
            Feito no Brasil
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-brand-orange" aria-hidden />
            Falamos com você em 2h
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-orange" aria-hidden />
            Seus dados sempre seguros
          </span>
        </div>

        {/* Hero image with depth */}
        <div
          className="animate-fade-up relative mx-auto mt-14 max-w-5xl"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="absolute -inset-x-12 -top-12 bottom-4 -z-10 rounded-[2.5rem] bg-sunset opacity-25 blur-[100px]" />
          <div className="overflow-hidden rounded-2xl glass p-2 glow">
            <img
              src={heroImage}
              alt="Dashboard de automação e inteligência artificial desenvolvido pela Horizonte Fractal"
              width={1920}
              height={1080}
              className="w-full rounded-xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
