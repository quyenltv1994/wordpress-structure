(function ($) {
    'use strict';

    function animation() {
        if($('body').hasClass('animation-page') && $('body').hasClass('admin-bar')) {
            $('html').addClass('animation-page-html');
        }

        if ($('body').hasClass('animation-page') && $(window).width() > 991) {
            // init controller
            var controller = new ScrollMagic.Controller({
                refreshInterval: 0
            });

            // init scrollbar
            var elem = document.querySelector(".main-scrollbar");
            var scrollbar = Scrollbar.init(elem, {
                damping: 0.05
            });

            scrollbar.addListener(function (status) {
                var y = status.offset.y;

                if(y > 0) {
                    $("#header").addClass("pin");
                }

                else {
                    $("#header").removeClass("pin");
                }
            });


            // tweenImage('img', $('.block-banner'), 1.4);
            // tweenImage('.item img', $('.block-melanger-la-traditio'), 1.4);
            //
            // function tweenImage(Image,blockParent,scale) {
            //     blockParent.each(function () {
            //         var height = $(this).height();
            //         var tl = new TimelineMax();
            //         var img = $(this).find(Image);
            //         tl.to(img, 1, {scale: scale, rotation: 0.01}, "start");
            //
            //         var scrollMagic = new ScrollMagic.Scene({
            //             triggerElement: this,
            //             duration: height,
            //         })
            //             .setTween(tl)
            //             .addTo(controller);
            //
            //         scrollbar.addListener(function () {
            //             scrollMagic.refresh();
            //         });
            //     });
            // }

            // animate each
            $(".block-banner").each(function () {
                var height = $(this).height();
                var tl = new TimelineMax();
                tl.to($(this).find("img"), 1, {scale: 1.4, rotation: 0.01}, "start");

                var scrollMagic = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: height,
                })
                    .setTween(tl)
                    .addTo(controller);

                scrollbar.addListener(function (status) {
                    scrollMagic.refresh();
                });
            });

            $(".block-les-collections .item").each(function () {
                var height = $(window).height();
                var tl = new TimelineMax();
                tl.from($(this).find('.info'), 1, {
                    yPercent: 100,
                    rotation: 0.01
                }, "start");
                tl.to($(this).find('img'), 1, {scale: 1.4, rotation: 0.01}, "start");

                var scrollMagic = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: height,
                })
                    .setTween(tl)
                    .addTo(controller);

                scrollbar.addListener(function () {
                    scrollMagic.refresh();
                });
            });

            $(".block-melanger-la-traditio").each(function () {
                var height = $(window).height();
                var tl = new TimelineMax();
                tl.to($(this).find(".item img"), 1, {scale: 1.4, rotation: 0.01}, "start");

                var scrollMagic = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: height,
                })
                    .setTween(tl)
                    .addTo(controller);

                scrollbar.addListener(function () {
                    scrollMagic.refresh();
                });
            });

            $(".block-boutiques .item-boutiques").each(function () {
                var height = $(window).height();
                var tl = new TimelineMax();
                tl.to($(this).find(' > .image img'), 1, {scale: 1.2, rotation: 0.01}, "start");
                tl.from($(this).find('.row .image'), 1, {
                    yPercent: 60,
                    rotation: 0.01
                }, "start");

                var scrollMagic = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: height,
                })
                    .setTween(tl)
                    .addTo(controller);

                scrollbar.addListener(function () {
                    scrollMagic.refresh();
                });
            });

            $(".block-boutiques .image-bottom").each(function () {
                var height = $(window).height();
                var tl = new TimelineMax();
                tl.to($(this).find('img'), 1, {scale: 1.2, rotation: 0.01}, "start");

                var scrollMagic = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: height,
                })
                    .setTween(tl)
                    .addTo(controller);

                scrollbar.addListener(function () {
                    scrollMagic.refresh();
                });
            });
        }
    }

    function animationPageLaMarque() {
        if ($('body').hasClass('marque-page') && $(window).width() > 991) {
            // init controller
            var controller2 = new ScrollMagic.Controller({
                refreshInterval: 0
            });

            // init scrollbar
            var elem2 = document.querySelector(".main-scrollbar");
            var scrollbar2 = Scrollbar.init(elem2, {
                damping: 0.05
            });

            scrollbar2.addListener(function (status) {
                var y = status.offset.y;

                if(y > 0) {
                    $("#header").addClass("pin");
                }

                else {
                    $("#header").removeClass("pin");
                }
            });

            $(".block-la-marque .list-item .full").each(function () {
                var height = $(window).height();
                var tl = new TimelineMax();
                tl.to($(this).find('.image img'), 1, {scale: 1.2, rotation: 0.01}, "start");

                var scrollMagic = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: height,
                })
                    .setTween(tl)
                    .addTo(controller2);

                scrollbar2.addListener(function () {
                    scrollMagic.refresh();
                });
            });
        }
    }

    $(document).ready(function () {
        animation();
    });

    $(window).on('load', function () {
        animationPageLaMarque();
    });
})(jQuery);
