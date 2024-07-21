<?php
$servername = "localhost";
$username = "root";
$password = "";
$port = 3307;
$dbname = "employees";

try {
    $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "CREATE TABLE $dbname (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    address varchar(255),
    salary int,
    primary key(id)
    );";
    // use exec() because no results are returned
    $conn->exec($sql);
} catch (PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
