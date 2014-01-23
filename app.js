
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express();

// all environments
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get("/", function(req, res) {
    res.sendfile('public/viewer.html');
});

app.get("/cad", function(req, res) {
    res.sendfile('public/viewer.html');
});

app.get("/data/:modelname/:file", function(req, res) {
   res.sendfile("./data/" + req.params.modelname + "/" + req.params.file);
});

http.createServer(app).listen(8080, function(){
  console.log('Express server listening on port ' + 8080);
});
