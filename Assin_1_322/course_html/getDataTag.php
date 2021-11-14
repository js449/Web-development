<?php

require_once('homedbconnect.php');

//The Sql Query
$query = "select * from events where tagged = 0";
    $result = $con->query($query);

   
if($result != false){
while($row = $result->fetch()){
  $id = $row["id"];
  echo("<fieldset>");
  echo("<h1>".'Event Details'."</h1>");
  echo("<h3>".'Event Name: '.$row["name"]."</h3>");
  echo("<h3>".'Category: '.$row["category"]."</h3>");
  echo("<h3>".'Day: '.$row["day"]."</h3>");
  echo("<h3>".'Time: '.$row["time"]."</h3>");
  echo("<h3>".'Cost: '.$row["cost"]."</h3>");
  echo("<h3>".'Location: '.$row["location"]."</h3>");
  echo("<button onclick = addTag($id)>Add Tag");
    

  echo("</fieldset>");
   
 }

}
 
 ?>