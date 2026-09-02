import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Truck, ShieldCheck, RefreshCw, Sparkles } from "lucide-react";
import { StoreLayout } from "@/components/store/StoreLayout";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeading } from "@/components/shared/states";
import { productService } from "@/services/productService";
import { categoryService } from "@/services/categoryService";
import { Rating } from "@/components/product/Rating";
import hero from "@/assets/hero.jpg";
import editorial from "@/assets/editorial.jpg";
import promo from "@/assets/promo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Selah — Modest Luxury Fashion for Women" },
      {
        name: "description",
        content:
          "Selah crafts modest, elegant everyday pieces — flowing dresses, tailored sets and refined accessories, delivered across Nigeria.",
      },
      { property: "og:title", content: "Selah — Modest Luxury Fashion for Women" },
      {
        property: "og:description",
        content: "Faith-led fashion for women choosing to live intentionally. New arrivals, curated sets and free delivery over £50.",
      },
    ],
  }),
  component: Home,
});

const promises = [
  { icon: Truck, title: "Thoughtful delivery", body: "Reliable delivery, free on orders over £50." },
  { icon: RefreshCw, title: "Easy 7-day returns", body: "Changed your mind? Send it back, simply." },
  { icon: ShieldCheck, title: "Secure payments", body: "Card, transfer and pay-on-delivery." },
  { icon: Sparkles, title: "Made in small runs", body: "Considered fabrics, never mass produced." },
];

function Home() {
  const newArrivals = useQuery({
    queryKey: ["products", "new"],
    queryFn: () => productService.newArrivals(),
  });
  const bestSellers = useQuery({
    queryKey: ["products", "best"],
    queryFn: () => productService.bestSellers(),
  });
  const cats = useQuery({ queryKey: ["categories", "counts"], queryFn: () => categoryService.withCounts() });
  const testimonials = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => productService.testimonials(),
  });

  return (
    <StoreLayout>
      {/* Hero */}
      <section className="relative">
        <div className="container-page pt-6 md:pt-10">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={hero}
              alt="Model wearing a flowing olive modest maxi dress in soft daylight"
              width={1600}
              height={1100}
              className="h-[68vh] min-h-[440px] w-full object-cover md:h-[78vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-14">
              <div className="max-w-xl animate-rise">
                <p className="eyebrow text-background/80">New season · 2026</p>
                <h1 className="mt-4 font-display text-4xl leading-[1.05] text-background md:text-6xl">
                  Dressing with quiet intention
                </h1>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-background/85 md:text-base">
                  Modest silhouettes in breathable linen, crepe and silk — made for real days,
                  finished like heirlooms.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/shop"
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-background px-7 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Shop the collection
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    to="/new-arrivals"
                    className="inline-flex h-12 items-center rounded-full border border-background/40 px-7 text-sm font-medium text-background transition-colors hover:bg-background/10"
                  >
                    New arrivals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="container-page py-12 md:py-16">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {promises.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <Icon className="size-5 text-accent" strokeWidth={1.75} />
              <h3 className="mt-3 text-sm font-semibold">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Categories */}
      <section className="container-page pb-4 md:pb-8">
        <SectionHeading
          eyebrow="Browse"
          title="Shop by category"
          action={
            <Link to="/shop" className="text-sm font-medium underline underline-offset-4">
              View everything
            </Link>
          }
        />
        <div className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {(cats.data ?? []).map((category) => (
            <Link
              key={category.id}
              to="/category/$slug"
              params={{ slug: category.slug }}
              className="group relative w-[68%] shrink-0 snap-start overflow-hidden rounded-2xl md:w-auto"
            >
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                width={800}
                height={1000}
                className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <h3 className="font-display text-xl text-background">{category.name}</h3>
                  <p className="text-xs text-background/75">{category.count} pieces</p>
                </div>
                <ArrowRight className="size-4 text-background transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New arrivals */}
      <section className="container-page py-14 md:py-20">
        <SectionHeading
          eyebrow="Just landed"
          title="New arrivals"
          action={
            <Link to="/new-arrivals" className="text-sm font-medium underline underline-offset-4">
              See all
            </Link>
          }
        />
        <ProductGrid
          products={(newArrivals.data ?? []).slice(0, 8)}
          loading={newArrivals.isLoading}
        />
      </section>

      {/* Editorial */}
      <section className="bg-sand">
        <div className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={editorial}
              alt="Two women in coordinating neutral modest sets on a sunlit terrace"
              loading="lazy"
              width={1200}
              height={1400}
              className="aspect-4/5 w-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <p className="eyebrow">The Selah way</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl">
              Coverage that never costs you elegance
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Every piece begins with movement — how a hem falls when you walk, how a sleeve sits
              when you reach. We cut generously, line thoughtfully, and finish by hand so modest
              dressing feels like a pleasure rather than a compromise.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-6">
              {[
                { label: "Pieces designed", value: "180+" },
                { label: "Women dressed", value: "12k" },
                { label: "Avg. rating", value: "4.8" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/about"
              className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Our story
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="container-page py-14 md:py-20">
        <SectionHeading eyebrow="Loved most" title="Best sellers" />
        <ProductGrid
          products={(bestSellers.data ?? []).slice(0, 4)}
          loading={bestSellers.isLoading}
          skeletonCount={4}
          showRating
        />
      </section>

      {/* Promo */}
      <section className="container-page pb-14 md:pb-20">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={promo}
            alt="Folded neutral garments beside dried florals"
            loading="lazy"
            width={1600}
            height={800}
            className="h-[380px] w-full object-cover md:h-[420px]"
          />
          <div className="absolute inset-0 bg-foreground/45" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="eyebrow text-background/80">Limited</p>
            <h2 className="mt-3 max-w-lg font-display text-3xl text-background md:text-4xl">
              Take 15% off the Ramadan capsule
            </h2>
            <p className="mt-3 text-sm text-background/80">
              Use code <span className="font-semibold">SELAH15</span> at checkout.
            </p>
            <Link
              to="/collections"
              className="mt-7 inline-flex h-12 items-center rounded-full bg-background px-7 text-sm font-medium text-foreground"
            >
              Shop the capsule
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page pb-20">
        <SectionHeading eyebrow="Kind words" title="From our community" />
        <div className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:px-0">
          {(testimonials.data ?? []).map((item) => (
            <figure
              key={item.id}
              className="w-[82%] shrink-0 snap-start rounded-2xl border border-border bg-surface p-6 md:w-auto"
            >
              <Rating value={item.rating} />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{item.name}</span> · {item.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </StoreLayout>
  );
}
