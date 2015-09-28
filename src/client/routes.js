/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


 /*************************************************************************/

module.exports = Backbone.Router.extend({
    routes: {
        '':                             '_landing',
        '*path':                        '_default'
    },
    initialize: function(options) {
        this.app = options.app;
    },

    _landing: function() {
        console.log('Landing path');
    },

    /************** Default Route ************************/

    _default: function(modelPath) {
        //console.log('Triggering setModel: ' + modelPath);
        this.app.trigger('setModel', { path: modelPath });
        this.navigate(modelPath, { trigger: false });
    }
});