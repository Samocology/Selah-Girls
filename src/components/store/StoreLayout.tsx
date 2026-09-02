import { useState, type ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { MobileBottomNav } from "./MobileBottomNav";
import { SearchOverlay } from "./SearchOverlay";

/**
 * Storefront chrome: sticky header on every breakpoint, fixed bottom navigation
 * on mobile, and the search overlay shared between the two.
 */
export function StoreLayout({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader onSearch={() => setSearchOpen(true)} />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <SiteFooter />
      <MobileBottomNav onSearch={() => setSearchOpen(true)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
