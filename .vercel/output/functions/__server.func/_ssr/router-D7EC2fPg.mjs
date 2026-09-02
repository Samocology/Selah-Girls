import { r as __toESM } from "../_runtime.mjs";
import { n as supabase } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as WishlistProvider, t as CartProvider } from "./WishlistContext-BedorS19.mjs";
import { _ as Link, b as useRouter, c as HeadContent, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, m as lazyRouteComponent, p as Outlet, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AuthProvider } from "./AuthContext-BtY1UeRs.mjs";
import { n as QueryClientProvider, r as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as Route$15 } from "./admin-BrMsFM9i.mjs";
import { t as Route$16 } from "./category._slug-YmfqtJDY.mjs";
import { t as Route$17 } from "./order._id-CsY6tp4H.mjs";
import { t as Route$18 } from "./product._slug-D_Gjc--O.mjs";
import { t as Route$19 } from "./search-YUcIFk61.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D7EC2fPg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BkPAV4Pd.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var tables = [
	"products",
	"orders",
	"customers"
];
function RealtimeSync() {
	const queryClient = useQueryClient();
	(0, import_react.useEffect)(() => {
		const client = supabase;
		if (!client) return;
		const channel = client.channel("selah-store-updates");
		for (const table of tables) channel.on("postgres_changes", {
			event: "*",
			schema: "public",
			table
		}, (payload) => {
			const newRow = payload.new;
			const oldRow = payload.old;
			const recordId = String(newRow?.id ?? oldRow?.id ?? "");
			if (payload.eventType === "DELETE" && oldRow) {
				queryClient.setQueriesData({ queryKey: ["admin-products"] }, (prev) => (prev ?? []).filter((item) => item.id !== recordId));
				queryClient.setQueriesData({ queryKey: ["admin-orders"] }, (prev) => (prev ?? []).filter((item) => item.id !== recordId));
				queryClient.setQueriesData({ queryKey: ["admin-customers"] }, (prev) => (prev ?? []).filter((item) => item.id !== recordId));
				return;
			}
			if (!newRow) return;
			if (table === "products") {
				queryClient.setQueriesData({ queryKey: ["admin-products"] }, (prev) => {
					const list = prev ?? [];
					const index = list.findIndex((item) => item.id === recordId);
					if (index >= 0) {
						const updated = [...list];
						updated[index] = mapSupabaseProduct(newRow);
						return updated;
					}
					return list;
				});
				queryClient.setQueriesData({ queryKey: ["product"] }, () => mapSupabaseProduct(newRow));
			}
			if (table === "orders") {
				queryClient.setQueriesData({ queryKey: ["admin-orders"] }, (prev) => {
					const list = prev ?? [];
					const index = list.findIndex((item) => item.id === recordId);
					if (index >= 0) {
						const updated = [...list];
						updated[index] = mapSupabaseOrder(newRow);
						return updated;
					}
					return list;
				});
				queryClient.setQueriesData({ queryKey: ["account-orders"] }, (prev) => {
					const list = prev ?? [];
					const index = list.findIndex((item) => item.id === recordId);
					if (index >= 0) {
						const updated = [...list];
						updated[index] = mapSupabaseOrder(newRow);
						return updated;
					}
					return list;
				});
			}
			if (table === "customers") queryClient.setQueriesData({ queryKey: ["admin-customers"] }, (prev) => {
				const list = prev ?? [];
				const index = list.findIndex((item) => item.id === recordId);
				if (index >= 0) {
					const updated = [...list];
					updated[index] = mapSupabaseCustomer(newRow);
					return updated;
				}
				return list;
			});
			queryClient.invalidateQueries({ queryKey: ["analytics"] });
		});
		channel.subscribe();
		return () => {
			client.removeChannel(channel);
		};
	}, [queryClient]);
	return null;
}
function mapSupabaseProduct(row) {
	return {
		id: String(row.id),
		slug: String(row.slug),
		name: String(row.name),
		description: String(row.description),
		details: Array.isArray(row.details) ? row.details : [],
		category: String(row.category),
		subcategory: String(row.subcategory ?? ""),
		price: Number(row.price),
		oldPrice: row.old_price == null ? void 0 : Number(row.old_price),
		sku: String(row.sku),
		stock: Number(row.stock),
		sizes: Array.isArray(row.sizes) ? row.sizes : [],
		colors: Array.isArray(row.colors) ? row.colors : [],
		images: Array.isArray(row.images) ? row.images : [],
		tags: Array.isArray(row.tags) ? row.tags : [],
		rating: Number(row.rating),
		reviewsCount: Number(row.reviews_count),
		featured: Boolean(row.featured),
		bestSeller: Boolean(row.best_seller),
		newArrival: Boolean(row.new_arrival),
		status: String(row.status)
	};
}
function mapSupabaseOrder(row) {
	return {
		id: String(row.id),
		reference: String(row.reference),
		customerId: String(row.customer_id),
		customerName: String(row.customer_name),
		customerEmail: String(row.customer_email),
		createdAt: String(row.created_at),
		items: Array.isArray(row.items) ? row.items : [],
		subtotal: Number(row.subtotal),
		discount: Number(row.discount ?? 0),
		shipping: Number(row.shipping),
		total: Number(row.total),
		status: String(row.status),
		paymentStatus: String(row.payment_status),
		paymentMethod: String(row.payment_method),
		deliveryMethod: String(row.delivery_method),
		address: row.address,
		estimatedDelivery: row.estimated_delivery ? String(row.estimated_delivery) : ""
	};
}
function mapSupabaseCustomer(row) {
	return {
		id: String(row.id),
		name: String(row.name),
		email: String(row.email),
		phone: row.phone == null ? "" : String(row.phone),
		joinedAt: String(row.joined_at),
		orders: Number(row.orders),
		totalSpent: Number(row.total_spent),
		status: String(row.status),
		addresses: Array.isArray(row.addresses) ? row.addresses : []
	};
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl text-foreground",
					children: "This page has moved on"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist any more. The collection, however, is still here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Back to the store"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl text-foreground",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "We couldn't load this page. Try again, or head back to the collection."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Selah — Modern Modest Fashion" },
			{
				name: "description",
				content: "Selah is a premium modest fashion house: satin dresses, linen sets, scarves, bags and shoes, made in small batches in Lagos."
			},
			{
				property: "og:title",
				content: "Selah — Modern Modest Fashion"
			},
			{
				property: "og:description",
				content: "Considered modest clothing, made in small batches and shipped across Nigeria."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RealtimeSync, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })
		] }) }) })
	});
}
var $$splitComponentImporter$13 = () => import("./routes-BUvQ0b9E.mjs");
var Route$13 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Selah — Modest Luxury Fashion for Women" },
		{
			name: "description",
			content: "Selah crafts modest, elegant everyday pieces — flowing dresses, tailored sets and refined accessories, delivered across Nigeria."
		},
		{
			property: "og:title",
			content: "Selah — Modest Luxury Fashion for Women"
		},
		{
			property: "og:description",
			content: "Faith-led fashion for women choosing to live intentionally. New arrivals, curated sets and free delivery over £50."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./about-CHqY_-iV.mjs");
var Route$12 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Selah Girl Society — Faith, Fashion and Community" },
		{
			name: "description",
			content: "Selah Girl Society is a faith-based fashion brand and community for women choosing to live intentionally, boldly, and unapologetically for Jesus."
		},
		{
			property: "og:title",
			content: "About Selah Girl Society"
		},
		{
			property: "og:description",
			content: "Our story, our fabrics and the women who wear Selah."
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
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./account-CQGCgzMx.mjs");
var Route$11 = createFileRoute("/account")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./cart-B5wWOAKY.mjs");
var Route$10 = createFileRoute("/cart")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./checkout-DMwE_gdp.mjs");
var Route$9 = createFileRoute("/checkout")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./collections-DmuUvDFO.mjs");
var Route$8 = createFileRoute("/collections")({
	head: () => ({ meta: [
		{ title: "Collections — Selah Modest Fashion" },
		{
			name: "description",
			content: "Explore Selah by collection: dresses, tops, bottoms, shoes, bags and accessories, each cut for modest everyday elegance."
		},
		{
			property: "og:title",
			content: "Collections — Selah Modest Fashion"
		},
		{
			property: "og:description",
			content: "Six edits, one quiet wardrobe. Explore Selah collections."
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
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./login-Cq7MnCyw.mjs");
var Route$7 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./new-arrivals-jUSkDnHe.mjs");
var Route$6 = createFileRoute("/new-arrivals")({
	head: () => ({ meta: [
		{ title: "New Arrivals — Selah" },
		{
			name: "description",
			content: "The latest Selah drops: fresh modest dresses, sets and accessories added to the atelier this season."
		},
		{
			property: "og:title",
			content: "New Arrivals — Selah"
		},
		{
			property: "og:description",
			content: "Fresh modest pieces, added weekly in small runs."
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
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./shop-4T5fvSHp.mjs");
var Route$5 = createFileRoute("/shop")({
	head: () => ({ meta: [
		{ title: "Shop All — Selah Modest Fashion" },
		{
			name: "description",
			content: "Browse every Selah piece: modest dresses, tailored sets, abayas, knitwear, shoes and accessories. Filter by size, colour and price."
		},
		{
			property: "og:title",
			content: "Shop All — Selah Modest Fashion"
		},
		{
			property: "og:description",
			content: "Filter the full Selah collection by size, colour, price and availability."
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
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./wishlist-Cf350OGW.mjs");
var Route$4 = createFileRoute("/wishlist")({
	head: () => ({ meta: [
		{ title: "Your Wishlist — Selah" },
		{
			name: "description",
			content: "The Selah pieces you've saved for later, kept on this device."
		},
		{
			property: "og:title",
			content: "Your Wishlist — Selah"
		},
		{
			property: "og:description",
			content: "Saved Selah pieces, ready when you are."
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
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./admin.analytics-DGj76TVu.mjs");
var Route$3 = createFileRoute("/admin/analytics")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./admin.customers-BL3yvwOh.mjs");
var Route$2 = createFileRoute("/admin/customers")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./admin.orders-solaEApR.mjs");
var Route$1 = createFileRoute("/admin/orders")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./admin.products-BcHEwTdp.mjs");
var Route = createFileRoute("/admin/products")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var AboutRoute = Route$12.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$14
});
var AccountRoute = Route$11.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => Route$14
});
var AdminRoute = Route$15.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$14
});
var CartRoute = Route$10.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$14
});
var CheckoutRoute = Route$9.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$14
});
var CollectionsRoute = Route$8.update({
	id: "/collections",
	path: "/collections",
	getParentRoute: () => Route$14
});
var LoginRoute = Route$7.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$14
});
var NewArrivalsRoute = Route$6.update({
	id: "/new-arrivals",
	path: "/new-arrivals",
	getParentRoute: () => Route$14
});
var SearchRoute = Route$19.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$14
});
var ShopRoute = Route$5.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$14
});
var WishlistRoute = Route$4.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$14
});
var AdminAnalyticsRoute = Route$3.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => AdminRoute
});
var AdminCustomersRoute = Route$2.update({
	id: "/customers",
	path: "/customers",
	getParentRoute: () => AdminRoute
});
var AdminOrdersRoute = Route$1.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => AdminRoute
});
var AdminProductsRoute = Route.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => AdminRoute
});
var CategorySlugRoute = Route$16.update({
	id: "/category/$slug",
	path: "/category/$slug",
	getParentRoute: () => Route$14
});
var OrderIdRoute = Route$17.update({
	id: "/order/$id",
	path: "/order/$id",
	getParentRoute: () => Route$14
});
var ProductSlugRoute = Route$18.update({
	id: "/product/$slug",
	path: "/product/$slug",
	getParentRoute: () => Route$14
});
var AdminRouteChildren = {
	AdminAnalyticsRoute,
	AdminCustomersRoute,
	AdminOrdersRoute,
	AdminProductsRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AccountRoute,
	AdminRoute: AdminRoute._addFileChildren(AdminRouteChildren),
	CartRoute,
	CheckoutRoute,
	CollectionsRoute,
	LoginRoute,
	NewArrivalsRoute,
	SearchRoute,
	ShopRoute,
	WishlistRoute,
	CategorySlugRoute,
	OrderIdRoute,
	ProductSlugRoute
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
