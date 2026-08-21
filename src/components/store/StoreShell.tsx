import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { BADR_LOGO } from "./Hero";
import { useCart } from "./CartContext";
import { CartDrawer } from "./CartDrawer";

export function StoreShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <SiteHeader />
      {children}
      <CartDrawer />
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-foreground py-2.5 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-background">
      Free shipping over ₹999
    </div>
  );
}

function SiteHeader() {
  const cart = useCart();
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 bg-foreground px-5 text-background transition-all duration-300 ${
        shrunk ? "py-2" : "py-3.5"
      }`}
    >
      <Link to="/" className="justify-self-start">
        <img
          src={BADR_LOGO}
          alt="BADR"
          className={`w-auto object-contain transition-all duration-300 ${shrunk ? "h-4" : "h-5"}`}
        />
      </Link>
      <button
        onClick={() => cart.setOpen(true)}
        aria-label="Open cart"
        className="relative shrink-0 p-1"
      >
        <ShoppingBag className="h-5 w-5" />
        {cart.count > 0 && (
          <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-background px-1 text-[10px] font-semibold text-foreground">
            {cart.count}
          </span>
        )}
      </button>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground px-6 py-20 text-center text-background">
      <img src={BADR_LOGO} alt="BADR" className="mx-auto h-6 w-auto object-contain" />
      <p className="mt-5 font-display text-xl leading-none">Rare air.</p>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-background/60">
        Crafted for the relentless
      </p>
      <p className="mt-10 text-xs text-background/50">ESTD 1448 AH · Made in India</p>
      <div className="h-8" />
    </footer>
  );
}
