<?php
$services = get_field('service_section');
if($services):
?>
<!-- Services-->
<section class="section section-inset-6 bg-default">
	<div class="container">
		<h4 class="wow fadeInLeft"><?=$services['title']?></h4>
		<div class="row row-xs no-md-gutters justify-content-center bordered-2">
            <?php
                foreach($services['service'] as $service):
                    $icon = get_field('icon', $service->ID);
            ?>
			<div class="col-sm-6 col-lg-4">
				<div class="services-modern">
					<article class="box-icon-modern wow fadeInDown">
						<div class="box-icon-modern-icon <?=$icon?>"></div>
						<h5 class="box-icon-modern-title"><a href="<?=the_permalink($service->ID)?>"><?= get_the_title($service->ID); ?></a></h5>
						<p class="box-icon-modern-text"><?=get_the_excerpt($service->ID)?></p>
                        <a class="box-icon-modern-link" href="<?=the_permalink($service->ID)?>"><?=__("Read More", DOMAIN)?><span class="icon mdi mdi-arrow-right"></span></a>
					</article>
				</div>
			</div>
            <?php
               endforeach;
            ?>
		</div>
	</div>
</section>
<?php
endif;