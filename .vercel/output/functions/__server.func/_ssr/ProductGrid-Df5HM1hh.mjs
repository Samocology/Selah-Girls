import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as useWishlist, r as useCart } from "./WishlistContext-BedorS19.mjs";
import { n as discountPercent, r as formatPrice } from "./http-BiLM6Dn8.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { U as Heart, _ as ShoppingBag, m as Star } from "../_libs/lucide-react.mjs";
import { t as Skeleton } from "./StoreLayout-CAZLaRt9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductGrid-Df5HM1hh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WishlistButton({ productId, productName, className }) {
	const { has, toggle } = useWishlist();
	const [beat, setBeat] = (0, import_react.useState)(false);
	const saved = has(productId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": saved ? "Remove from wishlist" : "Save to wishlist",
		"aria-pressed": saved,
		onClick: (event) => {
			event.preventDefault();
			event.stopPropagation();
			toggle(productId, productName);
			setBeat(true);
			setTimeout(() => setBeat(false), 360);
		},
		className: cn("grid size-10 place-items-center rounded-full border border-border/60 bg-surface/85 text-foreground backdrop-blur transition-colors hover:bg-surface", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
			className: cn("size-4.5", saved && "fill-accent text-accent", beat && "animate-pop"),
			strokeWidth: 1.75
		})
	});
}
function Rating({ value, count, size = "sm", className }) {
	const iconSize = size === "sm" ? "size-3.5" : "size-4";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-1.5", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex",
				"aria-hidden": true,
				children: [
					1,
					2,
					3,
					4,
					5
				].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					className: cn(iconSize, star <= Math.round(value) ? "fill-accent text-accent" : "fill-transparent text-muted-foreground/50"),
					strokeWidth: 1.5
				}, star))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs text-muted-foreground",
				children: [value.toFixed(1), count !== void 0 && ` (${count})`]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: `Rated ${value} out of 5`
			})
		]
	});
}
function ProductCard({ product, showRating = false, className, listView = false }) {
	const { add } = useCart();
	const discount = discountPercent(product.price, product.oldPrice);
	const soldOut = product.stock === 0;
	const secondary = product.images[1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group relative", listView && "md:grid md:grid-cols-[minmax(9rem,14rem)_1fr] md:gap-x-6", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/product/$slug",
				params: { slug: product.slug },
				className: cn("block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background", listView && "md:row-span-2"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-2xl bg-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.images[0],
							alt: product.name,
							loading: "lazy",
							width: 800,
							height: 1e3,
							className: cn("aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105", secondary && "group-hover:opacity-0", soldOut && "opacity-70")
						}),
						secondary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: secondary,
							alt: "",
							"aria-hidden": true,
							loading: "lazy",
							width: 800,
							height: 1e3,
							className: "absolute inset-0 aspect-4/5 w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex flex-col items-start gap-1.5",
								children: soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-foreground/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-background",
									children: "Sold out"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground",
									children: [
										"−",
										discount,
										"%"
									]
								}), product.newArrival && discount === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-surface/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider",
									children: "New"
								})] })
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistButton, {
				productId: product.id,
				productName: product.name,
				className: "absolute right-3 top-3"
			}),
			!soldOut && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => add(product),
				className: "absolute inset-x-3 bottom-[5.5rem] hidden h-11 items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-primary-foreground opacity-0 shadow-soft transition-all duration-300 group-hover:opacity-100 group-focus-within:opacity-100 md:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
					className: "size-4",
					strokeWidth: 1.75
				}), "Quick add"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("mt-3.5 flex items-start justify-between gap-3", listView && "md:mt-0 md:self-center"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "truncate text-sm font-medium",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug",
								params: { slug: product.slug },
								children: product.name
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs capitalize text-muted-foreground",
							children: product.subcategory
						}),
						showRating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, {
							value: product.rating,
							count: product.reviewsCount,
							className: "mt-1.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1.5 flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: formatPrice(product.price)
							}), product.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground line-through",
								children: formatPrice(product.oldPrice)
							})]
						})
					]
				}), !soldOut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => add(product),
					"aria-label": `Add ${product.name} to bag`,
					className: "grid size-11 shrink-0 place-items-center rounded-full border border-primary/20 bg-primary text-primary-foreground shadow-soft transition-all active:scale-95 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
						className: "size-[1.05rem]",
						strokeWidth: 1.8
					})
				})]
			})
		]
	});
}
function ProductGridSkeleton({ count = 8, columns = 4 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6", columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3", "md:grid-cols-3"),
		children: Array.from({ length: count }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "aspect-4/5 w-full rounded-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3.5 w-3/4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-1/3" })
			]
		}, index))
	});
}
function ProductGrid({ products, loading, showRating, columns = 4, skeletonCount = 8, viewMode = "grid" }) {
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGridSkeleton, {
		count: skeletonCount,
		columns
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(viewMode === "list" ? "grid grid-cols-1 gap-6" : "grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-6", viewMode === "grid" && (columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")),
		children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
			product,
			showRating: Boolean(showRating),
			listView: viewMode === "list"
		}, product.id))
	});
}
//#endregion
export { Rating as n, ProductGrid as t };
