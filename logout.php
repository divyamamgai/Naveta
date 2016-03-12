<?php
    session_start();
	header('Content-Type: application/json');
	if (isset($_SESSION['UserID'])) {
		session_destroy();
		echo '{"status":"success"}';
	} else {
		echo '{"status":"cannot"}';
	}
?>