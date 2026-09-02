import { i as request, t as ApiError } from "./http-BiLM6Dn8.mjs";
import { i as products, r as categories } from "./StoreLayout-CAZLaRt9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categoryService-Ddiz9tCV.js
var list = [...categories];
var categoryService = {
	list() {
		return request("/categories", () => list);
	},
	bySlug(slug) {
		return request(`/categories/${slug}`, () => {
			const category = list.find((item) => item.slug === slug);
			if (!category) throw new ApiError("Category not found", 404);
			return category;
		});
	},
	withCounts() {
		return request("/categories?counts=1", () => list.map((category) => ({
			...category,
			count: products.filter((product) => product.category === category.slug).length
		})));
	},
	create(input) {
		return request("/admin/categories", () => {
			const created = {
				...input,
				id: `cat-${Date.now()}`
			};
			list = [...list, created];
			return created;
		});
	},
	update(id, patch) {
		return request(`/admin/categories/${id}`, () => {
			let updated;
			list = list.map((item) => {
				if (item.id !== id) return item;
				updated = {
					...item,
					...patch
				};
				return updated;
			});
			if (!updated) throw new ApiError("Category not found", 404);
			return updated;
		});
	},
	remove(id) {
		return request(`/admin/categories/${id}`, () => {
			list = list.filter((item) => item.id !== id);
			return { id };
		});
	}
};
//#endregion
export { categoryService as t };
