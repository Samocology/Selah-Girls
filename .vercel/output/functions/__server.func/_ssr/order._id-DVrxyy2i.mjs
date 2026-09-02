import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as formatPrice } from "./http-BiLM6Dn8.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { dt as Check } from "../_libs/lucide-react.mjs";
import { n as StoreLayout } from "./StoreLayout-CAZLaRt9.mjs";
import { t as Button } from "./button-BKNC97i9.mjs";
import { t as orderService } from "./orderService-DHkekNJi.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Route } from "./order._id-CsY6tp4H.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order._id-DVrxyy2i.js
var import_jsx_runtime = require_jsx_runtime();
function OrderPage() {
	const { id } = Route.useParams();
	const order = useQuery({
		queryKey: ["order", id],
		queryFn: () => orderService.byId(id)
	}).data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page max-w-3xl py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mt-6",
				children: "Order confirmed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: "Thank you for choosing Selah."
			}),
			order && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: [
					order.reference,
					" · ",
					formatPrice(order.total),
					" · arriving ",
					new Date(order.estimatedDelivery).toLocaleDateString("en-NG", {
						day: "numeric",
						month: "long"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 divide-y divide-border border-y border-border text-left",
				children: order.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.name,
							className: "size-16 object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									item.color,
									" · ",
									item.size,
									" · Qty ",
									item.quantity
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: formatPrice(item.price * item.quantity)
						})
					]
				}, item.slug))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						children: "Keep shopping"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/account",
						children: "View account"
					})
				})]
			})
		]
	}) });
}
//#endregion
export { OrderPage as component };
