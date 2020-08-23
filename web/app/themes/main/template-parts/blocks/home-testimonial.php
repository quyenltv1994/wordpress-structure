<?php
$testimonial = get_field('testimonial_section');
if($testimonial):
?>
<section class="section swiper-container swiper-slider swiper-slider-8" data-loop="true" data-autoplay="5000" data-simulate-touch="false" data-slide-effect="fade">
	<div class="swiper-wrapper text-left">
        <?php
            foreach($testimonial['testimonials'] as $testimonial):
                $background = $testimonial['background']['sizes'];
        ?>
		<div class="swiper-slide context-dark">
			<div class="swiper-slide-caption section-lg">
				<div class="container">
					<div class="row justify-content-center justify-content-md-between">
						<div class="col-5 d-none d-md-block position-static">
							<div class="quote-classic-figure"><img src="<?= $background['testimonial-image']?>" alt="" width="960" height="574"/>
							</div>
						</div>
						<div class="col-sm-11 col-md-7 col-xl-6">
							<div class="inset-left-xl-70">
								<h4><?=__('What clients say', DOMAIN)?></h4>
								<!-- Quote Classic-->
								<article class="quote-classic quote-classic-2 quote-classic-4" data-caption-animate="fadeInLeft" data-caption-delay="0">
									<div class="quote-classic-text">
										<p class="q"><?=$testimonial['content']?></p>
									</div>
									<p class="quote-classic-author"><?=$testimonial['author']?></p>
								</article>
							</div>
						</div>
					</div>
				</div>
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
</section>
<?php endif;