<?php
$info = $_POST["info"];
$name=$_POST["name"];
$subject=$_POST["subj"];
$server="localhost";
$db="staffinfo";
$username="root";
$password="";
$date=date("Y-m-d");
$conn = new mysqli($server,$username,$password,$db);
if($conn->connect_error){
    echo"Connection Failed!".$conn->connect_error;
}
else{
    echo "<H3>SENT SUCCESSFULLY</H3>";
}
$sql="INSERT INTO info(name1,subject1,info,date) VALUES('$name','$subject','$info','$date')";
$conn->query($sql);

?>