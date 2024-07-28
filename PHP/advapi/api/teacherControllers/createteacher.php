<?php
include('../config.php');
function CreateTeacher($t)
{
    $teacher = json_decode($t);
    $teacher = get_object_vars($teacher);
    global $conn;
    $name = $teacher['name'];
    $subject_id = $teacher['subject_id'];
    $phone = $teacher['phone'];
    $conn->exec("INSERT INTO teachers(teacher_name, subject_id, phone) VALUES ('$name', '$subject_id' , '$phone');");
    $last_id = $conn->lastInsertId();
    foreach ($conn->query("SELECT * FROM teachers WHERE teacher_id=$last_id;") as $result); {
        echo json_encode($result, true);
    }
}
