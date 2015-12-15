/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


import React from           'react';
import ReactDOM from        'react-dom';
import CADView from         './views/cad';

/*************************************************************************/

module.exports = Backbone.Router.extend({
    routes: {
        '':                             '_landing',
        ':modelID':                     '_model',
        '*path':                        '_default'
    },
    initialize: function(options) {
        this.app = options.app;
    },

    _landing: function() {
        console.log('Landing path');
    },

    _model: function(modelID) {
        var self = this;
        // Render the root CAD view
        ReactDOM.render(<CADView
            manager={this.app.cadManager}
            viewContainerId='cadjs-view'
            root3DObject={this.app._root3DObject}
        />, document.getElementById('cadjs-view'), function() {
            // Dispatch setModel to the CADManager
            self.app.cadManager.dispatchEvent({
                type: 'setModel',
                path: modelID,
                baseURL: self.app._services.api_endpoint + self.app._services.version,
                modelType: 'assembly'
            });
        });
    },

    /************** Default Route ************************/

    _default: function(path) {
        console.log('Landed on default path ' + path);
    }
});