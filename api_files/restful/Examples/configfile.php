<?php

// Credentials
$dbhost = '';
$dbhost = '';
$dbhost = '';
$dbhost = '';


// 1. Create a database connection
$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// 2. Perform database query
$query = "SELECT * FROM subjects ";
$result_set = mysqli_query($connection, $query);

// 3. Use returned data
while($subject = mysqli_fetch_assoc($result_set)) {
    echo $subject["menu_name"] . "<br />";
};

// 4. Release returned data
mysqli_free_result($result_set);

// 5. Close database connection
mysqli_close($connection);


// Functions

function getRoutes(){
    $query = "SELECT * FROM tblRoutes";
    $result_set = mysqli_query($connection, $query);
    echo json_encode($result_set);
}

function getEmployees(){
    $strQuery = "SELECT * FROM tblEmployees";
    $arrEmployees = mysqli_query($connection, $strQuery);
    echo json_encode($result_set);
}

function getVans(){
    $strQuery = "SELECT * FROM tblVans";
    $result_set = mysqli_query($connection, $strQuery);
    echo json_encode($result_set);
}

function getStops(){
    $strQuery = "SELECT * FROM tblStops";
    $result_set = mysqli_query($connection, $strQuery);
    echo json_encode($result_set);
}

function getAdmins(){
    $strQuery = "SELECT * FROM tblAdmins";
    $result_set = mysqli_query($connection, $strQuery);
    echo json_encode($result_set);
}

function getCustomers(){
    $strQuery = "SELECT * FROM tblCustomers";
    $result_set = mysqli_query($connection, $strQuery);
    echo json_encode($result_set);
}


function verifyAdmin($strEmpEmail, $strAdminPass){
    $strQueryEmail = "SELECT Emp_Email FROM tblEmployees WHERE tblEmployees.Emp_Email = ? AND Admin_Password = ?";
    $strQueryPassword = "SELECT Admin_Password FROM tblEmployees WHERE tblEmployees.Emp_Email = ? AND Admin_Password = ?";
    $result_set_Email = mysqli_query($connection, $strQueryEmail);
    $result_set_Pass = mysqli_query($connection, $strQueryPass);
    if ($result_set_Email == $strEmpEmail and $result_set_Pass == $strAdminPass){
        
    }
}


?>