const mysql = require('mysql'); // Import library mysql untuk koneksi ke database
require('dotenv').config(); // Import dotenv untuk mengelola environment variables

// Buat koneksi ke database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Coba koneksi ke database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database successfully!');
});

// Export koneksi untuk digunakan di file lain
module.exports = db ; 