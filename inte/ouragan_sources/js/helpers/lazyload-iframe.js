/*	
	DESCRIPTION: 
	
		This plugins allows you to load iframes as they enter the viewport, drastically improving your website's pagespeed.
		
		- Valid HTML
		- IE 10+
		- Detects newly added DOM elements (Ajax)
		- Emits JS events at iframe init
			
	DEPENDENCIES: 
	
		- jQuery
		- https://www.npmjs.com/package/intersection-observer
		- Modernizr tests (test/dom/mutationObserver, test/customevent)

	USAGE EXAMPLE: 
	
		Usage in HTML
		
			<!-- You must use the class 'lazyload-iframe' and the 'data-lazy-src' attribute. -->
			<div class="lazyload-iframe" data-lazy-src="./page.html" data-custom-attribute="example"></div>
			
			After loading, result will be :
			
			<iframe src="./page.html" attribute="example"></iframe>
			
		Events listeners
		
			Initialisation
			
				(function ($) {
					'use strict';
					$(function () {
						document.addEventListener('iframeInit', function (e) {
							console.log('An <iframe> tag has been generated.');
							var iframe = e.target;
						}, true);
					});
				})(jQuery);

			Notes : When using lazyload, you may need to detect when the iframe has loaded. If so, you can use the following code:
			
				(function ($) {
					'use strict';
					$(function () {
						document.addEventListener('iframeInit', function (e) {
							var iframe = e.target;
							$(iframe).on('load', function() {
								// iframe has loaded
							});
						}, true);
					});
				})(jQuery);

*/

(function ($) {
    'use strict';

    var eventInit;
    if (Modernizr.customevent) {
        eventInit = new Event('iframeInit');
    } else {
        eventInit = document.createEvent('Event');
        eventInit.initEvent('iframeInit', true, true);
    }

    var lazyIframeObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var elem = $(entry.target);
                lazyIframeObserver.unobserve(entry.target);
                var custom_attributes = [];
                var attributes = elem.get(0).attributes;
                for (var i = 0; i < attributes.length; i++) {
                    if (attributes[i].name.indexOf('data-custom-') > -1) {
                        custom_attributes.push({
                            name: attributes[i].name.replace('data-custom-', ''),
                            value: attributes[i].value
                        });
                    }
                }
                var markup = '<iframe src="' + elem.attr('data-lazy-src') + '"';
                custom_attributes.forEach(function (custom_attribute) {
                    markup += ' ' + custom_attribute.name + '="' + custom_attribute.value + '" ';
                });
                markup += '></iframe>';
                var newDomElement = $(markup).insertAfter(elem);
                elem.remove();
                newDomElement.get(0).dispatchEvent(eventInit);
            }
        });
    });

    $(function () {
        initIframes();
        $(window).on('resizeend', function () {
            initIframes();
        });
        var initIframesTimer = false;
        if (Modernizr.mutationobserver) {
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.addedNodes) {
                        if (initIframesTimer) {
                            clearTimeout(initIframesTimer);
                        }
                        initIframesTimer = setTimeout(function () {
                            initIframes();
                        }, 250);
                    }
                });
            });
            var config = {
                attributes: false,
                childList: true,
                subtree: true,
                characterData: false
            };
            observer.observe($('body')[0], config);
        } else {
            $(document).on('DOMNodeInserted', function () {
                if (initIframesTimer) {
                    clearTimeout(initIframesTimer);
                }
                initIframesTimer = setTimeout(function () {
                    initIframes();
                }, 250);
            });
        }
    });

    function initIframes() {
        var selector = '.lazyload-iframe:not(.initialized)';
        $(selector).each(function () {
            $(this).addClass('initialized');
            lazyIframeObserver.observe(this);
        });
    }

})(jQuery);