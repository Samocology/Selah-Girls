import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WishlistContext-BedorS19.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY$1 = "selah.cart";
var SHIPPING_FLAT = 3500;
var CartContext = (0, import_react.createContext)(null);
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [coupon, setCoupon] = (0, import_react.useState)(null);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY$1);
			if (raw) setItems(JSON.parse(raw));
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		try {
			window.localStorage.setItem(STORAGE_KEY$1, JSON.stringify(items));
		} catch {}
	}, [items, hydrated]);
	const add = (0, import_react.useCallback)((product, options) => {
		const size = options?.size ?? product.sizes[0] ?? "One Size";
		const color = options?.color ?? product.colors[0]?.name ?? "Default";
		const quantity = options?.quantity ?? 1;
		const id = `${product.id}-${size}-${color}`;
		setItems((current) => {
			if (current.find((item) => item.id === id)) return current.map((item) => item.id === id ? {
				...item,
				quantity: Math.min(item.quantity + quantity, item.stock || 99)
			} : item);
			const next = {
				id,
				productId: product.id,
				slug: product.slug,
				name: product.name,
				image: product.images[0] ?? "",
				price: product.price,
				...product.oldPrice !== void 0 ? { oldPrice: product.oldPrice } : {},
				size,
				color,
				quantity,
				stock: product.stock
			};
			return [...current, next];
		});
		toast.success("Added to bag", { description: `${product.name} · ${size} · ${color}` });
	}, []);
	const remove = (0, import_react.useCallback)((id) => {
		setItems((current) => current.filter((item) => item.id !== id));
	}, []);
	const setQuantity = (0, import_react.useCallback)((id, quantity) => {
		setItems((current) => current.map((item) => item.id === id ? {
			...item,
			quantity: Math.max(1, quantity)
		} : item).filter((item) => item.quantity > 0));
	}, []);
	const clear = (0, import_react.useCallback)(() => {
		setItems([]);
		setCoupon(null);
	}, []);
	const value = (0, import_react.useMemo)(() => {
		const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
		const discount = coupon?.discount ?? 0;
		const shipping = items.length === 0 || subtotal >= 1e5 ? 0 : SHIPPING_FLAT;
		return {
			items,
			count: items.reduce((sum, item) => sum + item.quantity, 0),
			subtotal,
			discount,
			shipping,
			total: Math.max(0, subtotal - discount) + shipping,
			coupon,
			add,
			remove,
			setQuantity,
			clear,
			applyCoupon: setCoupon
		};
	}, [
		items,
		coupon,
		add,
		remove,
		setQuantity,
		clear
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value,
		children
	});
}
function useCart() {
	const context = (0, import_react.useContext)(CartContext);
	if (!context) throw new Error("useCart must be used inside CartProvider");
	return context;
}
var STORAGE_KEY = "selah.wishlist";
var WishlistContext = (0, import_react.createContext)(null);
function WishlistProvider({ children }) {
	const [ids, setIds] = (0, import_react.useState)([]);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			if (raw) setIds(JSON.parse(raw));
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
		} catch {}
	}, [ids, hydrated]);
	const toggle = (0, import_react.useCallback)((id, name) => {
		setIds((current) => {
			if (current.includes(id)) {
				toast("Removed from wishlist", { description: name });
				return current.filter((item) => item !== id);
			}
			toast.success("Saved to wishlist", { description: name });
			return [...current, id];
		});
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		ids,
		count: ids.length,
		has: (id) => ids.includes(id),
		toggle,
		remove: (id) => setIds((current) => current.filter((item) => item !== id)),
		clear: () => setIds([])
	}), [ids, toggle]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistContext.Provider, {
		value,
		children
	});
}
function useWishlist() {
	const context = (0, import_react.useContext)(WishlistContext);
	if (!context) throw new Error("useWishlist must be used inside WishlistProvider");
	return context;
}
//#endregion
export { useWishlist as i, WishlistProvider as n, useCart as r, CartProvider as t };
