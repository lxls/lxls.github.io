module.exports = function(app) {

    // Product routes
    var product = require('./controllers/product');
    app.get('/', product.index);
    app.get('/products', product.list);
    app.get('/product/:guid', product.page);

    // Legal
    var legal = require('./controllers/legal');
    app.get('/legal/:guid', legal.view);

    // Page routes
    var page = require('./controllers/page');
    app.get('/:guid', page.custom);

}