import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { PRODUCTS } from "@/lib/products";

export type CartLine = {
  id: string;
  name: string;
  image: string;
  price: number;
  mrp: number;
  qty: number;
};

type CartValue = {
  lines: CartLine[];
  subtotal: number;
  count: number;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const CartCtx = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);

  const add = useCallback((id: string, qty = 1) => {
    setItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + qty }));
    setOpen(true);
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
      Object.entries(items).flatMap(([id, qty]) => {
        const p = PRODUCTS.find((x) => x.id === id);
        if (!p) return [];
        return [{ id, name: p.name, image: p.image, price: p.price, mrp: p.mrp, qty }];
      }),
    [items],
  );

  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const count = lines.reduce((s, l) => s + l.qty, 0);

  const value = useMemo(
    () => ({ lines, subtotal, count, add, setQty, open, setOpen }),
    [lines, subtotal, count, add, setQty, open],
  );

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
