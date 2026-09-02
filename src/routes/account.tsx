import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { 
  ArrowRight, 
  Check, 
  LockKeyhole, 
  LogOut, 
  Mail, 
  Package, 
  Phone, 
  UserRound,
  Sparkles,
  Heart,
  MapPin,
  CreditCard,
  Settings,
  ChevronRight,
  ShoppingBag,
  Clock,
  Truck,
  CheckCircle2,
  X,
  Pencil,
  Camera,
  Star,
  Gift,
  TrendingUp,
  Crown,
  BadgeCheck,
  Loader2
} from "lucide-react";
import { StoreLayout } from "@/components/store/StoreLayout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { orderService } from "@/services/orderService";
import { formatPrice } from "@/lib/format";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/account")({ component: AccountPage });

function AccountPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) void navigate({ to: "/login", replace: true });
  }, [navigate, user]);
  
  if (!user) return null;
  return <ProfileDashboard />;
}

function ProfileDashboard() {
  const { user, logout, updateProfile } = useAuth();
  const orders = useQuery({ 
    queryKey: ["account-orders", user?.email], 
    queryFn: () => orderService.byCustomer(user!.email), 
    enabled: Boolean(user) 
  });
  
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name ?? "");
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'settings'>('orders');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleSaveProfile = async () => {
    setIsSaving(true);
    try {
      await updateProfile({ name });
      setEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const stats = {
    totalOrders: orders.data?.length ?? 0,
    totalSpent: orders.data?.reduce((sum, order) => sum + order.total, 0) ?? 0,
    memberSince: new Date().getFullYear(),
  };

  return (
    <StoreLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container-page py-10 md:py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 md:p-8 border border-primary/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="relative"
                >
                  <div className="grid size-20 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-3xl text-primary-foreground shadow-lg shadow-primary/30">
                    {user?.name.charAt(0)}
                  </div>
                  <button 
                    className="absolute -bottom-2 -right-2 p-2 rounded-full bg-background border border-border shadow-lg hover:bg-muted transition-colors"
                    onClick={() => setEditing(true)}
                  >
                    <Camera className="size-4" />
                  </button>
                </motion.div>
                
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="eyebrow text-primary flex items-center gap-2">
                      <Crown className="size-4" />
                      Your Profile
                    </p>
                    <h1 className="mt-2 font-display text-3xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Hello, {user?.name.split(" ")[0]}.
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
                      <BadgeCheck className="size-4 text-primary" />
                      Your personal corner of Selah Girl Society.
                    </p>
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-2"
              >
                <Button 
                  variant="outline" 
                  size="sm"
                  className="gap-2 hover:bg-destructive hover:text-destructive-foreground transition-all"
                  onClick={() => setShowLogoutConfirm(true)}
                >
                  <LogOut className="size-4" />
                  Sign out
                </Button>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { label: 'Orders', value: stats.totalOrders, icon: ShoppingBag },
                { label: 'Total Spent', value: formatPrice(stats.totalSpent), icon: TrendingUp },
                { label: 'Member Since', value: stats.memberSince, icon: Star },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border"
                >
                  <stat.icon className="size-5 text-primary mb-2" />
                  <p className="text-lg md:text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[320px_1fr]">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="border border-border bg-card rounded-xl overflow-hidden"
            >
              {/* Profile Card */}
              <div className="p-6 bg-gradient-to-br from-primary/5 to-transparent">
                {editing ? (
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Your Name</label>
                    <input 
                      value={name} 
                      onChange={(event) => setName(event.target.value)} 
                      className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                      placeholder="Enter your name"
                    />
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1" 
                        onClick={handleSaveProfile}
                        disabled={isSaving}
                      >
                        {isSaving ? (
                          <Loader2 className="size-4 animate-spin" />
                        ) : (
                          <Check className="size-4" />
                        )}
                        Save
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setEditing(false);
                          setName(user?.name ?? "");
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="font-display text-2xl">{user?.name}</h2>
                    <p className="mt-1 break-all text-sm text-muted-foreground flex items-center gap-2">
                      <Mail className="size-3" />
                      {user?.email}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="mt-4 w-full gap-2"
                      onClick={() => setEditing(true)}
                    >
                      <Pencil className="size-4" />
                      Edit profile
                    </Button>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <nav className="p-4 space-y-1">
                {[
                  { id: 'orders', label: 'My Orders', icon: Package },
                  { id: 'wishlist', label: 'Wishlist', icon: Heart },
                  { id: 'settings', label: 'Settings', icon: Settings },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as typeof activeTab)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "hover:bg-muted"
                    )}
                  >
                    <item.icon className="size-4" />
                    {item.label}
                    {activeTab === item.id && <ChevronRight className="size-4 ml-auto" />}
                  </button>
                ))}
              </nav>

              {/* Quick Info */}
              <div className="p-4 border-t border-border space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="size-3" />
                  <span>United Kingdom</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Gift className="size-3" />
                  <span>Free shipping on orders over £100</span>
                </div>
              </div>
            </motion.aside>

            {/* Main Content Area */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <AnimatePresence mode="wait">
                {activeTab === 'orders' && (
                  <motion.div
                    key="orders"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-display text-2xl md:text-3xl">Your Orders</h2>
                      {orders.data && orders.data.length > 0 && (
                        <span className="text-sm text-muted-foreground">
                          {orders.data.length} {orders.data.length === 1 ? 'order' : 'orders'}
                        </span>
                      )}
                    </div>
                    
                    {orders.isLoading ? (
                      <div className="flex items-center justify-center py-20">
                        <Loader2 className="size-8 animate-spin text-primary" />
                      </div>
                    ) : orders.data && orders.data.length > 0 ? (
                      <div className="space-y-4">
                        {orders.data.map((order, index) => (
                          <motion.div
                            key={order.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link 
                              to="/order/$id" 
                              params={{ id: order.id }} 
                              className="group block p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all"
                            >
                              <div className="flex flex-wrap items-center gap-4">
                                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <Package className="size-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-[200px]">
                                  <p className="text-sm font-semibold">{order.reference}</p>
                                  <p className="text-xs text-muted-foreground flex items-center gap-2 mt-1">
                                    <Clock className="size-3" />
                                    {new Date(order.createdAt).toLocaleDateString("en-GB", {
                                      day: 'numeric',
                                      month: 'long',
                                      year: 'numeric'
                                    })}
                                    <span>·</span>
                                    {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <span className="text-lg font-semibold">{formatPrice(order.total)}</span>
                                  <span className={cn(
                                    "block text-xs capitalize px-2 py-1 rounded-full mt-1 text-center",
                                    order.status === 'delivered' && 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400',
                                    order.status === 'processing' && 'bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400',
                                    order.status === 'shipped' && 'bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400',
                                    order.status === 'cancelled' && 'bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400',
                                  )}>
                                    {order.status.replaceAll("-", " ")}
                                  </span>
                                </div>
                                <ArrowRight className="size-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all" />
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16 px-6 rounded-xl border border-dashed border-border"
                      >
                        <ShoppingBag className="size-16 mx-auto text-muted-foreground/40 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
                        <p className="text-sm text-muted-foreground mb-6">
                          Your next favourite is out there waiting for you.
                        </p>
                        <Link to="/shop">
                          <Button className="gap-2">
                            Start Shopping
                            <ArrowRight className="size-4" />
                          </Button>
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'wishlist' && (
                  <motion.div
                    key="wishlist"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-16"
                  >
                    <Heart className="size-16 mx-auto text-muted-foreground/40 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Your Wishlist</h3>
                    <p className="text-sm text-muted-foreground">
                      Save your favourite items here for later.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'settings' && (
                  <motion.div
                    key="settings"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <h2 className="font-display text-2xl md:text-3xl mb-6">Settings</h2>
                    
                    <div className="p-6 rounded-xl border border-border bg-card">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <UserRound className="size-5 text-primary" />
                        Profile Information
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Name</span>
                          <span className="text-sm font-medium">{user?.name}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Email</span>
                          <span className="text-sm font-medium">{user?.email}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl border border-border bg-card">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <LockKeyhole className="size-5 text-primary" />
                        Security
                      </h3>
                      <Button variant="outline" size="sm" className="gap-2">
                        Change Password
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowLogoutConfirm(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm rounded-xl border border-border bg-background p-6 shadow-2xl"
            >
              <div className="text-center">
                <div className="size-16 mx-auto rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <LogOut className="size-8 text-destructive" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Sign out?</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Are you sure you want to sign out of your account?
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowLogoutConfirm(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex-1 gap-2"
                    onClick={logout}
                  >
                    <LogOut className="size-4" />
                    Sign out
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </StoreLayout>
  );
}