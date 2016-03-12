<?php
	header('Content-Type: application/json');
    session_start();
    if (isset($_POST['UserID']) && isset($_POST['Password']) && isset($_POST['Table'])) {
            $userId = $_POST['UserID'];
            $passKey = $_POST['Password'];
            $userId = mysql_real_escape_string($userId);
            $passKey = md5(mysql_real_escape_string($passKey));
            $tableName = $_POST['Table'];

            $dbuser = 'root';
            $dbname = 'naveta';
            $dbpass = '123456789';
            $dbhost = 'localhost';
			
            if (empty($_SESSION['UserID'])) {
                mysql_connect($dbhost, $dbuser, $dbpass);
                mysql_select_db($dbname) or die(mysql_error());
                if(strcmp($tableName,"users")==0)
                    $query = "SELECT * FROM $tableName WHERE EMail='$userId' AND Password='$passKey'";
                else
                    $query = "SELECT * FROM $tableName WHERE EmployeeID='$userId' AND Password='$passKey'";
                $qry_result = mysql_query($query) or die(mysql_error());
                if (mysql_num_rows($qry_result) == 1) {
					$qry_result = mysql_fetch_object($qry_result);
                    $_SESSION['UserID'] = $userId;
					$_SESSION['Name'] = $qry_result->Name;
					$_SESSION['Phone'] = $qry_result->Phone;
                    switch ($tableName) {
                        case 'users':
                            $_SESSION['UserType'] = 1;
                            break;
                        case 'employees':
                            $_SESSION['UserType'] = 2;
                            break;
                    }
					if(isset($_POST['BusID'])) {
					    $_SESSION['BusID'] = $_POST['BusID'];
					    echo '{"status":"success","userData":{"UserID":"'.$userId.'","Name":"'.$_SESSION['Name'].'","BusID":"'.$_SESSION['BusID'].'","UserType":"'.$_SESSION['UserType'].'"}}';
					} else {
                        echo '{"status":"success","userData":{"UserID":"'.$userId.'","Name":"'.$_SESSION['Name'].'","Phone":"'.$_SESSION['Phone'].'","UserType":"'.$_SESSION['UserType'].'"}}';
					}
			    } else {
                    echo '{"status":"wrong"}';
                }
                mysql_close();
            } else {
                echo '{"status":"already"}';
            }
        } else {
            echo '{"status":"error"}';
        }
?>