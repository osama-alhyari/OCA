<!DOCTYPE html>
<html>

<head>
    <title>Image Upload in PHP</title>
    <! link the css file to style the form>
        <link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body>
    <div id="wrapper">
        <h1>Sign Up Form</h1>
        <form method="POST" action="addusertodb.php" enctype="multipart/form-data">
            <input type="file" name="image" value="" required />
            <br>
            Username : <input type="text" name="username" id="username" onkeyup="validateInputs()">
            <br>
            Email: <input type="text" id="email" name="email" onkeyup="validateInputs()">
            <br>
            Password: <input type="text" id="password" name="pass" onkeyup="validateInputs()">
            <br>
            Confirm Password: <input type="text" id="confirm" name="confirm" onkeyup="validateInputs()">
            <br>
            Phone: <input type="text" id="phone" name="phone" onkeyup="validateInputs()">
            <br>
            <div> <button type="submit" name="uploadfile" id="submit" disabled> Sign Up </button></div>
        </form>
    </div>
    <script>
        function validateInputs() {
            const errors = [];
            const username = document.querySelector("#username").value
            const email = document.querySelector("#email").value
            const password = document.querySelector("#password").value
            const phoneNumber = document.querySelector("#phone").value
            const confirm = document.querySelector("#confirm").value


            // Validate username: should be 4 parts space separated and does not include numbers or special characters
            const usernameParts = username.trim().split(' ');
            const usernamePattern = /^[A-Za-z]+$/;
            if (usernameParts.length !== 4 || !usernameParts.every(part => usernamePattern.test(part))) {
                errors.push('Username should be 4 parts space-separated and not include numbers or special characters.');
            }

            if (confirm !== password) {
                errors.push('confirm bad');
            }

            // Validate email: should be a valid email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                errors.push('Email should be a valid email address.');
            }

            // Validate password: should be at least 8 characters and include special characters, numbers, upper and lowercase letters
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordPattern.test(password)) {
                errors.push('Password should be at least 8 characters long and include special characters, numbers, upper case and lower case letters.');
            }

            // Validate phone number: should be 10 numeric numbers
            const phoneNumberPattern = /^\d{10}$/;
            if (!phoneNumberPattern.test(phoneNumber)) {
                errors.push('Phone number should be 10 numeric numbers.');
            }

            if (errors.length > 0) {
                document.querySelector("#submit").disabled = true;
            } else {
                document.querySelector("#submit").disabled = false;
            }
        }
    </script>
</body>

</html>