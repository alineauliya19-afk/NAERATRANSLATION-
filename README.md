# NAERA TRANSLATION — Company Profile

Starter website company profile responsif untuk NAERA TRANSLATION (Bangkalan, Jawa Timur), tema hitam dan emas.

## Isi paket

- `index.html` — website publik
- `style.css` — desain responsif
- `script.js` — menu, tombol kontak, dan penyimpanan formulir ke Supabase
- `dashboard.html` — halaman admin privat (akses lewat login)
- `admin.css` — gaya dashboard
- `admin.js` — login, daftar pesan, balas lewat email, hapus pesan
- `supabase.sql` — tabel database + Row Level Security
- `README.md` — panduan ini

## 1. Upload dari HP Android ke GitHub

1. Download dan ekstrak ZIP.
2. Buka https://github.com dan login.
3. Tekan `+` > **New repository**. Nama misalnya `naera-translation`; pilih **Public**.
4. Buka repository > **Add file** > **Upload files**.
5. Unggah semua file di folder hasil ekstrak, bukan folder ZIP-nya.
6. Tekan **Commit changes**.
7. Buka **Settings > Pages**.
8. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu **Save**.
9. Setelah deployment berhasil, URL biasanya `https://USERNAME.github.io/naera-translation/`. Ganti USERNAME dengan username GitHub Anda. Tunggu beberapa menit dan cek tab Actions bila belum tersedia.

Jika sulit menggunakan antarmuka HP, buka menu Chrome (⋮) lalu aktifkan **Situs desktop**.

## 2. Buat database Supabase

1. Buka https://supabase.com, daftar/login, lalu buat project baru.
2. Buka **SQL Editor** > **New query**.
3. Salin seluruh isi file `supabase.sql`, tempel, lalu tekan **Run**.
4. Di Supabase, buka **Project Settings > API** atau halaman API Keys (nama menu dapat berubah).
5. Salin **Project URL** dan **anon/public key**. Jangan salin service_role key.
6. Di GitHub, buka `script.js`, tekan Edit (ikon pensil), dan ganti nilai `SUPABASE_URL` dan `SUPABASE_ANON_KEY` dengan nilai project. Commit perubahan.
7. Ulangi hal yang sama di `admin.js`.
8. Tunggu GitHub Pages memperbarui website.

Contoh placeholder yang harus diganti:
- `PASTE_PROJECT_URL_DI_SINI`
- `PASTE_ANON_PUBLIC_KEY_DI_SINI`

Anon/public key memang dipakai di frontend. Keamanan ditangani oleh Row Level Security (RLS). Jangan pernah memasukkan `service_role` key atau password database ke file yang dipublikasikan.

## 3. Buat akun admin

Dashboard hanya mengizinkan email `alineauliya19@gmail.com`.

1. Di Supabase, buka **Authentication > Users**.
2. Pilih **Add user** (atau invite/create user, sesuai tampilan).
3. Buat akun menggunakan email `alineauliya19@gmail.com` dan password kuat. Jika menggunakan undangan email, ikuti tautan konfirmasi.
4. Pastikan user terkonfirmasi/aktif dan bisa login.
5. Buka `https://USERNAME.github.io/naera-translation/dashboard.html`.
6. Masuk memakai email dan password akun Supabase tadi.
7. Pesan formulir yang masuk akan tampil. Admin bisa membuka balasan email dan menghapus pesan.

Jangan kirim password kepada siapa pun. Jika akun admin memakai email berbeda, ubah email di policy SQL dan `ADMIN_EMAIL` pada `admin.js`, lalu jalankan ulang SQL/policy yang relevan.

## 4. Uji dari awal sampai akhir

1. Buka website publik.
2. Isi formulir dengan data uji (hindari data sensitif).
3. Kirim pesan. Pesan akan masuk jika Supabase telah dikonfigurasi.
4. Buka dashboard admin dan login.
5. Pastikan pesan muncul, lalu tes balas via email bila perlu.
6. Jika formulir gagal, cek URL/key di `script.js`, SQL/policy, dan console browser jika tersedia.

## 5. Informasi yang dapat disesuaikan

- Nama, slogan, layanan, kontak dan lokasi di `index.html`.
- Desain di `style.css`.
- Nomor WhatsApp saat ini diarahkan ke `https://wa.me/6287863704977` (berdasarkan nomor 087863704977).
- Galeri saat ini adalah ilustrasi desain, bukan portofolio proyek nyata. Ganti dengan foto/hasil proyek yang memang Anda punya.
- Instagram belum ditampilkan karena handle belum diberikan.
- Slogan ditulis “WORDS CONNECT PEOPLE” (perapian tata bahasa dari “Word's Connect People”).

## Catatan penting

- GitHub Pages hanya meng-host file statis; Supabase adalah layanan database terpisah.
- Dashboard tidak menggunakan server sendiri. Login Supabase dan RLS membatasi akses database ke akun dengan email admin yang disetel.
- Karena frontend publik bisa menerima spam, sebelum dipakai secara komersial pertimbangkan CAPTCHA/rate limiting dan monitoring.
- Simpan cadangan SQL dan pesan penting. Paket gratis Supabase/GitHub memiliki batas dan ketentuan yang dapat berubah.
- File ini belum otomatis dipublikasikan ke akun GitHub Anda. Website baru online setelah Anda menyelesaikan langkah upload dan Pages.
