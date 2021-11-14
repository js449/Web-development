<?php

require_once('homedbconnect.php');
//The Sql Query
$query = "select * from events";
$result = $con->query($query);
   
if($result != false){
while($row = $result->fetch()){
  $id = $row["id"];
  echo("<li id = $id onClick =display($id)>".$row['name']."</li>");
   echo "<br>";
   
 }

}
 
 ?>



