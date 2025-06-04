const mysql = require('mysql');
require('dotenv').config();

// Buat koneksi ke database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// // Cek koneksi ke database
// connection.connect((err) => {
//   if (err) {
//     console.error('Koneksi ke database gagal:', err);
//     return;
//   }
//   console.log('Koneksi ke database berhasil');
// }); 

module.exports = connection; // Export koneksi untuk digunakan di file lain