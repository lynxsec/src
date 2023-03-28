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
</head>
<body>
    <h2>Login</h2>
    <?php if (isset($error)) { ?>
        <p><?php echo $error; ?></p>
    <?php } ?>
    <form method="post">
        <label>Username:</label>
        <input type="text" name="username"><br>
        <label>Password:</label>
        <input type="password" name="password"><br>
        <input type="submit" name="submit" value="Login">
    </form>
</body>
</html>
