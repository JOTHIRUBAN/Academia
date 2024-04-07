<?php
$email = $_POST["email"];
$name=$_POST["name"];
$msg=$_POST["message"];
$server="localhost";
$db="query";
$username="root";
$password="";
$date=date("Y-m-d");
$conn = new mysqli($server,$username,$password,$db);
if($conn->connect_error){
    echo"Connection Failed!".$conn->connect_error;
}
else{
    echo "<H3>You will be addressed by your faculty advisor</H3>";
}
$sql="INSERT INTO query1(name1,email1,message1,date1) VALUES('$name','$email','$msg','$date')";
$conn->query($sql);

?>