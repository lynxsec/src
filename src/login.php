<?php
$username = "tomriddle";
$password = "Dumbledore_lied1234";

if (isset($_POST['submit'])) {
    if ($_POST['username'] == $username && $_POST['password'] == $password) {
        setcookie('authenticated', '1', time() + 3600, '/');
        header('Location: index.php');
        exit;
    } else {
        $error = "Invalid credentials.";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
    <style>
        body {
            background-color: #B0BBC4;
            max-width: 460px;
            margin: 0 auto;
            text-align: center;
            font-family: Arial, sans-serif;
        }

        h2 {
            margin-top: 30px;
            margin-bottom: 20px;
        }

        form {
            display: inline-block;
            text-align: left;
        }

        label {
            display: block;
            margin-bottom: 10px;
            font-size: large;
            font-weight: bold;
        }

        input[type=text], input[type=password] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
            border: none;
        }

        input[type=submit] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        input[type=submit]:hover {
            background-color: #3e8e41;
        }

        .error {
            color: red;
            margin-bottom: 20px;
        }

        .text {
            font-size: large;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .text span {
            color: #4CAF50;
        }
    </style>
</head>
<body>
    <h2>Login</h2>
    <?php if (isset($error)) { ?>
        <p class="error"><?php echo $error; ?></p>
    <?php } ?>
    <form method="post">
        <label>Username:</label>
        <input type="text" name="username"><br>
        <label>Password:</label>
        <input type="password" name="password"><br>
        <input type="submit" name="submit" value="Login">
    </form>
    <p class="text">I am the one who knows about the Chamber of Secrets. Login to know more.</p>
</body>
</html>
