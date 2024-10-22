<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '', 'grill_in_hill');

if (!$con) {
    die("Failed to connect with database: " . mysqli_connect_error());
}

// get the post records
$tablename = "cart_details";

// database insert SQL code
$sql = "INSERT INTO $tablename (Cartnumber, Cartholder, Exmonth, Exyear, cvv)
        VALUES ('$_POST[cardnumber]', '$_POST[cardholder]', '$_POST[month]', '$_POST[year]', '$_POST[cvv]')";

// insert in database
$rs = mysqli_query($con, $sql);

if ($rs) {
    echo "Contact Records Inserted";
    //header("Location: index.html");
} else {
    echo "Error: " . mysqli_error($con);
}


// close connection
mysqli_close($con);
?>