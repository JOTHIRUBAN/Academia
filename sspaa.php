<?php
include("dbs.php");
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
    
<form method="post" action="sspaa.php">
        <input type="password" placeholder="Password" name="password" required>
        <input type="password" placeholder="Confirm Password" name="cpassword" required>
        <input type="submit" value="Register" name="register">
        </form>

</body>
</html>

<?php

        if (isset($_POST["register"])) {
            $rollno1=$_SESSION["rollno"];
           $password = $_POST["password"];
           $cpassword = $_POST["cpassword"];

           echo$rollno1;
           

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
           require_once "dbs.php";
           //to arrange this 
          
           if (count($errors)>0) {
            foreach ($errors as  $error) {
                echo "<div class='alert alert-danger'>$error</div>";
            }
           }else{
            
            $sql = "UPDATE studentlogin SET password='$password' WHERE rollno='$rollno1'";
            $sql1="UPDATE studentlogin SET defaultpassword='' WHERE rollno='$rollno1'";

           $result=$conn->query($sql);
           $result1=$conn->query($sql1);
            if ($result and $result1) {
                echo "<div class='alert alert-success'>You are registered successfully.</div>";

                header("location:slogin.php");
            }else{
                die("Something went wrong");
            }
           }
          

        }
        ?>
