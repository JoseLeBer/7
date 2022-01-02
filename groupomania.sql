-- MySQL dump 10.13  Distrib 8.0.27, for macos11.6 (arm64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id_comment` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `text` varchar(255) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_post` int NOT NULL,
  PRIMARY KEY (`id_comment`),
  KEY `id_user` (`id_user`),
  KEY `id_post` (`id_post`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`id_post`) REFERENCES `posts` (`id_post`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (2,16,'Robertito el gatito mas bonito del muuuuuuuuundo!','2021-11-25 14:16:33',2),(4,20,'Petit chat','2021-11-25 14:39:32',2),(8,41,'Gatito','2021-12-21 20:42:29',2),(9,41,'El gato','2021-12-21 20:46:08',2),(11,41,'LOSC - Chelsea bientôt','2021-12-21 20:56:15',32),(12,41,'Lalalère','2021-12-21 20:57:41',31),(13,41,'Quel génie','2021-12-21 20:58:46',33),(14,41,'Le nouveau Jacques Brel','2021-12-21 21:07:24',33),(15,41,'Bientôt au Grand Stade !!!','2021-12-21 21:07:50',33),(25,41,'Pas mal cette nouvelle coupe !','2021-12-30 10:51:41',60),(28,83,'Triste de ne pas avoir joué avec toi le GOAT !!!','2021-12-31 09:39:50',65),(29,85,'Ne sois pas en retard au travail le lendemain @N L','2021-12-31 16:32:54',66),(31,85,'J\'adore ton chat @Jose Lb','2022-01-02 11:24:55',2);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id_image` int NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) NOT NULL,
  `id_post` int NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id_image`),
  KEY `id_post` (`id_post`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `posts` (`id_post`) ON DELETE CASCADE,
  CONSTRAINT `images_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id_post` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `text` varchar(255) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_post`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,16,'Hello world!','2021-11-24 10:25:15',''),(2,20,'Tital !!!','2021-11-24 10:49:31',''),(12,41,'COUCOU','2021-12-17 16:49:21',''),(14,41,'AVEK','2021-12-17 16:56:07',''),(16,41,'Hello world','2021-12-20 14:30:33',''),(24,41,'AMAZON !!!','2021-12-21 15:53:35',''),(25,78,'DES FRITES, DES FRITES, DES FRITES !!!','2021-12-21 15:55:23',''),(26,41,'Je m\'appelle Jeff Bezos','2021-12-21 15:56:57',''),(27,41,'Bientôt Noël !','2021-12-21 16:39:00',''),(31,41,'Youpiiiiii','2021-12-21 20:10:17',''),(32,41,'Allez le LOSC !!!','2021-12-21 20:55:37',''),(33,41,'Stromae','2021-12-21 20:58:11',''),(34,41,'Fabrice Éboué','2021-12-21 21:08:34',''),(35,41,'Pornic en famille !','2021-12-21 21:09:46',''),(38,41,'Bientôt nouvel an !','2021-12-29 09:34:51',''),(39,41,'Salut le monde !','2021-12-29 09:35:50',''),(40,41,'Hola mundo!','2021-12-29 09:36:54',''),(41,41,'Hello world!','2021-12-29 09:37:16',''),(42,41,'Hallo Welt!','2021-12-29 09:38:21',''),(43,41,'Ciao mondo!','2021-12-29 10:46:58',''),(60,41,'Nouvelle coupe de cheveux !','2021-12-29 20:18:59','http://localhost:3000/images/jb.jpeg1640809139492.jpg'),(61,41,'Ma petite entreprise, connaît pas la crise...','2021-12-30 09:44:36','http://localhost:3000/images/amazon.png1640857476038.png'),(64,81,'J\'adore Vue.js','2021-12-30 15:49:50','http://localhost:3000/images/vue_js.png1640879390977.png'),(65,81,'SUUUUUUUUUUUU !!!','2021-12-30 16:01:54','http://localhost:3000/images/cr7.jpeg1640880114977.jpg'),(66,81,'LOSC - CHELSEA EN MARS LES COPAINS !!!','2021-12-30 16:07:54','http://localhost:3000/images/losc.png1640880474164.png'),(67,81,'Bientôt les vacances !!!','2021-12-30 16:38:06','http://localhost:3000/images/surf.jpeg1640882286785.jpg'),(71,85,'Tremblez tous, car l\'Administrator est maintenant connecté !','2021-12-31 16:48:50','');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `user_firstname` varchar(100) NOT NULL,
  `user_lastname` varchar(100) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT 'http://localhost:3000/images/default_profile_picture.png',
  `admin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (16,'Jose','Lb','jlb@gmail.com','$2b$10$MwqHJz6BjFfeixbhFK.fC.u5Ds.eTrHOicYcv/fQUFvW0bCT0VtdK','http://localhost:3000/images/default_profile_picture.png',0),(19,'Kobe','Bryant','kobe_bryant@nba.com','$2b$10$oI0Uwmvs3Dj8DyTFrLRDZeR5lwvujVlyjVfpUUrB8VEZ62hT75kX6','http://localhost:3000/images/default_profile_picture.png',0),(20,'Nadine','Lb','nlb@gmail.com','$2b$10$XijVbpb6eCU8sKsqUuOV7eNVWMFxcAYgMaxFJqyHb.PtmsF9iDSJ6','http://localhost:3000/images/default_profile_picture.png',0),(21,'Arnaud','Lb','alb@gmail.com','$2b$10$Wgy9aaub98L/Yz3hpYqJIOvKk7Tt9n10gYR8v3so.hcCRWqJp8EaK','http://localhost:3000/images/default_profile_picture.png',0),(23,'Patricia','Lb','plb@gmail.com','$2b$10$Uf.Kn9gR7hue.2CjYINfz.fYwNpPf5f9cr8GOwYtE/Skgy.BDnVrW','http://localhost:3000/images/default_profile_picture.png',0),(24,'Robertito','Lb','rlb@gmail.com','$2b$10$U/2PSIdI/mfs..QESYBXfe0qdyBQm39AkxWNTkApY.TWXL5Ie4Ur.','http://localhost:3000/images/default_profile_picture.png',0),(31,'Henry','Avek','henry@gmail.com','$2b$10$PQNc.XNRdz4mQKkBz33OI.zvmpwVIthWstQn0af3F9g.ILcBkGexq','http://localhost:3000/images/default_profile_picture.png',0),(35,'Jean','Vincent','salut@gmail.com','$2b$10$asqduYqk8Lq.CIw2rE.zke583C9WBF49LFK.EUbYK8fS0xkMFq.NK','http://localhost:3000/images/default_profile_picture.png',0),(36,'Charles','Henry','test@testtt.com','$2b$10$RYBi3cKguvGBUF2vFOLqD.fY8TvnOXpzoiWBoKe4YxHGvN1oy8aou','http://localhost:3000/images/default_profile_picture.png',0),(37,'Douglas','Lambert','unautretest@gmail.com','$2b$10$uLrpGJOT1eAxeqCi5DvVe.qWe25r3W03gLnIvh53QJPmRT9TEwbhy','http://localhost:3000/images/default_profile_picture.png',0),(41,'Jeff','Bezos','jeff_bezos@amazon.com','$2b$10$2/4Lon4wOIO/Xn2B8I5m5uYwSS4ioT6ZlZ0yxw3EKR3tQBcW93FO2','http://localhost:3000/images/default_profile_picture.png',0),(43,'Wawa','Sensei','wawa@gmail.com','$2b$10$gt6CVLV/n6tTWOKcAojnrO4UG2nzA5OdihRYgBTiBZZKapaqjvmVK','http://localhost:3000/images/default_profile_picture.png',0),(57,'a','b','avek@a.com','$2b$10$3VRTCt5KP3qgi2A71lrvi.U3sFLta8iSmigdHg5htxLNzKX7yfTk2','http://localhost:3000/images/default_profile_picture.png',0),(59,'Avek','Davek','avekd@gmail.com','$2b$10$hSNxrqIxRAE3V50XpSakZ.K7wqQDStQEuJyscZfFQuMxajQFeydcm','http://localhost:3000/images/default_profile_picture.png',0),(60,'Coucou','Toi','coucoutoi@amazon.com','$2b$10$pR7HJchXncs1lFBfs9O91.edu1nmH/ozPi/biJsGbhu4YxHm5MuCy','http://localhost:3000/images/default_profile_picture.png',0),(74,'J','2','j2@gmail.com','$2b$10$UngEDCAbOpscoqWeG.2F4uM76oOQldaJBDA6HA3wOIgnPdlg43lk6','http://localhost:3000/images/default_profile_picture.png',0),(78,'Jeff','Tuche','tuche@t.fr','$2b$10$5sCOpiZK0Dt97KPgS838jeN6RCKBIaZG5ywcUM3GxJLAkbro5bPKW','http://localhost:3000/images/default_profile_picture.png',0),(81,'N','L','nld@a.com','$2b$10$L3jKFTvxqMC7Tg7prBmVM.bg2BlDEK.g/tMnXK2fMVAUM4aoUUWbO','http://localhost:3000/images/default_profile_picture.png',0),(82,'Cristiano','Ronaldo','cr7@cr7.com','$2b$10$x.W2sRvtJJ.x5gSMzDeJ7.7kaaaM/tjHkMITcH1ZSNn/ai68Pyeuy','http://localhost:3000/images/default_profile_picture.png',0),(83,'Vini','Jnr','vini@rm.com','$2b$10$nD04HKSuBqSPQn84X9ct3upSORasRf.F.NPE3yOcmD25eNLZyAKnm','http://localhost:3000/images/default_profile_picture.png',0),(85,'Super','Administrator','admin@groupomania.com','$2b$10$E2KHDRKHl3Kwelo7R3l0TOeWURNa/19ryUybHfT15AQm5m7kEkhTK','http://localhost:3000/images/admin.png',1);
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

-- Dump completed on 2022-01-02 18:10:20
