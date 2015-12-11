/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


// Necessary modules
require('./stylesheets/base.scss');
require('bootstrap-webpack');
var io              = require('socket.io-client'),
    Router          = require('./routes');
import CADManager from './models/cad_manager';

/*************************************************************************/

// Primary App class
var App  = function() {
    var self = this;
    // Get the supported services
    var $body = $('body');
    this._services = $body.data('services');
    this._config = $body.data('config');
    // Establish the global URL router
    this._router = new Router({ app: this });
    this.__defineGetter__('router', function() {
        return this._router;
    });
    // Create data manager
    this.cadManager = new CADManager();
    // Establish socket connection
    this.socket = io();
    // Connect to the socket server
    this.socket.on('connect', function() {
        console.log('Socket client connected');
    });

    // Begin routing the application
    var startRouting = function() {
        Backbone.history.start({ pushState: true });
        self._router.navigate(window.location.pathname, {trigger: true});
    };
    startRouting();
};

_.extend(App.prototype, Backbone.Events);

/*************************************************************************/

// Invoke the new app
module.exports = new App();