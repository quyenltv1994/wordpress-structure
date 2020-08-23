/*	
	DESCRIPTION: 
	
		Function to check if a variable is a jQuery object.
		
	DEPENDENCIES: 
	
		none

	USAGE EXAMPLE: 
	
		(function ($) {
			'use strict';
			$(function () {
				if (isjQueryObject(element)) {
					element.get(0).getBoundingClientRect();
				} else {
					element.getBoundingClientRect();
				}
			});
		})(jQuery);

*/

function isjQueryObject(obj) {
    return (obj && (obj instanceof jQuery || obj.constructor.prototype.jquery));
}