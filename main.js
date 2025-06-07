const express = require('express'); // Untuk membuat webserver
const app = express(); // Membuat instance dari express
const bodyParser = require('body-parser'); // Untuk parsing request body

// Middleware untuk parsing URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Import router
var routes = require('./routes');
routes(app);

// Menjalankan webserver pada port 8080
const port = 8080;
app.listen(port, () => {
    console.log(`http://192.168.100.209:${port}`);
});
