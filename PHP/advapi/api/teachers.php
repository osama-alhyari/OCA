<?php
$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['PHP_SELF'];
$teacher = file_get_contents('php://input');

if ($method === "POST") {
    include('teacherControllers/createteacher.php');
    CreateTeacher($teacher);
} elseif ($method === "PUT") {
    include('teacherControllers/updateteacher.php');
    UpdateTeacher($teacher, $path);
} elseif ($method === "DELETE") {
    include('teacherControllers/deleteteacher.php');
    DeleteTeacher($path);
} elseif ($method === "GET") {
    include('teacherControllers/getteachers.php');
    GetTeachers($path);
}
