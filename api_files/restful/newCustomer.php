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
?>