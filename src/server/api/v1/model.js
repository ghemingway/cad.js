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
    var dirPath = path.join(__dirname, '../../../../data/' + req.params.modelId);
    app.logger.debug('Model: ' + dirPath);
    res.status(200).sendFile('index.json', { root: dirPath });
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

module.exports = function(router, globalApp) {
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
    router.get('/v1/model/resolve/*',       app._storage.resolve);
    router.get('/v1/model/:modelId',        app._storage.fetch);
    router.get('/v1/model',                 app._storage.list);
};