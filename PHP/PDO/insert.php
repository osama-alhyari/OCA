<?php
$servername = "localhost";
$username = "root";
$password = "";
$port = 3307;
$dbname = "employees";
$name = $_POST['name'];
$address = $_POST['address'];
$salary = $_POST['salary'];
try {
    $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO employees(name, address, salary) VALUES( '$name', '$address', '$salary')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "Database created successfully<br>";
} catch (PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
header("Location: http://localhost/PDO/home.php");
