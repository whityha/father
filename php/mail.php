<?php
  //Если форма отправлена
  if(isset($_POST['submit'])) {

 //Если ошибок нет, отправить email
  if(!isset($hasError)) {
  $emailTo = '2042_2042@mail.ru'; //Сюда введите Ваш email
  $body = "Name: $uname \n\nDAYS: $uemail \n\nNumber: $unnumber";
  $headers = 'From: My Site <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;
 mail($emailTo, $subject, $body, $headers);
  $emailSent = true;
  }
  }
  ?>