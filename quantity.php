<?php
    function updateSeat(){
        $id = $_GET['BusID'];
        $SeatQuantity = $_GET['Quantity'];
        $dbuser = 'root';
        $dbname = 'naveta';
        $dbpass = '123456789';
        $dbhost = 'localhost';
        mysql_connect($dbhost,$dbuser,$dbpass);
        mysql_select_db($dbname) or die(mysql_error());
        $query = "Update `bus` SET `AvailableSeats`=`AvailableSeats`+$SeatQuantity WHERE `BusID`=$id";
        $result = mysql_query($query) or die(mysql_error());
        $query = "Select `AvailableSeats` FROM `bus` WHERE `BusID`=$id";
        $result = mysql_query($query) or die(mysql_error());
        $num = mysql_fetch_object($result);
        if($num)
        {
            $query = "Update `bus` SET `AvailableSeats`=0 WHERE BusID=$id";
        }
        $result = mysql_query($query) or die(mysql_error());
    }
    updateSeat();
?>