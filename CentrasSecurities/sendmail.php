<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/SMTP.php';


$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//От кого заявка
$mail->setFrom('Zakhmetov@cic.kz', 'Zhaslan Akhmetov');
// Кому отправить
$mail->addAddress('astana93@bk.ru');
// Тема письма
$mail->Subject = 'Заявка на звонок Centras Securuties';

// Тело заявки
$body = 'Заявка на звонок';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['surname']))){
    $body.='<p><strong>Фамилия:</strong> '.$_POST['surname'].'</p>';
}
if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Тел:</strong> '.$_POST['phone'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
}

$mail->Body = $body;

// Отправляем
if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Заявка принята';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

