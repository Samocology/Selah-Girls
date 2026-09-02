import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as formatPrice } from "./http-BiLM6Dn8.mjs";
import { l as useLocation, p as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as DollarSign, C as RefreshCw, Ct as ArrowDownRight, D as Package, Q as Download, Tt as Activity, Z as Ellipsis, _ as ShoppingBag, at as CircleX, bt as ArrowUpRight, ht as Calendar, m as Star, ot as CircleCheck, pt as ChartColumn, r as Users, rt as Clock, u as TriangleAlert } from "../_libs/lucide-react.mjs";
import { t as orderService } from "./orderService-DHkekNJi.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { t as MemoizedAdminGate } from "./admin-BrMsFM9i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DOD1qroW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminHome() {
	const { pathname } = useLocation();
	const isOverview = pathname === "/admin";
	const content = (0, import_react.useMemo)(() => isOverview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), [isOverview]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoizedAdminGate, { children: content });
}
function Overview() {
	const [timeRange, setTimeRange] = (0, import_react.useState)("30d");
	const [isRefreshing, setIsRefreshing] = (0, import_react.useState)(false);
	const analytics = useQuery({
		queryKey: ["analytics", timeRange],
		queryFn: () => orderService.analytics(timeRange === "90d" ? "3m" : timeRange),
		staleTime: 3e5,
		refetchOnWindowFocus: false
	});
	const orders = useQuery({
		queryKey: ["admin-orders"],
		queryFn: () => orderService.list(),
		staleTime: 6e4
	});
	const data = (0, import_react.useMemo)(() => analytics.data, [analytics.data]);
	const orderRows = (0, import_react.useMemo)(() => orders.data ?? [], [orders.data]);
	const timeRanges = (0, import_react.useMemo)(() => [
		{
			value: "7d",
			label: "7 days"
		},
		{
			value: "30d",
			label: "30 days"
		},
		{
			value: "90d",
			label: "90 days"
		}
	], []);
	const stats = (0, import_react.useMemo)(() => [
		{
			label: "Revenue",
			value: formatPrice(data?.revenue ?? 0),
			icon: DollarSign,
			change: "+12.5%",
			trend: "up",
			color: "from-emerald-500 to-teal-500",
			bgColor: "bg-emerald-50 dark:bg-emerald-950/20"
		},
		{
			label: "Orders",
			value: data?.orders ?? 0,
			icon: ShoppingBag,
			change: "+8.2%",
			trend: "up",
			color: "from-blue-500 to-indigo-500",
			bgColor: "bg-blue-50 dark:bg-blue-950/20"
		},
		{
			label: "Units Sold",
			value: data?.unitsSold ?? 0,
			icon: Package,
			change: "+15.3%",
			trend: "up",
			color: "from-purple-500 to-pink-500",
			bgColor: "bg-purple-50 dark:bg-purple-950/20"
		},
		{
			label: "Avg. Order Value",
			value: formatPrice(data?.averageOrderValue ?? 0),
			icon: Activity,
			change: "-2.1%",
			trend: "down",
			color: "from-orange-500 to-red-500",
			bgColor: "bg-orange-50 dark:bg-orange-950/20"
		}
	], [data]);
	const storeHealth = (0, import_react.useMemo)(() => [
		{
			label: "Pending orders",
			value: data?.pendingOrders ?? 0,
			icon: Clock,
			color: "text-yellow-600",
			bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
		},
		{
			label: "Low stock pieces",
			value: data?.lowStock ?? 0,
			icon: TriangleAlert,
			color: "text-orange-600",
			bgColor: "bg-orange-50 dark:bg-orange-950/20"
		},
		{
			label: "Out of stock",
			value: data?.outOfStock ?? 0,
			icon: CircleX,
			color: "text-red-600",
			bgColor: "bg-red-50 dark:bg-red-950/20"
		}
	], [data]);
	const topProducts = (0, import_react.useMemo)(() => data?.topProducts?.slice(0, 4) ?? [], [data?.topProducts]);
	const recentActivity = (0, import_react.useMemo)(() => [
		{
			icon: Users,
			label: "New customers",
			value: String(data?.newCustomers ?? 0),
			change: "+18%",
			color: "from-blue-500 to-cyan-500"
		},
		{
			icon: Star,
			label: "Active products",
			value: String(data?.totalProducts ?? 0),
			change: "+0.2",
			color: "from-yellow-500 to-amber-500"
		},
		{
			icon: CircleCheck,
			label: "Completed orders",
			value: String(orderRows.filter((o) => o.status === "delivered").length),
			change: "+12%",
			color: "from-emerald-500 to-green-500"
		}
	], [data, orderRows]);
	const handleTimeRangeChange = (0, import_react.useCallback)((range) => {
		setTimeRange(range);
	}, []);
	const handleRefresh = (0, import_react.useCallback)(async () => {
		setIsRefreshing(true);
		try {
			await analytics.refetch();
		} finally {
			setIsRefreshing(false);
		}
	}, [analytics.refetch]);
	const handleDownload = (0, import_react.useCallback)(() => {
		console.log("Download report");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
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
				className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-primary flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-4" }), "Studio overview"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl md:text-5xl",
						children: "Good morning."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Here's what's happening with your store today."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex rounded-lg border border-border bg-background p-1",
							children: timeRanges.map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleTimeRangeChange(range.value),
								className: cn("px-3 py-1.5 text-xs font-medium rounded-md transition-all", timeRange === range.value ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
								children: range.label
							}, range.value))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleRefresh,
							disabled: isRefreshing,
							className: "p-2 rounded-lg border border-border hover:bg-muted transition-colors disabled:opacity-50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("size-4", isRefreshing && "animate-spin") })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleDownload,
							className: "p-2 rounded-lg border border-border hover:bg-muted transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: stats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: index * .1 },
					whileHover: { y: -2 },
					className: "group relative overflow-hidden rounded-xl border border-border bg-background p-6 transition-all hover:shadow-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity", "bg-gradient-to-br", stat.color) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("size-10 rounded-lg flex items-center justify-center", stat.bgColor),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, { className: "size-5 text-primary" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("inline-flex items-center gap-1 text-xs font-medium", stat.trend === "up" ? "text-emerald-600" : "text-red-600"),
									children: [stat.trend === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "size-3" }), stat.change]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: stat.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-3xl",
								children: stat.value
							})
						]
					})]
				}, stat.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
					initial: {
						opacity: 0,
						x: -20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: .4 },
					className: "rounded-xl border border-border bg-background p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Store health"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "p-2 hover:bg-muted rounded-lg transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-4",
						children: storeHealth.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -10
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: .5 + index * .1 },
							className: "flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("size-10 rounded-lg flex items-center justify-center", item.bgColor),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: cn("size-5", item.color) })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: item.label
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-lg",
								children: item.value
							})]
						}, item.label))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
					initial: {
						opacity: 0,
						x: 20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: .4 },
					className: "rounded-xl border border-border bg-background p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Top pieces"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-sm text-primary hover:underline",
							children: "View all"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4",
						children: [topProducts.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .5 + index * .1 },
							className: "flex items-center justify-between gap-4 p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 text-primary" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium truncate",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											"#",
											index + 1,
											" best seller"
										]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-semibold",
									children: [item.units, " sold"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [(item.units / (data?.unitsSold || 1) * 100).toFixed(1), "%"]
								})]
							})]
						}, item.name)), !topProducts.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center py-8 text-muted-foreground",
							children: "No sales data yet"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .6 },
				className: "rounded-xl border border-border bg-background p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Recent activity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "p-2 hover:bg-muted rounded-lg transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-3",
					children: recentActivity.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .9
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: { delay: .7 + index * .1 },
						whileHover: { y: -2 },
						className: "p-4 rounded-lg border border-border/50 hover:shadow-md transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("size-10 rounded-lg bg-gradient-to-br flex items-center justify-center", item.color),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5 text-white" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [item.change, " this period"]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-2xl",
							children: item.value
						})]
					}, item.label))
				})]
			})
		]
	});
}
//#endregion
export { AdminHome as component };
