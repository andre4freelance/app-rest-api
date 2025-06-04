const express = require('express'); // Untuk membuat webserver
const app = express(); // Membuat instance dari express
const bodyParser = require('body-parser'); // Untuk parsing request body
const connection = require('./db'); // Mengimpor koneksi database dari db.js
require('dotenv').config(); // Untuk mengakses environment dari file .env

//Koneksi ke /public/ untuk tampilan web
app.use(express.static('public'));

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Middleware untuk parsing URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Menjalankan webserver pada port 8080
const port = 8080;
app.listen(port, () => {
    console.log(`http://192.168.100.209:${port}`);
});
