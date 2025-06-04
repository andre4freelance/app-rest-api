const readline = require('readline');
const connection = require('./db'); // Mengimpor koneksi dari db.js

// Input CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tanyaPertanyaan(pertanyaan) {
  return new Promise((resolve) => {
    rl.question(pertanyaan, (jawaban) => resolve(jawaban));
  });
}

async function updateDataBarang() {
  try {
    const id = await tanyaPertanyaan("ID barang yang ingin diupdate = ");
    if (!id) {
      console.log("ID tidak boleh kosong.");
      rl.close();
      connection.end();
      return;
    }

    // Ambil nilai baru (bisa kosong)
    const nama = await tanyaPertanyaan("Nama barang (kosongkan jika tidak ingin mengubah) = ");
    const jenis = await tanyaPertanyaan("Jenis barang (kosongkan jika tidak ingin mengubah) = ");
    const harga = await tanyaPertanyaan("Harga barang (kosongkan jika tidak ingin mengubah) = ");
    const jumlah = await tanyaPertanyaan("Jumlah barang (kosongkan jika tidak ingin mengubah) = ");

    // Siapkan bagian SET query
    const fields = [];
    const values = [];

    if (nama) {
      fields.push("nama_barang = ?");
      values.push(nama);
    }
    if (jenis) {
      fields.push("jenis_barang = ?");
      values.push(jenis);
    }
    if (harga) {
      fields.push("harga_barang = ?");
      values.push(parseFloat(harga));
    }
    if (jumlah) {
      fields.push("jumlah_barang = ?");
      values.push(parseInt(jumlah));
    }

    if (fields.length === 0) {
      console.log("Tidak ada data yang diubah.");
      rl.close();
      connection.end();
      return;
    }

    const sql = `UPDATE barang SET ${fields.join(", ")} WHERE ID_barang = ?`;
    values.push(parseInt(id));

    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error("Gagal mengupdate data:", err);
      } else {
        console.log(`Data berhasil diupdate. Baris yang diubah: ${result.affectedRows}`);
      }
      rl.close();
      connection.end(); {
        console.log("Koneksi database ditutup.");
      }
    });

  } catch (err) {
    console.error("Terjadi error:", err);
    rl.close();
    connection.end();
  }
}

updateDataBarang();