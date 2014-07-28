var express = require('express'),
	path 	= require('path');

var app = express();

// Create a restful API
var api = {
	characters: require('./api/characters')(app)
};


app.configure(function(){
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.static(path.join(__dirname, '/../client')));
	app.use(app.router);
});

if (process.env.PORT) {
	var server = app.listen(process.env.PORT, function() {
	    console.log('Listening on port %d', server.address().port);
	});
}

module.exports = app;