import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { orderService } from "@/services/orderService";
import type { OrderStatus } from "@/types";
import { formatPrice } from "@/lib/format";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { 
  Search,
  Filter,
  Download,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Eye,
  Package,
  Truck,
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
  DollarSign,
  Users,
  TrendingUp,
  ShoppingBag,
  MapPin,
  Phone,
  Mail,
  MoreHorizontal,
  ArrowUpDown,
  Calendar,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/orders")({ component: OrdersAdmin });

function OrdersAdmin() { 
  const client = useQueryClient(); 
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<'all' | OrderStatus>('all');
  const [paymentFilter, setPaymentFilter] = useState<'all' | 'paid' | 'unpaid' | 'failed'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'total-asc' | 'total-desc'>('newest');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isUpdating, setIsUpdating] = useState(false);
  const itemsPerPage = 10;

  const query = useQuery({ 
    queryKey: ["admin-orders"], 
    queryFn: () => orderService.list() 
  });

  // Filter and search orders
  const filteredOrders = useMemo(() => {
    let orders = query.data ?? [];
    
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      orders = orders.filter(order => 
        order.reference.toLowerCase().includes(search) ||
        order.customerName.toLowerCase().includes(search)
      );
    }
    
    if (statusFilter !== 'all') {
      orders = orders.filter(order => order.status === statusFilter);
    }
    
    if (paymentFilter !== 'all') {
      orders = orders.filter(order => order.paymentStatus === paymentFilter);
    }
    
    // Sort orders
    switch (sortBy) {
      case 'oldest':
        orders = [...orders].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case 'total-asc':
        orders = [...orders].sort((a, b) => a.total - b.total);
        break;
      case 'total-desc':
        orders = [...orders].sort((a, b) => b.total - a.total);
        break;
      default: // newest
        orders = [...orders].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }
    
    return orders;
  }, [query.data, searchTerm, statusFilter, paymentFilter, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Stats
  const stats = useMemo(() => {
    const orders = query.data ?? [];
    return {
      total: orders.length,
      pending: orders.filter(o => ['pending', 'confirmed', 'processing'].includes(o.status)).length,
      shipped: orders.filter(o => ['shipped', 'out-for-delivery'].includes(o.status)).length,
      delivered: orders.filter(o => o.status === 'delivered').length,
      totalRevenue: orders.reduce((sum, o) => sum + o.total, 0),
    };
  }, [query.data]);

  const handleStatusUpdate = async (orderId: string, status: OrderStatus) => {
    setIsUpdating(true);
    try {
      await orderService.updateStatus(orderId, status);
      await client.invalidateQueries({ queryKey: ["admin-orders"] });
    } catch (error) {
      console.error('Failed to update order status:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-50 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-400';
      case 'confirmed':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400';
      case 'processing':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400';
      case 'shipped':
        return 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400';
      case 'out-for-delivery':
        return 'bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400';
      case 'delivered':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400';
      case 'cancelled':
        return 'bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return Clock;
      case 'confirmed':
        return CheckCircle2;
      case 'processing':
        return Package;
      case 'shipped':
        return Truck;
      case 'out-for-delivery':
        return Truck;
      case 'delivered':
        return CheckCircle2;
      case 'cancelled':
        return XCircle;
      default:
        return AlertCircle;
    }
  };

  const getPaymentColor = (paymentStatus: string) => {
    switch (paymentStatus) {
      case 'paid':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400';
      case 'pending':
        return 'bg-yellow-50 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-400';
      case 'failed':
        return 'bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="eyebrow text-primary flex items-center gap-2">
              <ShoppingBag className="size-4" />
              Fulfilment
            </p>
            <h1 className="mt-2 font-display text-4xl">Orders</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Track and manage customer orders
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="size-4" />
              Export
            </Button>
            <Button variant="outline" className="gap-2">
              <RefreshCw className="size-4" />
              Refresh
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: 'Total Orders', value: stats.total, icon: ShoppingBag, color: 'from-blue-500 to-cyan-500' },
            { label: 'Pending', value: stats.pending, icon: Clock, color: 'from-yellow-500 to-amber-500' },
            { label: 'Shipped', value: stats.shipped, icon: Truck, color: 'from-indigo-500 to-purple-500' },
            { label: 'Revenue', value: formatPrice(stats.totalRevenue), icon: DollarSign, color: 'from-emerald-500 to-green-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + index * 0.05 }}
              className="p-5 rounded-xl border border-border bg-background"
            >
              <div className="flex items-center justify-between">
                <div className={cn(
                  "size-10 rounded-lg bg-gradient-to-br flex items-center justify-center",
                  stat.color
                )}>
                  <stat.icon className="size-5 text-white" />
                </div>
                <TrendingUp className="size-4 text-emerald-500" />
              </div>
              <p className="mt-3 text-2xl font-semibold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search orders by reference or customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-lg border border-input bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="size-4" />
              Filters
            </Button>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="h-10 px-3 rounded-lg border border-input bg-background text-sm focus:border-primary focus:outline-none"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="total-asc">Total: Low to High</option>
              <option value="total-desc">Total: High to Low</option>
            </select>
          </div>
        </motion.div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="p-4 rounded-lg border border-border bg-muted/30">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Order Status</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {(['all', 'pending', 'confirmed', 'processing', 'shipped', 'out-for-delivery', 'delivered', 'cancelled'] as const).map(status => (
                        <button
                          key={status}
                          onClick={() => setStatusFilter(status)}
                          className={cn(
                            "px-3 py-1.5 text-xs font-medium rounded-full capitalize transition-all",
                            statusFilter === status
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-background border border-border hover:bg-muted'
                          )}
                        >
                          {status.replaceAll('-', ' ')}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Payment Status</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {(['all', 'paid', 'unpaid', 'failed'] as const).map(status => (
                        <button
                          key={status}
                          onClick={() => setPaymentFilter(status)}
                          className={cn(
                            "px-3 py-1.5 text-xs font-medium rounded-full capitalize transition-all",
                            paymentFilter === status
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-background border border-border hover:bg-muted'
                          )}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Orders Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="overflow-x-auto rounded-xl border border-border bg-background shadow-sm"
        >
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="border-b border-border bg-muted/30">
              <tr className="text-xs uppercase tracking-wider text-muted-foreground">
                <th className="p-4">Order</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Total</th>
                <th className="p-4">Status</th>
                <th className="p-4">Payment</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {paginatedOrders.map((order, index) => {
                const StatusIcon = getStatusIcon(order.status);
                return (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <td className="p-4">
                      <button
                        onClick={() => setSelectedOrder(order.id)}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {order.reference}
                      </button>
                      <span className="block text-xs font-normal text-muted-foreground">
                        {new Date(order.createdAt).toLocaleDateString("en-NG", {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <Users className="size-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{order.customerName}</p>
                          <p className="text-xs text-muted-foreground">{order.customerEmail}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-medium">
                      {formatPrice(order.total)}
                    </td>
                    <td className="p-4">
                      <div className="relative">
                        <select
                          value={order.status}
                          onChange={async (event) => {
                            await handleStatusUpdate(order.id, event.target.value as OrderStatus);
                          }}
                          disabled={isUpdating}
                          className={cn(
                            "appearance-none pl-8 pr-8 py-1.5 text-xs font-medium rounded-lg border cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                            getStatusColor(order.status),
                            isUpdating && "opacity-50 cursor-not-allowed"
                          )}
                        >
                          {["pending", "confirmed", "processing", "shipped", "out-for-delivery", "delivered", "cancelled"].map((status) => (
                            <option key={status} value={status}>
                              {status.replaceAll("-", " ")}
                            </option>
                          ))}
                        </select>
                        <StatusIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 pointer-events-none" />
                        <ChevronRight className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 pointer-events-none opacity-50" />
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={cn(
                        "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium capitalize",
                        getPaymentColor(order.paymentStatus)
                      )}>
                        {order.paymentStatus === 'paid' && <CheckCircle2 className="size-3" />}
                        {order.paymentStatus === 'unpaid' && <Clock className="size-3" />}
                        {order.paymentStatus === 'failed' && <XCircle className="size-3" />}
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-end gap-1">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="hover:bg-muted"
                          onClick={() => setSelectedOrder(order.id)}
                        >
                          <Eye className="size-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="hover:bg-muted"
                        >
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>

          {paginatedOrders.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              No orders found
            </div>
          )}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredOrders.length)} of {filteredOrders.length} orders
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="size-4" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <Button
                  key={page}
                  variant={currentPage === page ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        )}
      {/* Order Detail Modal */}
      <AnimatePresence>
        {selectedOrder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50"
              onClick={() => setSelectedOrder(null)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl rounded-xl border border-border bg-background p-6 shadow-2xl"
            >
              {/* Modal content would go here */}
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl">Order Details</h2>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <XCircle className="size-5" />
                </button>
              </div>
              {/* Add detailed order information here */}
              {(() => { const order = query.data?.find((item) => item.id === selectedOrder); return order ? <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2"><div><p className="text-muted-foreground">Customer</p><p className="mt-1 font-medium">{order.customerName}</p><p className="text-xs text-muted-foreground">{order.customerEmail}</p></div><div><p className="text-muted-foreground">Total</p><p className="mt-1 font-medium">{formatPrice(order.total)}</p><p className="text-xs capitalize text-muted-foreground">{order.paymentStatus}</p></div><div className="sm:col-span-2"><p className="text-muted-foreground">Delivery address</p><p className="mt-1">{order.address.street}, {order.address.city}, {order.address.state}</p></div><div className="sm:col-span-2"><p className="text-muted-foreground">Items</p><div className="mt-2 space-y-2">{order.items.map((item) => <div key={`${item.slug}-${item.size}`} className="flex justify-between border-b border-border pb-2"><span>{item.name} × {item.quantity}</span><span>{formatPrice(item.price * item.quantity)}</span></div>)}</div></div></div> : null; })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  ); 
}