<?php
$cookie_name = "user";
// setcookie($cookie_name ,"samer", time() +(86400 + 3600),"/","http://127.0.0.1/PHP%20tasks/super%20global%20var/index.php?listItem=",false,true );

setcookie($cookie_name, "", time() - 1, "/");


setcookie($cookie_name, "samer", time() + 3600, "/");
