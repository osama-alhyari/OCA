<?php
include('../config.php');
function Register($object)
{
    $body = json_decode($object);
    $body = get_object_vars($body);
    global $conn;
    $student_id = $body['student_id'];
    $subject_id = $body['subject_id'];
    $conn->exec("INSERT INTO students_subjects(registration_id, student_id, subject_id) VALUES ('$student_id" . "_$subject_id','$student_id', '$subject_id');");
    foreach ($conn->query("SELECT students.student_name as student , subjects.subject_name as subject FROM ((students JOIN students_subjects ON students.student_id = students_subjects.student_id)   JOIN subjects ON subjects.subject_id = students_subjects.subject_id)
WHERE subjects.subject_id = '$subject_id' and students.student_id = '$student_id';") as $result) {
        echo json_encode($result, true);
    }
}
