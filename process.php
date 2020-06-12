<?php
include_once 'database.php';
if(isset($_POST['save']))
{	 
	 $firstname = $_POST['firstname'];
	 $lastname = $_POST['lastname'];
     $email = $_POST['email'];
     $message = $_POST['message'];
	 $sql = "INSERT INTO feedbackinfo (firstname,lastname,email,message)
	 VALUES ('$firstname','$lastname','$email','$message')";
	 if (mysqli_query($conn, $sql)) {
		echo "New record created successfully !";
	 } else {
		echo "Error: " . $sql . "
" . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
?>