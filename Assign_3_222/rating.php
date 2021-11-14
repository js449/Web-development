<?php
$url=$_GET["url"];
$_SESSION["img"]=$url;
$label=$_GET["label"];
$id=$_GET["id"];

if(isset($_POST["submit"]))
{
    $r=$_POST["rate"];
    $c=$_POST["cmnt"];
$rss = simplexml_load_file('data.xml');

foreach ($rss->children() as $img)
{

    $url=$img->id;
    
    if($url==$id)
    {
        $img->comment=$c;
        $img->rating=$r;
    }
}
    file_put_contents("data.xml",$rss->saveXML());
 
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Pet Planet</title>
<meta charset="utf-8">
<link rel="stylesheet" href="css/style.css" >
    <style type="text/css">
    .txtpad
{
    padding: 10px 25px;
    color: #393838;
}
        .txtbox
{
    padding: 5px 10px;
    width: 220px;
}
    </style>
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
<table width="543" border="1" style="margin: auto; border: 0px solid #343333">
  <tbody>
    <tr>
      <td height="192" align="center" valign="middle"><img src="<?php echo $_SESSION["img"]; ?>"></td>
    </tr>
    <tr>
      <td height="205" align="center" valign="middle" >
        <form id="form1" name="form1" method="post" action="">
            <table width="100%" border="0" style="margin: auto;">
        <tbody>
          <tr>
            <td width="75" height="21" valign="middle" class="txtpad">Rating</td>
            <td width="181" valign="middle" class="txtpad">
              <select name="rate" class="txtbox" id="select" required>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select></td>
          </tr>
          <tr>
            <td height="93" valign="middle" class="txtpad">Comment</td>
            <td valign="middle" class="txtpad">
              <textarea name="cmnt" rows="6" id="textarea" class="txtbox" required></textarea></td>
          </tr>
          <tr>
            <td height="43" class="txtpad">&nbsp;</td>
            <td class="txtpad"><input name="submit" type="submit" class="button" id="submit" value="Submit"></td>
          </tr>
        </tbody>
      </table>
      </form></td>
    </tr>
  </tbody>
</table>
    <!------------------------------------->
  </div>
</section>
    <br><br>
<!-- Footer -->
</body>
</html>
