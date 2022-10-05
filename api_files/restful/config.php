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

// CREATE Globally Unique ID
function guidv4(){
    if (function_exists('com_create_guid') === true)
        return trim(com_create_guid(), '{}');

    $data = openssl_random_pseudo_bytes(16);
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40); // set version to 0100
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80); // set bits 6-7 to 10
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}

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
function getPoints($Cell_Phone_Num){
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
    $conAction->bind_param('s', $Cell_Phone_Num);
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
function getDiscount($Cell_Phone_Num){
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
    $conAction->bind_param('s', $Cell_Phone_Num);
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
    global $connection;
    $strQuery = "SELECT Email FROM tblEmployees WHERE UPPER(Email) = UPPER(?) AND Password= ?";
    // Check Connection
    if ($connection->connect_errno) {
        $blnError = "true";
        $strErrorMessage = $connection->connect_error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }
    if ($connection->ping()) {
    } else {
        $blnError = "true";
        $strErrorMessage = $connection->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }
        $statAdmin = $connection->prepare($strQuery);
        // Bind Parameters
        $statAdmin->bind_param('ss', $strEmpEmail, $strAdminPass);
        $statAdmin->execute();      
        $statAdmin->bind_result($strEmail);
        $statAdmin->fetch();
        $intRows = $statAdmin->num_rows;
        if($strEmail){
        return 'true';
        } else {
        return 'false';
        }
        $statAdmin->close();
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
// INSERT Session
function addSession($strEmpEmail,$strAdminPass){
    global $connection;
    $strVerified = verifyUsernamePassword($strEmpEmail,$strAdminPass);
    if($strVerified == 'true'){
        $strSessionID = guidv4();
    $strQuery = "INSERT INTO tblSessions VALUES (?,?,SYSDATE(),SYSDATE())";
    // Check Connection
    if ($connection->connect_errno) {
        $blnError = "true";
        $strErrorMessage = $connection->connect_error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }
    if ($connection->ping()) {
    } else {
        $blnError = "true";
        $strErrorMessage = $connection->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
    }
        $statSession = $connection->prepare($strQuery);
        // Bind Parameters
        $statSession->bind_param('ss', $strSessionID,$strEmpEmail);
        if($statSession->execute()){
        return '{"SessionID":"'.$strSessionID.'"}';
        } else {
        return '{"Error":"Session Not Created"}';
        }
        $statSession->close();
    }
    return '{"Outcome":"Bad Username or Password"}';
}


// INSERT Route
function addRoute($RouteID,$Location,$Stop_Time,$Start_Time,$County,$Emp_ID,$Route_Distance,$Stop_ID,$Van_ID){
    global $connection;
    $strQuery = "INSERT INTO tblRoutes VALUES (?,?,?,?,?,?,?,?,?)";
    // Check Connection
    if ($conRoutes->connect_errno) {
        $blnError = "true";
        $strErrorMessage = $conRoutes->connect_error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }
    if ($conRoutes->ping()) {
    } else {
        $blnError = "true";
        $strErrorMessage = $conRoutes->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
    }
        $statRoutes = $conRoutes->prepare($strQuery);
        // Bind Parameters
        $statRoutes->bind_param('sssssssss', $RouteID, $Location, $Stop_Time, $Start_Time, $County, $Emp_ID, $Route_Distance, $Stop_ID, $Van_ID);
        if($statRoutes->execute()){
        return '{"Outcome":"New Route Created"}';
        } else {
        return '{"Error":"Route Not Created"}';
        }
        $statRoutes->close();
}


// INSERT Van
function addVan($van_ID,$Accessibility,$Passenger_Limit,$Year,$Operational,$Description){
    global $connection;
    $strQuery = "INSERT INTO tblVans VALUES (?,?,?,?,?,?,?,?,?)";
    // Check Connection
    if ($conVan->connect_errno) {
        $blnError = "true";
        $strErrorMessage = $conVan->connect_error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }
    if ($conVan->ping()) {
    } else {
        $blnError = "true";
        $strErrorMessage = $conVan->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
    }
        $statVan = $conVan->prepare($strQuery);
        // Bind Parameters
        $statVan->bind_param('ssssss', $van_ID,$Accessibility,$Passenger_Limit,$Year,$Operational,$Description);
        if($statVan->execute()){
        return '{"Outcome":"New Van Created"}';
        } else {
        return '{"Error":"Van Not Created"}';
        }
        $statVan->close();
}

// INSERT Stop
function addStop($Stop_ID,$Route_ID,$Pickup_Time,$Dropoff_Time,$Miles_Per_Stop,$Passenger_Boarded,$Passenger_Alighted,$Rider_ID,$Stop_Boarded){
    global $connection;
    $strQuery = "INSERT INTO tblStops VALUES (?,?,?,?,?,?,?,?,?)";
    // Check Connection
    if ($conStops->connect_errno) {
        $blnError = "true";
        $strErrorMessage = $conStops->connect_error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }
    if ($conStops->ping()) {
    } else {
        $blnError = "true";
        $strErrorMessage = $conStops->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
    }
        $statStops = $conStops->prepare($strQuery);
        // Bind Parameters
        $statStops->bind_param('sssssssss', $Stop_ID,$Route_ID,$Pickup_Time,$Dropoff_Time,$Miles_Per_Stop,$Passenger_Boarded,$Passenger_Alighted,$Rider_ID,$Stop_Boarded);
        if($statStops->execute()){
        return '{"Outcome":"New Stop Created"}';
        } else {
        return '{"Error":"Stop Not Created"}';
        }
        $statStops->close();
}
// UPDATE Session
function updateSession($SessionID){
    global $connection;
    if($sessionID){
        $strQuery = "UPDATE tblSessions SET LastActivity = SYSDATE() WHERE SessionID = ?";
        // Check Connection
        if ($connection->connect_errno) {
            $blnError = "true";
            $strErrorMessage = $connection->connect_error;
            $arrError = array('error' => $strErrorMessage);
            echo json_encode($arrError);
            exit();
        }
        if ($connection->ping()) {
        } else {
            $blnError = "true";
            $strErrorMessage = $connection->error;
            $arrError = array('error' => $strErrorMessage);
            echo json_encode($arrError);
        }
        $statSession = $connection->prepare($strQuery);
        // Bind Parameters
        $statSession->bind_param('s', $sessionID);
        if($statSession->execute()){
            return '{"Outcome":"Session Updated"}';
        } else {
            return '{"Error":"Session Not Updated"}';
        }
        $statSession->close();
    }
    return '{"Error":"No SessionID Provided"}';
}
// UPDATE Prepaid Rides
function updatePrepaidRides($Prepaid_Rides,$Cell_Phone_Num){
    global $connection;
    $strQuery = "UPDATE tblCustomer SET Reward_Rides = Reward_Rides + ? WHERE Cell_Phone_Num = ?";
    // Check Connection
    if ($conRides->connect_errno) {
        $blnError = "true";
        $strErrorMessage = $conRides->connect_error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }
    if ($conRides->ping()) {
    } else {
        $blnError = "true";
        $strErrorMessage = $conRides->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
    }
        $statRides = $conRides->prepare($strQuery);
        // Bind Parameters
        $statRides->bind_param('ss', $Prepaid_Rides, $Cell_Phone_Num);
        if($statRides->execute()){
        return '{"Outcome":"Rides Updated"}';
        } else {
        return '{"Error":"Rides Not Updated"}';
        }
        $statRides->close();
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