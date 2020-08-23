(function ($) {
    'use strict';

    var width_window = $(window).width();

    function pinHeader() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('#header').addClass("pin");
            } else {
                $('#header').removeClass("pin");
            }
        });
    }

    function menuMobile() {
        var target = $('.bar-mobile');
        target.click(function () {
            $('html').addClass('open-menu-mobile');
        });

        if (width_window < 1025) {
            $('.menu .menu-item-has-children > a').click(function (event) {
                $('html').addClass('open-menu-mobile');
                event.preventDefault();

                if ($(this).closest('li').hasClass('active')) {
                    $(this).closest('li').removeClass('active');
                    $(this).closest('.wrap-sub-menu').removeClass('active');
                    $(this).closest('li').prevAll().show();
                    $(this).closest('li').nextAll().show();
                } else {
                    $(this).closest('li').addClass('active');
                    $(this).closest('.wrap-sub-menu').addClass('active');
                    $(this).closest('li').prevAll().hide();
                    $(this).closest('li').nextAll().hide();
                }
            });

            $('#header .wrap-header .icon-close').click(function () {
                $('html').removeClass('open-menu-mobile');
            });
        }
    }

    function subMenu() {
        var target = $('.menu .menu-item-has-children > a');

        target.click(function (event) {
            if (!$(this).parent().hasClass("menu-top-have-click")) {
                event.preventDefault();
            } else {
                if ($(".menu-top-have-click").hasClass("active-click")) {
                    $(".menu-top-have-click").removeClass("active-click");
                } else {
                    $(".menu-top-have-click").addClass("active-click");
                    event.preventDefault();
                }
            }

            if (width_window > 1024) {
                if ($(this).parent().hasClass("active")) {
                    $(this).parent().removeClass('active');
                    $("#header").removeClass("open-sub-menu");
                } else {
                    $(this).parent().addClass('active').siblings().removeClass('active');
                    $("#header").addClass("open-sub-menu");
                }
            }
        });
    }

    function language() {
        var target = $('#header .right-top-header .language > a');

        target.click(function (event) {
            event.preventDefault();
            $(this).parent().toggleClass('active');
        });
    }

    function search() {
        var target = $('.right-top-header .icon-search');
        var close = $('.wrap-form-search .icon-cross');

        target.click(function () {
            $('.wrap-form-search .form-group input').focus();
            $('.wrap-form-search').addClass('active');
        });

        close.click(function () {
            $('.wrap-form-search').removeClass('active');
        });
    }

    function nextSection() {
        if (width_window > 991) {
            $('.icon-next-sec').click(function () {
                var sec_next = $(this).closest('[class*="block-"]').next();
                var scrollTop = sec_next.offset().top - $('.scroll-content').offset().top;
                if ($('body').hasClass('home') && $(window).width() > 991) {
                    var $scrollbar = Scrollbar.init(document.querySelector(".main-scrollbar"));

                    TweenMax.to($scrollbar, 2, {scrollTo: {y: scrollTop, autoKill: true}, ease: Power4.easeInOut});
                }
            });
        }
    }

    function convertHeightNewsHome() {
        var slider = $('.block-news .list-product');

        if (slider.length && width_window > 767) {
                setTimeout(function () {
                    var height_img = $('.block-news .news .image').height();
                    var height_slider = $('.block-news .wrap-list-product').height();
                    $('.block-news .wrap-list-product').css('top', (height_img / 2) - (height_slider / 2) + 20);
                }, 1000);
        }
    }

    function dropdown() {
        var title = $(".group-dropdown > a");
        title.click(function (event) {
            event.preventDefault();

            if ($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
            } else {
                $('.group-dropdown').removeClass('active');
                $(this).parent().addClass('active');
            }
        });
    }

    function openPopup() {
        var target = $('[data-popup]');

        target.click(function (event) {
            event.preventDefault();
            var id = $(this).data('popup');
            $('#' + id).addClass('active');
            $("html").addClass('open-popup');
            // $(".scroll-content").addClass('active');
        });

        $('.icon-cross:not(.remove)').click(function () {
            $('.popup-info').removeClass('active');
            $('.popup-center').removeClass('active');
            $("html").removeClass('open-popup');
            // $(".scroll-content").removeClass('active');
            $("html").removeClass('wmpci-popup-open');
            $(".group-dropdown").removeClass('active');
        });

        $('.close-popup').click(function (event) {
            event.preventDefault();
            $('.popup-info').removeClass('active');
            $("html").removeClass('open-popup');
            $(".scroll-content").removeClass('active');
        });

        $("body").mouseup(function (e) {
            var container = $(".wmpci-popup-body");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $(".scroll-content").removeClass('active');
                $("html").addClass("wmpci-popup-close-html");
            }
        });
    }

    function cursor() {
        if ($('body').hasClass('home')) {
            // init plugin
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");

            if (msie <= 0 && !(!!navigator.userAgent.match(/Trident.*rv\:11\./))) // If not Internet Explorer
            {
                if (width_window > 991) {
                    var initCursor = new NodeCursor({
                        cursor: false,
                        node: true,
                        cursor_velocity: 1,
                        node_velocity: 0.25,
                        // native_cursor: 'none',
                        element_to_hover: '.main-header',
                        cursor_class_hover: 'disable',
                        node_class_hover: 'expend',
                        hide_mode: true,
                        hide_timing: 2000,
                    });
                }
            }
        }
    }

    function triggerSliderBanner() {
        var slider = $('.block-banner .list-image');

        if (slider.length && width_window > 991) {
            slider.on('init', function () {
                setTimeout(function () {
                    $('.block-banner .right').click(function () {
                        $('.block-banner .icon-slider-right').trigger('click');
                    });

                    $('.block-banner  .left').click(function () {
                        $('.block-banner .icon-slider-left').trigger('click');
                    });

                    $('.block-banner .right').hover(function () {
                            $('.node').addClass('right');
                        },
                        function () {
                            $('.node').removeClass('right');
                        });
                }, 500);
            });
        }
    }

    function maskDelay() {
        var mask = $('.block-banner .mask');
        if (mask.length) {
            setTimeout(function () {
                $('.block-banner .mask').remove();
            }, 1000);
        }
    }

    function select2() {
        if ($('#pa_taille').length) {
            $('#pa_taille').addClass('form-select2');
        }

        if ($('#select2-edit-address #billing_country').length) {
            $('#select2-edit-address #billing_country').addClass('form-select2-has-search');
        }

        if ($('#select2-edit-address #shipping_country').length) {
            $('#select2-edit-address #shipping_country').addClass('form-select2-has-search');
        }

        if ($('.block-cart .box-code').length) {
            $('.block-cart .box-code input[name="coupon_code"]').attr("placeholder", "");
        }

        var $select = $(".form-select2");
        var $select_search = $(".form-select2-has-search");

        if ($select.length) {
            $select.each(function () {
                var place = $(this).attr('data-placeholder');
                $(this).select2({
                    minimumResultsForSearch: -1,
                    placeholder: place,
                });
            });
        }

        if ($select_search.length) {
            $select_search.each(function () {
                var place = $(this).attr('data-placeholder');
                $(this).select2({
                    placeholder: place,
                });
            });
        }
    }

    function collapse() {
        var question = $('.collapse .item .title-item');

        question.click(function () {
            $(this).toggleClass('active').parent().find('.des').slideToggle();
            $(this).parent().siblings().find('.des').slideUp();
            $(this).parent().siblings().find('.title-item').removeClass("active");
        });
    }

    function showLivraison() {
        $('.wrap-cart-totals .btn-underline').click(function (event) {
            event.preventDefault();
            $(this).closest('.item-livraison').find('form').slideToggle();
        });
    }

    function changeColorBg() {
        if ($('body').hasClass('change-bg-color')) {
            var scrollbar;
            if (width_window > 991) {
                scrollbar = Scrollbar.init(document.querySelector(".main-scrollbar"));
            }
            var color;
            var scroll;
            var height_header = $(".main-header").height();

            scroll = $(window).scrollTop();

            $('[class*="block-"]').each(function () {
                var offset = $(this).offset().top;

                if (offset == 0) {
                    color = $(this).data('color');
                    $('body').css('background-color', color);
                }
            });

            if ($('body').hasClass('home')) {
                $(".wrap-cursor").on('mousemove', function (event) {
                    $('.node').css({
                        left: event.pageX,
                        top: event.pageY,
                        opacity: 1
                    });
                });
            }

            if (width_window > 991) {
                scrollbar.addListener(function () {
                    scroll = $(window).scrollTop() + $(window).height();
                    var scrollTop = $('.scroll-content').offset().top;

                    if ($('body').hasClass('home')) {
                        $(".wrap-cursor").on('mousemove', function (event) {
                            $('.node').css({
                                top: event.pageY - scrollTop
                            });
                        });
                    }

                    $('[class*="block-"]').each(function () {
                        var offset = $(this).offset().top + 150;
                        if (scroll >= offset) {
                            color = $(this).data('color');
                            $('body').css('background-color', color);
                        }
                    });
                });
            } else {
                $(window).scroll(function () {
                    scroll = $(window).scrollTop() + $(window).height();
                    $('[class*="block-"]').each(function () {
                        var offset = $(this).offset().top + 150;
                        if (scroll >= offset) {
                            color = $(this).data('color');
                            $('body').css('background-color', color);
                        }
                    });
                });
            }
        }
    }

    function changeColorBgLaMarque() {
        if ($('body').hasClass('marque-page')) {
            var scrollbar = Scrollbar.init(document.querySelector(".main-scrollbar"));
            var color;
            var scroll;
            var height_header = $(".main-header").height();

            scroll = $(window).scrollTop();

            $('[class*="block-"]').each(function () {
                var offset = $(this).offset().top;

                if (offset == 0) {
                    color = $(this).data('color');
                    $('body').css('background-color', color);
                }
            });

            if (width_window > 991) {
                scrollbar.addListener(function () {
                    scroll = $(window).scrollTop() + $(window).height();

                    $('[class*="block-"]').each(function () {
                        var offset = $(this).offset().top + 150;
                        if (scroll >= offset) {
                            color = $(this).data('color');
                            $('body').css('background-color', color);
                        }
                    });
                });
            } else {
                $(window).scroll(function () {
                    scroll = $(window).scrollTop() + $(window).height();
                    $('[class*="block-"]').each(function () {
                        var offset = $(this).offset().top + 150;
                        if (scroll >= offset) {
                            color = $(this).data('color');
                            $('body').css('background-color', color);
                        }
                    });
                });
            }
        }
    }

    function stickySidebar() {
        if ($('.block-product').length > 0 && width_window > 991) {
            var sidebar = new StickySidebar('.block-product .info-product .col-right .info', {
                containerSelector: '.block-product .info-product',
                topSpacing: 110,
            });


            // var sidebar_parent = new StickySidebar('.block-product .info-product ', {
            //     containerSelector: '.block-product',
            //     topSpacing: 90,
            // });

            var sidebar_slider = new StickySidebar('.block-product .info-product .col-left .list-image', {
                containerSelector: '.block-product .info-product',
                topSpacing: 130,
            });
        }

        if ($('.block-validation').length > 0 && width_window > 991) {
            var sidebar2 = new StickySidebar('.block-validation .col-right .wrap-cart-totals', {
                containerSelector: '.block-validation .col-right',
                topSpacing: 40,
            });

            $('.methods li.woocommerce-SavedPaymentMethods-new label').click(function () {
                sidebar2.updateSticky();
            });
        }
    }

    function controlCompte() {
        if ($('.block-comple').length > 0 && width_window < 768) {
            $('.block-comple .nav-tabs li:not(.is-active)').wrapAll('<ul>');

            $('.block-comple .nav-tabs li.is-active a').click(function (e) {
                e.preventDefault();
                $(this).closest('.nav-tabs').toggleClass('active');
            });
        }
    }

    function validate() {
        $('#password').on('input', function () {
            if (this.value) {
                $('#cpassword').prop('required', true).parsley().validate();
            } else {
                $('#cpassword').prop('required', false).parsley().validate();
            }
        });

        $('#password').on('input', function () {
            if (this.value) {
                $('#password_current').prop('required', true).parsley().validate();
            } else {
                $('#password_current').prop('required', false).parsley().validate();
            }
        });
    }

    function scrollPathName() {
        if (width_window > 991) {
            var pathname = window.location.href; //get path link http
            var height_header = $(".main-header").height();

            if (location.hash && $("body").hasClass("scroll-link")) {
                // $("body").css("height", "auto");

                setTimeout(function () {
                    window.scrollTo(0, 0);
                }, 1);
            }


            if (pathname.indexOf("#") != -1) {
                var hash = location.hash;

                setTimeout(function () {
                    if ($('body').hasClass('marque-page')) {
                        var $scrollbar = Scrollbar.init(document.querySelector(".main-scrollbar"), {});

                        $scrollbar.scrollIntoView(document.querySelector(hash), {
                            offsetTop: -$scrollbar.containerEl.scrollTop,
                        });
                    } else {
                        // $("body.faq-page").css("height", "100%");
                        $('html, body').animate({
                            scrollTop: $(hash).offset().top - height_header
                        }, 1200, 'swing');
                    }
                }, 1500);
            }

            $(".wrap-sub-menu .sub-menu a").click(function () {
                var href = $(this).attr("href");
                var anchor = href.slice(href.search("#"));

                var $scrollbar2 = Scrollbar.init(document.querySelector(".main-scrollbar"), {});

                $scrollbar2.scrollIntoView(document.querySelector(anchor), {
                    offsetTop: -$scrollbar2.containerEl.scrollTop,
                });
            });
        }
    }

    function detailJournal() {
        $(".block-journal-detail .detail p img").each(function () {
            $(this).parent().addClass("wrap-text-image");
            $(this).wrapAll('<div class="image">');

            if ($(this).hasClass("alignleft")) {
                $(this).parent().addClass("alignleft");
            } else {
                $(this).parent().addClass("alignright");
            }

            var alt = $(this).attr("alt");
            $(this).after("<small>" + alt + "</small>");
        });
    }

    function detectMacOs() {
        var UserAgent = navigator.userAgent;
        if (UserAgent.search("Chrome") > 0 && UserAgent.search("Mac") > 0) {
            $('html').addClass('mac-os');
        }
        if (UserAgent.search("Chrome") < 0 && UserAgent.search("Safari") > 0) {
            $('html').addClass('mac-os');
        }
    }

    function removeTextCart() {
        if ($('.block-cart .cart-totals').length) {
            var text = $('.block-cart .cart-totals').html();
            $('.block-cart .cart-totals')
                .html(text.replace('\n' +
                    '\n' +
                    '        \t    \n' +
                    '            Total Weight (g)\n' +
                    '            0\n' +
                    '\t    \n' +
                    '        \n' +
                    '\n' +
                    '    ', ''));
        }
    }

    $(window).on('beforeunload', function () {
        if ($("body").hasClass("scroll-link")) {
            $(window).scrollTop(0);
        }
    });

    $(document).ready(function () {
        pinHeader();
        nextSection();
        menuMobile();
        subMenu();
        search();
        dropdown();
        language();
        openPopup();
        // cursor();
        triggerSliderBanner();
        collapse();
        select2();
        showLivraison();
        changeColorBg();
        controlCompte();
        validate();
        detailJournal();
        removeTextCart();
    });

    $(window).on('load', function () {
        maskDelay();
        stickySidebar();
        scrollPathName();
        convertHeightNewsHome();

        $(".loader").css({"opacity": "0", "visibility": "hidden", "z-index": "-1"});

        setTimeout(function () {
            changeColorBgLaMarque();
        }, 1500);

        if ($("body").hasClass("scroll-link")) {
            setTimeout(function () {
                // $("body.faq-page").css("height", "auto !important");
                $(".block-aide").css("opacity", "1");
                $(".block-la-marque").css("opacity", "1");
            }, 500);
        }

        var delay_popup = 300;
        if ($('.time_wmpci_popup_delay').length) {
            delay_popup = $('.time_wmpci_popup_delay').val();
            setTimeout(function () {
                if ($('html').hasClass('wmpci-popup-open')) {
                    $(".scroll-content").addClass('active');
                }
            }, delay_popup);
        }
    });

    $(document).mouseup(function (e) {
        var container = $(".info-filter, [id*='popup-'], #header .wrap-header, .group-dropdown, #header .wrap-form-search");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('html').removeClass('open-menu-mobile');
            $('.menu li').removeClass('active').show();
            $('.menu .wrap-sub-menu').removeClass('active');
            $('.menu .menu-top-have-click').removeClass('active-click');
            $("#header").removeClass("open-sub-menu");
            $('.wrap-form-search').removeClass('active');
            $('.group-dropdown').removeClass('active');
            $('html').removeClass('open-popup');
            $(".scroll-content").removeClass('active');
            $('[id*="popup-"]').removeClass('active');
        }
    });

})
(jQuery);


