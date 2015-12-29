/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


var fs                  = require('fs'),
    path                = require('path'),
    _                   = require('lodash');

/************************************************************************/

module.exports = function(app, cb) {
    var keyPath = path.join(app.config.rootDir, app.config.security.key_file);
    // Read the auth private key for all JWT generation
    fs.readFile(keyPath, function(err, value) {
        if (err) {
            app.logger.error('Unable to read key: ' + keyPath);
            process.exit(-1);
        }
        app.config.security.key = value;
        if (_.has(app.config.auth, 'module')) {
            app.logger.info('Configuring auth/auth plugin: ' + app.config.auth.module);
            var plugin = require(
                path.join(__dirname, '../../plugins', app.config.auth.module)
            )(app);
            if (cb) cb();
        }
    });
};