/* Copyright G. Hemingway 2015 */
"use strict";

var http            = require('http'),
    path            = require('path'),
    _               = require('lodash'),
//    io              = require('socket.io'),
//    redis           = require('redis'),
    session         = require('express-session'),
    RedisStore      = require('connect-redis')(session),
    express         = require('express'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    jade            = require('jade'),
    CoreServer      = require('./core_server'),
    util            = require('util');

/************************* Support Site *********************************/

function APIServer() {
    CoreServer.call(this);
    // Setup the session
//    this.redis.session = this.redisClient;
//    this.redis.socket = this.redisClient;
    this._setExpress();
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
    this.express.use(session({
        resave: true,
        saveUninitialized: true,
        cookie: { httpOnly: false },
        store: new RedisStore({ client: this.redis.session }),
        secret: 'imhotep'
    }));
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
 * Restrict a route to just a logged in user
 */
APIServer.prototype.restrictLogin = function(req, res, next) {
    var self = this;
    if (req.session.user) {
        req.session._garbage = new Date();
        req.session.touch();
        next();
    }
    else {
        if (req.cookies && req.cookies.logintoken) {
            var cookieVals = req.cookies.logintoken.split(':');
            if (3 != cookieVals.length) {
                this.logger.warn('Invalid logintoken: ' + req.cookies.logintoken);
                if (req.method === 'HEAD') res.status(401).end();
                else res.status(401).send({ error: 'unauthorized' });
                return;
            }
            this.redis.session.get(req.cookies.logintoken, function(err, value) {
                if (err || !value) {
                    self.logger.debug('Access denied - Unknown login token.');
                    if (req.method === 'HEAD') res.status(401).end();
                    else res.status(401).send({ error: 'unauthorized' });
                } else {
                    self.models.Email.findOne({ address: cookieVals[0] }).populate('user').exec(function(err, email) {
                        if (err || !email) {
                            self.logger.debug('Access denied - Unknown email address from token.');
                            if (req.method === 'HEAD') res.status(401).end();
                            else res.status(401).send({ error: 'unauthorized' });
                        } else {
                            req.session.user = email.user;
                            var loginToken = cookieVals[0] + ':' + uuid.v4() + ':' + (parseInt(cookieVals[2])+1);
                            self.redis.session.del(req.cookies.logintoken);
                            self.redis.session.setex(loginToken, self.config.sessionCookieAge, 0);
                            res.cookie('logintoken', loginToken, { expires: new Date(Date.now() + self.config.sessionRememberAge), path: '/' });
                            next();
                        }
                    });
                }
            });
        } else {
            this.logger.debug('APIServer.restrictLogin - Access denied - caller not logged in.');
            if (req.method === 'HEAD') res.status(401).end();
            else res.status(401).send({ error: 'unauthorized' });
        }
    }
};

/*
 * Restrict route to just admin
 */
APIServer.prototype.restrictAdmin = function(req, res, next) {
    if (req.session.user && req.session.user.admin) next();
    else {
        this.logger.debug('Admin access denied.');
        res.status(401).send({ error: 'unauthorized' });
    }
};

/*
 * Rate limit requests
 */
APIServer.prototype.rateLimit = function(req, res, next) {
    var self = this;
    var ip = 'ratelimit:' + req.ip;
    this.redisClient.llen(ip, function(err, reply) {
        if (err) {
            self.logger.debug('Error - RateLimit redis query: ' + err);
            res.status(500).send({ error: 'server error' });
        }
        else if (reply && reply > 100) {
            self.logger.info('Client being rate limited: %s', ip);
            res.status(401).send({ error: 'unauthorized' });
        } else {
            self.redisClient.exists(ip, function(err, reply) {
                if (err) {
                    self.logger.debug('Error - RateLimit redis query: ' + err);
                    res.status(500).send({ error: 'server error' });
                }
                else if (reply === 0) {
                    self.redisClient.multi()
                        .rpush(ip, ip)
                        .expire(ip, 1)
                        .exec(function(err, reply) {
                            next();
                        });
                } else {
                    self.redisClient.rpushx(ip, ip, function(err, reply) {
                        next();
                    });
                }
            });
        }
    });
};

/*
 * Core API Routes
 */
APIServer.prototype._setRoutes = function() {
    require('./api/v1/session')(this.router, this);
    require('./api/v1/model')(this.router, this);
};

/*
 * Static Site
 */
APIServer.prototype._setSite = function() {
    var self = this;

    /************************* Dynamic Site *********************************/

    var services = {
        api_endpoint: this.config.protocol + '://' + this.config.host + ':' + this.config.port,
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
    this.express.listen(this.config.port, function() {
        self.logger.info('\tCAD.js API Server listening on: ' + self.config.port);
    });
};

/************************** Run the server ******************************/

var app = new APIServer();
app.run();
