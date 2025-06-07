'use strict'; // Use strict digunakan untuk mengaktifkan mode ketat pada JavaScript

// Import module response untuk mengirimkan response
module.exports = function(app) {
    var myjson = require('./controller');

    app.route('/API')
        .get(myjson.index);

    app.route('/API/barang')
        .get(myjson.tampilkanSemuaBarang);
};

