<?php
include('../config.php');
function CreateSubject($s)
{
    $subject = json_decode($s);
    $subject = get_object_vars($subject);
    global $conn;
    $name = $subject['name'];
    $description = $subject['description'];
    $conn->exec("INSERT INTO subjects(subject_name, description) VALUES ('$name', '$description');");
    $last_id = $conn->lastInsertId();
    foreach ($conn->query("SELECT * FROM subjects WHERE subject_id=$last_id;") as $result); {
        echo json_encode($result, true);
    }
}
