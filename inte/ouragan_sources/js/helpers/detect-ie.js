/*	
	DESCRIPTION: 
	
		Function to detect Internet Explorer 10 & 11.
		
	DEPENDENCIES:
	
		none	

	USAGE EXAMPLE: 
	
		(function ($) {
			'use strict';
			$(function () {
				var IE_version = detectIE();
				if (IE_version == 10) {
					alert('This is IE (from v6 to v10) !');
				}
				if (IE_version == 11) {
					alert('This is IE 11 !');
				}
				if (!IE_version) {
					alert('This is not IE !');
				}
			});
		})(jQuery);

*/

function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        if (msie > 0) {
            return 10;
        } else {
            return 11;
        }
    } else {
        return false;
    }
}