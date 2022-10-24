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
-- Table structure for table `pacientes`
--

DROP TABLE IF EXISTS `pacientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pacientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `apellido_p` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL DEFAULT '',
  `apellido_m` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL DEFAULT '',
  `sexo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `edad` int NOT NULL DEFAULT '0',
  `telefono` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL DEFAULT '',
  `email` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT '',
  `direccion` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin COMMENT='\r\n';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacientes`
--

LOCK TABLES `pacientes` WRITE;
/*!40000 ALTER TABLE `pacientes` DISABLE KEYS */;
INSERT INTO `pacientes` VALUES (9,'Graciano','Cortez','Marquez','H',47,'7471562451','daiinxd13@gmail.com','Chilpancingo Guerrero, Mexico'),(13,'Edain Jesus','Cortez','Ceron','H',13,'7471633315','daiinxd13@gmail.com','Chilpancingo Guerrero, Mexico'),(15,'Maria del Rosario','Cortez','Ceron','M',21,'7474201452','mary874@gmail.com','Chilpancingo Guerrero, Mexico, Ocozuapa'),(16,'Javier Garcia','Lopez','Perez','H',5,'7471633315','Javier645@oulook.com','Chilpancingo Guerrero, Mexico, Chilpancingo Gro'),(18,'Maria Fernanda','Gomes','Lopez','M',42,'7475201025','maria65@hotmail.com','Col Las torres No 24'),(19,'Araceli','Rojas','Dias','M',26,'7471542312','ary754@gmail.com','Col Lopez portillo, No 23, Calle principal'),(20,'Dan','Catalan','Peralta','O',44,'7471858563','dany7656@gmail.com','Chilpancingo Guerrero, Mexico en el Centro'),(21,'Lucas','Garcia','Perez','O',28,'7471887541','luca6564@gmail.com','Col Centro No 76'),(22,'Karla Daniela','Garcia','Garcia','O',11,'7774253620','carla@gmail.com','Col San lucas '),(23,'Monica','Lopez','Diaz','NP',29,'7757421525','Diaz@gmail.com','Chilpancingo Guerrero, Mexico'),(24,'Erika','Salazar','Alvarez','NP',20,'7471565242','eric654@oulook.com','Cuernavaca Morelos'),(25,'María del Guadalupe','García','Salvador','M',37,'7774256300','lupis34@gmail.com','Chilpancingo Guerrero, México, Colonia Centro'),(27,'María','Gonzales','García','M',5,'7755874126','mary764@oulook.com','Chilpancingo ');
/*!40000 ALTER TABLE `pacientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-24 17:15:01
