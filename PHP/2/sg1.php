<?php

// echo (count($_GET) === 0) ?  "sent using post method" : "sent using get method";

if (count($_GET) === 0) {
    echo "sent using post method";
} else {
    echo "sent using get method";
}
