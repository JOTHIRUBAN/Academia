<?php
include("db.php");
session_start();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ANNAUNIV-STAFFLOGIN</title>
    <style>
        body {
    background-color: #F5F5F5; /* Light gray background color */
    font-family: Arial, sans-serif;
    margin: 0px;
}

form {
    width: 300px;
    margin: 30vh auto;
    padding: 20px;
    background-color: #FFFFFF; /* White background color */
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

form {
    width: 300px;
    margin: 30vh auto;
    padding: 20px;
    background-color: #FFFFFF; /* White background color */
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
input[type="text"],
input[type="password"] {
    display: block;
    width: 93%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #CCCCCC; /* Light gray border */
    border-radius: 5px;
    background-color: #F5F5F5; /* Light gray background color */
    color: #333333; /* Dark gray text color */
}

input[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #1F6E8C; /* Original primary color, dark blue */
    color: #FFFFFF; /* White text color */
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #0E2954; /* Original secondary color, darker blue */
}
.head{
    background-color:#1F6E8C;
    padding:10px;
    text-align: center;
    margin-top: 0px;
    height:115px;
    
}
.head h1{
  margin-top: 35px;
  color:azure;
}

.head img{
    float:left;
    width:120px;
}
    </style>



</head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
<body>
<div class="head">
  <a href="home.html"><img src="annapic3.png"></a>
    <h1>INFORMATION SCIENCE AND TECHNOLOGY</h1>
  </div>
  <h4 style="color:red;">Note:if you are a new user enter default password</h4>
    <form action="login.php" method="post" id="form">
        
      <input type="text" id="number" name="number" maxlength="10" required pattern="[0-9]{6}" placeholder="Staff-id">
      
      <input type="password" name="password" id="password" placeholder="Password">
      <input type="submit" value="Login"  name="loginn">
    </form>
</body>
</html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
<?php
if(isset($_POST["loginn"])){
$staffid=$_POST["number"];
$password=$_POST["password"];
//$passwordHash = password_hash($password, PASSWORD_DEFAULT);

$sql1="SELECT * from stafflogin where staffid='$staffid'";

$result1=$conn->query($sql1);

if($result1->num_rows>0){
    
    $row=$result1->fetch_assoc();

    $_SESSION["staffid"]=$row["staffid"];

    $_SESSION["defaultpassword"]=$row["defaultpassword"];

    $_SESSION["password"]=$row["password"];

    if($row["defaultpassword"]==""){
      
        if($row["password"]==$password){
            
            header("location:stafflogin.html");
        }
        else{
            echo'<script>alert("enter the right password")</script>';
        }
    }
    elseif($row["defaultpassword"]==$password){
        header("location:spaa.php");
    }
    else{
        echo '<script>alert("enter the right password")</script>';
    }
}
}
?>

