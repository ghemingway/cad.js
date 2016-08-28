/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";

var path            = require('path');
var app, rootDir;

/************************************************************************/

/*
 * Fetch a model for visualization
 *
 * @param {req.body.username} Username being logged into
 * @param {req.body.password} Password for the account
 * @return {200,username} Successful login yields the username
 */
var _fetch = function(req, res) {
    var dirPath, filename;
    // Handle NC files
    if (req.params.ncId && req.params.shellId) {
        dirPath = path.join(rootDir, req.params.ncId);
        filename = req.params.shellId + '.json';
        app.logger.debug('NC Shell: ' + filename);
    } else if (req.params.ncId && req.params.annoId) {
        dirPath = path.join(rootDir, req.params.ncId);
        filename = req.params.annoId + '.json';
        app.logger.debug('NC Annotation: ' + filename);
    } else if (req.params.ncId) {
        dirPath = path.join(rootDir, req.params.ncId);
        filename = 'state.json';
        app.logger.debug('NC: ' + dirPath + '/' + filename);
    }
    res.status(200).sendFile(filename, { root: dirPath });
};

/************************************************************************/

module.exports = function(globalApp) {
    app = globalApp;
    rootDir = path.join(app.config.rootDir, app.config.storage.options.dir);
    app.logger.info('\tNC Root: ' + rootDir);
    app.router.get('/v1/nc/:ncId',                                  _fetch);
    app.router.get('/v1/nc/:ncId/shell/:shellId',                   _fetch);
    app.router.get('/v1/nc/:ncId/annotation/:annoId',               _fetch);
};