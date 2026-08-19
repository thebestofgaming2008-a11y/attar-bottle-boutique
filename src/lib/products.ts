import bottle from "@/assets/badr-bottle.png.asset.json";
import heroVideo from "@/assets/badr-hero.mp4.asset.json";
import imgZafar from "@/assets/sku-oud-zafar.jpg";
import imgGulaab from "@/assets/sku-oud-gulaab.jpg";
import imgFitoor from "@/assets/sku-fitoor.jpg";
import imgDariya from "@/assets/sku-dariya.jpg";
import imgUlfat from "@/assets/sku-ulfat.jpg";

export const BOTTLE_IMAGE = bottle.url;
export const HERO_VIDEO = heroVideo.url;

export type Product = {
  id: string;
  name: string;
  category: string;
  tag: string;
  hook: string;
  image: string;
  story: string;
  notes: string[];
  price: number;
  mrp: number;
  faqs: { q: string; a: string }[];
};

export const PRODUCTS: Product[] = [
  {
    id: "oud-zafar",
    name: "Oud Zafar",
    category: "Unisex Oud Parfum",
    tag: "Deep · Warm · Commanding",
    hook: "Oud, saffron and a fight worth winning.",
    image: imgZafar,
    story:
      "Bold oud and saffron sit at the centre, rose keeps it warm, sandalwood stays on the skin long after you've left the room.",
    notes: ["Oud", "Saffron", "Rose", "Amber", "Sandalwood"],
    price: 599,
    mrp: 899,
    faqs: [
      { q: "How long does it last?", a: "Built to stay close for 8+ hours depending on skin and weather." },
      { q: "What does it smell like?", a: "Deep oud and saffron with a soft rose warmth and a sandalwood drydown." },
      { q: "When should I wear it?", a: "Evenings, occasions, any day you're walking in to win something." },
    ],
  },
  {
    id: "oud-gulaab",
    name: "Oud Gulaab",
    category: "Unisex Floral Oud Parfum",
    tag: "Rose · Resin · Quiet confidence",
    hook: "Rose, oud and a slow exhale.",
    image: imgGulaab,
    story:
      "Turkish rose with a soft resinous oud, backed by sandalwood and musk that hang around till the night's over.",
    notes: ["Rose", "Oud", "Sandalwood", "Musk"],
    price: 599,
    mrp: 899,
    faqs: [
      { q: "How long does it last?", a: "Easily 6–8 hours — rose and oud both have staying power." },
      { q: "What does it smell like?", a: "Romantic but not sweet. Bright rose first, then a soft resinous oud." },
      { q: "Can I wear this every day?", a: "Yes, though it really comes alive in the evening." },
    ],
  },
  {
    id: "fitoor",
    name: "Fitoor",
    category: "Unisex Fruity Woody Parfum",
    tag: "Juicy · Woody · Everyday",
    hook: "Pineapple, vanilla and a little bit of obsession.",
    image: imgFitoor,
    story:
      "Juicy pineapple and apple lead, soft woods sit underneath, and a warm vanilla-musk trail closes it out.",
    notes: ["Pineapple", "Apple", "Vanilla", "Musk"],
    price: 499,
    mrp: 749,
    faqs: [
      { q: "How long does it last?", a: "6–8 hours, fresh through the day." },
      { q: "What does it smell like?", a: "Fruity and woody, sweet but not heavy." },
      { q: "Summer or winter?", a: "Both. Light enough for daily wear, warm enough for cooler months." },
    ],
  },
  {
    id: "dariya",
    name: "Dariya",
    category: "Unisex Fresh Aquatic Parfum",
    tag: "Clean · Citrus · Open water",
    hook: "Bergamot, vetiver and open water.",
    image: imgDariya,
    story:
      "Bergamot and mandarin open it up clean, vetiver carries it home — for the days you want to feel like you just stepped outside.",
    notes: ["Bergamot", "Mandarin", "Vetiver"],
    price: 499,
    mrp: 749,
    faqs: [
      { q: "How long does it last?", a: "Around 6 hours — freshies wear lighter by design." },
      { q: "What does it smell like?", a: "Clean citrus that dries down to an earthy vetiver." },
      { q: "When should I wear it?", a: "Mornings, workdays, gym bag." },
    ],
  },
  {
    id: "ulfat",
    name: "Ulfat",
    category: "Unisex Gourmand Vanilla Parfum",
    tag: "Sweet · Amber · Close",
    hook: "Vanilla, amber and being close to someone.",
    image: imgUlfat,
    story:
      "Lavender opens it, vanilla carries the heart, amber wraps it up warm — sweet without asking for permission.",
    notes: ["Lavender", "Vanilla", "Amber"],
    price: 499,
    mrp: 749,
    faqs: [
      { q: "How long does it last?", a: "Vanilla and amber both linger — expect 8+ hours." },
      { q: "What does it smell like?", a: "Warm, sweet, a little addictive — skin-warmed vanilla." },
      { q: "When should I wear it?", a: "Cold weather, date nights, anytime you want people to lean in." },
    ],
  },
];

export const FREE_SHIPPING_THRESHOLD = 999;
export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;