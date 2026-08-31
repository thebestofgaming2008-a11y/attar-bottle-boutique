import bottle from "@/assets/badr-bottle.png.asset.json";
import heroVideo from "@/assets/badr-hero.mp4.asset.json";
import imgZafar from "@/assets/sku-oud-zafar.jpg";
import imgGulaab from "@/assets/sku-oud-gulaab.jpg";
import imgFitoor from "@/assets/sku-fitoor.jpg";
import imgDariya from "@/assets/sku-dariya.jpg";
import imgUlfat from "@/assets/sku-ulfat.jpg";
import sceneZafar from "@/assets/scene-oud-zafar.jpg";
import sceneGulaab from "@/assets/scene-oud-gulaab.jpg";
import sceneFitoor from "@/assets/scene-fitoor.jpg";
import sceneDariya from "@/assets/scene-dariya.jpg";
import sceneUlfat from "@/assets/scene-ulfat.jpg";
import notesZafar from "@/assets/notes-zafar.png";
import notesGulaab from "@/assets/notes-gulaab.png";
import notesFitoor from "@/assets/notes-fitoor.png";
import notesDariya from "@/assets/notes-dariya.png";
import notesUlfat from "@/assets/notes-ulfat.png";
import baseSandalwood from "@/assets/note-base-sandalwood.png";
import baseVanilla from "@/assets/note-base-vanilla.png";
import baseVetiver from "@/assets/note-base-vetiver.png";
import baseAmber from "@/assets/note-base-amber.png";
import anatomyZafar from "@/assets/anatomy-oud-zafar.jpg";
import anatomyGulaab from "@/assets/anatomy-oud-gulaab.jpg";
import anatomyFitoor from "@/assets/anatomy-fitoor.jpg";
import anatomyDariya from "@/assets/anatomy-dariya.jpg";
import anatomyUlfat from "@/assets/anatomy-ulfat.jpg";

/** Cinematic poster per scent, keyed by product id. */
export const SCENE_IMAGES: Record<string, string> = {
  "oud-zafar": sceneZafar,
  "oud-gulaab": sceneGulaab,
  fitoor: sceneFitoor,
  dariya: sceneDariya,
  ulfat: sceneUlfat,
};

export const BOTTLE_IMAGE = bottle.url;
export const HERO_VIDEO = heroVideo.url;

export type Occasion = "evening" | "everyday" | "morning" | "close";

export type AnatomyCallout = {
  note: string;
  impression: string;
};

export type FragranceAnatomy = {
  theme: "ember" | "crimson" | "gold" | "marine" | "amber";
  top: AnatomyCallout;
  heart: AnatomyCallout;
  base: AnatomyCallout;
  noteImage: string;
  baseImage: string;
  posterImage: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  tag: string;
  /** Mood tag straight from the product copy doc. */
  mood: string;
  /** What the name means, where it has a meaning. */
  meaning?: string;
  hook: string;
  image: string;
  story: string;
  notes: string[];
  price: number;
  mrp: number;
  occasion: Occasion;
  intensity: "bold" | "soft";
  anatomy: FragranceAnatomy;
  faqs: { q: string; a: string }[];
};

export const PRODUCTS: Product[] = [
  {
    id: "oud-zafar",
    name: "Oud Zafar",
    category: "Unisex Oud Parfum",
    tag: "Deep · Warm · Commanding",
    mood: "Battlefields · Late nights · The ones who don't back down",
    occasion: "evening",
    intensity: "bold",
    hook: "Oud, saffron and a fight worth winning.",
    image: imgZafar,
    story:
      "Bold oud and saffron sit at the centre, rose keeps it warm, sandalwood stays on the skin long after you've left the room.",
    notes: ["Oud", "Saffron", "Rose", "Amber", "Sandalwood"],
    anatomy: {
      theme: "ember",
      top: { note: "Saffron", impression: "A hot, leathery spark" },
      heart: { note: "Rose & oud", impression: "Dark warmth with authority" },
      base: { note: "Sandalwood", impression: "Creamy, lasting depth" },
      noteImage: notesZafar,
      posterImage: anatomyZafar,
      baseImage: baseSandalwood,
    },
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
    mood: "Evenings · Weddings · The quiet kind of confidence",
    occasion: "evening",
    intensity: "soft",
    hook: "Rose, oud and a slow exhale.",
    image: imgGulaab,
    story:
      "Turkish rose with a soft resinous oud, backed by sandalwood and musk that hang around till the night's over.",
    notes: ["Rose", "Oud", "Sandalwood", "Musk"],
    anatomy: {
      theme: "crimson",
      top: { note: "Turkish rose", impression: "Velvety, never delicate" },
      heart: { note: "Resinous oud", impression: "Calm, smoky confidence" },
      base: { note: "Sandalwood", impression: "Soft warmth after dark" },
      noteImage: notesGulaab,
      posterImage: anatomyGulaab,
      baseImage: baseSandalwood,
    },
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
    mood: "Workdays · Travel · The everyday win",
    meaning: "Fitoor means obsession — the good kind.",
    occasion: "everyday",
    intensity: "bold",
    hook: "Pineapple, vanilla and a little bit of obsession.",
    image: imgFitoor,
    story:
      "Juicy pineapple and apple lead, soft woods sit underneath, and a warm vanilla-musk trail closes it out.",
    notes: ["Pineapple", "Apple", "Vanilla", "Musk"],
    anatomy: {
      theme: "gold",
      top: { note: "Pineapple", impression: "Bright, juicy impact" },
      heart: { note: "Crisp apple", impression: "Fresh addictive energy" },
      base: { note: "Vanilla & musk", impression: "A smooth skin-warm trail" },
      noteImage: notesFitoor,
      posterImage: anatomyFitoor,
      baseImage: baseVanilla,
    },
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
    mood: "Mornings · The commute · Coming up for air",
    meaning: "Dariya means river — and it wears like one.",
    occasion: "morning",
    intensity: "soft",
    hook: "Bergamot, vetiver and open water.",
    image: imgDariya,
    story:
      "Bergamot and mandarin open it up clean, vetiver carries it home — for the days you want to feel like you just stepped outside.",
    notes: ["Bergamot", "Mandarin", "Vetiver"],
    anatomy: {
      theme: "marine",
      top: { note: "Bergamot", impression: "Clean citrus lift" },
      heart: { note: "Mandarin", impression: "Sunlit, fluid freshness" },
      base: { note: "Vetiver", impression: "Cool earth after rain" },
      noteImage: notesDariya,
      posterImage: anatomyDariya,
      baseImage: baseVetiver,
    },
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
    mood: "Date nights · Cold evenings · Being someone's favourite",
    meaning: "Ulfat means affection.",
    occasion: "close",
    intensity: "soft",
    hook: "Vanilla, amber and being close to someone.",
    image: imgUlfat,
    story:
      "Lavender opens it, vanilla carries the heart, amber wraps it up warm — sweet without asking for permission.",
    notes: ["Lavender", "Vanilla", "Amber"],
    anatomy: {
      theme: "amber",
      top: { note: "Lavender", impression: "Aromatic, quiet clarity" },
      heart: { note: "Vanilla", impression: "Warm without being sweet" },
      base: { note: "Amber", impression: "Golden, close and lingering" },
      noteImage: notesUlfat,
      posterImage: anatomyUlfat,
      baseImage: baseAmber,
    },
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