<!-- Nama : Pelita Rut Gratia Tambunan -->
<!-- NIM : 41426016 -->
<!-- Prodi : DIV-TEKNOLOGI REKAYASA PERANGKAT LUNAK -->

1. FUNCTION MURNI SEDERHANA
1.Jika jumlah barang (n) bukan bilangan bulat atau kurang dari 1, function berhenti lebih awal dan mengembalikan null sebagai tanda "tidak ada hasil yang valid".
2.Menggunakan null bukan 0 atau pesan karena 0 bisa tertukar dengan total yang sah, null jelas berarti "input tidak valid" serta function tetap murni karena tidak mencetak apa pun dan tidak mengubah data di luar.

Uji normal dan tidak valid
1.Tindakan : hitungTotal(2, 10000)
  Hasil nyata : 20000
  Keterangan : normal
2.Tindakan : hitungTotal("2", 10000)
  Hasil nyata : null
  Keterangan : tidak valid : bertipe string

Perbedaan return dan console.log :
return mengirim nilai kembali ke pemanggil, sedangkan console.log menampilkan nilai ke layar dan nilainya tidak bisa dipakai lagi. Dan untuk hasil bila ditangkap variabel, jika console.log underfined, sedangkan return nilai sebenarnya.

2. KOLEKSI KEGIATAN
1.Data konsisten : setaip objek memakai kata kunci yang sama seperti id, judul, kuota dengan tipe yang sama, sehingga k.kuota dan k.judul selalu bisa dibaca.
2.filter menyaring elemen berdasarkan kondisi dan mengembalikan array baru yang bisa lebih pendek.
3.map mengubah setiap elemen menjadi bentuk lain sperti objek menjadi judulnya dan mengemablikan array baru dengan jumlah elemen yang sama.
4.Kuota nol dengan filter mengembalikan array kosong [], bukan null dan bukan error.

3. DESTRUCTING DAN SCOPE
Tindakan : const {judul, kuota } = kegiatan[0]
Hasil nyata : HTML 20
Keterangan : Properti diambil langsung menjadi variabel

1.Destructuring : const {judul, kuota } = kegiatan[0] sama menulis dengan const judul = kegiatan[0].judul dan const kuota = kegiatan[0].kuota, tetapi lebih ringkas.
2.Block scope : let dan const hanya berlaku di dalam block { } tempat dideklarasikan. Membacanya di luar menghasilkan ReferenceError:... is not defined, karena di luar block nama itu tidak ada.
3.Perlu menghindari global karena variabel global bisa tertimpa dari bagian kode mana pun dan sulit di lacak. Menulis nama tanpa const, let, atau var membuat variabel tanpa disadari.

4. MODULE DAN UJI
1.Menjalankan server lokal : server wajib dipakai karena module di browser dimuat lewat HTTP. 
2.Memeriksa path import
Import : "./utils.js"
Hasil : OK, export: ambiljudul,filterTersedia,hitungTotal
Penyebab : Path benar
3.Hasil yang seharusnya muncul :
200
Array berisi kegiatan HTML dan JavaScript
['HTML', 'JavaScript']
