import bottleOutline from "@/assets/badr-bottle-outline.png.asset.json";
import type { Product } from "@/lib/products";
import { Reveal } from "./Reveal";

function Callout({
  index,
  note,
  impression,
  align,
}: {
  index: string;
  note: string;
  impression: string;
  align: "left" | "right";
}) {
  return (
    <div className={`anatomy-callout anatomy-callout-${align}`}>
      <span className="anatomy-index">{index}</span>
      <p className="font-display text-base leading-none sm:text-xl">{note}</p>
      <p className="mt-2 max-w-40 text-xs leading-relaxed text-current/65">{impression}</p>
    </div>
  );
}

export function NoteAnatomy({ product }: { product: Product }) {
  const { anatomy } = product;

  return (
    <section className={`anatomy anatomy-${anatomy.theme}`} aria-labelledby="anatomy-title">
      <div className="anatomy-grain" />
      <Reveal className="anatomy-heading">
        <p className="eyebrow text-current/55">Fragrance anatomy</p>
        <h2 id="anatomy-title" className="mt-3 font-display text-4xl leading-[0.9] sm:text-6xl">
          Inside {product.name}
        </h2>
      </Reveal>

      <div className="anatomy-stage">
        <img
          src={anatomy.baseImage}
          alt={`${anatomy.base.note} base note`}
          className="anatomy-base-image"
          loading="lazy"
          width={1024}
          height={768}
        />
        <img
          src={anatomy.noteImage}
          alt={`${anatomy.top.note} and ${anatomy.heart.note}`}
          className="anatomy-note-image"
          loading="lazy"
          width={768}
          height={1024}
        />
        <img
          src={bottleOutline.url}
          alt="Outline of the BADR signature bottle"
          className="anatomy-bottle-outline"
          loading="lazy"
          width={928}
          height={1152}
        />

        <svg className="anatomy-lines" viewBox="0 0 1000 900" aria-hidden="true">
          <path pathLength="1" d="M390 290 H250 Q215 290 190 265 L145 220" />
          <path pathLength="1" d="M610 465 H750 Q785 465 810 440 L855 395" />
          <path pathLength="1" d="M500 700 V790 H665" />
          <circle cx="390" cy="290" r="5" />
          <circle cx="610" cy="465" r="5" />
          <circle cx="500" cy="700" r="5" />
        </svg>

        <div className="anatomy-callout-top">
          <Callout index="01" note={anatomy.top.note} impression={anatomy.top.impression} align="left" />
        </div>
        <div className="anatomy-callout-heart">
          <Callout index="02" note={anatomy.heart.note} impression={anatomy.heart.impression} align="right" />
        </div>
        <div className="anatomy-callout-base">
          <Callout index="03 / Base" note={anatomy.base.note} impression={anatomy.base.impression} align="right" />
        </div>
      </div>
    </section>
  );
}