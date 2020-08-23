<?php if (!defined('APP_PATH')) die ('Bad requested!');

/**
 * Change the Login Logo
 */
function load_admin_style()
{
    wp_enqueue_style('admin_css', ASSETS_PATH . 'css/admin-style.css', false, '1.0.0');
}
add_action('admin_enqueue_scripts', 'load_admin_style');

function default_login_logo()
{ ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url('<?= get_template_directory_uri() ?>/logo.png');
            height: 80px;
            width: 100%;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            padding-bottom: 30px;
        }
    </style>
<?php }
add_action('login_enqueue_scripts', 'default_login_logo');

function default_login_logo_url()
{
    return home_url();
}
add_filter('login_headerurl', 'default_login_logo_url');

function default_login_logo_url_title()
{
    return get_bloginfo('name');
}
add_filter('login_headertext', 'default_login_logo_url_title');

function fix_logout_url($url)
{
    $redirect = admin_url();
    return $url . '&redirect_to=' . $redirect;
}
add_filter('logout_url', 'fix_logout_url');

// Advanced Custom Fields PRO notice
function acf_admin_notice__error()
{
    $class = 'notice notice-error';
    $message = __('Advanced Custom Fields PRO plugin have to installed and activated!', DOMAIN);

    printf('<div class="%1$s"><p>%2$s</p></div>', esc_attr($class), esc_html($message));
}
if (!ACF_SUPPORT) add_action('admin_notices', 'acf_admin_notice__error');



