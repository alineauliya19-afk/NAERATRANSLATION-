-- NAERA TRANSLATION: jalankan di Supabase > SQL Editor > New query.
-- Buat tabel pesan kontak.
create table if not exists public.contact_messages (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 2 and 100),
  email text not null check (char_length(email) between 3 and 254),
  direction text not null check (direction in ('Inggris ke Indonesia','Indonesia ke Inggris','Belum yakin / konsultasi')),
  message text not null check (char_length(message) between 10 and 3000),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Bersihkan policy dengan nama sama jika SQL dijalankan ulang.
drop policy if exists "Public can submit contact messages" on public.contact_messages;
create policy "Public can submit contact messages"
on public.contact_messages for insert to anon
with check (
  char_length(name) between 2 and 100
  and char_length(email) between 3 and 254
  and direction in ('Inggris ke Indonesia','Indonesia ke Inggris','Belum yakin / konsultasi')
  and char_length(message) between 10 and 3000
);

drop policy if exists "NAERA admin can read messages" on public.contact_messages;
create policy "NAERA admin can read messages"
on public.contact_messages for select to authenticated
using ((auth.jwt() ->> 'email') = 'alineauliya19@gmail.com');

drop policy if exists "NAERA admin can delete messages" on public.contact_messages;
create policy "NAERA admin can delete messages"
on public.contact_messages for delete to authenticated
using ((auth.jwt() ->> 'email') = 'alineauliya19@gmail.com');

-- Tidak ada policy UPDATE. Pengunjung publik tidak dapat membaca pesan.
-- Kebijakan akses dibatasi ke akun terautentikasi dengan email admin di atas.
