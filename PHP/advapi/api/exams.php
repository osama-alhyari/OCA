<?php
$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['PHP_SELF'];
$exam = file_get_contents('php://input');

if ($method === "POST") {
    include('examControllers/createexam.php');
    CreateExam($exam);
} elseif ($method === "GET") {
    include('examControllers/getexams.php');
    GetExams($path);
} elseif ($method === "PUT") {
    include('examControllers/updateexam.php');
    UpdateExam($exam, $path);
}
