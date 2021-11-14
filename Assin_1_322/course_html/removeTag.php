<?php
	//first connect to the database 
    require_once('homedbconnect.php');  //replace with path and name for your connection script

    //get the category data that was socket_send
$id = $_POST["id"];

//update event list
$query = "update events set tagged = 0 where id = $id";
$result = $con->query($query);
//send query data
$result->fetch();

?>