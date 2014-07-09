/*global RedTomato, $*/

window.RedTomato = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},

    init: function () {
        'use strict';
        var esclient, queryAssembler;
        esclient = new this.Models.Esclient,
        queryAssembler = new this.Models.QueryAssembler;
        esclient.submitSearch('walmart_entities/amasset', queryAssembler.asElasticQuery());
    }
};

$(document).ready(function () {
    'use strict';
    RedTomato.init();
});

