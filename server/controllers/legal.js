/**
 * Legal View
 *
 * GET /legal/:guid
 */
exports.view = function(req, res) {

    var data = {};

    if(req.params.guid === 'terms') {
        data.title = 'Terms';
    }
    else {
        data.title = 'Returns';
    }

    data.content = 'Foo.';

    return res.render('legal', data);
}