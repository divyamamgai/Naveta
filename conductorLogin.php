<?php
    session_start();
    if (isset($_COOKIE['username']) && isset($_COOKIE['password'])) {
        $_SESSION['user'] = $_COOKIE['username'];
        echo "logged as".$_SESSION['user'];
    }else{
        login();
    }
    function login(){
        if (isset($_GET['userid']) && isset($_GET['pass'])) {
            $userId = $_GET['userid'];
            $passKey = $_GET['pass'];
            $userId = mysql_real_escape_string($userId);
            $passKey = md5(mysql_real_escape_string($passKey));
            $tableName = $_GET['table'];

            $dbuser = 'kaushik';
            $dbname = 'naveta';
            $dbpass = '123456789';
            $dbhost = 'localhost';
            if (empty($_SESSION['user'])) {
                mysql_connect($dbhost, $dbuser, $dbpass);
                mysql_select_db($dbname) or die(mysql_error());

                $query = "SELECT * FROM $tableName WHERE EMail='$userId' AND Password='$passKey'";
                $qry_result = mysql_query($query) or die(mysql_error());

                if (mysql_num_rows($qry_result) == 1) {
                    $_SESSION['user'] = $userId;
                    switch ($tableName) {
                        case 'users':
                            $_SESSION['UserType'] = 'passenger';
                            break;
                        case 'employees':
                            $_SESSION['UserType'] = 'driver/conductor';
                            break;
                    }
                    $result = 'Logged In';
                } else {
                    $result = 'Wrong credentials';
                }
                mysql_close();
                echo $result . $tableName . $passKey . $userId;
                setcookie('username', $userId, time() + 60 * 60 * 24 * 365, '/Naveta', 'localhost');
                setcookie('password', md5($passKey), time() + 60 * 60 * 24 * 365, '/Naveta', 'localhost');
            } else {
                echo "already logged in";
            }
        }else{
            echo "invalid uid and password";
        }
    }
    function logout(){
        if(isset($_SESSION['user'])){
            echo $_SESSION['user']."Logging out";
            session_destroy();
        }else{
            echo "You are not logged in";
        }
    }
    function registerPassenger(){
        $userName = $_GET['userName'];
        $emailId = $_GET['emailId'];
        $password = md5($_GET['password']);
        $phone = $_GET['phone'];

        $dbuser = 'kaushik';
        $dbname = 'naveta';
        $dbpass = '123456789';
        $dbhost = 'localhost';

        mysql_connect($dbhost, $dbuser, $dbpass);
        mysql_select_db($dbname) or die(mysql_error());

        $verification_query = "SELECT * FROM users WHERE EMail='$emailId'";
        $verify_result = mysql_query($verification_query) or die(mysql_error());
        if(mysql_num_rows($verify_result) == 1){
            echo "USER ALREADY EXISTS PLEASE REGISTER WITH DIFFERENT EMAIL ID";
        }else{
            $query = "INSERT INTO users".
                     "(Name, EMail, Password, Phone)".
                     "VALUES ('$userName', '$emailId', '$password', '$phone')";
            $query_result = mysql_query($query) or die(mysql_error());
            if($query_result)
                echo "Successfully Registered";
            else
                echo "Could Not Register";
        }
        mysql_close();
    }
    function registerEmployee(){
        $name = $_GET['userName'];
        $type = $_GET['type'];
        $password = md5($_GET['password']);
        $phone = $_GET['phone'];

        $dbuser = 'kaushik';
        $dbname = 'naveta';
        $dbpass = '123456789';
        $dbhost = 'localhost';

        mysql_connect($dbhost, $dbuser, $dbpass);
        mysql_select_db($dbname) or die(mysql_error());

        $verification_query = "SELECT * FROM employees WHERE Name='$name' AND Phone='$phone'";
        $verify_result = mysql_query($verification_query) or die(mysql_error());
        if(mysql_num_rows($verify_result) == 1){
            echo "USER ALREADY EXISTS PLEASE REGISTER WITH DIFFERENT NAME OR DESIGNATION";
        }else{
            $query = "INSERT INTO employees".
                "(Name, EmployeeType, Password, Phone)".
                "VALUES ('$name', '$type', '$password', '$phone')";
            $query_result = mysql_query($query) or die(mysql_error());
            if($query_result)
                echo "Successfully Registered";
            else
                echo "Could Not Register";
        }
        mysql_close();
    }
    function listBus(){

    }
?>