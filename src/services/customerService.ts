import { supabase } from "@/lib/supabase";
import type { Address, Customer } from "@/types";
import { ApiError } from "./http";

function mapSupabaseCustomer(row: Record<string, unknown>): Customer {
  return {
    id: String(row.id),
    name: String(row.name),
    email: String(row.email),
    phone: row.phone == null ? "" : String(row.phone),
    joinedAt: String(row.joined_at),
    orders: Number(row.orders),
    totalSpent: Number(row.total_spent),
    status: String(row.status) as Customer["status"],
    addresses: Array.isArray(row.addresses) ? (row.addresses as Address[]) : [],
  };
}

export const customerService = {
  async list() {
    const client = supabase;
    if (!client) throw new Error("Supabase is not configured");
    const { data, error } = await client
      .from("customers")
      .select("*")
      .order("joined_at", { ascending: false });
    if (error) throw new ApiError(error.message, 400);
    return (data ?? []).map(mapSupabaseCustomer);
  },

  async byId(id: string) {
    const client = supabase;
    if (!client) throw new Error("Supabase is not configured");
    const { data, error } = await client.from("customers").select("*").eq("id", id).maybeSingle();
    if (error) throw new ApiError(error.message, 400);
    if (!data) throw new ApiError("Customer not found", 404);
    return mapSupabaseCustomer(data);
  },

  async recordOrder(order: Pick<Customer, "id" | "name" | "email" | "phone"> & { total: number }) {
    const client = supabase;
    if (!client) throw new Error("Supabase is not configured");
    const { data: existing, error: existingError } = await client
      .from("customers")
      .select("*")
      .eq("email", order.email)
      .maybeSingle();
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
        status: "active",
      };
      const { data, error } = await client
        .from("customers")
        .update(updated)
        .eq("id", existing.id)
        .select("*")
        .single();
      if (error) throw new ApiError(error.message, 400);
      return mapSupabaseCustomer(data);
    }
    if (count < 3) return null as unknown as Customer;
    const created = {
      id: order.id,
      name: order.name,
      email: order.email,
      phone: order.phone,
      joined_at: new Date().toISOString(),
      orders: count,
      total_spent: order.total,
      status: "active",
      addresses: [],
    };
    const { data, error } = await client.from("customers").insert(created).select("*").single();
    if (error) throw new ApiError(error.message, 400);
    return mapSupabaseCustomer(data);
  },

  async addresses(customerId = "cus-001") {
    const client = supabase;
    if (!client) throw new Error("Supabase is not configured");
    const { data, error } = await client
      .from("customers")
      .select("addresses")
      .eq("id", customerId)
      .maybeSingle();
    if (error) throw new ApiError(error.message, 400);
    return (data?.addresses as Address[] | undefined) ?? [];
  },

  async saveAddress(customerId: string, address: Address) {
    const client = supabase;
    if (!client) throw new Error("Supabase is not configured");
    const { data: existing, error: existingError } = await client
      .from("customers")
      .select("addresses")
      .eq("id", customerId)
      .maybeSingle();
    if (existingError) throw new ApiError(existingError.message, 400);
    const addresses = (existing?.addresses as Address[] | undefined) ?? [];
    const exists = addresses.some((item) => item.id === address.id);
    const next = exists
      ? addresses.map((item) => (item.id === address.id ? address : item))
      : [...addresses, address];
    const normalized = next.map((item) => ({
      ...item,
      isDefault: address.isDefault ? item.id === address.id : item.isDefault,
    }));
    const { data, error } = await client
      .from("customers")
      .update({ addresses: normalized })
      .eq("id", customerId)
      .select("addresses")
      .single();
    if (error) throw new ApiError(error.message, 400);
    return (data?.addresses as Address[] | undefined) ?? [];
  },

  async removeAddress(customerId: string, addressId: string) {
    const client = supabase;
    if (!client) throw new Error("Supabase is not configured");
    const { data: existing, error: existingError } = await client
      .from("customers")
      .select("addresses")
      .eq("id", customerId)
      .maybeSingle();
    if (existingError) throw new ApiError(existingError.message, 400);
    const addresses = ((existing?.addresses as Address[] | undefined) ?? []).filter(
      (item) => item.id !== addressId,
    );
    const { data, error } = await client
      .from("customers")
      .update({ addresses })
      .eq("id", customerId)
      .select("addresses")
      .single();
    if (error) throw new ApiError(error.message, 400);
    return (data?.addresses as Address[] | undefined) ?? [];
  },
};
