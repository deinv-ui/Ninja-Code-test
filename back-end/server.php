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

$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"register")

if ($con->connect_error) {
  die("Connection failed: " . $con->connect_error);
}
echo "Connected successfully";

$sql = "INSERT INTO users (username, email, password)
        values(
          '$username',
          '$email',
          '$password'
        )";

if ($result){

  $response['data']=array(
    'status'=>'invalid'
  );
  echo json_encode($response);
}
?>

<!-- // API endpoint to handle user registration
// if ($_SERVER["REQUEST_METHOD"] === "POST") {
//   $data = json_decode(file_get_contents("php://input"), true);

//   $username = $data["username"];
//   $email = $data["email"];
//   $password = $data["password"];

//   // Use prepared statement to prevent SQL injection
//   $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
//   $stmt->bind_param("sss", $username, $email, $password);
//   if ($stmt->execute()) {
//     echo json_encode(array("message" => "User registered successfully"));
//   } else {
//     echo json_encode(array("message" => "Error registering user"));
//   }

//   $stmt->close();
// }

// $conn->close();
// ?> -->