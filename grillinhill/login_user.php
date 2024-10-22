<?php
// Database connection parameters
$host = "localhost";
$username = "root";
$password = "";
$database = "grill_in_hill";

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user input from the form
$email = $_POST['email'];  // Assuming your form uses the 'email' field
$password = $_POST['password'];  // Assuming your form uses the 'password' field

// Hash the password (use appropriate hashing algorithm - this is just an example)
// $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Prepare SQL statement to check user credentials
$sql = "SELECT * FROM registration WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);

if (mysqli_num_rows($result)) {
    $x = $result->fetch_assoc();
    $_COOKIE['userSigned'] = "";
    setcookie("userSigned", $x['Email'], time() + 3600, "/");
    echo "Sign-in successful!";
    header("Location: index.html");
} else {
    echo "<script>
    alert('Incorrect Password. Try again!');
    //window.location.href = 'sign_in.php';
    </script>";
}

// Close the database connection
$conn->close();
