<?php

require_once('homedbconnect.php');
$id = $_POST["id"];
//The Sql Query
$query = "update events set tagged = 1 where id = $id";
    $result = $con->query($query);
    $result->fetch();
    
    ?>