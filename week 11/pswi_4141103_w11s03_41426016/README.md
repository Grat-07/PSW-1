<!-- 
Nama : Pelita Rut Gratia Tambunan
NIM : 41426016
Prodi : DIV-TEKNOLOGI REKAYASA PERANGKAT LUNAK
 -->

# LOADING AND FINALLY
Tindakan: Menambahkan `tombol.disabled = true` dan `pesan.textContent = "Memuat data..."` sebelum blok `try` serta blok `finally { tombol.disabled = false; }` setelah blok `catch` pada fungsi `muat()`, lalu menguji dengan throttling jaringan di DevTools dan mengklik tombol berulang saat proses berlangsung.
Hasil Nyata: Saat proses memuat berjalan, tombol nonaktif (`disabled`) dan pesan `"Memuat data..."` tampil sehingga tidak terjadi request ganda; setelah proses selesai (baik saat berhasil maupun gagal), tombol aktif kembali dan siap digunakan lagi.

# EMPTY AND PESAN SUKSES
Tindakan: Memastikan pembersihan daftar (`daftar.replaceChildren()`) dilakukan sebelum merender item baru agar data lama tidak dianggap data terbaru, lalu menambahkan pesan status kondisional `data.length ? `${data.length} kegiatan dimuat` : "Belum ada kegiatan"` setelah validasi data dan menguji fixture array kosong `[]` sebelum mengembalikan data ke semula.
Hasil Nyata: Saat data berisi 2 item, muncul pesan `"2 kegiatan dimuat"` beserta daftarnya; saat `kegiatan.json` diubah menjadi `[]`, daftar kosong dan muncul pesan `"Belum ada kegiatan"` tanpa error (empty bukan error).

# TIMEOUT DENGAN ABORT
Tindakan: Menambahkan `AbortController` dan `setTimeout` sebelum blok `try`, meneruskan `{ signal: controller.signal }` ke `fetch("./data/kegiatan.json")` tanpa mendeklarasikan ulang variabel `r`, membedakan `AbortError` pada blok `catch`, serta membersihkan timer dengan `clearTimeout(timer)` dan mengaktifkan tombol kembali di blok `finally`, lalu menguji timeout pendek dengan throttling di DevTools sebelum mengembalikannya ke `5000` ms.
Hasil Nyata: Saat timeout terpicu sebelum fetch selesai, permintaan dibatalkan (`AbortError`), pesan status ditampilkan, error tercatat di Console, dan tombol kembali aktif (`disabled = false`) sehingga UI pulih normal. 

# MATRIKS KEGAGALAN
Tindakan : Menghapus kurung siku pada `kegiatan.json`, pada bagian network menggunakan throttling offline
Hasil Nyata : Pesan yang akan muncul yaitu "gagal memuat"

YANG SAYA DAPAT DARI PRAKTIKUM INI : 
1. Replacechildren berfungsi menghapus data sebelumnya
2. Throw new berfungsi menampilkan error
3.try/catch : Mmeberi pesan 
4. main.js sangat sensitif di html

Saya menggunakan AI  untuk membantu saya dalam memahami setiap code dari tugas praktikum ini.