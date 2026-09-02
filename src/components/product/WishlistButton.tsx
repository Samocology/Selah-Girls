import { Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useWishlist } from "@/context/WishlistContext";

interface WishlistButtonProps {
  productId: string;
  productName?: string;
  className?: string;
}

export function WishlistButton({ productId, productName, className }: WishlistButtonProps) {
  const { has, toggle } = useWishlist();
  const [beat, setBeat] = useState(false);
  const saved = has(productId);

  return (
    <button
      type="button"
      aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
      aria-pressed={saved}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggle(productId, productName);
        setBeat(true);
        setTimeout(() => setBeat(false), 360);
      }}
      className={cn(
        "grid size-10 place-items-center rounded-full border border-border/60 bg-surface/85 text-foreground backdrop-blur transition-colors hover:bg-surface",
        className,
      )}
    >
      <Heart
        className={cn("size-4.5", saved && "fill-accent text-accent", beat && "animate-pop")}
        strokeWidth={1.75}
      />
    </button>
  );
}
