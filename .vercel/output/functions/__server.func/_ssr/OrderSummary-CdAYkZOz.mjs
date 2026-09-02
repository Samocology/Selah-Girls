import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as formatPrice } from "./http-BiLM6Dn8.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-BKNC97i9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/OrderSummary-CdAYkZOz.js
var import_jsx_runtime = require_jsx_runtime();
function OrderSummary({ subtotal, discount = 0, shipping, total, actionLabel, actionTo, onAction }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "border border-border bg-card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Your summary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 space-y-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Subtotal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: formatPrice(subtotal) })]
					}),
					discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Discount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: ["-", formatPrice(discount)] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Delivery"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: shipping ? formatPrice(shipping) : "Free" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between border-t border-border pt-4 text-base font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: formatPrice(total) })]
					})
				]
			}),
			actionLabel && (actionTo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: actionTo,
					children: actionLabel
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: onAction,
				className: "mt-6 w-full",
				children: actionLabel
			}))
		]
	});
}
//#endregion
export { OrderSummary as t };
