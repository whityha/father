<?php
 
$post = (!empty($_POST)) ? true : false;
 
if($post)
{
$name = htmlspecialchars($_POST["name"]);
$date = htmlspecialchars($_POST["date"]);
$tel = htmlspecialchars($_POST["tel"]);
$date = htmlspecialchars($_POST["days"]);
$error = '';
 

if(!$error)
{
 
 
$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";
 
$subject ="Новая заявка с сайта";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";
/*
$date ="\n\nСообщение: ".$date."\n\nИмя: " .$name."\n\nТелефон: ".$tel."\n\n";
*/
$message1 ="\nName: ".$name."\n\nТелефон: " .$tel."\n\nДата заселения: " .$date."\n\nКоличество дней: ".$days."\n\n";    
 
 
$header = "Content-Type: text/plain; charset=utf-8\n";
 
$header .= "From: Новая заявка <n.a.khapaliuk@gmail.com>\n\n";  
$mail = mail("n.a.khapaliuk@gmail.com", $subject1, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));
 
if($mail)
{
echo 'OK';
}
 
} 
}
?>