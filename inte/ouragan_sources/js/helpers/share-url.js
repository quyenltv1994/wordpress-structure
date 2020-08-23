/*	
	DESCRIPTION: 
	
		Function to open a share window of specific url for Twitter, Facebook or LinkedIn.
		If url parameter is false then the url will be equal to the current meta canonical or current browser's url.
		
	DEPENDENCIES: 
	
		- jQuery
		- ./display.js and its dependencies

	USAGE EXAMPLE: 
	
		(function ($) {
			'use strict';
			$(function () {
				$('#facebook').click(function (e) {
					e.preventDefault();
					var url = $(this).attr('data-url');
					share_url('facebook', url);
				});
				$('#twitter').click(function (e) {
					e.preventDefault();
					var url = $(this).attr('data-url');
					share_url('twitter', url);
				});
				$('#linkedin').click(function (e) {
					e.preventDefault();
					var url = $(this).attr('data-url');
					share_url('linkedin', url);
				});
			});
		})(jQuery);
		
		<span id="facebook" data-url="http://google.com/" />
		<span id="twitter" data-url="http://google.com/" />
		<span id="linkedin" data-url="http://google.com/" />

*/

function share_url(social_network, url) {
    var windowObjectReference;
	if (!url) {
		url = window.location.href;
		var canonical = $('link[rel="canonical"]');
		if (canonical.length) {
			if (canonical.get(0).hasAttribute('href')) {
				url = canonical.attr('href');
			}
		}
	}
    if (social_network == 'facebook') {
        windowObjectReference = window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(url), 'fbShareWindow', 'height=450, width=550, resizable=1, top=' + (ouragan_display.getHeight() / 2 - 225) + ', left=' + (ouragan_display.getWidth() / 2 - 275) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    } else if (social_network == 'twitter') {
        windowObjectReference = window.open('https://twitter.com/intent/tweet?url=' + encodeURI(url), 'TwitterShareWindow', 'height=285, width=550, resizable=1, top=' + (ouragan_display.getHeight() / 2 - 142.5) + ', left=' + (ouragan_display.getWidth() / 2 - 275) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    } else if (social_network == 'linkedin') {
        windowObjectReference = window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURI(url), 'LinkedInShareWindow', 'height=400, width=550, resizable=1, top=' + (ouragan_display.getHeight() / 2 - 200) + ', left=' + (ouragan_display.getWidth() / 2 - 275) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    }
    return windowObjectReference;
}
