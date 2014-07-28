var express = require('express'),
  path  = require('path'),
  logfmt = require("logfmt");

var app = express();

app.use(logfmt.requestLogger());

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

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

module.exports = app;