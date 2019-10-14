-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: hzst_xtbg
-- ------------------------------------------------------
-- Server version	8.0.17

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
-- Table structure for table `depart`
--

DROP TABLE IF EXISTS `depart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `depart` (
  `depart_id` varchar(100) NOT NULL,
  `depart_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `depart`
--

LOCK TABLES `depart` WRITE;
/*!40000 ALTER TABLE `depart` DISABLE KEYS */;
INSERT INTO `depart` VALUES ('wqefqw','总经办'),('wqoig','研发一部'),('yanfaerbu','研发二部'),('yanfasanbu','研发三部'),('zongheguanlibu','综合管理部'),('hehufuwubu','客户服务部');
/*!40000 ALTER TABLE `depart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notice` (
  `notice_id` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `print_time` varchar(100) NOT NULL,
  `push_time` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `attach` text,
  `draft_man` text NOT NULL,
  `verify_man` text NOT NULL,
  `draft_time` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `verify_time` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `is_delete` varchar(100) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT INTO `notice` VALUES ('cd41e560-ecbe-11e9-99d8-e507024b1294','111111111','11111111111111','1571241600000',NULL,'[{\"name\":\"111111.txt\",\"time\":\"2019/10/12 15:06:19\",\"size\":255,\"path\":\"http://127.0.0.1:3000\\\\upload\\\\upload_9d67104d5fabb68e8a55f22428b6b5a9.txt\",\"id\":\"ca253c10-ecbe-11e9-99d8-e507024b1294\"}]','{\"name\":\"admin\",\"account_num\":\"6666\",\"depart_name\":\"综合管理部\",\"depart_id\":\"zongheguanlibu\"}','[{\"name\":\"admin\",\"account_num\":\"6666\",\"depart_id\":\"zongheguanlibu\",\"depart_name\":\"综合管理部\"}]','1570863984292',NULL,'0'),('8b2bc140-ecbf-11e9-99d8-e507024b1294','2222222222','222222222222222','1571155200000',NULL,'[]','{\"name\":\"admin\",\"account_num\":\"6666\",\"depart_name\":\"综合管理部\",\"depart_id\":\"zongheguanlibu\"}','[{\"name\":\"admin\",\"account_num\":\"6666\",\"depart_id\":\"zongheguanlibu\",\"depart_name\":\"综合管理部\"},{\"name\":\"刘德华\",\"account_num\":\"8888\",\"depart_id\":\"zongheguanlibu\",\"depart_name\":\"综合管理部\"}]','1570864302923',NULL,'0'),('f2c82530-eccb-11e9-b1e2-cd3988bd89c7','3333333','33333333333333','1571241600000',NULL,'[]','{\"name\":\"admin\",\"account_num\":\"6666\",\"depart_name\":\"综合管理部\",\"depart_id\":\"zongheguanlibu\"}','[{\"name\":\"admin\",\"account_num\":\"6666\",\"depart_id\":\"zongheguanlibu\",\"depart_name\":\"综合管理部\"},{\"name\":\"刘德华\",\"account_num\":\"8888\",\"depart_id\":\"zongheguanlibu\",\"depart_name\":\"综合管理部\"}]','1570869630711',NULL,'0'),('022f5250-eccc-11e9-b1e2-cd3988bd89c7','44444444444444','4444444444','1571760000000',NULL,'[]','{\"name\":\"admin\",\"account_num\":\"6666\",\"depart_name\":\"综合管理部\",\"depart_id\":\"zongheguanlibu\"}','[{\"name\":\"admin\",\"account_num\":\"6666\",\"depart_id\":\"zongheguanlibu\",\"depart_name\":\"综合管理部\"},{\"name\":\"刘德华\",\"account_num\":\"8888\",\"depart_id\":\"zongheguanlibu\",\"depart_name\":\"综合管理部\"},{\"name\":\"吴彦祖\",\"account_num\":\"9999\",\"depart_id\":\"hehufuwubu\",\"depart_name\":\"客户服务部\"}]','1570869656556',NULL,'0'),('b422c2b0-ee1d-11e9-a7cc-89f3cf078e03','www','www','1571068800000',NULL,'[{\"name\":\"hzst.png\",\"time\":\"2019/10/14 8:57:58\",\"size\":12436,\"path\":\"http://127.0.0.1:3000\\\\upload\\\\upload_4780b7745274965f8dc25e8d481cc091.png\",\"id\":\"a9d96610-ee1d-11e9-a7cc-89f3cf078e03\"}]','{\"name\":\"admin\",\"account_num\":\"6666\",\"depart_name\":\"综合管理部\",\"depart_id\":\"zongheguanlibu\"}','[{\"name\":\"孙二保\",\"account_num\":\"1234\",\"depart_id\":\"wqoig\",\"depart_name\":\"研发一部\"},{\"name\":\"admin\",\"account_num\":\"6666\",\"depart_id\":\"zongheguanlibu\",\"depart_name\":\"综合管理部\"},{\"name\":\"刘德华\",\"account_num\":\"8888\",\"depart_id\":\"zongheguanlibu\",\"depart_name\":\"综合管理部\"}]','1571014695505',NULL,'0');
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upload`
--

DROP TABLE IF EXISTS `upload`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `upload` (
  `name` varchar(100) NOT NULL,
  `path` varchar(100) NOT NULL,
  `time` varchar(100) NOT NULL,
  `size` varchar(100) DEFAULT NULL,
  `is_detele` int(4) NOT NULL DEFAULT '0',
  `type` varchar(100) NOT NULL,
  `file_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upload`
--

LOCK TABLES `upload` WRITE;
/*!40000 ALTER TABLE `upload` DISABLE KEYS */;
INSERT INTO `upload` VALUES ('hzst.png','\\upload\\upload_8694f2912ef796f5e762cb00fbaa36fa.png','1570785692417','12436',0,'image/png','83a71710-ec08-11e9-ba32-9dfd5c82f7b4'),('hzst.png','\\upload\\upload_ef7c23e6bb169102af8a3a2a21c0fc69.png','1570785949964','12436',0,'image/png','1d297db0-ec09-11e9-bf3f-d5a853f69bed'),('111111.txt','\\upload\\upload_9d67104d5fabb68e8a55f22428b6b5a9.txt','1570863979090','255',0,'text/plain','ca253c10-ecbe-11e9-99d8-e507024b1294'),('111111.txt','\\upload\\upload_3036a4a9ce1af1580b7447b2f539f9ef.txt','1570869851129','255',0,'text/plain','76276e90-eccc-11e9-b1e2-cd3988bd89c7'),('hzst.png','\\upload\\upload_4780b7745274965f8dc25e8d481cc091.png','1571014678258','12436',0,'image/png','a9d96610-ee1d-11e9-a7cc-89f3cf078e03');
/*!40000 ALTER TABLE `upload` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sex` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `account_num` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `leader_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `join_time` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `work_phone` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `depart_id` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `depart_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `post_id` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `post_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `role_type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role_level` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `contract_first` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `promote_time` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `contact_phone` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ID_card` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `QQ` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nation` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `political_face` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `birth_day` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `graduation_time` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `education` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `graduation_school` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `graduation_major` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `native_place` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`account_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('孙二保','$2a$10$sSn5/JPGdHN6gHMJ70b4HOUE0u9dkL2RgIXL8xFCvR7/4w1hd8pYu','男','1234','admin','1570723200000','','wqoig','研发一部',NULL,'','试用','10级','','','','','','','','','','','','','','',''),('admin','$2a$10$ABySstOIEonQUoIh3faoyem0ebtFUWvbm9Ze.EGc7zCfzuMvrfaHu','男','6666','0','1570550400000','19914520405','zongheguanlibu','综合管理部',NULL,'软件设计师','试用','8级','1570550400000','1570550400000','19914520405','360481199604050010','1124092331','1124092331@qq.com','汉族','共青团员','828547200000','1538755200000','本科','景德镇陶瓷大学','打酱油专业','江西九江','杭州市萧山区'),('刘德华','$2a$10$sSn5/JPGdHN6gHMJ70b4HOUE0u9dkL2RgIXL8xFCvR7/4w1hd8pYu','男','8888','admin','1570636800000','','zongheguanlibu','综合管理部',NULL,'','试用','2级','','','','','','','','','','','','','','',''),('吴彦祖','$2a$10$sSn5/JPGdHN6gHMJ70b4HOUE0u9dkL2RgIXL8xFCvR7/4w1hd8pYu','男','9999','admin','1570723200000','','hehufuwubu','客户服务部',NULL,'','试用','1级','','','','','','','','','','','','','','','');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'hzst_xtbg'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-14  9:31:50
