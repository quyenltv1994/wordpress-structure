/*	
	DESCRIPTION: 
	
		Built-in JavaScript viewport informations (ouragan_display)
		
	DEPENDENCIES: 
	
		- jQuery
		- jquery.resizeend: https://www.npmjs.com/package/jquery.resizeend
		- verge: https://www.npmjs.com/package/verge

	USAGE EXAMPLE: 
	
		Get current viewport informations.
		
			console.log('ouragan_display', ouragan_display);
			var height = ouragan_display.getHeight();
			var width = ouragan_display.getWidth();
			var scrollY = ouragan_display.getScrollY();
			var scrollX = ouragan_display.getScrollX();
			var orientation = ouragan_display.getOrientation();
			
		Read current viewport informations.	

			ouragan_display.width: Returns the current width of the viewport (in pixels).
			ouragan_display.height: Returns the current height of the viewport (in pixels).
			ouragan_display.scrollY: Returns vertical scroll position of the viewport. (Like window.scrollY, but cross-browser.)
			ouragan_display.scrollX: Returns horizontal scroll position of the viewport. (Like window.scrollX, but cross-browser.)
			ouragan_display.orientation: Returns the device orientation : 'portrait', 'landscape' or 'square'.
			
		Get previous viewport informations (after resize).
		
			ouragan_display.widthOrigin: Returns the previous width of the viewport (in pixels).
			ouragan_display.heightOrigin: Returns the previous height of the viewport (in pixels).
			ouragan_display.orientationOrigin: Returns the previous device orientation : 'portrait', 'landscape' or 'square'.	
			
		Get previous viewport informations (after scroll).
		
			ouragan_display.scrollYOrigin: Returns the previous vertical scroll position of the viewport.
			ouragan_display.scrollXOrigin: Returns the previous horizontal scroll position of the viewport.
			
*/

var ouragan_display = {};

(function ($) {
    'use strict';

    ouragan_display.getHeight = function () {
        return verge.viewportH();
    };
    ouragan_display.getWidth = function () {
        return verge.viewportW();
    };
    ouragan_display.getScrollY = function () {
        return verge.scrollY();
    };
    ouragan_display.getScrollX = function () {
        return verge.scrollX();
    };
    ouragan_display.getOrientation = function () {
        return getOrientation(ouragan_display.getWidth(), ouragan_display.getHeight());
    };

    ouragan_display.height = verge.viewportH();
    ouragan_display.width = verge.viewportW();
    ouragan_display.scrollY = verge.scrollY();
    ouragan_display.scrollX = verge.scrollX();
    ouragan_display.orientation = getOrientation(ouragan_display.width, ouragan_display.height);

    $(window).on('resizeend', function () {
        ouragan_display.scrollYOrigin = ouragan_display.scrollY;
        ouragan_display.scrollXOrigin = ouragan_display.scrollX;
        ouragan_display.scrollY = verge.scrollY();
        ouragan_display.scrollX = verge.scrollX();
        ouragan_display.orientationOrigin = ouragan_display.orientation;
        ouragan_display.heightOrigin = ouragan_display.height;
        ouragan_display.widthOrigin = ouragan_display.width;
        ouragan_display.height = verge.viewportH();
        ouragan_display.width = verge.viewportW();
        ouragan_display.orientation = getOrientation(ouragan_display.width, ouragan_display.height);
    });

    $(window).on('scroll', function () {
        ouragan_display.scrollYOrigin = ouragan_display.scrollY;
        ouragan_display.scrollXOrigin = ouragan_display.scrollX;
        ouragan_display.scrollY = verge.scrollY();
        ouragan_display.scrollX = verge.scrollX();
    });

    function getOrientation(width, height) {
        if (height > width) {
            return 'portrait';
        } else if (height < width) {
            return 'landscape';
        } else {
            return 'square';
        }
    }

})(jQuery);