import { useCallback, useMemo, useState } from "react";
import { PRODUCTS } from "@/lib/products";

export type CartLine = {
  id: string;
  name: string;
  price: number;
  mrp: number;
  qty: number;
};

export function useCart() {
  const [items, setItems] = useState<Record<string, number>>({});

  const add = useCallback((id: string, qty = 1) => {
    setItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + qty }));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  }, []);

  const lines = useMemo<CartLine[]>(
    () =>
      Object.entries(items).map(([id, qty]) => {
        const p = PRODUCTS.find((x) => x.id === id)!;
        return { id, name: p.name, price: p.price, mrp: p.mrp, qty };
      }),
    [items],
  );

  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const count = lines.reduce((s, l) => s + l.qty, 0);

  return { lines, subtotal, count, add, setQty };
}