-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: laravel_test
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `_token` varchar(300) NOT NULL,
  `fname` varchar(300) NOT NULL,
  `lname` varchar(300) NOT NULL,
  `email` varchar(300) NOT NULL,
  `phone` varchar(300) NOT NULL,
  `des` varchar(300) NOT NULL,
  `updated_at` varchar(300) NOT NULL,
  `created_at` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,'b9l8NlvZvHrsZFsmCLRIKOSkhWsi6GYlD9nU27a7','Bidyut','kumar','mondalbidyut38@gmail.com','1234567890','test','2021-11-08 16:25:12','2021-11-08 16:25:12'),(2,'b9l8NlvZvHrsZFsmCLRIKOSkhWsi6GYlD9nU27a7','345','3453','mondalbidyut38@gmail.com','4535','435','2021-11-08 16:32:42','2021-11-08 16:32:42'),(3,'b9l8NlvZvHrsZFsmCLRIKOSkhWsi6GYlD9nU27a7','345','3453','mondalbidyut38@gmail.com','4535','435','2021-11-08 16:33:08','2021-11-08 16:33:08'),(4,'b9l8NlvZvHrsZFsmCLRIKOSkhWsi6GYlD9nU27a7','45645','645645','karthick@mostlikers.com','4565464','546','2021-11-08 16:33:53','2021-11-08 16:33:53'),(5,'b9l8NlvZvHrsZFsmCLRIKOSkhWsi6GYlD9nU27a7','5645','45645','vidyut.srat006@gmail.com','6546546','456456','2021-11-08 16:35:02','2021-11-08 16:35:02'),(6,'b9l8NlvZvHrsZFsmCLRIKOSkhWsi6GYlD9nU27a7','54645','645645','mondalbidyut38@gmail.com','6546','54654','2021-11-08 16:35:54','2021-11-08 16:35:54'),(7,'b9l8NlvZvHrsZFsmCLRIKOSkhWsi6GYlD9nU27a7','4353345','345345','vi34534.srat006@gmail.com','345435','3453','2021-11-08 16:38:26','2021-11-08 16:38:26'),(8,'b9l8NlvZvHrsZFsmCLRIKOSkhWsi6GYlD9nU27a7','456456','45646','vidyut.srat006@gmail.com','456456','456','2021-11-08 16:39:07','2021-11-08 16:39:07'),(9,'VKkjU0oGQdjoxfaJ2n4hSjKxNauZ7t81a0kXyOX6','try','rty','vidyut.srat006@gmail.com','adf','adsf','2021-11-09 07:13:09','2021-11-09 07:13:09'),(10,'VKkjU0oGQdjoxfaJ2n4hSjKxNauZ7t81a0kXyOX6','fgdg','64564','mondalbidyut38@gmail.com','rty','ytry','2021-11-09 07:14:10','2021-11-09 07:14:10'),(11,'VKkjU0oGQdjoxfaJ2n4hSjKxNauZ7t81a0kXyOX6','45646','456456','vidyut.srat006@gmail.com','45645','546546','2021-11-09 07:17:37','2021-11-09 07:17:37'),(12,'VKkjU0oGQdjoxfaJ2n4hSjKxNauZ7t81a0kXyOX6','ertetr','ertert','mondalbidyut38@gmail.com','erter','tret','2021-11-09 07:21:58','2021-11-09 07:21:58'),(13,'VKkjU0oGQdjoxfaJ2n4hSjKxNauZ7t81a0kXyOX6','Bidyut','645645','vidyut.srat006@gmail.com','456','456','2021-11-09 07:23:13','2021-11-09 07:23:13'),(14,'VKkjU0oGQdjoxfaJ2n4hSjKxNauZ7t81a0kXyOX6','34543','354435','vidyut.srat006@gmail.com','(456) 456-5464','34543','2021-11-09 07:26:11','2021-11-09 07:26:11'),(15,'K2LvV5euVbb4qv4N3UlPDecu1ZsRPZ6Q4C8TGvo0','567','5675','vidyut.srat006@gmail.com','56756','7567','2021-11-09 07:47:54','2021-11-09 07:47:54'),(16,'K2LvV5euVbb4qv4N3UlPDecu1ZsRPZ6Q4C8TGvo0','ert','ert','vidyut.srat006@gmail.com','ertert','ert','2021-11-09 07:55:54','2021-11-09 07:55:54'),(17,'K2LvV5euVbb4qv4N3UlPDecu1ZsRPZ6Q4C8TGvo0','567','57657','vidyut.srat006@gmail.com','567567','567','2021-11-09 07:56:45','2021-11-09 07:56:45'),(18,'K2LvV5euVbb4qv4N3UlPDecu1ZsRPZ6Q4C8TGvo0','rty','ytry','mondalbidyut38@gmail.com','rtyrt','rty','2021-11-09 07:58:28','2021-11-09 07:58:28'),(19,'K2LvV5euVbb4qv4N3UlPDecu1ZsRPZ6Q4C8TGvo0','rty','ytry','mondalbidyut38@gmail.com','rtyrt','rty','2021-11-09 07:58:50','2021-11-09 07:58:50'),(20,'K2LvV5euVbb4qv4N3UlPDecu1ZsRPZ6Q4C8TGvo0','rty','ytry','mondalbidyut38@gmail.com','rtyrt','rty','2021-11-09 07:59:04','2021-11-09 07:59:04'),(21,'K2LvV5euVbb4qv4N3UlPDecu1ZsRPZ6Q4C8TGvo0','ertet','ret','chhabi.vanik@gmail.com','ertret','retre','2021-11-09 08:01:46','2021-11-09 08:01:46'),(22,'K2LvV5euVbb4qv4N3UlPDecu1ZsRPZ6Q4C8TGvo0','Bidyut','645645','mondalbidyut38@gmail.com','1234567890','3453','2021-11-09 08:02:37','2021-11-09 08:02:37'),(23,'WGfqk4XNctKZzZFNM9RzyNGkR5NI3il4x5q5ZC45','Bidyut','dfg','mondalbidyut38@gmail.com','1234567890','ytry','2021-11-09 11:28:57','2021-11-09 11:28:57'),(24,'JdG80nliRQTnFcIOd3zlkzMpqkmxrBcyNdjhQgGc','zxc','zxczxc','zxcz@gmail.com','xczxc','zxcxcz','2021-11-14 14:34:50','2021-11-14 14:34:50');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `galleries`
