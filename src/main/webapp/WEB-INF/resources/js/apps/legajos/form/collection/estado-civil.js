define(['backbone', 'apps/legajos/form/model/estado-civil'], function (Backbone,EstCivil) {

    var EstadoCivil = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: EstCivil,
        url: 'api/legajos/EstadoCivil'
    });
    return EstadoCivil;
});

