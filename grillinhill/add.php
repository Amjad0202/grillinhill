<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '', 'grill_in_hill');

if (!$con) {
    die("Failed to connect with database: " . mysqli_connect_error());
}

// get the post records
$tablename = "registration";

// database insert SQL code
$sql = "INSERT INTO $tablename
        VALUES ('$_POST[username]', '$_POST[email]', '$_POST[password]')";

// insert in database
$rs = mysqli_query($con, $sql);

if ($rs) {
    echo "Contact Records Inserted";
    header("Location: index.html");
} else {
    echo "Error: " . mysqli_error($con);
}


// close connection
mysqli_close($con);
?>