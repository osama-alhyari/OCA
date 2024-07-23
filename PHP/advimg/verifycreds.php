<?php
include('config.php');

$email = $_POST['email'];
$pass = $_POST['pass'];

$sql = "SELECT * FROM users WHERE email='$email';";
if ($conn->query($sql)->rowCount() == 0) {
    header("Location: http://localhost/advimg/signin.php");
} else {
    foreach ($conn->query($sql) as $result) {
        if ($result['password'] === $pass and $result['role_id'] === 1) {
            session_start();
            $_SESSION['id'] = $result['user_id'];
            header("Location: http://localhost/advimg/welcome.php?role=admin");
        } else if ($result['password'] === $pass and $result['role_id'] === 2) {
            session_start();
            $_SESSION['id'] = $result['user_id'];
            header("Location: http://localhost/advimg/welcome.php?role=user");
        } else {
            header("Location: http://localhost/advimg/signin.php");
        }
    }
}
