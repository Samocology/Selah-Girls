import { r as __toESM } from "../_runtime.mjs";
import { n as supabase } from "./utils-CXSb6xdn.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AuthContext-BtY1UeRs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function mapProfileToUser(profile, email) {
	return {
		id: profile.id,
		name: profile.name ?? "User",
		email: email ?? "",
		phone: profile.phone ?? "",
		role: profile.role
	};
}
var authService = {
	async login(email, password) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.auth.signInWithPassword({
			email,
			password
		});
		if (error) throw new Error(error.message);
		const { data: profile } = await client.from("profiles").select("*").eq("id", data.user.id).maybeSingle();
		if (!profile) throw new Error("Profile not found");
		return mapProfileToUser(profile, data.user.email);
	},
	async googleLogin(credential) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.auth.signInWithIdToken({
			provider: "google",
			token: credential
		});
		if (error) throw new Error(error.message);
		const { data: profile } = await client.from("profiles").select("*").eq("id", data.user.id).maybeSingle();
		if (!profile) throw new Error("Profile not found");
		return mapProfileToUser(profile, data.user.email);
	},
	async adminLogin(email, password) {
		const user = await this.login(email, password);
		if (user.role !== "admin") throw new Error("Invalid administrator credentials");
		return user;
	},
	/**
	* Step 1 of registration. Creates the user and sends an 8-digit OTP to their email.
	* The user cannot sign in until they verify the OTP.
	*/
	async startRegistration(input) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.auth.signUp({
			email: input.email,
			password: input.password,
			options: {
				data: {
					name: input.name,
					phone: input.phone
				},
				emailRedirectTo: `${window.location.origin}/account`
			}
		});
		if (error) throw new Error(error.message);
		return {
			email: input.email,
			userId: data.user?.id ?? null
		};
	},
	/**
	* Step 2 of registration. Verifies the OTP and signs the user in.
	*/
	async verifyRegistrationOtp(email, code) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.auth.verifyOtp({
			email,
			token: code,
			type: "signup"
		});
		if (error) throw new Error(error.message);
		if (!data.user) throw new Error("Verification failed");
		const { data: profile } = await client.from("profiles").select("*").eq("id", data.user.id).maybeSingle();
		if (!profile) throw new Error("Profile not found");
		return mapProfileToUser(profile, data.user.email);
	},
	/**
	* Resends the OTP to the user's email.
	*/
	async resendRegistrationOtp(email) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { error } = await client.auth.resend({
			type: "signup",
			email
		});
		if (error) throw new Error(error.message);
		return { sent: true };
	},
	/**
	* Backwards-compatible register. If email confirmation is enabled, this will
	* throw with a message telling the user to check their email. Prefer the
	* startRegistration/verifyRegistrationOtp pair for the new OTP flow.
	*/
	async register(input) {
		await this.startRegistration(input);
		throw new Error("Check your email for a verification code to finish creating your account.");
	},
	async requestPasswordReset(email) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
		if (error) throw new Error(error.message);
		return { sent: true };
	},
	async updateProfile(user, patch) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { error } = await client.from("profiles").update({
			name: patch.name ?? user.name,
			phone: patch.phone ?? user.phone
		}).eq("id", user.id);
		if (error) throw new Error(error.message);
		return {
			...user,
			...patch
		};
	}
};
var STORAGE_KEY = "selah.user";
var AuthContext = (0, import_react.createContext)(null);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const client = supabase;
		if (!client) {
			setReady(true);
			return;
		}
		const handleSession = async () => {
			const { data: { session } } = await client.auth.getSession();
			if (session?.user) {
				const { data: profile } = await client.from("profiles").select("*").eq("id", session.user.id).maybeSingle();
				if (profile) {
					const mapped = {
						id: profile.id,
						name: profile.name ?? session.user.email ?? "User",
						email: session.user.email ?? "",
						phone: profile.phone ?? "",
						role: profile.role
					};
					setUser(mapped);
					try {
						window.localStorage.setItem(STORAGE_KEY, JSON.stringify(mapped));
					} catch {}
				}
			}
		};
		handleSession().then(() => setReady(true));
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			if (raw) setUser(JSON.parse(raw));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		const client = supabase;
		if (!client) return;
		const { data: listener } = client.auth.onAuthStateChange(async (_event, session) => {
			if (!session?.user) {
				setUser(null);
				return;
			}
			const { data: profile } = await client.from("profiles").select("*").eq("id", session.user.id).maybeSingle();
			if (!profile) {
				setUser(null);
				return;
			}
			const mapped = {
				id: profile.id,
				name: profile.name ?? session.user.email ?? "User",
				email: session.user.email ?? "",
				phone: profile.phone ?? "",
				role: profile.role
			};
			setUser(mapped);
			try {
				window.localStorage.setItem(STORAGE_KEY, JSON.stringify(mapped));
			} catch {}
		});
		return () => {
			listener.subscription.unsubscribe();
		};
	}, []);
	const persist = (0, import_react.useCallback)((next) => {
		setUser(next);
		try {
			if (next) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
			else window.localStorage.removeItem(STORAGE_KEY);
		} catch {}
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		user,
		isAuthenticated: Boolean(user),
		isAdmin: user?.role === "admin",
		ready,
		async login(email, password) {
			const next = await authService.login(email, password);
			persist(next);
			return next;
		},
		async googleLogin(credential) {
			const next = await authService.googleLogin(credential);
			persist(next);
			return next;
		},
		async adminLogin(email, password) {
			const next = await authService.adminLogin(email, password);
			persist(next);
			return next;
		},
		async register(input) {
			const next = await authService.register(input);
			persist(next);
			return next;
		},
		async startRegistration(input) {
			return authService.startRegistration(input);
		},
		async verifyRegistrationOtp(email, code) {
			const next = await authService.verifyRegistrationOtp(email, code);
			persist(next);
			return next;
		},
		async resendRegistrationOtp(email) {
			return authService.resendRegistrationOtp(email);
		},
		async updateProfile(patch) {
			if (!user) throw new Error("Not signed in");
			const next = await authService.updateProfile(user, patch);
			persist(next);
			return next;
		},
		logout() {
			persist(null);
			supabase?.auth.signOut();
		}
	}), [
		user,
		ready,
		persist
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value,
		children
	});
}
function useAuth() {
	const context = (0, import_react.useContext)(AuthContext);
	if (!context) throw new Error("useAuth must be used inside AuthProvider");
	return context;
}
//#endregion
export { useAuth as n, AuthProvider as t };
