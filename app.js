const express = require('express'); // Untuk membuat webserver
const app = express(); // Membuat instance dari express
const bodyParser = require('body-parser'); // Untuk parsing request body
const mysql = require('mysql'); // Untuk koneksi ke database MySQL
require('dotenv').config(); // Untuk mengakses variabel lingkungan dari file .env

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

// Menjalankan server pada port 8080
const port = 8080;
app.listen(port, () => {
    console.log(`http://192.168.100.209:${port}`);
});