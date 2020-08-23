<?php
$cta = get_field('cta_section');
if($cta):
?>
<!-- Section CTA-->
<section class="section parallax-container" data-parallax-img="<?= $cta['background']['url']?>">
	<div class="parallax-content section-sm section-inset-1 context-dark text-md-left">
		<div class="container">
			<div class="row row-30 justify-content-center align-items-center">
				<div class="col-sm-10 col-md-7 col-lg-6 col-xl-9">
					<h5 class="font-weight-normal text-transform-none oh-desktop"><span class="d-inline-block wow slideInUp"><?=$cta['text']?></span></h5>
				</div>
				<div class="col-md-5 col-lg-4 col-xl-3 text-md-right oh-desktop"><a class="button button-outline button-icon button-icon-right wow slideInDown" href="<?=$cta['button_link']?>"><span class="icon mdi mdi-chevron-right"></span><?=$cta['button_text']?></a></div>
			</div>
		</div>
	</div>
</section>
<?php
endif;