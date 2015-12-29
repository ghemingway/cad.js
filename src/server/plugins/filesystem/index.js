/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";

var path                = require('path'),
    async               = require('async'),
    _                   = require('lodash'),
    jwt                 = require('jsonwebtoken'),
    fs                  = require('fs');
var app, rootDir, fileList;

/************************************************************************/

var inventoryDirectory = function(dir, cb) {
    fs.readdir(dir, function(err, items) {
        async.map(items, function(item, cb) {
            var itempath = path.join(dir, item);
            // Get info about the item
            fs.lstat(itempath, function(err, stat) {
                //console.log(stat);
                var value;
                if (stat.isDirectory()) {
                    fs.access(itempath + '/index.json', fs.F_OK, function (err) {
                        value = {
                            name: item,
                            types: [err ? 'nc' : 'assembly'],
                            size: stat.size,
                            date_modified: stat.atime
                        };
                        cb(undefined, value);
                    });
                } else cb()
            });
        }, function(err, values) {
            // Remove any undefined values
            values = _.filter(values, function(value) {
                return value != undefined;
            });
            // Return the good values
            cb(err, values);
        });
    });
};

/* Translate a full model path to its short Id */
var _resolve = function(req, res) {
    console.log('Trying to resolve: ' + req.params[0]);
    res.status(200).send({
        modelId: 'asdfalkjslkejlkja'
    });
};

var _query = function(req, res) {
    if (!fileList) {
        app.logger.error('No file-list generated!!!');
        res.status(500).send(err);
    } else {
        app.logger.debug('Models.query: ' + req.auth.username);
        res.status(200).send(fileList);
    }
};

/************************************************************************/

module.exports = function(globalApp) {
    app = globalApp;
    rootDir = path.join(app.config.rootDir, app.config.storage.options.dir);
    inventoryDirectory(rootDir, function(err, files) {
        if (err) {
            console.log(err);
        } else {
            fileList = files;
        }
    });
    app.router.get('/v1/model/resolve/*',   app.auth.validateUser,  _resolve);
    app.router.get('/v1/models',            app.auth.validateUser,  _query);
    require('./assembly')(app);
    require('./nc')(app);
};