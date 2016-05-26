<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$zip_code = $_POST['zip'];
$wish_list = $_POST['wish'];
$comments = $_POST['comments'];

// the message
$msg = "Name:$name\nPhone: $phone\nEmail: $email_address\nZip Code: $zip_code\nWish: $wish_list\n\nComments: $comments";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("caitlinwhitter@gmail.com","New Submission - Target Bulls Eye Wish",$msg);
?>