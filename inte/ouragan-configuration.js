const stylesheets = require('./ouragan_configuration/stylesheets'),
    scripts = require('./ouragan_configuration/scripts'),
    argv = require('minimist')(process.argv.slice(2)),
    documents = require('./ouragan_configuration/documents');

const config = {

    /*
    ###########################################
    ########## GLOBAL CONFIGURATION ##########
    ###########################################
    */

    project_name: "Project's name",
    desktop_notifications: false,

    /*
    ###########################################
    ######### JAVASCRIPT CONFIGURATION ########
    ###########################################
    */

    generateJs: {
        /* Enable or disable Javascript compilation */
        enable: true,

        /* Include here any path(s) to check for JS linting */
        paths_to_lint: [
            'ouragan_sources/js/'
        ],

        /* Include here any path(s) to watch for triggering Javascript compilation */
        paths_to_watch: [
            'ouragan_sources/js/'
        ],

        scripts: scripts
    },

    /*
    ###########################################
    ######### SASS / CSS CONFIGURATION ########
    ###########################################
    */

    generateCss: {
        /* Enable or disable Css compilation */
        enable: true,

        /* Include here any path(s) to check for SCSS linting */
        paths_to_lint: [
            'ouragan_sources/scss/'
        ],

        /* Include here any path(s) to watch for triggering CSS compilation */
        paths_to_watch: [
            'ouragan_sources/scss/'
        ],

        stylesheets: stylesheets
    },

    /*
    ###########################################
    ############ HTML CONFIGURATION ###########
    ###########################################
    */

    generateHtml: {
        /* Enable or disable Html compilation */
        enable: true,

        index: {
            /* Enable generation of the project presentation page (index.html) */
            enable: true,

            /* Compiled final index.html destination, relative to root directory. */
            output: 'public/',

            /* Add custom links to the presentation page's header */
            header_links: {
                // 'Google': 'https://google.com',
                // 'Amazon': 'https://amazon.com'
            },

            /* Add other links to the presentation page */
            other_links: {
                // 'Facebook': 'https://facebook.com'
            }
        },

        /* Enable or disable browserSync while watching */
        browsersync: {
            enable: true,
            port: 3000
        },

        /* Include here any path(s) to watch for triggering HTML compilation */
        paths_to_watch: [
            'ouragan_sources/twig/'
        ],

        filters: [
            /*
                {
                    name: 'exampleFilterName',
                    function: function (value) {
                        return value.toUpperCase();
                    }
                }
            */
        ],

        /* You cannot name your functions "ouragan_include_once_css" and "ouragan_include_once_js". */
        functions: [
            {
                name: 'is_dev_mode',
                function: function () {
                    return argv.dev;
                }
            }
        ],

        global_namespaces: {
            'blocks': 'ouragan_sources/twig/blocks',
            'components': 'ouragan_sources/twig/components'
        },

        global_variables: {
            'lang_code': 'fr',
            'lang_code_extended': 'FR',
            'is_ouragan_used': true,
            'favicon_color': '#ffffff',
            'favicon_appname': 'Project name',
            'project_name': 'Project name',
            'include_favicon': true

            /* You cannot use the following variable(s) names :
               settings
            */
        },

        documents: documents
    },

    /*
    ###########################################
    ######### Gitignore CONFIGURATION #########
    ###########################################
    */

    generateGitignore: {
        /* Enable or disable .gitignore compilation */
        enable: true,

        /* Ouragan will use this file's content to create a new .gitignore file and automatically add rules to it according to generated assets. */
        /* WARNING: if you already have a .gitignore file it will be overwritten. Enable this only if you understand the meaning of the sentence above. */
        source: '.gitignore-source'
    },

    /*
    ###########################################
    ########### IMAGE CONFIGURATION ###########
    ###########################################
    */

    generateImages: {
        /* Images folder for imagemin task. */
        folder: 'public/assets/images/'
    },

    /*
    ###########################################
    ########## FAVICON CONFIGURATION ##########
    ###########################################
    */

    generateFavicon: {
        /* Enable or disable favicons compilation */
        enable: true,

        /* Compiled favicon destination */
        output: 'public/assets/images/favicon/',

        /* Favicon source */
        src: 'public/assets/images/favicon.png',

        /* Root folder of your application, CMS, framework... */
        /* This is useful to generate good urls in manifests and avoid 404 errors */
        project_root_directory: '/public/',

        options: {
            /* Override favicons options: https://www.npmjs.com/package/favicons */
            /* The "path" option  cannot be overridden. */
            /* The options "lang", "theme_color" and "appName" are mandatory. */

            /* Simply fill in your app's default language code. Please respect the syntax. */
            /* Language codes list: https://msdn.microsoft.com/en-us/library/ee825488(v=cs.20).aspx */
            lang: 'en-US',

            /* Main color used for iOS/Android's UI  */
            theme_color: '#ffffff',

            /* It should be fewer than 12 characters */
            appName: "Project name"
        }
    }
};

module.exports = config;