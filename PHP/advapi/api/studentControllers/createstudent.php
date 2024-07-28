<?php
include('../config.php');
function CreateStudent($s)
{
    $student = json_decode($s);
    $student = get_object_vars($student);
    global $conn;
    $name = $student['name'];
    $class = $student['class'];
    $dob = $student['dob'];
    $address = $student['address'];
    $phone = $student['phone'];
    $conn->exec("INSERT INTO students(student_name, class, dob, address, phone) VALUES ('$name', '$class' , '$dob', '$address' , '$phone');");
    $last_id = $conn->lastInsertId();
    foreach ($conn->query("SELECT * FROM students WHERE student_id=$last_id;") as $result); {
        echo json_encode($result, true);
    }
}
