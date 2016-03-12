-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2016 at 04:24 AM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `naveta`
--

-- --------------------------------------------------------

--
-- Table structure for table `bus`
--

CREATE TABLE IF NOT EXISTS `bus` (
  `BusID` smallint(6) NOT NULL,
  `Direction` tinyint(1) NOT NULL DEFAULT '1',
  `Stops` mediumtext NOT NULL,
  `Type` enum('Government','Private') NOT NULL,
  `Driver ID` smallint(6) NOT NULL,
  `Conductor ID` smallint(6) NOT NULL,
  `AvailableSeats` tinyint(4) NOT NULL,
  `Capacity` tinyint(4) NOT NULL,
  `CurrentStop` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bus`
--

INSERT INTO `bus` (`BusID`, `Direction`, `Stops`, `Type`, `Driver ID`, `Conductor ID`, `AvailableSeats`, `Capacity`, `CurrentStop`) VALUES
(1, 0, 'Chandigarh|Ambala|Kurukshetra|Karnal|Panipat|Sonipat|Delhi|Gurgaon|Neemrana|Behrod|Kotputli|Jaipur', 'Government', 1001, 2001, 0, 60, 'Delhi'),
(2, 0, 'Delhi|Gurgaon|Rewari|Kotputli|Jaipur|Phulera|Kishangarh|Ajmer', 'Government', 1002, 2002, 0, 60, 'Gurgaon'),
(3, 0, 'Panipat|Sonipat|Delhi|Gurgaon|Narnaul|Jaipur|Ajmer|Falna|Gandhinagar|Ahemdabad', 'Government', 1003, 2003, 61, 60, ''),
(4, 0, 'Delhi|Ghaziabad|Aligarh|Hathras|Tundla|Firozabad|Kanpur', 'Government', 1004, 2004, 61, 60, ''),
(5, 0, 'Haridwar|Meerut|Ghaziabad|Delhi|Gurgaon|Rewari|Jaipur', 'Private', 1005, 2005, 41, 80, '');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE IF NOT EXISTS `employees` (
  `Name` varchar(255) NOT NULL,
  `EmployeeID` smallint(6) NOT NULL,
  `EmployeeType` enum('Driver','Conductor') NOT NULL,
  `Password` tinytext NOT NULL,
  `Phone` bigint(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2006 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`Name`, `EmployeeID`, `EmployeeType`, `Password`, `Phone`) VALUES
('Rohit', 1001, 'Driver', 'e2fc714c4727ee9395f324cd2e7f331f', 9728693608),
('Kaushik', 1002, 'Driver', 'e2fc714c4727ee9395f324cd2e7f331f', 9728431196),
('Divya', 1003, 'Driver', 'e2fc714c4727ee9395f324cd2e7f331f', 8930343246),
('Aman', 1004, 'Driver', 'e2fc714c4727ee9395f324cd2e7f331f', 9999988888),
('Himanshu', 1005, 'Driver', 'e2fc714c4727ee9395f324cd2e7f331f', 9728428164),
('Anshul', 2001, 'Conductor', 'e2fc714c4727ee9395f324cd2e7f331f', 9898989898),
('Vibhu', 2002, 'Conductor', 'e2fc714c4727ee9395f324cd2e7f331f', 8989898989),
('Dinesh', 2003, 'Conductor', 'e2fc714c4727ee9395f324cd2e7f331f', 7899879877),
('Arunabh', 2004, 'Conductor', 'e2fc714c4727ee9395f324cd2e7f331f', 9876543221),
('Vipin', 2005, 'Conductor', 'e2fc714c4727ee9395f324cd2e7f331f', 9874563210);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `Name` varchar(255) NOT NULL,
  `EMail` varchar(255) NOT NULL,
  `Password` text NOT NULL,
  `Phone` bigint(10) NOT NULL,
  `User_ID` smallint(6) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3009 DEFAULT CHARSET=latin1 COMMENT='To store user login details';

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Name`, `EMail`, `Password`, `Phone`, `User_ID`) VALUES
('Divya Mamgai', 'divinemamgai@gmail.com', 'e2fc714c4727ee9395f324cd2e7f331f', 8930343246, 3004),
('Kaushik Sarma', 'kausyap10@gmail.com', 'e2fc714c4727ee9395f324cd2e7f331f', 9999999999, 3005),
('Rohit Yadav', 'rohity2304@gmail.com', 'e2fc714c4727ee9395f324cd2e7f331f', 8888888888, 3006),
('ABCD', 'abcd@gmail.com', 'e2fc714c4727ee9395f324cd2e7f331f', 7777777777, 3007),
('BCDE', 'bcde@gmail.com', 'e2fc714c4727ee9395f324cd2e7f331f', 6666666666, 3008);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bus`
--
ALTER TABLE `bus`
  ADD PRIMARY KEY (`BusID`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`EmployeeID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`User_ID`),
  ADD UNIQUE KEY `E-mail` (`EMail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `EmployeeID` smallint(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2006;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `User_ID` smallint(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3009;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
