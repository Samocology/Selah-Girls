import { r as __toESM } from "../_runtime.mjs";
import { n as supabase, t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as formatPrice } from "./http-BiLM6Dn8.mjs";
import { t as productService } from "./productService-ChxUFONV.mjs";
import { $ as DollarSign, D as Package, I as LoaderCircle, Q as Download, S as Search, V as ImagePlus, Y as Eye, _t as Boxes, ct as ChevronRight, d as TrendingUp, f as Trash2, lt as ChevronLeft, n as X, nt as Copy, ot as CircleCheck, q as Funnel, rt as Clock, s as Upload, u as TriangleAlert, w as Plus, wt as Archive } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-BKNC97i9.mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.products-BcHEwTdp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductsAdmin() {
	const client = useQueryClient();
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [sortBy, setSortBy] = (0, import_react.useState)("newest");
	const [selectedProducts, setSelectedProducts] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [isDeleting, setIsDeleting] = (0, import_react.useState)(false);
	const [deleteConfirm, setDeleteConfirm] = (0, import_react.useState)(null);
	const [selectedProduct, setSelectedProduct] = (0, import_react.useState)(null);
	const [showAddProduct, setShowAddProduct] = (0, import_react.useState)(false);
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const itemsPerPage = 10;
	const query = useQuery({
		queryKey: ["admin-products"],
		queryFn: () => productService.list({ sort: sortBy === "name" || sortBy === "stock" ? "featured" : sortBy })
	});
	const filteredProducts = (0, import_react.useMemo)(() => {
		let products = query.data ?? [];
		if (searchTerm) products = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.slug.toLowerCase().includes(searchTerm.toLowerCase()));
		if (statusFilter !== "all") products = products.filter((product) => product.status === statusFilter);
		switch (sortBy) {
			case "price-asc":
				products = [...products].sort((a, b) => a.price - b.price);
				break;
			case "price-desc":
				products = [...products].sort((a, b) => b.price - a.price);
				break;
			case "stock":
				products = [...products].sort((a, b) => b.stock - a.stock);
				break;
			case "name": products = [...products].sort((a, b) => a.name.localeCompare(b.name));
		}
		return products;
	}, [
		query.data,
		searchTerm,
		statusFilter,
		sortBy
	]);
	const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
	const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
	const stats = (0, import_react.useMemo)(() => {
		const products = query.data ?? [];
		return {
			total: products.length,
			active: products.filter((p) => p.status === "active").length,
			lowStock: products.filter((p) => p.stock < 10).length,
			totalValue: products.reduce((sum, p) => sum + p.price * p.stock, 0)
		};
	}, [query.data]);
	const handleDelete = async (id) => {
		setIsDeleting(true);
		try {
			await productService.remove(id);
			await client.invalidateQueries({ queryKey: ["admin-products"] });
			setDeleteConfirm(null);
			setSelectedProducts((prev) => {
				const next = new Set(prev);
				next.delete(id);
				return next;
			});
		} catch (error) {
			console.error("Failed to delete product:", error);
		} finally {
			setIsDeleting(false);
		}
	};
	const handleDuplicate = async (id) => {
		await productService.duplicate(id);
		await client.invalidateQueries({ queryKey: ["admin-products"] });
	};
	const handleBulkDelete = async () => {
		setIsDeleting(true);
		try {
			for (const id of selectedProducts) await productService.remove(id);
			await client.invalidateQueries({ queryKey: ["admin-products"] });
			setSelectedProducts(/* @__PURE__ */ new Set());
		} catch (error) {
			console.error("Failed to delete products:", error);
		} finally {
			setIsDeleting(false);
		}
	};
	const toggleSelectAll = () => {
		if (selectedProducts.size === paginatedProducts.length) setSelectedProducts(/* @__PURE__ */ new Set());
		else setSelectedProducts(new Set(paginatedProducts.map((p) => p.id)));
	};
	const toggleSelectProduct = (id) => {
		setSelectedProducts((prev) => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-background via-background to-muted/20 min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-primary flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4" }), "Catalogue"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent",
						children: "Products"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Manage your product inventory and catalogue"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "gap-2 hover:bg-primary/5 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), "Import"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "gap-2 hover:bg-primary/5 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/20 transition-all",
							onClick: () => setShowAddProduct(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add product"]
						})
					]
				})]
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
				transition: { delay: .1 },
				className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						label: "Total Products",
						value: stats.total,
						icon: Boxes,
						color: "from-blue-500 to-cyan-500",
						shadow: "shadow-blue-500/20"
					},
					{
						label: "Active",
						value: stats.active,
						icon: CircleCheck,
						color: "from-emerald-500 to-green-500",
						shadow: "shadow-emerald-500/20"
					},
					{
						label: "Low Stock",
						value: stats.lowStock,
						icon: TriangleAlert,
						color: "from-orange-500 to-amber-500",
						shadow: "shadow-orange-500/20"
					},
					{
						label: "Inventory Value",
						value: formatPrice(stats.totalValue),
						icon: DollarSign,
						color: "from-purple-500 to-pink-500",
						shadow: "shadow-purple-500/20"
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
					transition: { delay: .15 + index * .05 },
					whileHover: {
						y: -4,
						scale: 1.02
					},
					className: "relative overflow-hidden p-5 rounded-xl border border-border bg-background/80 backdrop-blur-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-transparent to-muted/10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("size-10 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-lg", stat.color, stat.shadow),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, { className: "size-5 text-white" })
							}), index === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4 text-emerald-500" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative mt-3 text-2xl font-semibold",
							children: stat.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative text-sm text-muted-foreground",
							children: stat.label
						})
					]
				}, stat.label))
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
				transition: { delay: .2 },
				className: "flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 w-full max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "search",
						placeholder: "Search products...",
						value: searchTerm,
						onChange: (e) => setSearchTerm(e.target.value),
						className: "w-full h-10 pl-9 pr-4 rounded-lg border border-input bg-background/80 backdrop-blur-sm text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 w-full sm:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "gap-2 flex-1 sm:flex-none hover:bg-primary/5 transition-all",
						onClick: () => setShowFilters(!showFilters),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4" }), "Filters"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: sortBy,
						onChange: (e) => setSortBy(e.target.value),
						className: "h-10 px-3 rounded-lg border border-input bg-background/80 backdrop-blur-sm text-sm focus:border-primary focus:outline-none flex-1 sm:flex-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "newest",
								children: "Newest"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "name",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "price-asc",
								children: "Price: Low to High"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "price-desc",
								children: "Price: High to Low"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "stock",
								children: "Stock Level"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					height: 0
				},
				animate: {
					opacity: 1,
					height: "auto"
				},
				exit: {
					opacity: 0,
					height: 0
				},
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-4 rounded-lg border border-border bg-muted/30 backdrop-blur-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium",
							children: "Status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2 mt-2 flex-wrap",
							children: [
								"all",
								"active",
								"draft",
								"archived"
							].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setStatusFilter(status),
								className: cn("px-3 py-1.5 text-xs font-medium rounded-full capitalize transition-all", statusFilter === status ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-background border border-border hover:bg-muted"),
								children: status
							}, status))
						})] })
					})
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedProducts.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -10
				},
				className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: selectedProducts.size
					}), " products selected"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 w-full sm:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						className: "flex-1 sm:flex-none",
						onClick: () => setSelectedProducts(/* @__PURE__ */ new Set()),
						children: "Clear selection"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "destructive",
						size: "sm",
						onClick: handleBulkDelete,
						disabled: isDeleting,
						className: "gap-2 flex-1 sm:flex-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), "Delete selected"]
					})]
				})]
			}) }),
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
				className: "overflow-x-auto rounded-xl border border-border bg-background/80 backdrop-blur-sm shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[800px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "border-b border-border bg-muted/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: selectedProducts.size === paginatedProducts.length && paginatedProducts.length > 0,
										onChange: toggleSelectAll,
										className: "rounded border-input"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4",
									children: "Product"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4",
									children: "Price"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4",
									children: "Stock"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-right",
									children: "Actions"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-border",
						children: paginatedProducts.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.tr, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: index * .05 },
							className: cn("hover:bg-muted/30 transition-colors", selectedProducts.has(product.id) && "bg-primary/5"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: selectedProducts.has(product.id),
										onChange: () => toggleSelectProduct(product.id),
										className: "rounded border-input"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: product.images[0],
											alt: product.name,
											className: "size-12 rounded-lg object-cover shadow-sm"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: product.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: product.slug
										})] })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-4 font-medium",
									children: formatPrice(product.price)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("font-medium", product.stock < 10 ? "text-red-600" : "text-foreground"),
											children: product.stock
										}), product.stock < 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-red-500" })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: cn("inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium capitalize", product.status === "active" && "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400", product.status === "draft" && "bg-yellow-50 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-400", product.status === "archived" && "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"),
										children: [
											product.status === "active" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }),
											product.status === "draft" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3" }),
											product.status === "archived" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "size-3" }),
											product.status
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-end gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "icon",
												variant: "ghost",
												className: "hover:bg-muted transition-all",
												onClick: () => setSelectedProduct(product),
												title: "View product",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "icon",
												variant: "ghost",
												className: "hover:bg-muted transition-all",
												onClick: () => handleDuplicate(product.id),
												title: "Duplicate product",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "icon",
												variant: "ghost",
												className: "hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30 transition-all",
												onClick: () => setDeleteConfirm(product.id),
												title: "Delete product",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
											})
										]
									})
								})
							]
						}, product.id))
					})]
				}), paginatedProducts.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 text-center text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-12 mx-auto mb-3 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No products found" })]
				})]
			}),
			totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"Showing ",
						(currentPage - 1) * itemsPerPage + 1,
						" to",
						" ",
						Math.min(currentPage * itemsPerPage, filteredProducts.length),
						" of",
						" ",
						filteredProducts.length,
						" products"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setCurrentPage((prev) => Math.max(1, prev - 1)),
							disabled: currentPage === 1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
						}),
						Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: currentPage === page ? "default" : "outline",
							size: "sm",
							onClick: () => setCurrentPage(page),
							className: cn(currentPage === page && "bg-primary shadow-lg shadow-primary/20"),
							children: page
						}, page)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setCurrentPage((prev) => Math.min(totalPages, prev + 1)),
							disabled: currentPage === totalPages,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedProduct && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Close product details",
					className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
					onClick: () => setSelectedProduct(null)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .95,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					exit: {
						scale: .95,
						opacity: 0
					},
					transition: {
						type: "spring",
						duration: .5
					},
					className: "relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-border bg-background p-6 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedProduct(null),
							className: "absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: selectedProduct.images[0],
								alt: selectedProduct.name,
								className: "size-32 rounded-lg object-cover shadow-lg"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: selectedProduct.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-2xl sm:text-3xl",
									children: selectedProduct.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: selectedProduct.description
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 grid-cols-1 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Price"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: formatPrice(selectedProduct.price)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Stock"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: selectedProduct.stock
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "SKU"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: selectedProduct.sku
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setSelectedProduct(null),
								children: "Close"
							})
						})
					]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddProductModal, {
				isOpen: showAddProduct,
				onClose: () => setShowAddProduct(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: deleteConfirm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "fixed inset-0 z-50 flex items-center justify-center p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
					onClick: () => setDeleteConfirm(null)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						scale: .9,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					exit: {
						scale: .9,
						opacity: 0
					},
					transition: {
						type: "spring",
						duration: .5
					},
					className: "relative w-full max-w-md rounded-xl border border-border bg-background p-6 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-10 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-5 text-red-600" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold text-lg",
							children: "Delete product?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "This action cannot be undone."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "flex-1",
							onClick: () => setDeleteConfirm(null),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "destructive",
							className: "flex-1 gap-2",
							onClick: () => handleDelete(deleteConfirm),
							disabled: isDeleting,
							children: isDeleting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Deleting..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), "Delete"] })
						})]
					})]
				})]
			}) })
		]
	});
}
function AddProductModal({ isOpen, onClose }) {
	const client = useQueryClient();
	const [imageFiles, setImageFiles] = (0, import_react.useState)([]);
	const [imagePreviews, setImagePreviews] = (0, import_react.useState)([]);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)(null);
	const [categories, setCategories] = (0, import_react.useState)([]);
	const fileInputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (isOpen) {
			const fetchCategories = async () => {
				try {
					const { data, error } = await supabase.from("categories").select("id, slug, name").eq("active", true).order("name");
					if (error) console.error("Failed to fetch categories:", error);
					else setCategories(data || []);
				} catch (error) {
					console.error("Failed to fetch categories:", error);
				}
			};
			fetchCategories();
		}
	}, [isOpen]);
	const handleImageUpload = (e) => {
		const files = Array.from(e.target.files || []);
		if (files.length === 0) return;
		const remainingSlots = 5 - imageFiles.length;
		const filesToAdd = files.slice(0, remainingSlots);
		setImageFiles((prev) => [...prev, ...filesToAdd]);
		const newPreviews = filesToAdd.map((file) => URL.createObjectURL(file));
		setImagePreviews((prev) => [...prev, ...newPreviews]);
	};
	const removeImage = (index) => {
		setImageFiles((prev) => prev.filter((_, i) => i !== index));
		setImagePreviews((prev) => {
			const preview = prev[index];
			if (preview) URL.revokeObjectURL(preview);
			return prev.filter((_, i) => i !== index);
		});
	};
	const uploadImages = async (productId) => {
		if (imageFiles.length === 0) return [];
		const uploaded = [];
		try {
			for (const file of imageFiles) {
				const ext = file.name.split(".").pop() || "jpg";
				const path = `products/${productId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
				try {
					const { error: uploadError } = await supabase.storage.from("product-images").upload(path, file, {
						upsert: true,
						contentType: file.type
					});
					if (uploadError) {
						console.error("Image upload failed:", uploadError);
						continue;
					}
					const { data } = supabase.storage.from("product-images").getPublicUrl(path);
					if (data?.publicUrl) uploaded.push(data.publicUrl);
				} catch (uploadError) {
					console.error("Upload error:", uploadError);
					continue;
				}
			}
		} catch (error) {
			console.error("Upload process error:", error);
		}
		return uploaded;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitError(null);
		const form = e.currentTarget;
		const formData = new FormData(form);
		try {
			const name = String(formData.get("name")).trim();
			const priceRaw = Number(formData.get("price"));
			const category = String(formData.get("category") || "").trim();
			if (!name) {
				setSubmitError("Product name is required.");
				setIsSubmitting(false);
				return;
			}
			if (!category) {
				setSubmitError("Please select a category.");
				setIsSubmitting(false);
				return;
			}
			if (Number.isNaN(priceRaw) || priceRaw < 0) {
				setSubmitError("Enter a valid price.");
				setIsSubmitting(false);
				return;
			}
			const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
			const id = `prd-${Date.now()}`;
			const sku = String(formData.get("sku") || `SLH-${Date.now().toString(36).toUpperCase()}`);
			let imageUrls = [];
			try {
				imageUrls = await uploadImages(id);
			} catch (error) {
				console.error("Image upload failed, using placeholder:", error);
			}
			if (imageUrls.length === 0) imageUrls = ["https://placehold.co/600x800?text=Selah"];
			const created = await productService.create({
				name,
				slug,
				description: String(formData.get("description") ?? ""),
				details: ["Designed for everyday wear"],
				category,
				subcategory: "New release",
				price: Math.round(priceRaw * 100),
				oldPrice: void 0,
				sku,
				stock: Number(formData.get("stock") ?? 0),
				sizes: [
					"XS",
					"S",
					"M",
					"L",
					"XL",
					"XXL"
				],
				colors: [{
					name: "Olive",
					hex: "#6E7A50"
				}, {
					name: "Cream",
					hex: "#F1E9D9"
				}],
				images: imageUrls,
				tags: [],
				rating: 0,
				reviewsCount: 0,
				featured: false,
				bestSeller: false,
				newArrival: true,
				status: "active"
			});
			client.setQueryData(["admin-products"], (prev) => prev ? [created, ...prev] : [created]);
			client.setQueryData(["product", created.slug], created);
			onClose();
			setImageFiles([]);
			setImagePreviews([]);
			form.reset();
		} catch (error) {
			console.error("Failed to create product:", error);
			setSubmitError(error instanceof Error ? error.message : "Failed to create product. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-label": "Close add product",
			className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
			initial: {
				scale: .95,
				opacity: 0,
				y: 20
			},
			animate: {
				scale: 1,
				opacity: 1,
				y: 0
			},
			exit: {
				scale: .95,
				opacity: 0,
				y: 20
			},
			transition: {
				type: "spring",
				duration: .5
			},
			onSubmit: handleSubmit,
			className: "relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-border bg-background p-6 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-primary",
							children: "Catalogue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl sm:text-3xl",
							children: "Add New Product"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Fill in the details below to create a new product"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "p-2 rounded-full hover:bg-muted transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				submitError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm",
					children: submitError
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium mb-2 block",
								children: ["Product Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								required: true,
								placeholder: "Enter product name",
								className: "w-full h-11 px-4 rounded-lg border border-input bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium mb-2 block",
							children: ["Price (£) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-red-500",
								children: "*"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "price",
							type: "number",
							min: "0",
							step: "0.01",
							required: true,
							placeholder: "0.00",
							className: "w-full h-11 px-4 rounded-lg border border-input bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium mb-2 block",
							children: ["Stock ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-red-500",
								children: "*"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "stock",
							type: "number",
							min: "0",
							required: true,
							placeholder: "0",
							className: "w-full h-11 px-4 rounded-lg border border-input bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium mb-2 block",
							children: ["Category ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-red-500",
								children: "*"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "category",
							required: true,
							defaultValue: "",
							className: "w-full h-11 px-4 rounded-lg border border-input bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select a category"
							}), categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: cat.slug,
								children: cat.name
							}, cat.id))]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium mb-2 block",
							children: "SKU"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "sku",
							placeholder: "Auto-generated if left empty",
							className: "w-full h-11 px-4 rounded-lg border border-input bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium mb-2 block",
								children: ["Description ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "description",
								required: true,
								placeholder: "Enter product description",
								className: "w-full min-h-24 px-4 py-3 rounded-lg border border-input bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-medium mb-2 block",
									children: "Product Images"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 sm:grid-cols-3 gap-4",
									children: [imagePreviews.map((preview, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative group",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: preview,
												alt: `Preview ${index + 1}`,
												className: "w-full h-32 object-cover rounded-lg border border-border shadow-sm"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => removeImage(index),
												className: "absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
											}),
											index === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute bottom-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded",
												children: "Main"
											})
										]
									}, index)), imageFiles.length < 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => fileInputRef.current?.click(),
										className: "h-32 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-primary/5 transition-all",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-8 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "Add Image"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileInputRef,
									type: "file",
									accept: "image/*",
									multiple: true,
									onChange: handleImageUpload,
									className: "hidden"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: "Upload up to 5 images. First image will be used as the main product image."
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col sm:flex-row gap-3 justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: onClose,
						className: "w-full sm:w-auto",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: isSubmitting,
						className: "gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/20 transition-all w-full sm:w-auto",
						children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Creating..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Create Product"] })
					})]
				})
			]
		})]
	}) });
}
//#endregion
export { ProductsAdmin as component };
