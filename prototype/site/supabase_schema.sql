-- AgriConnect — Supabase schema
-- Run this once in Supabase Dashboard → SQL Editor → New query → Run

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  role text not null check (role in ('Farmer', 'Buyer', 'Admin')),
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "profiles_select_own" on public.profiles for select using (auth.uid() = id);
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);

create table public.lots (
  id uuid primary key default gen_random_uuid(),
  farmer_id uuid not null references public.profiles(id) on delete cascade,
  crop text not null,
  qty numeric not null,
  grade text not null,
  location text not null,
  status text not null default 'matching',
  created_at timestamptz not null default now()
);
alter table public.lots enable row level security;
create policy "lots_select_authenticated" on public.lots for select using (auth.role() = 'authenticated');
create policy "lots_insert_own" on public.lots for insert with check (auth.uid() = farmer_id);
create policy "lots_update_own" on public.lots for update using (auth.uid() = farmer_id);
create policy "lots_delete_own" on public.lots for delete using (auth.uid() = farmer_id);

create table public.offers (
  id uuid primary key default gen_random_uuid(),
  lot_id uuid not null references public.lots(id) on delete cascade,
  buyer_name text not null,
  price numeric not null,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);
alter table public.offers enable row level security;
create policy "offers_select_authenticated" on public.offers for select using (auth.role() = 'authenticated');
create policy "offers_insert_authenticated" on public.offers for insert with check (auth.role() = 'authenticated');
create policy "offers_update_lot_owner" on public.offers for update using (
  exists (select 1 from public.lots l where l.id = offers.lot_id and l.farmer_id = auth.uid())
);
