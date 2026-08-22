import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { StoreShell, SiteFooter } from "@/components/store/StoreShell";
import { ProductCard } from "@/components/store/ProductCard";
import { Section, SectionHead } from "@/components/store/Section";
import { TrustStrip } from "@/components/store/TrustStrip";
import { Hero, HERO_BOTTLE } from "@/components/store/Hero";
import { VideoBand } from "@/components/store/VideoBand";
import { ScentChapter } from "@/components/store/ScentChapter";
import { ScentFinder } from "@/components/store/ScentFinder";
import { Stat } from "@/components/store/Stat";
import { Reveal } from "@/components/store/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BADR Attar — Shop Your Scent" },
      {
        name: "description",
        content:
          "Five unisex attars in one signature 6 ml bottle. Oud Zafar, Oud Gulaab, Fitoor, Dariya and Ulfat — from ₹499, free shipping over ₹999.",
      },
      { property: "og:title", content: "BADR Attar — Shop Your Scent" },
      {
        property: "og:description",
        content: "Rare air. Crafted for the relentless. Five unisex attars, one signature bottle.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const scrollToShop = () =>
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });

  return (
    <StoreShell>
      <Hero onCta={scrollToShop} />

      <VideoBand />

      <TrustStrip />

      {/* Brand statement — the reference store's quiet full-black band */}
      <Section dark bordered={false}>
        <Reveal>
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-background/50">
            Estd 1448 AH
          </p>
          <h2 className="mx-auto mt-8 max-w-3xl text-center font-display text-3xl leading-[0.95] sm:text-6xl">
            Rare air.
            <br />
            Crafted for the relentless.
          </h2>
          <p className="mx-auto mt-8 max-w-md text-center text-sm leading-relaxed text-background/60">
            Alcohol-free attar, pressed into one faceted 6 ml roll-on. Five scents, no filler, no
            fine print.
          </p>
        </Reveal>
      </Section>

      {/* Five cinematic scent chapters */}
      {PRODUCTS.map((p, i) => (
        <ScentChapter key={p.id} product={p} index={i} />
      ))}

      {/* Find your scent */}
      <Section dark bordered={false}>
        <Reveal>
          <SectionHead
            dark
            eyebrow="Two taps"
            title="Find your scent."
            sub="Tell us when you're wearing it and how loud you want it."
          />
        </Reveal>
        <Reveal delay={120} className="mt-12">
          <ScentFinder />
        </Reveal>
      </Section>

      <Section id="shop">
        <Reveal>
          <SectionHead
            eyebrow="Five scents · One bottle"
            title="Shop the collection"
            sub="Pick the mood, not the marketing."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHead
            eyebrow="The signature"
            title="One bottle. Every scent."
            sub="A 6 ml faceted glass roll-on under a solid wooden cap. Pocket-sized, spill-proof, the same across all five."
          />
        </Reveal>
        <Reveal delay={120}>
          <img
            src={HERO_BOTTLE}
            alt="Close view of the BADR faceted glass roll-on with wooden cap"
            className="mx-auto mt-14 w-full max-w-[280px]"
            loading="lazy"
          />
          <dl className="mx-auto mt-14 grid max-w-sm grid-cols-3 gap-6 border-t border-border pt-8 text-center">
            <Stat value={6} suffix=" ml" label="Roll-on" />
            <Stat value={8} suffix=" hrs" label="Wear time" />
            <Stat value={0} suffix="%" label="Alcohol" />
          </dl>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-foreground" />
            ))}
          </div>
          <p className="mt-4 text-center text-xs uppercase tracking-widest text-muted-foreground">
            4.9 · 1,240 reviews
          </p>
        </Reveal>
        <div className="no-scrollbar -mx-6 mt-10 flex gap-4 overflow-x-auto px-6">
          {[
            ["Lasts all day, no headache.", "Aarav S."],
            ["The bottle alone is worth it.", "Fatima K."],
            ["Got three compliments by noon.", "Rohan M."],
          ].map(([quote, name], i) => (
            <Reveal key={name} delay={i * 80} className="shrink-0">
              <figure className="w-64 border border-border p-6">
                <blockquote className="font-display text-lg leading-snug">“{quote}”</blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                  {name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <SiteFooter />
    </StoreShell>
  );
}
