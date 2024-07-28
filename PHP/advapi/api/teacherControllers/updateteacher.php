<?php
include('../config.php');
function UpdateTeacher($t, $path)
{
    $teacher = json_decode($t);
    $teacher = get_object_vars($teacher);
    $pathParts = explode('/', $path);
    $teacher_id = end($pathParts);
    global $conn;
    $name = $teacher['name'];
    $subject_id = $teacher['subject_id'];
    $phone = $teacher['phone'];
    $conn->exec("UPDATE teachers SET teacher_name='$name' , subject_id='$subject_id', phone='$phone' WHERE teacher_id='$teacher_id'");
    foreach ($conn->query("SELECT * FROM teachers WHERE teacher_id=$teacher_id;") as $result); {
        echo json_encode($result, true);
    }
}
