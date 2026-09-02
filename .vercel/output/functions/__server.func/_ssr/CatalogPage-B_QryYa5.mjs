import { r as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as formatPrice } from "./http-BiLM6Dn8.mjs";
import { t as productService } from "./productService-ChxUFONV.mjs";
import { O as PackageSearch, g as SlidersHorizontal, n as X } from "../_libs/lucide-react.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as ProductGrid } from "./ProductGrid-Df5HM1hh.mjs";
import { n as ErrorState, t as EmptyState } from "./states-BcOR7Vzi.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CatalogPage-B_QryYa5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var ALL_SIZES = [
	"XS",
	"S",
	"M",
	"L",
	"XL",
	"XXL"
];
var ALL_COLORS = [
	{
		name: "Olive",
		hex: "#6a7449"
	},
	{
		name: "Cream",
		hex: "#efe7d8"
	},
	{
		name: "Terracotta",
		hex: "#b76b4b"
	},
	{
		name: "Black",
		hex: "#20211f"
	},
	{
		name: "Sand",
		hex: "#d9c7ab"
	},
	{
		name: "Ivory",
		hex: "#f6f2e9"
	},
	{
		name: "Sage",
		hex: "#a3b295"
	},
	{
		name: "Charcoal",
		hex: "#3c3d3a"
	}
];
var PRICE_MAX = 25e4;
function toggle(list, value) {
	const current = list ?? [];
	return current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
}
function FilterPanel({ filters, onChange, onReset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold uppercase tracking-wider",
					children: "Filters"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onReset,
					className: "inline-flex items-center gap-1 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" }), " Clear all"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
				children: "Size"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: ALL_SIZES.map((size) => {
					const active = filters.sizes?.includes(size);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": active,
						onClick: () => onChange({ sizes: toggle(filters.sizes, size) }),
						className: cn("h-9 min-w-11 rounded-full border px-3 text-xs font-medium transition-colors", active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-surface hover:border-primary/40"),
						children: size
					}, size);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
				children: "Colour"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2.5",
				children: ALL_COLORS.map((color) => {
					const active = filters.colors?.includes(color.name);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": color.name,
						"aria-pressed": active,
						onClick: () => onChange({ colors: toggle(filters.colors, color.name) }),
						className: cn("size-8 rounded-full border-2 transition-transform", active ? "border-primary scale-110" : "border-border"),
						style: { backgroundColor: color.hex }
					}, color.name);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Max price"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 1e4,
					max: PRICE_MAX,
					step: 5e3,
					value: filters.maxPrice ?? 25e4,
					onChange: (event) => onChange({ maxPrice: Number(event.target.value) }),
					className: "mt-4 w-full accent-primary",
					"aria-label": "Maximum price"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: ["Up to ", formatPrice(filters.maxPrice ?? 25e4)]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Availability"
				}), [{
					key: "inStockOnly",
					label: "In stock only"
				}, {
					key: "onSaleOnly",
					label: "On sale"
				}].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex cursor-pointer items-center gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: Boolean(filters[option.key]),
						onChange: (event) => onChange({ [option.key]: event.target.checked }),
						className: "size-4 rounded border-border accent-primary"
					}), option.label]
				}, option.key))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
				children: "Rating"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex gap-2",
				children: [4, 4.5].map((rating) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": filters.minRating === rating,
					onClick: () => onChange({ minRating: filters.minRating === rating ? void 0 : rating }),
					className: cn("h-9 rounded-full border px-3 text-xs font-medium transition-colors", filters.minRating === rating ? "border-primary bg-primary text-primary-foreground" : "border-border bg-surface hover:border-primary/40"),
					children: [rating, "+ stars"]
				}, rating))
			})] })
		]
	});
}
var sortOptions = [
	{
		value: "featured",
		label: "Featured"
	},
	{
		value: "newest",
		label: "Newest"
	},
	{
		value: "best-selling",
		label: "Best selling"
	},
	{
		value: "price-asc",
		label: "Price: low to high"
	},
	{
		value: "price-desc",
		label: "Price: high to low"
	},
	{
		value: "rating",
		label: "Top rated"
	}
];
function CatalogPage({ eyebrow, title, description, baseFilters, viewMode = "grid" }) {
	const [filters, setFilters] = (0, import_react.useState)({ sort: "featured" });
	const merged = (0, import_react.useMemo)(() => ({
		...filters,
		...baseFilters
	}), [filters, baseFilters]);
	const query = useQuery({
		queryKey: ["products", merged],
		queryFn: () => productService.list(merged)
	});
	const change = (patch) => setFilters((current) => ({
		...current,
		...patch
	}));
	const reset = () => setFilters({ sort: filters.sort ?? "featured" });
	const activeCount = [
		filters.sizes?.length,
		filters.colors?.length,
		filters.inStockOnly ? 1 : 0,
		filters.onSaleOnly ? 1 : 0,
		filters.minRating ? 1 : 0,
		filters.maxPrice ? 1 : 0
	].reduce((sum, value) => sum + (value ?? 0), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-3",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl md:text-5xl",
						children: title
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: description
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center justify-between gap-4 border-y border-border py-3 md:mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTrigger, {
						className: "inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface px-4 text-xs font-medium lg:hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4" }),
							"Filters",
							activeCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-5 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground",
								children: activeCount
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
						side: "left",
						className: "w-[86vw] overflow-y-auto p-6 sm:max-w-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPanel, {
								filters,
								onChange: change,
								onReset: reset
							})
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: query.data ? `${query.data.length} pieces` : "Loading pieces"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "Sort"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: filters.sort ?? "featured",
						onChange: (event) => change({ sort: event.target.value }),
						className: "h-10 rounded-full border border-border bg-surface px-4 text-xs font-medium text-foreground",
						"aria-label": "Sort products",
						children: sortOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: option.value,
							children: option.label
						}, option.value))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPanel, {
							filters,
							onChange: change,
							onReset: reset
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: query.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorState, { onRetry: () => void query.refetch() }) : !query.isLoading && query.data?.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: PackageSearch,
					title: "Nothing matches those filters",
					description: "Try widening your price range or clearing a filter or two.",
					actionLabel: "Clear filters",
					onAction: reset
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
					products: query.data ?? [],
					loading: query.isLoading,
					columns: 3,
					showRating: true,
					viewMode
				}) })]
			})
		]
	});
}
//#endregion
export { CatalogPage as t };
