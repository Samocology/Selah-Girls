import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as productService } from "./productService-ChxUFONV.mjs";
import { n as StoreLayout } from "./StoreLayout-CAZLaRt9.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as ProductGrid } from "./ProductGrid-Df5HM1hh.mjs";
import { n as ErrorState, r as SectionHeading } from "./states-BcOR7Vzi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-arrivals-jUSkDnHe.js
var import_jsx_runtime = require_jsx_runtime();
function NewArrivals() {
	const query = useQuery({
		queryKey: ["products", "new-arrivals"],
		queryFn: () => productService.newArrivals()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8 md:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Just landed",
			title: "New arrivals"
		}), query.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorState, { onRetry: () => void query.refetch() }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
			products: query.data ?? [],
			loading: query.isLoading,
			showRating: true
		})]
	}) });
}
//#endregion
export { NewArrivals as component };
