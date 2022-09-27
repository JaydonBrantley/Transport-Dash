<?php

// Credentials
$dbhost = '';
$dbhost = '';
$dbhost = '';
$dbhost = '';


// 1. Create a database connection
//$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// 2. Perform database query
//$query = "SELECT * FROM subjects ";
//$result_set = mysqli_query($connection, $query);

// 3. Use returned data
//while($subject = mysqli_fetch_assoc($result_set)) {
//    echo $subject["menu_name"] . "<br />";
//};

// 4. Release returned data
//mysqli_free_result($result_set);

// 5. Close database connection
//mysqli_close($connection);



$connection = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

// Functions

// GET Routes
function getRoutes($strRouteID){
    global $connection;
    $strQuery = "SELECT * FROM tblRoutes WHERE Route_ID = ?";

    if($connection->connect_errno) {
        $blnError = "true";
        $strErrorMessage = $connection->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }

    if($connection->ping()) {
    } else {
        $blnError = "true";
        $strErrorMessage = $connection->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }

    $conAction = $connection->prepare($strQuery);

    $conAction->bind_param('s',$strRouteID);
    $conAction->execute();
    $conAction->bind_result($result_set);
    $conAction->fetch();
    if($result_set){
        return '{"Outcome":"' .$result_set. '"}';
    } else {
        return '{"Outcome":"Data Not Found"}';
    }

    $conAction->close();

}

// GET Employees
function getEmployees(){
    $strQuery = "SELECT * FROM tblEmployees";
    $result_set = mysqli_query($connection, $strQuery);
    echo json_encode($result_set);
}

// GET Vans
function getVans(){
    global $connection;
    $strQuery = "SELECT * FROM tblVans WHERE Route_ID = ?";

    if($connection->connect_errno) {
        $blnError = "true";
        $strErrorMessage = $connection->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }

    if($connection->ping()) {
    } else {
        $blnError = "true";
        $strErrorMessage = $connection->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }

    $conAction = $connection->prepare($strQuery);

    $conAction->bind_param('s',$strRouteID);
    $conAction->execute();
    $conAction->bind_result($result_set);
    $conAction->fetch();
    if($result_set){
        return '{"Outcome":"' .$result_set. '"}';
    } else {
        return '{"Outcome":"Data Not Found"}';
    }

    $conAction->close();
}

// GET Stops
function getStops(){
    $strQuery = "SELECT * FROM tblStops";
    $result_set = mysqli_query($connection, $strQuery);
    echo json_encode($result_set);
}

// GET Admins
function getAdmins(){
    $strQuery = "SELECT * FROM tblAdmins";
    $result_set = mysqli_query($connection, $strQuery);
    echo json_encode($result_set);
}

// GET Customers
function getCustomers(){
    $strQuery = "SELECT * FROM tblCustomers";
    $result_set = mysqli_query($connection, $strQuery);
    echo json_encode($result_set);
}

// GET Points
function getPoints(){
    $strQuery = "SELECT Reward_Progress FROM tblCustomers WHERE Cell_Phone_Num = ?";
    $result_set = mysqli_query($connection, $strQuery);
    echo json_encode($result_set);
}

// GET Discount
function getDiscount(){
    $strQuery = "SELECT tblCustomers.Cell_Phone_Num, tblCustomers.Discount_Status, tblDiscount.Discount_Code, tblDiscount_Percent.Half_off, tblDiscount_Percent.Quarter_off, tblDiscount_Percent.Tenth_off, tblDiscount_Percent.Fifth_off FROM tblCustomers, tblDiscount, tblDiscount_Percent WHERE tblCustomers.Cell_Phone_Num = ? LEFT JOIN tblDiscount ON tblCustomers.Discount_Status = tblDiscount.Discount_Status LEFT JOIN tblDiscount_Percent ON tblDiscount.Discount_Code = tblDiscount_Percent.Discount_Code";
    $result_set = mysqli_query($connection, $strQuery);
    echo json_encode($result_set);

}

// VERIFY Admin Login
function verifyAdmin($strEmpEmail, $strAdminPass){
    $strQueryEmail = "SELECT Emp_Email FROM tblEmployees WHERE tblEmployees.Emp_Email = ? AND Admin_Password = ?";
    $strQueryPassword = "SELECT Admin_Password FROM tblEmployees WHERE tblEmployees.Emp_Email = ? AND Admin_Password = ?";
    $result_set_Email = mysqli_query($connection, $strQueryEmail);
    $result_set_Pass = mysqli_query($connection, $strQueryPass);
    if ($result_set_Email == $strEmpEmail and $result_set_Pass == $strAdminPass){
        
    }
}

// VERIFY Session
function verifyAdminSession($strAdminSessionID){
    $strQuery = "SELECT SessionID FROM tblCurrentSessions WHERE SessionID = ? AND StartTime >= NOW() - INTERVAL 12 HOUR";

}

// VERIFY Customer
function verifyCustomer($strCustID){
    $strQuery = "SELECT Cell_Phone_Num FROM tblCustomers WHERE Cell_Phone_Num = ?";
    $result_set = mysqli_query($connection, $strQuery);
    if($result_set == $strCustID){

    }
}

// NEW Customer
function newCustomer(){
    $strQuery = "INSERT INTO tblCustomers VALUES (?,?,?,?,?)";
    $result_set = mysqli_query($connection, $strQuery);
}

// NEW Admin
function newAdmin(){
    $strQuery = "INSERT INTO tblAdmins VALUES (?,?,?,?,?)";
    $result_set = mysqli_query($connection, $strQuery);
}





?>