import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "@/types";
import { authService } from "@/services/authService";
import { supabase } from "@/lib/supabase";

const STORAGE_KEY = "selah.user";

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  ready: boolean;
  login: (email: string, password: string) => Promise<User>;
  googleLogin: (credential: string) => Promise<User>;
  adminLogin: (email: string, password: string) => Promise<User>;
  startRegistration: (input: {
    name: string;
    email: string;
    phone: string;
    password: string;
  }) => Promise<{ email: string; userId: string | null }>;
  verifyRegistrationOtp: (email: string, code: string) => Promise<User>;
  resendRegistrationOtp: (email: string) => Promise<{ sent: boolean }>;
  register: (input: {
    name: string;
    email: string;
    phone: string;
    password: string;
  }) => Promise<User>;
  updateProfile: (patch: Partial<User>) => Promise<User>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const client = supabase;
    if (!client) {
      setReady(true);
      return;
    }

    const handleSession = async () => {
      const {
        data: { session },
      } = await client.auth.getSession();
      if (session?.user) {
        const { data: profile } = await client
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .maybeSingle();
        if (profile) {
          const mapped = {
            id: profile.id,
            name: profile.name ?? session.user.email ?? "User",
            email: session.user.email ?? "",
            phone: profile.phone ?? "",
            role: profile.role as "customer" | "admin",
          };
          setUser(mapped);
          try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(mapped));
          } catch {
            /* storage unavailable */
          }
        }
      }
    };

    void handleSession().then(() => setReady(true));

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw) as User);
    } catch {
      /* ignore corrupted storage */
    }
  }, []);

  useEffect(() => {
    const client = supabase;
    if (!client) return;
    const { data: listener } = client.auth.onAuthStateChange(async (_event, session) => {
      if (!session?.user) {
        setUser(null);
        return;
      }
      const { data: profile } = await client
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .maybeSingle();
      if (!profile) {
        setUser(null);
        return;
      }
      const mapped = {
        id: profile.id,
        name: profile.name ?? session.user.email ?? "User",
        email: session.user.email ?? "",
        phone: profile.phone ?? "",
        role: profile.role as "customer" | "admin",
      };
      setUser(mapped);
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(mapped));
      } catch {
        /* storage unavailable */
      }
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const persist = useCallback((next: User | null) => {
    setUser(next);
    try {
      if (next) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isAdmin: user?.role === "admin",
      ready,
      async login(email, password) {
        const next = await authService.login(email, password);
        persist(next);
        return next;
      },
      async googleLogin(credential) {
        const next = await authService.googleLogin(credential);
        persist(next);
        return next;
      },
      async adminLogin(email, password) {
        const next = await authService.adminLogin(email, password);
        persist(next);
        return next;
      },
      async register(input) {
        const next = await authService.register(input);
        persist(next);
        return next;
      },
      async startRegistration(input) {
        return authService.startRegistration(input);
      },
      async verifyRegistrationOtp(email, code) {
        const next = await authService.verifyRegistrationOtp(email, code);
        persist(next);
        return next;
      },
      async resendRegistrationOtp(email) {
        return authService.resendRegistrationOtp(email);
      },
      async updateProfile(patch) {
        if (!user) throw new Error("Not signed in");
        const next = await authService.updateProfile(user, patch);
        persist(next);
        return next;
      },
      logout() {
        persist(null);
        supabase?.auth.signOut();
      },
    }),
    [user, ready, persist],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
