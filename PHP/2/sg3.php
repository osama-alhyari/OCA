<?php

switch ($_POST["operation"]) {
    case "add":
        echo $_POST["first"] + $_POST["second"];
        break;
    case "sub":
        echo $_POST["first"] - $_POST["second"];
        break;
    case "mul":
        echo $_POST["first"] * $_POST["second"];
        break;
    case "div":
        echo ($_POST["second"] === 0) ? "cant divide by zero" : $_POST["first"] / $_POST["second"];
        break;
}
