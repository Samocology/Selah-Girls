import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { L as List, W as Grid3x3, g as SlidersHorizontal, h as Sparkles, n as X, q as Funnel, ut as ChevronDown, xt as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as StoreLayout } from "./StoreLayout-CAZLaRt9.mjs";
import { t as Button } from "./button-BKNC97i9.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import { t as Route } from "./category._slug-YmfqtJDY.mjs";
import { t as CatalogPage } from "./CatalogPage-B_QryYa5.mjs";
import { t as categoryService } from "./categoryService-Ddiz9tCV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-BleWsyc4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CategoryRoute() {
	const { slug } = Route.useParams();
	const [showMobileFilters, setShowMobileFilters] = (0, import_react.useState)(false);
	const [viewMode, setViewMode] = (0, import_react.useState)("grid");
	const category = useQuery({
		queryKey: ["category", slug],
		queryFn: () => categoryService.bySlug(slug)
	});
	const formattedName = (category.data?.name ?? slug.replace(/-/g, " ")).replace(/\b\w/g, (c) => c.toUpperCase());
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, [slug]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			className: "relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 overflow-hidden pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						scale: .8,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: .1
					},
					transition: { duration: 1 },
					className: "absolute -top-20 -right-20 size-96 rounded-full bg-primary/20 blur-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						scale: .8,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: .05
					},
					transition: {
						duration: 1,
						delay: .2
					},
					className: "absolute -bottom-40 -left-20 size-[500px] rounded-full bg-primary/20 blur-3xl"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page relative py-16 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: .2 },
							className: "flex items-center gap-2 text-sm text-muted-foreground mb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hover:text-foreground transition-colors cursor-pointer",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hover:text-foreground transition-colors cursor-pointer",
									children: "Categories"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: formattedName
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .3 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), "Collection"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-display text-5xl md:text-6xl lg:text-7xl leading-tight",
								children: formattedName
							})]
						}),
						category.data?.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .4 },
							className: "mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl",
							children: category.data.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .5 },
							className: "mt-8 flex flex-wrap gap-6",
							children: [
								{
									label: "Pieces",
									value: "45+"
								},
								{
									label: "Avg. Rating",
									value: "4.8"
								},
								{
									label: "Ships From",
									value: "Lagos"
								}
							].map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									scale: .9
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								transition: { delay: .6 + index * .1 },
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl font-semibold",
										children: stat.value
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: stat.label
									})]
								}), index < 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-px bg-border" })]
							}, stat.label))
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { delay: .7 },
			className: "sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "lg:hidden gap-2",
							onClick: () => setShowMobileFilters(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4" }), "Filters"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground hidden sm:block",
							children: [
								"Showing ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: "all"
								}),
								" pieces"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4" }),
										"Sort by",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3 transition-transform group-hover:rotate-180" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-background shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all",
									children: [
										"Featured",
										"Newest",
										"Price: Low to High",
										"Price: High to Low"
									].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg",
										children: option
									}, option))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden md:flex items-center gap-1 rounded-lg border border-border p-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setViewMode("grid"),
									className: cn("p-2 rounded-md transition-all", viewMode === "grid" ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setViewMode("list"),
									className: cn("p-2 rounded-md transition-all", viewMode === "list" ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-4" })
								})]
							})]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogPage, {
			eyebrow: "Collection",
			title: category.data?.name ?? slug.replace(/-/g, " "),
			description: category.data?.description ?? "",
			baseFilters: { category: slug },
			viewMode
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showMobileFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-50 lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "absolute inset-0 bg-black/50",
				onClick: () => setShowMobileFilters(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { x: "100%" },
				animate: { x: 0 },
				exit: { x: "100%" },
				transition: {
					type: "spring",
					damping: 30,
					stiffness: 300
				},
				className: "absolute right-0 top-0 h-full w-80 bg-background shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-6 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold",
						children: "Filters"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setShowMobileFilters(false),
						className: "p-2 hover:bg-muted rounded-lg transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Filter options coming soon..."
					})
				})]
			})]
		}) })
	] });
}
//#endregion
export { CategoryRoute as component };
