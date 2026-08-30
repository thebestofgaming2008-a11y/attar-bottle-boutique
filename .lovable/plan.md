# Product-first fragrance pages

## Page flow

1. **SKU image gallery** — open immediately on the selected fragrance, using its clean bottle image and cinematic campaign image in a swipeable mobile gallery / two-column desktop layout.
2. **Product details and purchase** — name, category, mood, hook, notes, price, quantity, add to bag, shipping and returns.
3. **Fragrance anatomy** — a full-height gradient composition unique to each SKU:
   - a line-art silhouette of the signature bottle in the center
   - top and heart ingredients placed inside the silhouette
   - fine arrows leading to short sensory descriptions around it
   - the base ingredient enlarged behind the bottle, with its own label and arrow
   - restrained scroll reveals so the diagram assembles as it enters view
4. **Questions and other scents** — retain the FAQ and cross-sell sections after the anatomy poster.

## Scent-specific anatomy

- **Oud Zafar:** saffron and rose inside; sandalwood behind; deep oud-brown / ember gradient.
- **Oud Gulaab:** rose and oud inside; sandalwood behind; crimson / near-black gradient.
- **Fitoor:** pineapple and apple inside; vanilla and musk foundation; charcoal / fruit-gold gradient.
- **Dariya:** bergamot and mandarin inside; vetiver behind; marine teal / citrus-light gradient.
- **Ulfat:** lavender and vanilla inside; amber behind; warm amber / muted violet gradient.

## Technical details

- Extend product data with structured top, heart, and base-note callouts plus a semantic visual theme.
- Build reusable `ProductGallery` and `FragranceAnatomy` components rather than duplicating markup per SKU.
- Derive a transparent line-art bottle silhouette from the existing correct bottle asset, preserving its exact shape.
- Remove the existing product hero and video from product pages only; the homepage remains unchanged.
- Keep the mobile sticky add-to-bag and existing shared cart behavior.
- Add reduced-motion handling and verify the complete flow at mobile and desktop widths.
