<?php
include('../config.php');
function DeleteTeacher($path)
{
    $pathParts = explode('/', $path);
    $teacher_id = end($pathParts);
    global $conn;
    $conn->exec("DELETE FROM `teachers` WHERE teacher_id='$teacher_id';");
    echo '{"msg" : "Teacher has been deleted"}';
}
