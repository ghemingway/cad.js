/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


var fs              = require('fs'),
    _               = require('lodash'),
    async           = require('async'),
    path            = require('path'),
    app;

var rootDir = '../../../../data/';

/***************** File-based Backend Functions *******************/

var inventoryDirectory = function(refPath, cb) {
    var dir = path.join(__dirname, refPath);
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
                            type: err ? 'nc' : 'assembly',
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

/*
 * Fetch a model for visualization
 *
 * @param {req.body.username} Username being logged into
 * @param {req.body.password} Password for the account
 * @return {200,username} Successful login yields the username
 */
var _fetch = function(req, res) {
    var dirPath, filename;

    // Handle assemblies
    if (req.params.assemblyId && req.params.shellId) {
        dirPath = path.join(__dirname, rootDir + req.params.assemblyId);
        filename = 'shell_' + req.params.shellId + '.json';
        app.logger.debug('Assembly Shell: ' + filename);
    } else if (req.params.assemblyId && req.params.annoId) {
        dirPath = path.join(__dirname, rootDir + req.params.assemblyId);
        filename = 'annotation_' + req.params.annoId + '.json';
        app.logger.debug('Assembly Annotation: ' + filename);
    } else if (req.params.assemblyId && req.params.batchId) {
        var type = req.headers['content-type'] === 'application/arraybuffer' ? '.tyson' : '.json';
        dirPath = path.join(__dirname, rootDir + req.params.assemblyId);
        filename = 'batch' + req.params.batchId + type;
        app.logger.debug('Assembly Batch: ' + filename);
    } else if (req.params.assemblyId) {
        dirPath = path.join(__dirname, rootDir + req.params.assemblyId);
        filename = 'index.json';
        app.logger.debug('Assembly: ' + filename);
    }

    // Handle NC files
    if (req.params.ncId && req.params.shellId) {
        dirPath = path.join(__dirname, rootDir + req.params.ncId);
        filename = req.params.shellId + '.json';
        app.logger.debug('NC Shell: ' + filename);
    } else if (req.params.ncId && req.params.annoId) {
        dirPath = path.join(__dirname, rootDir + req.params.ncId);
        filename = req.params.annoId + '.json';
        app.logger.debug('NC Annotation: ' + filename);
    } else if (req.params.ncId) {
        dirPath = path.join(__dirname, rootDir + req.params.ncId);
        filename = 'state.json';
        app.logger.debug('NC: ' + filename);
    }
        res.status(200).sendFile(filename, { root: dirPath });
};



var _list = function(req, res) {
    inventoryDirectory(rootDir, function(err, files) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else res.status(200).send(files);
    });
};

/***************** Module Export Function *******************/

module.exports = function(globalApp) {
    app = globalApp;
    app._storage = {
        resolve:    _resolve,
        fetch:      _fetch,
        list:       _list
    };
    if (_.has(app.config.storage, 'module')) {
        var plugin = require(
            path.join(__dirname, '../../plugins', app.config.storage.module)
        )(app, app.config);
        // Set storage plugin
        app._auth.resolve = _.has(plugin, 'resolve') ? plugin.resolve : app._auth.resolve;
        app._auth.fetch = _.has(plugin, 'fetch') ? plugin.fetch : app._auth.fetch;
        app._auth.list = _.has(plugin, 'list') ? plugin.list: app._auth.list;
    }
    app.router.get('/v1/model/resolve/*',                           app._storage.resolve);
    app.router.get('/v1/assembly/:assemblyId',                      app._storage.fetch);
    app.router.get('/v1/assembly/:assemblyId/batch/:batchId',       app._storage.fetch);
    app.router.get('/v1/assembly/:assemblyId/shell/:shellId',       app._storage.fetch);
    app.router.get('/v1/assembly/:assemblyId/annotation/:annoId',   app._storage.fetch);
    app.router.get('/v1/nc/:ncId',                                  app._storage.fetch);
    app.router.get('/v1/nc/:ncId/shell/:shellId',                   app._storage.fetch);
    app.router.get('/v1/nc/:ncId/annotation/:annoId',               app._storage.fetch);
    app.router.get('/v1/models',                                    app._storage.list);
};