<!-- 
Nama : Pelita Rut Gratia Tambunan
NIM : 41426016
Prodi : DIV-TEKNOLOGI REKAYASA PERANGKAT LUNAK
 -->

 1. FORM INPUT
 Tindakan : Menambahkan elemen <form id="form-peserta"> beserta <label>,<input required>, dan <button type="submit"> tanpa menghapus elemen <ul> dan pesan dari sesi 2.
 Hasil nyata : Form tampil di halaman, klik pada label memfokuskan input, dan validasi wajib isi berjalan saat tombol di tekan kosong.

 2. TAMBAH PESERTA
 Tindakan : Menambahkan elemen `<form id="form-peserta">` yang berisi `<label for="nama">`, `<input id="nama" name="nama" required>`, dan tombol `<button type="submit">` tanpa menghapus daftar `<ul>` dan elemen pesan yang sudah dibuat pada sesi sebelumnya.
 Hasil nyata : 
 1.Atribut for pada label berfungsi dengan baik untuk memfokuskan kursor ke input saat teks label diklik.
 2.Validasi bawaan browser aktif berkat atribut `required` sehingga form tidak bisa disubmit jika kosong.

 3. TOMBOL HAPUS SAAT RENDER
 1.Mengintruksikan pengguna untuk menambahkan elemen tombol "Hapus" secara dinamis ke dalam setiap  item daftar peserta sehingga setiap baris data memiliki tombolnya sendiri yang terikat pada ID  peserta masing-masing.
2.Menggunakan btn.type = "button";
              btn.textContent = "Hapus";
agar atribut tombol menjadi tipe "button" sehingga tombol submit tidak berfungsi, serta memberikan teks label di dalam tombol tersebut menjadi "Hapus".
3.btn.dataset.id = String(p.id);
Menyimpan ID unik dari peserta yang sedang dirender (p.id) ke dalam atribut data-id pada tombol tersebut. Hal ini krusial agar nanti saat tombol diklik, sistem tahu persis data peserta mana yang harus dihapus.
4.li.append(btn);
Menempelkan atau memasukkan tombol btn yang baru dibuat ke dalam elemen daftar baris (li) peserta tersebut.

4. DELEGATION DAN PENGUJIAN
Berfokus pada penerapan teknik EventDelegation pada elemen penampung daftar untuk menangani aksi klik tombol "Hapus" yang dibuat secar dinamis.
1.Memasang event listener sekali saja pada elemen pembungkus utanya yaitu  daftar <ul>.
2.event.target.closest("button[data-id]") mendeteksi apakah area yang diklik oleh pengguna adalah tombol "Hapus" (atau bagian dalam tombol tersebut) yang memiliki atribut data-id. Jika area yang diklik bukan tombol tersebut, atau berada di luar cakupan daftar, maka fungsi akan langsung berhenti (return).
3.Mengambil nilai ID dari atribut data-id tombol yang diklik, mengubahnya menjadi tipe angka (Number), lalu menggunakan method .filter() untuk membuat array baru yang berisi seluruh peserta kecuali peserta yang ID-nya cocok dengan tombol yang diklik (dengan kata lain, data tersebut dihapus dari state).
4.Memanggil fungsi render() agar daftar di layar (DOM) diperbarui sesuai dengan data state terbaru yang sudah dihapus.

Saya menggunakan AI untuk membantu saya untuk mendapatkan penjelasan dari setiap kode yang saya masukkan secara mendalam serta saat menghadapi kendala error, penulisan kode yang tidak sesuai, saya menggunakan AI sebagai penolong untuk mendiagnosis penyebab masalah secaara logis tanpa harus merusak seluruh pekerjaan.