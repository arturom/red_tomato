/*global RedTomato, Backbone*/

RedTomato.Models = RedTomato.Models || {};

(function () {
    'use strict';

    RedTomato.Models.QueryAssembler = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            searchPhrase: 'red tomato'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },

        asElasticQuery: function(){
            return {
                query: {
                    filtered: {
                        query: {
                            bool: {
                                should: [
                                    {
                                        query_string: {
                                            query: this.get('searchPhrase'),
                                            lenient: true,
                                            fields: [
                                                'am_metadata.*',
                                                'AmAsset.id',
                                                'AmAsset.sha_hash_file',
                                                'AmAsset.title.searchable',
                                                'AmAsset.original_filename.searchable',
                                                'tags.searchable'
                                            ]
                                        }
                                    }

                                ]
                            }
                        },
                        filter: {
                            match_all: {}
                        }
                    }
                }
            };
        }
    });

})();
