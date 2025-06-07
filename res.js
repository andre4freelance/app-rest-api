'use strict'; // Use strict digunakan untuk mengaktifkan mode ketat pada JavaScript

// Function untuk mengirimkan response dengan status 200 dan data values
exports.ok = function(values, res) {
    var data = {
        status: '200',
        values: values
    };
    res.json(data);
    res.end();
};