<?php
include('../config.php');
function CreateExam($e)
{
    $exam = json_decode($e);
    $exam = get_object_vars($exam);
    global $conn;
    $max = $exam['max'];
    $date = $exam['date'];
    $subject_id = $exam['subject_id'];
    $conn->exec("INSERT INTO exams(max_score, exam_date, subject_id) VALUES ('$max', '$date' , '$subject_id');");
    $last_id = $conn->lastInsertId();
    foreach ($conn->query("SELECT * FROM exams WHERE exam_id=$last_id;") as $result); {
        echo json_encode($result, true);
    }
}
