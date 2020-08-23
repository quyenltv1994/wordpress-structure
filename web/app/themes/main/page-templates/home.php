<?php
/**
 * Template Name: Trang Chủ
 */
get_header();
?>
    <!--Start Pull HTML here-->
    <?php get_template_part('template-parts/blocks/home-services'); ?>
    <?php get_template_part('template-parts/blocks/home-experience'); ?>
    <?php get_template_part('template-parts/blocks/home-offer'); ?>
    <?php get_template_part('template-parts/blocks/home-cta'); ?>
    <?php get_template_part('template-parts/blocks/home-projects'); ?>
    <?php get_template_part('template-parts/blocks/home-testimonial'); ?>
    <?php get_template_part('template-parts/blocks/home-faq'); ?>
    <?php get_template_part('template-parts/blocks/home-figure'); ?>
    <?php get_template_part('template-parts/blocks/home-clients'); ?>
    <!--END  Pull HTML here-->
<?php get_footer();