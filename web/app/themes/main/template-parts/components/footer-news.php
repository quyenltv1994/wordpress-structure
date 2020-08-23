<?php
$title = get_field('popular_title', 'option');
$news = get_field('news', 'option');
$description_newsletters = get_field('newsletter_description', 'option');
$description_form = get_field('newsletter_form', 'option');
?>
<div class="col-sm-9 col-md-6 col-lg-5 col-xl-4">
    <h5 class="footer-creative-title oh-desktop">
        <span class="d-inline-block wow slideInDown"><?=$title?></span></h5>
    <div class="list-popular-post">
        <?php
            foreach($news as $key => $new):
                $image = wp_get_attachment_image_src( get_post_thumbnail_id( $new->ID ), 'footer-new' );
        ?>
        <div class="list-popular-post-item wow fadeInRight">
            <!-- Post Minimal-->
            <article class="post post-minimal post-minimal-2">
                <div class="unit unit-spacing-2 align-items-center flex-column text-center flex-sm-row text-sm-left">
                    <div class="unit-left">
                        <a class="post-minimal-figure" href="<?=the_permalink($new->ID)?>">
                            <img src="<?=$image[0]?>" alt="" width="115" height="89"/></a></div>
                    <div class="unit-body">
                        <p class="post-minimal-title"><a href="<?=the_permalink($new->ID)?>"><?=get_the_title($new->ID)?></a></p>
                        <div class="post-minimal-time">
                            <time datetime="<?= get_the_date("M-d-Y") ?>"><?= get_the_date("M d, Y", $new->ID) ?></time>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        <?php
        endforeach;
        ?>
    </div>
    <p class="wow fadeInRight"><?=$description_newsletters?></p>
    <?=do_shortcode('[contact-form-7 id="216" title="Newsletters Form" html_class="rd-form rd-mailform rd-form-inline rd-form-inline-sm wow fadeInUp justify-content-center"]')?>
</div>