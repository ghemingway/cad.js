/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


var path                = require('path');
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

    // Handle assemblies
    if (req.params.assemblyId && req.params.shellId) {
        dirPath = path.join(rootDir, req.params.assemblyId);
        filename = 'shell_' + req.params.shellId + '.json';
        app.logger.debug('Assembly Shell: ' + filename);
    } else if (req.params.assemblyId && req.params.annoId) {
        dirPath = path.join(rootDir, req.params.assemblyId);
        filename = 'annotation_' + req.params.annoId + '.json';
        app.logger.debug('Assembly Annotation: ' + filename);
    } else if (req.params.assemblyId && req.params.batchId) {
        var type = req.headers['content-type'] === 'application/arraybuffer' ? '.tyson' : '.json';
        dirPath = path.join(rootDir, req.params.assemblyId);
        filename = 'batch' + req.params.batchId + type;
        app.logger.debug('Assembly Batch: ' + filename);
    } else if (req.params.assemblyId) {
        dirPath = path.join(rootDir, req.params.assemblyId);
        filename = 'index.json';
        app.logger.debug('Assembly: ' + req.params.assemblyId);
    }
    res.status(200).sendFile(filename, { root: dirPath });
};

/************************************************************************/

module.exports = function(globalApp) {
    app = globalApp;
    rootDir = path.join(app.config.rootDir, app.config.storage.options.dir);
    app.logger.info('\tAssembly Root: ' + rootDir);
    app.router.get('/v1/assembly/:assemblyId',                      _fetch);
    app.router.get('/v1/assembly/:assemblyId/batch/:batchId',       _fetch);
    app.router.get('/v1/assembly/:assemblyId/shell/:shellId',       _fetch);
    app.router.get('/v1/assembly/:assemblyId/annotation/:annoId',   _fetch);
};