<?php

function queryMySQL() {
    // Create connection
    $conn = new mysqli('db4free.net:3306', 'bbarney', 'pBCFjWbX!2.t8DD', 'persons');
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT name, age, sex FROM person";
    $result = $conn->query($sql);
    return result;
}

?>
