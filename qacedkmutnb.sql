-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2022 at 08:08 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qacedkmutnb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_faq`
--

CREATE TABLE `tbl_faq` (
  `faq_id` int(4) NOT NULL COMMENT 'รหัสคำถามที่พบบ่อย',
  `faq_title` varchar(50) NOT NULL COMMENT 'ชื่อคำถามที่พบบ่อย',
  `faq_detail` varchar(500) NOT NULL COMMENT 'รายละเอียดคำตอบ',
  `type_id` int(3) NOT NULL COMMENT 'รหัสหมวดคำถาม'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_faq`
--

INSERT INTO `tbl_faq` (`faq_id`, `faq_title`, `faq_detail`, `type_id`) VALUES
(3, 'ทดสอบหลักสูตรการศึกษา', 'ทดสอบหลักสูตรการศึกษาทดสอบหลักสูตรการศึกษา', 8),
(4, 'ทดสอบ ข้อเสนอแนะการให้บริการ', 'ทดสอบ ข้อเสนอแนะการให้บริการทดสอบ ข้อเสนอแนะการให้บริการ', 1),
(7, 'ทดสอบ FAQ หลักสูตรการศึกษา 2', 'ทดสอบ FAQ หลักสูตรการศึกษา 2', 1),
(5, 'ทดสอบ การสอบ', 'ทดสอบ การสอบ', 4),
(6, 'ทดสอบ FAQ การสมัครเรียน', 'ทดสอบ FAQ การสมัครเรียนทดสอบ FAQ การสมัครเรียนทดสอบ FAQ การสมัครเรียน', 2),
(25, 'test', 'testtesttesttesttest', 3),
(10, 'ทดสอบ FAQ หลักสูตรการศึกษา 3', 'ทดสอบ FAQ หลักสูตรการศึกษา 3', 2),
(11, 'ทดสอบ FAQ หลักสูตรการศึกษา 3', 'ทดสอบ FAQ หลักสูตรการศึกษา 3', 4),
(12, 'ทดสอบ FAQ หลักสูตรการศึกษา 3', 'ทดสอบ FAQ หลักสูตรการศึกษา 3ทดสอบ FAQ หลักสูตรการศึกษา 3', 5),
(13, 'ทดสอบ FAQ ', 'ทดสอบ FAQ หลักสูตรการศึกษา 3ทดสอบ FAQ หลักสูตรการศึกษา 3', 8),
(14, 'ทดสอบ Faq', 'ทดสอบ faq', 7);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_level`
--

CREATE TABLE `tbl_level` (
  `lv_id` int(3) NOT NULL COMMENT 'รหัสระดับสิทธิ์',
  `lv_name` varchar(15) NOT NULL COMMENT 'ชื่อระดับสิทธิ์'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_level`
--

INSERT INTO `tbl_level` (`lv_id`, `lv_name`) VALUES
(1, 'ผู้ดูแลระบบ'),
(2, 'เจ้าหน้าที่'),
(3, 'ผู้ใช้');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_member`
--

CREATE TABLE `tbl_member` (
  `mem_id` int(6) NOT NULL COMMENT 'รหัสสมาชิก',
  `mem_name` varchar(30) NOT NULL COMMENT 'ชื่อสมาชิก',
  `mem_mail` varchar(50) NOT NULL COMMENT 'อีเมล',
  `mem_tal` varchar(12) NOT NULL COMMENT 'เบอร์โทรศัพท์',
  `mem_user` varchar(30) NOT NULL COMMENT 'ชื่อผู้ใช้',
  `mem_pwd` varchar(100) NOT NULL COMMENT 'รหัสผ่าน',
  `mem_img` varchar(50) DEFAULT NULL COMMENT 'ภาพผู้ใช้',
  `lv_id` int(3) NOT NULL COMMENT 'รหัสระดับสิทธิ์',
  `sta_id` int(3) NOT NULL COMMENT 'รหัสสถานะ',
  `date_create` datetime NOT NULL COMMENT 'วันที่สมัคร',
  `date_update` datetime NOT NULL COMMENT 'วันที่ปรับปรุงข้อมูล'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_member`
