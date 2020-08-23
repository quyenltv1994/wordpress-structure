<?php
$sliders = get_field('slider_section');
if($sliders):
?>
<div class="swiper-container swiper-slider swiper-slider-7" data-loop="true" data-autoplay="5000" data-simulate-touch="false" data-add-slides="1">
	<div class="swiper-wrapper text-sm-left">
        <?php
            foreach($sliders as $slider):
                $background = $slider['background'];
        ?>
            <div class="swiper-slide" data-slide-bg="<?= $background['sizes']['hero-slider']; ?>">
                    <div class="swiper-slide-caption section-md">
                        <div class="swiper-box">
                            <h6 class="oh swiper-subtitle">
                        <span class="d-inline-block" data-caption-animate="slideInLeft" data-caption-delay="500">
                            <?=$slider['description']?>
                        </span>
                            </h6>
                            <h3 class="swiper-title">
                                <?php
                                    if($slider['title']):
                                ?>
                                    <span class="d-block" data-caption-animate="fadeInRight" data-caption-delay="200"><?=$slider['title']?></span>
                                <?php
                                    endif;
                                ?>
                                <?php
                                    if($slider['subtitle']):
                                ?>
                                    <span class="d-block" data-caption-animate="fadeInRight" data-caption-delay="300"><?=$slider['subtitle']?></span>
                                <?php
                                    endif;
                                ?>
                        </h3>
                            <div class="oh button-wrap">
                                <a class="button button-lg button-icon button-icon-right button-blue-8" data-caption-animate="slideInDown" data-caption-delay="500" href="<?=$slider['button_link']?>">
                                    <span class="icon mdi mdi-chevron-right"></span><?=$slider['button_text']?></a>
                            </div>
                        </div>
                        <div class="swiper-content-bg-2"></div>
                    </div>
                </div>
        <?php
            endforeach;
        ?>
	</div>
	<!-- Swiper Navigation-->
	<div class="swiper-navigation__module">
		<div class="swiper-pagination__fraction"><span class="swiper-pagination__fraction-index"></span><span class="swiper-pagination__fraction-divider">/</span><span class="swiper-pagination__fraction-count"></span></div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
	<!-- Swiper Pagination-->
	<div class="swiper-pagination" data-bullet-custom="true"></div>
</div>
<?php endif;