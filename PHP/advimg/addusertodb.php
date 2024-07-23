<?php
include('config.php');

$msg = ""; // check if the user has clicked the button "UPLOAD"
if (isset($_POST['uploadfile'])) {
    $image = $_FILES['image']['tmp_name'];
    $imgContent = addslashes(file_get_contents($image));
    $imgType = $_FILES['image']['type'];
    $errors = [];

    $username = $_POST['username'];
    $usernameParts = preg_split('/\s+/', trim($username));
    $usernamePattern = '/^[A-Za-z]+$/';
    if (count($usernameParts) !== 4 || !array_reduce($usernameParts, function ($carry, $part) use ($usernamePattern) {
        return $carry && preg_match($usernamePattern, $part);
    }, true)) {
        $errors[] = 'Username should be 4 parts space-separated and not include numbers or special characters.';
    }

    $pass = $_POST['pass'];
    $passPattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/";
    if (preg_match($passPattern, $pass) == 0) {
        $errors[] = 'bad pass';
    }

    $confirm = $_POST['confirm'];
    if ($confirm !== $pass) {
        $errors[] = 'bad confirm';
    }


    $email = $_POST['email'];
    $emailPattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
    if (preg_match($emailPattern, $email) == 0) {
        $errors[] = 'bad email';
    }

    $phone = $_POST['phone'];
    $phoneNumberPattern = '/^\d{10}$/';
    if (!preg_match($phoneNumberPattern, $phone)) {
        $errors[] = 'Phone number should be 10 numeric numbers.';
    }

    if (empty($errors)) {
        $sql = "SELECT * FROM users WHERE email='$email';";
        if (($conn->query($sql))->rowCount() == 0) {
            header("Location: http://localhost/advimg/signup.php");
        }
        $sql = "INSERT INTO users (username, password, email, date_created, phone, role_id, image_data, image_type) VALUES ('$username', '$pass', '$email', CURDATE() ,'$phone', '2','$imgContent', '$imgType')";
        if ($conn->exec($sql) === TRUE) {
            echo "Image uploaded successfully.";
        }
    } else {
        header("Location: http://localhost/advimg/signup.php");
    }
}



session_start();
$_SESSION['id'] = $conn->lastInsertId();
$conn = null;
header("Location: http://localhost/advimg/welcome.php?role=user");
