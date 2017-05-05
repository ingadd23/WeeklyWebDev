<?php

$name = $_POST['name'];

$email = $_POST['email'];

$message = $_POST['message'];


$odkogo = "gggg";


$dokogo = "indzia16@interia.pl";

$tytul = "Formularz kontaktowy ze strony internetowej";

// Przygotowujesz treść wiadomości
$wiadomosc = "";
$wiadomosc .= "Imie i nazwisko: " . $name . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";

// Wysyłamy wiadomość
$sukces = mail($dokogo, $tytul, $wiadomosc, "Od: <$odkogo>");

// Przekierowywujemy na potwierdzenie
if ($sukces){
  print "poszlo";
}
else{
  print "blad";
}
?>