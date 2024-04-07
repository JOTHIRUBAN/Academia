<?php
$conn=new mysqli("localhost","root","","login");
if($conn->connect_error){
    die("something went wrong".$conn->connect_error);
}else{
    echo"                 ";
}

?>