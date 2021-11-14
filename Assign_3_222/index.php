<?php
$rss = simplexml_load_file('data.xml');
$selected_cat = "Please select";
if (isset($_GET['selected_cat'])) {
    $selected_cat = $_GET["selected_cat"];
}

function simpleXmlToArray($rss)
{
    $array = [];
    $c = 0;
    foreach ($rss->children() as $node) {
        if (array_key_exists("$node->label", $array)) {
            array_push($array["$node->label"], $node);
        } else {
            $xyz = array();

            array_push($xyz, $node);
            $array["$node->label"] =   $xyz;
        }
    }

    return $array;
}
$ar = simpleXmlToArray($rss);
$all_labels = array_keys($ar);

?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Pet Planet</title>
<meta charset="utf-8">
<link rel="stylesheet" href="css/style.css">
<script>
        function selectCat() {
            var x = document.getElementById("cat").value;
            let location = window.location.href;
            if (location.includes("selected_cat")) {

                location = location.split('?')[0];
            }
            window.location.href = location + "?selected_cat=" + x;
        }
    </script>
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
    <form name="abc">
        <select name="cat" id="cat" onchange="selectCat()">
            <option>Please select</option>
            <?php

            foreach ($all_labels as $label) {
                if ($selected_cat ==  $label) {
                    echo "<option selected> $label</option>";
                } else {
                    echo "<option> $label</option>";
                }
            }
            ?>

        </select>
    </form>
<br>

    <?php
    echo "<table border='0' align='center' cellpadding='0'>";
    $counter = 1;
    shuffle($all_labels);
    if ($selected_cat == "Please select") {
        foreach ($all_labels as $label) {
            shuffle($ar[$label]);
            foreach ($ar[$label] as $imageCat) {
                if ($counter == 1) {
                    echo "<tr>";
                }
                echo "<td><a href='rating.php?url=$imageCat->url&label=$imageCat->label&id=$imageCat->id'><div><img src='$imageCat->url' width='220' height='220'></div><div>$imageCat->label</div></a></td>";

                if ($counter == 4) {

                    echo "</tr>";
                    $counter = 1;
                } else {
                    $counter = $counter + 1;
                }
            }
        }
    } else {
        // print_r($selected_cat);
        shuffle($ar[$selected_cat]);
        foreach ($ar[$selected_cat] as $imageCat) {
            if ($counter == 1) {
                echo "<tr>";
            }
            echo "<td><a href='rating.php?url=$imageCat->url&label=$imageCat->label&id=$imageCat->id'><div><img src='$imageCat->url' width='250' height='250'></div><div>$imageCat->label</div></a></td>";

            if ($counter == 4) {

                echo "</tr>";
                $counter = 1;
            } else {
                $counter = $counter + 1;
            }
        }
    }

    echo "</table>";

    ?>
   <!------------------------------------ ->
  </div>
</section><br><br>
<!-- Footer -->
</body>
</html>
