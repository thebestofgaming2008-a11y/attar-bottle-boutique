import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { PRODUCTS, inr } from "@/lib/products";
import { useCart } from "@/components/store/CartContext";
import { StoreShell, SiteFooter } from "@/components/store/StoreShell";
import { Section, SectionHead } from "@/components/store/Section";
import { Reveal } from "@/components/store/Reveal";
import { ProductCard } from "@/components/store/ProductCard";
import { TrustStrip } from "@/components/store/TrustStrip";
import { ProductGallery } from "@/components/store/ProductGallery";
import { NoteAnatomy } from "@/components/store/NoteAnatomy";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) {
      return {
        meta: [
          { title: "Unavailable — BADR" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${p.name} — BADR Attar` },
        { name: "description", content: `${p.hook} ${p.category}, 6 ml roll-on, ${inr(p.price)}.` },
        { property: "og:title", content: `${p.name} — BADR Attar` },
        { property: "og:description", content: p.hook },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const cart = useCart();
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const others = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <StoreShell>
      <ProductGallery product={product} />

      <Section bordered={false} className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.9] sm:text-7xl">{product.name}</h1>
            <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {product.mood}
            </p>
            <p className="mt-8 max-w-xl font-display text-xl leading-snug sm:text-2xl">{product.hook}</p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {product.meaning ? `${product.meaning} ` : ""}
              {product.story}
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {product.notes.map((n) => (
                <li
                  key={n}
                  className="border border-border px-3 py-1.5 text-[11px] uppercase tracking-[0.14em]"
                >
                  {n}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="border-y border-border py-8 lg:sticky lg:top-24">
              <p className="eyebrow">6 ml concentrated attar</p>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-2xl">{inr(product.price)}</span>
              <span className="text-sm text-muted-foreground line-through">{inr(product.mrp)}</span>
            </div>

            <div className="mt-6 flex items-stretch gap-3">
              <div className="inline-flex items-center border border-border">
                <Button
                  variant="ghost"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="h-auto rounded-none px-3.5 py-3"
                >
                  <Minus className="h-3.5 w-3.5" />
                </Button>
                <span className="min-w-8 text-center text-sm">{qty}</span>
                <Button
                  variant="ghost"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="h-auto rounded-none px-3.5 py-3"
                >
                  <Plus className="h-3.5 w-3.5" />
                </Button>
              </div>
              <Button
                onClick={() => cart.add(product.id, qty)}
                className="h-auto flex-1 rounded-none px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em]"
              >
                Add to bag
              </Button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Free shipping over ₹999 · COD available · 7-day returns
            </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <TrustStrip />

      <NoteAnatomy product={product} />

      <Section>
        <SectionHead eyebrow="Good to know" title="Questions" />
        <div className="mx-auto mt-12 max-w-2xl border-t border-border">
          {product.faqs.map((f, i) => (
            <div key={f.q} className="border-b border-border">
              <Button
                variant="ghost"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                className="h-auto w-full justify-between rounded-none px-0 py-5 text-left hover:bg-transparent"
              >
                <span className="text-sm font-semibold">{f.q}</span>
                <Plus
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                    openFaq === i ? "rotate-45" : ""
                  }`}
                />
              </Button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  openFaq === i ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Keep going" title="The other four" />
        <div className="no-scrollbar -mx-6 mt-12 flex gap-5 overflow-x-auto px-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {others.map((p, i) => (
            <Reveal key={p.id} delay={i * 60} className="w-[70vw] shrink-0 sm:w-auto">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="border border-foreground px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em]"
          >
            Back to the collection
          </Link>
        </div>
      </Section>

      <SiteFooter />

      {/* Sticky mobile add-to-bag */}
      <div className="sticky bottom-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-border bg-background/95 px-5 py-3 backdrop-blur sm:hidden">
        <div className="min-w-0">
          <p className="truncate font-display text-sm leading-none">{product.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">{inr(product.price)} · 6 ml</p>
        </div>
        <Button
          onClick={() => cart.add(product.id, qty)}
          className="h-auto shrink-0 rounded-none px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em]"
        >
          Add to bag
        </Button>
      </div>
    </StoreShell>
  );
}
