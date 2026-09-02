import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Check, Package } from "lucide-react";
import { StoreLayout } from "@/components/store/StoreLayout";
import { Button } from "@/components/ui/button";
import { orderService } from "@/services/orderService";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/order/$id")({ component: OrderPage });
function OrderPage() { const { id } = Route.useParams(); const query = useQuery({ queryKey: ["order", id], queryFn: () => orderService.byId(id) }); const order = query.data; return <StoreLayout><div className="container-page max-w-3xl py-16 text-center"><div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent"><Check /></div><p className="eyebrow mt-6">Order confirmed</p><h1 className="mt-3 font-display text-4xl">Thank you for choosing Selah.</h1>{order && <><p className="mt-3 text-sm text-muted-foreground">{order.reference} · {formatPrice(order.total)} · arriving {new Date(order.estimatedDelivery).toLocaleDateString("en-NG", { day: "numeric", month: "long" })}</p><div className="mt-10 divide-y divide-border border-y border-border text-left">{order.items.map((item) => <div key={item.slug} className="flex items-center gap-4 py-4"><img src={item.image} alt={item.name} className="size-16 object-cover" /><div className="flex-1"><p className="text-sm font-medium">{item.name}</p><p className="text-xs text-muted-foreground">{item.color} · {item.size} · Qty {item.quantity}</p></div><span className="text-sm">{formatPrice(item.price * item.quantity)}</span></div>)}</div></>}<div className="mt-8 flex justify-center gap-3"><Button asChild><Link to="/shop">Keep shopping</Link></Button><Button asChild variant="outline"><Link to="/account">View account</Link></Button></div></div></StoreLayout>; }
