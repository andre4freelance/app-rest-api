# REST API Sederhana - Manajemen Data Barang

Proyek ini adalah REST API sederhana yang dibuat menggunakan Node.js dan Express.js untuk mengelola data barang. API ini terhubung dengan database MySQL atau MariaDB dan menyediakan operasi CRUD (Create, Read, Update, Delete) untuk data barang.

## Teknologi yang Digunakan

- **Node.js**: Lingkungan eksekusi JavaScript di sisi server.
- **Express.js**: Kerangka kerja web untuk Node.js.
- **MySQL/MariaDB**: Sistem manajemen database relasional.
- **dotenv**: Untuk mengelola variabel lingkungan (seperti password dan nama database).
- **body-parser**: *Middleware* untuk mem-parsing *request body* yang masuk.

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal perangkat lunak berikut di mesin Anda:
- [Node.js](https://nodejs.org/en/) (yang akan mencakup npm)
- Server Database (MySQL atau MariaDB)
- Klien API seperti [Postman](https://www.postman.com/) untuk pengujian.

## Instalasi dan Konfigurasi

Ikuti langkah-langkah berikut untuk menjalankan proyek ini secara lokal.

### 1. Clone Repositori
Clone repositori ini ke mesin lokal Anda:
```bash
git clone [https://github.com/andre4freelance/belajar-node.js.git](https://github.com/andre4freelance/belajar-node.js.git)
cd belajar-node.js
2. Instal DependensiInstal semua dependensi yang diperlukan menggunakan npm. Perintah ini akan mengunduh semua package yang tercantum dalam file package.json.npm install
3. Konfigurasi DatabaseAnda perlu membuat database dan mengimpor tabel barang yang skemanya sudah disediakan.Buka klien database Anda (misalnya, MySQL command line, phpMyAdmin, DBeaver).Buat database baru. Berdasarkan file my_database.sql, nama databasenya adalah my_database.CREATE DATABASE my_database;
Impor struktur tabel dan data dari file my_database.sql ke dalam database yang baru saja Anda buat.4. Konfigurasi Variabel LingkunganAPI ini memerlukan variabel lingkungan untuk terhubung ke database.Buat file baru bernama .env di direktori utama proyek.Salin dan tempel konten berikut ke dalam file .env, lalu sesuaikan nilainya dengan konfigurasi database Anda. File ini dibaca oleh db.js untuk melakukan koneksi.# Konfigurasi Database
DB_HOST=localhost
DB_USER=root # Ganti dengan username database Anda
DB_PASSWORD=password # Ganti dengan password database Anda
DB_NAME=my_database
Menjalankan AplikasiSetelah semua konfigurasi selesai, jalankan server menggunakan perintah berikut. Perintah ini akan menjalankan main.js seperti yang didefinisikan dalam package.json.npm start
Server akan berjalan dan mendengarkan pada port 8080. Anda akan melihat pesan di konsol jika koneksi database berhasil.Dokumentasi Endpoint APIBerikut adalah daftar endpoint API yang tersedia, berdasarkan routes.js dan controller.js.1. Cek Status APIEndpoint dasar untuk memeriksa apakah API berjalan dengan baik.URL : /APIMethod : GETResponse Sukses (200 OK):{
    "status": 200,
    "values": "REST API running well!"
}
2. Tampilkan Semua BarangMenampilkan seluruh data yang ada di tabel barang.URL : /API/barangMethod : GETContoh Response Sukses (200 OK):[
    {
        "ID_barang": 2,
        "nama_barang": "Pensil Faber-Castell 2B",
        "jenis_barang": "Alat Tulis Kantor",
        "harga_barang": "4000.00",
        "jumlah_barang": 200
    },
    {
        "ID_barang": 3,
        "nama_barang": "Penghapus Steadler",
        "jenis_barang": "Alat Tulis Kantor",
        "harga_barang": "2500.00",
        "jumlah_barang": 100
    }
]
3. Tampilkan Barang Berdasarkan IDMenampilkan satu data barang berdasarkan ID_barang yang dikirimkan sebagai parameter URL.URL : /API/barang/:idMethod : GETContoh Penggunaan: /API/barang/4Contoh Response Sukses (200 OK):[
    {
        "ID_barang": 4,
        "nama_barang": "Mouse Wireless Logitech M185",
        "jenis_barang": "Aksesoris Komputer",
        "harga_barang": "150000.00",
        "jumlah_barang": 50
    }
]
4. Tambah Barang BaruMenambahkan satu data barang baru ke dalam database.URL : /API/tambahMethod : POSTRequest Body (format application/json):{
    "nama_barang": "SSD V-Gen 256GB",
    "jenis_barang": "Penyimpanan Data",
    "harga_barang": "350000.00",
    "jumlah_barang": 15
}
Contoh Response Sukses (200 OK):{
    "status": 200,
    "values": "Data barang berhasil ditambahkan!"
}
5. Ubah Data BarangMengubah data barang yang sudah ada berdasarkan id yang dikirimkan dalam request body.URL : /API/ubahMethod : PUTRequest Body (format application/json):{
    "id": 5,
    "nama_barang": "Keyboard Mechanical Rexus",
    "jenis_barang": "Aksesoris Komputer",
    "harga_barang": "625000.00",
    "jumlah_barang": 20
}
Contoh Response Sukses (200 OK):{
    "status": 200,
    "values": "Data barang berhasil diupdate!"
}
6. Hapus Data BarangMenghapus satu data barang berdasarkan ID_barang yang dikirimkan sebagai parameter URL.URL : /API/hapus/:idMethod : DELETEContoh Penggunaan: /API/hapus/6Contoh Response Sukses (200 OK):{
    "status": 200,
    "values": "Data barang berhasil dihapus!"
}
