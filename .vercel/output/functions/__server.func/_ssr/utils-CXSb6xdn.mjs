import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-CXSb6xdn.js
var url = {
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
}["VITE_SUPABASE_URL"];
var anonKey = {
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
}["VITE_SUPABASE_ANON_KEY"];
if (!url || !anonKey) throw new Error("Missing Supabase environment variables. Please check your .env file and make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.");
var supabase = createClient(url, anonKey, { auth: {
	persistSession: true,
	autoRefreshToken: true,
	detectSessionInUrl: true,
	flowType: "pkce"
} });
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
export { supabase as n, cn as t };
