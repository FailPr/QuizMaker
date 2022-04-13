<?php
include 'databasebuilder.php';
include 'connection.php';

$Helper = $_POST['Helper'];
$Info = $_POST['Info'];

if ($Helper == "Send") 
{
    $conn = new mysqli($servername, $username, $password, $dbname);

    $sql = "INSERT INTO questions (Question)
    VALUES ('$Info')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("a" => 'New record created successfully'));
    }
    else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

?>