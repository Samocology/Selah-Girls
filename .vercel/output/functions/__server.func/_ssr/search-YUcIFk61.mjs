import { h as createFileRoute, m as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-YUcIFk61.js
var $$splitComponentImporter = () => import("./search-BDKNBLlG.mjs");
var Route = createFileRoute("/search")({
	validateSearch: (search) => ({ q: typeof search["q"] === "string" ? search["q"] : "" }),
	head: () => ({ meta: [
		{ title: "Search — Selah" },
		{
			name: "description",
			content: "Search the Selah catalogue by piece, fabric, colour or collection."
		},
		{
			property: "og:title",
			content: "Search — Selah"
		},
		{
			property: "og:description",
			content: "Find your next Selah piece."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
