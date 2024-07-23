<?php
$servername = "localhost";
$username = "root";
$password = "";
$port = 3307;
$dbname = "advval";
$conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
