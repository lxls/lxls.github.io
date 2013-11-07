/**
 * Product List
 *
 * GET /products
 */
exports.list = function(req, res) {
    console.log(req, res);
    return res.send('Product List');
}

/**
 * Product Page
 *
 * GET /product/:guid
 */
exports.page = function(req, res) {
    console.log(req, res);
    return res.send('Product Page');
}