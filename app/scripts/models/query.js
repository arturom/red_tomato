/*global RedTomato, Backbone*/

RedTomato.Models = RedTomato.Models || {};

(function () {
    'use strict';

    RedTomato.Models.Query = Backbone.Model.extend({

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
