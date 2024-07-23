<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap CRUD Data Table for Database with Modal Form</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="welcome.css">
</head>

<body>
    <div class="container">
        <div class="table-wrapper">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    include('config.php');
                    $id = $_GET['id'];
                    $sql = "SELECT * FROM users WHERE user_id = $id;";
                    foreach ($conn->query($sql) as $row) {
                        echo "<tr>
								<td> <input type='text' name='name' id='name' value='" . $row['username'] . "'></td>
								<td> <input type='text' name='email' id='email' value='" . $row['email'] . "'></td>
								<td> <input type='text' name='pass' id='pass' value='" . $row['password'] . "'></td>
                                <td> <input type='text' name='phone' id='phone' value='" . $row['phone'] . "'></td>
                                <td> <button id='btnnnn' type='button' class='btn btn-primary onclick='updatee(" . $row['user_id'] . ")'>Update Record</button></td>
								</tr>";
                    }

                    ?>
                </tbody>
            </table>
        </div>
    </div>
    <script>
        function updatee() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            window.location = `http://localhost/advimg/update.php?id=${urlParams.get('id')}&name=${document.querySelector("#username").value}&email=${document.querySelector("#email").value}&password=${document.querySelector("#password").value}&phone=${document.querySelector("#phone")}`;
        }
    </script>
</body>

</html>