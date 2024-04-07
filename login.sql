-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2023 at 01:15 PM
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
-- Database: `login`
--

-- --------------------------------------------------------

--
-- Table structure for table `stafflogin`
--

CREATE TABLE `stafflogin` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `staffid` varchar(6) NOT NULL,
  `defaultpassword` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stafflogin`
--

INSERT INTO `stafflogin` (`id`, `name`, `staffid`, `defaultpassword`, `password`) VALUES
(1, 'Abeens', '123456', '654321', ''),
(2, 'Venkatraman', '789456', '654987', ''),
(3, 'Ajay', '456123', '321654', '');

-- --------------------------------------------------------

--
-- Table structure for table `studentlogin`
--

CREATE TABLE `studentlogin` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `rollno` varchar(10) NOT NULL,
  `defaultpassword` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentlogin`
--

INSERT INTO `studentlogin` (`id`, `name`, `rollno`, `defaultpassword`, `password`) VALUES
(1, 'Kavish', '2022115001', '5001', ''),
(2, 'Sugan', '2022115002', '5002', ''),
(3, 'Jothiruban', '2022115096', '5096', ''),
(4, 'Hemachander', '2022115092', '5092', ''),
(6, 'Sri Dharani', '2022115074', '5074', ''),
(7, 'Mohan', '2022115004', '5004', ''),
(8, 'Manish', '2022102053', '2053', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `stafflogin`
--
ALTER TABLE `stafflogin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studentlogin`
--
ALTER TABLE `studentlogin`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `stafflogin`
--
ALTER TABLE `stafflogin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `studentlogin`
--
ALTER TABLE `studentlogin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
