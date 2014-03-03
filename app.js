/* G. Hemingway Copyright @2014
 * Lightweight Node.js based CAD file server
 */

/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path'),
    cluster = require('cluster');


// Code to run if we're in the master process
if (cluster.isMaster) {
    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;
    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }


// Code to run if we're in a worker process
} else {
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

    app.get("/cad.js", function(req, res) {
        res.sendfile('public/viewer.html');
    });

    app.get("/cad.prod", function(req, res) {
        res.sendfile('public/index.html');
    });

    app.get("/data/:modelname/:file", function(req, res) {
        res.sendfile("./data/" + req.params.modelname + "/" + req.params.file);
    });

    http.createServer(app).listen(8080, function(){
        console.log('Express server listening on port ' + 8080);
    });
}