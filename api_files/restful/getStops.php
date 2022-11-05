<?php
    require('config.php'); 
    
    $strRouteID = $_GET['strRouteID'];
    $strRouteID = strip_tags($strRouteID);

    echo getStops($strRouteID);

?>