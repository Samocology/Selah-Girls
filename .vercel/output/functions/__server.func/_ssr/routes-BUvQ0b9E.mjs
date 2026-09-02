import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as productService } from "./productService-ChxUFONV.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as RefreshCw, h as Sparkles, l as Truck, xt as ArrowRight, y as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as StoreLayout } from "./StoreLayout-CAZLaRt9.mjs";
import { t as editorial_default } from "./editorial-CcLXhPq3.mjs";
import { t as promo_default } from "./promo-AAm1oqP7.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as Rating, t as ProductGrid } from "./ProductGrid-Df5HM1hh.mjs";
import { r as SectionHeading } from "./states-BcOR7Vzi.mjs";
import { t as categoryService } from "./categoryService-Ddiz9tCV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BUvQ0b9E.js
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-CpA8J_N-.jpg";
var promises = [
	{
		icon: Truck,
		title: "Thoughtful delivery",
		body: "Reliable delivery, free on orders over £50."
	},
	{
		icon: RefreshCw,
		title: "Easy 7-day returns",
		body: "Changed your mind? Send it back, simply."
	},
	{
		icon: ShieldCheck,
		title: "Secure payments",
		body: "Card, transfer and pay-on-delivery."
	},
	{
		icon: Sparkles,
		title: "Made in small runs",
		body: "Considered fabrics, never mass produced."
	}
];
function Home() {
	const newArrivals = useQuery({
		queryKey: ["products", "new"],
		queryFn: () => productService.newArrivals()
	});
	const bestSellers = useQuery({
		queryKey: ["products", "best"],
		queryFn: () => productService.bestSellers()
	});
	const cats = useQuery({
		queryKey: ["categories", "counts"],
		queryFn: () => categoryService.withCounts()
	});
	const testimonials = useQuery({
		queryKey: ["testimonials"],
		queryFn: () => productService.testimonials()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page pt-6 md:pt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_default,
							alt: "Model wearing a flowing olive modest maxi dress in soft daylight",
							width: 1600,
							height: 1100,
							className: "h-[68vh] min-h-[440px] w-full object-cover md:h-[78vh]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/25 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-0 p-6 md:p-14",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl animate-rise",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow text-background/80",
										children: "New season · 2026"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-4 font-display text-4xl leading-[1.05] text-background md:text-6xl",
										children: "Dressing with quiet intention"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-md text-sm leading-relaxed text-background/85 md:text-base",
										children: "Modest silhouettes in breathable linen, crepe and silk — made for real days, finished like heirlooms."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/shop",
											className: "inline-flex h-12 items-center gap-2 rounded-full bg-background px-7 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5",
											children: ["Shop the collection", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/new-arrivals",
											className: "inline-flex h-12 items-center rounded-full border border-background/40 px-7 text-sm font-medium text-background transition-colors hover:bg-background/10",
											children: "New arrivals"
										})]
									})
								]
							})
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4",
				children: promises.map(({ icon: Icon, title, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-5 text-accent",
						strokeWidth: 1.75
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-sm font-semibold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-relaxed text-muted-foreground",
						children: body
					})
				] }, title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page pb-4 md:pb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Browse",
				title: "Shop by category",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "text-sm font-medium underline underline-offset-4",
					children: "View everything"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0",
				children: (cats.data ?? []).map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/category/$slug",
					params: { slug: category.slug },
					className: "group relative w-[68%] shrink-0 snap-start overflow-hidden rounded-2xl md:w-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: category.image,
							alt: category.name,
							loading: "lazy",
							width: 800,
							height: 1e3,
							className: "aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/65 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-background",
								children: category.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-background/75",
								children: [category.count, " pieces"]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-background transition-transform group-hover:translate-x-1" })]
						})
					]
				}, category.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-14 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Just landed",
				title: "New arrivals",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/new-arrivals",
					className: "text-sm font-medium underline underline-offset-4",
					children: "See all"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
				products: (newArrivals.data ?? []).slice(0, 8),
				loading: newArrivals.isLoading
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: editorial_default,
						alt: "Two women in coordinating neutral modest sets on a sunlit terrace",
						loading: "lazy",
						width: 1200,
						height: 1400,
						className: "aspect-4/5 w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "The Selah way"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl md:text-5xl",
							children: "Coverage that never costs you elegance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground md:text-base",
							children: "Every piece begins with movement — how a hem falls when you walk, how a sleeve sits when you reach. We cut generously, line thoughtfully, and finish by hand so modest dressing feels like a pleasure rather than a compromise."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-8 grid grid-cols-3 gap-6",
							children: [
								{
									label: "Pieces designed",
									value: "180+"
								},
								{
									label: "Women dressed",
									value: "12k"
								},
								{
									label: "Avg. rating",
									value: "4.8"
								}
							].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: stat.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-2xl",
								children: stat.value
							})] }, stat.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
							children: ["Our story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-14 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Loved most",
				title: "Best sellers"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
				products: (bestSellers.data ?? []).slice(0, 4),
				loading: bestSellers.isLoading,
				skeletonCount: 4,
				showRating: true
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page pb-14 md:pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: promo_default,
						alt: "Folded neutral garments beside dried florals",
						loading: "lazy",
						width: 1600,
						height: 800,
						className: "h-[380px] w-full object-cover md:h-[420px]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-foreground/45" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 flex flex-col items-center justify-center px-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-background/80",
								children: "Limited"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 max-w-lg font-display text-3xl text-background md:text-4xl",
								children: "Take 15% off the Ramadan capsule"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-background/80",
								children: [
									"Use code ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "SELAH15"
									}),
									" at checkout."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/collections",
								className: "mt-7 inline-flex h-12 items-center rounded-full bg-background px-7 text-sm font-medium text-foreground",
								children: "Shop the capsule"
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Kind words",
				title: "From our community"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:px-0",
				children: (testimonials.data ?? []).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "w-[82%] shrink-0 snap-start rounded-2xl border border-border bg-surface p-6 md:w-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, { value: item.rating }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-4 text-sm leading-relaxed text-foreground/90",
							children: [
								"“",
								item.quote,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-5 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: item.name
								}),
								" · ",
								item.location
							]
						})
					]
				}, item.id))
			})]
		})
	] });
}
//#endregion
export { Home as component };
