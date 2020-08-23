<!-- Page Footer-->
<footer class="section section-md footer-creative context-dark">
	<div class="container">
		<div class="row row-60 justify-content-center justify-content-md-between">
            <?php get_template_part('template-parts/components/footer-information'); ?>
            <?php get_template_part('template-parts/components/footer-news'); ?>
            <?php get_template_part('template-parts/components/footer-introduction'); ?>
		</div>
	</div>
</footer>
</div>
<!-- Global Mailform Output-->
<div class="snackbars" id="form-output-global"></div>
<!-- Javascript-->
<?php wp_footer(); ?>

<?php
// Code Tracking before_closing_body
if ( ACF_SUPPORT && get_field('before_closing_body', 'option') )
    the_field('before_closing_body', 'option');
?>
</body>
</html>