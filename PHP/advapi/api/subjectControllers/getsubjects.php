<?php

include('../config.php');

function GetSubjects($path)
{
    global $conn;
    $pathParts = explode('/', $path);
    $subject_id = end($pathParts);
    if ($subject_id === "subjects.php") {
        $sql = "SELECT * FROM subjects;";
    } else {
        $toFetch = $pathParts[count($pathParts) - 2];
        if ($toFetch === "students") {
            $sql = "SELECT subjects.subject_name as subject , students.student_name as student , students.class as class FROM ((students JOIN students_subjects ON students.student_id = students_subjects.student_id)   JOIN subjects ON subjects.subject_id = students_subjects.subject_id)
WHERE subjects.subject_id = '$subject_id';";
        } else if ($toFetch === "subjects.php") {
            $sql = "SELECT * FROM subjects WHERE subject_id='$subject_id';";
        } else {
            echo "error bbg";
            return;
        }
    }


    $result = $conn->prepare($sql);
    $result->execute();
    $result = $result->fetchAll();
    echo json_encode($result);
}
