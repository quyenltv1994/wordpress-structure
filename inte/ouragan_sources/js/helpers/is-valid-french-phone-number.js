/*
	DESCRIPTION:

		Function to check if a string is a french phone number.

	DEPENDENCIES:

		none

	USAGE EXAMPLE:

		(function ($) {
			'use strict';
			$(function () {
				if (isValidFrenchPhoneNumber('0666666666')) {
					console.log('0666666666 is valid!');
				}
			});
		})(jQuery);

*/

function isValidPhoneNumber(value) {
    if (typeof str == 'string') {
        var re = /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$/;
        return re.test(String(value));
    } else {
        return false;
    }
}