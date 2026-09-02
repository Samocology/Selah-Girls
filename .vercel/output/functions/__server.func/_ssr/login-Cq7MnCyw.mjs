import { r as __toESM } from "../_runtime.mjs";
import { n as supabase, t as cn } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as RefreshCw, F as LockKeyhole, M as Mail, St as ArrowLeft, T as Phone, a as UserRound, dt as Check, xt as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as useAuth } from "./AuthContext-BtY1UeRs.mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-Cq7MnCyw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const { user, login, startRegistration, verifyRegistrationOtp, resendRegistrationOtp, ready } = useAuth();
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("login");
	const [error, setError] = (0, import_react.useState)("");
	const [info, setInfo] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [registerStep, setRegisterStep] = (0, import_react.useState)("form");
	const [pendingEmail, setPendingEmail] = (0, import_react.useState)("");
	const [otp, setOtp] = (0, import_react.useState)([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	]);
	const otpRefs = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		if (ready && user) navigate({
			to: "/account",
			replace: true
		});
	}, [
		ready,
		user,
		navigate
	]);
	const handleGoogleSignIn = async () => {
		setBusy(true);
		setError("");
		try {
			const client = supabase;
			if (!client) throw new Error("Supabase is not configured");
			const { data, error } = await client.auth.signInWithOAuth({
				provider: "google",
				options: { redirectTo: window.location.origin + "/login" }
			});
			if (error) throw new Error(error.message);
			if (data?.url) window.location.href = data.url;
		} catch (googleError) {
			setError(googleError instanceof Error ? googleError.message : "Google sign-in failed.");
			setBusy(false);
		}
	};
	const handleOtpChange = (index, value) => {
		const next = [...otp];
		next[index] = value.replace(/\D/g, "").slice(0, 1);
		setOtp(next);
		if (value && index < 7) otpRefs.current[index + 1]?.focus();
	};
	const handleOtpKeyDown = (index, event) => {
		if (event.key === "Backspace" && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
	};
	const handleOtpPaste = (event) => {
		event.preventDefault();
		const digits = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 8).split("");
		if (digits.length === 0) return;
		const next = [
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			""
		];
		digits.forEach((digit, i) => {
			next[i] = digit;
		});
		setOtp(next);
		const lastFilled = Math.min(digits.length, 7);
		otpRefs.current[lastFilled]?.focus();
	};
	const handleVerifyOtp = async (event) => {
		event.preventDefault();
		const code = otp.join("");
		if (code.length !== 8) {
			setError("Enter the 8-digit code from your email.");
			return;
		}
		setBusy(true);
		setError("");
		try {
			await verifyRegistrationOtp(pendingEmail, code);
			await navigate({
				to: "/account",
				replace: true
			});
		} catch (verifyError) {
			setError(verifyError instanceof Error ? verifyError.message : "That code didn't work. Try again.");
		} finally {
			setBusy(false);
		}
	};
	const handleResend = async () => {
		setBusy(true);
		setError("");
		try {
			await resendRegistrationOtp(pendingEmail);
			setInfo("A new code is on its way to your inbox.");
		} catch (resendError) {
			setError(resendError instanceof Error ? resendError.message : "Couldn't resend the code.");
		} finally {
			setBusy(false);
		}
	};
	if (ready && user) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative flex min-h-screen overflow-hidden bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,oklch(0.87_0.07_80_/_0.7),transparent_34%),radial-gradient(circle_at_90%_88%,oklch(0.78_0.08_46_/_0.18),transparent_32%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid min-h-screen w-full max-w-[100rem] lg:grid-cols-[1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hidden flex-col justify-between p-10 lg:flex xl:p-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "font-display text-3xl tracking-tight",
						children: [
							"Selah",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
								children: "Girl Society"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .7 },
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "A community for the set-apart woman"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 font-display text-6xl leading-[0.98] xl:text-8xl",
								children: [
									"Pause.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Reflect.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "Declare."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-md text-sm leading-7 text-muted-foreground",
								children: "Faith-led fashion and Christian basics for women choosing to live intentionally, boldly, and unapologetically for Jesus."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Wear what you believe."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative flex items-center justify-center px-5 py-10 sm:px-10 lg:bg-surface/70 lg:px-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "absolute left-5 top-7 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground lg:left-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back to store"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "font-display text-3xl",
							children: "Selah"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 eyebrow",
							children: "Girl Society"
						})]
					}), mode === "register" && registerStep === "verify" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .3 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-8 font-display text-4xl",
								children: "Check your inbox"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm leading-6 text-muted-foreground",
								children: [
									"We sent an 8-digit code to",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: pendingEmail
									}),
									". Enter it below to finish creating your account."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-8",
								onSubmit: handleVerifyOtp,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex justify-between gap-2",
										children: otp.map((digit, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											ref: (element) => {
												otpRefs.current[index] = element;
											},
											value: digit,
											onChange: (event) => handleOtpChange(index, event.target.value),
											onKeyDown: (event) => handleOtpKeyDown(index, event),
											onPaste: handleOtpPaste,
											inputMode: "numeric",
											autoComplete: "one-time-code",
											maxLength: 1,
											required: true,
											className: "h-14 w-10 rounded-xl border border-input bg-background text-center text-2xl font-semibold outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
										}, index))
									}),
									error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-destructive",
										children: error
									}),
									info && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-emerald-600",
										children: info
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										disabled: busy,
										className: "group mt-7 flex h-13 w-full items-center justify-between rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:-translate-y-0.5 hover:bg-primary/90 disabled:opacity-60",
										children: [busy ? "Verifying…" : "Verify and enter my account", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-8 place-items-center rounded-full bg-primary-foreground/15 transition-transform group-hover:translate-x-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex items-center justify-between text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: handleResend,
											disabled: busy,
											className: "inline-flex items-center gap-1 underline underline-offset-4 hover:text-foreground disabled:opacity-60",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3" }), " Resend code"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setRegisterStep("form");
												setOtp([
													"",
													"",
													"",
													"",
													"",
													"",
													"",
													""
												]);
												setError("");
												setInfo("");
											},
											className: "underline underline-offset-4 hover:text-foreground",
											children: "Use a different email"
										})]
									})
								]
							})
						]
					}, "verify") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex border-b border-border",
						children: ["login", "register"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setMode(item);
								setError("");
								setInfo("");
							},
							className: cn("flex-1 border-b-2 pb-4 text-sm font-medium capitalize transition-colors", mode === item ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
							children: item === "login" ? "Sign in" : "Create account"
						}, item))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .3 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-8 font-display text-4xl",
								children: mode === "login" ? "Welcome back." : "Join the society."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-6 text-muted-foreground",
								children: mode === "login" ? "Your orders, saved details, and Selah world are waiting." : "Create your account and make space for what matters."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-8",
								onSubmit: async (event) => {
									event.preventDefault();
									setBusy(true);
									setError("");
									setInfo("");
									const data = new FormData(event.currentTarget);
									try {
										if (mode === "login") {
											await login(String(data.get("email")), String(data.get("password")));
											await navigate({
												to: "/account",
												replace: true
											});
										} else {
											const email = String(data.get("email"));
											const result = await startRegistration({
												name: String(data.get("name")),
												email,
												phone: String(data.get("phone")),
												password: String(data.get("password"))
											});
											setPendingEmail(result.email || email);
											setRegisterStep("verify");
										}
									} catch (formError) {
										setError(formError instanceof Error ? formError.message : "We couldn't complete that request.");
									} finally {
										setBusy(false);
									}
								},
								children: [
									mode === "register" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
										name: "name",
										label: "Full name",
										icon: UserRound
									}),
									mode === "register" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
										name: "phone",
										label: "Phone number",
										icon: Phone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
										name: "email",
										label: "Email address",
										type: "email",
										icon: Mail
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
										name: "password",
										label: "Password",
										type: "password",
										icon: LockKeyhole
									}),
									mode === "login" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground",
											children: "Forgot password?"
										})
									}),
									error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-destructive",
										children: error
									}),
									info && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-emerald-600",
										children: info
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										disabled: busy,
										className: "group mt-7 flex h-13 w-full items-center justify-between rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:-translate-y-0.5 hover:bg-primary/90 disabled:opacity-60",
										children: [busy ? "Please wait…" : mode === "login" ? "Enter my account" : "Create my account", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-8 place-items-center rounded-full bg-primary-foreground/15 transition-transform group-hover:translate-x-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "my-6 flex items-center gap-3 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "or continue with" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleGoogleSignIn,
								disabled: busy,
								className: "flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-muted disabled:opacity-60",
								children: busy ? "Please wait…" : "Continue with Google"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-accent" }), " Order tracking"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-accent" }), " Faster checkout"]
								})]
							})
						]
					}, mode)] })]
				})]
			})]
		})]
	});
}
function AuthField({ name, label, type = "text", icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mt-5 block text-sm font-medium",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative mt-2 block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name,
				type,
				required: true,
				className: "h-13 w-full rounded-xl border border-input bg-background pl-11 pr-4 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
			})]
		})]
	});
}
//#endregion
export { LoginPage as component };
