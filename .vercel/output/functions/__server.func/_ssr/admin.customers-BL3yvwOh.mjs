import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as formatPrice } from "./http-BiLM6Dn8.mjs";
import { $ as DollarSign, M as Mail, Q as Download, S as Search, T as Phone, Y as Eye, Z as Ellipsis, _ as ShoppingBag, at as CircleX, ct as ChevronRight, d as TrendingUp, lt as ChevronLeft, o as UserPlus, ot as CircleCheck, pt as ChartColumn, q as Funnel, r as Users, st as CircleAlert } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-BKNC97i9.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import { t as customerService } from "./customerService-Bcvfr_u4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.customers-BL3yvwOh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CustomersAdmin() {
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [sortBy, setSortBy] = (0, import_react.useState)("orders");
	const [selectedCustomer, setSelectedCustomer] = (0, import_react.useState)(null);
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const itemsPerPage = 12;
	const [viewMode, setViewMode] = (0, import_react.useState)("grid");
	const query = useQuery({
		queryKey: ["admin-customers"],
		queryFn: () => customerService.list()
	});
	const filteredCustomers = (0, import_react.useMemo)(() => {
		let customers = query.data ?? [];
		if (searchTerm) {
			const search = searchTerm.toLowerCase();
			customers = customers.filter((customer) => customer.name.toLowerCase().includes(search) || customer.email.toLowerCase().includes(search) || customer.phone && customer.phone.toLowerCase().includes(search));
		}
		if (statusFilter !== "all") customers = customers.filter((customer) => customer.status === statusFilter);
		switch (sortBy) {
			case "name":
				customers = [...customers].sort((a, b) => a.name.localeCompare(b.name));
				break;
			case "orders":
				customers = [...customers].sort((a, b) => b.orders - a.orders);
				break;
			case "spent": customers = [...customers].sort((a, b) => b.totalSpent - a.totalSpent);
		}
		return customers;
	}, [
		query.data,
		searchTerm,
		statusFilter,
		sortBy
	]);
	const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
	const paginatedCustomers = filteredCustomers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
	const stats = (0, import_react.useMemo)(() => {
		const customers = query.data ?? [];
		return {
			total: customers.length,
			active: customers.filter((c) => c.status === "active").length,
			blocked: customers.filter((c) => c.status === "blocked").length,
			totalRevenue: customers.reduce((sum, c) => sum + c.totalSpent, 0),
			avgCustomerValue: customers.length > 0 ? customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.length : 0
		};
	}, [query.data]);
	const getStatusColor = (status) => {
		switch (status) {
			case "active": return "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400";
			case "blocked": return "bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400";
			default: return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
		}
	};
	const getStatusIcon = (status) => {
		switch (status) {
			case "active": return CircleCheck;
			case "blocked": return CircleX;
			default: return CircleAlert;
		}
	};
	const getCustomerInitials = (name) => {
		return name.split(" ").map((word) => word.charAt(0)).join("").toUpperCase().slice(0, 2);
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" }), "Community"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl",
						children: "Customers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Manage and understand your customer base"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-4" }), "Add customer"]
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
						label: "Total Customers",
						value: stats.total,
						icon: Users,
						color: "from-blue-500 to-cyan-500"
					},
					{
						label: "Active",
						value: stats.active,
						icon: CircleCheck,
						color: "from-emerald-500 to-green-500"
					},
					{
						label: "Blocked",
						value: stats.blocked,
						icon: CircleX,
						color: "from-red-500 to-pink-500"
					},
					{
						label: "Avg. Customer Value",
						value: formatPrice(stats.avgCustomerValue),
						icon: DollarSign,
						color: "from-orange-500 to-amber-500"
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
							}), index === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4 text-emerald-500" })]
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
						placeholder: "Search customers...",
						value: searchTerm,
						onChange: (e) => setSearchTerm(e.target.value),
						className: "w-full h-10 pl-9 pr-4 rounded-lg border border-input bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "gap-2",
							onClick: () => setShowFilters(!showFilters),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4" }), "Filters"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: sortBy,
							onChange: (e) => setSortBy(e.target.value),
							className: "h-10 px-3 rounded-lg border border-input bg-background text-sm focus:border-primary focus:outline-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "orders",
									children: "Most Orders"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "name",
									children: "Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "spent",
									children: "Highest Spent"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden md:flex items-center gap-1 rounded-lg border border-border p-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setViewMode("grid"),
								className: cn("p-2 rounded-md transition-all", viewMode === "grid" ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setViewMode("list"),
								className: cn("p-2 rounded-md transition-all", viewMode === "list" ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" })
							})]
						})
					]
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium",
						children: "Customer Status"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 mt-2",
						children: [
							"all",
							"active",
							"blocked"
						].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setStatusFilter(status),
							className: cn("px-3 py-1.5 text-xs font-medium rounded-full capitalize transition-all", statusFilter === status ? "bg-primary text-primary-foreground" : "bg-background border border-border hover:bg-muted"),
							children: status
						}, status))
					})] })
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .3 },
				className: cn(viewMode === "grid" ? "grid gap-4 md:grid-cols-2 xl:grid-cols-3" : "space-y-4"),
				children: paginatedCustomers.map((customer, index) => {
					const StatusIcon = getStatusIcon(customer.status);
					if (viewMode === "grid") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							scale: .95
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: { delay: index * .05 },
						whileHover: { y: -2 },
						className: "relative overflow-hidden rounded-xl border border-border bg-background p-5 transition-all hover:shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-lg font-semibold text-primary",
										children: getCustomerInitials(customer.name)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute -bottom-1 -right-1 size-4 rounded-full border-2 border-background", customer.status === "active" ? "bg-emerald-500" : "bg-red-500") })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-medium truncate",
											children: customer.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-sm text-muted-foreground truncate",
											children: customer.email
										}),
										customer.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-0.5 text-xs text-muted-foreground flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3" }), customer.phone]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-between border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-4 text-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-3.5 text-muted-foreground" }),
											customer.orders,
											" orders"
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-sm",
									children: formatPrice(customer.totalSpent)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									className: "flex-1 gap-1",
									onClick: () => setSelectedCustomer(customer.id),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" }), "View"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									className: "flex-1 gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), "Email"]
								})]
							})
						]
					}, customer.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							x: -10
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: { delay: index * .05 },
						className: "flex items-center gap-4 p-4 rounded-lg border border-border bg-background hover:bg-muted/30 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-semibold text-primary",
									children: getCustomerInitials(customer.name)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-background", customer.status === "active" ? "bg-emerald-500" : "bg-red-500") })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-medium truncate",
										children: customer.name
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground truncate",
									children: customer.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-medium",
									children: [customer.orders, " orders"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Total orders"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden md:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: formatPrice(customer.totalSpent)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Total spent"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium capitalize", getStatusColor(customer.status)),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { className: "size-3" }), customer.status]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								className: "hover:bg-muted",
								onClick: () => setSelectedCustomer(customer.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
							})
						]
					}, customer.id);
				})
			}),
			paginatedCustomers.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-8 text-center text-muted-foreground",
				children: "No customers found"
			}),
			totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"Showing ",
						(currentPage - 1) * itemsPerPage + 1,
						" to ",
						Math.min(currentPage * itemsPerPage, filteredCustomers.length),
						" of ",
						filteredCustomers.length,
						" customers"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedCustomer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "fixed inset-0 z-50 flex items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					className: "absolute inset-0 bg-black/50",
					onClick: () => setSelectedCustomer(null)
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
							children: "Customer Details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedCustomer(null),
							className: "p-2 hover:bg-muted rounded-lg transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-5" })
						})]
					}), (() => {
						const customer = query.data?.find((item) => item.id === selectedCustomer);
						return customer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 text-sm sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: customer.name
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 capitalize font-medium",
									children: customer.status
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 break-all",
									children: customer.email
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1",
									children: customer.phone
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Orders"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: customer.orders
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Total spent"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: formatPrice(customer.totalSpent)
								})] })
							]
						}) : null;
					})()]
				})]
			}) })
		]
	});
}
//#endregion
export { CustomersAdmin as component };
