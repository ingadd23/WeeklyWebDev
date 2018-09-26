<?php
    $selectProgram = $_POST["selectProgram"];
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $phone = $_POST["phone"];
    $phone = substr($phone,1,3) . substr($phone,6,3) . substr($phone,10,4);
    $email = $_POST["email"];

    echo "POST values: <br><br>" ;

    echo "selectProgram: " . $selectProgram;
    echo "<br> fristName: " . $firstName;
    echo "<br> lastName: " . $lastName;
    echo "<br> phone: " . $phone;
    echo "<br> email: " . $email;

    echo "<br><br> time: " . date("Y/m/d") . " " . date("h:i:sa");

    echo "<br><br><a href='thankyou.html'>GO TO TKANKYOU PAGE</a>";
?>


    