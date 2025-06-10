# app-rest-api

**app-rest-api** adalah project **RESTful API** sederhana menggunakan **Node.js**, **Express**, dan **MySQL**. API ini dirancang untuk mengelola data **barang** dengan fitur CRUD.

## Features

* CRUD Barang (Create, Read, Update, Delete)
* Terhubung ke database **MySQL**
* JSON-formatted responses
* Struktur project modular (MVC sederhana)
* Menggunakan `dotenv` untuk konfigurasi environment

## Project Structure

```
app-rest-api/
├── main.js          # Entry point aplikasi
├── controller.js    # Logic API CRUD
├── routes.js        # Definisi rute API
├── db.js            # Koneksi MySQL
├── res.js           # Helper untuk format response
├── .env             # Konfigurasi environment (DB)
└── package.json     # Metadata & dependencies Node.js
```

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/andre4freelance/app-rest-api.git
cd app-rest-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Buat file `.env` dan sesuaikan konfigurasi database:

```ini
DB_HOST=localhost
DB_USER=me
DB_PASSWORD=Password123
DB_NAME=my_database
```

### 4. Database Preparation

Buat database dan tabel `barang` di MySQL:

```sql
CREATE DATABASE my_database;

USE my_database;

CREATE TABLE barang (
  ID_barang INT PRIMARY KEY AUTO_INCREMENT,
  nama_barang VARCHAR(100),
  jenis_barang VARCHAR(100),
  harga_barang DECIMAL(10,2),
  jumlah_barang INT
);
```

### 5. Run Application

```bash
npm start
```

API berjalan di: [http://localhost:8080](http://localhost:8080)

## API Endpoints

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/API`            | Test API (status)   |
| GET    | `/API/barang`     | Get all barang      |
| GET    | `/API/barang/:id` | Get barang by ID    |
| POST   | `/API/tambah`     | Tambah barang       |
| PUT    | `/API/ubah`       | Update barang       |
| DELETE | `/API/hapus/:id`  | Delete barang by ID |

### Example Request

**POST** `/API/tambah`

```json
{
  "nama_barang": "Laptop",
  "jenis_barang": "Elektronik",
  "harga_barang": 15000000,
  "jumlah_barang": 5
}
```

**PUT** `/API/ubah`

```json
{
  "id": 1,
  "nama_barang": "Laptop Gaming",
  "jenis_barang": "Elektronik",
  "harga_barang": 20000000,
  "jumlah_barang": 3
}
```

**DELETE** `/API/hapus/1`

## Environment Variables

| Key           | Description         |
| ------------- | ------------------- |
| `DB_HOST`     | Host database MySQL |
| `DB_USER`     | User database       |
| `DB_PASSWORD` | Password database   |
| `DB_NAME`     | Nama database       |

## Dependencies

* [express](https://www.npmjs.com/package/express)
* [mysql](https://www.npmjs.com/package/mysql)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [dotenv](https://www.npmjs.com/package/dotenv)

## Author

**Andre Bastian**
[GitHub](https://github.com/andre4freelance)

License: [MIT](LICENSE)
