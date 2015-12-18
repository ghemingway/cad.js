/* Copyright G. Hemingway 2015 */
"use strict";

var http                = require('http'),
    path                = require('path'),
    _                   = require('lodash'),
    io                  = require('socket.io'),
    ioSession           = require('socket.io-express-session'),
    redis               = require('redis'),
    expSession          = require('express-session'),
    RedisStore          = require('connect-redis')(expSession),
    express             = require('express'),
    bodyParser          = require('body-parser'),
    cookieParser        = require('cookie-parser'),
    jade                = require('jade'),
    CoreServer          = require('./core_server'),
    util                = require('util');

/************************* Support Site *********************************/

var COOKIE_SECRET = 'imhotep';

function APIServer() {
    CoreServer.call(this);
    // Setup the session
    this.session = expSession({
        store: new RedisStore({
            client: this.redis.session
        }),
        cookie: { httpOnly: false },
        secret: COOKIE_SECRET,
        resave: false,
        saveUninitialized: false
    });
    // Set up the rest
    this._setExpress();
    this._setSocket();
    this._setRoutes();
    this._setSite();
}
util.inherits(APIServer, CoreServer);

/*
 * Setup Express Frontend
 */
// Calculate sha1 hash of the file object
APIServer.prototype._setExpress = function() {
    this.express = express();
    this.express.disable('x-powered-by');
    this.express.use(require('serve-favicon')(__dirname + '/../../public/img/favicon.ico'));
    this.express.use(bodyParser.urlencoded({
        extended: true
    }));
    this.express.use(bodyParser.json());
    this.express.use(cookieParser('imhotep'));
    this.express.use(this.session);
    this.express.use(require('method-override')());
    this.express.use(require('serve-static')(path.join(__dirname, '/../../public')));
    this.express.use(require('morgan')('tiny'));
    this.express.engine('jade', jade.__express);
    this.express.set('views', path.join(__dirname, '/views'));
    // Create the core router
    this.router = express.Router();
    this.express.use(this.router);
};

/*
 * Setup the socket server
 */
APIServer.prototype._setSocket = function() {
    this.server = http.Server(this.express);
    this.ioServer = io(this.server);
    this.ioServer.use(ioSession(this.session));
    this.ioServer.on('connection', function (socket) {
//        console.log('Socket connected');

        socket.on('disconnect', function(){
//            console.log('Socket disconnected');
        });
    });
};

/*
 * Core API Routes
 */
APIServer.prototype._setRoutes = function() {
    require('./api/v1/session')(this);
    require('./api/v1/model')(this);
};

/*
 * Static Site
 */
APIServer.prototype._setSite = function() {
    var endpoint = this.config.host ? this.config.protocol + '://' + this.config.host + ':' + this.config.port : '';
    var services = {
        api_endpoint: endpoint,
        socket: "/",
        version: '/v1',
        auth: "/v1/session",
        model: "/v1/model"
    };
    // Serve the root client framework - customized as needed
    var _serveRoot = function (req, res) {
        var appConfig = {
            title: 'CAD.js',
            source: '/js/main.js',
            services: services,
            config: {
                embedded: false,
                auth: false
            }
        };
        res.render('base.jade', appConfig);
    };

    this.router.get('*', _serveRoot);
};

/*
 * Primary run
 */
APIServer.prototype.run = function() {
    var self = this;
    //this.express.listen(this.config.port, function() {
    //    self.logger.info('\tCAD.js API Server listening on: ' + self.config.port);
    //});
    this.server.listen(this.config.port, function () {
        self.logger.info('\tCAD.js API Server listening on: ' + self.config.port);
    });
};

/************************** Run the server ******************************/

var app = new APIServer();
app.run();
