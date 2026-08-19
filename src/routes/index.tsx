import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ShoppingBag, Plus, Minus, ChevronDown, Star } from "lucide-react";
import { BOTTLE_IMAGE, PRODUCTS, inr } from "@/lib/products";
import { useCart } from "@/components/store/useCart";
import { CartDrawer } from "@/components/store/CartDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BADR Attar — Rare Air, Crafted for the Relentless" },
      {
        name: "description",
        content:
          "Five unisex attars in one signature 6 ml bottle. Oud Zafar, Oud Gulaab, Fitoor, Dariya and Ulfat — from ₹499, free shipping over ₹999.",
      },
      { property: "og:title", content: "BADR Attar — Rare Air" },
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
  const [selected, setSelected] = useState(PRODUCTS[0]!.id);
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showBar, setShowBar] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  const product = PRODUCTS.find((p) => p.id === selected) ?? PRODUCTS[0]!;

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 420);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const addSelected = () => {
    cart.add(product.id, qty);
    setCartOpen(true);
  };

  const scrollToShop = () => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-foreground py-2.5 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-background">
        Free shipping over ₹999
      </div>

      <header className="sticky top-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border bg-background/90 px-5 py-4 backdrop-blur">
        <span className="truncate font-display text-2xl leading-none tracking-wide">BADR</span>
        <button
          onClick={() => setCartOpen(true)}
          aria-label="Open cart"
          className="relative shrink-0 p-1"
        >
          <ShoppingBag className="h-5 w-5" />
          {cart.count > 0 && (
            <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-foreground px-1 text-[10px] font-semibold text-background">
              {cart.count}
            </span>
          )}
        </button>
      </header>

      {/* HERO */}
      <section ref={heroRef} className="px-6 pb-20 pt-16 text-center">
        <h1 className="font-display text-[3.75rem] leading-[0.95] tracking-tight sm:text-8xl">
          Rare air.
        </h1>
        <div className="mx-auto mt-12 max-w-sm">
          <img
            src={BOTTLE_IMAGE}
            alt="BADR signature 6 ml attar roll-on bottle with wooden cap"
            className="mx-auto w-full max-w-[280px]"
          />
        </div>
        <button
          onClick={scrollToShop}
          className="mt-12 w-full max-w-sm bg-foreground py-4 text-sm font-semibold uppercase tracking-[0.2em] text-background"
        >
          Shop the five
        </button>
      </section>

      {/* SHOP / SKU SELECTOR */}
      <section id="shop" className="border-t border-border px-6 py-20">
        <p className="eyebrow text-center">Five scents · One bottle</p>
        <h2 className="mt-4 text-center font-display text-4xl leading-tight">Choose your attar</h2>

        <div className="no-scrollbar -mx-6 mt-10 flex gap-2 overflow-x-auto px-6">
          {PRODUCTS.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setSelected(p.id);
                setQty(1);
              }}
              className={`shrink-0 border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                p.id === selected
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="mt-10 border border-border">
          <div className="bg-secondary px-6 py-12">
            <img
              src={BOTTLE_IMAGE}
              alt={`${product.name} attar, 6 ml`}
              className="mx-auto w-full max-w-[220px]"
            />
          </div>
          <div className="px-6 py-8">
            <p className="eyebrow">{product.category}</p>
            <h3 className="mt-3 font-display text-4xl leading-none">{product.name}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{product.tag}</p>
            <p className="mt-6 text-base">{product.hook}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.notes.map((n) => (
                <span key={n} className="border border-border px-3 py-1 text-xs uppercase tracking-wider">
                  {n}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-end gap-3">
              <span className="text-2xl font-semibold">{inr(product.price)}</span>
              <span className="pb-1 text-sm text-muted-foreground line-through">{inr(product.mrp)}</span>
              <span className="pb-1 text-xs font-semibold uppercase tracking-widest">6 ml</span>
            </div>

            <div className="mt-6 grid grid-cols-[auto_minmax(0,1fr)] gap-3">
              <div className="flex shrink-0 items-center border border-border">
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity" className="px-3 py-3.5">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-6 text-center text-sm">{qty}</span>
                <button onClick={() => setQty(qty + 1)} aria-label="Increase quantity" className="px-3 py-3.5">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={addSelected}
                className="min-w-0 bg-foreground px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-background"
              >
                Add — {inr(product.price * qty)}
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Ships in 24 hrs · COD available
            </p>
          </div>
        </div>
      </section>

      {/* SIGNATURE BOTTLE */}
      <section className="border-t border-border px-6 py-24 text-center">
        <p className="eyebrow">The signature</p>
        <h2 className="mt-4 font-display text-4xl leading-tight">One bottle. Every scent.</h2>
        <p className="mx-auto mt-5 max-w-xs text-sm text-muted-foreground">
          A 6 ml faceted glass roll-on under a solid wooden cap. Pocket-sized, spill-proof, refill-ready — the
          same across all five.
        </p>
        <img
          src={BOTTLE_IMAGE}
          alt="Close view of the BADR faceted glass roll-on with wooden cap"
          className="mx-auto mt-14 w-full max-w-[320px]"
        />
        <dl className="mx-auto mt-14 grid max-w-sm grid-cols-3 gap-6 border-t border-border pt-8">
          {[
            ["6 ml", "Roll-on"],
            ["8 hrs", "Wear time"],
            ["0%", "Alcohol"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="font-display text-2xl">{v}</dt>
              <dd className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* STORY */}
      <section className="border-t border-border bg-foreground px-6 py-24 text-center text-background">
        <p className="text-[11px] uppercase tracking-[0.24em] text-background/60">{product.name}</p>
        <p className="mx-auto mt-6 max-w-sm font-display text-2xl leading-snug">{product.story}</p>
      </section>

      {/* REVIEWS */}
      <section className="border-t border-border px-6 py-24">
        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-foreground" />
          ))}
        </div>
        <p className="mt-4 text-center text-xs uppercase tracking-widest text-muted-foreground">
          4.9 · 1,240 reviews
        </p>
        <div className="no-scrollbar -mx-6 mt-10 flex gap-4 overflow-x-auto px-6">
          {[
            ["Lasts all day, no headache.", "Aarav S."],
            ["The bottle alone is worth it.", "Fatima K."],
            ["Got three compliments by noon.", "Rohan M."],
          ].map(([quote, name]) => (
            <figure key={name} className="w-64 shrink-0 border border-border p-6">
              <blockquote className="font-display text-xl leading-snug">“{quote}”</blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                {name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border px-6 py-24">
        <h2 className="text-center font-display text-4xl">Questions</h2>
        <div className="mx-auto mt-10 max-w-md divide-y divide-border border-y border-border">
          {product.faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 text-left"
              >
                <span className="min-w-0 text-sm font-medium">{f.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && <p className="pb-6 text-sm text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border px-6 py-16 text-center">
        <p className="font-display text-3xl">BADR</p>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Rare air · Crafted for the relentless
        </p>
        <p className="mt-8 text-xs text-muted-foreground">ESTD 1448 AH · Made in India</p>
        <div className="h-16" />
      </footer>

      {/* STICKY ATC */}
      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 px-5 py-3 backdrop-blur transition-transform duration-300 ${
          showBar && !cartOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto grid max-w-md grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold uppercase tracking-wide">{product.name}</p>
            <p className="text-xs text-muted-foreground">
              {inr(product.price)} · 6 ml
            </p>
          </div>
          <button
            onClick={addSelected}
            className="shrink-0 bg-foreground px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-background"
          >
            Add to cart
          </button>
        </div>
      </div>

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
