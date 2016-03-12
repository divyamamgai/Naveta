<?php
/**
 * Created by PhpStorm.
 * User: Kaushik
 * Date: 3/12/2016
 * Time: 7:47 AM
 */
    $id = $_GET['BusNumber'];
    $dbuser = 'kaushik';
    $dbname = 'naveta';
    $dbpass = '123456789';
    $dbhost = 'localhost';
    mysql_connect($dbhost,$dbuser,$dbpass);
    mysql_select_db($dbname) or die(mysql_error());
    $query = "Select `Stops` FROM `bus` WHERE BusID=$id";
    $result = mysql_query($query) or die(mysql_error());
    $row = mysql_fetch_assoc($result);
    $list = explode('|', $row['Stops']);
    foreach ($list as $item)
        echo "<div class='StationButton'><div class='StationButtonText'>$item</div></div>";
?>