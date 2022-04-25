<?php




//credentials
$servername = 'localhost';
$username = '...';
$password = '...';
$dbname = '...';

// connection function
$conn = mysqli_connect($servername, $username, $password, $dbname);

// if no connection
if(!$conn)
{
    echo 'Connection Error: ' . mysqli_connect_error();
}

// example query
$sqlQuery = 'SELECT Stop_Time - Start_Time, Route_distance FROM tbl.Route WHERE Route_ID = Cookeville_Green';
$result = mysqli_query($conn, $sqlQuery);
$pizzas = mysqli_fetch_all($result, MYSQLI_ASSOC);

// free result from memory
mysqli_free_result($result);

// close connection
mysqli_close($conn);

//print
print_r($pizzas);




?>