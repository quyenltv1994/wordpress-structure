<?php
$projects = get_field('projects_section');
if($projects):
?>
<!-- Latest projects-->
<section class="section section-xl bg-default text-center">
	<div class="container">
		<h4 class="wow fadeInRight"><?=$projects['title']?></h4>
	</div>
	<div class="container-fluid container-inset-0">
		<div class="row row-30 row-desktop-8 gutters-8 hoverdir" data-lightgallery="group">
            <?php
                foreach($projects['projects'] as $project):
                    $normalImage = wp_get_attachment_image_src( get_post_thumbnail_id( $project->ID ), 'project-image' );
                    $fullImage = wp_get_attachment_image_src( get_post_thumbnail_id( $project->ID ), 'project-image-popup' );
                    $service = get_field('service', $project->ID);
            ?>
			<div class="col-sm-6 col-lg-4 col-xxl-3">
				<div class="oh-desktop">
					<!-- Thumbnail Modern-->
					<article class="thumbnail thumbnail-modern block-1 hoverdir-item wow slideInRight" data-hoverdir-target=".thumbnail-modern-caption">
                        <a class="thumbnail-modern-figure" href="<?= $fullImage[0] ?>" data-lightgallery="item">
                            <img src="<?= $normalImage[0] ?>" alt="" width="474" height="355"/>
                        </a>
						<div class="thumbnail-modern-caption">
							<h5 class="thumbnail-modern-title"><a href="<?=the_permalink($project->ID)?>"><?=get_the_title($project->ID)?></a></h5>
							<div class="thumbnail-modern-badge"><?=get_the_title($service->ID)?></div>
						</div>
					</article>
				</div>
			</div>
            <?php
                endforeach;
            ?>
		</div>
	</div>
</section>
<?php endif;