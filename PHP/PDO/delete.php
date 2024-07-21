<?php

$id = $_GET['id'];
$servername = "localhost";
$username = "root";
$password = "";
$port = 3307;
$dbname = "employees";
try {
    $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "DELETE FROM employees WHERE id = $id";
    $conn->exec($sql);
} catch (PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
header("Location: http://localhost/PDO/home.php");
