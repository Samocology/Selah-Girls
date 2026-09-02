import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as formatPrice } from "./http-BiLM6Dn8.mjs";
import { _ as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Package, E as Pencil, F as LockKeyhole, I as LoaderCircle, K as Gift, M as Mail, N as LogOut, U as Heart, _ as ShoppingBag, a as UserRound, ct as ChevronRight, d as TrendingUp, dt as Check, et as Crown, j as MapPin, m as Star, mt as Camera, rt as Clock, x as Settings, xt as ArrowRight, yt as BadgeCheck } from "../_libs/lucide-react.mjs";
import { n as StoreLayout } from "./StoreLayout-CAZLaRt9.mjs";
import { n as useAuth } from "./AuthContext-BtY1UeRs.mjs";
import { t as Button } from "./button-BKNC97i9.mjs";
import { t as orderService } from "./orderService-DHkekNJi.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-CQGCgzMx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AccountPage() {
	const { user } = useAuth();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!user) navigate({
			to: "/login",
			replace: true
		});
	}, [navigate, user]);
	if (!user) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileDashboard, {});
}
function ProfileDashboard() {
	const { user, logout, updateProfile } = useAuth();
	const orders = useQuery({
		queryKey: ["account-orders", user?.email],
		queryFn: () => orderService.byCustomer(user.email),
		enabled: Boolean(user)
	});
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)(user?.name ?? "");
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("orders");
	const [showLogoutConfirm, setShowLogoutConfirm] = (0, import_react.useState)(false);
	const handleSaveProfile = async () => {
		setIsSaving(true);
		try {
			await updateProfile({ name });
			setEditing(false);
		} catch (error) {
			console.error("Failed to update profile:", error);
		} finally {
			setIsSaving(false);
		}
	};
	const stats = {
		totalOrders: orders.data?.length ?? 0,
		totalSpent: orders.data?.reduce((sum, order) => sum + order.total, 0) ?? 0,
		memberSince: (/* @__PURE__ */ new Date()).getFullYear()
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-gradient-to-br from-background via-background to-primary/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-10 md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 md:p-8 border border-primary/20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col md:flex-row md:items-center justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: { scale: 0 },
								animate: { scale: 1 },
								transition: {
									type: "spring",
									delay: .2
								},
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-20 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-3xl text-primary-foreground shadow-lg shadow-primary/30",
									children: user?.name.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "absolute -bottom-2 -right-2 p-2 rounded-full bg-background border border-border shadow-lg hover:bg-muted transition-colors",
									onClick: () => setEditing(true),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									x: -20
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: { delay: .3 },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "eyebrow text-primary flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-4" }), "Your Profile"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-2 font-display text-3xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent",
										children: [
											"Hello, ",
											user?.name.split(" ")[0],
											"."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-muted-foreground flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "size-4 text-primary" }), "Your personal corner of Selah Girl Society."]
									})
								]
							}) })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .4 },
							className: "flex gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "gap-2 hover:bg-destructive hover:text-destructive-foreground transition-all",
								onClick: () => setShowLogoutConfirm(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), "Sign out"]
							})
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
						transition: { delay: .5 },
						className: "relative mt-8 grid grid-cols-3 gap-4",
						children: [
							{
								label: "Orders",
								value: stats.totalOrders,
								icon: ShoppingBag
							},
							{
								label: "Total Spent",
								value: formatPrice(stats.totalSpent),
								icon: TrendingUp
							},
							{
								label: "Member Since",
								value: stats.memberSince,
								icon: Star
							}
						].map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: { scale: 1.05 },
							className: "p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, { className: "size-5 text-primary mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg md:text-2xl font-semibold",
									children: stat.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: stat.label
								})
							]
						}, stat.label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-[320px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
					initial: {
						opacity: 0,
						x: -20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: .3 },
					className: "border border-border bg-card rounded-xl overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-6 bg-gradient-to-br from-primary/5 to-transparent",
							children: editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-medium",
										children: "Your Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: name,
										onChange: (event) => setName(event.target.value),
										className: "w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all",
										placeholder: "Enter your name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											className: "flex-1",
											onClick: handleSaveProfile,
											disabled: isSaving,
											children: [isSaving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), "Save"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											onClick: () => {
												setEditing(false);
												setName(user?.name ?? "");
											},
											children: "Cancel"
										})]
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl",
									children: user?.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 break-all text-sm text-muted-foreground flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3" }), user?.email]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									className: "mt-4 w-full gap-2",
									onClick: () => setEditing(true),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" }), "Edit profile"]
								})
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "p-4 space-y-1",
							children: [
								{
									id: "orders",
									label: "My Orders",
									icon: Package
								},
								{
									id: "wishlist",
									label: "Wishlist",
									icon: Heart
								},
								{
									id: "settings",
									label: "Settings",
									icon: Settings
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveTab(item.id),
								className: cn("w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all", activeTab === item.id ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "hover:bg-muted"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" }),
									item.label,
									activeTab === item.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 ml-auto" })
								]
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 border-t border-border space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "United Kingdom" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Free shipping on orders over £100" })]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
					initial: {
						opacity: 0,
						x: 20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: .4 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
						mode: "wait",
						children: [
							activeTab === "orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -20
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl md:text-3xl",
										children: "Your Orders"
									}), orders.data && orders.data.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm text-muted-foreground",
										children: [
											orders.data.length,
											" ",
											orders.data.length === 1 ? "order" : "orders"
										]
									})]
								}), orders.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-center py-20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-8 animate-spin text-primary" })
								}) : orders.data && orders.data.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-4",
									children: orders.data.map((order, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: {
											opacity: 0,
											y: 20
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: { delay: index * .1 },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/order/$id",
											params: { id: order.id },
											className: "group block p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center gap-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "size-12 rounded-lg bg-primary/10 flex items-center justify-center",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-6 text-primary" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1 min-w-[200px]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-semibold",
															children: order.reference
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-xs text-muted-foreground flex items-center gap-2 mt-1",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3" }),
																new Date(order.createdAt).toLocaleDateString("en-GB", {
																	day: "numeric",
																	month: "long",
																	year: "numeric"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
																order.items.length,
																" ",
																order.items.length === 1 ? "item" : "items"
															]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-right",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-lg font-semibold",
															children: formatPrice(order.total)
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: cn("block text-xs capitalize px-2 py-1 rounded-full mt-1 text-center", order.status === "delivered" && "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400", order.status === "processing" && "bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400", order.status === "shipped" && "bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400", order.status === "cancelled" && "bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400"),
															children: order.status.replaceAll("-", " ")
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all" })
												]
											})
										})
									}, order.id))
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										scale: .9
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									className: "text-center py-16 px-6 rounded-xl border border-dashed border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-16 mx-auto text-muted-foreground/40 mb-4" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-semibold mb-2",
											children: "No orders yet"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground mb-6",
											children: "Your next favourite is out there waiting for you."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/shop",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												className: "gap-2",
												children: ["Start Shopping", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
											})
										})
									]
								})]
							}, "orders"),
							activeTab === "wishlist" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -20
								},
								className: "text-center py-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-16 mx-auto text-muted-foreground/40 mb-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-semibold mb-2",
										children: "Your Wishlist"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Save your favourite items here for later."
									})
								]
							}, "wishlist"),
							activeTab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -20
								},
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl md:text-3xl mb-6",
										children: "Settings"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6 rounded-xl border border-border bg-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "font-semibold mb-4 flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-5 text-primary" }), "Profile Information"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm text-muted-foreground",
													children: "Name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-medium",
													children: user?.name
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm text-muted-foreground",
													children: "Email"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-medium",
													children: user?.email
												})]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6 rounded-xl border border-border bg-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "font-semibold mb-4 flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "size-5 text-primary" }), "Security"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											size: "sm",
											className: "gap-2",
											children: "Change Password"
										})]
									})
								]
							}, "settings")
						]
					})
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showLogoutConfirm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 flex items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
			onClick: () => setShowLogoutConfirm(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
			className: "relative w-full max-w-sm rounded-xl border border-border bg-background p-6 shadow-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-16 mx-auto rounded-full bg-destructive/10 flex items-center justify-center mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-8 text-destructive" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold mb-2",
						children: "Sign out?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mb-6",
						children: "Are you sure you want to sign out of your account?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "flex-1",
							onClick: () => setShowLogoutConfirm(false),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "destructive",
							className: "flex-1 gap-2",
							onClick: logout,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), "Sign out"]
						})]
					})
				]
			})
		})]
	}) })] });
}
//#endregion
export { AccountPage as component };
