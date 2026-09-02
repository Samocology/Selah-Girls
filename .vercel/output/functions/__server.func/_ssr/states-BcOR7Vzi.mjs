import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as TriangleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/states-BcOR7Vzi.js
var import_jsx_runtime = require_jsx_runtime();
function EmptyState({ icon: Icon, title, description, actionLabel, actionTo, onAction, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto grid size-16 place-items-center rounded-full bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-7 text-muted-foreground",
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 font-display text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: description
			}),
			actionLabel && actionTo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: actionTo,
				className: "mt-7 inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
				children: actionLabel
			}),
			actionLabel && onAction && !actionTo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onAction,
				className: "mt-7 inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
				children: actionLabel
			}),
			children
		]
	});
}
function ErrorState({ title = "Something went wrong", description = "We couldn't load this just now. Please try again.", onRetry }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto grid size-16 place-items-center rounded-full bg-destructive/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-7 text-destructive",
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 font-display text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: description
			}),
			onRetry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onRetry,
				className: "mt-7 inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface px-7 text-sm font-medium transition-colors hover:bg-muted",
				children: "Try again"
			})
		]
	});
}
function SectionHeading({ eyebrow, title, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow mb-3",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl md:text-4xl",
			children: title
		})] }), action]
	});
}
//#endregion
export { ErrorState as n, SectionHeading as r, EmptyState as t };
