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


    <link rel="stylesheet" href="../../css/style-cont.css">
    <link rel="stylesheet" href="../../css/style-footer.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet">

    <!-- reCAPTCHA Javascript -->
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>
<body>



    <!-- ====================== navbar =========================== -->
    <nav class="nav">
        <div class="cont">
            <nav>
                <input type="checkbox" id="check">
                <label for="check" class="checkbtn">
                    <i class="fa fa-bars"></i>
                </label>


                <div class="logo">
                <a href="../../../index.html"><img src="../../../img/logo.svg" alt=""></a>
                </div>



                <ul>
                    <li><a href="../../index.html">OTM</a> </li>
                    <li><a href="../../common/features.html">Features</a> </li>
                    <li><a href="../../common/licence.html">Buy</a> </li>
                    <li><a href="../../common/analisys.html">Examples</a> </li>
                    <li><a class="active" href="#">Contact</a> </li>
                </ul>
            </nav>
        </div>
    </nav>



    <!-- ====================== form =========================== -->
    <div class="container">
    <div class="general">
        <div class="col-md-8 offset-md-2">
            <div class="card mt-5">
                <div class="card-body">

                    <?php
                    if (!empty($success)) {
                            ?>
                        <!-- <div class="alert alert-success">Your message was sent successfully!</div> -->
                        <div class="sucess">
                            <a class="sucess-element">Your message was sent successfully!</a>
                        </div>
                        <?php
                    }
                    ?>

                    <?php
                    if (!empty($error)) {
                        ?>
                        <div class="error">
                            <div><?= $error ?></div>
                            <a class="error-element">Your message could not be sent.</a>
                        </div>                        
                        <?php
                    }
                    ?>

                    <form method="post" action="submit.php" class="contact-form">
                    
                    <h1 class="card-title"> Contact us </h1>

                        <div class="form-group txtb">
                        <h2> <span>*</span> Name</h2>
                            <input type="text" name="name" id="name" class="form-control" placeholder="John Doe">
                       
                        
                        </div>

                        <div class="form-group txtb">
                        <h2> <span>*</span> Email</h2>
                            <input type="email" name="email" id="email" class="form-control" placeholder="name@example.com">
                        </div>

                        <div class="form-group txtb">
                        <h2> <span>*</span> Subject</h2>
                            <input type="text" name="subject" id="subject" class="form-control" placeholder="subject">
                        </div>

                        <div class="form-group txtb">
                        <h2>Message / Question</h2>
                            <textarea name="message" id="message" class="form-control" rows="12" placeholder="" ></textarea>
                        </div>

                        <div class="form-group text-center cap">
                            <div class="g-recaptcha cap2" data-sitekey="<?= CONTACTFORM_RECAPTCHA_SITE_KEY ?>"></div>
                        </div>

                        <button class="btn btn-primary btn-block btn">Send Message</button>


                        


                        <!-- <button class="btn btn-primary btn-bloc">
                        <a href="" >Send</a>
                        </button> -->

                    </form>

                </div>
            </div>
        </div>
    </div>
</div>






    
    <!-- ====================== footer1 =========================== -->
    <div class="footer">
        <div class="footer-cont">

            <div class="cont-foot1">
            <p class="text">Trading futures, forex and options contains considerable risk and is not for all investors. An investor can potentially lose all or more than the initial investment. Risk capital is money that can be lost without jeopardizing financial security or lifestyle. Only risk capital should be used for trading and only those with sufficient risk capital should consider trading. Past performance is not necessarily indicative of future results.</p>
            </div>

            <div class="cont-foot2">
                <h3 class="text">OTM Objective Method</h3>
                <h3 class="text2">info@otmtrading.com</h3>
                <hr class="linea">
                <div class="iconos">


                <a target="_blank" href="https://www.instagram.com/otm_indicators/"><i
                            class="ico fa fa-instagram"></i></a>
                    <a target="_blank" href="https://www.instagram.com/otm_indicators/"><i class="ico fa fa-telegram"></i></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCvwJaFyy9IbkHJOaihPirjw"><i class="ico fa fa-youtube"></i></a>


                </div>
                <p class="copy">&copy; OTM Trading 2021</p>
            </div>

        </div>
    </div>





</body>
</html>
