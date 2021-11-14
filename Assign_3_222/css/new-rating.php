<!DOCTYPE html>
<html lang="en">
<head>
<title>Pet Planet</title>
<meta charset="utf-8">
<link rel="stylesheet" href="css/style.css">
</head>
<body id="page1">
<!-- Header -->
<header>
  <div class="inner" style="padding:20px; color: #585757">
    <div><div style="float: left;"><img src="images/logo1.png"></div>
        <div style="float: right; padding: 12px 2px; font-size: 18px;"><a href="index.php">Home</a> | <a href="index.php">Reset</a> | <a href="new-rating.php">New Rating</a></div></div>
    <div class="clear"></div>
  </div>
  <div class="slider-container">
    <div class="mp-slider">
      <img src="images/slide.jpg">
    </div>
  </div>
</header>
<!-- Content -->
<section id="content">
  <div class="container_24">
   <!----------------------------------- -->
    <?php    
$rss = simplexml_load_file('data.xml');
echo "<table border='0' align='center' style='margin: auto;'>";
$counter = 1;
foreach ($rss->children() as $img)
    {
    $rtng=$img->rating;
    $cmnts=$img->comment;
    if($counter == 1 and $rtng!=0 and $cmnts!='NA'){
        echo "<tr>";
    }
    
    if($rtng!=0 and $cmnts!='NA')
    {
    echo "<td align='center' style='padding:10px 6px; color:#000000;'><div><img src='$img->url' width='220' height='220'></div><div>$img->label</div><div>Rating: $img->rating</div><div>Comment: $img->comment</div></td>";
    }
    if($counter == 5){
        echo "</tr>";
        $counter = 1;
    } else {
        if($rtng!=0 and $cmnts!='NA'){
            $counter = $counter +1; 
        }
   
    }

}
    echo "</table>";

    ?>
    <!------------------------------------->
  </div>
</section><br><br>
<!-- Footer -->
</body>
</html>
