<?php

try {
  $con = new PDO("mysql:host=localhost;dbname=js449", "root","my11206940sql");

} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>