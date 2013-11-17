var _ = require('underscore');

/**
 * Custom Page
 *
 * GET /:guid
 */
exports.custom = function(req, res) {

    // TODO: Support multi level pages

    var data = {},
        page = req.params.guid+'_page';

    data[page] = {
        a: true
    };

    _.extend(data, req.app.get('store')());
    return res.render('theme', data);
}