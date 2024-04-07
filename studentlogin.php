<link rel="stylesheet" href="info.css">


<div class="head">
<img src="annapic3.png">
          <h1 style="padding: 40px;">INFORMATION SCIENCE AND TECHNOLOGY</h1>
        </div>
<?php
$server="localhost";
$db="staffinfo";
$username="root";
$password="";
$conn = new mysqli($server,$username,$password,$db);
if($conn->connect_error){
    echo"Connection Failed!".$conn->connect_error;
}
else{
    echo "";
}
$sql= "SELECT * FROM info ORDER BY date DESC";
$result=$conn->query($sql);
if($result->num_rows>0){
    while ($row = $result->fetch_assoc()) {
        echo "<div>";
        foreach ($row as $key => $value) {
            echo  $value . "<br>";
        }
        echo "<hr>";
        echo "</div>";
    }
}
else{
    echo "<h1>NO INSTRUCTIONS WERE ANNOUNCED!</h1>";
}
?>

