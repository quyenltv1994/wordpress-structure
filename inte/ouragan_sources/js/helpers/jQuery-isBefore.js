/*
	DESCRIPTION:

		Function to check if a jQuery Dom Element is before another One in the HTML tree.

	DEPENDENCIES:

		jQuery

	USAGE EXAMPLE:

		(function ($) {
			'use strict';
			$(function () {
				if (elem1.isBefore(elem2)) {
					console.log('elem1 is before elem2!');
				}
			});
		})(jQuery);

*/

(function ($) {
    $.fn.isBefore = function (sel) {
        return this.nextAll().filter(sel).length !== 0;
    };
})(jQuery);