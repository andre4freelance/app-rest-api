'use strict'; // Use strict digunakan untuk mengaktifkan mode ketat pada JavaScript
var response = require('./res'); // Import module response untuk mengirimkan response
var dbConn = require('./db'); // Import koneksi database

// Fungsi untuk mengirimkan response dengan status 200 dan pesan "REST API running well!"
exports.index = function(req, res) {
    response.ok("REST API running well!", res)
};

// Menampilkan semua data dari tabel barang
exports.tampilkanSemuaBarang = function(req, res) {
    dbConn.query('SELECT * FROM barang', function(error, rows, fields) {
        if (error) {
            console.log(error);
        }else {
            response.ok(rows, res);
        }
    });
};


// Menampilkan data barang berdasarkan ID
exports.tampilkanBarangById = function(req, res) {
    let id = req.params.id;
    dbConn.query('SELECT * FROM barang WHERE ID_barang = ?', [id], function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Menambahkan data barang baru
exports.tambahBarang = function(req, res) {
    let nama_barang = req.body.nama_barang;
    let jenis_barang = req.body.jenis_barang;
    let harga_barang = req.body.harga_barang;
    let jumlah_barang = req.body.jumlah_barang;
    dbConn.query('INSERT INTO barang (nama_barang, jenis_barang, harga_barang, jumlah_barang) VALUES (?, ?, ?, ?)', 
        [nama_barang, jenis_barang, harga_barang, jumlah_barang], 
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data barang berhasil ditambahkan!", res);
            }
        });
};