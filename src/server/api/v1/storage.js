/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


var _               = require('lodash'),
    path            = require('path');

/************************************************************************/

module.exports = function(app, cb) {
    if (_.has(app.config.storage, 'module')) {
        app.logger.info('Configuring storage plugin: ' + app.config.storage.module);
        var plugin = require(
            path.join(__dirname, '../../plugins', app.config.storage.module)
        )(app);
        if (cb) cb();
    }
};