/*
	DESCRIPTION: 
	
		It will add a <link rel="stylesheet"> element after page load if the variable ouragan_print_css_url is defined.
		
	DEPENDENCIES: 
	
		- jQuery

	USAGE EXAMPLE: 
	
		<script>
			var ouragan_print_css_url = 'path/to/css/print.css';
		</script>
			
*/

(function ($) {
    'use strict';

    $(window).on('load', function () {
        if (typeof ouragan_print_css_url !== 'undefined' && ouragan_print_css_url !== null) {
            $('head').append('<link rel="stylesheet" href="' + ouragan_print_css_url + '" type="text/css" media="print"/>');
        }
    });

})(jQuery);