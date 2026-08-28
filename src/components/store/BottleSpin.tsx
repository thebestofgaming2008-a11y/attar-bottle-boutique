import zafar from "@/assets/spin-oud-zafar.png";
import gulaab from "@/assets/spin-oud-gulaab.png";
import fitoor from "@/assets/spin-fitoor.png";
import dariya from "@/assets/spin-dariya.png";
import ulfat from "@/assets/spin-ulfat.png";

export const SPIN_BOTTLES = [
  { src: zafar, name: "Oud Zafar" },
  { src: gulaab, name: "Oud Gulaab" },
  { src: fitoor, name: "Fitoor" },
  { src: dariya, name: "Dariya" },
  { src: ulfat, name: "Ulfat" },
];

/**
 * All five signature bottles gliding sideways forever — a duplicated track
 * loops seamlessly; hidden scrollbars keep the strip clean.
 */
export function BottleSpin({ className = "" }: { className?: string }) {
  const row = [...SPIN_BOTTLES, ...SPIN_BOTTLES];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track items-end gap-14" style={{ animationDuration: "26s" }}>
        {row.map((b, i) => (
          <figure key={`${b.name}-${i}`} className="flex w-36 shrink-0 flex-col items-center gap-3">
            <img
              src={b.src}
              alt={i < SPIN_BOTTLES.length ? `BADR ${b.name} 6 ml roll-on attar bottle` : ""}
              aria-hidden={i >= SPIN_BOTTLES.length}
              className="w-full"
              loading={i >= SPIN_BOTTLES.length ? "lazy" : "eager"}
              draggable={false}
            />
            <figcaption className="text-[9px] uppercase tracking-[0.3em] text-background/50">
              {b.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
