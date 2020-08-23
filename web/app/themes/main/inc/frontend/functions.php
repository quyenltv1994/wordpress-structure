<?php if (! defined('APP_PATH')) die ('Bad requested!');

//adding a body class to a specific page template
add_filter( 'body_class', 'custom_class' );
function custom_class( $classes ) {
    $classes[] = 'kien-phong';

    $classes = array_filter($classes, function($value) {
        return $value != 'page';
    });

    return $classes;
}

/**
 * Adds async/defer attributes to enqueued / registered scripts.
 *
 * If #12009 lands in WordPress, this function can no-op since it would be handled in core.
 *
 * @link https://core.trac.wordpress.org/ticket/12009
 *
 * @param string $tag    The script tag.
 * @param string $handle The script handle.
 * @return string Script HTML string.
 */
function filter_script_loader_tag( $tag, $handle ) {
    foreach ( [ 'async', 'defer' ] as $attr ) {
        if ( ! wp_scripts()->get_data( $handle, $attr ) ) {
            continue;
        }
        // Prevent adding attribute when already added in #12009.
        if ( ! preg_match( ":\s$attr(=|>|\s):", $tag ) ) {
            $tag = preg_replace( ':(?=></script>):', " $attr", $tag, 1 );
        }
        // Only allow async or defer, not both.
        break;
    }
    return $tag;
}
add_filter( 'script_loader_tag', 'filter_script_loader_tag', 10, 2 );

// wp_site_icon
remove_action ('wp_head', 'wp_site_icon', 99);

// Custom_Walker_Nav_Menu_active
class Custom_Walker_Nav_Menu_active extends Walker_Nav_Menu
{
    function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
        $is_current_item = '';
        if($item->post_parent == 0){
            $item->classes[] = ' rd-nav-item';
        }
        if(array_search('current-menu-item', $item->classes) != 0)
        {
            $item->classes[] = ' active';
        }
        echo '<li class="'.implode(" ", $item->classes).'"><a class="rd-nav-link" href="'.$item->url.'">'.$item->title;
    }

    function end_el( &$output, $item, $depth = 0, $args = array() ) {
        echo '</a></li> ';
    }
}