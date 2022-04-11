<?php
include 'databasebuilder.php';
include 'connection.php';
$q = $_REQUEST["q"];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


$sql = "INSERT INTO questions (Question)
VALUES ('$q')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
}
else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>