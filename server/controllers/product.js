var _ = require('underscore');

/**
 * Shop Index
 *
 * GET /
 */
exports.index = function(req, res) {

    var data = {
        list_page: {
            on_index: true
        },
        no_current_navigation: true
    };

    _.extend(data, req.app.get('store')());
    return res.render('theme', data);
}

/**
 * Product List
 *
 * GET /products
 */
exports.list = function(req, res) {

    var data = _.extend({
        list_page: {
            products: [
                {
                    title: 'IRO - Top',
                    url: '/product/iro',
                    price_with_currency: '1000 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: true,
                    out_of_stock: false,
                    primary_image: {
                        'url-500': '/images/01.jpg'
                    }
                },
                {
                    title: 'IRO - Top',
                    url: '/product/iro',
                    price_with_currency: '900 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: true,
                    out_of_stock: false,
                    primary_image: {
                        'url-500': '/images/02.jpg'
                    }
                },
                {
                    title: 'IRO - Top',
                    url: '/product/iro',
                    price_with_currency: '1900 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: false,
                    out_of_stock: true,
                    primary_image: {
                        'url-500': '/images/03.jpg'
                    }
                },
                {
                    title: 'IRO - Dress',
                    url: '/product/iro',
                    price_with_currency: '2900 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: false,
                    out_of_stock: true,
                    primary_image: {
                        'url-500': '/images/04.jpg'
                    }
                },
                {
                    title: 'IRO - Dress',
                    url: '/product/iro',
                    price_with_currency: '800 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: true,
                    out_of_stock: false,
                    primary_image: {
                        'url-500': '/images/05.jpg'
                    }
                },
                {
                    title: 'IRO - Dress',
                    url: '/product/iro',
                    price_with_currency: '800 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: true,
                    out_of_stock: false,
                    primary_image: {
                        'url-500': '/images/06.jpg'
                    }
                },
                {
                    title: 'IRO - Dress',
                    url: '/product/iro',
                    price_with_currency: '800 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: true,
                    out_of_stock: false,
                    primary_image: {
                        'url-500': '/images/07.jpg'
                    }
                },
                {
                    title: 'IRO - Dress',
                    url: '/product/iro',
                    price_with_currency: '800 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: true,
                    out_of_stock: false,
                    primary_image: {
                        'url-500': '/images/08.jpg'
                    }
                },
                {
                    title: 'IRO - Dress',
                    url: '/product/iro',
                    price_with_currency: '800 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: true,
                    out_of_stock: false,
                    primary_image: {
                        'url-500': '/images/09.jpg'
                    }
                },
                {
                    title: 'IRO - Dress',
                    url: '/product/iro',
                    price_with_currency: '800 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: true,
                    out_of_stock: false,
                    primary_image: {
                        'url-500': '/images/10.jpg'
                    }
                },
                {
                    title: 'IRO - Dress',
                    url: '/product/iro',
                    price_with_currency: '800 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: true,
                    out_of_stock: false,
                    primary_image: {
                        'url-500': '/images/11.jpg'
                    }
                },
                {
                    title: 'IRO - Dress',
                    url: '/product/iro',
                    price_with_currency: '800 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: true,
                    out_of_stock: false,
                    primary_image: {
                        'url-500': '/images/12.jpg'
                    }
                },
                {
                    title: 'IRO - Dress',
                    url: '/product/iro',
                    price_with_currency: '800 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: true,
                    out_of_stock: false,
                    primary_image: {
                        'url-500': '/images/13.jpg'
                    }
                },
                {
                    title: 'IRO - Dress',
                    url: '/product/iro',
                    price_with_currency: '800 SEK',
                    currency_code: 'SEK',
                    quantity_sum: 10,
                    is_quantity_unlimited: false,
                    in_stock: true,
                    out_of_stock: false,
                    primary_image: {
                        'url-500': '/images/14.jpg'
                    }
                }
            ]
        }
    }, req.app.get('store')());

    data.navigation[0].is_current = true;

    return res.render('theme', data);
}

/**
 * Product Page
 *
 * GET /product/:guid
 */
exports.page = function(req, res) {
    //req.params.guid

    var data = {
        product_page: {
            product: {
                title: 'IRO - Top',
                description: '<h3>Subheading</h3>Taylor printed top with flounce hem 92% Silk 8% Elastane Dryclean Model is 176 cm – Wearing size 0<del>234 SEK</del>',
                url: '/product/iro',
                price_with_currency: '1000 SEK',
                currency_code: 'SEK',
                quantity_sum: 10,
                is_quantity_unlimited: false,
                in_stock: true,
                out_of_stock: false,
                primary_image: {
                    'url-500': '/images/01.jpg'
                },
                variations_select: function() {
                    return function() {
                        var output = '<select name="variation_id" class="tictail_select tictail_variations_select">';
                            output += '<option>Small</option>';
                            output += '<option>Medium</option>';
                            output += '<option>Large</option>';
                            output += '</select>';
                        return output;
                    }
                },
                all_images: [
                    {
                        is_primary: true,
                        'url-500': '/images/01.jpg',
                        'url-1000': '/images/01.jpg'
                    },
                    {
                        'url-500': '/images/02.jpg',
                        'url-1000': '/images/02.jpg'
                    },
                    {
                        'url-500': '/images/03.jpg',
                        'url-1000': '/images/03.jpg'
                    }
                ],
                add_to_cart: {
                    add_to_cart_button: function() {
                        return function(text) {
                            return '<button type="submit" class="tictail_button tictail_add_to_cart_button">'+
                                text+
                                '</button>';
                        }
                    }
                }
            }
        }
    };

    _.extend(data, req.app.get('store')());
    return res.render('theme', data);
}