import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { customerService } from "@/services/customerService";
import { formatPrice } from "@/lib/format";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { 
  Search,
  Filter,
  Download,
  Users,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  Star,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  Award,
  Crown,
  Sparkles,
  Calendar,
  User,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Customer } from "@/types";

export const Route = createFileRoute("/admin/customers")({ component: CustomersAdmin });

function CustomersAdmin() { 
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'blocked'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'orders' | 'spent'>('orders');
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const query = useQuery({ 
    queryKey: ["admin-customers"], 
    queryFn: () => customerService.list() 
  });

  // Filter and search customers
  const filteredCustomers = useMemo(() => {
    let customers = query.data ?? [];
    
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      customers = customers.filter(customer => 
        customer.name.toLowerCase().includes(search) ||
        customer.email.toLowerCase().includes(search) ||
        (customer.phone && customer.phone.toLowerCase().includes(search))
      );
    }
    
    if (statusFilter !== 'all') {
      customers = customers.filter(customer => customer.status === statusFilter);
    }
    
    // Sort customers
    switch (sortBy) {
      case 'name':
        customers = [...customers].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'orders':
        customers = [...customers].sort((a, b) => b.orders - a.orders);
        break;
      case 'spent':
        customers = [...customers].sort((a, b) => b.totalSpent - a.totalSpent);
        break;
      default:
        break;
    }
    
    return customers;
  }, [query.data, searchTerm, statusFilter, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Stats
  const stats = useMemo(() => {
    const customers = query.data ?? [];
    return {
      total: customers.length,
      active: customers.filter(c => c.status === 'active').length,
      blocked: customers.filter(c => c.status === 'blocked').length,
      totalRevenue: customers.reduce((sum, c) => sum + c.totalSpent, 0),
      avgCustomerValue: customers.length > 0 
        ? customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.length 
        : 0,
    };
  }, [query.data]);

  const getStatusColor = (status: Customer['status']) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400';
      case 'blocked':
        return 'bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: Customer['status']) => {
    switch (status) {
      case 'active':
        return CheckCircle2;
      case 'blocked':
        return XCircle;
      default:
        return AlertCircle;
    }
  };

  const getCustomerInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
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
              <Users className="size-4" />
              Community
            </p>
            <h1 className="mt-2 font-display text-4xl">Customers</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Manage and understand your customer base
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="size-4" />
              Export
            </Button>
            <Button className="gap-2">
              <UserPlus className="size-4" />
              Add customer
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
            { label: 'Total Customers', value: stats.total, icon: Users, color: 'from-blue-500 to-cyan-500' },
            { label: 'Active', value: stats.active, icon: CheckCircle2, color: 'from-emerald-500 to-green-500' },
            { label: 'Blocked', value: stats.blocked, icon: XCircle, color: 'from-red-500 to-pink-500' },
            { label: 'Avg. Customer Value', value: formatPrice(stats.avgCustomerValue), icon: DollarSign, color: 'from-orange-500 to-amber-500' },
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
                {index === 0 && <TrendingUp className="size-4 text-emerald-500" />}
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
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-lg border border-input bg-background text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>

          {/* Filters & View Mode */}
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
              <option value="orders">Most Orders</option>
              <option value="name">Name</option>
              <option value="spent">Highest Spent</option>
            </select>

            {/* View Mode Toggle */}
            <div className="hidden md:flex items-center gap-1 rounded-lg border border-border p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  "p-2 rounded-md transition-all",
                  viewMode === 'grid' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'hover:bg-muted'
                )}
              >
                <BarChart3 className="size-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  "p-2 rounded-md transition-all",
                  viewMode === 'list' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'hover:bg-muted'
                )}
              >
                <Users className="size-4" />
              </button>
            </div>
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
                <div>
                  <label className="text-sm font-medium">Customer Status</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {(['all', 'active', 'blocked'] as const).map(status => (
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
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Customers Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={cn(
            viewMode === 'grid' 
              ? 'grid gap-4 md:grid-cols-2 xl:grid-cols-3' 
              : 'space-y-4'
          )}
        >
          {paginatedCustomers.map((customer, index) => {
            const StatusIcon = getStatusIcon(customer.status);
            
            if (viewMode === 'grid') {
              return (
                <motion.article
                  key={customer.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="relative overflow-hidden rounded-xl border border-border bg-background p-5 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="size-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-lg font-semibold text-primary">
                        {getCustomerInitials(customer.name)}
                      </div>
                      <span className={cn(
                        "absolute -bottom-1 -right-1 size-4 rounded-full border-2 border-background",
                        customer.status === 'active' ? 'bg-emerald-500' : 'bg-red-500'
                      )} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h2 className="font-medium truncate">{customer.name}</h2>
                      <p className="mt-0.5 text-sm text-muted-foreground truncate">{customer.email}</p>
                      {customer.phone && (
                        <p className="mt-0.5 text-xs text-muted-foreground flex items-center gap-1">
                          <Phone className="size-3" />
                          {customer.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <ShoppingBag className="size-3.5 text-muted-foreground" />
                        {customer.orders} orders
                      </span>
                    </div>
                    <strong className="text-sm">{formatPrice(customer.totalSpent)}</strong>
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 gap-1"
                      onClick={() => setSelectedCustomer(customer.id)}
                    >
                      <Eye className="size-3.5" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-1">
                      <Mail className="size-3.5" />
                      Email
                    </Button>
                  </div>
                </motion.article>
              );
            }
            
            // List view
            return (
              <motion.article
                key={customer.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-background hover:bg-muted/30 transition-colors"
              >
                <div className="relative">
                  <div className="size-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-semibold text-primary">
                    {getCustomerInitials(customer.name)}
                  </div>
                  <span className={cn(
                    "absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-background",
                    customer.status === 'active' ? 'bg-emerald-500' : 'bg-red-500'
                  )} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="font-medium truncate">{customer.name}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{customer.email}</p>
                </div>
                
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">{customer.orders} orders</p>
                  <p className="text-xs text-muted-foreground">Total orders</p>
                </div>
                
                <div className="hidden md:block">
                  <p className="text-sm font-medium">{formatPrice(customer.totalSpent)}</p>
                  <p className="text-xs text-muted-foreground">Total spent</p>
                </div>
                
                <span className={cn(
                  "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium capitalize",
                  getStatusColor(customer.status)
                )}>
                  <StatusIcon className="size-3" />
                  {customer.status}
                </span>
                
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-muted"
                  onClick={() => setSelectedCustomer(customer.id)}
                >
                  <MoreHorizontal className="size-4" />
                </Button>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Empty State */}
        {paginatedCustomers.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">
            No customers found
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredCustomers.length)} of {filteredCustomers.length} customers
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
      {/* Customer Detail Modal */}
      <AnimatePresence>
        {selectedCustomer && (
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
              onClick={() => setSelectedCustomer(null)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl rounded-xl border border-border bg-background p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl">Customer Details</h2>
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <XCircle className="size-5" />
                </button>
              </div>
              {/* Add detailed customer information here */}
              {(() => { const customer = query.data?.find((item) => item.id === selectedCustomer); return customer ? <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2"><div><p className="text-muted-foreground">Name</p><p className="mt-1 font-medium">{customer.name}</p></div><div><p className="text-muted-foreground">Status</p><p className="mt-1 capitalize font-medium">{customer.status}</p></div><div><p className="text-muted-foreground">Email</p><p className="mt-1 break-all">{customer.email}</p></div><div><p className="text-muted-foreground">Phone</p><p className="mt-1">{customer.phone}</p></div><div><p className="text-muted-foreground">Orders</p><p className="mt-1 font-medium">{customer.orders}</p></div><div><p className="text-muted-foreground">Total spent</p><p className="mt-1 font-medium">{formatPrice(customer.totalSpent)}</p></div></div> : null; })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  ); 
}