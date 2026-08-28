import { Link } from "@tanstack/react-router";
import bottleCut from "@/assets/badr-bottle-cut.png.asset.json";
import logo from "@/assets/badr-logo.png.asset.json";
import { Wordmark } from "./Wordmark";
import { BottleSpin } from "./BottleSpin";

export const HERO_BOTTLE = bottleCut.url;
export const BADR_LOGO = logo.url;

/**
 * The signature BADR hero: black field, wordmark, one stacked headline,
 * one small CTA, the endlessly spinning signature bottle.
 */
export function Hero({
  headline,
  ctaLabel = "Shop now",
  onCta,
  ctaTo,
}: {
  headline?: string;
  ctaLabel?: string;
  onCta?: () => void;
  ctaTo?: string;
}) {
  const lines = headline ? headline.split(" ") : ["Rare", "Air"];

  return (
    <section className="relative overflow-hidden bg-foreground px-6 pb-0 pt-10 text-background">
      <Wordmark size="lg" estd className="mx-auto block" />

      <h1 className="mx-auto mt-10 text-center font-display text-[22vw] leading-[0.82] sm:text-[9rem]">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>

      <div className="mt-8 flex justify-center">
        {ctaTo ? (
          <Link
            to={ctaTo}
            className="border border-background/70 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-background hover:text-foreground"
          >
            {ctaLabel}
          </Link>
        ) : (
          <button
            onClick={onCta}
            className="border border-background/70 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-background hover:text-foreground"
          >
            {ctaLabel}
          </button>
        )}
      </div>

      <BottleSpin className="mx-auto mt-12 w-full max-w-[240px]" />
      <div className="h-4" />
    </section>
  );
}

