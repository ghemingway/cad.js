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
    app.use(require('static-favicon')());
    app.use(require('body-parser')());
    app.use(require('method-override')());
    app.use(require('serve-static')(path.join(__dirname, '/../public')));
    app.use(require('morgan')('tiny'));
    var router = express.Router();
    app.use(router);

    // development only
    if ('development' == app.get('env')) {
        app.use(require('errorhandler')());
    }

    router.get("/", function(req, res) {
        res.sendfile('../public/viewer.html');
    });

    router.get("/cad.js", function(req, res) {
        var options = { root: path.join(__dirname, '/../public') };
        res.sendfile('viewer.html', options);
    });

    router.get("/cad.prod", function(req, res) {
        var options = { root: path.join(__dirname, '/../public') };
        res.sendfile('../public/index.html', options);
    });

    router.get("/data/:modelname/:file", function(req, res) {
        var options = { root: path.join(__dirname, "../../data/", req.params.modelname) };
        res.sendfile(req.params.file, options);
    });

    http.createServer(app).listen(8080, function(){
        console.log('Express server listening on port ' + 8080);
    });
}