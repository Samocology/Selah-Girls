import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search, X, Clock, ArrowUpRight } from "lucide-react";
import { categories } from "@/data/catalog";
import { productService } from "@/services/productService";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

const RECENT_KEY = "selah.recent-searches";
const SUGGESTED = ["Satin maxi", "Abaya", "Linen set", "Chiffon scarf", "Leather tote"];

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const navigate = useNavigate();
  const [term, setTerm] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(RECENT_KEY);
      if (raw) setRecent(JSON.parse(raw) as string[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!term.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const handle = setTimeout(() => {
      productService
        .search(term)
        .then(setResults)
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    }, 220);
    return () => clearTimeout(handle);
  }, [term]);

  const matchingCategories = useMemo(() => {
    if (!term.trim()) return [];
    return categories.filter((category) =>
      category.name.toLowerCase().includes(term.trim().toLowerCase()),
    );
  }, [term]);

  function commit(value: string) {
    const next = [value, ...recent.filter((item) => item !== value)].slice(0, 5);
    setRecent(next);
    try {
      window.localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    onClose();
    void navigate({ to: "/search", search: { q: value } });
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 animate-fade" role="dialog" aria-modal="true" aria-label="Search">
      <button
        aria-label="Close search"
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative mx-auto flex h-full w-full max-w-3xl flex-col bg-background sm:h-auto sm:mt-16 sm:rounded-3xl sm:shadow-lift">
        <form
          className="flex items-center gap-3 border-b border-border px-4 py-4 sm:px-6"
          onSubmit={(event) => {
            event.preventDefault();
            if (term.trim()) commit(term.trim());
          }}
        >
          <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden />
          <input
            autoFocus
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder="Search dresses, scarves, SKU…"
            aria-label="Search products"
            className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
          {term && (
            <button
              type="button"
              onClick={() => setTerm("")}
              className="rounded-full px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </form>

        <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:max-h-[60vh]">
          {!term.trim() ? (
            <div className="space-y-7">
              {recent.length > 0 && (
                <section>
                  <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Recent searches
                  </h2>
                  <ul className="flex flex-wrap gap-2">
                    {recent.map((item) => (
                      <li key={item}>
                        <button
                          onClick={() => commit(item)}
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm transition-colors hover:border-primary/40"
                        >
                          <Clock className="size-3.5 text-muted-foreground" />
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              <section>
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Suggested
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {SUGGESTED.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => commit(item)}
                        className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-2 text-sm transition-colors hover:bg-secondary"
                      >
                        {item}
                        <ArrowUpRight className="size-3.5 text-muted-foreground" />
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Categories
                </h2>
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        to="/category/$slug"
                        params={{ slug: category.slug }}
                        onClick={onClose}
                        className="block rounded-xl border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/40"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ) : loading ? (
            <ul className="space-y-3">
              {[0, 1, 2].map((key) => (
                <li key={key} className="flex gap-3">
                  <Skeleton className="size-16 rounded-xl" />
                  <div className="flex-1 space-y-2 py-1">
                    <Skeleton className="h-3.5 w-2/3" />
                    <Skeleton className="h-3 w-1/4" />
                  </div>
                </li>
              ))}
            </ul>
          ) : results.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-display text-2xl">No results for "{term}"</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a shorter term, or browse the full collection.
              </p>
              <Link
                to="/shop"
                onClick={onClose}
                className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
              >
                Browse everything
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {matchingCategories.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {matchingCategories.map((category) => (
                    <li key={category.id}>
                      <Link
                        to="/category/$slug"
                        params={{ slug: category.slug }}
                        onClick={onClose}
                        className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium"
                      >
                        Category · {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <ul className="space-y-2">
                {results.slice(0, 6).map((product) => (
                  <li key={product.id}>
                    <Link
                      to="/product/$slug"
                      params={{ slug: product.slug }}
                      onClick={onClose}
                      className="flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-muted"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        loading="lazy"
                        width={64}
                        height={80}
                        className="size-16 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{product.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {product.category} · {product.sku}
                        </p>
                      </div>
                      <span className="text-sm">{formatPrice(product.price)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => commit(term.trim())}
                className="w-full rounded-full border border-border py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                See all {results.length} results
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
