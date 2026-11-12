<!-- 
Nama : Pelita Rut Gratia Tambunan
NIM : 41426016
Prodi : DIV-TEKNOLOGI REKAYASA PERANGKAT LUNAK
-->

1. STARTER DOM 
Uji selector salah : kode menghasilkan nilai null di devtools karena elemen dengan ID daftar-salah tidak ada di dalam dokumen html.

2. TEKS DAN ELEMEN BARU 
1.Amati teks tampil literal : teks di dalam browser akan muuncul persis apa adanya termasuk tag kode yaitu <b>Rina</b> bukan teks tebal.
2.Perbedaan textcontent dan HTML parsing yaitu textcontent memperlakukan seluruh  isi string sebagai teks mentah. Karakter khusus seperti < atau >  tidak akan diurai meknjadi elemen html. Sedangkan parsing menerjemahkan string yang berisi tag html seperti <b> agar ditafsirkan dan dirender oleh browser sebagai elemen atau struktur html yang sebenarnya.
Tindakan : Menambahkan elemen <li> dan memasukkan string <b>Rina</b> lewat li.textContent.
Hasil : Data teks tampil secara literal beserta tag <b> nya di browser.

3. STATE DAN RENDER
Menggunakan state (data array) sebagai sumber utama tampilan, sehingga elemen HTML di DOM akan digambar ulang secara otomatis berdasarkan isi data tersebut.
Tindakan :  Membuat fungsi render() yang menggunakan reolaceChildren () dan perulangan for untuk menampilkan data dari array peserta, lalu mneguji pemanggilan ganda serta array kosong.
Hasil : Jumlah elemen <li> di DOM selalu konsisten sesuai dengan jumlah data di dalam array peserta dan tidak terjadi duplikasi data meskipun fungsi render () dipanggil berulang kali.