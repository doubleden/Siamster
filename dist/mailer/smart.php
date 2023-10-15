<?php
require_once('conf.php');

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['text'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];

    require_once('phpmailer/PHPMailerAutoload.php');
    $mail = new PHPMailer;
    $mail->CharSet = 'utf-8';

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtpUsername'];
    $mail->Password = $config['smtpPassword'];
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('denis.denisv8701@gmail.com', 'Portfolio');
    $mail->addAddress('dendd7@mail.ru');
    $mail->isHTML(true);

    $mail->Subject = 'Данные';
    $mail->Body = '
        Пользователь оставил данные <br>
        Имя: ' . $name . ' <br>
        Сообщение: ' . $text . '<br>
        E-mail: ' . $email . '';

    try {
        if ($mail->send()) {
            echo 'success'; // Отправка прошла успешно
        } else {
            echo 'error'; // Ошибка при отправке
        }
    } catch (Exception $e) {
        echo 'error: ' . $e->getMessage();
    }
} else {
    echo 'error: Не все данные заполнены';
}
?>
