/*	
	DESCRIPTION: 
	
		This plugins allows you to optimise load time on your webpages by loading and displaying an image (as a
		background-image or an img tag) depending on the size and/or the pixel density of the screen. Lazyload allows you
		to load the images as they enter the viewport, drastically improving your website's pagespeed.
		
		- SEO friendly
		- Valid HTML
		- IE 10+
		- Supports both <img> and background-image
		- Detects newly added DOM elements (Ajax)
		- Emits JS events at images init and update
		
	DEPENDENCIES: 
	
		- jQuery
		- https://www.npmjs.com/package/intersection-observer
		- Modernizr tests (test/dom/mutationObserver, test/customevent, test/img/srcset)

	USAGE EXAMPLE: 
	
		Notes: 
		
			- You can add the "load_img_when_page_fully_loaded" class on any lazyloading element to force the browser to begin loading the image when the load event is triggered on window.
			- Use only high-resolution (@2x) images for retina, there is no support for @3x, etc...
			- <picture> and <map> tags are not supported.
			- Be careful when using Retina! Your image's url should not include any comma. http://website.com/hi,im_an_image.jpg 2x will not work.
		
		Usage in HTML
		
			Lazyload + Responsive + Retina:
				
				- As an img Tag: <img class="lazy_responsive_retina_image" src="{{ img_url }}placeholder.jpg" alt="Sample pic" data-lazy-srcset-0-480="{{ img_url }}A.jpg 1x, {{ img_url }}B.jpg 2x" data-lazy-srcset-CUSTOM-CUSTOM="{{ img_url }}C.jpg 1x, {{ img_url }}D.jpg 2x" data-lazy-srcset-1025="{{ img_url }}E.jpg 1x, {{ img_url }}F.jpg 2x" />
				- As a background-image: <div class="lazy_responsive_retina_image" style="background-image: url('{{ img_url }}placeholder.jpg');" data-lazy-srcset-0-480="{{ img_url }}A.jpg 1x, {{ img_url }}B.jpg 2x" data-lazy-srcset-CUSTOM-CUSTOM="{{ img_url }}C.jpg 1x, {{ img_url }}D.jpg 2x" data-lazy-srcset-1025="{{ img_url }}E.jpg 1x, {{ img_url }}F.jpg 2x" > <noscript> <img src="{{ img_url }}E.jpg" alt="Sample pic" /> </noscript> </div>
			
			Lazyload + Responsive:
				
				- As an img Tag: <img class="lazy_responsive_image" src="{{ img_url }}placeholder.jpg" alt="Sample pic" data-lazy-src-0-480="{{ img_url }}A.jpg" data-lazy-src-CUSTOM-CUSTOM="{{ img_url }}C.jpg" data-lazy-src-1025="{{ img_url }}E.jpg" />
				- As a background-image: <div class="lazy_responsive_image" style="background-image: url('{{ img_url }}placeholder.jpg');" data-lazy-src-0-480="{{ img_url }}A.jpg" data-lazy-src-CUSTOM-CUSTOM="{{ img_url }}C.jpg" data-lazy-src-1025="{{ img_url }}E.jpg" > <noscript> <img src="{{ img_url }}E.jpg" alt="Sample pic" /> </noscript> </div>
				
			Lazyload + Retina:
				
				- As an img Tag: <img class="lazy_retina_image" src="{{ img_url }}placeholder.jpg" alt="Sample pic" data-lazy-srcset="{{ img_url }}A.jpg 1x, {{ img_url }}B.jpg 2x" />
				- As a background-image: <div class="lazy_retina_image" style="background-image: url('{{ img_url }}placeholder.jpg');" data-lazy-srcset="{{ img_url }}A.jpg 1x, {{ img_url }}B.jpg 2x" > <noscript> <img src="{{ img_url }}A.jpg" alt="Sample pic" /> </noscript> </div>
				
			Responsive + Retina:
			
				- As an img Tag: <noscript class="responsive_retina_image" data-custom-alt="Sample pic" data-custom-ANY_OTHER_ATTRIBUTE="ANY VALUE" data-srcset-0-480="{{ img_url }}A.jpg 1x, {{ img_url }}B.jpg 2x" data-srcset-CUSTOM-CUSTOM="{{ img_url }}C.jpg 1x, {{ img_url }}D.jpg 2x" data-srcset-1025="{{ img_url }}E.jpg 1x, {{ img_url }}F.jpg 2x" > <img src="{{ img_url }}E.jpg" alt="Sample pic" /> </noscript>
				Note: This will generate an <img class="generated_responsive_retina_image ANY_OTHER_CLASS_FROM_ATTRIBUTE_data-custom-class" /> right next to this <noscript> tag.
				- As a background-image: <div class="responsive_retina_image" data-srcset-0-480="{{ img_url }}A.jpg 1x, {{ img_url }}B.jpg 2x" data-srcset-CUSTOM-CUSTOM="{{ img_url }}C.jpg 1x, {{ img_url }}D.jpg 2x" data-srcset-1025="{{ img_url }}E.jpg 1x, {{ img_url }}F.jpg 2x" > <noscript> <img src="{{ img_url }}E.jpg" alt="Sample pic" /> </noscript> </div>
				
			Lazyload:
			
				- As an img Tag: <img class="lazy_image" src="{{ img_url }}placeholder.jpg" alt="Sample pic" data-lazy-src="{{ img_url }}A.jpg" />
				- As a background-image: <div class="lazy_image" style="background-image: url('{{ img_url }}placeholder.jpg');" data-lazy-src="{{ img_url }}A.jpg" > <noscript> <img src="{{ img_url }}A.jpg" alt="Sample pic" /> </noscript> </div>
					
			Retina:
			
				- As an img Tag: <img class="retina_image" src="{{ img_url }}A.jpg" alt="Sample pic" srcset="{{ img_url }}B.jpg 2x" />
				- As a background-image: <div class="retina_image" data-srcset="{{ img_url }}A.jpg 1x, {{ img_url }}B.jpg 2x" > <noscript> <img src="{{ img_url }}A.jpg" alt="Sample pic" /> </noscript> </div>
				
			Responsive:
			
				- As an img Tag: <noscript class="responsive_image" data-custom-alt="Sample pic" data-custom-ANY_OTHER_ATTRIBUTE="ANY VALUE" data-src-0-480="{{ img_url }}A.jpg" data-src-CUSTOM-CUSTOM="{{ img_url }}C.jpg" data-src-1025="{{ img_url }}E.jpg" > <img src="{{ img_url }}E.jpg" alt="Sample pic" /> </noscript>
				Note: This will generate an <img class="generated_responsive_image ANY_OTHER_CLASS_FROM_ATTRIBUTE_data-custom-class" /> right next to this <noscript> tag.
				- As a background-image: <div class="responsive_image" data-src-0-480="{{ img_url }}A.jpg" data-src-CUSTOM-CUSTOM="{{ img_url }}C.jpg" data-src-1025="{{ img_url }}E.jpg" > <noscript> <img src="{{ img_url }}E.jpg" alt="Sample pic" /> </noscript> </div>

			
		Events listeners
		
			Init
			
				Any element:
				
					(function ($) {
						'use strict';
						$(function () {
							document.addEventListener('imageInit', function (e) {
								console.log('An <img> tag has been generated or an image\'s src attribute or any markup\'s background-image-url has been set.');
								var image = e.target;
							}, true);
						});
					})(jQuery);

				Specific selector :
				
					(function ($) {
						'use strict';
						$(function () {
							$('div.lazy_responsive_retina_image').on('imageInit', function (e) {
								console.log('A div\'s background-image-url has been set.');
								var image = e.target;
							});
						});
					})(jQuery);

			Update
			
				Any element:
				
					(function ($) {
						'use strict';
						$(function () {
							document.addEventListener('imageUpdate', function (e) {
								console.log('An <img> tag that has already been generated\'s src attribute or an image\'s src attribute or any markup\'s background-image-url has changed.');
								var image = e.target;
							}, true);
						});
					})(jQuery);
					
				Specific selector :	
				
					(function ($) {
						'use strict';
						$(function () {
							$('div.lazy_responsive_retina_image').on('imageUpdate', function (e) {
								console.log('A div\'s background-image-url has changed.');
								var image = e.target;
							});
						});
					})(jQuery);

		Other notes
		
			When using lazyload, you may need to detect when the "new" image has loaded. If so, you can use the code below.
			However, It depends on desandro's imagesLoaded library: https://imagesloaded.desandro.com/.
			
			(function ($) {
				'use strict';
				$(function () {
					document.addEventListener('imageInit', function (e) {
						var image = e.target;
						if ($(image).is('.lazy_responsive_retina_image, .lazy_responsive_image, .lazy_retina_image, .lazy_image')) {
							if ($(image).is('img')) {
							  $(image).imagesLoaded(function() {
								 // image has loaded
							   });
							} else {
							   $(image).imagesLoaded( { background: true }, function() {
								 // background-image-url has loaded
							   });
							}
						}
					}, true);
					document.addEventListener('imageUpdate', function (e) {
						var image = e.target;
						if ($(image).is('.lazy_responsive_retina_image, .lazy_responsive_image, .lazy_retina_image, .lazy_image')) {
							if ($(image).is('img')) {
							  $(image).imagesLoaded(function() {
								 // image has loaded
							   });
							} else {
							   $(image).imagesLoaded( { background: true }, function() {
								 // background-image-url has loaded
							   });
							}
						}
					}, true);
				});
			})(jQuery);
			
*/

