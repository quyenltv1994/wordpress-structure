<?php
$clients = get_field('client_section');
if($clients):
?>
<!-- Our Clients-->
<section class="section section-md bg-default text-center">
	<div class="container">
		<div class="owl-carousel" data-items="1" data-sm-items="2" data-md-items="3" data-lg-items="4" data-margin="30" data-autoplay="true" data-dots="true" data-animation-in="fadeIn" data-animation-out="fadeOut">
            <?php
                foreach($clients['clients'] as $client):
                    $image = $client['image']['sizes'];
            ?>
            <a class="clients-creative" href="<?=$client['link']?>">
                <img src="<?= $image['client-image'] ?>" alt="" width="270" height="143"/>
            </a>
            <?php
                endforeach;
            ?>
        </div>
	</div>
</section>
<?php
endif;