function chapeau_quantity_up(param) {
    var inputTag = param.parentNode.parentNode.querySelectorAll('input');
    var idInputTag = inputTag['0'].id;
    var oldValue, newVal;
    jQuery(document).ready(function ($) {
        var input = $('#' + idInputTag),
            btnUpdateCart = $('.btn-update-cart-custom'),
            max = input.attr('max');

        oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            newVal = oldValue;
        } else {
            newVal = oldValue + 1;
        }
        input.val(newVal);
        input.trigger("change");
        btnUpdateCart.prop('disabled', false);
        btnUpdateCart.addClass('black ');
    });
}

function chapeau_quantity_down(param) {
    var inputTag = param.parentNode.parentNode.querySelectorAll('input');
    var idInputTag = inputTag['0'].id;
    var oldValue, newVal;
    jQuery(document).ready(function ($) {
        var input = $('#' + idInputTag),
            btnUpdateCart = $('.btn-update-cart-custom'),
            min = input.attr('min');

        oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            newVal = oldValue;
        } else {
            newVal = oldValue - 1;
        }
        input.val(newVal);
        input.trigger("change");
        btnUpdateCart.prop('disabled', false);
        btnUpdateCart.addClass('black ');
    });
}

function stickySidebar() {
    jQuery(document).ready(function ($) {
        if ($('.block-product').length > 0 && $(window).width() > 991) {
            var sidebar = new StickySidebar('.block-product .info-product .col-right .info', {
                containerSelector: '.block-product .info-product',
                topSpacing: 110,
            });

            var sidebar_slider = new StickySidebar('.block-product .info-product .col-left .list-image', {
                containerSelector: '.block-product .info-product',
                topSpacing: 130,
            });
        }
    });
}

function stickySidebar() {
    jQuery(document).ready(function ($) {
        if ($('.block-product').length > 0 && $(window).width() > 991) {
            var sidebar = new StickySidebar('.block-product .info-product .col-right .info', {
                containerSelector: '.block-product .info-product',
                topSpacing: 110,
            });

            var sidebar_slider = new StickySidebar('.block-product .info-product .col-left .list-image', {
                containerSelector: '.block-product .info-product',
                topSpacing: 130,
            });
        }
    });
}