(function ($) {
    'use strict';

    var isHighDensity = ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
    var images = [];

    var eventInit;
    var eventUpdate;
    if (Modernizr.customevent) {
        eventInit = new Event('imageInit');
        eventUpdate = new Event('imageUpdate');
    } else {
        eventInit = document.createEvent('Event');
        eventInit.initEvent('imageInit', true, true);
        eventUpdate = document.createEvent('Event');
        eventUpdate.initEvent('imageUpdate', true, true);
    }

    var lazyImageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var elem = $(entry.target);
                lazyImageObserver.unobserve(entry.target);
                elem.addClass('lazy_loaded');
                var goodUrl = elem.attr('data-lazyload-init-url');
                if (elem.is('img')) {
                    if (elem.attr('src') != goodUrl) {
                        elem.attr('src', goodUrl);
                        fireEvent(elem, true);
                    }
                } else {
                    if (elem.css('background-image').indexOf(goodUrl) == -1) {
                        elem.css('background-image', 'url(\'' + goodUrl + '\')');
                        fireEvent(elem, true);
                    }
                }
            }
        });
    });

    $(function () {
        initImages();
        $(window).on('resizeend', function () {
            updateImages(false);
        });
        var initImagesTimer = false;
        if (Modernizr.mutationobserver) {
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.addedNodes) {
                        if (initImagesTimer) {
                            clearTimeout(initImagesTimer);
                        }
                        initImagesTimer = setTimeout(function () {
                            initImages();
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
                if (initImagesTimer) {
                    clearTimeout(initImagesTimer);
                }
                initImagesTimer = setTimeout(function () {
                    initImages();
                }, 250);
            });
        }
        $(window).on('load', function () {
            $('.load_img_when_page_fully_loaded').each(function () {
                var elem = $(this);
                if (!elem.hasClass('lazy_loaded')) {
                    lazyImageObserver.unobserve(elem.get(0));
                    elem.addClass('lazy_loaded');
                    var goodUrl = elem.attr('data-lazyload-init-url');
                    if (elem.is('img')) {
                        if (elem.attr('src') != goodUrl) {
                            elem.attr('src', goodUrl);
                            fireEvent(elem, true);
                        }
                    } else {
                        if (elem.css('background-image').indexOf(goodUrl) == -1) {
                            elem.css('background-image', 'url(\'' + goodUrl + '\')');
                            fireEvent(elem, true);
                        }
                    }
                }
            });
        });
    });

    function initImages() {
        var selector = '.lazy_responsive_retina_image:not(.initialized), .lazy_responsive_image:not(.initialized), .lazy_retina_image:not(.initialized), .lazy_image:not(.initialized), .retina_image:not(.initialized):not(img), .responsive_retina_image:not(.initialized), .responsive_image:not(.initialized)';
        if (!Modernizr.srcset) {
            selector += ', img.retina_image:not(.initialized)';
        }
        if ($(selector).length) {
            $(selector).each(function () {
                $(this).addClass('initialized');
                var urls = [];
                var custom_attributes = [];
                var attributes = this.attributes;
                for (var i = 0; i < attributes.length; i++) {
                    var sizesAndUrls = false;
                    if (attributes[i].name.indexOf('data-lazy-srcset-') > -1) {
                        sizesAndUrls = getImagesInformations(attributes[i], 1);
                    } else if (attributes[i].name.indexOf('data-lazy-src-') > -1) {
                        sizesAndUrls = getImagesInformations(attributes[i], 2);
                    } else if (attributes[i].name.indexOf('data-lazy-srcset') > -1) {
                        sizesAndUrls = getImagesInformations(attributes[i], 3);
                    } else if (attributes[i].name.indexOf('data-lazy-src') > -1) {
                        sizesAndUrls = getImagesInformations(attributes[i], 4);
                    } else if (attributes[i].name == 'data-srcset') {
                        sizesAndUrls = getImagesInformations(attributes[i], 5);
                    } else if (attributes[i].name.indexOf('data-srcset-') > -1) {
                        sizesAndUrls = getImagesInformations(attributes[i], 6);
                    } else if (attributes[i].name.indexOf('data-src-') > -1) {
                        sizesAndUrls = getImagesInformations(attributes[i], 7);
                    }
                    if (sizesAndUrls) {
                        urls.push(sizesAndUrls);
                    }
                    if (attributes[i].name.indexOf('data-custom-') > -1) {
                        custom_attributes.push({
                            name: attributes[i].name.replace('data-custom-', ''),
                            value: attributes[i].value
                        });
                    }
                }
                if ($(this).is('img.retina_image')) {
                    urls = [{
                        url: $(this).attr('src'),
                        urlRetina: $(this).attr('srcset').replace('2x', '').trim()
                    }];
                }
                if (!custom_attributes.length) {
                    custom_attributes = false;
                }
                if (!urls.length) {
                    urls = false;
                }
                images.push({
                    elem: this,
                    urls: urls,
                    attributes: custom_attributes
                });
            });
            updateImages(true);
        }
    }

    function updateImages(init) {
        images.forEach(function (image, index, object) {
            var elem = $(image.elem);
            if (elem.length) {
                var goodUrl = false;
                if (image.urls.length > 1) {
                    image.urls.forEach(function (mq) {
                        if (mq.minWidth == 0) {
                            if (window.matchMedia('(max-width: ' + mq.maxWidth + 'px)').matches) {
                                goodUrl = mq;
                            }
                        } else if (!mq.maxWidth) {
                            if (window.matchMedia('(min-width: ' + mq.minWidth + 'px)').matches) {
                                goodUrl = mq;
                            }
                        } else {
                            if (window.matchMedia('(max-width: ' + mq.maxWidth + 'px) and (min-width: ' + mq.minWidth + 'px)').matches) {
                                goodUrl = mq;
                            }
                        }
                    });
                } else {
                    goodUrl = image.urls[0];
                }
                if (goodUrl.urlRetina) {
                    if (isHighDensity) {
                        goodUrl = goodUrl.urlRetina;
                    } else {
                        goodUrl = goodUrl.url;
                    }
                } else {
                    goodUrl = goodUrl.url;
                }
                if (elem.is('.responsive_image, .responsive_retina_image')) {
                    if (!elem.is('noscript')) {
                        changeUrlAndFireEvent(elem, goodUrl, init);
                    } else {
                        var classe;
                        if (elem.is('.responsive_image, .responsive_retina_image')) {
                            classe = 'generated_responsive_image';
                        } else {
                            classe = 'generated_responsive_retina_image';
                        }
                        var nextElement = elem.next('.' + classe);
                        if (nextElement.length) {
                            nextElement.attr('src', goodUrl);
                        } else {
                            var attributesString = '';
                            var attributeClass = ' class="' + classe;
                            image.attributes.forEach(function (attr) {
                                if (attr.name == 'class') {
                                    attributeClass += ' ' + attr.value;
                                } else {
                                    attributesString += ' ' + attr.name + '="' + attr.value + '" ';
                                }
                            });
                            attributeClass += '" ';
                            elem.after('<img src="' + goodUrl + '"' + attributeClass + attributesString + '/>');
                        }
                        fireEvent(elem, init);
                    }
                } else {
                    changeUrlAndFireEvent(elem, goodUrl, init);
                }
            } else {
                object.splice(index, 1);
            }
        });
    }

    function changeUrlAndFireEvent(elem, goodUrl, init) {
        if (elem.attr('class').indexOf('lazy_') > -1) {
            if (init) {
                elem.attr('data-lazyload-init-url', goodUrl);
                lazyImageObserver.observe(elem.get(0));
            } else {
                if (!elem.hasClass('lazy_loaded')) {
                    elem.attr('data-lazyload-init-url', goodUrl);
                } else {
                    if (elem.is('img')) {
                        if (elem.attr('src') != goodUrl) {
                            elem.attr('src', goodUrl);
                            fireEvent(elem, init);
                        }
                    } else {
                        if (elem.css('background-image').indexOf(goodUrl) == -1) {
                            elem.css('background-image', 'url(\'' + goodUrl + '\')');
                            fireEvent(elem, init);
                        }
                    }
                }
            }
        } else {
            if (elem.is('img')) {
                if (elem.attr('src') != goodUrl) {
                    elem.attr('src', goodUrl);
                    fireEvent(elem, init);
                }
            } else {
                if (elem.css('background-image').indexOf(goodUrl) == -1) {
                    elem.css('background-image', 'url(\'' + goodUrl + '\')');
                    fireEvent(elem, init);
                }
            }
        }
    }

    function fireEvent(elem, init) {
        if (init) {
            elem.get(0).dispatchEvent(eventInit);
        } else {
            elem.get(0).dispatchEvent(eventUpdate);
        }
    }

    function getImagesInformations(attr, type) {
        var attrName = attr.name;
        var attrValue = attr.value;
        var result = {};
        var numbers = false;
        var retinaUrls = false;
        switch (type) {
            case 1:
                retinaUrls = getRetinaUrls(attrValue);
                numbers = getSizes(attrName, 'data-lazy-srcset-');
                break;
            case 2:
                result.url = attrValue;
                numbers = getSizes(attrName, 'data-lazy-src-');
                break;
            case 3:
                retinaUrls = getRetinaUrls(attrValue);
                break;
            case 4:
                result.url = attrValue;
                break;
            case 5:
                retinaUrls = getRetinaUrls(attrValue);
                break;
            case 6:
                retinaUrls = getRetinaUrls(attrValue);
                numbers = getSizes(attrName, 'data-srcset-');
                break;
            case 7:
                result.url = attrValue;
                numbers = getSizes(attrName, 'data-src-');
                break;
        }
        if (numbers) {
            if (numbers.length > 1) {
                result.minWidth = numbers[0];
                result.maxWidth = numbers[1];
            } else {
                result.minWidth = numbers[0];
            }
        }
        if (retinaUrls) {
            result.url = retinaUrls.url;
            result.urlRetina = retinaUrls.urlRetina;
        }
        return result;
    }

    function getSizes(attrName, replace) {
        return attrName.replace(replace, '').split('-');
    }

    function getRetinaUrls(attrValue) {
        var result = {};
        var urls = attrValue.split(',');
        urls.forEach(function (url) {
            if (url.indexOf('1x') > -1) {
                result.url = url.replace('1x', '').trim();
            } else if (url.indexOf('2x') > -1) {
                result.urlRetina = url.replace('2x', '').trim();
            }
        });
        return result;
    }


})(jQuery);