--

INSERT INTO `tbl_member` (`mem_id`, `mem_name`, `mem_mail`, `mem_tal`, `mem_user`, `mem_pwd`, `mem_img`, `lv_id`, `sta_id`, `date_create`, `date_update`) VALUES
(7, 'afdol', 'aa@mail.com', '0800000000', 'admin1', '$2a$10$7TbCnGgNtVDTGjP.fd7vhOPqHbaynaIvx8.taBxtXWSIjeGwPuBoS', '1', 1, 1, '2022-01-23 18:14:50', '2022-01-23 18:14:50'),
(6, 'afdol', 'a@mail.com', '0811000000', 'admin', '$2a$10$IAALSb0L65vdA2zBK9bcEuxlglfLsaD96AdoyXaKmQfPNRTc16Voe', '1', 1, 1, '2022-01-23 18:13:57', '2022-01-23 18:13:57'),
(8, 'afdol', 'aaa@mail.com', '0811100000', 'user1', '$2a$10$R3z1EWC0GnxAk/TLngFw5.hwI76ieHPZbLCxaKkAlnm99WzxbZWbu', '1', 3, 1, '2022-01-24 19:09:15', '2022-01-24 19:09:15'),
(30, 'std1', 'std1@email.com', '0811111111', 'std1', '$2a$10$NyQFZkrzOEDsaKvJEc/YB.lsAFDZKW7uajGv/MIVgUhVzpEPsAQZ2', NULL, 3, 1, '2022-02-03 21:41:46', '2022-02-03 21:41:46'),
(29, 'std2', 'std2@email.com', '081-111-1111', 'std2', '$2a$10$7IqgXNBzOQ6agrtCDMYkVeSmf38nnrDyLu5uldoCLYULnDvz4d8oq', NULL, 3, 2, '2022-02-03 21:39:51', '2022-02-03 21:39:51'),
(31, 'officer', 'officer@email.com', '0911111111', 'officer', '$2a$10$IBDHxvAslXZ6GjejWt4zEeOR2zy1xyyb8sSK5ZsQxPGFPVBX1G2zC', NULL, 2, 1, '2022-02-10 00:31:48', '2022-02-10 00:31:48'),
(32, 'test', 'test@email.com', '0111111111', 'test', '$2a$10$Xtsy.9ApwtIsyHjOQB6j6OeM6AJ79b3lRp9E9O3tefwyhxoM0SyNC', NULL, 2, 1, '2022-02-10 00:34:16', '2022-02-10 00:34:16'),
(33, 'test1', 'test1@mail.com', '0811111119', 'test1', '$2a$10$U7t9pWPOJwKfyIOx3/BHFe9ZS9xrgodJvM70L8qarTvaF4t8h/kbC', NULL, 3, 1, '2022-02-10 05:39:30', '2022-02-10 05:39:30'),
(35, 'std3', 'std3@gmail.com', '0811111113', 'std3', '$2a$10$ssd1JnD2Kgu2eZbuqc.Bi.1ypJfXGg7LiLnoI.ilau.YZX6PPgZXO', NULL, 3, 1, '2022-02-14 23:52:12', '2022-02-14 23:52:12'),
(36, 'std4', 'std4@gmail.com', '0811111114', 'std4', '$2a$10$o59EdkhvVL8n6yXg4q9TLuIHm21M73ljOsaFHSh5SsSlOcrv/G8JW', NULL, 3, 1, '2022-02-14 23:53:58', '2022-02-14 23:53:58'),
(37, 'std5', 'std5@gmail.com', '0811111115', 'std5', '$2a$10$0cCtG4.L9DYIRMFcjIz5uO49nxXLeqaheHKInPI7yKazzpSbfuYd2', NULL, 3, 1, '2022-02-14 23:54:53', '2022-02-14 23:54:53'),
(38, 'admin2', 'admin2@gmail.com', '0833333332', 'admin2', '$2a$10$BT6qAoyrEuvbGrkC104W/.3rIVaOn6m4osM5W89b3Ub.h2xZbZTjS', NULL, 1, 1, '2022-02-14 23:57:01', '2022-02-14 23:57:01'),
(39, 'officer1', 'officer1@email.com', '0822222221', 'officer1', '$2a$10$rG5Rb5R7Itcwj2aofqkRw.mp.NVYwbIDoMmKkjDB.D0bVv2TC87kW', NULL, 2, 1, '2022-02-14 23:58:11', '2022-02-14 23:58:11'),
(40, 'std6', 'std6@email.com', '0811111116', 'std6', '$2a$10$dmfui.NNGDFhitej7tnEKev/QdSUk6yghO1JRwVQ/c9Y2n3wTrMBS', NULL, 3, 1, '2022-02-17 05:41:57', '2022-02-17 05:41:57'),
(41, 'Ratchanon Semsayan', 'afdolcom79@gmail.com', '0846350728', 'afdol79', '$2a$10$dZScRdVPOOwOemuA.q/OZ.qksgx9sEwZLRJQojWxuEupF3WCezBc6', NULL, 3, 1, '2022-04-21 20:26:57', '2022-04-21 20:26:57'),
(42, 'รัชชานนท์ เสมสายัณห์', 'dol_79@hotmail.com', '0817788154', 'ratchanon79', '$2a$10$i8vuIe8iYAFVxfLcfN2OZOgMPAOT05McM5iq74Kh36UbaM/BYkETq', NULL, 3, 1, '2022-04-21 20:37:02', '2022-04-21 20:37:02');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_question`
--

CREATE TABLE `tbl_question` (
  `qst_id` int(6) NOT NULL COMMENT 'รหัสคำถาม',
  `qst_title` varchar(50) NOT NULL COMMENT 'หัวข้อคำถาม',
  `qst_detail` varchar(500) NOT NULL COMMENT 'รายละเอียดคำถาม',
  `qst_img` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '0' COMMENT 'รูปภาพคำถาม',
  `qst_name` varchar(50) NOT NULL COMMENT 'ชื่อผู้ถาม',
  `qst_mail` varchar(50) NOT NULL COMMENT 'อีเมลผู้ถาม',
  `qst_date` datetime NOT NULL COMMENT 'วันที่ถาม',
  `type_id` int(3) NOT NULL COMMENT 'รหัสหมวดคำถาม',
  `reply_id` int(6) NOT NULL DEFAULT 0 COMMENT 'รหัสคำตอบ',
  `mem_id` int(6) DEFAULT NULL COMMENT 'รหัสสมาชิก (ผู้ถาม กรณีเป็นสมาชิก)',
  `sta_id` int(3) NOT NULL COMMENT 'รหัสสถานะ (สถานะการตอบคำถาม)'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_question`
