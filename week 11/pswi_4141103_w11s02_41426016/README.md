<!-- 
Nama : Pelita Rut Gratia Tambunan
NIM : 41426016
Prodi : DIV- TEKNOLOGI REKAYASA PERANGKAT LUNAK
 -->

 # FIXTURE STABIL
Tindakan: Membuat folder data berisi file dalam `kegiatan.json` dengan struktur array objek (`id`, `judul`, `kuota`) tanpa API key, menjalankan server lokal (Live Server), lalu menguji akses file melalui browser dan memantau tab Network di Developer Tools.
Hasil Nyata: File `kegiatan.json` berhasil dimuat secara lokal melalui protokol HTTP (`http://127.0.0.1:5500/data/kegiatan.json`) dengan tipe request `fetch`, status respons sukses (`304`), ukuran data `241 B`, serta format JSON terbaca valid tanpa pesan error.

# HTML STATUS DAN DAFTAR
Tindakan:Menambahkan `<button id="muat" type="button">Muat kegiatan</button>`, `<p id="pesan" role="status"></p>`, dan `<ul id="daftar"></ul>` pada `<body>`, memuat `main.js` dengan atribut `defer`, mempertahankan CSS responsif dari minggu sebelumnya, serta memeriksa kesesuaian selector ID.
Hasil Nyata: Antarmuka halaman muncul dengan judul, tombol "Muat kegiatan", serta area status dan daftar yang siap diisi data tanpa error HTML atau selector.

# FETCH DENGAN ASYNC
Tindakan: Membuat `main.js`, menghubungkan selector `#muat`, `#pesan`, dan `#daftar`, menulis fungsi `async function muat()` dengan `fetch`, `try/catch`, serta `addEventListener("click", muat)`, lalu menguji klik tombol pada jalur normal (`./data/kegiatan.json`) dan jalur gagal (`./data/hilang.json`) sebelum mengembalikannya ke path semula.
Hasil Nyata: Pada jalur normal, data JSON berhasil diambil dan muncul di Console tanpa error; pada pengujian `hilang.json`, respons HTTP 404 memicu blok `catch` sehingga menampilkan teks `"Gagal memuat"` pada `#pesan` dan mencatat error di Console, lalu kembali berfungsi normal setelah path dikembalikan.

# VALIDASI DAN RENDER
Tindakan: Menambahkan validasi `Array.isArray(data)` dan `typeof k.judul !== "string"`, membersihkan elemen lama dengan `daftar.replaceChildren()`, serta merender elemen `<li>` menggunakan `textContent` dan `daftar.append(li)` di dalam blok `try`. Menguji data berbentuk object (bukan array) serta judul berisi markup HTML, lalu mengembalikan data ke kondisi awal.
Hasil Nyata: Pada data normal, item `HTML` dan `CSS` tampil sebagai daftar teks di halaman; saat diuji dengan object bukan array, error `"Data harus array"` terdeteksi dan `"Gagal memuat"` muncul; saat judul berisi markup HTML, `textContent` menampilkannya sebagai teks biasa tanpa mengeksekusi markup.

# YANG SAYA DAPAT DARI PRAKTIKUM INI :
1. Menggunakan defer agar main.js menunda mengeksekusi, sebelum html dimuat semuanya.
2. Async membantu halaman tetap merespon
3. Fetch mengambil data 
4. await.fetch berfungsi untuk  menunggu data di ambil

Saya menggunakan AI untuk membantu saya dalam memahami fungsi fungsi dari kode yang sedang di kerjakan dalam praktikum ini.