<?php if (!defined('APP_PATH')) die ('Bad requested!');

//Create option page
if (function_exists('acf_add_options_page'))
{
    acf_add_options_page(array(
        'page_title' => __('General Settings', DOMAIN),
        'menu_title' => __('Theme options', DOMAIN),
        'menu_slug' => 'default-theme-settings',
        'capability' => 'manage_options',
        'redirect' => false
    ));

    acf_add_options_sub_page(array(
        'page_title' => __('Code Placement', DOMAIN),
        'menu_title' => __('Code Placement', DOMAIN),
        'parent_slug' => 'default-theme-settings',
    ));
}

//load_json
function acf_json_load_point($paths)
{
    // remove original path (optional)
    unset($paths[0]);

    // append path
    $paths[] = get_stylesheet_directory() . '/acf-json';

    // return
    return $paths;
}
add_filter('acf/settings/load_json', 'acf_json_load_point');