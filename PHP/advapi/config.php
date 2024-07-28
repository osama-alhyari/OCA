<?php
$servername = "localhost";
$username = "root";
$password = "";
$port = 3307;
$dbname = "advapi";
$conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
header('Content-Type: application/json');
