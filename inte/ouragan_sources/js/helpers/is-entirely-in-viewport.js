/*	
	DESCRIPTION: 
	
		Function to check if HTML Element is ENTIRELY visible in viewport.
		
	DEPENDENCIES:
	
		- ./display.js and its dependencies

	USAGE EXAMPLE: 
	
		(function ($) {
			'use strict';
			$(window).on('load', function () { // Always wait for CSS to load
				var div = $('.mydiv').get(0);
				if (isEntirelyInViewport(div)) {
					console.log('the div is entirely in the viewport');
				}
			});
		})(jQuery);

*/

function isEntirelyInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= ouragan_display.getHeight() &&
        rect.right <= ouragan_display.getWidth()
    );
}