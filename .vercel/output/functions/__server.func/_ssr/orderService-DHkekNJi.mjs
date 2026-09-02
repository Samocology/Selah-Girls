import { n as supabase } from "./utils-CXSb6xdn.mjs";
import { t as ApiError } from "./http-BiLM6Dn8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orderService-DHkekNJi.js
function mapSupabaseOrder(row) {
	return {
		id: String(row.id),
		reference: String(row.reference),
		customerId: String(row.customer_id),
		customerName: String(row.customer_name),
		customerEmail: String(row.customer_email),
		createdAt: String(row.created_at),
		items: Array.isArray(row.items) ? row.items : [],
		subtotal: Number(row.subtotal),
		discount: Number(row.discount ?? 0),
		shipping: Number(row.shipping),
		total: Number(row.total),
		status: String(row.status),
		paymentStatus: String(row.payment_status),
		paymentMethod: String(row.payment_method),
		deliveryMethod: String(row.delivery_method),
		address: row.address,
		estimatedDelivery: row.estimated_delivery ? String(row.estimated_delivery) : ""
	};
}
var orderService = {
	async list() {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("orders").select("*").order("created_at", { ascending: false });
		if (error) throw new ApiError(error.message, 400);
		return (data ?? []).map(mapSupabaseOrder);
	},
	async byCustomer(email) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("orders").select("*").eq("customer_email", email).order("created_at", { ascending: false });
		if (error) throw new ApiError(error.message, 400);
		return (data ?? []).map(mapSupabaseOrder);
	},
	async byId(id) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("orders").select("*").eq("id", id).maybeSingle();
		if (error) throw new ApiError(error.message, 400);
		if (!data) throw new ApiError("Order not found", 404);
		return mapSupabaseOrder(data);
	},
	async create(payload) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const id = `SLH-${Math.floor(10500 + Math.random() * 400)}`;
		const order = {
			id,
			reference: `PSK_${id.replace("SLH-", "")}`,
			customer_id: payload.customer.id ?? "cus-001",
			customer_name: payload.customer.name,
			customer_email: payload.customer.email,
			items: payload.items.map((item) => ({
				name: item.name,
				slug: item.slug,
				image: item.image,
				size: item.size,
				color: item.color,
				quantity: item.quantity,
				price: item.price
			})),
			subtotal: payload.subtotal,
			discount: payload.discount,
			shipping: payload.shipping,
			total: payload.total,
			status: "confirmed",
			payment_status: "paid",
			payment_method: payload.paymentMethod,
			delivery_method: payload.deliveryMethod,
			address: payload.address,
			estimated_delivery: new Date(Date.now() + 2592e5).toISOString()
		};
		const { data, error } = await client.from("orders").insert(order).select("*").single();
		if (error) throw new ApiError(error.message, 400);
		return mapSupabaseOrder(data);
	},
	async updateStatus(id, status) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("orders").update({ status }).eq("id", id).select("*").single();
		if (error) throw new ApiError(error.message, 400);
		return mapSupabaseOrder(data);
	},
	async updatePayment(id, paymentStatus) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("orders").update({ payment_status: paymentStatus }).eq("id", id).select("*").single();
		if (error) throw new ApiError(error.message, 400);
		return mapSupabaseOrder(data);
	},
	async analytics(range = "30d") {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const [ordersResult, productsResult, customersResult] = await Promise.all([
			client.from("orders").select("*").order("created_at", { ascending: false }),
			client.from("products").select("id, name, stock, status, price, reviews_count"),
			client.from("customers").select("id, joined_at")
		]);
		const rows = (ordersResult.data ?? []).map((row) => mapSupabaseOrder(row));
		const paidOrders = rows.filter((order) => order.paymentStatus === "paid");
		const revenue = paidOrders.reduce((sum, order) => sum + order.total, 0);
		const orderCount = rows.length;
		const today = /* @__PURE__ */ new Date();
		const from = new Date(today);
		if (range === "today") from.setHours(0, 0, 0, 0);
		else if (range === "7d") from.setDate(today.getDate() - 7);
		else if (range === "30d") from.setDate(today.getDate() - 30);
		else if (range === "3m") from.setMonth(today.getMonth() - 3);
		else from.setFullYear(today.getFullYear() - 1);
		const series = Array.from({ length: 12 }, (_, i) => {
			const d = new Date(from);
			d.setMonth(d.getMonth() + i);
			const monthOrders = rows.filter((o) => {
				const od = new Date(o.createdAt);
				return od.getMonth() === d.getMonth() && od.getFullYear() === d.getFullYear();
			});
			const monthRevenue = monthOrders.filter((o) => o.paymentStatus === "paid").reduce((sum, o) => sum + o.total, 0);
			return {
				month: d.toLocaleString("default", { month: "short" }),
				revenue: monthRevenue,
				orders: monthOrders.length
			};
		});
		const productRows = productsResult.data ?? [];
		const activeProducts = productRows.filter((p) => p.status === "active");
		const lowStock = activeProducts.filter((p) => p.stock > 0 && p.stock < 10).length;
		const outOfStock = activeProducts.filter((p) => p.stock === 0).length;
		const customerRows = customersResult.data ?? [];
		const newCustomers = customerRows.filter((c) => new Date(c.joined_at) >= from).length;
		return {
			range,
			series,
			categoryPerformance: [],
			revenue,
			orders: orderCount,
			customers: customerRows.length,
			newCustomers,
			unitsSold: rows.reduce((sum, order) => sum + order.items.reduce((count, item) => count + item.quantity, 0), 0),
			averageOrderValue: orderCount ? Math.round(revenue / orderCount) : 0,
			conversionRate: 3.4,
			pendingOrders: rows.filter((order) => order.status === "pending").length,
			paidRevenue: paidOrders.reduce((sum, order) => sum + order.total, 0),
			todayRevenue: 486e3,
			lowStock,
			outOfStock,
			totalProducts: productRows.length,
			topProducts: [...activeProducts].sort((a, b) => b.reviews_count - a.reviews_count).slice(0, 5).map((product) => ({
				name: product.name,
				units: product.reviews_count,
				revenue: product.price * product.reviews_count
			}))
		};
	}
};
//#endregion
export { orderService as t };
