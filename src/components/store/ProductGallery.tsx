import { useState } from "react";
import { SCENE_IMAGES, type Product } from "@/lib/products";

export function ProductGallery({ product }: { product: Product }) {
  const scene = SCENE_IMAGES[product.id] ?? product.image;
  const images = [
    { src: product.image, alt: `${product.name} 6 ml attar bottle` },
    { src: scene, alt: `${product.name} fragrance campaign` },
  ];
  const [active, setActive] = useState(0);

  return (
    <section aria-label={`${product.name} gallery`} className="bg-secondary pt-24 sm:pt-28">
      <div className="sm:grid sm:grid-cols-2">
        {images.map((image, index) => (
          <figure
            key={image.src}
            className={`${index === active ? "block" : "hidden"} relative aspect-[4/5] overflow-hidden sm:block sm:aspect-[3/4]`}
          >
            {index === 0 ? (
              <div className="grid h-full place-items-center px-12 py-16 sm:px-16">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-contain"
                  fetchPriority="high"
                />
              </div>
            ) : (
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
            )}
          </figure>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 py-5 sm:hidden">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Show image ${index + 1}`}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
            className={`h-1.5 transition-all ${active === index ? "w-8 bg-foreground" : "w-4 bg-foreground/25"}`}
          />
        ))}
      </div>
    </section>
  );
}