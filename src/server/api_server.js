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
    var self = this;
    this._setRoutes(function() {
        self._setSite();
    });
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
    var self = this;
    var redisPubSubClient = this.redisClient = redis.createClient(this.config.redis.port, this.config.redis.host);
    redisPubSubClient.subscribe('nc:delta');
    // Socket server
    this.server = http.Server(this.express);
    this.ioServer = io(this.server, {});
    this.ioServer.use(ioSession(this.session));
    this.ioServer.on('connection', function (socket) {
        socket.on('disconnect', function(){
//            console.log('Socket disconnected');
        });
    });

    // Wait on the redis pubSub and relay to clients
    redisPubSubClient.on('message',  function (channel, message) {
        var msg = JSON.parse(message);
        console.log('nc:delta: ' + JSON.stringify(msg));
        self.ioServer.emit('nc:delta', msg);
    });
};

/*
 * Core API Routes
 */
APIServer.prototype._setRoutes = function(cb) {
    var self = this;
    require('./api/v1/auth')(this, function() {
        require('./api/v1/storage')(self, function() {
            if (cb) cb();
        });
    });
};

/*
 * Static Site
 */
APIServer.prototype._setSite = function() {
    var self = this;
    var endpoint = this.config.host ? this.config.protocol + '://' + this.config.host + ':' + this.config.port : '';
    var services = {
        api_endpoint: endpoint,
        socket: "",
        version: '/v1',
        auth: "/v1/user",
        model: "/v1/model"
    };
    // Serve the root client framework - customized as needed
    var _serveRoot = function (req, res) {
        var appConfig = {
            title: 'CAD.js',
            source: '/js/main.js',
            services: services,
            config: self.config.client
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
    this.server.listen(this.config.port, function () {
        self.logger.info('CAD.js API Server listening on: ' + self.config.port);
    });
};

/************************** Run the server ******************************/

var app = new APIServer();
app.run();
