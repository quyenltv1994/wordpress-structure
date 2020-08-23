const _ = require('lodash');

var documents = [
    {
        source: 'ouragan_sources/twig/pages/home.twig',
        output: 'public/home.html',

        /* Enable or disable automatic minification for normal mode or --dev mode. */
        minify: {
            prod: true,
            dev: false,
            options: {
                /* Override html-minifier options: https://www.npmjs.com/package/html-minifier */
            }
        },

        /* Enable or disable automatic prettyfication for normal mode or --dev mode. */
        /* Note: If both minify and prettify are enabled, the output file will be minified. */
        prettify: {
            prod: false,
            dev: true,
            options: {
                /* Override pretty options: https://www.npmjs.com/package/pretty */
            }
        },

        twig: {
            namespaces: {},

            variables: {
                // 'name': 'value'

                /* You cannot use the following variable(s) names :
                   settings
                */
            }
        },

        html_validation: {
            enable: true,
            options: {
                /* Override html-validation options: https://www.npmjs.com/package/html-validator */
                /* Options "format", "url" and "data" cannot be overridden. */
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/cate-gorie.twig',
        output: 'public/cate-gorie.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/cate-gorie-casual.twig',
        output: 'public/cate-gorie-casual.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/product.twig',
        output: 'public/product.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/category-location.twig',
        output: 'public/category-location.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/product-location.twig',
        output: 'public/product-location.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/product-casual.twig',
        output: 'public/product-casual.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/login.twig',
        output: 'public/login.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/register.twig',
        output: 'public/register.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/panier.twig',
        output: 'public/panier.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/tunnel.twig',
        output: 'public/tunnel.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/tunnel-comfirmation.twig',
        output: 'public/tunnel-comfirmation.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/contact.twig',
        output: 'public/contact.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/aide.twig',
        output: 'public/aide.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/gift-card.twig',
        output: 'public/gift-card.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {}
        }
    },
    {
        source: 'ouragan_sources/twig/pages/compte.twig',
        output: 'public/compte.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },

    {
        source: 'ouragan_sources/twig/pages/compte1.twig',
        output: 'public/compte1.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },

    {
        source: 'ouragan_sources/twig/pages/compte2.twig',
        output: 'public/compte2.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/boutiques.twig',
        output: 'public/boutiques.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/la-marque.twig',
        output: 'public/la-marque.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/journal.twig',
        output: 'public/journal.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/journal-detail.twig',
        output: 'public/journal-detail.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/journal-detail2.twig',
        output: 'public/journal-detail2.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    },
    {
        source: 'ouragan_sources/twig/pages/lookbook.twig',
        output: 'public/lookbook.html',
        minify: {
            prod: true,
            dev: false,
            options: {
            }
        },

        prettify: {
            prod: false,
            dev: true,
            options: {
            }
        },

        twig: {
            namespaces: {},

            variables: {
            }
        },

        html_validation: {
            enable: true,
            options: {
            }
        }
    }

];

module.exports = documents;