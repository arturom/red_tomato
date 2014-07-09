/*global RedTomato, Backbone*/

RedTomato.Models = RedTomato.Models || {};

(function () {
    'use strict';

    RedTomato.Models.Result = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
