/*	
	DESCRIPTION: 
	
		Function to detect Safari browser.
		
	DEPENDENCIES:
	
		none	

	USAGE EXAMPLE: 
	
		(function ($) {
			'use strict';
			$(function () {
				if (detectSafari()) {
					alert('This is safari !');
				}
			});
		})(jQuery);

*/

function detectSafari() {
    var UserAgent = navigator.userAgent;
    if (UserAgent.search("Safari") >= 0 && UserAgent.search("Chrome") < 0) {
        return true;
    } else {
        return false;
    }
}