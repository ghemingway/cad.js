/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


var fs = require('fs'),
    _ = require('lodash');

/**********************************************************************************/

/*
 * Establish the configuration of the application
 *
 * @param {configFile} String of the path for the configuration file to be loaded
 * @param {environment} Which profile in the configuration file should be loaded
 * @return {config} The configuration for the given profile
 */
module.exports = function(configFile, environment) {
    var config = {};
    try {
        config = JSON.parse(fs.readFileSync(configFile, 'ascii'));
        config.env = environment;
        // Blend in the environment
        var env = config.environments[environment];
        delete config.environments;
        if (env) {
            _.each(_.keys(config),function(key) {
                if (typeof env[key] !== 'undefined') {
                    if (typeof config[key] === 'object') {
                        _.extend(config[key], env[key]);
                    } else {
                        config[key] = env[key];
                    }
                }
            });
        }
    } catch (err) {
        console.log('Error in node-configurator: %s', err);
        process.exit(-1);
        return config;
    }
    return config;
};