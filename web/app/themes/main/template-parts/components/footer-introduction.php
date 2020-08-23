<?php
$logo = get_field('footer_logo', 'option');
$slogan = get_field('slogan', 'option');
$copyright = get_field('copyright', 'option');
?>
<div class="col-sm-10 col-md-12 col-lg-3 col-xl-3">
    <div class="oh-desktop">
        <div class="inset-left-xl-20 wow slideInLeft">
            <a class="brand" href="./">
                <img src="<?=$logo['url']?>" alt="" width="180" height="49"/>
            </a>
            <p><?=$slogan?></p>
            <?php
                wp_nav_menu(array(
                    'menu'  => 'footer-menu',
                    'container'       => '',
                    'container_class' => '',
                    'container_id'    => '',
                    'menu_class'      => 'footer-creative-list d-inline-block d-sm-block',
                ));
            ?>
            <!-- Rights-->
            <p class="rights"><span>&copy;&nbsp;</span><span class="copyright-year"></span><span>&nbsp;</span><?=$copyright?></p>
        </div>
    </div>
    <div class="bg-footer-creative"></div>
</div>