<?php

require_once __DIR__.'/../vendor/autoload.php';
require_once __DIR__.'/config.php';

session_start();

if (!empty($_SESSION['_contact_form_error'])) {
    $error = $_SESSION['_contact_form_error'];
    unset($_SESSION['_contact_form_error']);
}

if (!empty($_SESSION['_contact_form_success'])) {
    $success = true;
    unset($_SESSION['_contact_form_success']);
}

?>
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Trading System for Delta and Volume Analysis - OTM trading System </title>
    <link rel="shortcut icon" href="../../img/favicon_a.ico" type="image/x-icon">


    <link rel="stylesheet" href="../../css/style-cont-lic.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet">

    <!-- reCAPTCHA Javascript -->
    <!-- <script src="https://www.google.com/recaptcha/api.js" async defer></script> -->
</head>
<body>

    <!-- ====================== form =========================== -->
    <!-- <div class="container">
    <div class="general">
    <div class="logo">
            <a href="../../index.html"><img src="../../img/logo_azul.svg" alt=""></a>
        </div>

        <div class="col-md-8 offset-md-2">
            <div class="card mt-5">

            
                <div class="card-body">
                <?php
                    if (!empty($success)) {
                            ?>
                        <div class="sucess">
                            <a class="sucess-element">Tu mensaje ha sido entregado! <br> pronto enviaremos a tu correo tu software OTMtrading</a>
                        </div>
                        <?php
                    }
                    ?>

                    <?php
                    if (!empty($error)) {
                        ?>
                        <div class="error">
                            <div><?= $error ?></div>
                            <a class="error-element">Tu mensaje no ha podido ser entragado <br> Si el error persiste contacta a contact@otmtrading.com </a>
                        </div>                        
                        <?php
                    }
                    ?>

                    <form method="post" action="submit.php" class="contact-form">
                    
                    <h1 class="card-title"> Gracias por adquirir OTM Software </h1>
                    <p class="title2" >Faltan pocos pasos para tener tu software OTM</p>
                    
                    <p class="title3" >1. obten el ID machine de tu Ninjatrader 8:</p>

                    <div class="cont-img">
                            <img src="../../img/id.jpg" alt="">
                    </div>

                    <p class="text-id" >* El código Machine ID es generado por NinjaTrader basado en el hardware y software principal de sistema</p>
                    
                    <p class="title3">2. envianos el ID machine y tus datos en el siguiente formulario:</p>
                    

                        <div class="form-group txtb">
                            <h2> <span>*</span> Nombre</h2>
                            <input type="text" name="name" id="name" class="form-control" placeholder="John Doe">
                        </div>

                        <div class="form-group txtb">
                        <h2> <span>*</span> Email</h2>
                            <input type="email" name="email" id="email" class="form-control" placeholder="name@example.com">
                        </div>

                        <div class="form-group txtb">
                        <h2> <span>*</span> Machine ID</h2>
                            <input type="text" name="subject" id="subject" class="form-control" placeholder="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA">
                        </div>

                        <div class="form-group txtb">
                        <h2>Message / Question</h2>
                            <textarea name="message" id="message" class="form-control" rows="12" placeholder="" ></textarea>
                        </div>



                        <div class="form-group text-center cap">
                            <div class="g-recaptcha cap2" data-sitekey="<?= CONTACTFORM_RECAPTCHA_SITE_KEY ?>"></div>
                        </div>



                        <button class="btn btn-primary btn-block btn">Send Message</button>


                    </form>

                </div>
            </div>
        </div>
    </div> -->

<!-- -------------------------------------------- -->

<section class="licence">
    <div class="licence-container">





        <div class="licence-logo">
            <img src="../../img/logo_azul.svg" alt="">
        </div>


        <?php
            if (!empty($success)) {
                    ?>
                <div class="sucess">
                    <a class="sucess-element">Tu mensaje ha sido entregado! <br> pronto enviaremos a tu correo tu software OTMtrading</a>
                </div>
                <?php
            }
        ?>

        <?php
            if (!empty($error)) {
                    ?>
                <div class="error">
                    <div><?= $error ?></div>
                    <a class="error-element">Tu mensaje no ha podido ser entragado <br> Si el error persiste contacta a contact@otmtrading.com </a>
                </div>                        
                <?php
            }
        ?>

<form method="post" action="submit.php" class="contact-form">



        <div class="licence-card">
            <div class="licence-header">¡No cierres esta ventana hasta completar tu proceso!</div>
            <div class="licence-title">Gracias por adquirir OTM Software</div>
            <div class="licence-subtitle">Sigue atentamente estos pasos para tener tu OTM</div>
            <div class="licence-numeral">1. Obtén el Machine ID de tu NinjaTrader 8</div>
            <div class="licence-img">
                <img src="../../img/id.jpg" alt="" srcset="">
            </div>
            <div class="licence-pieimagen">El código Machine ID es generado por NinjaTrader basado en el hardware y software principal de sistema</div>
            <div class="licence-numeral2">2. Después de enviar este formulario, crearemos la licencia para tu equipo.</div>


            <div class="licence-form--input">
                <h2>Nombre <span>*</span></h2>
                <input type="text" name="name" id="name" class="licence-form--box" placeholder="John Doe">
            </div>

            <div class="licence-form--input">
            <h2>Email <span>*</span> </h2>
                <input type="email" name="email" id="email" class="licence-form--box" placeholder="name@example.com">
            </div>

            <div class="licence-form--input">
            <h2> Machine ID<span>*</span> </h2>
                <input type="text" name="subject" id="subject" class="licence-form--box" placeholder="1234123412341234">
            </div>

            <div class="licence-form--input">
            <h2>Mensage</h2>
                <textarea name="message" id="message" class="licence-form--boxMesagge" rows="6" placeholder="" ></textarea>
            </div>

            <!-- <div class="g-recaptcha cap2" data-sitekey="<?= CONTACTFORM_RECAPTCHA_SITE_KEY ?>"></div> -->


            <button class="btn btn-primary btn-block btn licence-form--send">SEND</button>
        

            <div class="licence-text part-a">• Recibirás en tu correo tu software en un plazo de 1 día hábil (8 a 5 PM GMT- 4).</div>
            <div class="licence-text part-b">• Si tienes cualquier inquietud no dudes en contactarnos:</div>
            <div class="licence-text part-c">info@otmtrading.com</div>
            <div class="licence-text part-c">WhatsApp de soporte +573113006826</div>
        
        
        </div>  
        
        </form>


    </div>
</section>



</div>






</body>
</html>
