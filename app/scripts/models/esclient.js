/*global RedTomato, Backbone*/

RedTomato.Models = RedTomato.Models || {};

(function () {
    'use strict';

    RedTomato.Models.Esclient = Backbone.Model.extend({

        url: '',

        initialize: function() {
            this.set({
                    results: new RedTomato.Collections.Results
            });
        },

        defaults: {
            hostPort: 'http://search.alpha.realtimeprocess.net:9200',
            results:  null
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },
        submitSearch: function(searchPath, query) {
            var self = this,
                url  = [this.get('hostPort'), searchPath, '_search'].join('/');
            $.ajax({
                    url: url,
                    type: "POST",
                    crossDomain: true,
                    data: JSON.stringify(query),
                    dataType: "json",
                    success: function(data) {
                        self.processResults(data);
                    },
                    error: function (xhr, status) {
                        alert("error");
                    }
            });
        },
        processResults: function(data){
            var results;
            console.log(this);
            results = this.get('results');
            results.ingestResults(data);
            console.log(data);
        }

    });

})();
