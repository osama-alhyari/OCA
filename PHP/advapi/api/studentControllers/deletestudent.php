<?php
include('../config.php');
function DeleteStudent($path)
{
    $pathParts = explode('/', $path);
    $student_id = end($pathParts);
    global $conn;
    $conn->exec("DELETE FROM `students` WHERE student_id='$student_id';");
    echo '{"msg" : "Student has been deleted"}';
}
