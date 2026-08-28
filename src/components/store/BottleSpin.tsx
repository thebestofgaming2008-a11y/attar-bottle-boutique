import { useEffect, useRef, useState } from "react";
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

/** Half a rotation, in ms — the bottle swaps face while it is edge-on. */
const HALF_TURN = 1600;

/**
 * The signature bottle, spinning forever. Two faces of a 3D card carry
 * different labelled bottles; each face is swapped while it faces away,
 * so the bottle appears to keep turning and keeps revealing new designs.
 */
export function BottleSpin({ className = "" }: { className?: string }) {
  const [faces, setFaces] = useState([0, 1]);
  const step = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      step.current += 1;
      const n = step.current;
      setFaces((f) => {
        const next = (Math.max(f[0], f[1]) + 1) % SPIN_BOTTLES.length;
        // n even -> face A is visible, refresh the hidden face B, and vice versa.
        return n % 2 === 0 ? [f[0], next] : [next, f[1]];
      });
    }, HALF_TURN);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`bottle-spin-stage ${className}`}>
      <div className="bottle-spin">
        <img
          src={SPIN_BOTTLES[faces[0]].src}
          alt={`BADR ${SPIN_BOTTLES[faces[0]].name} 6 ml roll-on attar bottle`}
          className="bottle-spin-face"
        />
        <img
          src={SPIN_BOTTLES[faces[1]].src}
          alt=""
          aria-hidden
          className="bottle-spin-face bottle-spin-back"
        />
      </div>
    </div>
  );
}
