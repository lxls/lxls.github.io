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
    console.log(req.params.guid);
    return res.send('Product Page');
}