--

DROP TABLE IF EXISTS `galleries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `galleries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(400) NOT NULL,
  `img_name` varchar(400) NOT NULL,
  `description` varchar(400) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `galleries`
--

LOCK TABLES `galleries` WRITE;
/*!40000 ALTER TABLE `galleries` DISABLE KEYS */;
INSERT INTO `galleries` VALUES (1,'img-1.jpg','Red paint cup','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Office Event'),(2,'img-2.jpg','Blorange','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Office Event'),(3,'img-3.jpg','And She Realized','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Others'),(4,'img-4.jpg','DOSE Juice','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Office Event'),(5,'img-5.jpg','Pineapple','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Office Event'),(6,'img-6.jpg','Yellow banana','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Others'),(7,'img-7.jpg','Gameboy','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Office Event'),(8,'img-8.jpg','Color in Guatemala.','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Others'),(9,'img-1.jpg','Red paint cup','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Office Event'),(10,'img-2.jpg','This is test','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Office Event'),(11,'img-3.jpg','And She Realized','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Others'),(12,'img-4.jpg','DOSE Juice','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Office Event'),(13,'img-5.jpg','Pineapple','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Others'),(14,'img-6.jpg','Yellow banana','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Office Event'),(15,'img-7.jpg','Gameboy','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Others'),(16,'img-8.jpg','Color in Guatemala.','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Office Event'),(17,'img-5.jpg','Pineapple','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','New Year'),(18,'img-6.jpg','Yellow banana','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','New Year'),(19,'img-7.jpg','Gameboy','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Office Event'),(20,'img-8.jpg','Color in Guatemala.','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','New Year'),(21,'img-1.jpg','Red paint cup','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','New Year'),(22,'img-2.jpg','This is test','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','Others'),(23,'img-3.jpg','And She Realized','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','New Year'),(24,'img-4.jpg','DOSE Juice','Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.','New Year');
/*!40000 ALTER TABLE `galleries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo` varchar(100) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `phone` varchar(200) DEFAULT NULL,
  `password` varchar(450) DEFAULT NULL,
  `token` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2023-03-12_20-51-6-482.PNG','vidyut1','bidyutmondal11@gmail.com','1234567890','$2b$10$XaVnV.Mhe2vyvEPZZrtwgOCFHqc1R/XrNuqfxVvD28rpQFkBAYKuy','','2023-02-21 01:36:11','2023-03-12 15:21:06'),(3,NULL,'name','bidyut1@gmail.com','1234567890','$2b$10$PEstEAv6WpNYp.ZwHUnBwem5a1V5rL/LDld0aq5j3t.GAdiMwQXSC',NULL,'2023-02-21 01:36:28','2023-02-21 01:36:28'),(5,NULL,'name2','bidyut13@gmail.com','1234567890','$2b$10$jLhtu.MUOjYYPMAxWvYM5.NoIOdLNjAcpJBckMJTdpLVYH.FsSwXq',NULL,'2023-02-21 01:46:45','2023-02-21 01:46:45'),(6,NULL,'sd sd ','bidyut213@gmail.com','1234567890','$2b$10$mL3z1ZgFG8CARm48PaFKsOnKoX0RGffnsfhkFr6sMv2/G5krzGUOK',NULL,'2023-02-21 01:46:51','2023-02-21 01:46:51'),(7,NULL,'bidyut2','mondalbidyut38c@gmail.com','1234567890','$2b$10$lKJtbdl4vCQ3yFk.p.gzs.bhsNqwkAvEl4KxyysdgxyAWH7h1o/e.',NULL,'2023-02-21 01:47:22','2023-03-06 15:00:11'),(9,NULL,'test','mondalbidyut3s8@gmail.com','1234567890','$2b$10$cSw2rf8dN6fOG5hNrCNmcOHs7ppBiUsFXeYtwQ1LKb52QVlLdB2wq',NULL,'2023-02-21 01:47:26','2023-03-06 15:00:16'),(10,NULL,'Vidsadyut Mandal','mondasdalbidyut3s8@gmail.com','1234567890','$2b$10$VCwBI026GBwjVKEuwVc4xuHE.G2NrWyuBUz1kyXAdvwlNOS9VlyDm',NULL,'2023-02-21 01:47:30','2023-02-21 01:47:30'),(11,NULL,'Vidsadyut Mandal','mondasasd@gmail.com','1234567890','$2b$10$QQlHdTZoob/zWpY139SAF.CgvAiurYJt6x7FZX4Fn0NeMY15is9eC',NULL,'2023-02-21 01:47:33','2023-02-21 01:47:33'),(12,NULL,'Vidsadyutasdl','mondasasd33@gmail.com','1234567890','$2b$10$DHDQToSQqIK2XBOAHnakmewVXuS6OFoZgVnvP4uXgxh8ER4.7E95m',NULL,'2023-02-21 01:47:38','2023-02-21 01:47:38'),(13,NULL,'Vidsadyutasdlas','mondasasd33@gmail.coms','1234567890','$2b$10$OAazK56Bf7JwlyqA3Idpou6YBszmAqHgtlbm9IryyTYUf.snUjaau',NULL,'2023-02-21 01:47:42','2023-02-21 01:47:42'),(14,NULL,'Vidsadyutasdlas','asddsa@gmail.coms','1234567890','$2b$10$S71CGY0Z1gED.zvGOW5NwuCIfoWZ2TBw.l6DaZrGwHpHR3VeU3sH2',NULL,'2023-02-21 01:47:45','2023-02-21 01:47:45'),(15,NULL,'Vidsadyutasdlasa','asddasdsa@gmail.coms','1234567890','$2b$10$nMfX5sfZlQkoCDc.uj9uWu6IL02DeGdinABsliNed.TYynA20UUGi',NULL,'2023-02-21 01:47:49','2023-02-21 01:47:49'),(16,NULL,'Vids adyutasdlasasd','asddasd23sa@gmail.coms32','1234567890','$2b$10$rMapiBumy1kZuFAlBz.9uOHsrGY/29YE9A82Xfb2hMjr93OIICPlq',NULL,'2023-02-21 01:47:54','2023-02-21 01:47:54'),(21,NULL,'`INSERT INTO users SET name=\'','test1234@gmail.coms32','1234567890','$2b$10$XqVv6sIxt10QZZ6BBrcvruEcHBdoyl3S.2RjMHRYL.2u4DBA//aea',NULL,'2023-02-23 01:33:44','2023-02-23 01:33:44'),(22,NULL,'`INSERT INTO users SET name=\'','test1232@gmail.coms32','1234567890','$2b$10$DvmSFpgkrmkieDCyF2.eL.8TD8G9resRwbGKOm7KYbc2Zyp5X6ATa',NULL,'2023-02-23 01:34:49','2023-02-23 01:34:49'),(24,'2023-03-16_7-26-57-80.jpg','Vidyut Mandal','vidyut.star006@gmail.com','7735501335','$2b$10$vsILaoyld3n2Ma0AFVFd9e0bzSrQKd9Q/ttLvJmM4FBaYAyYIikmW',NULL,'2023-02-26 02:39:32','2023-03-16 02:04:47'),(28,NULL,'Vidyut Mandal','vidyut.star0038@gmail.com','7735501312','$2b$10$qdTKnYHT5RmI7Niygq7FLeyRi44iF286HK14p3gfZXIhcDBeysQ06',NULL,'2023-02-26 02:51:27','2023-02-26 02:51:27'),(29,'2023-03-15_7-6-5-386.gif','Bidyut Mandal','vidyut.star0031@gmail.com','7735501311','$2b$10$AUSf4l2oNIODbZkegWqP5OBUsVHpdZUONldROEtTDMj/JJd6OBAHa',NULL,'2023-02-26 02:53:07','2023-03-15 01:43:08'),(30,'2023-03-13_21-38-37-44.png','ashish','ashish.star0012@gmail.com','7735501235','$2b$10$UkuoJSun2hrH83xKUSZxjOcWtMfZiZdXQDGCddc/VL2VKqLzBmlXu',NULL,'2023-02-26 02:54:45','2023-03-13 16:08:37'),(31,'2023-03-13_21-37-34-983.jpg','dhanpati','dhanpati.star003@gmail.com','7735501111','$2b$10$.PrYdBvM/oBYryTtpDrnheecmTCbuL87aHTNrmjgd1.mJdOTb50hG',NULL,'2023-02-26 05:13:37','2023-03-13 16:07:34'),(32,'2023-03-13_21-35-48-521.PNG','myname','myname.star0236@gmail.com','1234562330','$2b$10$LbcIc1iwyGS4yjqD0UoqLuVTt6JA69cPuti8Nu6VWnfgdx0Pmi8wm',NULL,'2023-02-26 05:15:12','2023-03-13 16:05:48'),(33,'2023-03-14_7-24-7-989.jpg','okdone','okdone.star0xc26@gmail.com','1234337890','$2b$10$ZMDL/KfJkVDBTyI96qY4OuYs8Sl.0DpXDIsGWhhTMiwW3yS1hkM9u',NULL,'2023-02-26 05:30:27','2023-03-14 01:54:07'),(34,NULL,'Bidyut New','bidyut.mandal@gmail.com','1234567891','$2b$10$YvsCOA3pgxB.uxH0KxAJAeThTs42/HEhh5CLKN4Dz4jLAQaEv00P.',NULL,'2023-08-14 12:43:35','2023-08-14 13:10:25');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-16  8:55:49
