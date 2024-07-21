<?php

$name = $_POST['name'];
$email = $_POST['email'];
$pass = $_POST['pass'];
$confirm = $_POST['confirm'];
$emailPattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
$passPattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/";

if (preg_match($emailPattern, $email) == 0) {
    $email = "bad";
}

if (preg_match($passPattern, $pass) == 0) {
    $pass = "bad";
}

if ($confirm !== $pass) {
    $confirm = "bad";
}

if (preg_match($emailPattern, $email) and preg_match($passPattern, $pass) and ($confirm === $pass)) {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $port = 3307;
    $dbname = "phpdb2";

    try {
        $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "INSERT INTO Users (name, email, password) VALUES ('$name','$email','$pass')";
        // use exec() because no results are returned
        $conn->exec($sql);
    } catch (PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }

    $conn = null;
    echo "User added to db";
} else {
    header("Location: http://localhost/DBPHP2/register.php?email=$email&pass=$pass&confirm=$confirm");
}
