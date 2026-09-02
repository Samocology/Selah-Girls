import { h as createFileRoute, m as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-YmfqtJDY.js
var $$splitComponentImporter = () => import("./category._slug-BleWsyc4.mjs");
var Route = createFileRoute("/category/$slug")({
	head: ({ params }) => {
		const name = params.slug.replace(/-/g, " ");
		const title = `${name.replace(/\b\w/g, (c) => c.toUpperCase())} — Selah`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: `Shop Selah ${name}: modest, drape-first pieces cut in small runs in Lagos.`
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: `Shop the Selah ${name} edit.`
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
