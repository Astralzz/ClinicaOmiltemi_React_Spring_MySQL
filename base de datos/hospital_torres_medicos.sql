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
-- Table structure for table `medicos`
--

DROP TABLE IF EXISTS `medicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8_bin NOT NULL DEFAULT '',
  `apellido_p` varchar(100) COLLATE utf8_bin NOT NULL DEFAULT '',
  `apellido_m` varchar(100) COLLATE utf8_bin NOT NULL DEFAULT '',
  `telefono` varchar(100) COLLATE utf8_bin NOT NULL DEFAULT '',
  `email` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT '',
  `especialidad` varchar(100) COLLATE utf8_bin NOT NULL DEFAULT '',
  `edad` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin COMMENT='medicos del hospital las torres\r\n';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicos`
--

LOCK TABLES `medicos` WRITE;
/*!40000 ALTER TABLE `medicos` DISABLE KEYS */;
INSERT INTO `medicos` VALUES (1,'Monica','Martinez','Cortez','7471555526','jess87@gmail.com','Cardiología ',18),(3,'Omar','Marquez','Gomez','7475625212','daiinxd13@gmail.com','Dermatología',24),(5,'Sandra Luz','Marquez','Martinez','7774256352','sandrita5b_l@gmail.com','Psiquiatría ',49),(6,'Meliza','Vernal','Cruz','7472652012','mericfe@hotmail.com','Oftalmología',44),(8,'Jose','Lopez','Perez','7471524211','ghf753@gmail.com','Cardiología ',23),(10,'America','Cruz','Ramirez','7471774411','jagdfrt3@gmail.com','Ortopedia',26),(11,'Saul Ernesto','Moreno','Jimenez','7471674400','loppse@hotmail.com','Dermatología ',61),(12,'Lupita','Perez','Perez','7777441152','uyerbu5@gmail.com','Psiquiatría ',24),(13,'Víctor Manuel','Barrios','Martinez','7471552000','vicShart@gmail.com','Otro ',21);
/*!40000 ALTER TABLE `medicos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-24 17:15:02
