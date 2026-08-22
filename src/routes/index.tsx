import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { StoreShell, SiteFooter } from "@/components/store/StoreShell";
import { ProductCard } from "@/components/store/ProductCard";
import { Section, SectionHead } from "@/components/store/Section";
import { TrustStrip } from "@/components/store/TrustStrip";
import { Hero, HERO_BOTTLE } from "@/components/store/Hero";
import { VideoBand } from "@/components/store/VideoBand";
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
        content: "Five unisex attars. One signature bottle. From ₹499.",
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

      <Section id="shop">
        <Reveal>
          <SectionHead
            eyebrow="Five scents · One bottle"
            title="The collection"
            sub="Alcohol-free attars pressed into the same faceted 6 ml roll-on. Pick the mood, not the marketing."
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
            sub="A 6 ml faceted glass roll-on under a solid wooden cap. Pocket-sized, spill-proof, refill-ready — the same across all five."
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
            {[
              ["6 ml", "Roll-on"],
              ["8 hrs", "Wear time"],
              ["0%", "Alcohol"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl">{v}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {l}
                </dd>
              </div>
            ))}
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
