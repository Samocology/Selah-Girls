import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";

export function OrderSummary({
  subtotal,
  discount = 0,
  shipping,
  total,
  actionLabel,
  actionTo,
  onAction,
}: {
  subtotal: number;
  discount?: number;
  shipping: number;
  total: number;
  actionLabel?: string;
  actionTo?: string;
  onAction?: () => void;
}) {
  return (
    <aside className="border border-border bg-card p-6">
      <h2 className="font-display text-2xl">Your summary</h2>
      <dl className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
        {discount > 0 && <div className="flex justify-between text-accent"><dt>Discount</dt><dd>-{formatPrice(discount)}</dd></div>}
        <div className="flex justify-between"><dt className="text-muted-foreground">Delivery</dt><dd>{shipping ? formatPrice(shipping) : "Free"}</dd></div>
        <div className="flex justify-between border-t border-border pt-4 text-base font-semibold"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
      </dl>
      {actionLabel && (actionTo ? <Button asChild className="mt-6 w-full"><Link to={actionTo}>{actionLabel}</Link></Button> : <Button onClick={onAction} className="mt-6 w-full">{actionLabel}</Button>)}
    </aside>
  );
}
