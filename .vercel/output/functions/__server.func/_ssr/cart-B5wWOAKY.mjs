import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useCart } from "./WishlistContext-BedorS19.mjs";
import { r as formatPrice } from "./http-BiLM6Dn8.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Trash2, k as Minus, w as Plus } from "../_libs/lucide-react.mjs";
import { n as StoreLayout } from "./StoreLayout-CAZLaRt9.mjs";
import { t as Button } from "./button-BKNC97i9.mjs";
import { t as OrderSummary } from "./OrderSummary-CdAYkZOz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-B5wWOAKY.js
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const cart = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-10 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Your selection"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl md:text-5xl",
				children: "Shopping bag"
			}),
			cart.items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-y border-border py-20 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Your bag is waiting for something considered."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						children: "Continue shopping"
					})
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-10 lg:grid-cols-[1fr_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border border-y border-border",
					children: cart.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex gap-4 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.name,
							className: "size-28 object-cover sm:size-36"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$slug",
									params: { slug: item.slug },
									className: "font-medium hover:underline",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: [
										item.color,
										" · ",
										item.size
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": `Remove ${item.name}`,
									onClick: () => cart.remove(item.id),
									className: "text-muted-foreground hover:text-destructive",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "p-2",
											onClick: () => cart.setQuantity(item.id, item.quantity - 1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-8 text-center text-sm",
											children: item.quantity
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "p-2",
											onClick: () => cart.setQuantity(item.id, item.quantity + 1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3" })
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: formatPrice(item.price * item.quantity)
								})]
							})]
						})]
					}, item.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderSummary, {
					subtotal: cart.subtotal,
					discount: cart.discount,
					shipping: cart.shipping,
					total: cart.total,
					actionLabel: "Proceed to checkout",
					actionTo: "/checkout"
				})]
			})
		]
	}) });
}
//#endregion
export { CartPage as component };
