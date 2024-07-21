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
    <link rel="stylesheet" href="home.css">
</head>

<body>
    <div class="container">
        <div class="table-wrapper">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Salary</th>
                        <th>Edit Details</th>
                    </tr>
                </thead>
                <tbody>
                    <?php

                    $id = $_GET['id'];
                    $servername = "localhost";
                    $username = "root";
                    $password = "";
                    $port = 3307;
                    $dbname = "employees";
                    try {
                        $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        $sql = "SELECT * FROM employees WHERE id = $id;";
                        foreach ($conn->query($sql) as $row) {
                            echo "<tr>
								<td> <input type='text' name='name' id='name' value='" . $row['name'] . "'></td>
								<td> <input type='text' name='address' id='address' value='" . $row['address'] . "'></td>
								<td> <input type='text' name='salary' id='salary' value='" . $row['salary'] . "'></td>
                                <td> <button id='btnnnn' type='button' class='btn btn-primary onclick='update(" . $row['id'] . ")'>Update Record</button></td>
								</tr>";
                        }
                    } catch (PDOException $e) {
                        echo $sql . "<br>" . $e->getMessage();
                    }

                    $conn = null;
                    ?>
                </tbody>
            </table>
        </div>
    </div>
    <script>
        document.querySelector("#btnnnn").addEventListener("click", function() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            window.location = `http://localhost/PDO/update.php?id=${urlParams.get('id')}&name=${document.querySelector("#name").value}&address=${document.querySelector("#address").value}&salary=${document.querySelector("#salary").value}`;
        })
    </script>
</body>

</html>