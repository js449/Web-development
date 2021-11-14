<html>
<body>
<div>


 <?php
 
require_once('dbconnect.php');
echo "Hello world!<br>";
$query = "select * from labtest";

$result = $con->query($query);

while($row = $result->fetch()){
 echo $row['firstname'] . "<br>";
 echo $row['lastname'] . "<br>";
 
 }
 
 ?>
</div>
</body>
</html>







