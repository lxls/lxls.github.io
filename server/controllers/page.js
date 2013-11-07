/**
 * Custom Page
 *
 * GET /:guid
 */
exports.custom = function(req, res) {
    console.log(req.params.guid);
    // TODO: Look for a page matching guid
    //return res.send('Custom Page');
    res.render('test', {
        name: 'Erik'
    });
}