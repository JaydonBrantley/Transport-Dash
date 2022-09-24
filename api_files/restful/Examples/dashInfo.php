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


?>