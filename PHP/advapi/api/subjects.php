<?php
$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['PHP_SELF'];
$subject = file_get_contents('php://input');

if ($method === "POST") {
    include('subjectControllers/createsubject.php');
    CreateSubject($subject);
} elseif ($method === "GET") {
    include('SubjectControllers/getsubjects.php');
    GetSubjects($path);
}
