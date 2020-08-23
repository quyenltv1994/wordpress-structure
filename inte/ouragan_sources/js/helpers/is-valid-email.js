/*	
	DESCRIPTION: 
	
		Function to check if a string is a valid email address.
		
	DEPENDENCIES: 
	
		none

	USAGE EXAMPLE: 
	
		(function ($) {
			'use strict';
			$(function () {
				if (isValidEmail('contact@google.com')) {
					console.log('It is an email address!');
				}
			});
		})(jQuery);

*/

function isValidEmail(email) {
    if (typeof str == 'string') {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    } else {
        return false;
    }
}