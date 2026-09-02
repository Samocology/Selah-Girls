import { supabase } from "../lib/supabase";
import { categories } from "../data/catalog";
import { products, reviews, testimonials } from "../data/catalog";
import { orders as seedOrders, customers as seedCustomers } from "../data/store";

async function seed() {
  const client = supabase;
  if (!client) {
    console.error("Supabase is not configured");
    process.exit(1);
  }

  console.log("Seeding categories...");
  const { error: catError } = await client.from("categories").upsert(
    categories.map((c) => ({
      id: c.id,
      slug: c.slug,
      name: c.name,
      description: c.description,
      image: c.image,
      active: c.active,
    })),
    { onConflict: "id" }
  );
  if (catError) console.error("Categories error:", catError);

  console.log("Seeding products...");
  const { error: prodError } = await client.from("products").upsert(
    products.map((p) => ({
      id: p.id,
      slug: p.slug,
      name: p.name,
      description: p.description,
      details: p.details,
      category: p.category,
      subcategory: p.subcategory,
      price: p.price,
      old_price: p.oldPrice ?? null,
      sku: p.sku,
      stock: p.stock,
      sizes: p.sizes,
      colors: p.colors,
      images: p.images,
      tags: p.tags,
      rating: p.rating,
      reviews_count: p.reviewsCount,
      featured: p.featured,
      best_seller: p.bestSeller,
      new_arrival: p.newArrival,
      status: p.status,
    })),
    { onConflict: "id" }
  );
  if (prodError) console.error("Products error:", prodError);

  console.log("Seeding reviews...");
  const { error: reviewError } = await client.from("reviews").upsert(
    reviews.map((r) => ({
      id: r.id,
      product_id: r.productId,
      author: r.author,
      rating: r.rating,
      title: r.title,
      body: r.body,
      date: r.date,
    })),
    { onConflict: "id" }
  );
  if (reviewError) console.error("Reviews error:", reviewError);

  console.log("Seeding testimonials...");
  const { error: testError } = await client.from("testimonials").upsert(
    testimonials.map((t) => ({
      id: t.id,
      name: t.name,
      location: t.location,
      rating: t.rating,
      quote: t.quote,
    })),
    { onConflict: "id" }
  );
  if (testError) console.error("Testimonials error:", testError);

  console.log("Seeding customers...");
  const { error: custError } = await client.from("customers").upsert(
    seedCustomers.map((c) => ({
      id: c.id,
      name: c.name,
      email: c.email,
      phone: c.phone,
      joined_at: c.joinedAt,
      orders: c.orders,
      total_spent: c.totalSpent,
      status: c.status,
      addresses: c.addresses,
    })),
    { onConflict: "id" }
  );
  if (custError) console.error("Customers error:", custError);

  console.log("Seeding orders...");
  const { error: orderError } = await client.from("orders").upsert(
    seedOrders.map((o) => ({
      id: o.id,
      reference: o.reference,
      customer_id: o.customerId,
      customer_name: o.customerName,
      customer_email: o.customerEmail,
      created_at: o.createdAt,
      items: o.items,
      subtotal: o.subtotal,
      discount: o.discount ?? 0,
      shipping: o.shipping,
      total: o.total,
      status: o.status,
      payment_status: o.paymentStatus,
      payment_method: o.paymentMethod,
      delivery_method: o.deliveryMethod,
      address: o.address,
      estimated_delivery: o.estimatedDelivery,
    })),
    { onConflict: "id" }
  );
  if (orderError) console.error("Orders error:", orderError);

  console.log("Seed complete");
  process.exit(0);
}

seed();
