module.exports = function(app) {

    // Product routes
    var product = require('./controllers/product');
    app.get('/', product.index);
    app.get('/products', product.list);
    app.get('/product/:guid', product.page);

    // Page routes
    var page = require('./controllers/page');
    app.get('/:guid', page.custom);

}