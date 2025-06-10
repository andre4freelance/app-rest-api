'use strict'; // Use strict digunakan untuk mengaktifkan mode ketat pada JavaScript

// Import module response untuk mengirimkan response
module.exports = function(app) {
    var myjson = require('./controller');

    app.route('/API')
        .get(myjson.index);

    app.route('/API/barang')
        .get(myjson.tampilkanSemuaBarang);

    app.route('/API/barang/:id')
        .get(myjson.tampilkanBarangById);

    app.route('/API/tambah')
        .post(myjson.tambahBarang);

    app.route('/API/ubah')
        .put(myjson.updateBarang);

    app.route('/API/hapus/:id')
        .delete(myjson.hapusBarang);
};

