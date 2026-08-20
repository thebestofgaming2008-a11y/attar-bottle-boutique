import { Link } from "@tanstack/react-router";
import bottleCut from "@/assets/badr-bottle-cut.png.asset.json";
import logo from "@/assets/badr-logo.png.asset.json";

export const HERO_BOTTLE = bottleCut.url;
export const BADR_LOGO = logo.url;

/**
 * The signature BADR hero: black field, wordmark, one headline, one small CTA,
 * the signature bottle. Used identically on the homepage and every product page.
 */
export function Hero({
  headline = "Shop your scent.",
  ctaLabel = "Shop now",
  onCta,
  ctaTo,
}: {
  headline?: string;
  ctaLabel?: string;
  onCta?: () => void;
  ctaTo?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-foreground px-6 pb-0 pt-8 text-background">
      <img
        src={BADR_LOGO}
        alt="BADR"
        className="mx-auto h-7 w-auto object-contain"
        loading="eager"
      />

      <h1 className="mx-auto mt-10 max-w-[9ch] text-left font-display text-[2.6rem] leading-[0.98] sm:max-w-none sm:text-center sm:text-6xl">
        {headline}
      </h1>

      <div className="mt-6 flex justify-start sm:justify-center">
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

      <img
        src={HERO_BOTTLE}
        alt="BADR signature 6 ml faceted glass roll-on with wooden cap"
        className="mx-auto mt-10 w-full max-w-[260px] animate-in fade-in slide-in-from-bottom-6 duration-1000"
      />
    </section>
  );
}
