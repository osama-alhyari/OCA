<?php
include('../config.php');
function UpdateExam($e, $path)
{
    $exam = json_decode($e);
    $exam = get_object_vars($exam);
    $pathParts = explode('/', $path);
    $exam_id = end($pathParts);
    global $conn;
    $max = $exam['max'];
    $date = $exam['date'];
    $subject_id = $exam['subject_id'];
    $conn->exec("UPDATE exams SET max_score='$max' , exam_date='$date' , subject_id='$subject_id' WHERE exam_id='$exam_id'");
    foreach ($conn->query("SELECT * FROM exams WHERE exam_id=$exam_id;") as $result); {
        echo json_encode($result, true);
    }
}
