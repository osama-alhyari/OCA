<?php
// $servername = "localhost";
// $username = "root";
// $password = "";
// $port = 3307;
// $dbname = "phpdb2";

// try {
//     $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
//     // set the PDO error mode to exception
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     $sql = "CREATE TABLE Users (
//     id int NOT NULL AUTO_INCREMENT,
//     name varchar(255),
//     email varchar(255),
//     password varchar(255),
//     PRIMARY KEY (id)
// );";
//     // use exec() because no results are returned
//     $conn->exec($sql);
// } catch (PDOException $e) {
//     echo $sql . "<br>" . $e->getMessage();
// }

// $conn = null;
if (isset($_GET['email'])) {
    if ($_GET['email'] === 'bad') {
        echo "Enter a good email plz <br>";
    }
}
if (isset($_GET['pass'])) {
    if ($_GET['pass'] === 'bad') {
        echo "enter a better password plz<br>";
    }
}
if (isset($_GET['confirm'])) {
    if ($_GET['confirm'] === 'bad') {
        echo "passwords didnt match<br>";
    }
}
?>

<html>

<head>

</head>

<body>
    <h1>Sign Up Form</h1>
    <form method="POST" action="validator.php">
        Name : <input type="text" name="name" required>
        Email : <input type="text" name="email" required>
        Password : <input type="text" name="pass" required>
        Confirm Password : <input type="text" name="confirm" required>
        <br>
        <input type="submit" value="Sign Up">
    </form>
</body>

</html>