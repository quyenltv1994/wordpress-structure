<?php
$faq = get_field('faq_section');
if($faq):
?>
<!-- Our Services-->
<section class="section section-xl bg-default text-md-left">
	<div class="container">
		<div class="row row-xxl row-50 justify-content-lg-between">
			<div class="col-md-6">
				<h4><?=$faq['title']?></h4>
				<!-- Bootstrap collapse-->
				<div class="card-group-classic" id="accordion6" role="tablist" aria-multiselectable="false">
                    <?php
                        foreach($faq['faq'] as $key => $item):
                            $delay = 0.05*$key;
                    ?>
                    <!--Bootstrap card-->
					<article class="card card-custom card-classic card-classic-2 wow fadeInLeft" data-wow-delay="<?=$delay?>s">
						<div class="card-header" role="tab">
							<div class="card-title">
                                <a class="<?=$key==0?'':'collapsed';?>" id="accordion6-card-head-optbigck-<?=$key?>" data-toggle="collapse" data-parent="#accordion6" href="#accordion6-card-body-gxmgbkvm-<?=$key?>" aria-controls="accordion6-card-body-gxmgbkvm" aria-expanded="true" role="button">
                                    <?=$item['question']?>
								<div class="card-arrow"></div></a>
							</div>
						</div>
							<div class="collapse <?=$key==0?'show':'';?>" id="accordion6-card-body-gxmgbkvm-<?=$key?>" aria-labelledby="accordion6-card-head-optbigck-<?=$key?>" data-parent="#accordion6" role="tabpanel">
								<div class="card-body">
									<p><?=$item['answer']?></p>
								</div>
							</div>
					</article>
                     <?php
                        endforeach;
                     ?>
								</div>
							</div>
                    <?php if($faq['contact']): $contact = $faq['contact']; ?>
							<div class="col-md-6 col-lg-5">
								<article class="team-classic">
									<div class="unit flex-column flex-sm-row align-items-start align-items-sm-center">
										<div class="unit-left"><a class="team-classic-figure-3" href="#"><img src="<?=$contact['avatar']['sizes']['faq-avatar']; ?>" alt="" width="99" height="99"/></a></div>
										<div class="unit-body">
											<h5 class="team-classic-title-2"><?=$contact['contact_text'];?></h5>
											<div class="team-classic-name"><a href="#"><?=$contact['name'];?></a>, <span><?=$contact['position'];?></span></div>
										</div>
									</div>
								</article>
								<?php echo do_shortcode($contact['form_contact']); ?>
							</div>
			        <?php endif; ?>
						</div>
					</div>
				</section>
<?php
endif;