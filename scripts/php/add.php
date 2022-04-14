<?php
include 'databasebuilder.php';
include 'connection.php';

$Helper = $_POST['Helper'];
$Info = $_POST['Info'];
$Info = json_encode($Info);
if ($Helper == "Send") 
{
    $conn = new mysqli($servername, $username, $password, $dbname);

    $encode = $conn->real_escape_string($Info);

    $sql = "INSERT INTO questions (Question)
    VALUES ('$encode')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("a" => 'New record created successfully'));
    }
    else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
