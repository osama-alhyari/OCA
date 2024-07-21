<?php
if (isset($_GET['bad'])) {
    echo "wrong credentials";
}
?>

<html>

<head>

</head>

<body>
    <h1>Log In Form</h1>
    <form action="loginaction.php" method="post">
        Email : <input type="text" name="email" required>
        Password : <input type="text" name="pass" required>
        <br>
        <input type="submit" value="Log In">
    </form>
</body>

</html>