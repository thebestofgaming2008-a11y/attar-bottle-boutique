import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Star } from "lucide-react";
import { PRODUCTS, inr } from "@/lib/products";
import { useCart } from "@/components/store/useCart";
import { CartDrawer } from "@/components/store/CartDrawer";
import { Hero, BADR_LOGO, HERO_BOTTLE } from "@/components/store/Hero";
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
  const cart = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const scrollToShop = () =>
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-foreground py-2.5 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-background">
        Free shipping over ₹999
      </div>

      <header className="sticky top-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 bg-foreground px-5 py-3 text-background">
        <img src={BADR_LOGO} alt="BADR" className="h-5 w-auto justify-self-start object-contain" />
        <button onClick={() => setCartOpen(true)} aria-label="Open cart" className="relative shrink-0 p-1">
          <ShoppingBag className="h-5 w-5" />
          {cart.count > 0 && (
            <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-background px-1 text-[10px] font-semibold text-foreground">
              {cart.count}
            </span>
          )}
        </button>
      </header>

      <Hero onCta={scrollToShop} />

      <VideoBand />

      {/* PRODUCTS */}
      <section id="shop" className="px-6 py-20">
        <Reveal>
          <p className="eyebrow text-center">Five scents · One bottle</p>
          <h2 className="mt-4 text-center font-display text-3xl leading-tight">The collection</h2>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <article className="border border-border">
                <Link
                  to="/product/$id"
                  params={{ id: p.id }}
                  className="block bg-secondary px-6 py-10"
                >
                  <img
                    src={p.image}
                    alt={`${p.name} attar, 6 ml`}
                    className="mx-auto w-full max-w-[220px] transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 px-5 py-5">
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-xl leading-none">{p.name}</h3>
                    <p className="mt-2 truncate text-xs text-muted-foreground">{p.tag}</p>
                    <p className="mt-3 text-sm">
                      {inr(p.price)}{" "}
                      <span className="text-muted-foreground line-through">{inr(p.mrp)}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      cart.add(p.id);
                      setCartOpen(true);
                    }}
                    className="shrink-0 bg-foreground px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-background"
                  >
                    Add
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="border-t border-border px-6 py-24 text-center">
        <Reveal>
          <p className="eyebrow">The signature</p>
          <h2 className="mt-4 font-display text-3xl leading-tight">One bottle. Every scent.</h2>
          <p className="mx-auto mt-5 max-w-xs text-sm text-muted-foreground">
            A 6 ml faceted glass roll-on under a solid wooden cap. Pocket-sized, spill-proof,
            refill-ready — the same across all five.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <img
            src={HERO_BOTTLE}
            alt="Close view of the BADR faceted glass roll-on with wooden cap"
            className="mx-auto mt-14 w-full max-w-[280px]"
            loading="lazy"
          />
          <dl className="mx-auto mt-14 grid max-w-sm grid-cols-3 gap-6 border-t border-border pt-8">
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
      </section>

      {/* REVIEWS */}
      <section className="border-t border-border px-6 py-24">
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
      </section>

      <SiteFooter />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        lines={cart.lines}
        subtotal={cart.subtotal}
        setQty={cart.setQty}
        add={(id) => cart.add(id)}
      />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground px-6 py-16 text-center text-background">
      <img src={BADR_LOGO} alt="BADR" className="mx-auto h-6 w-auto object-contain" />
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-background/60">
        Rare air · Crafted for the relentless
      </p>
      <p className="mt-8 text-xs text-background/50">ESTD 1448 AH · Made in India</p>
      <div className="h-10" />
    </footer>
  );
}
