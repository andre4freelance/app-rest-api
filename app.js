const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

//Koneksi ke /public/ untuk tampilan web
app.use(express.static('public'));

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Middleware untuk parsing URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Koneksi ke database MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'Masuklah123', // Ganti dengan password MySQL Anda
    database: 'my_database' // Ganti dengan nama database Anda
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