<?php

include('../config.php');

function GetExams($path)
{
    global $conn;
    $pathParts = explode('/', $path);
    $id = end($pathParts);
    if ($id === "exams.php") {
        $sql = "SELECT * FROM exams;";
    } else {
        $toFetch = $pathParts[count($pathParts) - 2];
        if ($toFetch === "student") {
            $student_id = $id;
            $sql = "SELECT students.student_name , subjects.subject_name, exams.exam_id FROM students JOIN students_subjects ON students.student_id = students_subjects.student_id JOIN subjects ON students_subjects.subject_id = subjects.subject_id JOIN exams ON students_subjects.subject_id = exams.subject_id WHERE students.student_id = '$student_id';";
        } else if ($toFetch === "subject") {
            $subject_id = $id;
            $sql = "SELECT subjects.subject_name, exams.exam_id FROM exams JOIN subjects ON subjects.subject_id = exams.subject_id
WHERE subjects.subject_id = '$subject_id';";
        } else if ($toFetch === "exams.php") {
            $exam_id = $id;
            $sql = "SELECT * FROM exams WHERE exam_id='$exam_id';";
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
