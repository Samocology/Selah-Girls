import type { User } from "@/types";
import { supabase } from "@/lib/supabase";

function mapProfileToUser(
  profile: { id: string; name: string | null; phone: string | null; role: string },
  email?: string | null,
): User {
  return {
    id: profile.id,
    name: profile.name ?? "User",
    email: email ?? "",
    phone: profile.phone ?? "",
    role: profile.role as "customer" | "admin",
  };
}

export const authService = {
  async login(email: string, password: string) {
    const client = supabase;
    if (!client) throw new Error("Supabase is not configured");
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
    const { data: profile } = await client
      .from("profiles")
      .select("*")
      .eq("id", data.user.id)
      .maybeSingle();
    if (!profile) throw new Error("Profile not found");
    return mapProfileToUser(profile, data.user.email);
  },

  async googleLogin(credential: string) {
    const client = supabase;
    if (!client) throw new Error("Supabase is not configured");
    const { data, error } = await client.auth.signInWithIdToken({
      provider: "google",
      token: credential,
    });
    if (error) throw new Error(error.message);
    const { data: profile } = await client
      .from("profiles")
      .select("*")
      .eq("id", data.user.id)
      .maybeSingle();
    if (!profile) throw new Error("Profile not found");
    return mapProfileToUser(profile, data.user.email);
  },

  async adminLogin(email: string, password: string) {
    const user = await this.login(email, password);
    if (user.role !== "admin") throw new Error("Invalid administrator credentials");
    return user;
  },

  async register(input: { name: string; email: string; phone: string; password: string }) {
    const client = supabase;
    if (!client) throw new Error("Supabase is not configured");
    const { data, error } = await client.auth.signUp({
      email: input.email,
      password: input.password,
      options: { data: { name: input.name, phone: input.phone } },
    });
    if (error) throw new Error(error.message);
    const { data: profile } = await client
      .from("profiles")
      .select("*")
      .eq("id", data.user.id)
      .maybeSingle();
    if (!profile) throw new Error("Profile not found");
    return mapProfileToUser(profile, data.user.email);
  },

  async requestPasswordReset(email: string) {
    const client = supabase;
    if (!client) throw new Error("Supabase is not configured");
    const { error } = await client.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) throw new Error(error.message);
    return { sent: true };
  },

  async updateProfile(user: User, patch: Partial<User>) {
    const client = supabase;
    if (!client) throw new Error("Supabase is not configured");
    const { error } = await client
      .from("profiles")
      .update({
        name: patch.name ?? user.name,
        phone: patch.phone ?? user.phone,
      })
      .eq("id", user.id);
    if (error) throw new Error(error.message);
    return { ...user, ...patch };
  },
};
