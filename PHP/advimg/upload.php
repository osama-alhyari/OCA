<?php
$servername = "localhost";
$username = "root";
$password = "";
$port = 3307;
$dbname = "test";
// try {
//     $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
//     // set the PDO error mode to exception
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     $sql = "INSERT INTO images VALUES LOADFILE('$img');";
//     // use exec() because no results are returned
//     $conn->exec($sql);
// } catch (PDOException $e) {
//     echo $sql . "<br>" . $e->getMessage();
// }

// $conn = null;

$msg = ""; // check if the user has clicked the button "UPLOAD"
if (isset($_POST['uploadfile'])) {
    $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
    $image = $_FILES['image']['tmp_name'];
    $imgContent = addslashes(file_get_contents($image));
    $imgType = $_FILES['image']['type'];
    $sql = "INSERT INTO images (image_data, image_type) VALUES ('$imgContent', '$imgType')";
    if ($conn->exec($sql) === TRUE) {
        echo "Image uploaded successfully.";
    }
}
$conn = null;
