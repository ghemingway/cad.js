/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


// Necessary modules
require('./stylesheets/base.scss');
require('bootstrap-webpack');
var io              = require('socket.io-client'),
    jwtDecode       = require('jwt-decode'),
    Router          = require('./routes');
import CADManager from './models/cad_manager';

/*************************************************************************/

class CADApp extends THREE.EventDispatcher {
    constructor() {
        super();
        var $body = $('body');
        this.services = $body.data('services');
        this.config = $body.data('config');
        // Establish the global URL router
        this._router = new Router({ app: this });
        this.__defineGetter__('router', function() {
            return this._router;
        });
        // Set state
        this.state = {
            token: window.localStorage.getItem('user:token'),
            user: undefined
        };
        if (this.state.token) {
            this.handleLogin({ token: this.state.token });
        } else {
            this.addEventListener('user:login', this.handleLogin.bind(this));
        }

        // Setup socket
        this.socket = undefined;
        if (this.config.socket) {
            // Establish socket connection
            var socketURL = this.services.api_endpoint + this.services.socket;
            this.socket = io(socketURL, {});
            // Connect to the socket server
            this.socket.on('connect', function () {
                console.log('Socket client connected');
            });
        }
        // Create data manager
        this.cadManager = new CADManager(this.config, this.socket);

        // Initialize views
        $body.toggleClass('non-initialized');
        // Begin routing the application
        Backbone.history.start({ pushState: true });
    }

    handleLogin(ev) {
        // Set app state
        window.localStorage.setItem('user:token', ev.token);
        this.state.token = ev.token;
        this.state.user = jwtDecode(this.state.token);
        this.removeEventListener('user:login', this.handleLogin.bind(this));
        this.addEventListener('user:logout', this.handleLogout.bind(this));
    }

    handleLogout() {
        // Update logged out state
        window.localStorage.setItem('user:token', undefined);
        this.state.token = undefined;
        this.state.user = undefined;
        this.removeEventListener('user:logout', this.handleLogout.bind(this));
        this.addEventListener('user:login', this.handleLogin.bind(this));
    }
}

/*************************************************************************/

// Invoke the new app
module.exports = new CADApp();