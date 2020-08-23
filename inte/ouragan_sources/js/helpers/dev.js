/*	
	DESCRIPTION: 
	
		Additionnal console logging for developer.
		
	DEPENDENCIES:
	
		- jQuery

*/

(function ($) {
    'use strict';

    $(function () {
        var msg = 'DOM is ready! JS\'s running 🚀';
        if (typeof ouragan_timer != 'undefined') {
            msg += ' Load time: ' + (parseInt(Date.now()) - parseInt(ouragan_timer)) + 'ms.';
        } else {
            msg += '.';
        }
        console.log(msg);
    });

    $(window).on(
        {
            'load': function () {
                var msg = 'The document has finished loading!';
                if (typeof ouragan_timer != 'undefined') {
                    msg += ' Total load time: ' + (parseInt(Date.now()) - parseInt(ouragan_timer)) + 'ms.';
                }
                console.log(msg);
            },
            'resizeend': function () {
                console.log('Window has been resized!');
            }
        }
    );

    if (typeof ouragan_display != 'undefined') {
        $(window).on('load resizeend', function () {
            console.log('ouragan_display', ouragan_display);
        });
    }

})(jQuery);