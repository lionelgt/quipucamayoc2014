define(['backbone', 'apps/servidores/form/model/servidorestado'], function (Backbone, ServidorEstado) {

    var ServidorEstados = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: ServidorEstado,
        url: 'rest/cas/serv/estadosservidor'

    });
    return ServidorEstados;
});