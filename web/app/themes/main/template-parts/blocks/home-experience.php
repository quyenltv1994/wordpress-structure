<?php
$experience = get_field('experience_section');
if($experience):
?>
<section class="section bg-gray-100">
	<div class="container-fluid container-inset-0">
		<div class="row no-gutters">
			<div class="col-md-4 col-lg-5 col-xl-6 box-transform-wrap box-transform-1">
				<div class="box-transform" style="background-image: url(<?= $experience['background']['url'] ?>;"></div>
			</div>
			<div class="col-md-8 col-lg-7 col-xl-6 bg-image-3">
				<div class="tabs-custom tabs-custom-3" id="tabs-12">
					<div class="tab-content tab-content-4 section-inset-7">
                        <?php
                            foreach($experience['items'] as $key => $item):
                        ?>
						<div class="tab-pane fade show <?=$key==0?'active':'';?>" id="tabs-12-<?=$key?>">
							<h4 class="oh-desktop"><span class="d-inline-block wow slideInLeft"><?=$item['title']?></span></h4>
							<p class="wow fadeInRight"><?=$item['description']?></p>
							<div class="button-wrap oh-desktop"><a class="button button-icon button-icon-right button-primary wow slideInUp" href="<?=$item['button_link']?>"><span class="icon mdi mdi-chevron-right"></span><?=$item['button_text']?></a></div>
						</div>
                        <?php
                            endforeach;
                        ?>
					</div>
					<ul class="nav nav-tabs-3">
                        <?php
                            foreach($experience['items'] as $key => $item):
                        ?>
						<li class="nav-item-3" role="presentation"><a class="nav-link-3 <?=$key==0?'active':'';?>" href="#tabs-12-<?=$key?>" data-toggle="tab"><span><?=$item['title_tab']?></span></a></li>
                        <?php
                            endforeach;
                        ?>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<?php endif;