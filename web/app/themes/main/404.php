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
    <section class="section section-single box-transform-wrap novi-background novi-background context-dark">
        <div class="section-single-inner">
            <header class="section-single-header page-header">
                <div class="container"><a href="<?=home_url()?>"><img src="<?= ASSETS_PATH ?>/images/logo-inverse-360x98.png" alt="" width="180" height="49"/></a></div>
            </header>
            <div class="section-single-main">
                <div class="container">
                    <div class="title-modern"><?=__('404', DOMAIN)?></div>
                    <h4 class="text-spacing-0 text-transform-none"><?=__('Page Not Found', DOMAIN)?></h4>
                    <a class="button button-lg button-primary button-winona" href="<?=home_url()?>">Go to home page</a>
                </div>
            </div>
            <div class="section-single-footer">
                <div class="container">
                    <!-- Rights-->
                    <p class="rights"><span>&copy;&nbsp;</span><span class="copyright-year"></span><span>&nbsp;</span><span>Pelicor Floor</span><span>.&nbsp;</span><a href="privacy-policy.html">Privacy policy</a>. Design&nbsp;by&nbsp;<a href="https://zemez.io/">Zemez</a></p>
                </div>
            </div>
        </div>
        <div class="box-transform" style="background-image: url(<?= ASSETS_PATH ?>/images/bg-404.jpg);"></div>
    </section>
</div>
<!-- Global Mailform Output-->
<div class="snackbars" id="form-output-global"></div>
<?php wp_footer(); ?>

<?php
// Code Tracking before_closing_body
if ( ACF_SUPPORT && get_field('before_closing_body', 'option') )
    the_field('before_closing_body', 'option');
?>
</body>
</html>