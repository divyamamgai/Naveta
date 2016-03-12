<?php
    function CheckForBuses($Source, $Destination, $AllStops, $DirectionFlag)
    {
        $CheckingNumber = 0;
        $ReversedAllStops = $AllStops;
        if ($DirectionFlag) {
            $ReversedAllStops = array_reverse($AllStops);
        }
        foreach ($ReversedAllStops as $Stop) {
            if (strcmp($Stop, $Source) == 0) {
                $CheckingNumber++;
                continue;
            }
            if ((strcmp($Stop, $Destination) == 0) && $CheckingNumber) {
                $CheckingNumber++;
                break;
            }
        }
        if ($CheckingNumber == 2) {
            return true;
        }
        return false;
    }
    function listAvailableBus()
    {
        $source = $_GET['SRC'];
        $destination = $_GET['DSC'];
        $dbuser = 'root';
        $dbname = 'naveta';
        $dbpass = '123456789';
        $dbhost = 'localhost';
        mysql_connect($dbhost, $dbuser, $dbpass);
        mysql_select_db($dbname) or die(mysql_error());
        $query = "SELECT * FROM `bus`";
        $result = mysql_query($query);
        while($row = mysql_fetch_assoc($result)) {
            $data[] = $row;
        }
		$Buses = array();
        foreach ($data as $bus) {
            $BusStops = explode("|", $bus['Stops']);
            if (array_search($bus['CurrentStop'], $BusStops) == count($BusStops) - 1) {

            } else if (array_search($bus['CurrentStop'], $BusStops) > array_search($source, $BusStops)) {
                continue;
            } else {
                if (CheckForBuses($source, $destination, $BusStops, $bus['Direction'])) {
					array_push($Buses,$bus);
                }
            }
        }
		echo json_encode($Buses);
    }
    listAvailableBus();
?>

