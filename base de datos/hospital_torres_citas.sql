-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: hospital_torres
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `citas`
--

DROP TABLE IF EXISTS `citas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `citas` (
  `id` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `idmedico` int NOT NULL,
  `idpaciente` int NOT NULL,
  `idhabitacion` int NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  KEY `fk_medico` (`idmedico`),
  KEY `fk_paciente` (`idpaciente`),
  KEY `fk_abitacion` (`idhabitacion`),
  CONSTRAINT `fk_abitacion` FOREIGN KEY (`idhabitacion`) REFERENCES `habitaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_medico` FOREIGN KEY (`idmedico`) REFERENCES `medicos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_paciente` FOREIGN KEY (`idpaciente`) REFERENCES `pacientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citas`
--

LOCK TABLES `citas` WRITE;
/*!40000 ALTER TABLE `citas` DISABLE KEYS */;
INSERT INTO `citas` VALUES ('7HGghun89J',12,16,6,'2022-10-20','18:30:53'),('Rgu7Y6EJfS',3,20,9,'2022-10-22','17:54:38'),('ygard45GTC',8,18,4,'2023-03-11','08:00:38'),('846gdu7ht9',5,9,12,'2022-10-11','01:27:47'),('uysbjxmck8',10,16,11,'2024-06-08','21:46:52'),('3w9sh7R3FJ',11,23,8,'2022-10-13','18:25:41'),('hBeXHrGiQu',12,20,7,'2001-10-17','18:42:42'),('6P6o2CsNfB',11,19,13,'2022-10-20','18:30:20'),('1V2JQnl0Nt',13,16,7,'2022-12-24','18:30:08'),('I3E2vy81DL',8,24,6,'2022-10-31','05:25:27'),('sj5e5rFk1t',10,15,5,'2022-10-26','05:25:08'),('8zWuWhYl9w',8,25,6,'2000-10-20','06:25:23'),('Jmqm0fXRWE',12,18,8,'2022-10-30','05:30:00'),('L2nbxp0IGg',8,16,4,'2022-12-09','06:30:40'),('aTqKNGTxmY',12,18,6,'2022-10-22','05:25:59'),('6XTKos7NCR',10,16,5,'2022-10-19','06:30:29'),('zBJvuIvjwb',8,16,12,'2022-12-16','06:00:05');
/*!40000 ALTER TABLE `citas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-24 17:15:03
