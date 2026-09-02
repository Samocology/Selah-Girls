-- Supabase schema for Selah e-commerce app
-- Run this in Supabase SQL Editor or via migration

-- Profiles extends auth.users with app-specific fields
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text,
  phone text,
  role text not null default 'customer',
  avatar text,
  created_at timestamptz default now() not null
);

alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone"
  on public.profiles for select
  using ( true );

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile"
  on public.profiles for update
  using ( auth.uid() = id );

-- Categories
create table public.categories (
  id text primary key,
  slug text unique not null,
  name text not null,
  description text,
  image text not null,
  active boolean default true not null,
  created_at timestamptz default now() not null
);

alter table public.categories enable row level security;

create policy "Categories are viewable by everyone"
  on public.categories for select
  using ( true );

create policy "Only admins can insert categories"
  on public.categories for insert
  with check ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Only admins can update categories"
  on public.categories for update
  using ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Only admins can delete categories"
  on public.categories for delete
  using ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

-- Products
create table public.products (
  id text primary key,
  slug text unique not null,
  name text not null,
  description text not null,
  details text[] not null default '{}',
  category text not null references public.categories(slug) on delete restrict,
  subcategory text not null default '',
  price numeric not null,
  old_price numeric,
  sku text unique not null,
  stock integer not null default 0,
  sizes text[] not null default '{}',
  colors jsonb not null default '[]',
  images text[] not null default '{}',
  tags text[] not null default '{}',
  rating numeric not null default 0,
  reviews_count integer not null default 0,
  featured boolean not null default false,
  best_seller boolean not null default false,
  new_arrival boolean not null default false,
  status text not null default 'active',
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

alter table public.products enable row level security;

create policy "Products are viewable by everyone"
  on public.products for select
  using ( true );

create policy "Only admins can insert products"
  on public.products for insert
  with check ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Only admins can update products"
  on public.products for update
  using ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Only admins can delete products"
  on public.products for delete
  using ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

-- Customers (CRM)
create table public.customers (
  id text primary key,
  name text not null,
  email text unique not null,
  phone text,
  joined_at timestamptz default now() not null,
  orders integer not null default 0,
  total_spent numeric not null default 0,
  status text not null default 'active',
  addresses jsonb not null default '[]'
);

alter table public.customers enable row level security;

create policy "Admins can view customers"
  on public.customers for select
  using ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Admins can insert customers"
  on public.customers for insert
  with check ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Admins can update customers"
  on public.customers for update
  using ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Admins can delete customers"
  on public.customers for delete
  using ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

-- Orders
create table public.orders (
  id text primary key,
  reference text unique not null,
  customer_id text not null,
  customer_name text not null,
  customer_email text not null,
  created_at timestamptz default now() not null,
  items jsonb not null default '[]',
  subtotal numeric not null,
  discount numeric not null default 0,
  shipping numeric not null,
  total numeric not null,
  status text not null default 'pending',
  payment_status text not null default 'unpaid',
  payment_method text not null,
  delivery_method text not null,
  address jsonb not null,
  estimated_delivery timestamptz
);

alter table public.orders enable row level security;

create policy "Users can view own orders"
  on public.orders for select
  using ( auth.uid() in ( select id from public.profiles where email = orders.customer_email ) or exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Authenticated users can insert orders"
  on public.orders for insert
  with check ( auth.uid() in ( select id from public.profiles where email = orders.customer_email ) or exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Only admins can update orders"
  on public.orders for update
  using ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

-- Reviews
create table public.reviews (
  id text primary key,
  product_id text not null references public.products(id) on delete cascade,
  author text not null,
  rating integer not null,
  title text not null,
  body text not null,
  date text not null
);

alter table public.reviews enable row level security;

create policy "Reviews are viewable by everyone"
  on public.reviews for select
  using ( true );

create policy "Only admins can insert reviews"
  on public.reviews for insert
  with check ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Only admins can update reviews"
  on public.reviews for update
  using ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Only admins can delete reviews"
  on public.reviews for delete
  using ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

-- Testimonials
create table public.testimonials (
  id text primary key,
  name text not null,
  location text not null,
  rating integer not null,
  quote text not null
);

alter table public.testimonials enable row level security;

create policy "Testimonials are viewable by everyone"
  on public.testimonials for select
  using ( true );

create policy "Only admins can insert testimonials"
  on public.testimonials for insert
  with check ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Only admins can update testimonials"
  on public.testimonials for update
  using ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Only admins can delete testimonials"
  on public.testimonials for delete
  using ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

-- Realtime publication (optional, Supabase usually auto-publishes)
alter publication supabase_realtime add table public.products;
alter publication supabase_realtime add table public.orders;
alter publication supabase_realtime add table public.customers;

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, phone, role)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', new.email), null, 'customer')
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
