/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


module.exports = Backbone.Model.extend({
    defaults: {
        name:       '',
        username:   '',
        url:        '',
        prefs:      {
            admin:          false,
            defaultURL:     '/'
        },
        twoFactor:  '',
        remember:   true
    },
    url: '/v1/session',
    save: function(attributes, options) {
        this.unset('id', { silent: true });
        return Backbone.Model.prototype.save.call(this, attributes, options);
    },
    destroy: function(options) {
        this.set('id', 1, { silent: true });
        return Backbone.Model.prototype.destroy.call(this, options);
    }
});