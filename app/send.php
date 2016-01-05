$req = json_decode( file_get_contents('php://button', true),
//подключаем класс для работы с email
require 'class.simle_mail.php';
if ($req ) {
// отправляем данные с помощью функции mail
if (!empty($req['firstName'])) $firstName = $req['firstName'];
if (!empty($req['email'])) $email = $req['email'];
if (!empty($req['message'])) $message = $req['message'];
if (!empty($firstName) && !empty($email) && !empty($message) && !empty($types) {
   //формируем сообщение и отправляем

   $mes = "Имя: " .$firstName;
   if (!empty($email)) $ mes .= "\nEmail: ".$email;
   $mes ="Сообщение: ".$message;
   $mail ->setTo('radik.machete@gmail.com')
         ->setSubject($types)
         ->setFrom('admin@domen.ru')
         ->setMessage($mes);
         ->setWrap(100);
   $send = $mail->send();
   $if ($send) {
        $res = array('res' => ' ok');
        echo json_encode($res);
        }else{
        $res = array('res' => false, 'msg' => 'Error!');
        echo json_encode($res);
}
} else {
//Поля не заполнены
$res = array('res'=>  'msg' => 'Заполните все поля.' );
echo json_encode($res);
}
} else {
     $res = array('res' => false, 'msg' => 'Заполните все поля.');
}
