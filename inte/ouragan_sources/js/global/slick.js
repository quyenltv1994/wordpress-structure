(function ($) {
    'use strict';

    var width_window = $(window).width();

    function slick(){
        var list_banner = $('.block-banner .list-image');
        var list_banner_item = $('.block-banner .list-image .image');
        if (list_banner_item.length) {
            list_banner.slick(
                {
                    dots: false,
                    arrows: true,
                    slidesToShow: 1,
                    infinite: true,
                    rows: 0,
                    cssEase: 'ease-in-out',
                    speed: 1000,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    nextArrow: "<span class='icon-slider icon-slider-right'></span>",
                    prevArrow: "<span class='icon-slider icon-slider-left'></span>",
                    asNavFor: '.block-banner .box-info',
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                dots: false
                            }
                        }
                    ]
                }
            );

            $('.block-banner .box-info').slick({
                infinite: true,
                dots: true,
                arrows: false,
                slidesToShow: 1,
                cssEase: 'ease-in-out',
                speed: 1000,
                rows: 0,
                fade: true,
                asNavFor: '.block-banner .list-image',
            });
        }

        var list_news = $('.block-news .list-product');
        var list_news_item = $('.block-news .list-product .product');
        if (list_news_item.length) {
            list_news.slick(
                {
                    dots: false,
                    arrows: true,
                    slidesToShow: 1,
                    rows: 0,
                    speed: 1000,
                    adaptiveHeight: true,
                    infinite: false,
                    useTransform: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    appendArrows: $('.block-news .group-icon-slider'),
                    nextArrow: "<span class='icon-slider icon-slider-right'></span>",
                    prevArrow: "<span class='icon-slider icon-slider-left'></span>",
                    asNavFor: '.block-news .list-info-product',

                }
            );

            $('.block-news .list-info-product').slick({
                dots: false,
                arrows: false,
                slidesToShow: 1,
                cssEase: 'ease-in-out',
                speed: 1000,
                rows: 0,
                fade: true,
                asNavFor: '.block-news .list-product',
            });

            $('.block-news .list-product-for').on('init', function(event, slick) {
                $('.block-news .list-product-for .slick-slide.slick-current').addClass('is-active');
            }).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                speed: 800,
                rows: 0,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                        }
                    }
                ]
            });

            list_news.on('afterChange', function(event, slick, currentSlide) {
                $('.block-news .list-product-for').slick('slickGoTo', currentSlide);
                var currrentNavSlideElem = '.block-news .list-product-for .slick-slide[data-slick-index="' + currentSlide + '"]';
                $('.block-news .list-product-for .slick-slide.is-active').removeClass('is-active');
                $(currrentNavSlideElem).addClass('is-active');
            });

            $('.block-news .list-product-for').on('click', '.slick-slide', function(event) {
                event.preventDefault();
                var goToSingleSlide = $(this).data('slick-index');

                list_news.slick('slickGoTo', goToSingleSlide);
            });
        }

        var list_product = $('.block-product .list-image');
        var list_product_item = $('.block-product .list-image .image');
        var number_item = list_product_item.length;
        var arrows, slidesToShow;
        if (list_product_item.length) {
            if(number_item > 4 || number_item == 1) {
                arrows = true;
                slidesToShow = 4;
            }
            else {
                arrows = false;
                slidesToShow = number_item;
            }
            list_product.slick(
                {
                    infinite: true,
                    dots: false,
                    arrows: arrows,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    vertical: true,
                    verticalSwiping: true,
                    focusOnSelect: true,
                    rows: 0,
                    centerMode: false,
                    nextArrow: "<span class='next icon-arrow-right'></span>",
                    prevArrow: "<span class='prev icon-arrow-right'></span>",
                    asNavFor: '.block-product .list-image-for',

                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                vertical: false,
                                verticalSwiping: false,
                                focusOnSelect: false,
                                variableWidth: true,
                            }
                        }
                    ]
                }
            );

            $('.block-product .list-image-for').slick({
                infinite: true,
                dots: false,
                arrows: false,
                slidesToShow: slidesToShow,
                slidesToScroll: 1,
                rows: 0,
                vertical: true,
                verticalSwiping: true,
                touchMove: false,
                asNavFor: '.block-product .list-image',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            vertical: false,
                            verticalSwiping: false,
                            focusOnSelect: false,
                            variableWidth: true,
                        }
                    }
                ]
            });
        }

        var list_image = $('.product .list-image');
        var list_image_item = $('.product .list-image .item');
        if (list_image_item.length) {
            list_image.slick(
                {
                    dots: true,
                    arrows: true,
                    slidesToShow: 1,
                    rows: 0,
                    infinite: true,
                    fade: false,
                    // appendArrows: $('.block-news .group-icon-slider'),
                    nextArrow: "<span class='icon-slider icon-slider-right'></span>",
                    prevArrow: "<span class='icon-slider icon-slider-left'></span>",
                }
            );
        }

        var list_instagram = $('.block-instagram .list-item');
        var list_instagram_item = $('.block-instagram .list-item a');
        if (list_instagram_item.length && width_window < 768) {
            list_instagram.slick(
                {
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                dots: false,
                                arrows: false,
                                slidesToShow: 2,
                                centerMode: true,
                                variableWidth: true,
                                rows: 0,
                            }
                        }
                    ]
                }
            );
        }
    }

    $(document).ready(function () {
        slick();
    });
})(jQuery);


function slick_product_detail() {
    jQuery(document).ready(function ($) {
        var list_product = $('.block-product .list-image');
        var list_product_item = $('.block-product .list-image .image');
        var number_item = list_product_item.length;
        var arrows, slidesToShow;
        if (list_product_item.length) {
            if(number_item > 4 || number_item == 1) {
                arrows = true;
                slidesToShow = 4;
            }
            else {
                arrows = false;
                slidesToShow = number_item;
            }
            list_product.slick(
                {
                    infinite: true,
                    dots: false,
                    arrows: arrows,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    vertical: true,
                    verticalSwiping: true,
                    focusOnSelect: true,
                    rows: 0,
                    centerMode: false,
                    nextArrow: "<span class='next icon-arrow-right'></span>",
                    prevArrow: "<span class='prev icon-arrow-right'></span>",
                    asNavFor: '.block-product .list-image-for',

                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                vertical: false,
                                verticalSwiping: false,
                                focusOnSelect: false,
                                variableWidth: true,
                            }
                        }
                    ]
                }
            );

            $('.block-product .list-image-for').slick({
                infinite: true,
                dots: false,
                arrows: false,
                slidesToShow: slidesToShow,
                slidesToScroll: 1,
                rows: 0,
                vertical: true,
                verticalSwiping: true,
                touchMove: false,
                asNavFor: '.block-product .list-image',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            vertical: false,
                            verticalSwiping: false,
                            focusOnSelect: false,
                            variableWidth: true,
                        }
                    }
                ]
            });
        }
    });
}
