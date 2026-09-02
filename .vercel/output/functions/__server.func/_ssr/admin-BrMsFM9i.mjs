import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link, h as createFileRoute, l as useLocation, m as lazyRouteComponent, v as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Menu, D as Package, M as Mail, N as LogOut, P as Lock, S as Search, X as EyeOff, Y as Eye, _t as Boxes, ct as ChevronRight, d as TrendingUp, et as Crown, h as Sparkles, it as ClipboardList, n as X, pt as ChartColumn, r as Users, st as CircleAlert, v as Shield, vt as Bell, x as Settings, xt as ArrowRight, z as LayoutDashboard } from "../_libs/lucide-react.mjs";
import { n as useAuth } from "./AuthContext-BtY1UeRs.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BrMsFM9i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		to: "/admin",
		label: "Overview",
		icon: LayoutDashboard,
		description: "Dashboard"
	},
	{
		to: "/admin/products",
		label: "Products",
		icon: Boxes,
		description: "Manage inventory"
	},
	{
		to: "/admin/orders",
		label: "Orders",
		icon: ClipboardList,
		description: "Track orders"
	},
	{
		to: "/admin/customers",
		label: "Customers",
		icon: Users,
		description: "Customer list"
	},
	{
		to: "/admin/analytics",
		label: "Analytics",
		icon: ChartColumn,
		description: "Insights & reports"
	}
];
function AdminLayout({ children }) {
	const { pathname } = useLocation();
	const { user, logout } = useAuth();
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const [notificationsOpen, setNotificationsOpen] = (0, import_react.useState)(false);
	const [userMenuOpen, setUserMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMobileMenuOpen(false);
		setNotificationsOpen(false);
		setUserMenuOpen(false);
	}, [pathname]);
	const notifications = [
		{
			id: 1,
			title: "New order received",
			description: "Order #1234 from Lagos",
			time: "2 min ago",
			unread: true
		},
		{
			id: 2,
			title: "Low stock alert",
			description: "3 products running low",
			time: "1 hour ago",
			unread: true
		},
		{
			id: 3,
			title: "Payment received",
			description: "Order #1230 payment confirmed",
			time: "3 hours ago",
			unread: false
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "theme-admin min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
			initial: {
				y: -20,
				opacity: 0
			},
			animate: {
				y: 0,
				opacity: 1
			},
			className: "sticky top-0 z-40 border-b border-sidebar-border bg-sidebar text-sidebar-foreground backdrop-blur-lg bg-opacity-95",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex h-[4.5rem] items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMobileMenuOpen(!mobileMenuOpen),
							className: "lg:hidden p-2 rounded-lg hover:bg-sidebar-accent transition-colors",
							children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "group flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								whileHover: { rotate: 360 },
								transition: { duration: .5 },
								className: "grid size-9 place-items-center rounded-xl bg-gradient-to-br from-sidebar-primary to-sidebar-primary/80 text-sm font-bold text-sidebar-primary-foreground shadow-lg shadow-sidebar-primary/20",
								children: "S"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-2xl tracking-tight",
								children: [
									"Selah",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sans text-[10px] uppercase tracking-[0.25em] text-sidebar-foreground/55",
										children: "Studio"
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:flex flex-1 max-w-md mx-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-sidebar-foreground/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "search",
								placeholder: "Search orders, products...",
								className: "w-full h-10 pl-9 pr-4 rounded-lg bg-sidebar-accent/50 border border-sidebar-border text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/40 focus:outline-none focus:ring-2 focus:ring-sidebar-primary/50 transition-all"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								whileHover: { scale: 1.05 },
								whileTap: { scale: .95 },
								onClick: () => setNotificationsOpen(!notificationsOpen),
								className: "relative p-2 rounded-lg hover:bg-sidebar-accent transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-5" }), notifications.some((n) => n.unread) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1 right-1 size-2 rounded-full bg-red-500" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: notificationsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 10,
									scale: .95
								},
								animate: {
									opacity: 1,
									y: 0,
									scale: 1
								},
								exit: {
									opacity: 0,
									y: 10,
									scale: .95
								},
								className: "absolute right-0 mt-2 w-80 rounded-xl border border-sidebar-border bg-background shadow-2xl overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-4 border-b border-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold",
											children: "Notifications"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "max-h-96 overflow-y-auto",
										children: notifications.map((notification) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: cn("w-full text-left p-4 hover:bg-muted/50 transition-colors border-b border-border/50", notification.unread && "bg-primary/5"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: cn("size-8 rounded-lg flex items-center justify-center shrink-0", notification.unread ? "bg-primary/10" : "bg-muted"),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4 text-primary" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1 min-w-0",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-medium",
																children: notification.title
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-xs text-muted-foreground mt-0.5",
																children: notification.description
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-xs text-muted-foreground mt-1",
																children: notification.time
															})
														]
													}),
													notification.unread && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary shrink-0 mt-1" })
												]
											})
										}, notification.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-2 border-t border-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "w-full p-2 text-sm text-primary hover:bg-primary/5 rounded-lg transition-colors",
											children: "View all notifications"
										})
									})
								]
							}) })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								whileHover: { scale: 1.05 },
								whileTap: { scale: .95 },
								onClick: () => setUserMenuOpen(!userMenuOpen),
								className: "flex items-center gap-2 p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-sm font-semibold text-primary-foreground",
									children: user?.name?.[0]?.toUpperCase() || "A"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden lg:block text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium leading-tight",
										children: user?.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-sidebar-foreground/60",
										children: "Administrator"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: userMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 10,
									scale: .95
								},
								animate: {
									opacity: 1,
									y: 0,
									scale: 1
								},
								exit: {
									opacity: 0,
									y: 10,
									scale: .95
								},
								className: "absolute right-0 mt-2 w-56 rounded-xl border border-sidebar-border bg-background shadow-2xl overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 border-b border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: user?.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: user?.email
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "w-full flex items-center gap-2 p-2 text-sm hover:bg-muted rounded-lg transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" }), "Settings"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "w-full flex items-center gap-2 p-2 text-sm hover:bg-muted rounded-lg transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4" }), "Security"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border my-2" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: logout,
											className: "w-full flex items-center gap-2 p-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), "Sign out"]
										})
									]
								})]
							}) })]
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-8 py-6 lg:grid-cols-[250px_1fr] lg:gap-10 lg:py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "min-w-0 lg:sticky lg:top-[6.5rem] lg:flex lg:h-[calc(100vh-8rem)] lg:flex-col lg:justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 hidden items-center gap-2 px-3 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground lg:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-3.5" }), "Workspace"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.nav, {
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
						className: "lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1 rounded-2xl border border-border bg-card p-3 shadow-lg",
							children: links.map(({ to, label, icon: Icon, description }) => {
								const active = pathname === to || to !== "/admin" && pathname.startsWith(to);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to,
									className: cn("flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all", active ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-muted"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs opacity-75",
											children: description
										})] }),
										active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 ml-auto" })
									]
								}, to);
							})
						})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden lg:block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1 rounded-2xl border border-border bg-card p-3 shadow-lg",
								children: links.map(({ to, label, icon: Icon, description }) => {
									const active = pathname === to || to !== "/admin" && pathname.startsWith(to);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to,
										className: cn("group relative flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition-all", active ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: cn("size-[1.1rem] transition-transform group-hover:scale-110", active && "text-primary-foreground") }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: cn("text-xs", active ? "text-primary-foreground/70" : "text-muted-foreground/60"),
													children: description
												})]
											}),
											active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
												layoutId: "activeIndicator",
												className: "absolute inset-y-2 left-0 w-1 rounded-full bg-primary-foreground"
											})
										]
									}, to);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .2 },
								className: "mt-6 rounded-2xl border border-border bg-gradient-to-br from-card to-muted/50 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground",
										children: "Studio status"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative flex size-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full size-2 bg-emerald-500" })]
										}), "All systems operational"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-3 text-primary" }), "Sales up 12.5% this week"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								type: "button",
								whileHover: { y: -2 },
								whileTap: { scale: .98 },
								onClick: logout,
								className: "mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200/70 bg-red-50/70 px-4 py-3 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100 dark:border-red-900/50 dark:bg-red-950/20 dark:text-red-400 dark:hover:bg-red-950/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), "Sign out of Studio"]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.main, {
				initial: {
					opacity: 0,
					x: 20
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: { delay: .1 },
				className: "min-w-0",
				children
			})]
		})]
	});
}
function AdminLogin() {
	const { adminLogin, user, isAdmin } = useAuth();
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const handleSubmit = async (event) => {
		event.preventDefault();
		setError(null);
		setIsLoading(true);
		try {
			const form = new FormData(event.currentTarget);
			await adminLogin(String(form.get("email")), String(form.get("password")));
		} catch (err) {
			setError("Invalid administrator credentials. Redirecting to customer sign-in...");
			setTimeout(() => {
				window.location.href = "/login";
			}, 1500);
		} finally {
			setIsLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background px-4",
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .5 },
			className: "relative w-full max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "rounded-2xl border border-border bg-background/80 backdrop-blur-xl p-8 shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { scale: 0 },
						animate: { scale: 1 },
						transition: {
							type: "spring",
							stiffness: 200,
							damping: 20
						},
						className: "mx-auto mb-6 size-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-8 text-primary-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow text-primary flex items-center justify-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), "Selah studio"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-display text-3xl md:text-4xl",
								children: "Welcome back"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Sign in to manage your store and track performance."
							})
						]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: -10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "mt-4 flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 p-3 text-sm text-red-600 dark:text-red-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0" }), error]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Email address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "email",
									type: "email",
									defaultValue: "admin@selah.store",
									required: true,
									placeholder: "admin@selah.store",
									className: "h-11 w-full rounded-lg border border-input bg-background pl-9 pr-3 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "password",
										type: showPassword ? "text" : "password",
										defaultValue: "password",
										required: true,
										placeholder: "Enter your password",
										className: "h-11 w-full rounded-lg border border-input bg-background pl-9 pr-11 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowPassword(!showPassword),
										className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
										children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: isLoading,
						className: "mt-6 h-11 w-full rounded-lg bg-primary text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
						children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							animate: { rotate: 360 },
							transition: {
								duration: 1,
								repeat: Infinity,
								ease: "linear"
							},
							className: "size-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
						}), "Signing in..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Enter dashboard", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-3.5 text-primary" }), "Protected by secure authentication"]
					})
				]
			})
		})]
	});
}
var $$splitComponentImporter = () => import("./admin-DOD1qroW.mjs");
var Route = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
function LoadingScreen() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				scale: .9
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			className: "flex flex-col items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { rotate: 360 },
				transition: {
					duration: 2,
					repeat: Infinity,
					ease: "linear"
				},
				className: "size-12 rounded-full border-4 border-primary/30 border-t-primary"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Loading..."
			})]
		})
	});
}
var AdminGate = ({ children }) => {
	const { isAdmin, ready, user } = useAuth();
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLogin, {});
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/login",
		replace: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLayout, { children });
};
var MemoizedAdminGate = (0, import_react.memo)(AdminGate);
//#endregion
export { Route as n, MemoizedAdminGate as t };
