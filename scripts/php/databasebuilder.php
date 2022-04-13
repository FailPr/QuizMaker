<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = ("CREATE DATABASE IF NOT EXISTS quiz_game;");
if ($conn->query($sql) === TRUE) {
    mysqli_select_db($conn, "quiz_game");
    $sql = "CREATE TABLE IF NOT EXISTS questions (id int AUTO_INCREMENT,Question varchar(65000),PRIMARY KEY (id));";
    $conn->query($sql);
}
else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();
?>
