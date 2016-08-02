<?php require __DIR__."/functions/function.php"; ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Unilorn.com</title>
    <?php head_home(); ?>
    <link rel="stylesheet" href="styles/home.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
    <?php
    $ua = $_SERVER['HTTP_USER_AGENT'];
    $terminal = ['iPhone','iPod','Android'];
    $flug = 0;

    for ($i = 0;$i < 3 ;$i++){
      if (strpos($ua,$terminal[$i])!==false){ $flug = 1;}
    }
    if ($flug == 0){ require __DIR__."/views/home.php"; }
    else { require __DIR__."/sp/home.php"; }
    ?>
  </body>
</html>
