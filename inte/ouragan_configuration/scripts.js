const _ = require('lodash');

var global = [
    {
        /* Compiled final .js file destination, relative to root directory. */
        // output: 'public/assets/js/main.js',
        //output: 'public/assets/js/main.js',

        //You can also pass an array of filepaths instead of a single output path :

        output: [
            'public/assets/js/main.js',
            '../web/app/themes/mlle-chapeau/assets/js/main.js'
        ],

        sources: {
            /* Source files, paths must be relative to root directory. */
            /* Most likely node_modules or includes stuffs */
            /* Order of inclusion will be respected */
            scripts: [
                // 'node_modules/jquery/dist/jquery.min.js',
                'node_modules/slick-carousel/slick/slick.js',
                'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
                'node_modules/select2/dist/js/select2.min.js',
                'node_modules/sticky-sidebar/dist/jquery.sticky-sidebar.js',
                'node_modules/sticky-sidebar/dist/sticky-sidebar.js',
                'node_modules/gsap/src/uncompressed/TweenLite.js',
                'node_modules/gsap/src/uncompressed/TweenMax.js',
                'node_modules/gsap/src/uncompressed/TimelineLite.js',
                'node_modules/gsap/src/uncompressed/TimelineMax.js',
                'node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js',
                'node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
                'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js',
                'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js',
                'node_modules/smooth-scrollbar/dist/smooth-scrollbar.js',
                'node_modules/smooth-scrollbar/dist/plugins/overscroll.js',
                'node_modules/parsleyjs/dist/parsley.js',
                'ouragan_sources/js/helpers/load-print-css.js',
                'ouragan_sources/js/global/**/*.js',
            ],

            /* Include Modernizr tests builds at the beginning of the script if feature-detects is filled. */
            /* Features: https://modernizr.com/download */
            modernizr: {
                /* https://modernizr.com/download?video-videoloop */
                'feature-detects': [
                    // "test/video",
                    // "test/video/loop"
                ],
                /* Add classes in <html> tag ? */
                'add-classes-in-html-tag': false
            }
        },

        /* Enable or disable automatic minification for normal mode or --dev mode. */
        minify: {
            prod: true,
            dev: false
        },

        /* Enable or disable sourcemap generation for normal mode or --dev mode. */
        sourcemap: {
            prod: false,
            dev: true
        },

        /* Include a "ouragan_random" variable in the script. Its value changes everytime you yarn run ouragan. */
        include_random_variable: false
    }
];

var layouts = [
    {
        output: 'public/assets/js/layouts/default.js',
        sources: {
            scripts: [
                'ouragan_sources/js/layouts/default.js'
            ]
        }
    }
];

var pages = [
    {
        output: 'public/assets/js/pages/home.js',
        sources: {
            scripts: [
                'ouragan_sources/js/pages/home.js'
            ]
        }
    }
];

var blocks = [
    {
        output: 'public/assets/js/blocks/wysiwyg-content.js',
        sources: {
            scripts: [
                'ouragan_sources/js/blocks/wysiwyg-content.js'
            ]
        }
    }
];

var components = [];

var scripts = _.concat(global, layouts, pages, blocks, components);
module.exports = scripts;