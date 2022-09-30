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
    $strQuery = "SELECT Route_ID FROM tblRoutes";

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
    // Bind Parameters
    $conAction->bind_param('s', $email);
    $conAction->execute();      
    $result_set = $conAction->get_result();
    $arrRoutes = array();
    while($row = $result_set->fetch_array(MYSQLI_ASSOC)) {
            $arrRoutes[] = $row;
    }
    echo json_encode($arrRoutes);
    $conAction->close();

}

// GET Employees
function getEmployees(){
    global $connection;
    $strQuery = "SELECT Fname, Lname, Title, Emp_Email, Phone_Num, Emp_Status FROM tblEmployees";
    
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
    // Bind Parameters
    $conAction->bind_param('s', $email);
    $conAction->execute();      
    $result_set = $conAction->get_result();
    $arrEmployees = array();
    while($row = $result_set->fetch_array(MYSQLI_ASSOC)) {
            $arrEmployees[] = $row;
    }
    echo json_encode($arrEmployees);
    $conAction->close();
}

// GET Vans
function getVans(){
    global $connection;
    $strQuery = "SELECT tblVans.Van_ID, tblVans.Accessibility, tblVans.Passenger_Limit, tblVans.Year, tblVans.Operational, tblVans.Description FROM tblVans WHERE tblVan_Route.Route_ID = ? LEFT JOIN tblVan_Route ON tblVans.Van_ID = tblVan_Route.Van_ID";

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
    // Bind Parameters
    $conAction->bind_param('s', $email);
    $conAction->execute();      
    $result_set = $conAction->get_result();
    $arrVans = array();
    while($row = $result_set->fetch_array(MYSQLI_ASSOC)) {
            $arrVans[] = $row;
    }
    echo json_encode($arrVans);
    $conAction->close();
}

// GET Stops
function getStops(){
    global $connection;
    $strQuery = "SELECT Stop_ID, Pickup_Time, Dropoff_Time, Passenger_Boarded, Passenger_Alighted FROM tblStops WHERE Route_ID = ?";
    
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
    // Bind Parameters
    $conAction->bind_param('s', $email);
    $conAction->execute();      
    $result_set = $conAction->get_result();
    $arrStops = array();
    while($row = $result_set->fetch_array(MYSQLI_ASSOC)) {
            $arrStops[] = $row;
    }
    echo json_encode($arrStops);
    $conAction->close();
}

// GET Admins
function getAdmins(){
    global $connection;
    $strQuery = "SELECT * FROM tblEmployees WHERE Title = 'Admin'";
    
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
    // Bind Parameters
    $conAction->bind_param('s', $email);
    $conAction->execute();      
    $result_set = $conAction->get_result();
    $arrAdmins = array();
    while($row = $result_set->fetch_array(MYSQLI_ASSOC)) {
            $arrAdmins[] = $row;
    }
    echo json_encode($arrAdmins);
    $conAction->close();
}

// GET Customers
function getCustomers(){
    global $connection;
    $strQuery = "SELECT tblCustomers.Cell_Phone_Num, tblCustomers.Discount_Status, tblCustomers.Special_req, tblCustomers.Age_Category, tblCustomers.Reward_Rides, tblCustomers.Total_Rides, tblCustomers.Reward_Progress FROM tblCustomers";
    
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
    // Bind Parameters
    $conAction->bind_param('s', $email);
    $conAction->execute();      
    $result_set = $conAction->get_result();
    $arrCustomers = array();
    while($row = $result_set->fetch_array(MYSQLI_ASSOC)) {
            $arrCustomers[] = $row;
    }
    echo json_encode($arrCustomers);
    $conAction->close();
}

// GET Customer Services
function getCustomerServices(){
    global $connection;
    $strQuery = "SELECT tblCustomers.Cell_Phone_Num, tblOther_Srvcs.Ride_UC, tblOther_Srvcs.Connect_UC, tblOther_Srvcs.Pickup_UC, tblOther_Srvcs.Shuttle_UC, tblOther_Srvcs.Go_UC, tblOther_Srvcs.Job_Access, tblOther_Srvcs.Ride_to_Recovery FROM tblCustomers LEFT JOIN tblCustomer_Services ON tblCustomers.Cell_Phone_Num = tblCustomer_Services.Cell_Phone_Num LEFT JOIN tblOther_Srvcs ON tblCustomer_Services.Srvc_ID = tblOther_Srvcs.Srvcs_ID";
    
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
    // Bind Parameters
    $conAction->bind_param('s', $email);
    $conAction->execute();      
    $result_set = $conAction->get_result();
    $arrServices = array();
    while($row = $result_set->fetch_array(MYSQLI_ASSOC)) {
            $arrServices[] = $row;
    }
    echo json_encode($arrServices);
    $conAction->close();
}

// GET Points
function getPoints(){
    global $connection;
    $strQuery = "SELECT Reward_Progress FROM tblCustomers WHERE Cell_Phone_Num = ?";
    
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
    // Bind Parameters
    $conAction->bind_param('s', $email);
    $conAction->execute();      
    $result_set = $conAction->get_result();
    $arrPoints = array();
    while($row = $result_set->fetch_array(MYSQLI_ASSOC)) {
            $arrPoints[] = $row;
    }
    echo json_encode($arrPoints);
    $conAction->close();
}

// GET Discount
function getDiscount(){
    global $connection;
    $strQuery = "SELECT tblCustomers.Cell_Phone_Num, tblCustomers.Discount_Status, tblDiscount.Discount_Code, tblDiscount_Percent.Half_off, tblDiscount_Percent.Quarter_off, tblDiscount_Percent.Tenth_off, tblDiscount_Percent.Fifth_off FROM tblCustomers, tblDiscount, tblDiscount_Percent WHERE tblCustomers.Cell_Phone_Num = ? LEFT JOIN tblDiscount ON tblCustomers.Discount_Status = tblDiscount.Discount_Status LEFT JOIN tblDiscount_Percent ON tblDiscount.Discount_Code = tblDiscount_Percent.Discount_Code";
    
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
    // Bind Parameters
    $conAction->bind_param('s', $email);
    $conAction->execute();      
    $result_set = $conAction->get_result();
    $arrDiscount = array();
    while($row = $result_set->fetch_array(MYSQLI_ASSOC)) {
            $arrDiscount[] = $row;
    }
    echo json_encode($arrDiscount);
    $conAction->close();

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