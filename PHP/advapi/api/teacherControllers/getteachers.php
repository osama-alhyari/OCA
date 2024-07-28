<?php

include('../config.php');

function GetTeachers($path)
{
    global $conn;
    $pathParts = explode('/', $path);
    $teacher_id = end($pathParts);
    if ($teacher_id === "teachers.php") {
        $sql = "SELECT * FROM teachers;";
    } else {
        $sql = "SELECT * FROM teachers WHERE teacher_id='$teacher_id';";
    }


    $result = $conn->prepare($sql);
    $result->execute();
    $result = $result->fetchAll();
    echo json_encode($result);
}
