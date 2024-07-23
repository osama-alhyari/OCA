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
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div class="col-sm-6">
                        <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">

                <?php

                include('config.php');
                session_start();
                if (!isset($_SESSION['id'])) {
                    header("Location: http://localhost/advimg/signup.php");
                }
                if (isset($_GET['role'])) {
                    if ($_GET['role'] === 'user') {
                        echo "<thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>";
                        $id = $_SESSION['id'];
                        foreach ($conn->query("SELECT username, email FROM users WHERE user_id=$id;") as $row) {
                            echo "<tr>
                            <td>" . $row['username'] . "</td>
                            <td>" . $row['email'] . "</td>
                            </tr>";
                        }
                        echo "</tbody>";
                    } else if ($_GET['role'] === 'admin') {
                        $id = $_SESSION['id'];
                        foreach ($conn->query("SELECT * FROM users WHERE user_id = $id;") as $row) {
                            if ($row['role_id'] !== 1) {
                                header("Location: http://localhost/advimg/signin.php");
                            }
                        }
                        echo "<thead>
                    <tr>
                        <th>ID</th>
                        <th>User Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date Created</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>";
                        foreach ($conn->query("SELECT * FROM users;") as $row) {
                            echo "<tr>
                    <td>" . $row['user_id'] . "</td>
                    <td><img src='http://localhost/advimg/getimagebyid.php?id=" . $row['user_id'] . "' width='50px' height='50px'></td>
                    <td>" . $row['username'] . "</td>
                    <td>" . $row['email'] . "</td>
                    <td>" . $row['date_created'] . "</td>
                    <td>" . $row['phone'] . "</td>
                    <td>
                        <i onclick='edit(" . $row['user_id'] . ")' class='actionss material-icons' data-toggle='tooltip' title='Edit'>&#xE254;</i>
						<br>
                        <i onclick='deletee(" . $row['user_id'] . ") ' class='actionss material-icons' data-toggle='tooltip' title='Delete'>&#xE872;</i>
						<br>
						<i onclick='view(" . $row['user_id'] . ")' class='actionss material-icons' data-toggle='tooltip' title='View'>&#xE8f4;</i>
                    </td>
                    </tr>";
                        }
                        echo "</tbody>";
                    }
                }
                $conn = null;

                ?>
                </tbody>
            </table>
        </div>
    </div>
    <!-- Edit Modal HTML -->
    <div id="addEmployeeModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form method="post" action="insert.php">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Employee</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" name="name" required>
                        </div>
                        <div class="form-group">
                            <label>Address</label>
                            <input type="text" class="form-control" name="address" required></input>
                        </div>
                        <div class="form-group">
                            <label>Salary</label>
                            <input type="number" class="form-control" name="salary" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                        <input type="submit" class="btn btn-success" value="Add">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Edit Modal HTML -->
    <div id="editEmployeeModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Employee</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label>Address</label>
                            <textarea class="form-control" required></textarea>
                        </div>
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="text" class="form-control" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                        <input type="submit" class="btn btn-info" value="Save">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Delete Modal HTML -->
    <div id="deleteEmployeeModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <h4 class="modal-title">Delete Employee</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete these Records?</p>
                        <p class="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                        <input type="submit" class="btn btn-danger" value="Delete">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script>
        function edit(num) {
            window.location = `http://localhost/advimg/edit.php?id=${num}`;
        }

        function view(num) {
            window.location = `http://localhost/PDO/view.php?id=${num}`;
        }

        function deletee(num) {
            window.location = `http://localhost/PDO/delete.php?id=${num}`;
        }
    </script>
</body>

</html>