<?php
include("db.php");
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* CSS code for the provided HTML */
/* Light-themed CSS code for the provided HTML */
body {
    background-color: #F5F5F5; /* Light gray background color */
    font-family: Arial, sans-serif;
}

form {
    width: 300px;
    margin: 30vh auto;
    padding: 20px;
    background-color: #FFFFFF; /* White background color */
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

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

    </style>
</head>
<body>
    
<form method="post" action="spaa.php">
        <input type="password" placeholder="Password" name="password" required>
        <input type="password" placeholder="Confirm Password" name="cpassword" required>
        <input type="submit" value="Register" name="register">
        </form>

</body>
</html>

<?php

        if (isset($_POST["register"])) {
            $staffid=$_SESSION["staffid"];
           $password = $_POST["password"];
           $cpassword = $_POST["cpassword"];

        
           

           $errors = array();
           
           if (empty($password) OR empty($cpassword)) {
            array_push($errors,"All fields are required");
           }
        
           if (strlen($password)<8) {
            array_push($errors,"Password must be at least 8 charactes long");
           }
           if ($password!==$cpassword) {
            array_push($errors,"Password does not match");
           }
           require_once "db.php";
           //to arrange this 
          
           if (count($errors)>0) {
            foreach ($errors as  $error) {
                echo "<div class='alert alert-danger'>$error</div>";
            }
           }else{
            
            $sql = "UPDATE stafflogin SET password='$password' WHERE staffid='$staffid'";
            $sql1="UPDATE stafflogin SET defaultpassword='' WHERE staffid='$staffid'";

           $result=$conn->query($sql);
           $result1=$conn->query($sql1);
            if ($result and $result1) {
                echo '<script>alert("You are registered successfully")</script>';

                header("location:login.php");
            }else{
                die("Something went wrong");
            }
           }
          

        }
        ?>
