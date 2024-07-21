<?php

$email = $_POST['email'];
$pass = $_POST['pass'];
$found = false;


$servername = "localhost";
$username = "root";
$password = "";
$port = 3307;
$dbname = "phpdb2";

try {
    $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "SELECT * FROM Users;";
    // use exec() because no results are returned
    foreach ($conn->query($sql) as $row) {
        if ($row['email'] === $email and $row['password'] === $pass) {
            echo "signed in";
            $found = true;
            break;
        }
    }
    if (!$found) {
        header("Location: http://localhost/DBPHP2/login.php?bad=bad");
    }
} catch (PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
