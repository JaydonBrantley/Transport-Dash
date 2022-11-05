<?php
    require('config.php'); 
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $strUsername = $_POST['Email'];
        $strPassword = $_POST['Password'];
        $strUsername = strip_tags($strUsername);
        $strPassword = strip_tags($strPassword);
        //echo addSession($strUsername, $strPassword);
        echo verifyAdmin($strUsername, $strPassword);
    }
    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $put_vars;
        parse_str(file_get_contents("php://input"),$put_vars);
        $sessionID = $put_vars['SessionID'];
        $sessionID = strip_tags($sessionID);
        echo updateSession($sessionID);
    }
    if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        $delete_vars;
        parse_str(file_get_contents("php://input"),$delete_vars);
        $sessionID = $delete_vars['SessionID'];
        $sessionID = strip_tags($sessionID);
        echo deleteSession($sessionID);
    }
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $sessionID = $_GET['SessionID'];
        $sessionID = strip_tags($sessionID);
        echo getSessionInfo($sessionID);
    }
?>