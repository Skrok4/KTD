<?php
//***************** Страница с завершением заказа ******************
session_start();

/**
 * 
 * Telegram Bot
 * 
 * 
 */
$tg_user = '-1002000813699';
$bot_token = '6545615675:AAGaYP5y50PaHK0uZxa8mNSXFlZAhCeWQZc';

$name = $_POST['user-name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comment = $_POST['user-comment'];

$text = "✉️ Данные с сайта:\nИмя: " . $name . "\nТелефон: " . $phone . "\nEmail" . $email . "\nКомментарий" . $text;
$params = array(
    'chat_id' => $tg_user,
    'text' => $text,
    'parse_mode' => 'HTML',
);
$curl = curl_init();
curl_setopt(
    $curl,
    CURLOPT_URL,
    'https://api.telegram.org/bot' . $bot_token . '/sendMessage'
); // адрес вызова api функции телеграм
curl_setopt($curl, CURLOPT_POST, true); // отправка методом POST
curl_setopt($curl, CURLOPT_TIMEOUT, 10); // время выполнения запроса
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $params); // параметры запроса
$result = curl_exec($curl); // запрос к api
curl_close($curl);
////Telegram Bot
///
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://i.ibb.co/KwXbcKf/favicon-32x32.png" type="image/x-icon">
    <title>
        <?php
        if ($_POST['phone']) {
            echo 'Спасибо! Скоро мы свяжемся с Вами';
        } else {
            echo 'Какая-то проблема...';
        } ?>
    </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css" />
    <!-- Meta Pixel Code -->
    <!-- <script>
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '636442312006999');
        fbq('track', 'Lead');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=636442312006999&ev=PageView&noscript=1" /></noscript> -->
    <!-- End Meta Pixel Code -->
</head>

<body>
    <div class="main">
        <div class="container">
            <div class="order-info">
                <?php
                if ($_POST['phone']) : ?>
                    <h2>Спасибо за заполнение формы!</h2>
                    <h4>
                        Наш менеджер скоро свяжется с Вами!
                    </h4>
                    <a href="javascript:history.back()" class="btn btn-primary">Вернуться назад</a>

                <?php
                else : ?>
                    <h4 style="color: darkred;">Что-то пошло не так, и форма не была отправлена...</h4>
                    <h2 style="font-weight: 700; color: green">Пожалуйста, заполните форму еще раз!</h2>
                    <a href="javascript:history.back()" class="btn btn-success" style="text-transform: uppercase;">Заполнить форму еще раз</a>
                <?php
                endif; ?>

            </div>
        </div>
    </div>
    <style>
        body {
            background-image: url('https://i.ibb.co/gmNVzPD/photo-1560264280-88b68371db39.jpg');
            background-size: cover;
            background-repeat: no-repeat
        }

        .main {
            width: 100%;
            height: 100vh;
            background-color: rgba(195, 195, 195, .7);
            padding: 10%
        }

        .order-info {
            padding: 20px;
            background-color: #f5f5f5;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center
        }

        .order-info h2 {
            font-weight: 700;
            margin-bottom: 30px
        }

        .order-info a {
            margin-top: 40px
        }

        .sale_text {
            font-weight: 700;
            margin: 30px 0 10px
        }

        .sale_link {
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 900;
            font-size: 20px;
            color: #0d6efd
        }
    </style>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</body>

</html>