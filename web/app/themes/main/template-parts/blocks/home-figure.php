<?php
$fact = get_field('fact_section');
if($fact):
?>
<section class="section parallax-container" data-parallax-img="<?=$fact['background']['url']?>">
	<div class="parallax-content section-xxl context-dark">
		<div class="container">
			<h5 class="font-weight-light text-spacing-200 wow fadeInLeft"><?=$fact['sub_title']?></h5>
			<h2 class="font-weight-light text-spacing-200 wow fadeInRight"><?=$fact['title']?></h2>
			<div class="counter-modern-wrap">
                <?php
                    foreach($fact['items'] as $item):
                ?>
				<div class="counter-modern">
					<h3 class="counter-modern-number"><span class="counter"><?=$item['counter']?></span><?php if(strpos( $item['counter'], '+' )): ?><span class="symbol">+</span> <?php endif; ?>
					</h3>
					<div class="counter-modern-decor"></div>
					<p class="counter-modern-title"><?=$item['name']?></p>
				</div>
                 <?php
                    endforeach;
                 ?>
			</div>
		</div>
	</div>
</section>
<?php endif;