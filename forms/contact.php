<?php
header('Content-Type: application/json'); // Tetapkan header JSON

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$company = htmlspecialchars($_POST['your-company']);
$job = htmlspecialchars($_POST['job']);
$message = htmlspecialchars($_POST['message']);

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'unitedteknologiintegrasipt@gmail.com';
    $mail->Password = 'vkixtnvzllhyihtj';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('unitedteknologiintegrasipt@gmail.com', 'Contact Form');
    $mail->addAddress('unitedteknologiintegrasipt@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = "Pesan Baru dari $name";
    $mail->Body = "
        <h2>Pesan Baru</h2>
        <p><strong>Nama:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Telepon:</strong> $phone</p>
        <p><strong>Perusahaan:</strong> $company</p>
        <p><strong>Posisi:</strong> $job</p>
        <p><strong>Pesan:</strong><br>$message</p>
    ";

    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'Pesan Anda berhasil terkirim.']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => 'Pesan gagal terkirim. Kesalahan: ' . $e->getMessage()]);
}
