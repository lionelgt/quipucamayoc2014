define(['backbone'], function (Backbone) {

    var EstadoCivil = Backbone.Model.extend({
        defaults: {
            name: 'default'
        }
    });

    return EstadoCivil;
});
