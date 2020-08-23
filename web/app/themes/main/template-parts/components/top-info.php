<?php
$phoneNumber = get_field('phone', 'option');
$email = get_field('email', 'option');
$address = get_field('address', 'option');
?>
<div class="rd-navbar-collapse">
	<ul class="rd-navbar-contacts-4">
        <?php
            if($phoneNumber):
        ?>
		<li>
            <span class="icon mdi mdi-phone"></span>
            <span class="link-wrap"><a class="phone" href="tel:<?=trim($phoneNumber)?>"><?=$phoneNumber?></a></span>
        </li>
        <?php
            endif;
        ?>
        <?php
            if($email):
        ?>
		    <li>
                <span class="icon mdi mdi-email-outline"></span>
                <span class="link-wrap"><a class="mail" href="mailto:<?=$email;?>"><?=$email;?></a></span></li>
        <?php
            endif;
        ?>
        <?php
            if($address):
        ?>
            <li>
                <span class="icon mdi mdi-map-marker"></span>
                <span class="link-wrap"><a class="address" href="#"><?=$address?></a></span></li>
        <?php
            endif;
        ?>
    </ul>
</div>