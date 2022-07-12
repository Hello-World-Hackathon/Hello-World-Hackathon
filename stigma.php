<?php
    $user = $_POST['user'];
    $tle = $_POST['tle'];
    $bl = $_POST['bl'];

    $conn = new mysqli('localhost','root','','stigma');
    

    if($conn->connect_error){
        echo "$conn->connect_error";
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into blog(user, tle, bl) values(?,?,?)");
        $stmt->bind_param("sss", $user, $tle, $bl);
        $stmt->execute();
        echo "Blog posted...";
        $stmt->close();
        $conn->close();
        header("Location:blog.html");
    }

?>