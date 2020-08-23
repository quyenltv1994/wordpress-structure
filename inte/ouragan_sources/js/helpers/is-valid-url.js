/*	
	DESCRIPTION: 
	
		Function to check if a string is an Url.
		
	DEPENDENCIES: 
	
		none

	USAGE EXAMPLE: 
	
		(function ($) {
			'use strict';
			$(function () {
				if (isValidUrl('https://www.google.com/')) {
					console.log('Url is valid!');
				}
			});
		})(jQuery);

*/

function isValidUrl(str) {
    if (typeof str == 'string') {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?' + // port
            '(\\/[-a-z\\d%@_.~+&:]*)*' + // path
            '(\\?[;&a-z\\d%@_.,~+&:=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return pattern.test(str);
    } else {
        return false;
    }
}