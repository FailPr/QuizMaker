<?php
include 'databasebuilder.php';
include 'connection.php';
function select_from_db_questions()
{
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "quiz_game";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT id FROM questions";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            echo "<option value=" . $row["id"] . ">" . $row["id"] . "</option>";
        }
    }
    else {
        echo "0 results";
    }
    $conn->close();
}

$Helper = $_POST['Helper'];
$Info = $_POST['Info'];
if ($Helper == "Send") 
{
    $conn = new mysqli($servername, $username, $password, $dbname);
    $sql = "SELECT question FROM questions WHERE id='$Info'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            echo json_encode(array("a" => $row["question"]));
        }
    }
    else {
        echo json_encode(array("a" => 'Error'));
    }
    $conn->close();
}

?>