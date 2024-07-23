<?php
include('config.php');
$id = $_GET['id'];
$name = $_GET['name'];
$email = $_GET['email'];
$pass = $_GET['pass'];
$phone = $_GET['phone'];


$sql = "UPDATE users SET username = '$name', email = '$email' , password = $pass, phone = $phone WHERE user_id = $id;";
// use exec() because no results are returned
$conn->exec($sql);

$conn = null;
header("Location: http://localhost/advimg/welcome.php?role=admin");
