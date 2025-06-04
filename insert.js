const readline = require('readline');
const connection = require('./db'); // Mengimpor koneksi dari db.js

// Buat interface untuk input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi tanya satu per satu
function tanyaPertanyaan(pertanyaan) {
  return new Promise((resolve) => {
    rl.question(pertanyaan, (jawaban) => resolve(jawaban));
  });
}

async function inputDataBarang() {
  try {
    const nama = await tanyaPertanyaan("Nama barang = ");
    const jenis = await tanyaPertanyaan("Jenis barang = ");
    const harga = await tanyaPertanyaan("Harga barang = ");
    const jumlah = await tanyaPertanyaan("Jumlah barang = ");

    const sql = `
      INSERT INTO barang 
      (nama_barang, jenis_barang, harga_barang, jumlah_barang) 
      VALUES (?, ?, ?, ?)
    `;

    connection.query(sql, [nama, jenis, parseFloat(harga), parseInt(jumlah)], (err, result) => {
      if (err) {
        console.error("Gagal menambahkan data:", err);
      } else {
        console.log("Data berhasil ditambahkan! ID:", result.insertId);
      }
      rl.close();
      connection.end(); {
        console.log("Koneksi ke database ditutup.");
      }
    });

  } catch (err) {
    console.error("Terjadi error:", err);
    rl.close();
    connection.end();
  }
}

// Jalankan
inputDataBarang();