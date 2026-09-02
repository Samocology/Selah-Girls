import { n as supabase } from "./utils-CXSb6xdn.mjs";
import { t as ApiError } from "./http-BiLM6Dn8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customerService-Bcvfr_u4.js
function mapSupabaseCustomer(row) {
	return {
		id: String(row.id),
		name: String(row.name),
		email: String(row.email),
		phone: row.phone == null ? "" : String(row.phone),
		joinedAt: String(row.joined_at),
		orders: Number(row.orders),
		totalSpent: Number(row.total_spent),
		status: String(row.status),
		addresses: Array.isArray(row.addresses) ? row.addresses : []
	};
}
var customerService = {
	async list() {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("customers").select("*").order("joined_at", { ascending: false });
		if (error) throw new ApiError(error.message, 400);
		return (data ?? []).map(mapSupabaseCustomer);
	},
	async byId(id) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("customers").select("*").eq("id", id).maybeSingle();
		if (error) throw new ApiError(error.message, 400);
		if (!data) throw new ApiError("Customer not found", 404);
		return mapSupabaseCustomer(data);
	},
	async recordOrder(order) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data: existing, error: existingError } = await client.from("customers").select("*").eq("email", order.email).maybeSingle();
		if (existingError) throw new ApiError(existingError.message, 400);
		const count = (existing?.orders ?? 0) + 1;
		if (existing) {
			const updated = {
				...existing,
				name: order.name,
				email: order.email,
				phone: order.phone,
				orders: count,
				total_spent: Number(existing.total_spent) + order.total,
				status: "active"
			};
			const { data, error } = await client.from("customers").update(updated).eq("id", existing.id).select("*").single();
			if (error) throw new ApiError(error.message, 400);
			return mapSupabaseCustomer(data);
		}
		if (count < 3) return null;
		const created = {
			id: order.id,
			name: order.name,
			email: order.email,
			phone: order.phone,
			joined_at: (/* @__PURE__ */ new Date()).toISOString(),
			orders: count,
			total_spent: order.total,
			status: "active",
			addresses: []
		};
		const { data, error } = await client.from("customers").insert(created).select("*").single();
		if (error) throw new ApiError(error.message, 400);
		return mapSupabaseCustomer(data);
	},
	async addresses(customerId = "cus-001") {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("customers").select("addresses").eq("id", customerId).maybeSingle();
		if (error) throw new ApiError(error.message, 400);
		return data?.addresses ?? [];
	},
	async saveAddress(customerId, address) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data: existing, error: existingError } = await client.from("customers").select("addresses").eq("id", customerId).maybeSingle();
		if (existingError) throw new ApiError(existingError.message, 400);
		const addresses = existing?.addresses ?? [];
		const normalized = (addresses.some((item) => item.id === address.id) ? addresses.map((item) => item.id === address.id ? address : item) : [...addresses, address]).map((item) => ({
			...item,
			isDefault: address.isDefault ? item.id === address.id : item.isDefault
		}));
		const { data, error } = await client.from("customers").update({ addresses: normalized }).eq("id", customerId).select("addresses").single();
		if (error) throw new ApiError(error.message, 400);
		return data?.addresses ?? [];
	},
	async removeAddress(customerId, addressId) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data: existing, error: existingError } = await client.from("customers").select("addresses").eq("id", customerId).maybeSingle();
		if (existingError) throw new ApiError(existingError.message, 400);
		const addresses = (existing?.addresses ?? []).filter((item) => item.id !== addressId);
		const { data, error } = await client.from("customers").update({ addresses }).eq("id", customerId).select("addresses").single();
		if (error) throw new ApiError(error.message, 400);
		return data?.addresses ?? [];
	}
};
//#endregion
export { customerService as t };
