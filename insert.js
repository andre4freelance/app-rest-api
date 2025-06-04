require('dotenv').config();
const mysql = require('mysql');

// Buat koneksi ke database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Sambungkan ke database
connection.connect((err) => {
  if (err) {
    console.error('Koneksi gagal:', err.stack);
    return;
  }
  console.log('Terhubung ke database sebagai ID', connection.threadId);

  // Data yang ingin ditambahkan
  const barangBaru = {
    nama_barang: "Headset JBL Quantum 100",
    jenis_barang: "Aksesoris Komputer",
    harga_barang: 300000.00,
    jumlah_barang: 40
  };

  // Query insert
  const sql = `
    INSERT INTO barang 
    (nama_barang, jenis_barang, harga_barang, jumlah_barang) 
    VALUES (?, ?, ?, ?)
  `;

  connection.query(
    sql,
    [barangBaru.nama_barang, barangBaru.jenis_barang, barangBaru.harga_barang, barangBaru.jumlah_barang],
    (err, result) => {
      if (err) {
        console.error('Gagal menambahkan data:', err);
        return;
      }
      console.log('Data berhasil ditambahkan! ID:', result.insertId);
    }
  );

  // Tutup koneksi
  connection.end();
});