--

INSERT INTO `tbl_question` (`qst_id`, `qst_title`, `qst_detail`, `qst_img`, `qst_name`, `qst_mail`, `qst_date`, `type_id`, `reply_id`, `mem_id`, `sta_id`) VALUES
(1, 'ทดสอบแก้ไข', 'ทดสอบเนื้อหา', '0', 'std1', 'std1@email.com', '2022-02-11 20:17:39', 2, 25, 30, 4),
(2, 'ทดสอบ', 'ทดสอบ ทดสอบ', '0', 'iiiiii', 'std@email.com', '2022-02-11 20:20:50', 2, 27, 30, 4),
(3, 'ทดสอบ', 'ทดสอบ ทดสอบ', '0', 'iiiiii', 'std@email.com', '2022-02-11 20:20:53', 2, 26, 30, 4),
(6, 'ทดสอบ', 'ทดสอบของ std2', '0', 'std2', 'std@email.com', '2022-02-11 21:06:17', 1, 24, 29, 4),
(9, 'asdfasdf', 'asdfasdf', '1650040350459.pdf', 'testtest', 'std1@email.com', '2022-02-13 01:17:31', 10, 0, 30, 3),
(10, 'test', 'asdfasdf', '0', 'asdfasdf', 'std1@email.com', '2022-02-13 01:17:39', 9, 0, 30, 3),
(11, 'asdfasd', 'asdfasdf', '1649078795236.png', 'asdfasdf', 'std1@email.com', '2022-02-13 01:17:58', 4, 0, 30, 3),
(13, 'หลักสูตรเทียบโอนเรียนกี่ปี', 'หลักสูตรเทียบโอนเรียนกี่ปีครับ ค่าใช้จ่ายเท่าไหร่', '0', 'std5', 'std5@gmail.com', '2022-02-14 23:55:44', 1, 29, 37, 4),
(14, 'ทดสอบเพิ่มคำถาม', 'ทดสอบเพิ่มคำถามทดสอบเพิ่มคำถามทดสอบเพิ่มคำถาม', '0', 'std1 ทดสอบเพิ่มคำถาม', 'std1@email.com', '2022-02-17 05:29:05', 4, 0, 30, 3),
(16, 'ทดสอบ', 'ทดสอบ', '0', 'std1', 'std1@email.com', '2022-02-19 23:35:14', 2, 0, 30, 3),
(36, 'test', '<Small_Boxes name={\"คำถามที่รอคำตอบ\"} count={countQst.qst_wait} p_key={2} /><Small_Boxes name={\"คำถามที่รอคำตอบ\"} count={countQst.qst_wait} p_key={2} />', '0', 'std1', 'std1@email.com', '2022-04-15 05:17:43', 4, 0, 30, 3),
(25, 'ทดสอบรูปภาพ (ไม่มีรูป)', 'ทดสอบรูปภาพทดสอบรูปภาพทดสอบรูปภาพทดสอบรูปภาพ', '0', 'std5', 'std5@gmail.com', '2022-03-27 16:43:31', 1, 0, 37, 3),
(30, 'ทดสอบรูปภาพ (มีรูป)', 'ทดสอบรูปภาพ (มีรูป) ทดสอบรูปภาพ (มีรูป) ทดสอบรูปภาพ (มีรูป)', '1648374669860.png', 'std5', 'std5@gmail.com', '2022-03-27 16:51:09', 1, 0, 37, 3),
(31, 'ทดสอบรูปภาพ (ไม่มีรูป)', 'ทดสอบรูปภาพ (ไม่มีรูป) ทดสอบรูปภาพ (ไม่มีรูป) ทดสอบรูปภาพ (ไม่มีรูป)', '0', 'std5', 'std5@gmail.com', '2022-03-27 16:51:29', 2, 0, 37, 3),
(33, 'ทดสอบรูปภาพ 2', 'ทดสอบรูปภาพ 2 ทดสอบรูปภาพ 2 ทดสอบรูปภาพ 23', '1648576078679.jpg', 'std5', 'std5@gmail.com', '2022-03-30 00:31:56', 1, 28, 37, 4),
(34, 'ทดสอบรูปภาพ 3', 'ทดสอบรูปภาพ 3 ทดสอบรูปภาพ 3 ', '1648580014646.jpg', 'std5', 'std5@gmail.com', '2022-03-30 01:13:48', 1, 0, 37, 3),
(35, 'ทดสอบ ถามหลักสูตร', '123456\r\n', '0', 'std5', 'std5@gmail.com', '2022-04-04 19:43:23', 1, 0, 37, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reply`
--

CREATE TABLE `tbl_reply` (
  `reply_id` int(6) NOT NULL COMMENT 'รหัสคำตอบ',
  `reply_detail` varchar(250) NOT NULL COMMENT 'รายละเอียดคำตอบ',
  `reply_url` varchar(256) NOT NULL COMMENT 'url ข้อมูลภายนอก',
  `reply_date` datetime NOT NULL COMMENT 'วันที่ตอบ',
  `qst_id` int(6) NOT NULL COMMENT 'รหัสคำถาม',
  `mem_id` int(6) NOT NULL COMMENT 'รหัสสมาชิก (ผู้ตอบ)'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_reply`
--

INSERT INTO `tbl_reply` (`reply_id`, `reply_detail`, `reply_url`, `reply_date`, `qst_id`, `mem_id`) VALUES
(28, 'ทดสอบ ตอบคำถาม\n', '', '2022-04-15 04:17:20', 33, 6),
(24, '', '', '2022-02-20 03:40:03', 6, 31),
(25, 'ทดสอบ', '', '2022-02-20 03:40:47', 1, 31),
(29, '', '', '2022-04-28 10:03:38', 13, 6),
(26, 'ทดสอบตอบคำถามรอแก้ไขคำตอบ (แก้ไขคำตอบแล้ว)', '', '2022-03-04 09:17:03', 3, 31),
(27, 'ตอบ', '', '2022-03-20 19:41:53', 2, 6);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_status`
--

CREATE TABLE `tbl_status` (
  `sta_id` int(3) NOT NULL COMMENT 'รหัสสถานะ',
  `sta_name` varchar(10) NOT NULL COMMENT 'ชื่อสถานะ'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_status`
--

INSERT INTO `tbl_status` (`sta_id`, `sta_name`) VALUES
(1, 'อนุญาต'),
(2, 'ไม่อนุญาต'),
(3, 'ดำเนินการ'),
(4, 'สำเร็จ');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_type`
--

CREATE TABLE `tbl_type` (
  `type_id` int(3) NOT NULL COMMENT 'รหัสหมวดคำถาม',
  `type_name` varchar(60) NOT NULL COMMENT 'ชื่อหมวดคำถาม'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_type`
--

INSERT INTO `tbl_type` (`type_id`, `type_name`) VALUES
(1, 'หลักสูตรการศึกษา'),
(2, 'การสมัครเป็นนักศึกษา'),
(3, 'การลงทะเบียนเรียน'),
(4, 'การสอบ'),
(5, 'การวัดผลการศึกษา'),
(6, 'การสำเร็จการศึกษา'),
(7, 'การขอเอกสารสำคัญทางการศึกษา'),
(8, 'การยืมวัสดุ/อุปกรณ์/การขอใช้ห้อง'),
(9, 'การฝึกงาน/การสังเกตการสอน/ฝึกปฏิบัติการสอน/ฝึกสหกิจศึกษา'),
(10, 'ข้อเสนอแนะการให้บริการ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_faq`
--
ALTER TABLE `tbl_faq`
  ADD PRIMARY KEY (`faq_id`);

--
-- Indexes for table `tbl_level`
--
ALTER TABLE `tbl_level`
  ADD PRIMARY KEY (`lv_id`);

--
-- Indexes for table `tbl_member`
--
ALTER TABLE `tbl_member`
  ADD PRIMARY KEY (`mem_id`);

--
-- Indexes for table `tbl_question`
--
ALTER TABLE `tbl_question`
  ADD PRIMARY KEY (`qst_id`);

--
-- Indexes for table `tbl_reply`
--
ALTER TABLE `tbl_reply`
  ADD PRIMARY KEY (`reply_id`);

--
-- Indexes for table `tbl_status`
--
ALTER TABLE `tbl_status`
  ADD PRIMARY KEY (`sta_id`);

--
-- Indexes for table `tbl_type`
--
ALTER TABLE `tbl_type`
  ADD PRIMARY KEY (`type_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_faq`
--
ALTER TABLE `tbl_faq`
  MODIFY `faq_id` int(4) NOT NULL AUTO_INCREMENT COMMENT 'รหัสคำถามที่พบบ่อย', AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `tbl_level`
--
ALTER TABLE `tbl_level`
  MODIFY `lv_id` int(3) NOT NULL AUTO_INCREMENT COMMENT 'รหัสระดับสิทธิ์', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_member`
--
ALTER TABLE `tbl_member`
  MODIFY `mem_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'รหัสสมาชิก', AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `tbl_question`
--
ALTER TABLE `tbl_question`
  MODIFY `qst_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'รหัสคำถาม', AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `tbl_reply`
--
ALTER TABLE `tbl_reply`
  MODIFY `reply_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'รหัสคำตอบ', AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `tbl_status`
--
ALTER TABLE `tbl_status`
  MODIFY `sta_id` int(3) NOT NULL AUTO_INCREMENT COMMENT 'รหัสสถานะ', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_type`
--
ALTER TABLE `tbl_type`
  MODIFY `type_id` int(3) NOT NULL AUTO_INCREMENT COMMENT 'รหัสหมวดคำถาม', AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
