import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/types";
import { discountPercent, formatPrice } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { WishlistButton } from "./WishlistButton";
import { Rating } from "./Rating";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  showRating?: boolean;
  className?: string;
  listView?: boolean;
}

export function ProductCard({ product, showRating = false, className, listView = false }: ProductCardProps) {
  const { add } = useCart();
  const discount = discountPercent(product.price, product.oldPrice);
  const soldOut = product.stock === 0;
  const secondary = product.images[1];

  return (
    <article className={cn("group relative", listView && "md:grid md:grid-cols-[minmax(9rem,14rem)_1fr] md:gap-x-6", className)}>
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className={cn(
          "block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
          listView && "md:row-span-2",
        )}
      >
        <div className="relative overflow-hidden rounded-2xl bg-muted">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            width={800}
            height={1000}
            className={cn(
              "aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
              secondary && "group-hover:opacity-0",
              soldOut && "opacity-70",
            )}
          />
          {secondary && (
            <img
              src={secondary}
              alt=""
              aria-hidden
              loading="lazy"
              width={800}
              height={1000}
              className="absolute inset-0 aspect-4/5 w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}

          <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-2">
            <span className="flex flex-col items-start gap-1.5">
              {soldOut ? (
                <span className="rounded-full bg-foreground/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">
                  Sold out
                </span>
              ) : (
                <>
                  {discount > 0 && (
                    <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                      −{discount}%
                    </span>
                  )}
                  {product.newArrival && discount === 0 && (
                    <span className="rounded-full bg-surface/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
                      New
                    </span>
                  )}
                </>
              )}
            </span>
          </div>
        </div>
      </Link>

      <WishlistButton
        productId={product.id}
        productName={product.name}
        className="absolute right-3 top-3"
      />

      {!soldOut && (
        <button
          type="button"
          onClick={() => add(product)}
          className="absolute inset-x-3 bottom-[5.5rem] hidden h-11 items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-primary-foreground opacity-0 shadow-soft transition-all duration-300 group-hover:opacity-100 group-focus-within:opacity-100 md:flex"
        >
          <ShoppingBag className="size-4" strokeWidth={1.75} />
          Quick add
        </button>
      )}

      <div className={cn("mt-3.5 flex items-start justify-between gap-3", listView && "md:mt-0 md:self-center")}>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-medium">
            <Link to="/product/$slug" params={{ slug: product.slug }}>
              {product.name}
            </Link>
          </h3>
          <p className="mt-0.5 text-xs capitalize text-muted-foreground">{product.subcategory}</p>
          {showRating && <Rating value={product.rating} count={product.reviewsCount} className="mt-1.5" />}
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="text-sm font-medium">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
        </div>
        {!soldOut && (
          <button
            type="button"
            onClick={() => add(product)}
            aria-label={`Add ${product.name} to bag`}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/20 bg-primary text-primary-foreground shadow-soft transition-all active:scale-95 md:hidden"
          >
            <ShoppingBag className="size-[1.05rem]" strokeWidth={1.8} />
          </button>
        )}
      </div>
    </article>
  );
}
