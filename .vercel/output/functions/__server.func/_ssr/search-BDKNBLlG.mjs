import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as productService } from "./productService-ChxUFONV.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as PackageSearch } from "../_libs/lucide-react.mjs";
import { n as StoreLayout } from "./StoreLayout-CAZLaRt9.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as ProductGrid } from "./ProductGrid-Df5HM1hh.mjs";
import { n as ErrorState, t as EmptyState } from "./states-BcOR7Vzi.mjs";
import { t as Route } from "./search-YUcIFk61.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-BDKNBLlG.js
var import_jsx_runtime = require_jsx_runtime();
function SearchResults() {
	const { q } = Route.useSearch();
	const query = useQuery({
		queryKey: ["search", q],
		queryFn: () => productService.search(q),
		enabled: q.length > 0
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-3",
				children: "Search results"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl md:text-4xl",
				children: q ? `“${q}”` : "What are you looking for?"
			}),
			q && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: query.data ? `${query.data.length} matching pieces` : "Searching the atelier…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: !q ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: PackageSearch,
					title: "Start with a word",
					description: "Try “abaya”, “linen”, “olive” or “kaftan”.",
					actionLabel: "Browse everything",
					actionTo: "/shop"
				}) : query.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorState, { onRetry: () => void query.refetch() }) : !query.isLoading && query.data?.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: PackageSearch,
					title: "No matches yet",
					description: "We couldn't find that piece. Browse the full collection instead.",
					actionLabel: "Shop all",
					actionTo: "/shop"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
					products: query.data ?? [],
					loading: query.isLoading,
					showRating: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-12 text-xs text-muted-foreground",
				children: [
					"Looking for something bespoke?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "underline",
						children: "Talk to the studio"
					}),
					"."
				]
			})
		]
	}) });
}
//#endregion
export { SearchResults as component };
