import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, LockKeyhole, Mail, Phone, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/login")({ component: LoginPage });

type AuthMode = "login" | "register";

function LoginPage() {
  const { user, login, register, googleLogin } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>("login");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const googleClientId = import.meta.env["VITE_GOOGLE_CLIENT_ID"] as string | undefined;

  useEffect(() => {
    if (user) {
      void navigate({ to: "/account", replace: true });
    }
  }, [user, navigate]);

  const handleGoogleSignIn = async () => {
    setBusy(true);
    setError("");
    try {
      const client = supabase;
      if (!client) throw new Error("Supabase is not configured");
      const { data, error } = await client.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.origin + "/login" },
      });
      if (error) throw new Error(error.message);
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (googleError) {
      setError(googleError instanceof Error ? googleError.message : "Google sign-in failed.");
      setBusy(false);
    }
  };

  if (user) {
    return null;
  }

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,oklch(0.87_0.07_80_/_0.7),transparent_34%),radial-gradient(circle_at_90%_88%,oklch(0.78_0.08_46_/_0.18),transparent_32%)]" />
      <div className="relative mx-auto grid min-h-screen w-full max-w-[100rem] lg:grid-cols-[1fr_0.9fr]">
        <section className="hidden flex-col justify-between p-10 lg:flex xl:p-16">
          <Link to="/" className="font-display text-3xl tracking-tight">
            Selah{" "}
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Girl Society
            </span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <p className="eyebrow">A community for the set-apart woman</p>
            <h1 className="mt-5 font-display text-6xl leading-[0.98] xl:text-8xl">
              Pause.
              <br />
              Reflect.
              <br />
              <span className="text-accent">Declare.</span>
            </h1>
            <p className="mt-8 max-w-md text-sm leading-7 text-muted-foreground">
              Faith-led fashion and Christian basics for women choosing to live intentionally,
              boldly, and unapologetically for Jesus.
            </p>
          </motion.div>
          <p className="text-xs text-muted-foreground">Wear what you believe.</p>
        </section>

        <section className="relative flex items-center justify-center px-5 py-10 sm:px-10 lg:bg-surface/70 lg:px-16">
          <Link
            to="/"
            className="absolute left-5 top-7 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground lg:left-16"
          >
            <ArrowLeft className="size-4" /> Back to store
          </Link>
          <div className="w-full max-w-md pt-8">
            <div className="mb-10 lg:hidden">
              <Link to="/" className="font-display text-3xl">
                Selah
              </Link>
              <p className="mt-3 eyebrow">Girl Society</p>
            </div>
            <div className="flex border-b border-border">
              {(["login", "register"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setMode(item);
                    setError("");
                  }}
                  className={cn(
                    "flex-1 border-b-2 pb-4 text-sm font-medium capitalize transition-colors",
                    mode === item
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item === "login" ? "Sign in" : "Create account"}
                </button>
              ))}
            </div>
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="mt-8 font-display text-4xl">
                {mode === "login" ? "Welcome back." : "Join the society."}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {mode === "login"
                  ? "Your orders, saved details, and Selah world are waiting."
                  : "Create your account and make space for what matters."}
              </p>
              <form
                className="mt-8"
                onSubmit={async (event) => {
                  event.preventDefault();
                  setBusy(true);
                  setError("");
                  const data = new FormData(event.currentTarget);
                  try {
                    if (mode === "login")
                      await login(String(data.get("email")), String(data.get("password")));
                    else
                      await register({
                        name: String(data.get("name")),
                        email: String(data.get("email")),
                        phone: String(data.get("phone")),
                        password: String(data.get("password")),
                      });
                    await navigate({ to: "/account", replace: true });
                  } catch (formError) {
                    setError(
                      formError instanceof Error
                        ? formError.message
                        : "We couldn't complete that request.",
                    );
                  } finally {
                    setBusy(false);
                  }
                }}
              >
                {mode === "register" && (
                  <AuthField name="name" label="Full name" icon={UserRound} />
                )}
                {mode === "register" && (
                  <AuthField name="phone" label="Phone number" icon={Phone} />
                )}
                <AuthField name="email" label="Email address" type="email" icon={Mail} />
                <AuthField name="password" label="Password" type="password" icon={LockKeyhole} />
                {mode === "login" && (
                  <div className="mt-3 text-right">
                    <button
                      type="button"
                      className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}
                {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
                <button
                  disabled={busy}
                  className="group mt-7 flex h-13 w-full items-center justify-between rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:-translate-y-0.5 hover:bg-primary/90 disabled:opacity-60"
                >
                  {busy
                    ? "Please wait…"
                    : mode === "login"
                      ? "Enter my account"
                      : "Create my account"}
                  <span className="grid size-8 place-items-center rounded-full bg-primary-foreground/15 transition-transform group-hover:translate-x-1">
                    <ArrowRight className="size-4" />
                  </span>
                </button>
              </form>
              <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                <span>or continue with</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <button
                onClick={handleGoogleSignIn}
                disabled={busy}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-muted disabled:opacity-60"
              >
                {busy ? "Please wait…" : "Continue with Google"}
              </button>
              <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Check className="size-3.5 text-accent" /> Order tracking
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="size-3.5 text-accent" /> Faster checkout
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

function AuthField({
  name,
  label,
  type = "text",
  icon: Icon,
}: {
  name: string;
  label: string;
  type?: string;
  icon: typeof UserRound;
}) {
  return (
    <label className="mt-5 block text-sm font-medium">
      {label}
      <span className="relative mt-2 block">
        <Icon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          name={name}
          type={type}
          required
          className="h-13 w-full rounded-xl border border-input bg-background pl-11 pr-4 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
      </span>
    </label>
  );
}
