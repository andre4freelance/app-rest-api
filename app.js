const express = require('express'); // Untuk membuat webserver
const app = express(); // Membuat instance dari express
const bodyParser = require('body-parser'); // Untuk parsing request body
const mysql = require('mysql'); // Untuk koneksi ke database MySQL
require('dotenv').config(); // Untuk mengakses environment dari file .env

//Koneksi ke /public/ untuk tampilan web
app.use(express.static('public'));

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Middleware untuk parsing URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Koneksi ke database MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,       // Mengambil host dari .env
    user: process.env.DB_USER,       // Mengambil user dari .env
    password: process.env.DB_PASSWORD, // Mengambil password dari .env
    database: process.env.DB_DATABASE  // Mengambil nama database dari .env
});

// Membuat koneksi ke database
db.connect((err) => {
    if (err) {
        console.error('Koneksi ke database gagal:', err);
        return;
    }
    console.log('Koneksi ke database berhasil');
});

// show data dari tabel barang
const queryDataFromTableBarang = 'SELECT * FROM barang;';
db.query(queryDataFromTableBarang, (queryErr, results) => {
    if (queryErr) {
        console.error ("Gagal membuka table barang");
        return;
    };
    if (results.length > 0) {
            console.log("\n--- Isi Tabel Barang ---");
            console.table(results); // console.table() menampilkan array of objects dalam format tabel yang rapi
            console.log("----------------------\n");
        } else {
            console.log("\n--- Tabel Barang Kosong ---");
            console.log("Tidak ada data yang ditemukan di tabel barang.");
            console.db.end((endErr) => {
           if(endErr) {
                console.error('Error closing connection:', endErr.stack);
           } else {
                console.log('Database connection closed successfully.');
           }
        });
    }});

// Menjalankan webserver pada port 8080
const port = 8080;
app.listen(port, () => {
    console.log(`http://192.168.100.209:${port}`);
});