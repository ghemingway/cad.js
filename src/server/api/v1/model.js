/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


var _               = require('lodash'),
    path            = require('path'),
    app;

/***************** Session Functions *******************/

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
        dirPath = path.join(__dirname, '../../../../data/' + req.params.assemblyId);
        filename = 'shell_' + req.params.shellId + '.json';
        app.logger.debug('Assembly Shell: ' + filename);
    } else if (req.params.assemblyId && req.params.annoId) {
        dirPath = path.join(__dirname, '../../../../data/' + req.params.assemblyId);
        filename = 'annotation_' + req.params.annoId + '.json';
        app.logger.debug('Assembly Annotation: ' + filename);
    } else if (req.params.assemblyId && req.params.batchId) {
        var type = req.headers['content-type'] === 'application/arraybuffer' ? '.tyson' : '.json';
        dirPath = path.join(__dirname, '../../../../data/' + req.params.assemblyId);
        filename = 'batch' + req.params.batchId + type;
        app.logger.debug('Assembly Batch: ' + filename);
    } else if (req.params.assemblyId) {
        dirPath = path.join(__dirname, '../../../../data/' + req.params.assemblyId);
        filename = 'index.json';
        app.logger.debug('Assembly: ' + filename);
    }

    // Handle NC files
    if (req.params.ncId && req.params.shellId) {
        dirPath = path.join(__dirname, '../../../../data/' + req.params.ncId);
        filename = req.params.shellId + '.json';
        app.logger.debug('NC Shell: ' + filename);
    } else if (req.params.ncId && req.params.annoId) {
        dirPath = path.join(__dirname, '../../../../data/' + req.params.ncId);
        filename = req.params.annoId + '.json';
        app.logger.debug('NC Annotation: ' + filename);
    } else if (req.params.ncId) {
        dirPath = path.join(__dirname, '../../../../data/' + req.params.ncId);
        filename = 'state.json';
        app.logger.debug('NC: ' + filename);
    }
        res.status(200).sendFile(filename, { root: dirPath });
};



var _list = function(req, res) {
    res.status(200).send([
        { id: 'asdfasdkja', name: 'foo', date: 'May 1, 1958' },
        { id: 'lsaosa03k', name: 'bar', date: 'April 1, 1958' },
        { id: 's0skemsa', name: 'baz', date: 'June 1, 1958' },
        { id: 'soskeq0cpq', name: 'boo', date: 'July 1, 1958' }
    ]);
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