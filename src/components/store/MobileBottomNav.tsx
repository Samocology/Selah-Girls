import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Search, LayoutGrid, Heart, User, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

interface MobileBottomNavProps {
  onSearch: () => void;
}

export function MobileBottomNav({ onSearch }: MobileBottomNavProps) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { count } = useWishlist();
  const { count: cartCount } = useCart();

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const itemClass = (active: boolean) =>
    cn(
      "flex flex-col items-center gap-1 rounded-2xl px-3 py-1.5 text-[11px] font-medium transition-colors",
      active ? "text-accent" : "text-muted-foreground",
    );

  const iconWrap = (active: boolean) =>
    cn(
      "grid size-9 place-items-center rounded-full transition-all duration-300",
      active ? "bg-primary scale-105" : "scale-100",
    );

  return (
    <nav
      aria-label="Primary"
      className="safe-bottom fixed inset-x-2 bottom-2 z-50 rounded-2xl border border-white/70 bg-[rgb(255_253_253_/_0.84)] pt-1.5 shadow-nav backdrop-blur-2xl md:hidden"
    >
      <ul className="grid grid-cols-6 px-1">
        <li className="grid place-items-center">
          <Link to="/" aria-label="Home" className={itemClass(isActive("/"))}>
            <span className={iconWrap(isActive("/"))}>
              <Home className="size-5" strokeWidth={1.75} aria-hidden />
            </span>
            Home
          </Link>
        </li>
        <li className="grid place-items-center">
          <Link to="/cart" aria-label="Shopping bag" className={itemClass(isActive("/cart"))}>
            <span className={cn(iconWrap(isActive("/cart")), "relative")}>
              <ShoppingBag className="size-5" strokeWidth={1.75} aria-hidden />
              {cartCount > 0 && <span className="absolute -right-1 -top-1 grid min-w-4 place-items-center rounded-full bg-accent px-1 text-[9px] font-semibold text-accent-foreground">{cartCount}</span>}
            </span>
            Bag
          </Link>
        </li>
        <li className="grid place-items-center">
          <button
            type="button"
            onClick={onSearch}
            aria-label="Open search"
            className={itemClass(isActive("/search"))}
          >
            <span className={iconWrap(isActive("/search"))}>
              <Search className="size-5" strokeWidth={1.75} aria-hidden />
            </span>
            Search
          </button>
        </li>
        <li className="grid place-items-center">
          <Link to="/shop" aria-label="Shop" className={itemClass(isActive("/shop"))}>
            <span className={iconWrap(isActive("/shop"))}>
              <LayoutGrid className="size-5" strokeWidth={1.75} aria-hidden />
            </span>
            Shop
          </Link>
        </li>
        <li className="grid place-items-center">
          <Link to="/wishlist" aria-label="Wishlist" className={itemClass(isActive("/wishlist"))}>
            <span className={cn(iconWrap(isActive("/wishlist")), "relative")}>
              <Heart className="size-5" strokeWidth={1.75} aria-hidden />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-accent text-[9px] font-semibold text-accent-foreground">
                  {count}
                </span>
              )}
            </span>
            Wishlist
          </Link>
        </li>
        <li className="grid place-items-center">
          <Link to="/account" aria-label="Account" className={itemClass(isActive("/account"))}>
            <span className={iconWrap(isActive("/account"))}>
              <User className="size-5" strokeWidth={1.75} aria-hidden />
            </span>
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
}
