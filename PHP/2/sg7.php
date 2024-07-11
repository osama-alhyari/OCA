<?php

session_set_cookie_params(0);
session_start();

(array_key_exists('refresh', $_SESSION)) ? $_SESSION['refresh'] += 1 : $_SESSION['refresh'] = 1;

echo $_SESSION['refresh'];

// session_start();

// if (!isset($_SESSION["refreshed_round"])) {
//     $_SESSION["refreshed_round"] = 0;
// }

// $_SESSION["refreshed_round"]++;

// session_write_close();


// echo "User refreshed: " . $_SESSION["refreshed_round"];

// echo "<br>";
// echo "<br>";
