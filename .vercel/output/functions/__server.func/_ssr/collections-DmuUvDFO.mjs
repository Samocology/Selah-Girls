import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { xt as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as StoreLayout, t as Skeleton } from "./StoreLayout-CAZLaRt9.mjs";
import { t as editorial_default } from "./editorial-CcLXhPq3.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { r as SectionHeading } from "./states-BcOR7Vzi.mjs";
import { t as categoryService } from "./categoryService-Ddiz9tCV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections-DmuUvDFO.js
var import_jsx_runtime = require_jsx_runtime();
function Collections() {
	const cats = useQuery({
		queryKey: ["categories", "counts"],
		queryFn: () => categoryService.withCounts()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Curated edits",
				title: "Collections"
			}),
			cats.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2",
				children: Array.from({ length: 6 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "aspect-[16/10] w-full rounded-3xl" }, index))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2",
				children: (cats.data ?? []).map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/category/$slug",
					params: { slug: category.slug },
					className: "group relative overflow-hidden rounded-3xl bg-muted " + (index % 3 === 0 ? "md:col-span-2" : ""),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: category.image,
							alt: category.name,
							loading: "lazy",
							className: "aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:aspect-[16/9]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-6 text-background md:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] uppercase tracking-[0.18em] opacity-80",
									children: [category.count, " pieces"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-2xl md:text-3xl",
									children: category.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 max-w-md text-sm opacity-85",
									children: category.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-2 text-sm font-medium",
									children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
								})
							]
						})
					]
				}, category.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16 grid items-center gap-8 rounded-3xl border border-border bg-surface p-6 md:grid-cols-2 md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: editorial_default,
					alt: "Selah atelier",
					loading: "lazy",
					className: "rounded-2xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-3",
						children: "Made slowly"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl",
						children: "Small runs, natural fibres"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: "Every Selah collection begins with fabric — crepe, linen, silk-touch viscose — chosen to drape rather than cling. We cut in limited quantities so each piece keeps its character."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "mt-7 inline-flex h-12 items-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Shop the collection"
					})
				] })]
			})
		]
	}) });
}
//#endregion
export { Collections as component };
