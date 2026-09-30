# CineScope — Website Film React

CineScope adalah aplikasi penjelajah film responsif dengan data asli dari TMDB. Dibangun memakai React, Vite, React Router, Tailwind CSS, dan Fetch API tanpa library state atau data-fetching tambahan.

## Menjalankan Project

1. Jalankan `npm install`.
2. Salin `.env.example` menjadi `.env`.
3. Isi `VITE_TMDB_API_KEY` dengan API Key v3 dari akun TMDB.
4. Jalankan `npm run dev`, lalu buka alamat lokal yang ditampilkan Vite.

Untuk verifikasi produksi, jalankan:

```bash
npm run lint
npm run build
```

File `.env` sengaja tidak disertakan dan sudah masuk `.gitignore`.

## Fitur

- Pencarian judul dengan debounce; kata kunci tersimpan di URL.
- Filter tahun, rating minimum, dan urutan yang dapat dikombinasikan.
- Pagination berjendela hingga batas 500 halaman TMDB.
- Detail film dengan sinopsis, genre, durasi, pemeran, trailer, dan film serupa.
- Favorit berbasis Context dan localStorage, termasuk badge dan hapus semua.
- Skeleton loading, error + coba lagi, empty state, fallback poster, dan halaman 404.
- Tampilan responsif dan aksesibel untuk mobile, tablet, serta desktop.

Catatan: endpoint pencarian TMDB tidak mendukung filter rating dan urutan. Saat pencarian aktif, keduanya diterapkan pada hasil halaman yang sedang tampil dan dijelaskan di UI.

## Dokumen Ujian

Spesifikasi dan rubrik asli tetap tersedia di folder [`versi-ujian`](versi-ujian/).
