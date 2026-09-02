import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useWishlist, r as useCart } from "./WishlistContext-BedorS19.mjs";
import { r as formatPrice } from "./http-BiLM6Dn8.mjs";
import { t as productService } from "./productService-ChxUFONV.mjs";
import { _ as Link, u as useRouterState, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Menu, B as Instagram, H as House, J as Facebook, M as Mail, R as LayoutGrid, S as Search, U as Heart, _ as ShoppingBag, bt as ArrowUpRight, c as Twitter, i as User, n as X, rt as Clock, ut as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StoreLayout-CAZLaRt9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cat_dresses_default = "/assets/cat-dresses-Q4psKg-v.jpg";
var cat_tops_default = "/assets/cat-tops-A8boe7Er.jpg";
var cat_bottoms_default = "/assets/cat-bottoms-CDohM_JM.jpg";
var cat_accessories_default = "/assets/cat-accessories-DXgFXhNd.jpg";
var cat_shoes_default = "/assets/cat-shoes-DncUrdj0.jpg";
var cat_bags_default = "/assets/cat-bags-DL2yWjS0.jpg";
var p1_default = "/assets/p1-BwqcJ5jt.jpg";
var p2_default = "/assets/p2-Cn6dfQwU.jpg";
var p3_default = "/assets/p3-DuRqnT3x.jpg";
var p4_default = "/assets/p4-BZJzFYY5.jpg";
var p5_default = "/assets/p5-Bq5k_2DO.jpg";
var p6_default = "/assets/p6-EogSRgPb.jpg";
var p7_default = "/assets/p7-q0NDJ7J2.jpg";
var p8_default = "/assets/p8-BFhYeKvf.jpg";
var categories = [
	{
		id: "cat-1",
		slug: "dresses",
		name: "Dresses",
		description: "Flowing satin and linen silhouettes for every occasion.",
		image: cat_dresses_default,
		active: true
	},
	{
		id: "cat-2",
		slug: "tops",
		name: "Tops",
		description: "Blouses, tunics and layering pieces cut generously.",
		image: cat_tops_default,
		active: true
	},
	{
		id: "cat-3",
		slug: "bottoms",
		name: "Bottoms",
		description: "Wide-leg trousers, palazzos and softly pleated skirts.",
		image: cat_bottoms_default,
		active: true
	},
	{
		id: "cat-4",
		slug: "accessories",
		name: "Accessories",
		description: "Scarves, wraps and quiet gold jewellery.",
		image: cat_accessories_default,
		active: true
	},
	{
		id: "cat-5",
		slug: "shoes",
		name: "Shoes",
		description: "Block heels, mules and flats made for long days.",
		image: cat_shoes_default,
		active: true
	},
	{
		id: "cat-6",
		slug: "bags",
		name: "Bags",
		description: "Structured leather totes and everyday crossbodies.",
		image: cat_bags_default,
		active: true
	}
];
var CLOTHING_SIZES = [
	"XS",
	"S",
	"M",
	"L",
	"XL",
	"XXL"
];
var SHOE_SIZES = [
	"36",
	"37",
	"38",
	"39",
	"40",
	"41"
];
var ONE_SIZE = ["One Size"];
var COLORS = {
	olive: {
		name: "Olive",
		hex: "#6E7A50"
	},
	cream: {
		name: "Cream",
		hex: "#F1E9D9"
	},
	terracotta: {
		name: "Terracotta",
		hex: "#B3603C"
	},
	sand: {
		name: "Sand",
		hex: "#DCC9A8"
	},
	chocolate: {
		name: "Chocolate",
		hex: "#4E362A"
	},
	tan: {
		name: "Tan",
		hex: "#B5763F"
	},
	sage: {
		name: "Sage",
		hex: "#9CA986"
	},
	ink: {
		name: "Ink",
		hex: "#2B2E27"
	}
};
var products = [
	{
		name: "Amara Satin Maxi Dress",
		category: "dresses",
		subcategory: "Occasion",
		price: 68500,
		oldPrice: 82e3,
		stock: 14,
		images: [
			p1_default,
			p2_default,
			p8_default
		],
		colors: [
			COLORS.olive,
			COLORS.terracotta,
			COLORS.cream
		],
		sizes: CLOTHING_SIZES,
		rating: 4.9,
		reviewsCount: 128,
		featured: true,
		bestSeller: true,
		newArrival: true,
		description: "A fluid satin maxi with a gathered waist and generous sweep — cut to move quietly with you from evening dinners to garden ceremonies.",
		tags: [
			"satin",
			"maxi",
			"occasion",
			"modest"
		]
	},
	{
		name: "Noor Pleated Open Abaya",
		category: "dresses",
		subcategory: "Abayas",
		price: 74e3,
		stock: 9,
		images: [p2_default, p1_default],
		colors: [COLORS.cream, COLORS.sand],
		sizes: CLOTHING_SIZES,
		rating: 4.8,
		reviewsCount: 76,
		featured: true,
		newArrival: true,
		description: "Knife pleats fall from a softly gathered yoke on this open-front abaya, finished with hand-rolled cuffs.",
		tags: [
			"abaya",
			"pleated",
			"layering"
		]
	},
	{
		name: "Zahra Balloon-Sleeve Blouse",
		category: "tops",
		subcategory: "Blouses",
		price: 32500,
		oldPrice: 39e3,
		stock: 26,
		images: [p3_default, p8_default],
		colors: [
			COLORS.terracotta,
			COLORS.cream,
			COLORS.ink
		],
		sizes: CLOTHING_SIZES,
		rating: 4.7,
		reviewsCount: 94,
		bestSeller: true,
		newArrival: true,
		description: "A liquid-satin blouse with volume through the sleeve and a clean covered placket. Tucks neatly, drapes beautifully.",
		tags: [
			"blouse",
			"satin",
			"workwear"
		]
	},
	{
		name: "Halima Wide-Leg Linen Trouser",
		category: "bottoms",
		subcategory: "Trousers",
		price: 38500,
		stock: 31,
		images: [p4_default, p8_default],
		colors: [
			COLORS.sand,
			COLORS.ink,
			COLORS.olive
		],
		sizes: CLOTHING_SIZES,
		rating: 4.8,
		reviewsCount: 152,
		bestSeller: true,
		featured: true,
		description: "High-rise, double-pleated and cut wide from a breathable linen blend that holds its press through the day.",
		tags: [
			"trousers",
			"linen",
			"wide-leg"
		]
	},
	{
		name: "Sahara Chiffon Scarf",
		category: "accessories",
		subcategory: "Scarves",
		price: 12500,
		oldPrice: 15e3,
		stock: 68,
		images: [p5_default, cat_accessories_default],
		colors: [
			COLORS.chocolate,
			COLORS.cream,
			COLORS.terracotta,
			COLORS.sage
		],
		sizes: ONE_SIZE,
		rating: 4.9,
		reviewsCount: 311,
		bestSeller: true,
		newArrival: true,
		description: "Featherweight chiffon with a hand-finished edge — the wrap our customers repurchase in every shade.",
		tags: [
			"scarf",
			"hijab",
			"chiffon"
		]
	},
	{
		name: "Layla Leather Crossbody",
		category: "bags",
		subcategory: "Crossbody",
		price: 54e3,
		stock: 12,
		images: [p6_default, cat_bags_default],
		colors: [COLORS.tan, COLORS.chocolate],
		sizes: ONE_SIZE,
		rating: 4.6,
		reviewsCount: 48,
		featured: true,
		newArrival: true,
		description: "A compact saddle shape in full-grain leather with solid brass hardware and an adjustable strap.",
		tags: [
			"bag",
			"leather",
			"crossbody"
		]
	},
	{
		name: "Bisi Pointed Leather Mule",
		category: "shoes",
		subcategory: "Flats",
		price: 44500,
		oldPrice: 52e3,
		stock: 0,
		images: [p7_default, cat_shoes_default],
		colors: [COLORS.sand, COLORS.chocolate],
		sizes: SHOE_SIZES,
		rating: 4.5,
		reviewsCount: 61,
		description: "An elongated pointed mule in buttery leather, lined and cushioned for all-day wear.",
		tags: [
			"shoes",
			"mule",
			"leather"
		]
	},
	{
		name: "Amina Linen Two-Piece Set",
		category: "tops",
		subcategory: "Co-ords",
		price: 59e3,
		stock: 18,
		images: [p8_default, p4_default],
		colors: [COLORS.sage, COLORS.cream],
		sizes: CLOTHING_SIZES,
		rating: 4.8,
		reviewsCount: 87,
		featured: true,
		bestSeller: true,
		newArrival: true,
		description: "Relaxed boxy top and drawstring wide trouser in washed linen — sold together, worn apart just as easily.",
		tags: [
			"set",
			"linen",
			"co-ord"
		]
	},
	{
		name: "Selah Satin Slip Dress",
		category: "dresses",
		subcategory: "Everyday",
		price: 46500,
		oldPrice: 58e3,
		stock: 22,
		images: [p1_default, p3_default],
		colors: [COLORS.olive, COLORS.chocolate],
		sizes: CLOTHING_SIZES,
		rating: 4.6,
		reviewsCount: 65,
		description: "A bias-cut column designed for layering beneath abayas and open coats through the cooler months.",
		tags: [
			"dress",
			"layering",
			"satin"
		]
	},
	{
		name: "Farida Tiered Midi Skirt",
		category: "bottoms",
		subcategory: "Skirts",
		price: 34500,
		stock: 24,
		images: [p4_default, p1_default],
		colors: [COLORS.sand, COLORS.terracotta],
		sizes: CLOTHING_SIZES,
		rating: 4.4,
		reviewsCount: 39,
		newArrival: true,
		description: "Three soft tiers with a hidden elastic waist and deep, useful pockets.",
		tags: [
			"skirt",
			"midi",
			"tiered"
		]
	},
	{
		name: "Kemi Gold Coin Necklace",
		category: "accessories",
		subcategory: "Jewellery",
		price: 18500,
		stock: 42,
		images: [cat_accessories_default, p5_default],
		colors: [COLORS.tan],
		sizes: ONE_SIZE,
		rating: 4.7,
		reviewsCount: 58,
		newArrival: true,
		description: "A hand-etched coin pendant on a fine gold-filled chain. Water resistant.",
		tags: [
			"jewellery",
			"gold",
			"necklace"
		]
	},
	{
		name: "Dara Structured Leather Tote",
		category: "bags",
		subcategory: "Totes",
		price: 78e3,
		oldPrice: 92e3,
		stock: 7,
		images: [cat_bags_default, p6_default],
		colors: [COLORS.tan, COLORS.ink],
		sizes: ONE_SIZE,
		rating: 4.9,
		reviewsCount: 73,
		bestSeller: true,
		featured: true,
		description: "Holds a laptop, a water bottle and everything else — in leather that softens with each week of use.",
		tags: [
			"bag",
			"tote",
			"leather",
			"work"
		]
	},
	{
		name: "Ronke Block Heel Sandal",
		category: "shoes",
		subcategory: "Heels",
		price: 49500,
		stock: 15,
		images: [cat_shoes_default, p7_default],
		colors: [COLORS.tan],
		sizes: SHOE_SIZES,
		rating: 4.5,
		reviewsCount: 44,
		newArrival: true,
		description: "A 60mm stacked heel with a woven vamp and adjustable ankle strap.",
		tags: [
			"shoes",
			"sandal",
			"heel"
		]
	},
	{
		name: "Iman Cotton Tunic",
		category: "tops",
		subcategory: "Tunics",
		price: 28500,
		oldPrice: 34e3,
		stock: 37,
		images: [cat_tops_default, p3_default],
		colors: [COLORS.cream, COLORS.sage],
		sizes: CLOTHING_SIZES,
		rating: 4.3,
		reviewsCount: 51,
		description: "Longline cotton poplin with side vents and a mandarin collar.",
		tags: [
			"tunic",
			"cotton",
			"everyday"
		]
	},
	{
		name: "Tola Palazzo Trouser",
		category: "bottoms",
		subcategory: "Trousers",
		price: 36500,
		stock: 29,
		images: [cat_bottoms_default, p4_default],
		colors: [COLORS.ink, COLORS.sand],
		sizes: CLOTHING_SIZES,
		rating: 4.6,
		reviewsCount: 66,
		bestSeller: true,
		description: "Fluid crepe palazzo with an elasticated back waist for comfort without bulk.",
		tags: [
			"trousers",
			"palazzo",
			"crepe"
		]
	},
	{
		name: "Yara Occasion Gown",
		category: "dresses",
		subcategory: "Occasion",
		price: 96e3,
		stock: 5,
		images: [p2_default, p1_default],
		colors: [COLORS.cream, COLORS.olive],
		sizes: CLOTHING_SIZES,
		rating: 5,
		reviewsCount: 22,
		featured: true,
		newArrival: true,
		description: "Our most considered piece: a gathered bodice, full sweeping skirt and a detachable sash.",
		tags: [
			"gown",
			"occasion",
			"bridal"
		]
	}
].map((seed, index) => {
	const slug = seed.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
	return {
		id: `prd-${String(index + 1).padStart(3, "0")}`,
		slug,
		name: seed.name,
		description: seed.description,
		details: [
			"Designed in Lagos, made in small batches",
			"Modest cut with full-length sleeves or coverage as shown",
			"Dry clean or cold hand wash",
			"Model is 5'9\" and wears a size S"
		],
		category: seed.category,
		subcategory: seed.subcategory,
		price: seed.price,
		oldPrice: seed.oldPrice,
		sku: `SLH-${seed.category.slice(0, 3).toUpperCase()}-${String(index + 1).padStart(3, "0")}`,
		stock: seed.stock,
		sizes: seed.sizes,
		colors: seed.colors,
		images: seed.images,
		tags: seed.tags,
		rating: seed.rating,
		reviewsCount: seed.reviewsCount,
		featured: Boolean(seed.featured),
		bestSeller: Boolean(seed.bestSeller),
		newArrival: Boolean(seed.newArrival),
		status: "active"
	};
});
var navLinks = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Shop",
		to: "/shop"
	},
	{
		label: "Collections",
		to: "/collections"
	},
	{
		label: "New Arrivals",
		to: "/new-arrivals"
	},
	{
		label: "About",
		to: "/about"
	}
];
function SiteHeader({ onSearch }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const { count } = useCart();
	const { count: wishlistCount } = useWishlist();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [bump, setBump] = (0, import_react.useState)(false);
	const [bannerVisible, setBannerVisible] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setBannerVisible(window.sessionStorage.getItem("selah.delivery-banner-dismissed") !== "1");
	}, []);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setMenuOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (count === 0) return;
		setBump(true);
		const handle = setTimeout(() => setBump(false), 360);
		return () => clearTimeout(handle);
	}, [count]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [bannerVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative bg-primary py-2 pl-10 pr-12 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Free delivery on orders over ", formatPrice(1e5)] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Dismiss delivery announcement",
			onClick: () => {
				setBannerVisible(false);
				window.sessionStorage.setItem("selah.delivery-banner-dismissed", "1");
			},
			className: "absolute right-3 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-primary-foreground/75 transition-colors hover:bg-primary-foreground/15 hover:text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 border-b transition-all duration-300", scrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center justify-between gap-4 transition-all duration-300", scrolled ? "h-16" : "h-16 md:h-20"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 md:gap-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setMenuOpen((open) => !open),
							"aria-label": "Toggle menu",
							"aria-expanded": menuOpen,
							className: "grid size-10 place-items-center rounded-full text-foreground transition-colors hover:bg-muted md:hidden",
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "font-display text-2xl tracking-tight md:text-[1.75rem]",
							children: "Selah"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							"aria-label": "Main",
							className: "hidden items-center gap-8 lg:flex",
							children: [navLinks.map((link) => {
								const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: link.to,
									className: cn("relative py-1 text-[13px] font-medium tracking-wide transition-colors", active ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
									children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute inset-x-0 -bottom-0.5 h-px origin-left bg-foreground transition-transform duration-300", active ? "scale-x-100" : "scale-x-0") })]
								}, link.to);
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "py-1 text-[13px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground",
									children: "Categories"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "invisible absolute left-0 top-full z-50 w-64 translate-y-1 rounded-2xl border border-border bg-surface p-2 opacity-0 shadow-lift transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
									children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/category/$slug",
										params: { slug: category.slug },
										className: "block rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-muted",
										children: [category.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "ml-2 text-xs text-muted-foreground",
											children: [category.description.split(" ").slice(0, 3).join(" "), "…"]
										})]
									}, category.id))
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-0.5 md:gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onSearch,
							"aria-label": "Search",
							className: "grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "size-5",
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/wishlist",
							"aria-label": "Wishlist",
							className: "relative hidden size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								className: "size-5",
								strokeWidth: 1.75
							}), wishlistCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-1 top-1 size-2 rounded-full bg-accent" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account",
							"aria-label": "Account",
							className: "hidden size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:grid",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
								className: "size-5",
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/cart",
							"aria-label": `Bag, ${count} items`,
							className: cn("group relative grid size-11 place-items-center rounded-full border border-border/80 bg-surface text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:shadow-soft active:translate-y-0", count > 0 && "border-primary/30"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
								className: cn("size-[1.15rem] transition-transform duration-300 group-hover:-rotate-6", bump && "animate-pop"),
								strokeWidth: 1.8
							}), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-full border-2 border-background bg-accent px-1 text-[10px] font-bold leading-4 text-accent-foreground shadow-sm", bump && "animate-pop"),
								children: count
							})]
						})
					]
				})]
			})
		}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "animate-fade border-t border-border bg-surface md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile",
				className: "container-page py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "block rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-muted",
							children: link.label
						}) }, link.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
						children: "Categories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 grid grid-cols-2 gap-2",
						children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: category.slug },
							className: "block rounded-xl border border-border px-3 py-2.5 text-sm",
							children: category.name
						}) }, category.id))
					})
				]
			})
		})]
	})] });
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var customerService = [
	{
		label: "Shipping & delivery",
		to: "/about"
	},
	{
		label: "Returns & refunds",
		to: "/about"
	},
	{
		label: "Size guide",
		to: "/about"
	},
	{
		label: "Contact us",
		to: "/about"
	}
];
var company = [
	{
		label: "Our story",
		to: "/about"
	},
	{
		label: "Collections",
		to: "/collections"
	},
	{
		label: "New arrivals",
		to: "/new-arrivals"
	},
	{
		label: "Terms of service",
		to: "/about"
	}
];
function NewsletterForm() {
	const [email, setEmail] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-4 flex flex-col gap-2 sm:flex-row",
		onSubmit: (event) => {
			event.preventDefault();
			if (!email.includes("@")) {
				toast.error("Enter a valid email address");
				return;
			}
			toast.success("You're on the list", { description: "Watch your inbox for the next drop." });
			setEmail("");
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: "footer-email",
				children: "Email address"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "footer-email",
				type: "email",
				value: email,
				onChange: (event) => setEmail(event.target.value),
				placeholder: "Email address",
				className: "h-12 min-w-0 flex-1 rounded-full border border-border bg-surface px-5 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "h-12 shrink-0 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
				children: "Subscribe"
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-20 border-t border-border bg-sand/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "font-display text-2xl tracking-tight",
								children: "Selah"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground",
								children: "Modest clothing made in small batches in Lagos — considered cuts, natural fabrics and finishing you can feel."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex items-center gap-2",
								children: [
									Instagram,
									Facebook,
									Twitter,
									Mail
								].map((Icon, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "Selah social profile",
									className: "grid size-10 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
								}, index))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden lg:col-span-5 lg:grid lg:grid-cols-3 lg:gap-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
								children: "Shop"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3 text-sm",
								children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/category/$slug",
									params: { slug: category.slug },
									className: "text-foreground/80 transition-colors hover:text-foreground",
									children: category.name
								}) }, category.id))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
								children: "Customer service"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3 text-sm",
								children: customerService.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: "text-foreground/80 transition-colors hover:text-foreground",
									children: item.label
								}) }, item.label))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
								children: "Company"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3 text-sm",
								children: company.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: "text-foreground/80 transition-colors hover:text-foreground",
									children: item.label
								}) }, item.label))
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
							type: "single",
							collapsible: true,
							className: "w-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: "shop",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
										className: "text-sm",
										children: "Shop"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-3 pb-2 text-sm",
										children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/category/$slug",
											params: { slug: category.slug },
											children: category.name
										}) }, category.id))
									}) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: "service",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
										className: "text-sm",
										children: "Customer service"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-3 pb-2 text-sm",
										children: customerService.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: item.to,
											children: item.label
										}) }, item.label))
									}) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: "company",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
										className: "text-sm",
										children: "Company"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-3 pb-2 text-sm",
										children: company.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: item.to,
											children: item.label
										}) }, item.label))
									}) })]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
								children: "Join the list"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Early access to new pieces and restocks. No noise."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Selah Studio. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "transition-colors hover:text-foreground",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "transition-colors hover:text-foreground",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "transition-colors hover:text-foreground",
							children: "Refund policy"
						})
					]
				})]
			})]
		})
	});
}
function MobileBottomNav() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const { count } = useWishlist();
	const { count: cartCount } = useCart();
	const isActive = (path) => path === "/" ? pathname === "/" : pathname.startsWith(path);
	const itemClass = (active) => cn("flex flex-col items-center gap-1 rounded-2xl px-3 py-1.5 text-[11px] font-medium transition-colors", active ? "text-accent" : "text-muted-foreground");
	const iconWrap = (active) => cn("grid size-9 place-items-center rounded-full transition-all duration-300", active ? "bg-primary scale-105" : "scale-100");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Primary",
		className: "safe-bottom fixed inset-x-2 bottom-2 z-50 rounded-2xl border border-white/70 bg-[rgb(255_253_253_/_0.84)] pt-1.5 shadow-nav backdrop-blur-2xl md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "grid grid-cols-5 px-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						"aria-label": "Home",
						className: itemClass(isActive("/")),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: iconWrap(isActive("/")),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
								className: "size-5",
								strokeWidth: 1.75,
								"aria-hidden": true
							})
						}), "Home"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cart",
						"aria-label": "Shopping bag",
						className: itemClass(isActive("/cart")),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn(iconWrap(isActive("/cart")), "relative"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
								className: "size-5",
								strokeWidth: 1.75,
								"aria-hidden": true
							}), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-1 -top-1 grid min-w-4 place-items-center rounded-full bg-accent px-1 text-[9px] font-semibold text-accent-foreground",
								children: cartCount
							})]
						}), "Bag"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						"aria-label": "Shop",
						className: itemClass(isActive("/shop")),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: iconWrap(isActive("/shop")),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, {
								className: "size-5",
								strokeWidth: 1.75,
								"aria-hidden": true
							})
						}), "Shop"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/wishlist",
						"aria-label": "Wishlist",
						className: itemClass(isActive("/wishlist")),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn(iconWrap(isActive("/wishlist")), "relative"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								className: "size-5",
								strokeWidth: 1.75,
								"aria-hidden": true
							}), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-accent text-[9px] font-semibold text-accent-foreground",
								children: count
							})]
						}), "Wishlist"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/account",
						"aria-label": "Account",
						className: itemClass(isActive("/account")),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: iconWrap(isActive("/account")),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
								className: "size-5",
								strokeWidth: 1.75,
								"aria-hidden": true
							})
						}), "Account"]
					})
				})
			]
		})
	});
}
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
var RECENT_KEY = "selah.recent-searches";
var SUGGESTED = [
	"Satin maxi",
	"Abaya",
	"Linen set",
	"Chiffon scarf",
	"Leather tote"
];
function SearchOverlay({ open, onClose }) {
	const navigate = useNavigate();
	const [term, setTerm] = (0, import_react.useState)("");
	const [results, setResults] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [recent, setRecent] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(RECENT_KEY);
			if (raw) setRecent(JSON.parse(raw));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open, onClose]);
	(0, import_react.useEffect)(() => {
		if (!term.trim()) {
			setResults([]);
			setLoading(false);
			return;
		}
		setLoading(true);
		const handle = setTimeout(() => {
			productService.search(term).then(setResults).catch(() => setResults([])).finally(() => setLoading(false));
		}, 220);
		return () => clearTimeout(handle);
	}, [term]);
	const matchingCategories = (0, import_react.useMemo)(() => {
		if (!term.trim()) return [];
		return categories.filter((category) => category.name.toLowerCase().includes(term.trim().toLowerCase()));
	}, [term]);
	function commit(value) {
		const next = [value, ...recent.filter((item) => item !== value)].slice(0, 5);
		setRecent(next);
		try {
			window.localStorage.setItem(RECENT_KEY, JSON.stringify(next));
		} catch {}
		onClose();
		navigate({
			to: "/search",
			search: { q: value }
		});
	}
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-100 animate-fade",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Search",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-label": "Close search",
			className: "absolute inset-0 bg-foreground/40 backdrop-blur-sm",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex h-full w-full max-w-3xl flex-col bg-background sm:h-auto sm:mt-16 sm:rounded-3xl sm:shadow-lift",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex items-center gap-3 border-b border-border px-4 py-4 sm:px-6",
				onSubmit: (event) => {
					event.preventDefault();
					if (term.trim()) commit(term.trim());
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "size-5 shrink-0 text-muted-foreground",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						value: term,
						onChange: (event) => setTerm(event.target.value),
						placeholder: "Search dresses, scarves, SKU…",
						"aria-label": "Search products",
						className: "min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
					}),
					term && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTerm(""),
						className: "rounded-full px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground",
						children: "Clear"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						"aria-label": "Close search",
						className: "grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:max-h-[60vh]",
				children: !term.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-7",
					children: [
						recent.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
							children: "Recent searches"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-wrap gap-2",
							children: recent.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => commit(item),
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm transition-colors hover:border-primary/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-muted-foreground" }), item]
							}) }, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
							children: "Suggested"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-wrap gap-2",
							children: SUGGESTED.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => commit(item),
								className: "inline-flex items-center gap-2 rounded-full bg-muted px-3 py-2 text-sm transition-colors hover:bg-secondary",
								children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 text-muted-foreground" })]
							}) }, item))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
							children: "Categories"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
							children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/category/$slug",
								params: { slug: category.slug },
								onClick: onClose,
								className: "block rounded-xl border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/40",
								children: category.name
							}) }, category.id))
						})] })
					]
				}) : loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: [
						0,
						1,
						2
					].map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "size-16 rounded-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 space-y-2 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3.5 w-2/3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-1/4" })]
						})]
					}, key))
				}) : results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-2xl",
							children: [
								"No results for \"",
								term,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Try a shorter term, or browse the full collection."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							onClick: onClose,
							className: "mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground",
							children: "Browse everything"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						matchingCategories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-wrap gap-2",
							children: matchingCategories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/category/$slug",
								params: { slug: category.slug },
								onClick: onClose,
								className: "inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium",
								children: ["Category · ", category.name]
							}) }, category.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: results.slice(0, 6).map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$slug",
								params: { slug: product.slug },
								onClick: onClose,
								className: "flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: product.images[0],
										alt: product.name,
										loading: "lazy",
										width: 64,
										height: 80,
										className: "size-16 rounded-xl object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-medium",
											children: product.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground capitalize",
											children: [
												product.category,
												" · ",
												product.sku
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: formatPrice(product.price)
									})
								]
							}) }, product.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => commit(term.trim()),
							className: "w-full rounded-full border border-border py-3 text-sm font-medium transition-colors hover:bg-muted",
							children: [
								"See all ",
								results.length,
								" results"
							]
						})
					]
				})
			})]
		})]
	});
}
/**
* Storefront chrome: sticky header on every breakpoint, fixed bottom navigation
* on mobile, and the search overlay shared between the two.
*/
function StoreLayout({ children }) {
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { onSearch: () => setSearchOpen(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pb-24 md:pb-0",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBottomNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchOverlay, {
				open: searchOpen,
				onClose: () => setSearchOpen(false)
			})
		]
	});
}
//#endregion
export { products as i, StoreLayout as n, categories as r, Skeleton as t };
