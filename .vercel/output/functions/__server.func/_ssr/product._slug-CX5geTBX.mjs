import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useCart } from "./WishlistContext-BedorS19.mjs";
import { r as formatPrice } from "./http-BiLM6Dn8.mjs";
import { t as productService } from "./productService-ChxUFONV.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as RefreshCw, St as ArrowLeft, U as Heart, _ as ShoppingBag, b as Share2, ct as ChevronRight, dt as Check, h as Sparkles, k as Minus, l as Truck, m as Star, t as ZoomIn, v as Shield, w as Plus } from "../_libs/lucide-react.mjs";
import { n as StoreLayout } from "./StoreLayout-CAZLaRt9.mjs";
import { t as Button } from "./button-BKNC97i9.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as Rating, t as ProductGrid } from "./ProductGrid-Df5HM1hh.mjs";
import { t as Route } from "./product._slug-D_Gjc--O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-CX5geTBX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const [selectedSize, setSelectedSize] = (0, import_react.useState)("");
	const [selectedColor, setSelectedColor] = (0, import_react.useState)("");
	const [isWishlisted, setIsWishlisted] = (0, import_react.useState)(false);
	const [addedToCart, setAddedToCart] = (0, import_react.useState)(false);
	const [activeImageIndex, setActiveImageIndex] = (0, import_react.useState)(0);
	const [quantity, setQuantity] = (0, import_react.useState)(1);
	const [isZoomed, setIsZoomed] = (0, import_react.useState)(false);
	const product = useQuery({
		queryKey: ["product", slug],
		queryFn: () => productService.bySlug(slug)
	}).data;
	const { add } = useCart();
	const handleAddToCart = (product) => {
		for (let i = 0; i < quantity; i++) add(product);
		setAddedToCart(true);
		setTimeout(() => setAddedToCart(false), 2e3);
	};
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		className: "container-page py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { scale: 0 },
				animate: { scale: 1 },
				transition: {
					type: "spring",
					stiffness: 200,
					damping: 20
				},
				className: "mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-10 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted-foreground",
				children: "Piece unavailable"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl md:text-5xl",
				children: "We couldn't find that piece."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "The item you're looking for might have been moved or doesn't exist."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					children: "Browse the collection"
				})
			})
		]
	}) });
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: .08,
				delayChildren: .1
			}
		}
	};
	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 20
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .5,
				ease: "easeOut"
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .3 },
				className: "mb-8 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					className: "group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4 transition-transform group-hover:-translate-x-1" }), "Back to shop"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 text-sm text-muted-foreground md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-foreground transition-colors",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "hover:text-foreground transition-colors",
							children: "Shop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-medium",
							children: product.name
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: containerVariants,
				initial: "hidden",
				animate: "visible",
				className: "grid gap-12 lg:grid-cols-2 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: itemVariants,
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-2xl bg-muted cursor-zoom-in",
							onMouseEnter: () => setIsZoomed(true),
							onMouseLeave: () => setIsZoomed(false),
							onClick: () => setIsZoomed(!isZoomed),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
									initial: {
										opacity: 0,
										scale: 1.1
									},
									animate: {
										opacity: 1,
										scale: isZoomed ? 1.5 : 1
									},
									exit: { opacity: 0 },
									transition: { duration: .5 },
									src: product.images[activeImageIndex],
									alt: `${product.name} - View ${activeImageIndex + 1}`,
									className: "aspect-[4/5] w-full object-cover",
									style: {
										transformOrigin: isZoomed ? "50% 50%" : "center",
										cursor: isZoomed ? "zoom-out" : "zoom-in"
									}
								}, activeImageIndex),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-4 right-4 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1.5 text-xs text-white flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "size-3" }), "Hover to zoom"]
								}),
								product.price < 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow-lg",
									children: "Sale"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2",
							children: product.images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								whileHover: { scale: 1.1 },
								whileTap: { scale: .95 },
								onClick: () => setActiveImageIndex(index),
								className: cn("relative overflow-hidden rounded-lg border-2 transition-all", activeImageIndex === index ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-muted-foreground/30"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: image,
									alt: `Thumbnail ${index + 1}`,
									className: "size-14 object-cover"
								}), activeImageIndex === index && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary/10" })]
							}, image))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center gap-2",
						children: product.images.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveImageIndex(index),
							className: cn("h-1.5 rounded-full transition-all duration-300", activeImageIndex === index ? "w-10 bg-gradient-to-r from-primary to-primary/60" : "w-4 bg-muted-foreground/20 hover:bg-muted-foreground/40")
						}, index))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: itemVariants,
					className: "lg:py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" }), product.subcategory]
							}), product.rating >= 4.5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-current" }), "Best Seller"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl md:text-5xl lg:text-6xl leading-tight",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-3xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent",
									children: formatPrice(product.price)
								}), product.price < 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg text-muted-foreground line-through",
									children: formatPrice(product.price * 1.5)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, {
									value: product.rating,
									count: product.reviewsCount
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-lg leading-7 text-muted-foreground",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 rounded-xl border border-border/50 bg-muted/30 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: "Select Colour"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: selectedColor || "Choose an option"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex gap-3",
									children: product.colors.map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
										whileHover: { scale: 1.15 },
										whileTap: { scale: .9 },
										onClick: () => setSelectedColor(color.name),
										className: "group relative",
										title: color.name,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("block size-10 rounded-full border-2 transition-all cursor-pointer", selectedColor === color.name ? "border-primary ring-4 ring-primary/20" : "border-border hover:border-primary/50"),
											style: { backgroundColor: color.hex }
										}), selectedColor === color.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											initial: { scale: 0 },
											animate: { scale: 1 },
											className: "absolute inset-0 flex items-center justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-white drop-shadow-lg" })
										})]
									}, color.name))
								}),
								selectedColor && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: ["Selected: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: selectedColor
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: "Select Size"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "text-xs font-medium text-primary hover:underline",
									children: "Size Guide"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid grid-cols-4 gap-2",
								children: product.sizes.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									whileHover: { scale: 1.05 },
									whileTap: { scale: .95 },
									onClick: () => setSelectedSize(size),
									className: cn("py-3 text-sm font-medium rounded-lg border transition-all", selectedSize === size ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "border-border hover:border-primary/50 hover:bg-primary/5"),
									children: size
								}, size))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "Quantity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center rounded-lg border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
										whileTap: { scale: .9 },
										onClick: () => setQuantity(Math.max(1, quantity - 1)),
										className: "p-2 hover:bg-muted transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-12 text-center font-medium",
										children: quantity
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
										whileTap: { scale: .9 },
										onClick: () => setQuantity(quantity + 1),
										className: "p-2 hover:bg-muted transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									className: "group h-14 min-w-0 w-full flex-1 justify-between rounded-2xl bg-primary px-4 text-sm shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 active:translate-y-0 active:scale-[0.99] sm:px-5",
									onClick: () => handleAddToCart(product),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
										mode: "wait",
										children: addedToCart ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
											initial: {
												scale: 0,
												rotate: -180
											},
											animate: {
												scale: 1,
												rotate: 0
											},
											exit: {
												scale: 0,
												rotate: 180
											},
											transition: {
												type: "spring",
												stiffness: 300,
												damping: 20
											},
											className: "flex min-w-0 items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-8 shrink-0 place-items-center rounded-full bg-primary-foreground/15",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: "Added to Bag"
											})]
										}, "check") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
											initial: { scale: 0 },
											animate: { scale: 1 },
											exit: { scale: 0 },
											className: "flex min-w-0 items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid size-8 shrink-0 place-items-center rounded-full bg-primary-foreground/15 transition-transform group-hover:rotate-[-8deg]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "truncate",
													children: "Add to bag"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "ml-auto shrink-0 text-xs font-semibold text-primary-foreground/75",
													children: formatPrice(product.price * quantity)
												})
											]
										}, "bag")
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										variant: "outline",
										className: cn("aspect-square transition-all hover:scale-105 active:scale-95", isWishlisted && "border-red-500 bg-red-50 dark:bg-red-950/20"),
										onClick: () => setIsWishlisted(!isWishlisted),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											animate: { scale: isWishlisted ? [
												1,
												1.3,
												1
											] : 1 },
											transition: { duration: .3 },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-5 transition-colors", isWishlisted ? "fill-red-500 text-red-500" : "") })
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										variant: "outline",
										className: "aspect-square transition-all hover:scale-105 active:scale-95",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-5" })
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-3",
								children: [
									{
										icon: Truck,
										label: "Free Shipping",
										sublabel: "On orders over $50"
									},
									{
										icon: RefreshCw,
										label: "30 Day Returns",
										sublabel: "Easy returns"
									},
									{
										icon: Shield,
										label: "Secure Checkout",
										sublabel: "256-bit SSL"
									}
								].map(({ icon: Icon, label, sublabel }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									whileHover: { y: -2 },
									className: "flex flex-col items-center gap-1.5 rounded-xl border border-border p-4 text-center bg-gradient-to-b from-muted/50 to-transparent transition-all hover:shadow-md",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold",
											children: label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground",
											children: sublabel
										})
									]
								}, label))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/50 p-5 bg-muted/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold mb-4",
									children: "Product Details"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-3",
									children: product.details.map((detail, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
										initial: {
											opacity: 0,
											x: -10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										transition: { delay: .8 + index * .05 },
										className: "flex items-start gap-3 text-sm text-muted-foreground group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "group-hover:text-foreground transition-colors",
											children: detail
										})]
									}, detail))
								})]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Related, { product })
		]
	}) });
}
function Related({ product }) {
	const query = useQuery({
		queryKey: ["related", product.id],
		queryFn: () => productService.related(product)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { delay: .3 },
		className: "mt-20 border-t border-border pt-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow text-primary flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), "Complete the edit"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl md:text-4xl",
				children: "You may also like"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/shop",
				className: "hidden sm:inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary group",
				children: ["View all", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products: query.data ?? [] })
		})]
	});
}
//#endregion
export { ProductPage as component };
