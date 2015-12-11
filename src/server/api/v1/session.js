/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


var _               = require('lodash'),
    path            = require('path'),
    app;

/***************** Session Functions *******************/

/*
 * Authenticate every user --- very dangerous in production
 * @return {true} - Always
 */
var _auth = function(data, callback) {
    callback(true);
};

/*
 * Authenticate into a new session.
 *
 * @param {req.body.username} Username being logged into
 * @param {req.body.password} Password for the account
 * @return {200,username} Successful login yields the username
 */
var _login = function(req, res) {
    console.log('Session.login - should I be here?');
    var data = {
        username: req.body.username,
        password: req.body.password
    };
    var schema = Joi.object().keys({
        username:   Joi.string().lowercase().required(),
        password:   Joi.string().required()
    });
    Joi.validate(data, schema, { stripUnknown: true }, function (err, data) {
        if (err) {
            var message = err.details[0].message;
            app.logger.debug('Session.login validation failure: ' + message);
            res.status(400).send({ error: message });
        } else {
            // Call to auth user
            app._auth.auth(data, function(authed) {
                if (authed) {
                    // Regenerate session when signing in to prevent fixation
                    req.session.regenerate(function () {
                        req.session.cookie.expires = new Date(Date.now() + app.config.sessionCookieAge);
                        req.session.cookie.httpOnly = false;
                        req.session.user = data.username;
                        app.logger.debug('Session.login success: ' + data.username);
                        app.logger.debug('Session expiration set for: ' + req.session.cookie.expires);
                        res.status(200).send({
                            username:   data.username,
                            prefs:      {
                                admin:          false,
                                landingURL:     '/feed'
                            }
                        });
                    });
                } else {
                    res.status(401).send({ error: 'unauthorized' });
                }
            });
        }
    });
};

var _authenticated = function(req, res) {
    if (req.session.user) {
        app.logger.debug('Session.auth session for: ' + req.session.address);
        res.status(200).send({
            username:   req.session.username,
            prefs:      {
                admin:          false,
                landingURL:     '/feed'
            }
        });
    } else {
        res.status(401).send({ error: 'unauthorized' });
    }};

/*
 * Destroy the current session
 *
 * @return {204} If session destruction is successful, send no content
 */
var _logout = function(req, res) {
    console.log('Session.logout - should I be here?');
    if (req.session) {
        req.session.destroy(function () {
            res.status(204).end();
        });
    } else {
        res.status(200).end();
    }
};

/***************** Module Export Function *******************/

module.exports = function(globalApp) {
    app = globalApp;
    app._auth = {
        auth:           _auth,
        login:          _login,
        authenticated:  _authenticated,
        logout:         _logout
    };
    if (_.has(app.config.security, 'module')) {
        var plugin = require(
            path.join(__dirname, '../../plugins', app.config.security.module)
        )(app, app.config);
        // Set Auth plugin
        app._auth.auth = _.has(plugin, 'login') ? plugin.auth : app._auth.auth;
    }
    // Set routes
    app.router.post(   '/v1/session',  app._auth.login);
    app.router.get(    '/v1/session',  app._auth.authenticated);
    app.router.delete( '/v1/session',  app._auth.logout);
};