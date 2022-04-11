<?php
include 'databasebuilder.php';
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quiz_game";


$q = $_REQUEST["q"];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

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