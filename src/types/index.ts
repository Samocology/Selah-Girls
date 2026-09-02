export type ProductStatus = "active" | "draft" | "archived";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  details: string[];
  category: string;
  subcategory: string;
  price: number;
  oldPrice?: number | undefined;
  sku: string;
  stock: number;
  sizes: string[];
  colors: ProductColor[];
  images: string[];
  tags: string[];
  rating: number;
  reviewsCount: number;
  featured: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  status: ProductStatus;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  active: boolean;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  body: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export interface CartItem {
  id: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number | undefined;
  size: string;
  color: string;
  quantity: number;
  stock: number;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "out-for-delivery"
  | "delivered"
  | "cancelled"
  | "refunded";

export type PaymentStatus = "unpaid" | "paid" | "refunded" | "failed";

export interface OrderItem {
  name: string;
  slug: string;
  image: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

export interface Address {
  id: string;
  label: string;
  fullName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  reference: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  createdAt: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: string;
  deliveryMethod: string;
  address: Omit<Address, "id" | "isDefault" | "label">;
  estimatedDelivery: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinedAt: string;
  orders: number;
  totalSpent: number;
  status: "active" | "blocked";
  addresses: Address[];
}

export interface Coupon {
  id: string;
  code: string;
  type: "percentage" | "fixed";
  value: number;
  minOrder: number;
  maxDiscount?: number | undefined;
  expiresAt: string;
  usageLimit: number;
  used: number;
  active: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "customer" | "admin";
  avatar?: string | undefined;
}

export interface ProductFilters {
  category?: string | undefined;
  search?: string | undefined;
  sizes?: string[] | undefined;
  colors?: string[] | undefined;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
  inStockOnly?: boolean | undefined;
  minRating?: number | undefined;
  onSaleOnly?: boolean | undefined;
  sort?: SortKey | undefined;
}

export type SortKey =
  | "featured"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "best-selling"
  | "rating";
