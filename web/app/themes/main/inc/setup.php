<?php if ( ! defined('APP_PATH')) die ('Bad requested!');

/**
 * Enqueue scripts and styles.
 **/
function setup_scripts() {
    // Styles
    wp_enqueue_style('bootstrap-style', ASSETS_PATH.'/css/bootstrap.css', array(), null);
    wp_enqueue_style('fonts-style', ASSETS_PATH.'/css/fonts.css', array(), null);
    wp_enqueue_style('main-style', ASSETS_PATH.'/css/style.css', array(), null);

    // Add print CSS.
    wp_enqueue_style( 'print-style', get_template_directory_uri() . '/print.css', null, null, 'print' );

    // Scripts
    wp_enqueue_script('core-script', ASSETS_PATH.'/js/core.min.js', array(), null, true);
    wp_script_add_data( 'core-script', 'defer', true );
    wp_enqueue_script('main-script', ASSETS_PATH.'/js/script.js', array(), null, true);
    wp_script_add_data( 'main-script', 'defer', true );

    /* array with elements to localize in scripts */
    $script_localization = array(
        'ajax_url' => admin_url( 'admin-ajax.php' ),
        'home_url' => get_home_url()
    );
    wp_localize_script('main-script', 'script_loc', $script_localization);
}
add_action( 'wp_enqueue_scripts', 'setup_scripts' );

/**
 * Default setup.
 **/
function default_setup(){
    register_nav_menus( array(
        'main_menu' => __('Main Menu', DOMAIN),
        'footer_menu' => __('Footer Menu', DOMAIN)
    ) );

    add_theme_support( 'post-thumbnails' );

    // Add support for full and wide align images.
    add_theme_support( 'align-wide' );

    // Add theme support for selective refresh for widgets.
    add_theme_support( 'customize-selective-refresh-widgets' );

    // Add custom image size.
    add_image_size( 'hero-slider', 1697, 605 );
    add_image_size( 'offer-image', 370, 230 );
    add_image_size( 'testimonial-image', 960, 574 );
    add_image_size( 'client-image', 270, 143 );
    add_image_size( 'project-image', 474, 355, true );
    add_image_size( 'project-image-popup', 1200, 800 );
    add_image_size( 'faq-avatar', 99, 99 );
    add_image_size( 'popular-avatar', 115, 89 );
    add_image_size( 'footer-new', 115, 89 );
}
add_action('init', 'default_setup');