define(['backbone', 'apps/estado_condicion/form/model/estadoafp'], function (Backbone, EstadoAfpModel) {

    var EstadoAfp = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: EstadoAfpModel,
        url: 'api/estado_condicion/estadoafp'
    });
    return EstadoAfp;
});
