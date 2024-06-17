<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Header, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$email = $data->email;
$password = $data->password;

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "register");

if ($con->connect_error) {
  die("Connection failed: " . $con->connect_error);
}

$sql = "INSERT INTO users (username, email, password) VALUES (
          '$username',
          '$email',
          '$password'
        )";

if (mysqli_query($con, $sql)) {
  $response = array('status' => 'success', 'message' => 'User registered successfully');
} else {
  $response = array('status' => 'error', 'message' => 'Error registering user');
}

echo json_encode($response);
?>
