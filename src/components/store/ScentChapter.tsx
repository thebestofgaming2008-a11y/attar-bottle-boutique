import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/lib/products";
import { Reveal } from "./Reveal";

/**
 * Cinematic full-bleed chapter per scent, in the spirit of the reference store:
 * one bottle, the name at display scale, a three-word tagline, one outlined CTA.
 */
export function ScentChapter({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [drift, setDrift] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight - r.top) / (window.innerHeight + r.height);
      setDrift((Math.min(1, Math.max(0, p)) - 0.5) * -40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const words = product.tag.split("·").map((w) => w.trim().toUpperCase());

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-foreground px-6 py-20 text-background sm:py-28"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-16">
        <Reveal className={`w-full sm:w-1/2 ${index % 2 ? "sm:order-2" : ""}`}>
          <img
            src={product.image}
            alt={`${product.name} attar, 6 ml roll-on`}
            style={{ transform: `translateY(${drift}px)` }}
            className="mx-auto w-full max-w-[240px] will-change-transform"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={120} className="w-full sm:w-1/2">
          <div className="text-center sm:text-left">
            <p className="text-[10px] uppercase tracking-[0.3em] text-background/50">
              {String(index + 1).padStart(2, "0")} — {product.category}
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[0.9] sm:text-6xl">
              {product.name}
            </h2>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-background/80">
              {words.join(". ")}.
            </p>
            <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-background/60 sm:mx-0">
              {product.hook}
            </p>
            <Link
              to="/product/$id"
              params={{ id: product.id }}
              className="mt-8 inline-block border border-background/60 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors hover:bg-background hover:text-foreground"
            >
              Explore parfum
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
