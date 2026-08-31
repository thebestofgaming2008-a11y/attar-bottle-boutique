import type { Product } from "@/lib/products";
import { Reveal } from "./Reveal";

function NoteLine({ label, note, impression }: { label: string; note: string; impression: string }) {
  return (
    <div className="border-t border-border pt-4">
      <p className="eyebrow text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-xl leading-none">{note}</p>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{impression}</p>
    </div>
  );
}

export function NoteAnatomy({ product }: { product: Product }) {
  const { anatomy } = product;

  return (
    <section className="border-t border-border bg-background px-6 py-20 sm:py-28" aria-labelledby="anatomy-title">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="text-center">
          <p className="eyebrow text-muted-foreground">Fragrance anatomy</p>
          <h2 id="anatomy-title" className="mt-3 font-display text-4xl leading-[0.9] sm:text-6xl">
            Inside {product.name}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <img
            src={anatomy.posterImage}
            alt={`${product.name} bottle outline filled with ${anatomy.top.note} and ${anatomy.heart.note}, with ${anatomy.base.note} behind it`}
            className="mx-auto mt-10 w-full max-w-lg"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Reveal>
            <NoteLine label="Top" note={anatomy.top.note} impression={anatomy.top.impression} />
          </Reveal>
          <Reveal delay={60}>
            <NoteLine label="Heart" note={anatomy.heart.note} impression={anatomy.heart.impression} />
          </Reveal>
          <Reveal delay={120}>
            <NoteLine label="Base" note={anatomy.base.note} impression={anatomy.base.impression} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
