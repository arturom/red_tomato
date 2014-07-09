/*global RedTomato, Backbone*/

RedTomato.Collections = RedTomato.Collections || {};

(function () {
    'use strict';

    RedTomato.Collections.Results = Backbone.Collection.extend({

        model: RedTomato.Models.Results,
        ingestResults: function(data){
            var i, len, hits, results;
            if (!data.error && data.hits) {
                hits = data.hits.hits;
                results = [];
                i = 0;
                len = hits.length;
                for (; i<len; i++) {
                    results.push(new RedTomato.Models.Result(hits[i]));
                }
                this.reset(results);
            }
        }

    });

})();
