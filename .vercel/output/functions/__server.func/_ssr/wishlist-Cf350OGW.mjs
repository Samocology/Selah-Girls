import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as useWishlist } from "./WishlistContext-BedorS19.mjs";
import { t as productService } from "./productService-ChxUFONV.mjs";
import { U as Heart } from "../_libs/lucide-react.mjs";
import { n as StoreLayout } from "./StoreLayout-CAZLaRt9.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as ProductGrid } from "./ProductGrid-Df5HM1hh.mjs";
import { r as SectionHeading, t as EmptyState } from "./states-BcOR7Vzi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-Cf350OGW.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistPage() {
	const { ids, clear } = useWishlist();
	const query = useQuery({
		queryKey: ["products", "all"],
		queryFn: () => productService.list()
	});
	const saved = (query.data ?? []).filter((product) => ids.includes(product.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8 md:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Saved for later",
			title: "Your wishlist",
			action: saved.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: clear,
				className: "text-xs uppercase tracking-[0.14em] text-muted-foreground underline",
				children: "Clear all"
			}) : null
		}), ids.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: Heart,
			title: "Nothing saved yet",
			description: "Tap the heart on any piece to keep it here while you decide.",
			actionLabel: "Browse the collection",
			actionTo: "/shop"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
			products: saved,
			loading: query.isLoading,
			showRating: true
		})]
	}) });
}
//#endregion
export { WishlistPage as component };
