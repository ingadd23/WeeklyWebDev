<?php
//require_once 'class.phpmailer.php';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$dokogo = "indzia16@interia.pl";

$tytul = "Formularz kontaktowy - nowa wiadomość od " . $name;


/*
$mail = new PHPMailer();


$mail->SetFrom($_POST['email'], $_POST['name']);
$mail->AddAddress('indzia16@interia.pl');
$mail->Subject = 'Wiadomość ze strony internetowej';
$mail->Body = $_POST['message'];


if (!$mail->Send()) {
    exit('nok');
}else{
    exit('ok');
}
*/




$wiadomosc="
    <html>
        <head>
            <meta charset='utf-8'>

        </head>

        <body style='background: #fff; font-family: Arial, Verdana; margin-top:0; margin-bottom:0; padding-top:0; padding-bottom:0;'>

            <p style='background: #fff; font-size: 14px;'>
            Witaj, <br><br>
            <b style='color: #006539'>Otrzymałeś nową wiadomość od: </b>" . $name . "<br><br>
            <b style='color: #006539'>Adres email: </b>" . $email . "<br><br>
            <b style='color: #006539'>Treść wiadomość: </b>" . $message . "<br><br>
            </p>

        </body>
    </html>";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers.="Content-type: text/html; charset=utf-8\r\n";





// Wysyłamy wiadomość
$sukces = mail($dokogo, $tytul, $wiadomosc, $headers);

// Przekierowywujemy na potwierdzenie
if ($sukces){
  exit('ok');
}
else{
  exit('nok');
}
?>