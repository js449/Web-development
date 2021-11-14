<?php
require_once('homedbconnect.php');

$eachDetail = $_POST["getValue"];

$query = "select * from events where id='".$eachDetail."'";

//echo $query;
//get the category data that was socket_send

$result = $con->query($query);

if($result != false){

  while($row = $result->fetch()){
      
      echo("<fieldset>");
      echo("<h3>".'Event Name: '.$row["name"]."</h3>");
      echo("<h3>".'Category: '.$row["category"]."</h3>");
      echo("<h3>".'Day: '.$row["month"]."</h3>");
      echo("<h3>".'Day: '.$row["day"]."</h3>");
      echo("<h3>".'Time: '.$row["time"]."</h3>");
      echo("<h3>".'Cost: '.$row["cost"]."</h3>");
      echo("<h3>".'Location: '.$row["location"]."</h3>");
       echo("</fieldset>");
    

        
  }
}

?>



