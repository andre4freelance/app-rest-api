/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.11.11-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: my_database
-- ------------------------------------------------------
-- Server version	10.11.11-MariaDB-0ubuntu0.24.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `barang`
--

DROP TABLE IF EXISTS `barang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `barang` (
  `ID_barang` int(11) NOT NULL AUTO_INCREMENT,
  `nama_barang` varchar(255) NOT NULL,
  `jenis_barang` varchar(100) DEFAULT NULL,
  `harga_barang` decimal(10,2) NOT NULL,
  `jumlah_barang` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`ID_barang`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `barang`
--

LOCK TABLES `barang` WRITE;
/*!40000 ALTER TABLE `barang` DISABLE KEYS */;
INSERT INTO `barang` VALUES
(2,'Pensil Faber-Castell 2B','Alat Tulis Kantor',4000.00,200),
(3,'Penghapus Steadler','Alat Tulis Kantor',2500.00,100),
(4,'Mouse Wireless Logitech M185','Aksesoris Komputer',150000.00,50),
(5,'Keyboard Mechanical Rexus Legionare','Aksesoris Komputer',650000.00,25),
(6,'Flashdisk SanDisk 32GB','Penyimpanan Data',75000.00,75),
(7,'Kopi Kapal Api Special Mix','Minuman Sachet',1500.00,300),
(8,'Headset JBL Quantum 100','Aksesoris Komputer',300000.00,7),
(9,'SSD','Penyimpanan Data',800000.00,9),
(10,'Penggaris','Alat Tulis Kantor',8000.00,32),
(11,'Laptop Thinkpad','Gawai',5000000.00,2),
(12,'Mouse','Aksesoris Komputer',100000.00,14),
(13,'Keyboard','Aksesoris Komputer',120000.00,9),
(14,'Minyak sayur 2L','Sembako',40000.00,40),
(15,'Keripik','Snack',4000.00,29);
/*!40000 ALTER TABLE `barang` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-10 14:53:18
