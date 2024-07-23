<?php
include('config.php');

$id = $_GET['id'];

foreach ($conn->query("SELECT * FROM users WHERE user_id=$id;") as $row) {
    header("Content-type: " . $row["image_type"]);
    echo $row["image_data"];
}

$conn = null;
