import { n as supabase } from "./utils-CXSb6xdn.mjs";
import { t as ApiError } from "./http-BiLM6Dn8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/productService-ChxUFONV.js
function sortKeyToSupabase(sort) {
	switch (sort) {
		case "price-asc": return {
			column: "price",
			ascending: true
		};
		case "price-desc": return {
			column: "price",
			ascending: false
		};
		case "newest": return {
			column: "created_at",
			ascending: false
		};
		case "best-selling": return {
			column: "reviews_count",
			ascending: false
		};
		case "rating": return {
			column: "rating",
			ascending: false
		};
		default: return {
			column: "created_at",
			ascending: false
		};
	}
}
function mapSupabaseProduct(row) {
	return {
		id: String(row["id"]),
		slug: String(row["slug"]),
		name: String(row["name"]),
		description: String(row["description"]),
		details: Array.isArray(row["details"]) ? row["details"] : [],
		category: String(row["category"]),
		subcategory: String(row["subcategory"] ?? ""),
		price: Number(row["price"]),
		oldPrice: row["old_price"] == null ? void 0 : Number(row["old_price"]),
		sku: String(row["sku"]),
		stock: Number(row["stock"]),
		sizes: Array.isArray(row["sizes"]) ? row["sizes"] : [],
		colors: Array.isArray(row["colors"]) ? row["colors"] : [],
		images: Array.isArray(row["images"]) ? row["images"] : [],
		tags: Array.isArray(row["tags"]) ? row["tags"] : [],
		rating: Number(row["rating"]),
		reviewsCount: Number(row["reviews_count"]),
		featured: Boolean(row["featured"]),
		bestSeller: Boolean(row["best_seller"]),
		newArrival: Boolean(row["new_arrival"]),
		status: String(row["status"])
	};
}
function applyFilters(list, filters = {}) {
	const term = filters.search?.trim().toLowerCase();
	const filtered = list.filter((product) => {
		if (filters.category && product.category !== filters.category) return false;
		if (filters.sizes?.length && !filters.sizes.some((size) => product.sizes.includes(size))) return false;
		if (filters.colors?.length && !filters.colors.some((color) => product.colors.some((c) => c.name === color))) return false;
		if (filters.minPrice !== void 0 && product.price < filters.minPrice) return false;
		if (filters.maxPrice !== void 0 && product.price > filters.maxPrice) return false;
		if (filters.inStockOnly && product.stock === 0) return false;
		if (filters.minRating !== void 0 && product.rating < filters.minRating) return false;
		if (filters.onSaleOnly && !product.oldPrice) return false;
		if (term) {
			if (![
				product.name,
				product.category,
				product.subcategory,
				product.sku,
				...product.tags
			].join(" ").toLowerCase().includes(term)) return false;
		}
		return true;
	});
	const sort = filters.sort ?? "featured";
	const sorted = [...filtered];
	switch (sort) {
		case "price-asc": return sorted.sort((a, b) => a.price - b.price);
		case "price-desc": return sorted.sort((a, b) => b.price - a.price);
		case "newest": return sorted.sort((a, b) => Number(b.newArrival) - Number(a.newArrival));
		case "best-selling": return sorted.sort((a, b) => b.reviewsCount - a.reviewsCount);
		case "rating": return sorted.sort((a, b) => b.rating - a.rating);
		default: return sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
	}
}
var productService = {
	async list(filters = {}) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		let query = client.from("products").select("*");
		const { column, ascending } = sortKeyToSupabase(filters.sort ?? "featured");
		query = query.order(column, { ascending });
		if (filters.category) query = query.eq("category", filters.category);
		if (filters.inStockOnly) query = query.gt("stock", 0);
		if (filters.onSaleOnly) query = query.not("old_price", "is", null);
		if (filters.minRating !== void 0) query = query.gte("rating", filters.minRating);
		if (filters.minPrice !== void 0) query = query.gte("price", filters.minPrice);
		if (filters.maxPrice !== void 0) query = query.lte("price", filters.maxPrice);
		if (filters.search) query = query.or(`name.ilike.%${filters.search}%,slug.ilike.%${filters.search}%,sku.ilike.%${filters.search}%`);
		const { data, error } = await query;
		if (error) throw new ApiError(error.message, 400);
		return applyFilters((data ?? []).map(mapSupabaseProduct), filters);
	},
	async bySlug(slug) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("products").select("*").eq("slug", slug).maybeSingle();
		if (error) throw new ApiError(error.message, 400);
		if (!data) throw new ApiError("Product not found", 404);
		return mapSupabaseProduct(data);
	},
	async byId(id) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("products").select("*").eq("id", id).maybeSingle();
		if (error) throw new ApiError(error.message, 400);
		if (!data) throw new ApiError("Product not found", 404);
		return mapSupabaseProduct(data);
	},
	async featured() {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("products").select("*").eq("featured", true).order("created_at", { ascending: false });
		if (error) throw new ApiError(error.message, 400);
		return (data ?? []).map(mapSupabaseProduct);
	},
	async newArrivals() {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("products").select("*").eq("new_arrival", true).order("created_at", { ascending: false });
		if (error) throw new ApiError(error.message, 400);
		return (data ?? []).map(mapSupabaseProduct);
	},
	async bestSellers() {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("products").select("*").eq("best_seller", true).order("reviews_count", { ascending: false });
		if (error) throw new ApiError(error.message, 400);
		return (data ?? []).map(mapSupabaseProduct);
	},
	async related(product) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("products").select("*").eq("category", product.category).neq("id", product.id).limit(4);
		if (error) throw new ApiError(error.message, 400);
		return (data ?? []).map(mapSupabaseProduct);
	},
	async reviews(productId) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("reviews").select("*").eq("product_id", productId).order("date", { ascending: false });
		if (error) throw new ApiError(error.message, 400);
		return (data ?? []).map((row) => ({
			id: String(row["id"]),
			productId: String(row["product_id"]),
			author: String(row["author"]),
			rating: Number(row["rating"]),
			title: String(row["title"]),
			body: String(row["body"]),
			date: String(row["date"])
		}));
	},
	async testimonials() {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data, error } = await client.from("testimonials").select("*").order("rating", { ascending: false });
		if (error) throw new ApiError(error.message, 400);
		return (data ?? []).map((row) => ({
			id: String(row["id"]),
			name: String(row["name"]),
			location: String(row["location"]),
			rating: Number(row["rating"]),
			quote: String(row["quote"])
		}));
	},
	async search(term) {
		return await this.list({ search: term });
	},
	async create(input) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const payload = {
			id: `prd-${Date.now()}`,
			slug: input.slug,
			name: input.name,
			description: input.description,
			details: input.details,
			category: input.category,
			subcategory: input.subcategory,
			price: input.price,
			old_price: input.oldPrice ?? null,
			sku: input.sku,
			stock: input.stock,
			sizes: input.sizes,
			colors: input.colors,
			images: input.images,
			tags: input.tags,
			rating: input.rating,
			reviews_count: input.reviewsCount,
			featured: input.featured,
			best_seller: input.bestSeller,
			new_arrival: input.newArrival,
			status: input.status
		};
		const { data, error } = await client.from("products").insert(payload).select("*").single();
		if (error) throw new ApiError(error.message, 400);
		return mapSupabaseProduct(data);
	},
	async update(id, patch) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const payload = {};
		if (patch.slug !== void 0) payload["slug"] = patch.slug;
		if (patch.name !== void 0) payload["name"] = patch.name;
		if (patch.description !== void 0) payload["description"] = patch.description;
		if (patch.details !== void 0) payload["details"] = patch.details;
		if (patch.category !== void 0) payload["category"] = patch.category;
		if (patch.subcategory !== void 0) payload["subcategory"] = patch.subcategory;
		if (patch.price !== void 0) payload["price"] = patch.price;
		if (patch.oldPrice !== void 0) payload["old_price"] = patch.oldPrice;
		if (patch.sku !== void 0) payload["sku"] = patch.sku;
		if (patch.stock !== void 0) payload["stock"] = patch.stock;
		if (patch.sizes !== void 0) payload["sizes"] = patch.sizes;
		if (patch.colors !== void 0) payload["colors"] = patch.colors;
		if (patch.images !== void 0) payload["images"] = patch.images;
		if (patch.tags !== void 0) payload["tags"] = patch.tags;
		if (patch.rating !== void 0) payload["rating"] = patch.rating;
		if (patch.reviewsCount !== void 0) payload["reviews_count"] = patch.reviewsCount;
		if (patch.featured !== void 0) payload["featured"] = patch.featured;
		if (patch.bestSeller !== void 0) payload["best_seller"] = patch.bestSeller;
		if (patch.newArrival !== void 0) payload["new_arrival"] = patch.newArrival;
		if (patch.status !== void 0) payload["status"] = patch.status;
		const { data, error } = await client.from("products").update(payload).eq("id", id).select("*").single();
		if (error) throw new ApiError(error.message, 400);
		return mapSupabaseProduct(data);
	},
	async remove(id) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { error } = await client.from("products").delete().eq("id", id);
		if (error) throw new ApiError(error.message, 400);
		return { id };
	},
	async duplicate(id) {
		const client = supabase;
		if (!client) throw new Error("Supabase is not configured");
		const { data: source, error: sourceError } = await client.from("products").select("*").eq("id", id).single();
		if (sourceError || !source) throw new ApiError("Product not found", 404);
		const copy = {
			id: `prd-${Date.now()}`,
			slug: `${source["slug"]}-copy`,
			name: `${source["name"]} (Copy)`,
			description: source["description"],
			details: source["details"],
			category: source["category"],
			subcategory: source["subcategory"],
			price: source["price"],
			old_price: source["old_price"],
			sku: source["sku"],
			stock: source["stock"],
			sizes: source["sizes"],
			colors: source["colors"],
			images: source["images"],
			tags: source["tags"],
			rating: source["rating"],
			reviews_count: source["reviews_count"],
			featured: source["featured"],
			best_seller: source["best_seller"],
			new_arrival: source["new_arrival"],
			status: "draft"
		};
		const { data, error } = await client.from("products").insert(copy).select("*").single();
		if (error) throw new ApiError(error.message, 400);
		return mapSupabaseProduct(data);
	}
};
//#endregion
export { productService as t };
