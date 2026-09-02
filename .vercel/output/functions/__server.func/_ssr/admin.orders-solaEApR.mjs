import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as formatPrice } from "./http-BiLM6Dn8.mjs";
import { $ as DollarSign, C as RefreshCw, D as Package, Q as Download, S as Search, Y as Eye, Z as Ellipsis, _ as ShoppingBag, at as CircleX, ct as ChevronRight, d as TrendingUp, l as Truck, lt as ChevronLeft, ot as CircleCheck, q as Funnel, r as Users, rt as Clock, st as CircleAlert } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-BKNC97i9.mjs";
import { t as orderService } from "./orderService-DHkekNJi.mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.orders-solaEApR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrdersAdmin() {
	const client = useQueryClient();
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [paymentFilter, setPaymentFilter] = (0, import_react.useState)("all");
	const [sortBy, setSortBy] = (0, import_react.useState)("newest");
	const [selectedOrder, setSelectedOrder] = (0, import_react.useState)(null);
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const [isUpdating, setIsUpdating] = (0, import_react.useState)(false);
	const itemsPerPage = 10;
	const query = useQuery({
		queryKey: ["admin-orders"],
		queryFn: () => orderService.list()
	});
	const filteredOrders = (0, import_react.useMemo)(() => {
		let orders = query.data ?? [];
		if (searchTerm) {
			const search = searchTerm.toLowerCase();
			orders = orders.filter((order) => order.reference.toLowerCase().includes(search) || order.customerName.toLowerCase().includes(search));
		}
		if (statusFilter !== "all") orders = orders.filter((order) => order.status === statusFilter);
		if (paymentFilter !== "all") orders = orders.filter((order) => order.paymentStatus === paymentFilter);
		switch (sortBy) {
			case "oldest":
				orders = [...orders].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
				break;
			case "total-asc":
				orders = [...orders].sort((a, b) => a.total - b.total);
				break;
			case "total-desc":
				orders = [...orders].sort((a, b) => b.total - a.total);
				break;
			default: orders = [...orders].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
		}
		return orders;
	}, [
		query.data,
		searchTerm,
		statusFilter,
		paymentFilter,
		sortBy
	]);
	const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
	const paginatedOrders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
	const stats = (0, import_react.useMemo)(() => {
		const orders = query.data ?? [];
		return {
			total: orders.length,
			pending: orders.filter((o) => [
				"pending",
				"confirmed",
				"processing"
			].includes(o.status)).length,
			shipped: orders.filter((o) => ["shipped", "out-for-delivery"].includes(o.status)).length,
			delivered: orders.filter((o) => o.status === "delivered").length,
			totalRevenue: orders.reduce((sum, o) => sum + o.total, 0)
		};
	}, [query.data]);
	const handleStatusUpdate = async (orderId, status) => {
		setIsUpdating(true);
		try {
			await orderService.updateStatus(orderId, status);
			await client.invalidateQueries({ queryKey: ["admin-orders"] });
		} catch (error) {
			console.error("Failed to update order status:", error);
		} finally {
			setIsUpdating(false);
		}
	};
	const getStatusColor = (status) => {
		switch (status) {
			case "pending": return "bg-yellow-50 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-400";
			case "confirmed": return "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400";
			case "processing": return "bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400";
			case "shipped": return "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400";
			case "out-for-delivery": return "bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400";
			case "delivered": return "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400";
			case "cancelled": return "bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400";
			default: return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
		}
	};
	const getStatusIcon = (status) => {
		switch (status) {
			case "pending": return Clock;
			case "confirmed": return CircleCheck;
			case "processing": return Package;
			case "shipped": return Truck;
			case "out-for-delivery": return Truck;
			case "delivered": return CircleCheck;
			case "cancelled": return CircleX;
			default: return CircleAlert;
		}
	};
	const getPaymentColor = (paymentStatus) => {
		switch (paymentStatus) {
			case "paid": return "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400";
			case "pending": return "bg-yellow-50 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-400";
			case "failed": return "bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400";
			default: return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
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
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-primary flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" }), "Fulfilment"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl",
						children: "Orders"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Track and manage customer orders"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" }), "Refresh"]
					})]
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
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						label: "Total Orders",
						value: stats.total,
						icon: ShoppingBag,
						color: "from-blue-500 to-cyan-500"
					},
					{
						label: "Pending",
						value: stats.pending,
						icon: Clock,
						color: "from-yellow-500 to-amber-500"
					},
					{
						label: "Shipped",
						value: stats.shipped,
						icon: Truck,
						color: "from-indigo-500 to-purple-500"
					},
					{
						label: "Revenue",
						value: formatPrice(stats.totalRevenue),
						icon: DollarSign,
						color: "from-emerald-500 to-green-500"
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
					className: "p-5 rounded-xl border border-border bg-background",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("size-10 rounded-lg bg-gradient-to-br flex items-center justify-center", stat.color),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, { className: "size-5 text-white" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4 text-emerald-500" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-2xl font-semibold",
							children: stat.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
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
					className: "relative flex-1 max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "search",
						placeholder: "Search orders by reference or customer...",
						value: searchTerm,
						onChange: (e) => setSearchTerm(e.target.value),
						className: "w-full h-10 pl-9 pr-4 rounded-lg border border-input bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "gap-2",
						onClick: () => setShowFilters(!showFilters),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4" }), "Filters"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: sortBy,
						onChange: (e) => setSortBy(e.target.value),
						className: "h-10 px-3 rounded-lg border border-input bg-background text-sm focus:border-primary focus:outline-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "newest",
								children: "Newest"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "oldest",
								children: "Oldest"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "total-asc",
								children: "Total: Low to High"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "total-desc",
								children: "Total: High to Low"
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
					className: "p-4 rounded-lg border border-border bg-muted/30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium",
							children: "Order Status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2 mt-2",
							children: [
								"all",
								"pending",
								"confirmed",
								"processing",
								"shipped",
								"out-for-delivery",
								"delivered",
								"cancelled"
							].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setStatusFilter(status),
								className: cn("px-3 py-1.5 text-xs font-medium rounded-full capitalize transition-all", statusFilter === status ? "bg-primary text-primary-foreground" : "bg-background border border-border hover:bg-muted"),
								children: status.replaceAll("-", " ")
							}, status))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium",
							children: "Payment Status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2 mt-2",
							children: [
								"all",
								"paid",
								"unpaid",
								"failed"
							].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setPaymentFilter(status),
								className: cn("px-3 py-1.5 text-xs font-medium rounded-full capitalize transition-all", paymentFilter === status ? "bg-primary text-primary-foreground" : "bg-background border border-border hover:bg-muted"),
								children: status
							}, status))
						})] })]
					})
				})
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
				className: "overflow-x-auto rounded-xl border border-border bg-background shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[800px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "border-b border-border bg-muted/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4",
									children: "Order"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4",
									children: "Customer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4",
									children: "Total"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4",
									children: "Payment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-right",
									children: "Actions"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-border",
						children: paginatedOrders.map((order, index) => {
							const StatusIcon = getStatusIcon(order.status);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.tr, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								transition: { delay: index * .05 },
								className: "hover:bg-muted/30 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setSelectedOrder(order.id),
											className: "font-medium hover:text-primary transition-colors",
											children: order.reference
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs font-normal text-muted-foreground",
											children: new Date(order.createdAt).toLocaleDateString("en-NG", {
												year: "numeric",
												month: "short",
												day: "numeric"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "size-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 text-primary" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium",
												children: order.customerName
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: order.customerEmail
											})] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4 font-medium",
										children: formatPrice(order.total)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: order.status,
													onChange: async (event) => {
														await handleStatusUpdate(order.id, event.target.value);
													},
													disabled: isUpdating,
													className: cn("appearance-none pl-8 pr-8 py-1.5 text-xs font-medium rounded-lg border cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", getStatusColor(order.status), isUpdating && "opacity-50 cursor-not-allowed"),
													children: [
														"pending",
														"confirmed",
														"processing",
														"shipped",
														"out-for-delivery",
														"delivered",
														"cancelled"
													].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: status,
														children: status.replaceAll("-", " ")
													}, status))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 pointer-events-none" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 pointer-events-none opacity-50" })
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: cn("inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium capitalize", getPaymentColor(order.paymentStatus)),
											children: [
												order.paymentStatus === "paid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }),
												order.paymentStatus === "unpaid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3" }),
												order.paymentStatus === "failed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-3" }),
												order.paymentStatus
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-end gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "icon",
												variant: "ghost",
												className: "hover:bg-muted",
												onClick: () => setSelectedOrder(order.id),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "icon",
												variant: "ghost",
												className: "hover:bg-muted",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
											})]
										})
									})
								]
							}, order.id);
						})
					})]
				}), paginatedOrders.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-8 text-center text-muted-foreground",
					children: "No orders found"
				})]
			}),
			totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"Showing ",
						(currentPage - 1) * itemsPerPage + 1,
						" to ",
						Math.min(currentPage * itemsPerPage, filteredOrders.length),
						" of ",
						filteredOrders.length,
						" orders"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "fixed inset-0 z-50 flex items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					className: "absolute inset-0 bg-black/50",
					onClick: () => setSelectedOrder(null)
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
					className: "relative w-full max-w-2xl rounded-xl border border-border bg-background p-6 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Order Details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedOrder(null),
							className: "p-2 hover:bg-muted rounded-lg transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-5" })
						})]
					}), (() => {
						const order = query.data?.find((item) => item.id === selectedOrder);
						return order ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 text-sm sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "Customer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-medium",
										children: order.customerName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: order.customerEmail
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "Total"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-medium",
										children: formatPrice(order.total)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs capitalize text-muted-foreground",
										children: order.paymentStatus
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "Delivery address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1",
										children: [
											order.address.street,
											", ",
											order.address.city,
											", ",
											order.address.state
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "Items"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 space-y-2",
										children: order.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between border-b border-border pb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												item.name,
												" × ",
												item.quantity
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(item.price * item.quantity) })]
										}, `${item.slug}-${item.size}`))
									})]
								})
							]
						}) : null;
					})()]
				})]
			}) })
		]
	});
}
//#endregion
export { OrdersAdmin as component };
