requirejs.config({
    baseUrl: "resources/js",
    paths: {
        backbone: "lib/backbone",
        "backbone.picky": "lib/backbone.picky",
        "backbone.syphon": "lib/backbone.syphon",
        "handlebars": "lib/handlebars",
        hbs: "lib/require-handlebars",
        jquery: "lib/jquery",
        json2: "lib/json2",
        'marionette': "lib/backbone.marionette",
//		tpl: "lib/tpl",
        text: "lib/text",
        underscore: "lib/underscore",
        'bootstrap': 'lib/bootstrap',
        'bootstrap-datepicker': 'lib/bootstrap-datepicker',
        'bootstrap-datetimepicker':'lib/bootstrap-datetimepicker',
        'backbone-validation-orig': 'lib/backbone-validation',
        'backbone-validation': 'lib/resthub/backbone-validation-ext',
        'bbGrid':'lib/bbGrid',
        'moment':'lib/moment'
    },
    shim: {                                          //para decir quien se importa primero
        backbone: {
            deps: ["jquery", "underscore", "json2"],
            exports: "Backbone"
        },
        'bootstrap-datepicker': {
            deps: [
                'jquery',
                'bootstrap'
            ],
            exports: "datepicker"
        },
        'bootstrap-datetimepicker': {
            deps: [
                'jquery',
                'bootstrap','moment'
            ],
            exports: "datetimepicker"
        },
        "handlebars": {
            exports: "Handlebars"
        },
        jquery: {
            exports: "$"
        },
        marionette: {
            deps: ["backbone"],
            exports: "Marionette"
        },
        underscore: {
            exports: "_"
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: "$.fn.popover"
        },
        'backbone-validation':{
            deps: ['backbone'],
            exports: "backbone-validation"
        },
        'bbGrid':{
            deps: ["backbone", "jquery", "bootstrap"],
            exports: "bbGrid"
        }

    },
    urlArgs: 'appversion=' + Math.round((Math.random() * 10000000000000))         //para que no se cachee en el navegador
});

require(["app"], function (ErzaManager) {
    ErzaManager.start();
});
