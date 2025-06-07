'use strict'; // Use strict digunakan untuk mengaktifkan mode ketat pada JavaScript
var response = require('./res'); // Import module response untuk mengirimkan response
var dbConn = require('./db'); // Import koneksi database

// Fungsi untuk mengirimkan response dengan status 200 dan pesan "REST API running well!"
exports.index = function(req, res) {
    response.ok("REST API running well!", res)
};
