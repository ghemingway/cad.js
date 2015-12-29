/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


var Speakeasy           = require('speakeasy'),
    jwt                 = require('jsonwebtoken'),
    app, key;

/************************************************************************/

var _login = function(req, res) {
    // Build payload
    var payload = {
        username: req.body.username,
        hash: '205e460b479e2e5b48aec07710c08d50',
        admin: false
    };
    // Sign JWT - use HS512 as default if algorithm not specified
    var options = {
        algorithm: app.config.security.algorithm ? app.config.security.algorithm : 'HS512',
        expiresIn: app.config.security.token_expiration_s ? app.config.security.token_expiration_s : undefined,
        //identifier: uuid.v4()
        issuer: 'CADjs'
    };
    var key = new Buffer(app.config.security.key, 'base64');
    jwt.sign(payload, key, options, function(token) {
        res.status(201).send({ token: token });
    });
};

var _register = function(req, res) {
    var code = Speakeasy.generate_key({ length: 20, google_auth_qr: true });
    res.status(201).send({
        username: req.body.username,
        address: req.body.address,
        two_factor: code.google_auth_qr
    });
};

var _validateUser = function(req, res, next) {
    var self = this;
    // If no auth, pass things along
    if (!this.config.security.auth) {
        req.auth = {};
        next();
    // Validate JWT appropriately
    } else {
        var options = {
            algorithms: [ this.config.security.algorithm ? this.config.security.algorithm : 'HS512' ],
            issuer: 'CADjs'
        };
        jwt.verify(req.headers.authorization, key, options, function(err, payload) {
            if (err) {
                self.logger.warn('ValidateUser error: ' + err.message);
                res.status(403).send({ error: 'Unauthorized' });
            } else {
                // Pass things along - do we need to attach data?
                req.auth = payload;
                next();
            }
        });
    }
};

var _authorizeUser = function(userId, task, cb) {
    cb();
};

/************************************************************************/

module.exports = function(globalApp) {
    app = globalApp;
    app.logger.info('\tSetting User-Validation function');
    app.logger.info('\tSetting User-Authorization function');
    app.auth = {
        validateUser: _validateUser.bind(app),
        authorizeUser: _authorizeUser.bind(app)
    };
    key = new Buffer(app.config.security.key, 'base64');
    app.router.post('/v1/user',             _register);
    app.router.post('/v1/user/login',       _login);
};