<?php
$offers = get_field('offer_section');
if($offers):
?>
<!-- What we offer-->
<section class="section section-xl bg-default text-center">
	<div class="container">
		<div class="group-xl group-sm-justify">
			<h4 class="oh-desktop"><span class="d-inline-block wow slideInLeft"><?=$offers['title'];?></span></h4>
			<div class="dots-custom"></div>
		</div>
		<div class="owl-carousel owl-style-3" data-items="1" data-sm-items="2" data-lg-items="3" data-margin="30" data-autoplay="true" data-dots="true" data-animation-in="fadeIn" data-animation-out="fadeOut" data-pagination-class=".dots-custom">
            <?php
                foreach($offers['offers'] as $key => $offer):
                    $number = $key+1;
                    $image =  get_the_post_thumbnail_url( $offer->ID, 'offer-image');
            ?>
            <!-- Services Creative-->
			<article class="services-creative">
                <a class="services-creative-figure" href="<?=the_permalink($offer->ID)?>">
                    <img src="<?= $image ?>" alt="" width="370" height="230"/>
                </a>
				<div class="services-creative-caption">
					<h5 class="services-creative-title">
                        <a href="<?=the_permalink($offer->ID)?>">
                            <?=get_the_title($offer->ID);?>
                        </a>
                    </h5>
					<p class="services-creative-text"><?=get_the_excerpt($offer->ID);?></p>
                    <span class="services-creative-counter box-ordered-item"><?=$number<10?"0"."$number":$number?></span>
				</div>
			</article>
            <?php
                endforeach
            ?>
		</div>
	</div>
</section>
<?php
endif;