<?php

include('../config.php');

function GetStudents($path)
{
    global $conn;
    $pathParts = explode('/', $path);
    $student_id = end($pathParts);
    if ($student_id === "students.php") {
        $sql = "SELECT * FROM students;";
    } else {
        $toFetch = $pathParts[count($pathParts) - 2];
        if ($toFetch === "subjects") {
            $sql = "SELECT students.student_name as student , subjects.subject_name as subject , subjects.description as description FROM ((students JOIN students_subjects ON students.student_id = students_subjects.student_id)   JOIN subjects ON subjects.subject_id = students_subjects.subject_id)
WHERE students.student_id = '$student_id';";
        } else if ($toFetch === "students.php") {
            $sql = "SELECT * FROM students WHERE student_id='$student_id';";
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
