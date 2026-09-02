import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as StoreLayout } from "./StoreLayout-CAZLaRt9.mjs";
import { t as editorial_default } from "./editorial-CcLXhPq3.mjs";
import { t as promo_default } from "./promo-AAm1oqP7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CHqY_-iV.js
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		title: "Faith in every thread",
		body: "We believe faith and fashion can exist beautifully together. Every piece is designed to help women wear what they believe."
	},
	{
		title: "Intentional living",
		body: "Selah is a moment to pause, reflect, and consider. Our clothing is a reminder to slow down and keep Christ at the centre."
	},
	{
		title: "A set-apart community",
		body: "We are creating space for women of God to look good, feel good, and encourage one another as they live boldly for Jesus."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-10 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4",
					children: "Our story"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl",
					children: "Fashion for the woman who chooses to live set apart."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base",
					children: "Selah Girl Society was founded by two women who love Jesus and believe faith and fashion can exist beautifully together. We create trendy Christian basics for women who want to live intentionally, boldly, and unapologetically for Jesus."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-8 max-w-2xl border-l-2 border-accent pl-5 font-display text-2xl leading-tight md:text-3xl",
					children: "Pause. Reflect. Wear. Declare."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page grid gap-6 pb-6 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: editorial_default,
				alt: "Selah studio in Lagos",
				loading: "lazy",
				className: "rounded-3xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: promo_default,
				alt: "Selah campaign imagery",
				loading: "lazy",
				className: "rounded-3xl"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page py-12 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-10 md:grid-cols-3",
				children: pillars.map((pillar, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl text-accent",
						children: String(index + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-xl",
						children: pillar.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: pillar.body
					})
				] }, pillar.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page pb-16 md:pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground md:px-16 md:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl",
						children: "Welcome to the society"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-sm opacity-85",
						children: "A community for the woman of God who wants to look good, feel good, and keep Christ at the centre. Pause, reflect, wear, and declare it with us."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "mt-8 inline-flex h-12 items-center rounded-full bg-background px-8 text-sm font-medium text-foreground transition-opacity hover:opacity-90",
						children: "Shop new season"
					})
				]
			})
		})
	] });
}
//#endregion
export { About as component };
