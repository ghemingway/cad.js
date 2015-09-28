/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


var crypto = require('crypto'),
    Joi = require('joi'),
    app;

/***************** Session Functions *******************/

/*
 * Get a file
 *
 * @param {req.body.username} Username being logged into
 * @param {req.body.password} Password for the account
 * @return {200,username} Successful login yields the username
 */
var _fetch = function(req, res) {
    res.status(200).send({ username: data.username });
};

/***************** Module Export Function *******************/

module.exports = function(config) {
    return {
        fetch: _fetch
    }
};