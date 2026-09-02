import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as formatPrice } from "./http-BiLM6Dn8.mjs";
import { $ as DollarSign, C as RefreshCw, Ct as ArrowDownRight, Q as Download, Tt as Activity, _ as ShoppingBag, bt as ArrowUpRight, d as TrendingUp, ft as ChartLine, m as Star, p as Target, pt as ChartColumn, r as Users, ut as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-BKNC97i9.mjs";
import { t as orderService } from "./orderService-DHkekNJi.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.analytics-DGj76TVu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AnalyticsAdmin() {
	const [timeRange, setTimeRange] = (0, import_react.useState)("12m");
	const [chartType, setChartType] = (0, import_react.useState)("bar");
	const [showDetailedStats, setShowDetailedStats] = (0, import_react.useState)(false);
	const data = useQuery({
		queryKey: ["analytics", timeRange],
		queryFn: () => orderService.analytics(timeRange)
	}).data;
	const metrics = (0, import_react.useMemo)(() => {
		if (!data) return null;
		const totalOrders = data.orders ?? 0;
		const totalRevenue = data.revenue ?? 0;
		const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
		const customerCount = data.customers ?? 0;
		return {
			...data,
			averageOrderValue,
			ordersPerCustomer: customerCount > 0 ? totalOrders / customerCount : 0,
			revenuePerCustomer: customerCount > 0 ? totalRevenue / customerCount : 0
		};
	}, [data]);
	const timeRanges = [
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
		},
		{
			value: "12m",
			label: "12 months"
		}
	];
	const stats = [
		{
			label: "Paid Revenue",
			value: formatPrice(metrics?.paidRevenue ?? 0),
			change: "+12.5%",
			trend: "up",
			icon: DollarSign,
			color: "from-emerald-500 to-green-500",
			bgColor: "bg-emerald-50 dark:bg-emerald-950/20"
		},
		{
			label: "Total Customers",
			value: metrics?.customers ?? 0,
			change: "+8.2%",
			trend: "up",
			icon: Users,
			color: "from-blue-500 to-cyan-500",
			bgColor: "bg-blue-50 dark:bg-blue-950/20"
		},
		{
			label: "Conversion Rate",
			value: `${metrics?.conversionRate ?? 0}%`,
			change: "+2.4%",
			trend: "up",
			icon: Target,
			color: "from-purple-500 to-pink-500",
			bgColor: "bg-purple-50 dark:bg-purple-950/20"
		},
		{
			label: "Avg. Order Value",
			value: formatPrice(metrics?.averageOrderValue ?? 0),
			change: "-1.2%",
			trend: "down",
			icon: ShoppingBag,
			color: "from-orange-500 to-amber-500",
			bgColor: "bg-orange-50 dark:bg-orange-950/20"
		}
	];
	const maxRevenue = (0, import_react.useMemo)(() => {
		if (!data?.series?.length) return 1;
		const revenues = data.series.map((item) => item.revenue);
		return Math.max(...revenues, 1);
	}, [data?.series]);
	const renderBarChart = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-64 items-end gap-2 border-b border-l border-border px-4 pt-4",
		children: data?.series.map((point, index) => {
			const height = point.revenue / maxRevenue * 100;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					height: 0,
					opacity: 0
				},
				animate: {
					height: `${Math.max(8, height)}%`,
					opacity: 1
				},
				transition: {
					delay: index * .05,
					duration: .5
				},
				className: "group relative flex flex-1 flex-col items-center justify-end gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background border border-border rounded-lg px-2 py-1 text-xs whitespace-nowrap shadow-lg z-10",
						children: formatPrice(point.revenue)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: cn("w-full max-w-12 rounded-t-lg transition-all cursor-pointer", "bg-gradient-to-t from-primary/60 to-primary/20", "hover:from-primary hover:to-primary/40"),
						style: { height: `${Math.max(8, height)}%` },
						whileHover: { scaleX: 1.1 }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-muted-foreground",
						children: point.month
					})
				]
			}, point.month);
		})
	});
	const renderLineChart = () => {
		const points = data?.series ?? [];
		const chartWidth = 100;
		const chartHeight = 50;
		const coordinates = points.map((point, index) => {
			return {
				x: points.length > 1 ? index / (points.length - 1) * chartWidth : chartWidth / 2,
				y: chartHeight - point.revenue / maxRevenue * chartHeight,
				...point
			};
		});
		const linePath = coordinates.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-64",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: `0 0 ${chartWidth} ${chartHeight}`,
				className: "w-full h-full",
				preserveAspectRatio: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "lineGradient",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "0%",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "hsl(var(--primary))",
							stopOpacity: "0.3"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "hsl(var(--primary))",
							stopOpacity: "0.8"
						})]
					}) }),
					[
						0,
						25,
						50,
						75,
						100
					].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "0",
						y1: y,
						x2: chartWidth,
						y2: y,
						stroke: "hsl(var(--border))",
						strokeWidth: "0.5"
					}, y)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
						initial: { pathLength: 0 },
						animate: { pathLength: 1 },
						transition: {
							duration: 1.5,
							ease: "easeInOut"
						},
						d: linePath,
						fill: "none",
						stroke: "url(#lineGradient)",
						strokeWidth: "2"
					}),
					coordinates.map((point, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
						initial: { scale: 0 },
						animate: { scale: 1 },
						transition: { delay: .5 + index * .1 },
						cx: point.x,
						cy: point.y,
						r: "1.5",
						fill: "hsl(var(--primary))",
						className: "cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: `${point.month}: ${formatPrice(point.revenue)}` })
					}, index))
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-0 right-0 flex justify-between px-2",
				children: points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-muted-foreground",
					children: point.month
				}, point.month))
			})]
		});
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-4" }), "Performance"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl",
						children: "Analytics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Track your store's performance and growth"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export report"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" })
					})]
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
				transition: { delay: .1 },
				className: "flex flex-wrap gap-2",
				children: timeRanges.map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTimeRange(range.value),
					className: cn("px-4 py-2 text-sm font-medium rounded-lg transition-all", timeRange === range.value ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-background border border-border hover:bg-muted"),
					children: range.label
				}, range.value))
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
				transition: { delay: .2 },
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: stats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: { delay: .25 + index * .05 },
					whileHover: { y: -2 },
					className: "relative overflow-hidden rounded-xl border border-border bg-background p-5 transition-all hover:shadow-lg",
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute inset-0 opacity-0 hover:opacity-10 transition-opacity", "bg-gradient-to-br", stat.color) })
					]
				}, stat.label))
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
				transition: { delay: .4 },
				className: "rounded-xl border border-border bg-background p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Revenue overview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "Monthly revenue performance"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 rounded-lg border border-border p-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setChartType("bar"),
							className: cn("p-2 rounded-md transition-all", chartType === "bar" ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted"),
							title: "Bar chart",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setChartType("line"),
							className: cn("p-2 rounded-md transition-all", chartType === "line" ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted"),
							title: "Line chart",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "size-4" })
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -10
						},
						transition: { duration: .3 },
						children: chartType === "bar" ? renderBarChart() : renderLineChart()
					}, chartType)
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
				transition: { delay: .5 },
				className: "rounded-xl border border-border bg-background p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Detailed statistics"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "Key performance indicators"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setShowDetailedStats(!showDetailedStats),
						className: "p-2 hover:bg-muted rounded-lg transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-5 transition-transform", showDetailedStats && "rotate-180") })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showDetailedStats && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
						className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								label: "Average Order Value",
								value: formatPrice(metrics?.averageOrderValue ?? 0),
								icon: ShoppingBag,
								color: "from-blue-500 to-cyan-500"
							},
							{
								label: "Orders per Customer",
								value: metrics?.ordersPerCustomer?.toFixed(1) ?? "0",
								icon: Activity,
								color: "from-purple-500 to-pink-500"
							},
							{
								label: "Revenue per Customer",
								value: formatPrice(metrics?.revenuePerCustomer ?? 0),
								icon: DollarSign,
								color: "from-emerald-500 to-green-500"
							},
							{
								label: "Top Product",
								value: data?.topProducts?.[0]?.name ?? "N/A",
								icon: Star,
								color: "from-orange-500 to-amber-500"
							},
							{
								label: "Units Sold",
								value: data?.unitsSold ?? 0,
								icon: ShoppingBag,
								color: "from-indigo-500 to-purple-500"
							},
							{
								label: "Peak Month",
								value: data?.series?.reduce((max, p) => {
									if (!max || p.revenue > max.revenue) return p;
									return max;
								}, void 0)?.month ?? "N/A",
								icon: TrendingUp,
								color: "from-red-500 to-pink-500"
							}
						].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: index * .05 },
							className: "p-4 rounded-lg border border-border/50 hover:shadow-md transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("size-8 rounded-lg bg-gradient-to-br flex items-center justify-center", item.color),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 text-white" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium truncate",
									children: item.value
								})] })]
							})
						}, item.label))
					})
				}) })]
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Top performing products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-4",
					children: data?.topProducts?.slice(0, 5).map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: -10
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: { delay: .65 + index * .05 },
						className: "flex items-center gap-4 p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("size-8 rounded-lg flex items-center justify-center text-sm font-semibold", index === 0 ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-400" : index === 1 ? "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400" : index === 2 ? "bg-orange-100 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400" : "bg-muted text-muted-foreground"),
								children: ["#", index + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: product.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground",
									children: [product.units, " units sold"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: formatPrice(product.revenue ?? 0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [(product.units / (data?.unitsSold || 1) * 100).toFixed(1), "% of sales"]
								})]
							})
						]
					}, product.name))
				})]
			})
		]
	});
}
//#endregion
export { AnalyticsAdmin as component };
