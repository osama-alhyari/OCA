<?php
$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['PHP_SELF'];
$student = file_get_contents('php://input');

if ($method === "POST") {
    include('studentControllers/createstudent.php');
    CreateStudent($student);
} elseif ($method === "PUT") {
    include('studentControllers/updatestudent.php');
    UpdateStudent($student, $path);
} elseif ($method === "DELETE") {
    include('studentControllers/deletestudent.php');
    DeleteStudent($path);
} elseif ($method === "GET") {
    include('studentControllers/getstudents.php');
    GetStudents($path);
}
