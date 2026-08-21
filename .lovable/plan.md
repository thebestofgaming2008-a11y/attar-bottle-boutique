# BADR — Homepage build-out to a finished, high-end store

## What the product doc gives us

The copy doc defines a fixed block per SKU: mood tag → one-line "it smells like" hook → short story → key notes → 3 FAQs, plus the brand line "Rare Air. Crafted for the Relentless." Three assets from it are currently unused on the site and are the strongest copy we have:

- Mood tags (Battlefields · Late nights / Evenings · Weddings / Workdays · Travel / Mornings · The commute / Date nights · Cold evenings)
- Name meanings — Fitoor = obsession, Dariya = river, Ulfat = affection
- The "Rare Air" positioning line

These get added to the product data and used across the homepage. Full story paragraphs and all three FAQs stay on the product pages; the homepage runs the trimmed versions.

## Homepage structure (tight conversion page)

```text
Announcement bar   Free shipping over 999
Sticky header      logo + cart count
Hero               black, wordmark, "Shop your scent.", small CTA, bottle
Video band         full-bleed looping master video
Brand statement    one short Rare Air line, lots of black space
Find your scent    mood picker, 2 taps -> product page
The collection     5 labelled bottles, price, quick add
The signature      one bottle, every scent + 6ml / 8hrs / 0% stats
Reviews            4.9 rating + quote row
Footer             wordmark, brand line, ESTD 1448 AH
```

### Find your scent

Two-tap picker built from the doc's mood tags. Step 1: "When are you wearing it?" (Evening & occasion / Everyday & work / Morning & fresh / Close & warm). Step 2: intensity (Bold / Soft). The result animates in as a single card — labelled bottle, name meaning, hook, price, and both "Add to bag" and "See the scent". No page reload, all client-side, 5 outcomes.

## What makes it feel high-end rather than half-finished

- **One typographic system, held consistently**: Archivo expanded display for every heading at a strict scale, Inter Tight for body, uppercase letterspaced eyebrows. No one-off sizes.
- **Section rhythm**: every section gets the same generous vertical breathing room and hairline top border, so the page reads as chapters, not stacked blocks. Black sections (hero, video, brand statement, footer) alternate with white ones so the scroll has a pulse.
- **Motion that earns attention, not confetti**: staggered `Reveal` entrance per section, a slow parallax drift on the signature bottle, number count-up on the 6ml / 8hrs / 0% stats, image scale-on-hover already in place, and a subtle sticky-header shrink after the hero. All guarded by `prefers-reduced-motion`.
- **Real product cards**: labelled bottle on a soft neutral field, name + mood tag + price with struck MRP, one square Add button. Identical card used in the picker result and the cart upsell.
- **Sticky mobile add-to-bag** on product pages so the buy action is never more than a thumb away.
- **Trust strip** under the collection: 0% alcohol · 6 ml roll-on · Free shipping over ₹999 · Made in India — small, monochrome, no icon clutter.

## Product pages

`src/routes/product.$id.tsx` — same Hero (headline swapped to the scent name), then the video band, then the full product section: labelled image, name meaning line, mood tag, price + qty + add to bag, key notes as chips, the full story paragraph, all three FAQs in an accordion, and a "The other four" row. This route is also what clears the two current TypeScript errors on the homepage, which exist only because `/product/$id` is not yet a route.

## Technical notes

- Extend `Product` in `src/lib/products.ts` with `mood` (the doc's mood tag) and `meaning` (name translation); fill all five from the doc.
- New components under `src/components/store/`: `ScentFinder.tsx`, `ProductCard.tsx`, `TrustStrip.tsx`, `Stat.tsx` (count-up), `Section.tsx` (shared spacing/border wrapper).
- Cart drawer switches from the generic bottle to `product.image`.
- Cart state lifts into a small context provider so the header, picker, product page, and drawer share one bag.
- Motion via CSS transitions and IntersectionObserver — no new animation dependency.
- Each route gets its own `head()` metadata; product pages use the scent name and hook.
- Verified at a 390px viewport with Playwright before hand-off.
