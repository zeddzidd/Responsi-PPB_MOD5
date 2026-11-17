# ZedConsign: Aplikasi Katalog Sepatu Berbasis Mobile (PWA)

Aplikasi Progressive Web App (PWA) katalog dan konsinyasi (titip jual) sepatu autentik berbasis mobile. Proyek ini dikembangkan sebagai Tugas Akhir Praktikum Pemrograman Perangkat Bergerak (PPB) dengan teknologi **React 19 + Vite + vite-plugin-pwa (Workbox)** menggunakan bahasa **JavaScript**.

---

## 👨‍💻 Identitas Mahasiswa

* **Nama**: Shiddiq Yazid Nurhakim
* **NIM**: 21120124140120
* **Kelompok**: Kelompok 41
* **Program Studi**: S1 Teknik Komputer
* **Departemen / Fakultas**: Teknik Komputer &mdash; Fakultas Teknik
* **Universitas**: Universitas Diponegoro (UNDIP)
* **Mata Kuliah**: Praktikum Pemrograman Perangkat Bergerak (PPB)

---

## ✨ Fitur & Pemenuhan Syarat Tugas Akhir

| Syarat Tugas Akhir | Status | Keterangan Implementasi |
| :--- | :---: | :--- |
| **Teknologi Modul Praktikum** | ✅ | Menggunakan stack persis modul: **React 19**, **Vite**, dan **vite-plugin-pwa** dengan **JavaScript (JSX)**. |
| **Minimal 3 Halaman Navigasi** | ✅ | Memiliki **4 halaman**: Katalog Sepatu, Kelola Sepatu (CRUD), Titip Jual (Consign), dan Profil Mahasiswa. |
| **Halaman Profil** | ✅ | Berisi **Nama: Shiddiq Yazid Nurhakim**, **NIM: 21120124140120**, dan **Kelompok: 41**. |
| **Halaman CRUD Fungsional** | ✅ | Operasi **Create** (tambah sepatu), **Read** (tabel & kartu inventaris), **Update** (edit data sepatu), dan **Delete** (hapus unit) tersimpan di `localStorage`. |
| **PWA Installable & Offline** | ✅ | Dilengkapi `manifest.webmanifest`, `Service Worker` precache dengan Workbox, deteksi status offline banner, dan tombol Install PWA. |
| **Deploy ke Vercel Ready** | ✅ | Dilengkapi konfigurasi `vercel.json` SPA rewrites dan build produksi `dist/` teruji bebas error. |

---

## 📱 Daftar Halaman Aplikasi

1. **Katalog Sepatu (`/`)**:
   - Hero banner interaktif dengan metrik koleksi sepatu.
   - Kolom pencarian instan (nama sepatu, brand, model).
   - Filter kategori (Semua, Sneakers, Basketball, Running, Casual).
   - Pengurutan harga (termurah, termahal, alfabet A-Z / Z-A).
   - Modal pop-up detail spesifikasi lengkap, status stok, harga, dan legit-check badge.

2. **Kelola Sepatu (`CRUD Fungsional`)**:
   - **Create**: Modal formulir penambahan sepatu baru lengkap dengan pemilihan gambar ilustrasi lokal offline.
   - **Read**: Tabel inventaris dengan badge kategori, harga, ukuran, dan status ketersediaan.
   - **Update**: Modal formulir edit sepatu dengan prefilled value.
   - **Delete**: Konfirmasi modal penghapusan data.
   - **Data Persistence**: Semua perubahan disimpan di `localStorage` peramban sehingga tidak hilang saat offline maupun setelah reload.
   - **Tombol Reset Default**: Untuk mengembalikan data awal modul praktikum sewaktu-waktu.

3. **Titip Jual (`Consignment Info & Calculator`)**:
   - 4 alur langkah titip jual sepatu di ZedConsign.
   - Kalkulator taksiran keuntungan interaktif (estimasi potongan 5% jasa titip jual dan dana bersih yang diterima consignor).
   - FAQ titip jual sepatu.

4. **Profil Mahasiswa (`Profile`)**:
   - Kartu profil representatif dengan avatar inisial, Nama, NIM, Kelompok, Program Studi, Departemen, dan Universitas.
   - Checklist pemenuhan seluruh kriteria tugas akhir praktikum.

---

## 🚀 Panduan Menjalankan Proyek

### 1. Menjalankan Mode Development
```bash
npm run dev
```
Buka browser pada tautan lokal yang ditampilkan (biasanya `http://localhost:5173`).

### 2. Membangun Berkas Produksi (Production Build)
```bash
npm run build
```
Perintah ini akan mengompilasi aplikasi ke direktori `dist/` beserta `sw.js`, `manifest.webmanifest`, dan seluruh aset cache offline.

### 3. Menguji Versi Build Produksi secara Lokal
```bash
npm run preview
```

---

## 🌐 Panduan Deploy ke Vercel

Aplikasi ini sudah dilengkapi dengan berkas `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Cara 1: Menggunakan GitHub + Vercel Dashboard (Sangat Direkomendasikan)
1. Buat repositori baru di akun GitHub Anda (misal: `zedconsign-pwa`).
2. Masukkan folder proyek ini ke repositori git:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit ZedConsign PWA"
   git branch -M main
   git remote add origin <URL_REPO_GITHUB_ANDA>
   git push -u origin main
   ```
3. Buka [vercel.com](https://vercel.com) dan login menggunakan akun GitHub Anda.
4. Klik **Add New...** > **Project**.
5. Pilih repositori `zedconsign-pwa` dan klik **Import**.
6. Konfigurasi build setting otomatis terdeteksi (Framework: **Vite**, Build Command: `npm run build`, Output Directory: `dist`).
7. Klik **Deploy**. Dalam beberapa detik link live Vercel Anda aktif (misal `https://zedconsign-pwa.vercel.app`)!

### Cara 2: Menggunakan Vercel CLI Langsung dari Terminal
1. Jalankan perintah:
   ```bash
   npx vercel
   ```
2. Ikuti instruksi di terminal (login ke Vercel via browser, konfirmasi nama project).
3. Untuk rilis produksi langsung:
   ```bash
   npx vercel --prod
   ```
4. Salin tautan produksi yang diberikan oleh Vercel untuk dikumpulkan ke form praktikum.

---

## 📴 Cara Menguji Fungsionalitas PWA Offline

1. Buka aplikasi di peramban Google Chrome / Microsoft Edge.
2. Buka **Developer Tools** (tekan `F12` atau klik kanan > **Inspect**).
3. Buka tab **Network**, lalu ubah opsi throttling dari **No throttling** menjadi **Offline**.
4. Lakukan refresh halaman (`F5` atau `Ctrl + R`).
5. Perhatikan:
   - Aplikasi tetap terbuka dan berfungsi lancar 100%.
   - Banner **Mode Offline Aktif** akan muncul secara otomatis di bagian atas.
   - Anda tetap dapat membuka halaman Katalog, melakukan CRUD (tambah/edit/hapus sepatu), dan membuka halaman profil tanpa koneksi internet!
