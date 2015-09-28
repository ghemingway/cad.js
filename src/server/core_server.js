/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";

var http        = require('http'),
    path        = require('path'),
    _           = require('lodash'),
    opts        = require('commander'),
    redis       = require('redis'),
    winston     = require('winston'),
    configurator= require('./configurator');


/*****************************************************************************************/

function CoreServer() {
    var pjson = require('../../package.json');
    opts
        .version(pjson.version)
        .option('-p, --port [port]', 'Port on which to run the server [8080]', '8080')
        .option('-c, --config [file]', 'Configuration File [config.json]', 'config.json')
        .option('-e, --environment [env]', 'Environment to use [development]', 'development')
        .parse(process.argv);
    this.config = configurator(opts.config, opts.environment);
    // Establish core
    this.models = {};
    this.controllers = {};
    this.logger = new winston.Logger({
        transports: [
//            new (winston.transports.File)({ filename: 'server.log' }),
            new (winston.transports.Console)({ level: 'debug' })
        ]
    });
    // Setup the rest of the primary infrastructure connections
    var self = this;
    this._redisConnection(function() {
        // Setup the async dispatch
        self.async = {};
        // Setup the core controllers
        self._setControllers();
    });
}

CoreServer.prototype._redisConnection = function(callback) {
    // Establish connection to Redis
    var self = this;
    this.redisClient = redis.createClient(this.config.redis.port, this.config.redis.host);
    this.redis = {
        async:      this.redisClient,
        fetch:      this.redisClient
    };
    this.redisClient.on('ready', function() {
        self.logger.info('\tRedis Connected.');
        if (callback) callback();
    }).on('error', function() {
        self.logger.error('Not able to connect to Redis.');
        process.exit(-1);
    });
};

CoreServer.prototype._setControllers = function() {
    this.controllers = {
//        Attachment:         require('./core/controllers/attachment')(this),
//        Comment:            require('./core/controllers/comment')(this),
//        Email:              require('./core/controllers/email')(this),
//        Group:              require('./core/controllers/group')(this),
//        Mailbox:            require('./core/controllers/mailbox')(this),
//        Member:             require('./core/controllers/member')(this),
//        Notification:       require('./core/controllers/notification')(this),
//        Permission:         require('./core/controllers/permission')(this),
//        Project:            require('./core/controllers/Project')(this),
//        Role:               require('./core/controllers/role')(this),
//        Search:             require('./core/controllers/search')(this),
//        Tool:               require('./core/controllers/tool')(this),
//        ToolInstance:       require('./core/controllers/tool_instance')(this),
//        User:               require('./core/controllers/user')(this)
    };
};

/*****************************************************************************************/

module.exports = CoreServer;