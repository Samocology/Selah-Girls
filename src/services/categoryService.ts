import { categories, products } from "@/data/catalog";
import type { Category } from "@/types";
import { ApiError, request } from "./http";

let list: Category[] = [...categories];

export const categoryService = {
  list() {
    return request<Category[]>("/categories", () => list);
  },
  bySlug(slug: string) {
    return request<Category>(`/categories/${slug}`, () => {
      const category = list.find((item) => item.slug === slug);
      if (!category) throw new ApiError("Category not found", 404);
      return category;
    });
  },
  withCounts() {
    return request<Array<Category & { count: number }>>("/categories?counts=1", () =>
      list.map((category) => ({
        ...category,
        count: products.filter((product) => product.category === category.slug).length,
      })),
    );
  },
  create(input: Omit<Category, "id">) {
    return request<Category>("/admin/categories", () => {
      const created = { ...input, id: `cat-${Date.now()}` };
      list = [...list, created];
      return created;
    });
  },
  update(id: string, patch: Partial<Category>) {
    return request<Category>(`/admin/categories/${id}`, () => {
      let updated: Category | undefined;
      list = list.map((item) => {
        if (item.id !== id) return item;
        updated = { ...item, ...patch };
        return updated;
      });
      if (!updated) throw new ApiError("Category not found", 404);
      return updated;
    });
  },
  remove(id: string) {
    return request<{ id: string }>(`/admin/categories/${id}`, () => {
      list = list.filter((item) => item.id !== id);
      return { id };
    });
  },
};
