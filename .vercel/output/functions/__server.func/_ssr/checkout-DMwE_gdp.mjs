import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useCart } from "./WishlistContext-BedorS19.mjs";
import { i as request, r as formatPrice, t as ApiError } from "./http-BiLM6Dn8.mjs";
import { _ as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as Globe, H as House, I as LoaderCircle, M as Mail, P as Lock, T as Phone, gt as Building2, h as Sparkles, i as User, j as MapPin, l as Truck, lt as ChevronLeft, ot as CircleCheck, st as CircleAlert, tt as CreditCard, v as Shield, xt as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as products, n as StoreLayout } from "./StoreLayout-CAZLaRt9.mjs";
import { n as useAuth } from "./AuthContext-BtY1UeRs.mjs";
import { t as Button } from "./button-BKNC97i9.mjs";
import { t as orderService } from "./orderService-DHkekNJi.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import { t as customerService } from "./customerService-Bcvfr_u4.mjs";
import { t as OrderSummary } from "./OrderSummary-CdAYkZOz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DMwE_gdp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function itemFrom(index, quantity, size, color) {
	const product = products[index];
	return {
		name: product.name,
		slug: product.slug,
		image: product.images[0],
		size,
		color,
		quantity,
		price: product.price
	};
}
function totalsOf(items, discount = 0, shipping = 3500) {
	const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
	return {
		subtotal,
		discount,
		shipping,
		total: subtotal - discount + shipping
	};
}
var baseAddress = {
	fullName: "Aisha Olabode",
	phone: "+234 802 555 0114",
	street: "14 Bourdillon Road, Ikoyi",
	city: "Lagos",
	state: "Lagos",
	country: "Nigeria"
};
[
	{
		id: "SLH-10421",
		createdAt: "2026-08-28T10:24:00.000Z",
		items: [itemFrom(0, 1, "M", "Olive"), itemFrom(4, 2, "One Size", "Chocolate")],
		status: "out-for-delivery",
		paymentStatus: "paid",
		customerId: "cus-001",
		customerName: "Aisha Olabode",
		customerEmail: "aisha@example.com",
		discount: 5e3
	},
	{
		id: "SLH-10418",
		createdAt: "2026-08-24T15:02:00.000Z",
		items: [itemFrom(7, 1, "S", "Sage")],
		status: "delivered",
		paymentStatus: "paid",
		customerId: "cus-001",
		customerName: "Aisha Olabode",
		customerEmail: "aisha@example.com"
	},
	{
		id: "SLH-10415",
		createdAt: "2026-08-19T09:40:00.000Z",
		items: [itemFrom(3, 2, "L", "Sand"), itemFrom(10, 1, "One Size", "Tan")],
		status: "processing",
		paymentStatus: "paid",
		customerId: "cus-002",
		customerName: "Fatima Bello",
		customerEmail: "fatima@example.com"
	},
	{
		id: "SLH-10412",
		createdAt: "2026-08-14T18:11:00.000Z",
		items: [itemFrom(11, 1, "One Size", "Tan")],
		status: "shipped",
		paymentStatus: "paid",
		customerId: "cus-003",
		customerName: "Chinelo Eze",
		customerEmail: "chinelo@example.com"
	},
	{
		id: "SLH-10409",
		createdAt: "2026-08-08T12:35:00.000Z",
		items: [itemFrom(2, 3, "M", "Terracotta")],
		status: "pending",
		paymentStatus: "unpaid",
		customerId: "cus-004",
		customerName: "Zainab Musa",
		customerEmail: "zainab@example.com"
	},
	{
		id: "SLH-10403",
		createdAt: "2026-07-30T08:05:00.000Z",
		items: [itemFrom(15, 1, "M", "Cream")],
		status: "delivered",
		paymentStatus: "paid",
		customerId: "cus-002",
		customerName: "Fatima Bello",
		customerEmail: "fatima@example.com"
	},
	{
		id: "SLH-10398",
		createdAt: "2026-07-21T14:48:00.000Z",
		items: [itemFrom(6, 1, "38", "Sand")],
		status: "cancelled",
		paymentStatus: "refunded",
		customerId: "cus-005",
		customerName: "Ronke Adeyemi",
		customerEmail: "ronke@example.com"
	},
	{
		id: "SLH-10390",
		createdAt: "2026-07-11T11:20:00.000Z",
		items: [itemFrom(1, 1, "L", "Cream"), itemFrom(4, 1, "One Size", "Cream")],
		status: "delivered",
		paymentStatus: "paid",
		customerId: "cus-003",
		customerName: "Chinelo Eze",
		customerEmail: "chinelo@example.com"
	}
].map((seed) => {
	const totals = totalsOf(seed.items, seed.discount ?? 0);
	return {
		id: seed.id,
		reference: `PSK_${seed.id.replace("SLH-", "")}`,
		customerId: seed.customerId,
		customerName: seed.customerName,
		customerEmail: seed.customerEmail,
		createdAt: seed.createdAt,
		items: seed.items,
		...totals,
		status: seed.status,
		paymentStatus: seed.paymentStatus,
		paymentMethod: "Paystack — Card",
		deliveryMethod: "Express (1–3 days)",
		address: {
			...baseAddress,
			fullName: seed.customerName
		},
		estimatedDelivery: new Date(new Date(seed.createdAt).getTime() + 2592e5).toISOString()
	};
});
({ ...baseAddress });
var coupons = [...[
	{
		id: "cpn-1",
		code: "SELAH10",
		type: "percentage",
		value: 10,
		minOrder: 3e4,
		maxDiscount: 15e3,
		expiresAt: "2026-12-31",
		usageLimit: 500,
		used: 128,
		active: true
	},
	{
		id: "cpn-2",
		code: "NEWSEASON",
		type: "fixed",
		value: 5e3,
		minOrder: 5e4,
		expiresAt: "2026-10-31",
		usageLimit: 200,
		used: 61,
		active: true
	},
	{
		id: "cpn-3",
		code: "FREESHIP",
		type: "fixed",
		value: 3500,
		minOrder: 75e3,
		expiresAt: "2026-09-30",
		usageLimit: 1e3,
		used: 402,
		active: false
	}
]];
/**
* Payment is intentionally isolated here. Connecting Paystack later means
* replacing `initialise` with a call that returns an authorization URL and
* verifying the reference server-side — no UI changes required.
*/
var paymentService = {
	async initialise(amount, email) {
		return request("/payments/initialise", () => ({
			reference: `PSK_${Date.now().toString().slice(-8)}`,
			status: "success",
			provider: "paystack",
			amount
		}), {
			method: "POST",
			body: JSON.stringify({
				amount,
				email
			})
		});
	},
	listCoupons() {
		return request("/admin/coupons", () => coupons);
	},
	saveCoupon(coupon) {
		return request("/admin/coupons", () => {
			coupons = coupons.some((item) => item.id === coupon.id) ? coupons.map((item) => item.id === coupon.id ? coupon : item) : [...coupons, coupon];
			return coupons;
		});
	},
	removeCoupon(id) {
		return request(`/admin/coupons/${id}`, () => {
			coupons = coupons.filter((item) => item.id !== id);
			return coupons;
		});
	},
	validateCoupon(code, subtotal) {
		return request("/coupons/validate", () => {
			const coupon = coupons.find((item) => item.code.toLowerCase() === code.trim().toLowerCase() && item.active);
			if (!coupon) throw new ApiError("That code isn't valid", 404);
			if (subtotal < coupon.minOrder) throw new ApiError("Order total is below the minimum for this code", 400);
			const raw = coupon.type === "percentage" ? Math.round(subtotal * coupon.value / 100) : coupon.value;
			const discount = coupon.maxDiscount ? Math.min(raw, coupon.maxDiscount) : raw;
			return {
				code: coupon.code,
				discount
			};
		});
	}
};
function CheckoutPage() {
	const cart = useCart();
	const { user } = useAuth();
	const navigate = useNavigate();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [step, setStep] = (0, import_react.useState)(1);
	const [formData, setFormData] = (0, import_react.useState)({
		name: user?.name ?? "",
		email: user?.email ?? "",
		phone: user?.phone ?? "",
		street: "",
		city: "",
		state: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("card");
	(0, import_react.useEffect)(() => {
		if (!user) navigate({
			to: "/login",
			replace: true
		});
	}, [navigate, user]);
	const steps = [
		{
			number: 1,
			label: "Contact",
			icon: User
		},
		{
			number: 2,
			label: "Delivery",
			icon: MapPin
		},
		{
			number: 3,
			label: "Payment",
			icon: CreditCard
		}
	];
	const updateField = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
		if (errors[field]) setErrors((prev) => {
			const next = { ...prev };
			delete next[field];
			return next;
		});
	};
	const validateStep = (step) => {
		const newErrors = {};
		if (step === 1) {
			if (!formData["name"].trim()) newErrors["name"] = "Name is required";
			if (!formData["email"].trim()) newErrors["email"] = "Email is required";
			else if (!/\S+@\S+\.\S+/.test(formData["email"])) newErrors["email"] = "Invalid email address";
			if (!formData["phone"].trim()) newErrors["phone"] = "Phone number is required";
		}
		if (step === 2) {
			if (!formData["street"].trim()) newErrors["street"] = "Street address is required";
			if (!formData["city"].trim()) newErrors["city"] = "City is required";
			if (!formData["state"].trim()) newErrors["state"] = "State is required";
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleNextStep = () => {
		if (validateStep(step)) {
			setStep((prev) => Math.min(prev + 1, 3));
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}
	};
	const handlePreviousStep = () => {
		setStep((prev) => Math.max(prev - 1, 1));
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	if (!user) return null;
	if (!cart.items.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-10 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Your bag is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: "Add some items to your bag before checking out."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6 gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					children: ["Shop the collection", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		]
	}) });
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!validateStep(3)) return;
		setBusy(true);
		try {
			const order = await orderService.create({
				customer: {
					id: user.id,
					name: formData["name"],
					email: formData["email"],
					phone: formData["phone"]
				},
				address: {
					fullName: formData["name"],
					phone: formData["phone"],
					street: formData["street"],
					city: formData["city"],
					state: formData["state"],
					country: "Nigeria"
				},
				deliveryMethod: "Express (1–3 days)",
				paymentMethod: paymentMethod === "card" ? "Paystack — Card" : paymentMethod === "bank" ? "Bank Transfer" : "USSD",
				items: cart.items,
				subtotal: cart.subtotal,
				discount: cart.discount,
				shipping: cart.shipping,
				total: cart.total
			});
			await paymentService.initialise(cart.total, formData["email"]);
			await customerService.recordOrder({
				id: user.id,
				name: formData["name"],
				email: formData["email"],
				phone: formData["phone"],
				total: cart.total
			});
			cart.clear();
			await navigate({
				to: "/order/$id",
				params: { id: order.id }
			});
		} catch (error) {
			console.error("Checkout error:", error);
			setErrors({ submit: "Failed to process order. Please try again." });
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-10 md:py-16",
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
				className: "mb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cart",
						className: "group mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4 transition-transform group-hover:-translate-x-1" }), "Back to bag"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-primary flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), "Almost yours"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl md:text-5xl",
						children: "Checkout"
					})
				]
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
				className: "mb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-4",
					children: steps.map((stepItem, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								whileHover: { scale: 1.05 },
								className: cn("size-10 rounded-full flex items-center justify-center font-semibold transition-all", step > stepItem.number ? "bg-primary text-primary-foreground" : step === stepItem.number ? "bg-primary/10 text-primary border-2 border-primary" : "bg-muted text-muted-foreground"),
								children: step > stepItem.number ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stepItem.icon, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-sm font-medium hidden sm:block", step >= stepItem.number ? "text-foreground" : "text-muted-foreground"),
								children: stepItem.label
							})]
						}), index < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 h-px bg-border relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { width: 0 },
								animate: { width: step > stepItem.number ? "100%" : "0%" },
								transition: { duration: .3 },
								className: "absolute inset-y-0 left-0 bg-primary"
							})
						})]
					}, stepItem.number))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: handleSubmit,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-[1fr_360px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
							mode: "wait",
							children: [
								step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
									initial: {
										opacity: 0,
										x: -20
									},
									animate: {
										opacity: 1,
										x: 0
									},
									exit: {
										opacity: 0,
										x: 20
									},
									transition: { duration: .3 },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "font-display text-2xl flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-5 text-primary" }), "Contact details"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 grid gap-4 sm:grid-cols-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													name: "name",
													label: "Full name",
													icon: User,
													value: formData["name"],
													onChange: (value) => updateField("name", value),
													error: errors["name"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													name: "email",
													label: "Email address",
													type: "email",
													icon: Mail,
													value: formData["email"],
													onChange: (value) => updateField("email", value),
													error: errors["email"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													name: "phone",
													label: "Phone number",
													icon: Phone,
													value: formData["phone"],
													onChange: (value) => updateField("phone", value),
													error: errors["phone"]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											onClick: handleNextStep,
											className: "mt-6 gap-2",
											children: ["Continue to delivery", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
										})
									]
								}, "contact"),
								step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
									initial: {
										opacity: 0,
										x: -20
									},
									animate: {
										opacity: 1,
										x: 0
									},
									exit: {
										opacity: 0,
										x: 20
									},
									transition: { duration: .3 },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "font-display text-2xl flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-primary" }), "Delivery address"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 grid gap-4 sm:grid-cols-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "sm:col-span-2",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
														name: "street",
														label: "Street address",
														icon: House,
														value: formData["street"],
														onChange: (value) => updateField("street", value),
														error: errors["street"]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													name: "city",
													label: "City",
													icon: Building2,
													value: formData["city"],
													onChange: (value) => updateField("city", value),
													error: errors["city"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													name: "state",
													label: "State",
													icon: Globe,
													value: formData["state"],
													onChange: (value) => updateField("state", value),
													error: errors["state"]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "button",
												variant: "outline",
												onClick: handlePreviousStep,
												className: "gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "Back"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "button",
												onClick: handleNextStep,
												className: "gap-2",
												children: ["Continue to payment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
											})]
										})
									]
								}, "delivery"),
								step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
									initial: {
										opacity: 0,
										x: -20
									},
									animate: {
										opacity: 1,
										x: 0
									},
									exit: {
										opacity: 0,
										x: 20
									},
									transition: { duration: .3 },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "font-display text-2xl flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-5 text-primary" }), "Payment method"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 space-y-3",
											children: [
												{
													id: "card",
													label: "Card Payment",
													description: "Pay with Visa, Mastercard, or Verve",
													icon: CreditCard
												},
												{
													id: "bank",
													label: "Bank Transfer",
													description: "Direct bank transfer payment",
													icon: Building2
												},
												{
													id: "ussd",
													label: "USSD",
													description: "Pay using USSD code",
													icon: Phone
												}
											].map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
												type: "button",
												whileHover: { scale: 1.02 },
												whileTap: { scale: .98 },
												onClick: () => setPaymentMethod(method.id),
												className: cn("w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left", paymentMethod === method.id ? "border-primary bg-primary/5 shadow-lg shadow-primary/10" : "border-border hover:border-primary/30"),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: cn("size-12 rounded-lg flex items-center justify-center", paymentMethod === method.id ? "bg-primary text-primary-foreground" : "bg-muted"),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(method.icon, { className: "size-6" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "font-medium",
															children: method.label
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm text-muted-foreground",
															children: method.description
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: cn("size-5 rounded-full border-2 flex items-center justify-center", paymentMethod === method.id ? "border-primary" : "border-muted-foreground/30"),
														children: paymentMethod === method.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-2.5 rounded-full bg-primary" })
													})
												]
											}, method.id))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "button",
												variant: "outline",
												onClick: handlePreviousStep,
												className: "gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "Back"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												type: "submit",
												disabled: busy,
												size: "lg",
												className: "flex-1 gap-2",
												children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Processing…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" }),
													"Pay ",
													formatPrice(cart.total)
												] })
											})]
										})
									]
								}, "payment")
							]
						}), errors["submit"] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 p-4 text-sm text-red-600 dark:text-red-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0" }), errors["submit"]]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .2 },
						className: "lg:sticky lg:top-24 h-fit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderSummary, {
							subtotal: cart.subtotal,
							discount: cart.discount,
							shipping: cart.shipping,
							total: cart.total
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-3",
							children: [
								{
									icon: Shield,
									text: "Secure checkout"
								},
								{
									icon: Truck,
									text: "Express delivery available"
								},
								{
									icon: Lock,
									text: "256-bit SSL encryption"
								}
							].map(({ icon: Icon, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-primary shrink-0" }), text]
							}, text))
						})]
					})]
				})
			})
		]
	}) });
}
function Field({ name, label, type = "text", icon: Icon, value, onChange, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-2",
				children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name,
					type,
					value,
					onChange: (e) => onChange(e.target.value),
					required: true,
					className: cn("h-11 w-full border bg-background px-3 rounded-lg transition-all", Icon && "pl-9", error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-input focus:border-primary focus:ring-2 focus:ring-primary/20", "focus:outline-none")
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-red-500 flex items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3" }), error]
			})
		]
	});
}
//#endregion
export { CheckoutPage as component };
