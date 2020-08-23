/*
	DESCRIPTION:

		Function to scroll smoothly to a jQuery HTML Element.

	DEPENDENCIES:

		- jQuery

	USAGE EXAMPLE:

		(function ($) {
			'use strict';
			$(function () {
				var elementToScrollTo = $('#element');
				$(document).on('click', '.scroll-cta', function(e) {
				    scrollTojQueryElement(elementToScrollTo, 10, 500, function(){);
                       console.log('scroll done!');
				    });
				});
			});
		})(jQuery);

*/

function scrollTojQueryElement(element, topMargin, duration, callback) {
    var top = element.offset().top - topMargin;
    $('html, body').stop().animate({
        scrollTop: top
    }, duration, function () {
        if (typeof callback != 'undefined') {
            callback();
        }
    });
}