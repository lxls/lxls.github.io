var express  = require('express'),
    cons     = require('consolidate'),
    app      = express();

// Templates
app.engine('mustache', cons.mustache);
app.set('view engine', 'mustache');
app.set('views', __dirname+'/src');

// Static files
app.use(express.static(__dirname+'/src'));

// Routes
require('./server/routes')(app);

// Listen on <port>
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Tictail server started on port '+port);

// Expose app
exports = module.exports = app;