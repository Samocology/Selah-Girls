//#region node_modules/.nitro/vite/services/ssr/assets/http-BiLM6Dn8.js
var BASE_UNITS_PER_GBP = 2e3;
var nf = new Intl.NumberFormat("en-GB", {
	style: "currency",
	currency: "GBP",
	maximumFractionDigits: 0
});
function formatPrice(value) {
	return nf.format(value / BASE_UNITS_PER_GBP);
}
function discountPercent(price, oldPrice) {
	if (!oldPrice || oldPrice <= price) return 0;
	return Math.round((oldPrice - price) / oldPrice * 100);
}
/**
* Thin transport layer. Every service goes through `request` so that swapping
* the mock resolver for a real HTTP backend is a one-file change.
*
* Set VITE_API_BASE_URL to point the app at a live API; without it the
* services resolve their in-memory fixtures instead.
*/
var API_BASE_URL = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_GOOGLE_CLIENT_ID": "266208376670-ekm53iv6uacvhhevl7d2aihqf20i7jmb.apps.googleusercontent.com",
	"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjZ3ZleGhlaHNqaXp6a2h6dmprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzMjMzMzMsImV4cCI6MjEwMzg5OTMzM30.bIwxi2h2jyQUV9Zy58qJuiB0P8r7_hEHMiplLZNk184",
	"VITE_SUPABASE_URL": "https://scgvexhehsjizzkhzvjk.supabase.co"
}["VITE_API_BASE_URL"];
var LATENCY = 260;
var ApiError = class extends Error {
	status;
	constructor(message, status = 500) {
		super(message);
		this.name = "ApiError";
		this.status = status;
	}
};
/** Resolves mock data with realistic latency, or calls the real API when configured. */
async function request(path, fallback, init) {
	if (API_BASE_URL) {
		const response = await fetch(`${API_BASE_URL}${path}`, {
			headers: {
				"Content-Type": "application/json",
				...init?.headers ?? {}
			},
			...init
		});
		if (!response.ok) throw new ApiError(`Request to ${path} failed`, response.status);
		return await response.json();
	}
	await new Promise((resolve) => setTimeout(resolve, LATENCY));
	return fallback();
}
//#endregion
export { request as i, discountPercent as n, formatPrice as r, ApiError as t };
