import { HERO_VIDEO } from "@/lib/products";

export function VideoBand() {
  return (
    <section className="bg-foreground px-0 pb-16 pt-4">
      <video
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-auto w-full object-cover"
      />
    </section>
  );
}
