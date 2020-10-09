<?php
function do_send() {
  //vadim.a.matveev@gmail.com
  //info@eisenvoegel.ru
 // $result = mail('vadim.a.matveev@gmail.com', 'subject', 'message','From ...', '-fno-reply@yourdomine.ru');


  $to     = $_POST["to"];
  $subject = $_POST["subject"];;
  $message = $_POST["message"];
  $headers = 'From: noreply@zaochka15.ru' . "\r\n" .
   // 'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    $result = mail($to, $subject, $message, $headers);
 
  if($result) {
    echo "Success<br>\n";
    echo $message;
  }
  else {
    echo "Fail<br>\n";
    echo $message;
  }
  return ($result);
}
?>


<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
  $result = do_send($message);
  ?>  

  result
  <?php echo $result; ?>
</body>
</html>