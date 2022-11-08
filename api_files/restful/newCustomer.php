<?php
    require('config.php'); 
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $strCellNum = $_POST['CellNum'];
        $strDiscountStat = $_POST['DiscountStat'];
        $strSpecReq = $_POST['SpecReq'];
        $strAgeCat = $_POST['AgeCat'];

        $strCellNum = strip_tags($strCellNum);
        $strDiscountStat = strip_tags($strDiscountStat);
        $strSpecReq = strip_tags($strSpecReq);
        $strAgeCat = strip_tags($strAgeCat);

        echo newCustomer($strCellNum, $strDiscountStat, $strSpecReq, $strAgeCat);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $put_vars;
        parse_str(file_get_contents("php://input"),$put_vars);
        $intPrepaidRides = $put_vars['PrepaidRides'];
        $strCellNum = $put_vars['CellNum'];

        $intPrepaidRides = strip_tags($intPrepaidRides);
        $strCellNum = strip_tags($strCellNum);
        
        echo updatePrepaidRides($intPrepaidRides, $strCellNum);

    }


?>