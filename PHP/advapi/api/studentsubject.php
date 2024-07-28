<?php
$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['PHP_SELF'];
$body = file_get_contents('php://input');

if ($method === "POST") {
    include('studentsubjectControllers/registerstudentsubject.php');
    Register($body);
}
