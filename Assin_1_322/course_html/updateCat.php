<?php
require_once('homedbconnect.php');

//get the category data that was socket_send
$cat = $_POST["category"];

//The Sql Query
$query = "select * from events where category ='".$cat."'";

$result = $con->query($query);

if($result != FALSE){

  while($row = $result->fetch()){
   echo $row['name'] . " ";
   echo "<br>";
  }
}
