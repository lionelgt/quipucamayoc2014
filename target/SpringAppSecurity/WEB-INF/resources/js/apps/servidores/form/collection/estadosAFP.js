define(['backbone', 'apps/servidores/form/model/estadoAFP'], function (Backbone, EstadoAfp) {

    var EstadosAfp = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: EstadoAfp,
        url: 'rest/cas/serv/estadosafp'

    });
    return EstadosAfp;
});
