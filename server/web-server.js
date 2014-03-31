var express = require('express');
var app = express();

// Create a restful API
var api = {
	characters: require('./api/characters')(app)
};


app.configure(function(){
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '\\..\\client'));
	app.use(app.router);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});