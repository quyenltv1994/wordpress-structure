<?php
$information = get_field('information', 'option');
$sc_facebook = get_field('sc_facebook', 'option');
$sc_twitter = get_field('sc_twitter', 'option');
$sc_google_plus = get_field('sc_google_plus', 'option');
$sc_instagram = get_field('sc_instagram', 'option');
?>
<?php
if($information):
    ?>
    <div class="col-sm-8 col-md-5 col-lg-3">
        <h5 class="footer-creative-title oh-desktop">
            <span class="d-inline-block wow slideInDown"><?=$information['title']?></span></h5>
        <ul class="footer-creative-contacts d-inline-block d-md-block">
            <?php
            if($information['phone_number']):
                ?>
                <li class="wow fadeInRight">
                    <p class="footer-creative-contacts-title"><?=$information['phone_title']?></p><a class="phone" href="tel:<?=$information['phone_number']?>"><?=$information['phone_number']?></a>
                </li>
            <?php
            endif;
            ?>
            <?php
            if($information['address']):
                ?>
                <li class="wow fadeInRight" data-wow-delay=".05s">
                    <p class="footer-creative-contacts-title"><?=$information['address_title']?></p><a class="address" href="#"><?=$information['address']?></a>
                </li>
            <?php
            endif;
            ?>
            <?php
            if($information['email']):
                ?>
                <li class="wow fadeInRight" data-wow-delay=".1s">
                    <p class="footer-creative-contacts-title"><?=$information['email_title']?></p><a class="mail" href="mailto:<?=$information['email']?>"><?=$information['email']?></a>
                </li>
            <?php
            endif;
            ?>
        </ul>
        <hr/>
        <ul class="list-inline footer-social-list footer-social-list-2">
            <?php
            if($sc_facebook):
                ?>
                <li><a class="icon mdi mdi-facebook" href="<?=$sc_facebook?>"></a></li>
            <?php
            endif;
            ?>
            <?php
            if($sc_twitter):
                ?>
                <li><a class="icon mdi mdi-twitter" href="<?=$sc_twitter?>"></a></li>
            <?php
            endif;
            ?>
            <?php
            if($sc_google_plus):
                ?>
                <li><a class="icon mdi mdi-instagram" href="<?=$sc_google_plus?>"></a></li>
            <?php
            endif;
            ?>
            <?php
            if($sc_instagram):
                ?>
                <li><a class="icon mdi mdi-google-plus" href="<?=$sc_instagram?>"></a></li>
            <?php
            endif;
            ?>
        </ul>
    </div>
<?php
endif;
?>