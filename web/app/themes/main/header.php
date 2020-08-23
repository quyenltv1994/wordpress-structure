<!DOCTYPE html>
<html class="wide wow-animation" <?php language_attributes(); ?>>
<head>
	<meta charset="<?= get_bloginfo('charset'); ?>">
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
	<link rel="apple-touch-icon" sizes="180x180" href="<?= ASSETS_PATH ?>/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?= ASSETS_PATH ?>/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?= ASSETS_PATH ?>/favicon/favicon-16x16.png">
	<link rel="manifest" href="<?= ASSETS_PATH ?>/favicon/site.webmanifest">
	<link rel="mask-icon" href="<?= ASSETS_PATH ?>/favicon/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">

	<!-- Stylesheets-->
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Roboto:100,300,300i,400,500,600,700,900%7CRaleway:500">

	<?php wp_head(); ?>

	<style>.ie-panel{display: none;background: #212121;padding: 10px 0;box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3);clear: both;text-align:center;position: relative;z-index: 1;} html.ie-10 .ie-panel, html.lt-ie-10 .ie-panel {display: block;}</style>

	<?php
    // Code Tracking within_head
    if ( ACF_SUPPORT && get_field('within_head', 'option') )
        the_field('within_head', 'option');
    ?>
</head>
<body <?php body_class(); ?>>

	<?php
	// Page Code Tracking
	if ( get_field('page_code_tracking') )
	    the_field('page_code_tracking');

	// Code Tracking
	if ( ACF_SUPPORT && get_field('after_opening_body', 'option') )
	    the_field('after_opening_body', 'option');
	?>

	<div class="ie-panel">
		<a href="http://windows.microsoft.com/en-US/internet-explorer/">
			<img src="<?= ASSETS_PATH ?>/images/ie8-panel/warning_bar_0000_us.jpg" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today.">
		</a>
	</div>

	<div class="preloader">
		<div class="wrapper-triangle">
			<div class="pen">
				<div class="line-triangle">
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
				</div>
				<div class="line-triangle">
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
				</div>
				<div class="line-triangle">
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
					<div class="triangle"></div>
				</div>
			</div>
		</div>
	</div>

	<div class="page">
		<!-- Page Header and Swiper-->
        <?php if ( is_front_page() ) : ?>
		<section class="section swiper-custom-container-3">
            <?php endif; ?>
			<header class="section page-header">
				<!-- RD Navbar-->
				<div class="rd-navbar-wrap">
					<nav class="rd-navbar rd-navbar-corporate" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="80px" data-xl-stick-up-offset="80px" data-xxl-stick-up-offset="80px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
						<div class="rd-navbar-collapse-toggle rd-navbar-fixed-element-1" data-rd-navbar-toggle=".rd-navbar-collapse"><span></span></div>

						<div class="rd-navbar-main-outer">
							<div class="rd-navbar-main">
								<?php get_template_part('template-parts/components/main-logo'); ?>

                                <?php get_template_part('template-parts/components/main-menu'); ?>
								
								<?php get_template_part('template-parts/components/top-info'); ?>
							</div>
						</div>
					</nav>
				</div>
			</header>

			<?php if ( is_front_page() ) : get_template_part('template-parts/blocks/hero-slider'); ?>
		</section>
        <?php endif; ?>