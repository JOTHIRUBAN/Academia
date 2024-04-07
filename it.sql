-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2023 at 01:14 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `it`
--

-- --------------------------------------------------------

--
-- Table structure for table `sem1`
--

CREATE TABLE `sem1` (
  `id` int(11) NOT NULL,
  `semester` varchar(15) NOT NULL,
  `name` varchar(250) NOT NULL,
  `credit` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sem1`
--

INSERT INTO `sem1` (`id`, `semester`, `name`, `credit`) VALUES
(1, 'sem1', 'Technical English', 3),
(2, 'sem1', 'Mathematics 1', 4),
(3, 'sem1', 'Physics', 3),
(4, 'sem1', 'Chemistry', 3),
(5, 'sem1', 'Python', 3),
(6, 'sem1', 'Python lab', 2),
(7, 'sem1', 'science lab', 2),
(8, 'sem1', 'Tamil', 1),
(9, 'sem1', 'English lab', 1),
(10, 'sem2', 'Mathematics 2', 4),
(14, 'sem2', 'ITE', 3),
(15, 'sem2', 'BEEE', 3),
(16, 'sem2', 'EG', 3),
(17, 'sem2', 'Tamil', 1),
(18, 'sem2', 'English', 2),
(19, 'sem2', 'ITE lab', 2),
(20, 'sem2', 'BEEE lab', 2),
(21, 'sem2', 'English lab', 2),
(22, 'sem3', 'Discrete Mathematics', 4),
(23, 'sem3', 'DLD', 3),
(24, 'sem3', 'DSA', 3),
(25, 'sem3', 'DBMS', 3),
(26, 'sem3', 'Software Engineering', 3),
(27, 'sem3', 'Humanities 1', 3),
(28, 'sem3', 'DSA lab', 2),
(29, 'sem3', 'DBMS lab', 2),
(30, 'sem3', 'Professional Development', 1),
(39, 'sem4', 'Humanitites 2', 3),
(40, 'sem4', 'EVS', 3),
(41, 'sem4', 'Audit course 1', 1),
(42, 'sem4', 'OOPS', 3),
(43, 'sem4', 'DAA', 3),
(44, 'sem4', 'OS', 3),
(45, 'sem4', 'CA', 3),
(46, 'sem4', 'OS Lab', 2),
(47, 'sem4', 'ADS lab', 2),
(52, 'sem5', 'Computer Engineering', 3),
(53, 'sem5', 'Computer Networks', 3),
(54, 'sem5', 'Web Technologies', 3),
(55, 'sem5', 'Humanities 1', 3),
(56, 'sem5', 'Elective 1', 3),
(57, 'sem5', 'Elective 2', 3),
(58, 'sem5', 'CN Lab', 2),
(59, 'sem5', 'Web Tech Lab', 2),
(60, 'sem5', 'internship', 2),
(61, 'sem6', 'IOT', 3),
(62, 'sem6', 'Data Science ', 3),
(63, 'sem6', 'Cloud computing', 3),
(64, 'sem6', 'Elective 3', 3),
(65, 'sem6', 'Elective 4', 3),
(66, 'sem6', 'Open Elective 1', 3),
(67, 'sem6', 'IOT Lab', 2),
(68, 'sem6', 'Cloud Lab', 2),
(69, 'sem6', 'Project Lab', 1),
(70, 'sem7', 'AI', 3),
(71, 'sem7', 'Mobile computing', 3),
(72, 'sem7', 'Cryptography and security', 3),
(73, 'sem7', 'Elective 5', 3),
(74, 'sem7', 'Elective 6', 3),
(75, 'sem7', 'open Elective 2', 3),
(76, 'sem7', 'Mobile security lab', 2),
(77, 'sem7', 'Project 1', 2),
(78, 'sem8', 'Elective 7', 3),
(79, 'sem8', 'Project 2', 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sem1`
--
ALTER TABLE `sem1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sem1`
--
ALTER TABLE `sem1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
