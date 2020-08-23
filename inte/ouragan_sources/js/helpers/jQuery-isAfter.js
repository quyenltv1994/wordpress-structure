/*
	DESCRIPTION:

		Function to check if a jQuery Dom Element is after another One in the HTML tree.

	DEPENDENCIES:

		- jQuery

	USAGE EXAMPLE:

		(function ($) {
			'use strict';
			$(function () {
				if (elem1.isAfter(elem2)) {
					console.log('elem1 is after elem2!');
				}
			});
		})(jQuery);

*/

(function ($) {
    $.fn.isAfter = function (sel) {
        return this.prevAll().filter(sel).length !== 0;
    };
})(jQuery);