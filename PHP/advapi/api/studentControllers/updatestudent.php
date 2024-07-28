<?php
include('../config.php');
function UpdateStudent($s, $path)
{
    $student = json_decode($s);
    $student = get_object_vars($student);
    $pathParts = explode('/', $path);
    $student_id = end($pathParts);
    global $conn;
    $name = $student['name'];
    $class = $student['class'];
    $dob = $student['dob'];
    $address = $student['address'];
    $phone = $student['phone'];
    $conn->exec("UPDATE students SET student_name='$name',class='$class',dob='$dob',address='$address',phone='$phone' WHERE student_id='$student_id';");
    foreach ($conn->query("SELECT * FROM students WHERE student_id='$student_id';") as $result) {
        echo json_encode($result, true);
    }
}
