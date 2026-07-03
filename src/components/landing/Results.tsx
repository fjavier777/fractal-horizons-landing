import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 120, prefix: "+", suffix: "", label: "empresas transformadas por tecnologia" },
  { value: 70, prefix: "Até ", suffix: "%", label: "de horas devolvidas ao seu time" },
  { value: 3, prefix: "", suffix: "x", label: "mais oportunidades entrando no funil" },
  { value: 98, prefix: "", suffix: "%", label: "de clientes que voltam a contratar" },
];


function useCount(target: number, start: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1600;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);
  return n;
}

function StatCard({ s }: { s: (typeof stats)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n = useCount(s.value, visible);
  return (
    <div ref={ref} className="rounded-2xl glass p-7 text-center">
      <div className="font-display text-4xl font-semibold md:text-5xl">
        <span className="text-gradient">
          {s.prefix}
          {n}
          {s.suffix}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
    </div>
  );
}

export function Results() {
  return (
    <section id="resultados" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange">
            Números reais
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            O que nossos clientes <span className="text-gradient">estão colhendo</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
