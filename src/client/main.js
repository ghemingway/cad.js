/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


// Necessary modules
var Session     = require('./models/session'),
    Router      = require('./routes'),
    CADjs       = require('./views/cad');

/*************************************************************************/

// Primary App class
var App  = function() {
    var self = this;
    // Get the supported services
    var $body = $('body');
    this._services = $body.data("services");
    this._config = $body.data("config");
    // Establish the global URL router
    this._router = new Router({ app: this });
    this.__defineGetter__('router', function() {
        return this._router;
    });
    // Establish the primary view object
    this._cad = new CADjs({
        viewContainerId: 'cadjs-view'
    });

    /*************************************************************************/

    // Establish the HTTP session
    this._session = new Session({});
    this.__defineGetter__('session', function () {
        return this._session;
    });

    var startRouting = function() {
        Backbone.history.start({pushState: true});
        self._router.navigate(window.location.pathname, {trigger: true});
    };

    this.on('setModel', function(req) {
        var basePath = this._services.api_endpoint + this._services.model + '/';
        self._cad.load(req.path, basePath);
    });

    // Handle the session management
    this.on('setSession', function (session) {
        self.user = _.pick(session, 'username');
        console.log('Session for user: ' + self.user.username);
    }, this);
    if (this._config.auth) {
        this._session.fetch().then(
            function (session) {
                self.trigger('setSession', session);
            },
            function () {
                self.trigger('logout');
            }
        ).always(startRouting);
    } else startRouting();

    /*************************************************************************/
};

_.extend(App.prototype, Backbone.Events);

/*************************************************************************/

// Invoke the new app
module.exports = new App();