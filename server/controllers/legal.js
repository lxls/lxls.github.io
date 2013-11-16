/**
 * Legal View
 *
 * GET /legal/:guid
 */
exports.view = function(req, res) {

    var data = {};

    data.title = req.params.guid === 'terms' ?
        'Terms' : 'Returns';

    data.content = 'Foo.';

    return res.render('legal', data);
}