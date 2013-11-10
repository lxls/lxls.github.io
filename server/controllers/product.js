/**
 * Shop Index
 *
 * GET /products
 */
exports.index = function(req, res) {

    var data = {
        list_page: {
            on_index: true,
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
                        'url-500': '/images/1.png'
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
                        'url-500': '/images/2.png'
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
                        'url-500': '/images/3.png'
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
                        'url-500': '/images/4.png'
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
                        'url-500': '/images/5.png'
                    }
                }
            ]
        }
    };

    return res.render('theme', data);
}

/**
 * Product List
 *
 * GET /products
 */
exports.list = function(req, res) {

    var data = {
        list_page: true
    };

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
                description: 'Taylor printed top with flounce hem 92% Silk 8% Elastane Dryclean Model is 176 cm – Wearing size 0',
                url: '/product/iro',
                price_with_currency: '1000 SEK',
                currency_code: 'SEK',
                quantity_sum: 10,
                is_quantity_unlimited: false,
                in_stock: true,
                out_of_stock: false,
                all_images: [
                    {'url-500': '/images/1.png'},
                    {'url-500': '/images/2.png'},
                    {'url-500': '/images/3.png'}
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

    return res.render('theme', data);
}