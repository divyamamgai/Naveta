<?php

	header('Content-Type: application/json');
	
	$userName = $_POST['Name'];
	$emailId = $_POST['UserID'];
	$password = md5($_POST['Password']);
	$phone = $_POST['Phone'];

	$dbuser = 'root';
	$dbname = 'naveta';
	$dbpass = '123456789';
	$dbhost = 'localhost';
	
	mysql_connect($dbhost, $dbuser, $dbpass);
	mysql_select_db($dbname) or die(mysql_error());
	
	$verification_query = "SELECT * FROM users WHERE EMail='$emailId'";
	$verify_result = mysql_query($verification_query) or die(mysql_error());
	if (mysql_num_rows($verify_result) == 1) {
		echo '{"status":"exists"}';
	} else {
		$query = "INSERT INTO users".
				 "(Name, EMail, Password, Phone)".
				 "VALUES ('$userName', '$emailId', '$password', '$phone')";
		$query_result = mysql_query($query) or die(mysql_error());
		if($query_result)
			echo '{"status":"success"}';
		else
			echo '{"status":"error"}';
	}
	mysql_close();
?>