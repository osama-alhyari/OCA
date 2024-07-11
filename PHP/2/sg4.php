<?php

echo "<form method='POST'>
<input type='text' name='listItem'>
<button type='submit' >add</button>
</form>";


session_start();
if (!array_key_exists("list", $_SESSION)) {
  $_SESSION['list'] = array();
}
if (array_key_exists('listItem', $_POST)) {
  $task = $_POST['listItem'];
  if ($_POST['listItem'] !== "") array_push($_SESSION['list'], $task);
  header("Location: " . "http://localhost/hello/sg4.php");
}
$toDoList = $_SESSION['list'];
print_r($_SESSION['list']);
echo "<div>";
echo "<ul>";
if (count($toDoList) !== 0)
  for ($i = 0; $i < count($toDoList); $i++) {
    echo "<li>$toDoList[$i]</li>";
  }
echo "</ul>";
echo "</div>";
unset($_POST);
// session_unset();

// // destroy the session
// session_destroy();
