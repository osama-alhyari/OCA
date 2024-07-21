<?php
$id = $_GET['id'];
$name = $_GET['name'];
$address = $_GET['address'];
$salary = $_GET['salary'];
$servername = "localhost";
$username = "root";
$password = "";
$port = 3307;
$dbname = "employees";

try {
    $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "UPDATE employees SET name = '$name', address = '$address' , salary = $salary WHERE id = $id;";
    // use exec() because no results are returned
    $conn->exec($sql);
} catch (PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
header("Location: http://localhost/PDO/home.php");
