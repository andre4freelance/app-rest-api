Tentu, saya akan buatkan isi file README.md berdasarkan struktur dan konten dari file-file yang Anda berikan.

REST API Manajemen Data Barang
Proyek ini adalah sebuah REST API sederhana untuk mengelola data barang, yang dibuat menggunakan Node.js dan Express. API ini menyediakan fungsionalitas CRUD (Create, Read, Update, Delete) untuk berinteraksi dengan database MySQL/MariaDB.

Teknologi yang Digunakan
Node.js: Lingkungan eksekusi JavaScript.
Express.js: Kerangka kerja (framework) untuk membuat API.
MySQL/MariaDB: Database untuk menyimpan data.
dotenv: Untuk mengelola variabel lingkungan (seperti password database).
body-parser: Untuk memproses data yang dikirim dalam body request.
Prasyarat
Sebelum memulai, pastikan perangkat Anda telah terinstal:

Node.js & npm
MySQL atau MariaDB Server
Instalasi & Konfigurasi
1. Clone Repositori
Bash

git clone https://github.com/andre4freelance/belajar-node.js.git
cd belajar-node.js 
2. Instal Dependensi
Jalankan perintah berikut untuk menginstal semua package yang dibutuhkan.

Bash

npm install
3. Setup Database
Buat sebuah database baru di MySQL/MariaDB Anda.
SQL

CREATE DATABASE my_database;
Impor data dan struktur tabel dari file my_database.sql ke dalam database yang baru saja Anda buat. Ini akan membuat tabel barang dan mengisinya dengan beberapa data awal.
4. Konfigurasi Environment
Buat sebuah file baru dengan nama .env di direktori utama proyek.
Isi file .env dengan informasi koneksi database Anda. Ini diperlukan oleh file db.js.
Cuplikan kode

DB_HOST=localhost
DB_USER=root_database_anda
DB_PASSWORD=password_database_anda
DB_NAME=my_database
Menjalankan Aplikasi
Gunakan perintah berikut untuk menjalankan server API.

Bash

npm start
Server akan berjalan di port 8080.

Dokumentasi Endpoint API
Anda dapat menggunakan aplikasi seperti Postman untuk menguji endpoint-endpoint berikut.

GET /
Endpoint dasar untuk mengecek apakah API berjalan.

URL : /API
Method : GET
Response Sukses :
JSON

{
    "status": 200,
    "values": "REST API running well!"
}
GET /barang
Menampilkan semua data barang dari database.

URL : /API/barang
Method : GET
Response Sukses :
JSON

[
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
GET /barang/:id
Menampilkan data barang berdasarkan ID_barang.

URL : /API/barang/{id}
Method : GET
Contoh : /API/barang/4
Response Sukses :
JSON

[
    {
        "ID_barang": 4,
        "nama_barang": "Mouse Wireless Logitech M185",
        "jenis_barang": "Aksesoris Komputer",
        "harga_barang": "150000.00",
        "jumlah_barang": 50
    }
]
POST /tambah
Menambahkan data barang baru.

URL : /API/tambah
Method : POST
Body Request (JSON) :
JSON

{
    "nama_barang": "Barang Baru",
    "jenis_barang": "Jenis Baru",
    "harga_barang": 10000,
    "jumlah_barang": 50
}
Response Sukses :
JSON

{
    "status": 200,
    "values": "Data barang berhasil ditambahkan!"
}
PUT /ubah
Memperbarui data barang yang sudah ada berdasarkan id.

URL : /API/ubah
Method : PUT
Body Request (JSON) :
JSON

{
    "id": 4,
    "nama_barang": "Mouse Wireless Logitech M185 New",
    "jenis_barang": "Aksesoris PC",
    "harga_barang": 155000,
    "jumlah_barang": 45
}
Response Sukses :
JSON

{
    "status": 200,
    "values": "Data barang berhasil diupdate!"
}
DELETE /hapus/:id
Menghapus data barang berdasarkan ID_barang.

URL : /API/hapus/{id}
Method : DELETE
Contoh : /API/hapus/7
Response Sukses :
JSON

{
    "status": 200,
    "values": "Data barang berhasil dihapus!"
}